const PRODUCTS = [
  {
    "id": 1,
    "name": "페퍼민트 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 35700,
    "rp": 22.0
  },
  {
    "id": 2,
    "name": "레몬 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 16800,
    "rp": 11.5
  },
  {
    "id": 3,
    "name": "라벤더 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 37800,
    "rp": 24.25
  },
  {
    "id": 4,
    "name": "프랑킨센스 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 115500,
    "rp": 75.5
  },
  {
    "id": 5,
    "name": "그레이프프루트 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 28400,
    "rp": 17.25
  },
  {
    "id": 6,
    "name": "오렌지 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 16800,
    "rp": 11.0
  },
  {
    "id": 7,
    "name": "라임 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 21000,
    "rp": 12.5
  },
  {
    "id": 8,
    "name": "시트러스 프레쉬 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 27300,
    "rp": 15.75
  },
  {
    "id": 9,
    "name": "퓨어 디펜스 롤-온",
    "category": "롤온",
    "price": 47300,
    "rp": 29.75
  },
  {
    "id": 10,
    "name": "히노끼 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 45200,
    "rp": 25.5
  },
  {
    "id": 11,
    "name": "팔마로사 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 31500,
    "rp": 20.25
  },
  {
    "id": 12,
    "name": "블루탄지 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 149100,
    "rp": 94.75
  },
  {
    "id": 13,
    "name": "시트로넬라 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 31500,
    "rp": 20.0
  },
  {
    "id": 14,
    "name": "저먼 캐모마일 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 59900,
    "rp": 37.5
  },
  {
    "id": 15,
    "name": "네롤리 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 169100,
    "rp": 106.75
  },
  {
    "id": 16,
    "name": "니아울리 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 54600,
    "rp": 32.25
  },
  {
    "id": 17,
    "name": "어번던스 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 60900,
    "rp": 38.0
  },
  {
    "id": 18,
    "name": "아로마 시즈 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 51500,
    "rp": 32.5
  },
  {
    "id": 19,
    "name": "클래리티 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 66200,
    "rp": 41.75
  },
  {
    "id": 20,
    "name": "다이자이즈 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 52500,
    "rp": 33.75
  },
  {
    "id": 21,
    "name": "드래곤 타임 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 78800,
    "rp": 50.25
  },
  {
    "id": 22,
    "name": "그래티튜드 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 43100,
    "rp": 27.0
  },
  {
    "id": 23,
    "name": "이너차일드 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 49400,
    "rp": 30.5
  },
  {
    "id": 24,
    "name": "주바플렉스 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 51000,
    "rp": 28.75
  },
  {
    "id": 25,
    "name": "멜로즈 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 31500,
    "rp": 20.25
  },
  {
    "id": 26,
    "name": "퓨리피케이션 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 25200,
    "rp": 15.75
  },
  {
    "id": 27,
    "name": "팬어웨이 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 120800,
    "rp": 81.75
  },
  {
    "id": 28,
    "name": "주바클렌즈 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 167000,
    "rp": 109.75
  },
  {
    "id": 29,
    "name": "피스 앤 카밍 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 55700,
    "rp": 34.75
  },
  {
    "id": 30,
    "name": "레이븐 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 57800,
    "rp": 35.75
  },
  {
    "id": 31,
    "name": "알씨 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 36800,
    "rp": 23.25
  },
  {
    "id": 32,
    "name": "릴리즈 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 62000,
    "rp": 39.25
  },
  {
    "id": 33,
    "name": "알씨 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 16800,
    "rp": 10.5
  },
  {
    "id": 34,
    "name": "세이크리드 마운틴 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 57800,
    "rp": 36.75
  },
  {
    "id": 35,
    "name": "띠브즈 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 54600,
    "rp": 34.75
  },
  {
    "id": 36,
    "name": "화이트 안젤리카 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 45200,
    "rp": 28.75
  },
  {
    "id": 37,
    "name": "시더우드 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 21000,
    "rp": 11.5
  },
  {
    "id": 38,
    "name": "바닐라 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 50400,
    "rp": 32.0
  },
  {
    "id": 39,
    "name": "로먼 캐모마일 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 65100,
    "rp": 41.0
  },
  {
    "id": 40,
    "name": "클래리 세이지 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 60900,
    "rp": 48.75
  },
  {
    "id": 41,
    "name": "클로브 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 25200,
    "rp": 15.75
  },
  {
    "id": 42,
    "name": "브리드 어게인 롤-온",
    "category": "롤온",
    "price": 42000,
    "rp": 26.5
  },
  {
    "id": 43,
    "name": "밸러 롤-온",
    "category": "롤온",
    "price": 77700,
    "rp": 49.75
  },
  {
    "id": 44,
    "name": "사이프레스 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 26300,
    "rp": 19.75
  },
  {
    "id": 45,
    "name": "트랜퀼 롤-온",
    "category": "롤온",
    "price": 46200,
    "rp": 29.5
  },
  {
    "id": 46,
    "name": "딥 릴리프 롤-온",
    "category": "롤온",
    "price": 43100,
    "rp": 27.5
  },
  {
    "id": 47,
    "name": "딜 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 25200,
    "rp": 16.25
  },
  {
    "id": 48,
    "name": "유칼립투스 라디아타 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 29400,
    "rp": 19.0
  },
  {
    "id": 49,
    "name": "유칼립투스 에센셜 오일 15 ml",
    "category": "싱글오일",
    "price": 24200,
    "rp": 14.75
  },
  {
    "id": 50,
    "name": "제라늄 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 68300,
    "rp": 42.5
  },
  {
    "id": 51,
    "name": "헬리크리섬 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 114500,
    "rp": 87.5
  },
  {
    "id": 52,
    "name": "주니퍼 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 54600,
    "rp": 34.5
  },
  {
    "id": 53,
    "name": "레몬그라스 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 16800,
    "rp": 11.5
  },
  {
    "id": 54,
    "name": "마조람 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 52500,
    "rp": 35.75
  },
  {
    "id": 55,
    "name": "티트리 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 33600,
    "rp": 26.75
  },
  {
    "id": 56,
    "name": "미르 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 104000,
    "rp": 66.75
  },
  {
    "id": 57,
    "name": "머틀 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 43100,
    "rp": 27.5
  },
  {
    "id": 58,
    "name": "유칼립투스 블루 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 24200,
    "rp": 15.5
  },
  {
    "id": 59,
    "name": "넛맥 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 21000,
    "rp": 13.25
  },
  {
    "id": 60,
    "name": "오레가노 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 34700,
    "rp": 28.5
  },
  {
    "id": 61,
    "name": "파촐리 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 49400,
    "rp": 34.75
  },
  {
    "id": 62,
    "name": "블랙페퍼 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 34700,
    "rp": 19.25
  },
  {
    "id": 63,
    "name": "파인 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 24200,
    "rp": 15.5
  },
  {
    "id": 64,
    "name": "로즈마리 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 25200,
    "rp": 16.0
  },
  {
    "id": 65,
    "name": "스피아민트 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 16800,
    "rp": 11.0
  },
  {
    "id": 66,
    "name": "타임 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 47300,
    "rp": 34.75
  },
  {
    "id": 67,
    "name": "베티버 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 33600,
    "rp": 21.25
  },
  {
    "id": 68,
    "name": "윈터그린 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 31500,
    "rp": 18.25
  },
  {
    "id": 69,
    "name": "일랑 일랑 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 62000,
    "rp": 42.0
  },
  {
    "id": 70,
    "name": "게리스 라이트 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 63000,
    "rp": 39.75
  },
  {
    "id": 71,
    "name": "제라늄 버번 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 41700,
    "rp": 24.75
  },
  {
    "id": 72,
    "name": "블루 릴리프 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 76700,
    "rp": 48.0
  },
  {
    "id": 73,
    "name": "블루 야로우 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 166500,
    "rp": 99.75
  },
  {
    "id": 74,
    "name": "오리지널 밸러 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 63000,
    "rp": 39.75
  },
  {
    "id": 75,
    "name": "베이로렐 에센셜오일 5ml",
    "category": "싱글오일",
    "price": 42000,
    "rp": 25.0
  },
  {
    "id": 76,
    "name": "프로게센스 파이토 플러스 세럼",
    "category": "기타",
    "price": 60900,
    "rp": 38.5
  },
  {
    "id": 77,
    "name": "스트레스 어웨이 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 49400,
    "rp": 30.5
  },
  {
    "id": 78,
    "name": "영리빙 띠브즈 체스트 럽",
    "category": "기타",
    "price": 41500,
    "rp": 29.82
  },
  {
    "id": 79,
    "name": "제이드 레몬 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 16800,
    "rp": 11.0
  },
  {
    "id": 80,
    "name": "텐저린 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 13700,
    "rp": 7.75
  },
  {
    "id": 81,
    "name": "자스민 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 114500,
    "rp": 66.75
  },
  {
    "id": 82,
    "name": "페티그레인 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 60900,
    "rp": 35.75
  },
  {
    "id": 83,
    "name": "영리빙 띠브즈 가정용 세정제",
    "category": "생활용품",
    "price": 31000,
    "rp": 25.31
  },
  {
    "id": 84,
    "name": "영리빙 띠브즈 세탁세제",
    "category": "생활용품",
    "price": 41600,
    "rp": 37.84
  },
  {
    "id": 85,
    "name": "영리빙 띠브즈 주방세제",
    "category": "생활용품",
    "price": 17300,
    "rp": 19.6
  },
  {
    "id": 86,
    "name": "노던 라이츠 블랙 스프루스 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 76700,
    "rp": 47.5
  },
  {
    "id": 87,
    "name": "시나몬 바크 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 38900,
    "rp": 24.75
  },
  {
    "id": 88,
    "name": "프랑킨센스 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 47300,
    "rp": 30.5
  },
  {
    "id": 89,
    "name": "진저 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 21000,
    "rp": 13.5
  },
  {
    "id": 90,
    "name": "라벤더 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 18900,
    "rp": 12.0
  },
  {
    "id": 91,
    "name": "오레가노 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 15800,
    "rp": 12.0
  },
  {
    "id": 92,
    "name": "타임 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 20000,
    "rp": 14.5
  },
  {
    "id": 93,
    "name": "베르가모트 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 22100,
    "rp": 13.25
  },
  {
    "id": 94,
    "name": "클로브 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 11600,
    "rp": 7.5
  },
  {
    "id": 95,
    "name": "레몬 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 10500,
    "rp": 6.25
  },
  {
    "id": 96,
    "name": "페퍼민트 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 16800,
    "rp": 10.25
  },
  {
    "id": 97,
    "name": "코파이바 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 29400,
    "rp": 22.0
  },
  {
    "id": 98,
    "name": "펜넬 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 14700,
    "rp": 9.0
  },
  {
    "id": 99,
    "name": "세이지 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 23100,
    "rp": 12.75
  }
];
