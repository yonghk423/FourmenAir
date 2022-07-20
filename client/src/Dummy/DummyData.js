const DummyData = [
  {
    id: 0,
    mainurl:
      'https://cdn.discordapp.com/attachments/894796696494682135/897018051671785512/android-chrome-192x192.png',
  },
  {
    id: 1,
    url: 'http://san.chosun.com/site/data/img_dir/2020/09/23/2020092302695_0.jpg',
    params: {
      postId: 'geonyeong',
    },
    data: {
      local: '서울',
      season: 'spring',
    },
    title: '차박은 역시는 봄에',
    postcontents:
      '끝없이 이어지는 강렬한 붉은 색감! 남한강과 소백산 자락이 빚어내는 황홀한 풍경에 단풍까지 끼얹은 충북의 가을. 이곳은 랜선이 아니더라도 차 안에서 보다 안전하게 즐기실 수 있습니다.',
  },
  {
    id: 2,
    url: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202104/02/904b07a7-6490-4d54-ad26-3d19e2e75c03.jpg',
    params: {
      postId: 'geonyeong',
    },
    data: {
      local: '서울',
      season: 'spring',
    },
    title: '단도직입적으로 묻는다 떠나라! 가까운 곳으로',
    postcontents:
      '지는 해와 맞닿아 있는 이곳은 해 질 무렵 빛을 발하는 석양과, 그 밑에 그려지는 붉은 단풍이 가득한 S자 모양의 고갯길의 조화가 더욱 환상적으로 느껴집니다.',
  },
  {
    id: 3,
    url: 'https://img.hankyung.com/photo/202101/AD.25068139.1.jpg',
    params: {
      postId: 'geonyeong',
    },
    data: {
      local: '서울',
      season: 'spring',
    },
    title: '봄봄봄~ 봄이왔어요~',
    postcontents:
      '수려한 자연속에서 지친 몸과 마음을 달래줄 평화로운 바람 소리가 들려오는, 봄뿐 아니라 사시사철 수려한 경관을 자랑하는 차박 명소!',
  },
  {
    id: 4,
    url: 'https://file.mk.co.kr/meet/neds/2020/08/image_readtop_2020_815293_15969313574309348.jpg',
    params: {
      postId: 'geonyeong',
    },
    data: {
      local: '경기',
      season: 'summer',
    },
    title: '밖은 위험해.. 차로 숨자!',
    postcontents:
      '여름에도 시원한 바람이 불어오는 차박 명당 자리!! 녹색 잔디에 돗자리를 깔고 맑은 여름 하늘을 보며 놀고 싶은 마음이 들었습니다.',
  },
  {
    id: 5,
    url: 'https://cdn.newscj.com/news/photo/202007/newscj_%EC%B2%9C%EC%A7%80%EC%9D%BC%EB%B3%B4_761794_794639_2954.jpg',
    params: {
      postId: 'geonyeong',
    },
    data: {
      local: '경기',
      season: 'summer',
    },
    title: '이 더운데 어딜가?! 차에 콕 박혀있자!',
    postcontents:
      '차 뒷자석에 앉아 석양의 절경을 감상하고 사랑하는 연인과 간절한 마음으로 소원을 빌면 하나쯤은 이루어진다고 하니 오시면 꼭 소원 빌어 보세요.',
  },
  {
    id: 6,
    url: 'http://www.kyongbuk.co.kr/news/photo/202007/2045545_461229_5154.jpg',
    params: {
      postId: 'geonyeong',
    },
    data: {
      local: '경기',
      season: 'summer',
    },
    title: '시원한 바람 부는 산속에서 여름나기!',
    postcontents:
      '물? 자리? 아무 것도 걱정할 필요 없다!! 차박하고 싶은 사람들을 위한 차박 촌! 여름에도 HOT하다 HOT해!!',
  },
  {
    id: 7,
    url: 'https://pds.joins.com/news/component/htmlphoto_mmdata/202010/13/da22cf0e-7ade-4d53-a670-e812571506b1.jpg',
    params: {
      postId: 'jeonghoon',
    },
    data: {
      local: '강원',
      season: 'fall',
    },
    title: '진정한 차박은 가을이랄..까..?',
    postcontents:
      '코로나19 확산으로 ‘비대면 여행’이 트랜드로 자리 잡으면서 캠핑 여행의 수요가 부쩍 늘어서 캠핑 장비를 사긴 했는데... 가을엔 어떤 장소로 떠나는 게 좋을까?',
  },
  {
    id: 8,
    url: 'http://san.chosun.com/site/data/img_dir/2020/09/23/2020092302695_1.jpg',
    params: {
      postId: 'jeonghoon',
    },
    data: {
      local: '강원',
      season: 'fall',
    },
    title: '차박.. 지금이 딱 좋지 아니한가',
    postcontents:
      '차박 고수들만 안다는 차박 명소! 협곡에 자리하고 있고, 키 큰 나무들이 주변을 둘러사고 있어서 텐트를 치면 이름 모를 산속에서 홀로 캠핑하는 느낌까지?!! 5분 거리에 산책로도 있다니 역시 명소는 달라!!',
  },
  {
    id: 9,
    url: 'http://www.cooknchefnews.com/news/data/20210908/p1065618828764627_554_thum.jpg',
    params: {
      postId: 'jeonghoon',
    },
    data: {
      local: '강원',
      season: 'fall',
    },
    title: '노랗게 노랗게 물들었네~ 가을 차박!',
    postcontents:
      '산 속에서만 차박하는 흑우 없제?! 산모기에 물리면 너무 아프자네~ 새롭게 떠오르는 차박 명소! 배산임수 훌륭한 곳에서 힐링 여행, 준비됬나?!',
  },
  {
    id: 10,
    url: 'https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1muT/image/96aBwYkqpED0u89MlVOhK3Tpl68.jpg',
    params: {
      postId: 'yonghui',
    },
    data: {
      local: '대전',
      season: 'winter',
    },
    title: '미리 떠난 겨울 차박',
    postcontents:
      '적당히 서늘하고 적당히 따뜻한, 지금 계절이 캠핑하기 딱 좋은 것 같아요.',
  },
  {
    id: 11,
    url: 'https://cdn.imweb.me/upload/S20200813ebaefced8f210/eefbde36de890.jpg',
    params: {
      postId: 'yonghui',
    },
    data: {
      local: '대전',
      season: 'winter',
    },
    title:
      'Merry Christmas~!! 특별한 크리스마스를 위한 우리만의 차박파티: 랜핑',
    postcontents:
      '창 밖을 보라 창 밖을 보라 흰 눈이 내린다~!! 창 밖을 보라 창 밖을 보라 찬 겨울이 왔다~!!',
  },
  {
    id: 12,
    url: 'https://images.chosun.com/resizer/IYPm_OxawTfJjuRoKooPnXi5Ocs=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/DMDC57VF6BLCR3YWOSO5NL5QRU.jpg',
    params: {
      postId: 'yonghui',
    },
    data: {
      local: '대전',
      season: 'winter',
    },
    title: '겨울철 맞은 "캠린이"를 위한 캠핑 꿀팁 A to Z',
    postcontents:
      '썰매를 타는 어린애들은 해 가는 줄도 모르고 눈길 위에다 썰매를 깔고 즐겁게 달린다',
  },
  {
    id: 13,
    url: 'https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1muT/image/OAH7Cce35bMqNAWgigJLiZvOWss.jpg',
    params: {
      postId: 'jeonghoon',
    },
    data: {
      local: '충청',
      season: 'winter',
    },
    title: '커피 한잔 할래요~ 커피 한잔 할래요~ 겨울 차박!',
    postcontents:
      '아~주 추운 겨울! 자연의 날씨는 도시보다 더 농도가 짙어서, 더 춥게 느껴지는 것 같아요~ 그래도 차에는 날 따뜻하게 해줄 히터와 침낭이 있으니! 한번 도전해볼래요?!',
  },
  {
    id: 14,
    url: 'https://www.motorgraph.com/news/photo/202102/27167_86264_5525.jpg',
    params: {
      postId: 'beomsoo',
    },
    data: {
      local: '충청',
      season: 'winter',
    },
    title: '불멍은 역시 겨울에!!',
    postcontents:
      '여행에도 매너가 있다. 캠핑은 자신이 머문 자리를 깨끗이 치우는 것으로 마무리된다. 자연을 누린 만큼, 원래 모습으로 되돌려놓는 건 당연하다.',
  },
  {
    id: 15,
    url: 'https://contents.sixshop.com/thumbnails/uploadedFiles/16843/product/image_1609212872869_750.jpg',
    params: {
      postId: 'beomsoo',
    },
    data: {
      local: '충청',
      season: 'winter',
    },
    title: '따뜻한 아메리카노에 버터 한조각이 풍~덩~!',
    postcontents:
      '겨울 차박은 뭐다? 장비빨이다!! 차박 초보를 위한 동계차박 감성 세트!! 나도 준비해서 완벽한 겨울 차박하자!!',
  },
  {
    id: 16,
    url: 'https://www.korea.kr/newsWeb/resources/attaches/2020.06/11/07.jpg',
    params: {
      postId: 'beomsoo',
    },
    data: {
      local: '전라',
      season: 'spring',
    },
    title: '봄이 좋냐??! 멍청이들아!!',
    postcontents:
      '단도직입적으로 말한다. 떠나라!!! 사람 없고 힐링할 수 있는 그 곳으로@!@',
  },
  {
    id: 17,
    url: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/56de/image/k1LDdC-l4xdJpTEokxNn8fCAeCc.jpg',
    params: {
      postId: 'beomsoo',
    },
    data: {
      local: '전라',
      season: 'spring',
    },
    title: '벚꽃이 그렇게도 좋냐 이 바보들아!!',
    postcontents:
      '코로나19이후 타인과의 만남을 최소화할 수 있어 차박이 뜨고 있는 요즘! 차박 명소 찾고 계신가요? 그렇다면 여긴 어때요?!',
  },
  {
    id: 18,
    url: 'https://www.jejutwn.com/data/photos/20210730/art_16275441018818_ed1419.jpg',
    params: {
      postId: 'beomsoo',
    },
    data: {
      local: '전라',
      season: 'spring',
    },
    title: '아따 봄바람 좋구마잉~~',
    postcontents:
      '시원한 딥그린 컬러와 회색의 조화로 트렌디한 감성캠핑을 원하는 소비자들 마음을 사로잡은 그 텐트!! 나도 이런 감성적인 차박캠핑 가능?!!',
  },
  {
    id: 19,
    url: 'http://san.chosun.com/site/data/img_dir/2020/09/23/2020092302695_0.jpg',
    params: {
      postId: 'yonghui',
    },
    data: {
      local: '경상',
      season: 'summer',
    },
    title: '여름아 부탁해~!!!',
    postcontents:
      '복잡할 것이 없다. 차에서 자면 차박이다. 간단한 정의만큼 필요한 장비도 간단하다. 시트를 넘기고 매트리스를 깔거나, 도킹텐트를 치고 자면 된다. 차라는 공간의 안락하고 안전한 느낌은 흉흉한 코로나19 시대를 살아가는 현대인들에게 크나큰 위안이 된다.',
  },
  {
    id: 20,
    url: 'http://san.chosun.com/site/data/img_dir/2020/09/23/2020092302695_1.jpg',
    params: {
      postId: 'yonghui',
    },
    data: {
      local: '경상',
      season: 'summer',
    },
    title: '여름에 시원하게 즐기고 싶다면?! 여름 차박!',
    postcontents:
      '유명한 차박지는 거의 안 갑니다. 카페나 블로그를 둘러보다가 가보고 싶은 곳이 생기면 기록해 뒀다가 가끔 인근을 지나갈 때 한 번 정찰하고, 나중에 최종적으로 가는 식입니다. 장소 선정에서 가장 중요하게 여기는 건 찾는 사람과 차량운행이 적으며 전망이 좋은 곳입니다.',
  },
  {
    id: 21,
    url: 'http://san.chosun.com/site/data/img_dir/2020/09/23/2020092302695_8.jpg',
    params: {
      postId: 'yonghui',
    },
    data: {
      local: '경상',
      season: 'summer',
    },
    title: '빙수, 냉면, 아이스크림 야! 너도~ 할 수 있어!',
    postcontents:
      '여름 차박의 완성은 빗소리! 비오면 감성 UP 오히려 좋아! 툭툭 떨어지는 빗소리 들으며 생각과 마음 모두 정리하는 시간 어때요?',
  },
  {
    id: 22,
    url: 'https://static.hubzum.zumst.com/hubzum/2021/09/27/00/73544ef860a64aa38c4f95a8959e1b06.jpg',
    params: {
      postId: 'yonghui',
    },
    data: {
      local: '제주',
      season: 'fall',
    },
    title: 'Falling in Love 하기 좋은 데이트 명소!',
    postcontents:
      '조용한 것도 좋지만 럭셔리하게 느껴보는 건 어때? 3만 4천평의 넓은 정원과 숲속 산책로가 매력적인 도심 속에서 차박존(Zone)과 함께 뷔페 레스토랑에서 제공하는 조식, 셰프가 직접 구워 제공하는 숯불 바비큐 등 특급 호텔의 서비스를 즐길 수 있어 어디에서도 체험할 수 없는 럭셔리 캠핑 감성을 느낄 수 있다.',
  },
  {
    id: 23,
    url: 'https://allways.smotor.com/wp-content/uploads/2020/11/KakaoTalk_20201103_172718213_02-2-1024x755.jpg',
    params: {
      postId: 'yonghui',
    },
    data: {
      local: '제주',
      season: 'fall',
    },
    title: '데이트할 찾는 분들께 추천! 여기어때?!!',
    postcontents:
      '차박 캠핑 쉽게 설치하는 법! 트렁크 문을 열고 텐트를 씌워 준 뒤 좌우의 가장 위쪽 스트링 고리를 1열 시트 하단에 걸고 팽팽하게 조절해 줍니다. ㄷ모양의 아치폴대를 텐트 상단에 삽입 후 차량 좌우 하단 폴대 슬라이브에 폴대 끝부분을 넣어 고정하고 폴대를 후크에 체결합니다.',
  },
  {
    id: 24,
    url: 'http://ojsfile.ohmynews.com/STD_IMG_FILE/2020/0717/IE002666740_STD.jpg',
    params: {
      postId: 'yonghui',
    },
    data: {
      local: '제주',
      season: 'fall',
    },
    title: '호~호~ 불며 마시는 따뜻한 코코아 한잔하기 좋은 곳!',
    postcontents:
      '겨울철 지피는 모닥불은 겨울 차박에 꽃이라고도 할 수있죠. 법에만 안걸린다면 겨울 차박에 불멍 어때요?!',
  },
];

export default DummyData;
