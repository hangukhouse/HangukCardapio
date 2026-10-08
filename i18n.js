// Traduções do cardápio (inglês e coreano). O português é o idioma original (vem do Goomer).
//
// Como funciona:
// - Produtos: chave = nome original em minúsculas, sem espaços duplicados.
//     n  = nome traduzido (en, ko). Sem "n", o inglês usa a parte em português/romanizada
//          do nome e o coreano usa a parte em hangul.
//     d  = descrição traduzida (en, ko).
//     dh = "impressão digital" da descrição original. Se a descrição for editada no Goomer,
//          a tradução deixa de valer e a página mostra o texto em português (com aviso no console).
// - Opções de preço (tamanhos, sabores) ficam em OPCOES, pelo nome original.
// - Grupos ficam em GRUPOS, pelo group_id.
// - Item sem tradução aparece em português.
// Revisão do coreano por alguém da equipe é recomendada antes de imprimir.

const I18N = {
  ui: {
    pt: {
      htmlLang: 'pt-BR', title: 'Hanguk House - Cardápio',
      checking: 'Verificando...', search: 'Buscar no cardápio...', loading: 'Carregando cardápio...',
      error: 'Erro ao carregar cardápio. Tente novamente.',
      alwaysOpen: 'Sempre aberto', openNow: 'Aberto agora', closed: 'Fechado',
      from: 'a partir de ', fromSuffix: '', options: opcoes => `${opcoes} opções`,
      range: (a, b) => `${a} a ${b}`,
      map: 'Ver no mapa', noDesc: 'Sem descrição disponível.', ask: 'Consultar', single: 'Único',
      tagline: 'Hanguk House — Comida Coreana Autêntica'
    },
    en: {
      htmlLang: 'en', title: 'Hanguk House - Menu',
      checking: 'Checking...', search: 'Search the menu...', loading: 'Loading menu...',
      error: 'Could not load the menu. Please try again.',
      alwaysOpen: 'Always open', openNow: 'Open now', closed: 'Closed',
      from: 'from ', fromSuffix: '', options: opcoes => `${opcoes} options`,
      range: (a, b) => `${a} to ${b}`,
      map: 'View on map', noDesc: 'No description available.', ask: 'Ask staff', single: 'Single',
      tagline: 'Hanguk House: Authentic Korean Food'
    },
    ko: {
      htmlLang: 'ko', title: 'Hanguk House - 메뉴',
      checking: '확인 중...', search: '메뉴 검색...', loading: '메뉴를 불러오는 중...',
      error: '메뉴를 불러오지 못했습니다. 다시 시도해 주세요.',
      alwaysOpen: '항상 영업', openNow: '영업 중', closed: '영업 종료',
      from: '', fromSuffix: ' 부터', options: opcoes => `${opcoes}가지 옵션`,
      range: (a, b) => `${a}~${b}`,
      map: '지도 보기', noDesc: '설명이 없습니다.', ask: '직원에게 문의', single: '단일',
      tagline: 'Hanguk House: 정통 한식'
    }
  },

  dias: {
    en: { Dom: 'Sun', Seg: 'Mon', Ter: 'Tue', Qua: 'Wed', Qui: 'Thu', Sex: 'Fri', Sab: 'Sat', 'Sáb': 'Sat' },
    ko: { Dom: '일', Seg: '월', Ter: '화', Qua: '수', Qui: '목', Sex: '금', Sab: '토', 'Sáb': '토' }
  },

  GRUPOS: {
    734674: { en: 'Starters', ko: '에피타이저' },
    735010: { en: 'Main Dishes', ko: '메인 요리' },
    735476: { en: 'Noodles', ko: '면 요리' },
    734715: { en: 'Grill (Outdoor Area)', ko: '그릴 (야외석)' },
    735415: { en: 'Stews', ko: '찌개' },
    735820: { en: 'Desserts', ko: '디저트' },
    735465: { en: 'Extras', ko: '추가 메뉴' },
    321366: { en: 'Drinks', ko: '음료' },
    321365: { en: 'Alcoholic Drinks (18+)', ko: '주류 (18세 이상)' }
  },

  OPCOES: {
    'inteiro (380g)': { en: 'Whole (380g)', ko: '전체 (380g)' },
    'meia-porção (190g)': { en: 'Half portion (190g)', ko: '반 인분 (190g)' },
    'inteiro (400g)': { en: 'Whole (400g)', ko: '전체 (400g)' },
    'meia-porção (200g)': { en: 'Half portion (200g)', ko: '반 인분 (200g)' },
    'inteiro': { en: 'Whole', ko: '전체' },
    'meia porção': { en: 'Half portion', ko: '반 인분' },
    'bovino 6 un.': { en: 'Beef, 6 pcs', ko: '소고기 6개' },
    'bovino 12 un.': { en: 'Beef, 12 pcs', ko: '소고기 12개' },
    'suíno com nirá 6un.': { en: 'Pork with garlic chives, 6 pcs', ko: '돼지고기 부추 6개' },
    'suíno com nirá 12un.': { en: 'Pork with garlic chives, 12 pcs', ko: '돼지고기 부추 12개' },
    'tradicional': { en: 'Traditional', ko: '기본' },
    'vegano': { en: 'Vegan', ko: '비건' },
    'vegetariano': { en: 'Vegetarian', ko: '채식' },
    'jaeyook bokum': { en: 'Jaeyook Bokum (spicy pork)', ko: '제육볶음' },
    'bulgogi': { en: 'Bulgogi', ko: '불고기' },
    'normal': { en: 'Regular', ko: '기본' },
    'meia tteok 200g + 55g lamyeon': { en: 'Half: 200g tteok + 55g ramyeon', ko: '반 인분: 떡 200g + 라면 55g' },
    'inteiro tteok 400g + 110g lamyeon': { en: 'Whole: 400g tteok + 110g ramyeon', ko: '전체: 떡 400g + 라면 110g' },
    '70g': { en: '70g', ko: '70g' },
    '100g': { en: '100g', ko: '100g' },
    '고추장 - gochujang': { en: 'Gochujang', ko: '고추장' },
    '참기름 - óleo de gergelim': { en: 'Sesame oil', ko: '참기름' },
    '쌈장 - ssamjang': { en: 'Ssamjang', ko: '쌈장' },
    'coca-cola': { en: 'Coca-Cola', ko: '코카콜라' },
    'fanta uva': { en: 'Fanta Grape', ko: '환타 포도' },
    'fanta laranja': { en: 'Fanta Orange', ko: '환타 오렌지' },
    'guaraná antartica': { en: 'Guaraná Antarctica', ko: '과라나 안타르치카' },
    'água tônica': { en: 'Tonic water', ko: '토닉워터' },
    'água normal': { en: 'Still water', ko: '생수' },
    'água com gás': { en: 'Sparkling water', ko: '탄산수' },
    'del valle uva': { en: 'Del Valle Grape', ko: '델 발레 포도' },
    'del valle pêssego': { en: 'Del Valle Peach', ko: '델 발레 복숭아' },
    'del valle maracujá': { en: 'Del Valle Passion Fruit', ko: '델 발레 패션프루트' },
    'del valle manga': { en: 'Del Valle Mango', ko: '델 발레 망고' },
    'matte natural': { en: 'Mate tea, natural', ko: '마테차 (오리지널)' },
    'matte limão': { en: 'Mate tea, lemon', ko: '마테차 (레몬)' },
    'ice tea pêssego': { en: 'Peach iced tea', ko: '복숭아 아이스티' },
    'guaraná zero': { en: 'Guaraná Zero', ko: '과라나 제로' },
    'sprite': { en: 'Sprite', ko: '스프라이트' },
    'refrigerantes coreanos': { en: 'Korean sodas', ko: '한국 탄산음료' },
    'bombom pêssego grande': { en: 'Bombom Peach (large)', ko: '봉봉 복숭아 (대)' },
    'bombom uva': { en: 'Bombom Grape', ko: '봉봉 포도' },
    'coco palm': { en: 'Coco Palm', ko: '코코팜' },
    'okf sabores': { en: 'OKF (various flavors)', ko: 'OKF (맛 선택)' },
    'chá grande sabores': { en: 'Tea, large (various flavors)', ko: '차 대 (맛 선택)' },
    'chá pequeno sabores': { en: 'Tea, small (various flavors)', ko: '차 소 (맛 선택)' },
    'heineken zero': { en: 'Heineken Zero', ko: '하이네켄 제로' },
    'heineken': { en: 'Heineken', ko: '하이네켄' },
    'clássico': { en: 'Classic', ko: '클래식' },
    'saborizado': { en: 'Flavored', ko: '과일맛' },
    'makgeolli': { en: 'Makgeolli', ko: '막걸리' }
  },

  PRODUTOS: {
    '반찬 오첩 - banchan combo': {
      n: { en: 'Banchan Combo (5 side dishes)' },
      d: {
        en: 'Combo of 5 traditional seasonal side dishes (banchan).',
        ko: '제철 전통 반찬 5가지 세트입니다.'
      }, dh: '1tnfd8d'
    },
    '김치전 - kimchi jeon': {
      n: { en: 'Kimchi Jeon (Kimchi Pancake)' },
      d: {
        en: 'Korean kimchi pancake.',
        ko: '김치를 넣어 부친 한국식 전입니다.'
      }, dh: '81wbu'
    },
    '해물파전 - haemul pajeon': {
      n: { en: 'Haemul Pajeon (Seafood Scallion Pancake)' },
      d: {
        en: 'Scallion pancake with seafood (shrimp, squid and mussels).\n*Served with seasoned soy sauce.',
        ko: '해산물(새우, 오징어, 홍합)을 넣은 파전입니다.\n*양념간장이 함께 나옵니다.'
      }, dh: '1a8o425'
    },
    '떡볶이 - topokki': {
      n: { en: 'Topokki (Spicy Rice Cakes)' },
      d: {
        en: 'Tteok (traditional Korean rice cakes) stir-fried with Korean chili paste and vegetables.',
        ko: '떡을 고추장과 채소와 함께 볶은 요리입니다.'
      }, dh: 'krxlfy'
    },
    '만두 - mandu': {
      n: { en: 'Mandu (Dumplings)' },
      d: {
        en: 'Fried dumplings with a vegetable-based filling. Available with beef or pork added for flavor.',
        ko: '채소 속을 채워 튀긴 만두입니다. 소고기 또는 돼지고기 중에서 선택할 수 있습니다.'
      }, dh: 'qxd1y8'
    },
    '김밥 - kimbap': {
      n: { en: 'Kimbap' },
      d: {
        en: 'Seaweed roll with rice, egg, vegetables, mortadella and meat.\n*Vegetarian and vegan options available.\nWe also have special Kimbap flavors: JAEYOOK BOKUM and BULGOGI.',
        ko: '김에 밥, 계란, 채소, 모르타델라 햄, 고기를 넣어 만 김밥입니다.\n*채식 및 비건 옵션이 있습니다.\n스페셜 김밥도 있습니다: 제육볶음, 불고기.'
      }, dh: 'jumtek'
    },
    '떡볶이 - topokki de queijo': {
      n: { en: 'Cheese Topokki', ko: '치즈 떡볶이' },
      d: {
        en: 'Our fan favorite Topokki filled with cheese, stir-fried with Korean chili paste and vegetables.\nPortion: 300g.',
        ko: '저희 인기 메뉴인 떡볶이에 치즈를 넣어 고추장, 채소와 함께 볶았습니다.\n양: 300g'
      }, dh: '1negoba'
    },
    '불고기 - bulgogi': {
      n: { en: 'Bulgogi' },
      d: {
        en: 'Grilled beef marinated in soy sauce, with vegetables and sesame.\n* Whole: comes with 2 portions of rice\nHalf portion: comes with 1 portion of rice',
        ko: '간장 양념에 재운 소고기를 채소, 참깨와 함께 구운 요리입니다.\n* 전체 양: 밥 2공기 포함\n반 인분: 밥 1공기 포함'
      }, dh: 'ot19cw'
    },
    '닭갈비 - dakgalbi': {
      n: { en: 'Dakgalbi' },
      d: {
        en: 'Chicken marinated in gochujang (chili paste) with vegetables and greens.\n\n* Whole: comes with 2 portions of rice\nHalf portion: comes with 1 portion of rice',
        ko: '고추장에 재운 닭고기를 채소와 함께 볶은 요리입니다.\n\n* 전체 양: 밥 2공기 포함\n반 인분: 밥 1공기 포함'
      }, dh: '1t2fism'
    },
    '제육볶음 - jaeyook bokum': {
      n: { en: 'Jaeyook Bokum (Stir-fried Pork)' },
      d: {
        en: 'Pork belly marinated in gochujang (chili paste), with vegetables.\n\n* Whole: comes with 2 portions of rice\nHalf portion: comes with 1 portion of rice',
        ko: '고추장에 재운 삼겹살을 채소와 함께 볶은 요리입니다.\n\n* 전체 양: 밥 2공기 포함\n반 인분: 밥 1공기 포함'
      }, dh: 'gdo6'
    },
    '닭강정 - dakgangjeong': {
      n: { en: 'Dakgangjeong (Crispy Fried Chicken)' },
      d: {
        en: 'Our fan favorite: crispy fried chicken with a spicy and sweet sauce, with a touch of peanuts.\n* Whole: comes with 2 portions of rice\nHalf portion: comes with 1 portion of rice',
        ko: '저희 인기 메뉴입니다. 바삭하게 튀긴 닭고기에 맵고 달콤한 소스와 땅콩을 곁들였습니다.\n* 전체 양: 밥 2공기 포함\n반 인분: 밥 1공기 포함'
      }, dh: 'r1wm2y'
    },
    '잡채 - japchae': {
      n: { en: 'Japchae (Glass Noodles)' },
      d: {
        en: '530g of traditional glass noodles made from sweet potato, seasoned with sesame oil, soy sauce and vegetables.\n\nFun fact:\nJapchae was first made in the early 17th century, when the Joseon Dynasty ruled the Korean peninsula. King Gwanghaegun held a great feast in his palace, and one of his vassals, Yi Chung, created this dish to please the king\'s palate. The king liked it so much that he rewarded him with a promotion to the position of Hojo panseo (Hangul: 호조판서, equivalent to Treasury Secretary).',
        ko: '고구마 전분으로 만든 전통 당면 530g을 참기름, 간장, 채소로 버무린 요리입니다.\n\n알아두면 좋은 이야기:\n잡채는 조선 시대인 17세기 초에 처음 만들어졌습니다. 광해군이 궁궐에서 큰 잔치를 열었을 때, 신하 이충이 왕의 입맛을 즐겁게 하려고 이 요리를 만들었습니다. 왕이 매우 흡족해하여 그를 호조판서(오늘날의 재무장관에 해당)로 승진시켰다고 합니다.'
      }, dh: '13yt3fa'
    },
    '돌솥비빔밥 - dolsot bibimbap': {
      n: { en: 'Dolsot Bibimbap' },
      d: {
        en: 'Mixed rice with vegetables, shiitake mushrooms and beef, with traditional gochujang sauce.\n* Option with fried egg or vegan\n\nTip: Mix well to enjoy the true flavor of the dish!',
        ko: '채소, 표고버섯, 소고기를 올린 비빔밥에 전통 고추장 소스를 곁들입니다.\n* 계란프라이 또는 비건 옵션 선택 가능\n\n팁: 잘 비벼 드셔야 진짜 맛을 느낄 수 있습니다!'
      }, dh: 'f9i3x8'
    },
    '돌솥불고기비빔밥 - dolsot bulgogi bibimbap': {
      n: { en: 'Dolsot Bulgogi Bibimbap' },
      d: {
        en: 'Mixed rice with vegetables, shiitake mushrooms and bulgogi. Traditional gochujang sauce served on the side.\n\nTip: Mix well to enjoy the true flavor of the dish!',
        ko: '채소, 표고버섯, 불고기를 올린 비빔밥입니다. 전통 고추장 소스는 따로 나옵니다.\n\n팁: 잘 비벼 드셔야 진짜 맛을 느낄 수 있습니다!'
      }, dh: 'tws40t'
    },
    '비빔밥 - bibimbap': {
      n: { en: 'Bibimbap' },
      d: {
        en: 'Mixed rice with vegetables, shiitake mushrooms and beef, with traditional gochujang sauce.\n* Option with fried egg or vegan\n\nTip: Mix well to enjoy the true flavor of the dish!',
        ko: '채소, 표고버섯, 소고기를 올린 비빔밥에 전통 고추장 소스를 곁들입니다.\n* 계란프라이 또는 비건 옵션 선택 가능\n\n팁: 잘 비벼 드셔야 진짜 맛을 느낄 수 있습니다!'
      }, dh: 'f9i3x8'
    },
    '김치 볶음밥 - kimchi bokumbap': {
      n: { en: 'Kimchi Bokumbap (Kimchi Fried Rice)' },
      d: {
        en: 'Fried rice with kimchi, finely chopped pork belly and vegetables.',
        ko: '김치, 잘게 썬 삼겹살, 채소를 넣고 볶은 볶음밥입니다.'
      }, dh: '1rrxoa3'
    },
    '짜장면 - jajangmyeon': {
      n: { en: 'Jajangmyeon (Black Bean Noodles)' },
      d: {
        en: 'Noodles in a sauce made from chunjang (춘장, Korean black bean paste) with vegetables and stir-fried minced pork.\nFun fact:\nJajangmyeon is the Korean version of the Chinese dish zhajiangmian (炸酱面), which was introduced in 1905 at Gonghwachun (공화춘), a Chinese restaurant in Incheon Chinatown run by an immigrant from China\'s Shandong province. The restaurant is now the Jajangmyeon Museum.',
        ko: '춘장 소스에 채소와 볶은 다진 돼지고기를 넣은 면 요리입니다.\n알아두면 좋은 이야기:\n짜장면은 중국 요리 짜장미엔(炸酱面)을 한국식으로 바꾼 음식으로, 1905년 인천 차이나타운의 중국 음식점 공화춘에서 소개되었습니다. 이 식당은 중국 산둥성 출신 이민자가 운영했으며, 지금은 짜장면박물관이 되었습니다.'
      }, dh: '1lzk60f'
    },
    '비빔국수 - bibimguksu': {
      n: { en: 'Bibimguksu (Mixed Noodles)' },
      d: {
        en: 'Thin noodles with vegetables and kimchi, mixed with gochugaru (chili flakes) and gochujang sauce.',
        ko: '가는 국수에 채소와 김치를 올리고 고춧가루와 고추장 양념에 비벼 먹는 요리입니다.'
      }, dh: '8m04jd'
    },
    '라면 - lamyeon': {
      n: { en: 'Lamyeon (Instant Noodles)' },
      d: {
        en: 'House-style instant noodles.',
        ko: '저희 가게 스타일로 끓인 라면입니다.'
      }, dh: '1vi53w0'
    },
    'lapokki': {
      n: { en: 'Lapokki', ko: '라볶이' },
      d: {
        en: 'Tteok (traditional Korean rice cakes) + ramyeon (instant noodles) stir-fried with Korean chili paste, vegetables and cheese.',
        ko: '떡과 라면을 고추장, 채소, 치즈와 함께 볶은 요리입니다.'
      }, dh: 'xly8rv'
    },
    '삼겹살 그릴 - samgyupsal grill': {
      n: { en: 'Samgyupsal Grill (Pork Belly)' },
      d: {
        en: 'Pork belly, traditional Korean cut.\n* Comes with 2 portions of rice, lettuce, seasoned scallions and ssamjang (traditional paste for wrapping in leaves)\n(Pre-prepared to be cooked on the grill in the outdoor area)',
        ko: '한국 전통 방식으로 자른 삼겹살입니다.\n* 밥 2공기, 상추, 파채무침, 쌈장(쌈 싸 먹는 전통 양념장) 포함\n(야외 구역의 그릴에서 직접 구워 드실 수 있도록 미리 준비된 메뉴입니다)'
      }, dh: '1pdmpx0'
    },
    '믹스 그릴 - mix grill': {
      n: { en: 'Mix Grill' },
      d: {
        en: 'Half portion of Bulgogi Grill and half portion of Samgyupsal Grill.\n* Comes with 2 portions of rice, lettuce, seasoned scallions and ssamjang (traditional paste for wrapping in leaves)\n(Pre-prepared to be cooked on the grill in the outdoor area)',
        ko: '불고기 그릴 반 인분과 삼겹살 그릴 반 인분 구성입니다.\n* 밥 2공기, 상추, 파채무침, 쌈장(쌈 싸 먹는 전통 양념장) 포함\n(야외 구역의 그릴에서 직접 구워 드실 수 있도록 미리 준비된 메뉴입니다)'
      }, dh: 'qqh3tm'
    },
    '불고기 그릴 - bulgogi grill': {
      n: { en: 'Bulgogi Grill' },
      d: {
        en: 'Beef marinated in soy sauce with vegetables and sesame.\n* Comes with 2 portions of rice\n(Pre-prepared to be cooked on the grill in the outdoor area)',
        ko: '간장 양념에 재운 소고기를 채소, 참깨와 함께 준비했습니다.\n* 밥 2공기 포함\n(야외 구역의 그릴에서 직접 구워 드실 수 있도록 미리 준비된 메뉴입니다)'
      }, dh: '1ccobnm'
    },
    '김치 찌개 - kimchi chigae': {
      n: { en: 'Kimchi Chigae (Kimchi Stew)' },
      d: {
        en: 'Kimchi stew with pork and tofu.\nAvailable in half and whole portions.\n* Comes with 1 or 2 portions of rice',
        ko: '돼지고기와 두부를 넣은 김치찌개입니다.\n반 인분과 전체 양 중에서 선택할 수 있습니다.\n* 밥 1공기 또는 2공기 포함'
      }, dh: '1mibqv1'
    },
    '된장 찌개 - doenjang chigae': {
      n: { en: 'Doenjang Chigae (Soybean Paste Stew)' },
      d: {
        en: 'Stew of doenjang (된장, fermented soybean paste) with beef, vegetables and tofu.\nAvailable in half and whole portions. * Comes with 1 or 2 portions of rice',
        ko: '된장에 소고기, 채소, 두부를 넣고 끓인 찌개입니다.\n반 인분과 전체 양 중에서 선택할 수 있습니다. * 밥 1공기 또는 2공기 포함'
      }, dh: '1ktwtr9'
    },
    'chocopie icecream!': {
      n: { en: 'Chocopie Ice Cream', ko: '초코파이 아이스크림' },
      d: {
        en: 'ChocoPie with cream ice cream topped with peanut pieces, sprinkles and chocolate sauce.',
        ko: '초코파이에 크림 아이스크림을 올리고 땅콩 조각, 스프링클, 초콜릿 소스를 곁들인 디저트입니다.'
      }, dh: '18lamwj'
    },
    '고구마맛탕 - matang': {
      n: { en: 'Matang (Candied Sweet Potato)' },
      d: {
        en: 'Pieces of sweet potato caramelized Korean style.',
        ko: '한국식으로 캐러멜 코팅한 고구마 조각입니다.'
      }, dh: '20rp8s'
    },
    '김치 - kimchi': {
      n: { en: 'Kimchi' },
      d: { en: '1 portion of kimchi.', ko: '김치 1인분입니다.' }, dh: 't7haz0'
    },
    '상추 - alface': {
      n: { en: 'Lettuce' },
      d: { en: '1 portion of lettuce.', ko: '상추 1인분입니다.' }, dh: 'u8uoo5'
    },
    '밥 - arroz': {
      n: { en: 'Rice' },
      d: { en: '1 portion (110g) of Korean rice.', ko: '한국식 쌀밥 1공기(110g)입니다.' }, dh: '10cr9wu'
    },
    'molhos individuais': {
      n: { en: 'Individual Sauces', ko: '개별 소스' },
      d: {
        en: 'Available sauces:\n-Gochujang (imported Korean chili paste condiment)\n-Sesame oil with salt and black pepper\n-Ssamjang (condiment made from a mix of fermented soybean paste (doenjang) and red chili paste (gochujang), sesame oil, garlic and onion)',
        ko: '제공되는 소스:\n-고추장 (수입 한국 고추장)\n-참기름 (소금, 후추 포함)\n-쌈장 (된장과 고추장에 참기름, 마늘, 양파를 섞어 만든 양념장)'
      }, dh: 'j629b1'
    },
    'refrigerantes': {
      n: { en: 'Soft Drinks', ko: '청량음료' }
    },
    'importadas': {
      n: { en: 'Imported Drinks', ko: '한국 수입 음료' },
      d: { en: 'Imported Korean drinks.', ko: '수입 한국 음료입니다.' }, dh: '1s9jn31'
    },
    'heineken longneck': {
      n: { en: 'Heineken Longneck', ko: '하이네켄 롱넥' },
      d: {
        en: 'Sale and consumption prohibited for persons under 18. Please drink responsibly.',
        ko: '18세 미만에게는 판매 및 음주가 금지되어 있습니다. 과음하지 마세요.'
      }, dh: 'b8cwx6'
    },
    '소주 - soju': {
      n: { en: 'Soju' },
      d: {
        en: 'Korean distilled alcoholic beverage.\n*Please check the available flavors and brands with staff.',
        ko: '한국 증류주입니다.\n*제공 가능한 맛과 브랜드는 직원에게 확인해 주세요.'
      }, dh: '1qe6jr0'
    },
    'makgeolli': {
      n: { en: 'Makgeolli', ko: '막걸리' },
      d: { en: 'Korean rice wine.', ko: '한국의 쌀 발효주(쌀 와인)입니다.' }, dh: '277u1z'
    }
  }
};
