#!/bin/bash
# Script para atualizar os dados do cardápio Hanguk House
# Executa as chamadas à API do Goomer e atualiza data.js

SLUG="hanguk-house"
DIR="$(cd "$(dirname "$0")" && pwd)"

echo "🔄 Atualizando dados do cardápio Hanguk House..."

# Baixar menu local (QR code)
echo "  📥 Baixando cardápio (localmenu)..."
curl -s "https://mobile.goomer.app/webmenu/${SLUG}/localmenu" > "${DIR}/hanguk_localmenu.json"

# Baixar menu delivery
echo "  📥 Baixando cardápio (delivery)..."
curl -s "https://mobile.goomer.app/webmenu/${SLUG}/menu" > "${DIR}/hanguk_menu.json"

# Baixar settings da loja
echo "  📥 Baixando dados da loja..."
curl -s "https://${SLUG}.goomer.app/" | python3 -c "
import json, sys, re
html = sys.stdin.read()
match = re.search(r'__NEXT_DATA__.*?>(.*?)</script>', html)
if match:
    data = json.loads(match.group(1))
    settings = data['props']['pageProps']['settings']
    print(json.dumps(settings, indent=2, ensure_ascii=False))
" > "${DIR}/hanguk_settings.json"

# Gerar data.js embutido
echo "  ⚙️  Gerando data.js..."
python3 -c "
import json

with open('${DIR}/hanguk_localmenu.json') as f:
    menu = json.load(f)
with open('${DIR}/hanguk_settings.json') as f:
    settings = json.load(f)

essential = {
    'name': settings.get('name'),
    'address': settings.get('address'),
    'mm_logo_url': settings.get('mm_logo_url'),
    'mm_whatsapp_phone_number': settings.get('mm_whatsapp_phone_number'),
    'mm_operating_hours': settings.get('mm_operating_hours'),
    'mm_always_open': settings.get('mm_always_open'),
    'mm_store_closed': settings.get('mm_store_closed'),
    'mm_temporarily_closed': settings.get('mm_temporarily_closed'),
}

print('// Atualizado em: $(date -Iseconds)')
print('const EMBEDDED_MENU = ' + json.dumps(menu, ensure_ascii=False) + ';')
print('const EMBEDDED_SETTINGS = ' + json.dumps(essential, ensure_ascii=False) + ';')
" > "${DIR}/data.js"

# Resumo
TOTAL=$(python3 -c "import json; f=open('${DIR}/hanguk_localmenu.json'); d=json.load(f); print(len(d.get('products',[])))")
echo ""
echo "✅ Dados atualizados com sucesso!"
echo "   📦 Total de produtos no menu local: ${TOTAL}"
echo "   📄 Arquivos atualizados:"
echo "      - hanguk_localmenu.json"
echo "      - hanguk_menu.json"
echo "      - hanguk_settings.json"
echo "      - data.js"
