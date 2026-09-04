# YL Toolkit v5.0.0

Added a generated data-analysis hub, four analysis articles, methodology page,
and static product price/PV injection sourced from `assets/data/products.js`.

## 제품 데이터 갱신 절차

1. `assets/data/products.js`의 가격 또는 PV를 수정합니다.
2. 다음 명령으로 생성 스크립트를 실행합니다.

```powershell
node .\scripts\generate-insights.js
```

3. `assets/data/insights-summary.json` 갱신 여부를 확인합니다.
4. 신규 분석 HTML의 통계와 사례 수치를 확인합니다.
5. 제품 상세 8개의 정적 회원가와 PV를 확인합니다.
6. `git diff`로 생성된 변경 범위를 확인합니다.
7. 주요 계산기와 분석 페이지의 회귀 테스트를 실행합니다.

Added Google AdSense verification script to all HTML pages and added ads.txt.

AdSense publisher: pub-5259538571603783
