const PRODUCTS = [
  {
    "id": 1,
    "name": "페퍼민트 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 35700,
    "rp": 22,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/27135.png"
  },
  {
    "id": 2,
    "name": "레몬 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 16800,
    "rp": 11.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/27568.png"
  },
  {
    "id": 3,
    "name": "라벤더 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 37800,
    "rp": 24.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/27588.png"
  },
  {
    "id": 4,
    "name": "프랑킨센스 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 115500,
    "rp": 75.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/27684.png"
  },
  {
    "id": 5,
    "name": "그레이프프루트 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 28400,
    "rp": 17.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/27688.png"
  },
  {
    "id": 6,
    "name": "오렌지 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 16800,
    "rp": 11,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/27706.png"
  },
  {
    "id": 7,
    "name": "라임 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 21000,
    "rp": 12.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/27707.png"
  },
  {
    "id": 8,
    "name": "시트러스 프레쉬 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 27300,
    "rp": 15.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/28148.png"
  },
  {
    "id": 9,
    "name": "퓨어 디펜스 롤-온 10ml",
    "category": "롤온",
    "price": 47300,
    "rp": 29.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/28679.png"
  },
  {
    "id": 10,
    "name": "빌리브 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 31500,
    "rp": 19.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/305469.png"
  },
  {
    "id": 11,
    "name": "히노끼 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 45200,
    "rp": 25.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/4f3b0979-5a8b-4f8d-bddc-b66a8d6a3675_HINOKI.png"
  },
  {
    "id": 12,
    "name": "팔마로사 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 31500,
    "rp": 20.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/307769.png"
  },
  {
    "id": 13,
    "name": "블루탄지 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 149100,
    "rp": 94.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/308469.png"
  },
  {
    "id": 14,
    "name": "시트로넬라 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 31500,
    "rp": 20,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/308569.png"
  },
  {
    "id": 15,
    "name": "저먼 캐모마일 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 59900,
    "rp": 37.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/308669.png"
  },
  {
    "id": 16,
    "name": "네롤리 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 169100,
    "rp": 106.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/308869.png"
  },
  {
    "id": 17,
    "name": "니아울리 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 54600,
    "rp": 32.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2024/9bf92ddf-1376-494d-bb23-d50679bfcd2c_Niaouli.png"
  },
  {
    "id": 18,
    "name": "어번던스 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 60900,
    "rp": 38,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/330069.png"
  },
  {
    "id": 19,
    "name": "아로마 시즈 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 51500,
    "rp": 32.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/330969.png"
  },
  {
    "id": 20,
    "name": "클래리티 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 66200,
    "rp": 41.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/332169.png"
  },
  {
    "id": 21,
    "name": "드래곤 타임 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 78800,
    "rp": 50.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/332769.png"
  },
  {
    "id": 22,
    "name": "그래티튜드 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 43100,
    "rp": 27,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/334669.png"
  },
  {
    "id": 23,
    "name": "이너차일드 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 49400,
    "rp": 30.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/336069.png"
  },
  {
    "id": 24,
    "name": "조이 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 67200,
    "rp": 43,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/337269.png"
  },
  {
    "id": 25,
    "name": "주바플렉스 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 51000,
    "rp": 28.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/b2c04cf8-17a6-4132-ad17-e40e021abb3f_JUVAFLEX_5ml.png"
  },
  {
    "id": 26,
    "name": "멜로즈 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 31500,
    "rp": 20.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/337869.png"
  },
  {
    "id": 27,
    "name": "퓨리피케이션 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 25200,
    "rp": 15.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/338969.png"
  },
  {
    "id": 28,
    "name": "팬어웨이 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 120800,
    "rp": 81.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/339069.png"
  },
  {
    "id": 29,
    "name": "주바클렌즈 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 167000,
    "rp": 109.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/5e9654f0-5809-452e-ab82-63755a3d0479_juva%20cleanse_%EB%9D%BC%EB%B2%A8%20%EC%9D%B4%EB%AF%B8%EC%A7%80.png"
  },
  {
    "id": 30,
    "name": "피스 앤 카밍 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 55700,
    "rp": 34.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/339869.png"
  },
  {
    "id": 31,
    "name": "레이븐 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 57800,
    "rp": 35.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/340269.png"
  },
  {
    "id": 32,
    "name": "알씨 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 36800,
    "rp": 23.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/340569.png"
  },
  {
    "id": 33,
    "name": "릴리즈 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 62000,
    "rp": 39.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/340869.png"
  },
  {
    "id": 34,
    "name": "알씨 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 16800,
    "rp": 10.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/340969.png"
  },
  {
    "id": 35,
    "name": "세이크리드 마운틴 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 57800,
    "rp": 36.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/341469.png"
  },
  {
    "id": 36,
    "name": "띠브즈 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 54600,
    "rp": 34.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/0ea53b1b-6a8b-4368-8673-f72ce1b0cd42_thieves_%EB%9D%BC%EB%B2%A8.png"
  },
  {
    "id": 37,
    "name": "화이트 안젤리카 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 45200,
    "rp": 28.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/342869.png"
  },
  {
    "id": 38,
    "name": "시더우드 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 21000,
    "rp": 11.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/350969.png"
  },
  {
    "id": 39,
    "name": "바닐라 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 50400,
    "rp": 32,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/35110.png"
  },
  {
    "id": 40,
    "name": "로먼 캐모마일 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 65100,
    "rp": 41,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/351269.png"
  },
  {
    "id": 41,
    "name": "클래리 세이지 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 60900,
    "rp": 48.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/352169.png"
  },
  {
    "id": 42,
    "name": "클로브 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 25200,
    "rp": 15.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/352469.png"
  },
  {
    "id": 43,
    "name": "브리드 어게인 롤-온",
    "category": "롤온",
    "price": 42000,
    "rp": 26.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/352869.png"
  },
  {
    "id": 44,
    "name": "밸러 롤-온",
    "category": "롤온",
    "price": 77700,
    "rp": 49.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/352969.png"
  },
  {
    "id": 45,
    "name": "사이프레스 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 26300,
    "rp": 19.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/353069.png"
  },
  {
    "id": 46,
    "name": "트랜퀼 롤-온",
    "category": "롤온",
    "price": 46200,
    "rp": 29.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/353369.png"
  },
  {
    "id": 47,
    "name": "딥 릴리프 롤-온",
    "category": "롤온",
    "price": 43100,
    "rp": 27.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/353469.png"
  },
  {
    "id": 48,
    "name": "딜 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 25200,
    "rp": 16.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/353669.png"
  },
  {
    "id": 49,
    "name": "유칼립투스 라디아타 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 29400,
    "rp": 19,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/353869.png"
  },
  {
    "id": 50,
    "name": "유칼립투스 에센셜 오일 15 ml",
    "category": "싱글오일",
    "price": 24200,
    "rp": 14.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2026/feea7330-ef81-424e-8774-58f41176919f_Eucalyptus%20globulus_15ml.png"
  },
  {
    "id": 51,
    "name": "제라늄 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 68300,
    "rp": 42.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/355469.png"
  },
  {
    "id": 52,
    "name": "골든로드 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 38900,
    "rp": 24.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/356269.png"
  },
  {
    "id": 53,
    "name": "주니퍼 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 54600,
    "rp": 34.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/357269.png"
  },
  {
    "id": 54,
    "name": "레몬그라스 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 16800,
    "rp": 11.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/358169.png"
  },
  {
    "id": 55,
    "name": "마조람 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 52500,
    "rp": 35.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/358469.png"
  },
  {
    "id": 56,
    "name": "티트리 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 33600,
    "rp": 26.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/358769.png"
  },
  {
    "id": 57,
    "name": "미르 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 104000,
    "rp": 66.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/359369.png"
  },
  {
    "id": 58,
    "name": "머틀 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 43100,
    "rp": 27.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/e2739d68-7aef-4382-8414-6ad6a94cd9c3_Myrtle.png"
  },
  {
    "id": 59,
    "name": "유칼립투스 블루 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 24200,
    "rp": 15.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/359769.png"
  },
  {
    "id": 60,
    "name": "넛맥 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 21000,
    "rp": 13.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/359969.png"
  },
  {
    "id": 61,
    "name": "오레가노 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 34700,
    "rp": 28.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/360569.png"
  },
  {
    "id": 62,
    "name": "파촐리 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 49400,
    "rp": 34.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/360869.png"
  },
  {
    "id": 63,
    "name": "블랙페퍼 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 34700,
    "rp": 19.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/361169.png"
  },
  {
    "id": 64,
    "name": "파인 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 24200,
    "rp": 15.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/361869.png"
  },
  {
    "id": 65,
    "name": "로즈마리 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 25200,
    "rp": 16,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/362669.png"
  },
  {
    "id": 66,
    "name": "스피아민트 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 16800,
    "rp": 11,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/363869.png"
  },
  {
    "id": 67,
    "name": "타임 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 47300,
    "rp": 34.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/365069.png"
  },
  {
    "id": 68,
    "name": "베티버 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 33600,
    "rp": 21.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/365169.png"
  },
  {
    "id": 69,
    "name": "윈터그린 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 31500,
    "rp": 18.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/365869.png"
  },
  {
    "id": 70,
    "name": "일랑 일랑 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 62000,
    "rp": 42,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/365969.png"
  },
  {
    "id": 71,
    "name": "게리스 라이트 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 63000,
    "rp": 39.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/36709.png"
  },
  {
    "id": 72,
    "name": "제라늄 버번 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 41700,
    "rp": 24.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/3810da92-93b3-484d-8891-b484cf7c1f83_Geranium%20bourbon_5ml.png"
  },
  {
    "id": 73,
    "name": "블루 릴리프 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 76700,
    "rp": 48,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/39724.png"
  },
  {
    "id": 74,
    "name": "블루 야로우 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 166500,
    "rp": 99.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/0f488885-8060-4f9e-b57e-2c32356a8524_blue%20yarrow%205ml.png"
  },
  {
    "id": 75,
    "name": "오리지널 밸러 에센셜 오일 블렌드 5ml",
    "category": "블렌드오일",
    "price": 63000,
    "rp": 39.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2024/e61e9b77-e83e-46b3-8dd0-3cd2fd2116a2_original%20valor.png"
  },
  {
    "id": 76,
    "name": "베이로렐 에센셜오일 5ml",
    "category": "싱글오일",
    "price": 42000,
    "rp": 25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/11514839-b7ee-4c70-a39b-523fe262134d_%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%84%85%E1%85%A6%E1%86%AF_%E1%84%85%E1%85%A1%E1%84%87%E1%85%A6%E1%86%AF.png"
  },
  {
    "id": 77,
    "name": "프로게센스 파이토 플러스 세럼",
    "category": "기타",
    "price": 60900,
    "rp": 38.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/5e50db7c-3c6c-4eed-be03-4c87d65130a9_progessence_%EC%88%982.png"
  },
  {
    "id": 78,
    "name": "스트레스 어웨이 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 49400,
    "rp": 30.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/463069.png"
  },
  {
    "id": 79,
    "name": "제이드 레몬 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 16800,
    "rp": 11,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/468569.png"
  },
  {
    "id": 80,
    "name": "텐저린 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 13700,
    "rp": 7.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2026/5e110b48-175b-428c-869a-af93634063c1_tangerine_%EB%9D%BC%EB%B2%A8.png"
  },
  {
    "id": 81,
    "name": "자스민 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 114500,
    "rp": 66.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/1c9e3919-3da5-4f20-9ebd-4c2a3352fe12_jasmin.png"
  },
  {
    "id": 82,
    "name": "페티그레인 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 60900,
    "rp": 35.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/a0fb0ad1-4c79-4445-b995-7a9d2591c2f5_petitgrain_single%205.png"
  },
  {
    "id": 83,
    "name": "시즌 에센셜스 에센셜 오일 블렌드 15ml",
    "category": "블렌드오일",
    "price": 60500,
    "rp": 42.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2026/42989a15-a8a1-40f9-9ca0-5c2d1df27b90_Season_Essentials.png"
  },
  {
    "id": 84,
    "name": "영리빙 띠브즈 가정용 세정제",
    "category": "생활용품",
    "price": 31000,
    "rp": 25.31,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2026/ce6f6682-8fb8-4bb1-8482-d2bb3a495d04_Thieves%20Cleaner.png"
  },
  {
    "id": 85,
    "name": "영리빙 띠브즈 세탁세제",
    "category": "생활용품",
    "price": 41600,
    "rp": 37.84,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2026/b9df00ed-4eb1-4b3a-a031-312edd554d29_Thieves%20Laundry%20Detergent%20US_Silo.png"
  },
  {
    "id": 86,
    "name": "영리빙 띠브즈 주방세제",
    "category": "생활용품",
    "price": 17300,
    "rp": 19.6,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2026/90421597-9d95-4593-994f-c839c1ddd0fd_Thieves%20Dish%20Soap%20US_Silo.png"
  },
  {
    "id": 87,
    "name": "노던 라이츠 블랙 스프루스 에센셜 오일 15ml",
    "category": "싱글오일",
    "price": 76700,
    "rp": 47.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/534269.png"
  },
  {
    "id": 88,
    "name": "시나몬 바크 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 38900,
    "rp": 24.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/558569.png"
  },
  {
    "id": 89,
    "name": "프랑킨센스 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 47300,
    "rp": 30.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/558769.png"
  },
  {
    "id": 90,
    "name": "진저 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 21000,
    "rp": 13.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/558869.png"
  },
  {
    "id": 91,
    "name": "라벤더 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 18900,
    "rp": 12,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/559069.png"
  },
  {
    "id": 92,
    "name": "오레가노 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 15800,
    "rp": 12,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/a7860e2a-8f00-4c42-842c-aaa75162076c_oregano_5ml_%EB%9D%BC%EB%B2%A8.png"
  },
  {
    "id": 93,
    "name": "타임 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 20000,
    "rp": 14.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/559769.png"
  },
  {
    "id": 94,
    "name": "베르가모트 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 22100,
    "rp": 13.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2024/79909e37-147f-4ab1-a129-0df975e7d941_Bergamot-5ml.png"
  },
  {
    "id": 95,
    "name": "클로브 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 11600,
    "rp": 7.5,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/8cea64cb-a7ac-4ef8-953f-3c1d51b635e7_Clove_5ml.png"
  },
  {
    "id": 96,
    "name": "레몬 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 10500,
    "rp": 6.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/562569.png"
  },
  {
    "id": 97,
    "name": "페퍼민트 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 16800,
    "rp": 10.25,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2023/562869.png"
  },
  {
    "id": 98,
    "name": "코파이바 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 29400,
    "rp": 22,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2024/eca1bc5e-d9f5-4140-9e23-78f391e0d05f_Copaiba-5ml.png"
  },
  {
    "id": 99,
    "name": "펜넬 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 14700,
    "rp": 9,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2024/fb8cb6c2-2ea5-4bdf-abe5-5c7d95b4652b_Fennel_single%205.png"
  },
  {
    "id": 100,
    "name": "세이지 에센셜 오일 5ml",
    "category": "싱글오일",
    "price": 23100,
    "rp": 12.75,
    "image": "https://prod-youngliving-contents.s3.ap-northeast-2.amazonaws.com/item/2025/07f34054-5347-4432-90da-c8d55c0a4c82_Sage%205ml.png"
  }
];
