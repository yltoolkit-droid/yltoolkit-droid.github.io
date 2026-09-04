const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const dataDate = "2026-08-04";
const releaseDate = "2026-09-04";
const version = "5.0.0";
const source = fs.readFileSync(path.join(root, "assets/data/products.js"), "utf8");
const sandbox = {};
vm.runInNewContext(`${source}\nthis.PRODUCTS = PRODUCTS;`, sandbox);
const products = sandbox.PRODUCTS;
const valid = products.filter(p => Number.isFinite(p.price) && Number.isFinite(p.rp) && p.rp > 0);
const excluded = products.filter(p => !Number.isFinite(p.price) || !Number.isFinite(p.rp) || p.rp <= 0);
const valued = valid.map(p => ({...p, value: p.price / p.rp}));
const sorted = [...valued].sort((a,b) => a.value - b.value || a.id - b.id);

function quantile(values, q) {
  const pos = (values.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  return values[base + 1] === undefined ? values[base] : values[base] + rest * (values[base + 1] - values[base]);
}
function won(n) { return `${Math.round(n).toLocaleString("ko-KR")}원`; }
function value(n) { return `${Math.round(n).toLocaleString("ko-KR")}원/PV`; }
function rp(n) { return Number(n).toFixed(2); }
function rows(items, rank = true) {
  return items.map((p,i) => `<tr>${rank ? `<td>${i+1}</td>` : ""}<td>${p.name}</td><td>${p.category}</td><td class="num">${won(p.price)}</td><td class="num">${rp(p.rp)}</td><td class="num"><strong>${value(p.value)}</strong></td></tr>`).join("");
}
const values = sorted.map(p => p.value);
const stats = {min: values[0], q1: quantile(values,.25), median: quantile(values,.5), q3: quantile(values,.75), max: values.at(-1)};
const top = [...sorted].reverse().slice(0,10);
const bottom = sorted.slice(0,10);
const categories = [...new Set(valid.map(p => p.category))].sort().map(category => {
  const items = valued.filter(p => p.category === category);
  const vals = items.map(p => p.value).sort((a,b)=>a-b);
  return {category, count:items.length, median:quantile(vals,.5), average:vals.reduce((a,b)=>a+b,0)/vals.length};
});

const SCALE = 100;
function optimize(targetRp, priority) {
  const target = Math.round(targetRp*SCALE);
  const dp = Array(target+1).fill(null);
  dp[0] = {rpInt:0, price:0, items:[]};
  const count = c => c.items.length;
  const better = (a,b) => {
    if (!b) return true;
    const ra=target-a.rpInt, rb=target-b.rpInt;
    if (ra!==rb) return ra<rb;
    if (priority==="count" && count(a)!==count(b)) return count(a)<count(b);
    if (priority==="priceLow" && a.price!==b.price) return a.price<b.price;
    if (count(a)!==count(b)) return count(a)<count(b);
    return a.price>b.price;
  };
  for (const p of valid) {
    const pRp=Math.round(p.rp*SCALE);
    for(let s=target;s>=pRp;s--) {
      if(!dp[s-pRp]) continue;
      const candidate={rpInt:s,price:dp[s-pRp].price+p.price,items:[...dp[s-pRp].items,p]};
      if(better(candidate,dp[s])) dp[s]=candidate;
    }
  }
  let best=null;
  for(const combo of dp) if(combo && better(combo,best)) best=combo;
  return {...best,target:targetRp,used:best.rpInt/SCALE,remaining:targetRp-best.rpInt/SCALE};
}
const scenarios = [20,40,60,80,100].flatMap(target => ["count","priceLow"].map(priority => ({priority,...optimize(target,priority)})));
function scenarioRows() {
  return scenarios.map(s => `<tr><td>${s.target}</td><td>${s.priority==="count"?"제품 수 최소":"결제 금액 낮은 순"}</td><td class="num">${rp(s.used)}</td><td class="num">${rp(s.remaining)}</td><td class="num">${s.items.length}개</td><td class="num">${won(s.price)}</td><td>${s.items.map(p=>p.name).join("<br>")}</td></tr>`).join("");
}
const nearest = target => valued.reduce((a,b)=>Math.abs(b.value-target)<Math.abs(a.value-target)?b:a);
const cases = [top[0], nearest(stats.median), bottom[0]];
const caseLabels = ["상위 사례", "중앙값 근처 사례", "하위 사례"];
const caseRows = cases.map((p,i)=>`<tr><td>${caseLabels[i]}</td><td>${p.name}</td><td class="num">${won(p.price)}</td><td class="num">${rp(p.rp)}</td><td class="num">${value(p.value)}</td><td class="num">${p.value>=stats.median?"+":""}${Math.round(p.value-stats.median).toLocaleString("ko-KR")}원/PV</td></tr>`).join("");

const diy = [
  {title:"10ml 소형 DIY 제품", yield:1, margin:35, extras:[350,80,120,0], materials:[['중성 베이스오일',100,9000,9],['향 원료',15,16800,1]]},
  {title:"50ml DIY 제품", yield:1, margin:40, extras:[700,100,250,0], materials:[['중성 베이스',500,18000,47],['향 원료',15,33600,3]]},
  {title:"100ml DIY 제품 2개", yield:2, margin:30, extras:[1200,200,400,100], materials:[['중성 베이스',1000,28000,194],['향 원료 A',15,37800,4],['향 원료 B',15,16800,2]]}
].map(x=>{
  const costs=x.materials.map(m=>({...{name:m[0],buyQty:m[1],buyPrice:m[2],useQty:m[3]},cost:(m[2]/m[1])*m[3]}));
  const materialTotal=costs.reduce((s,m)=>s+m.cost,0), batchTotal=materialTotal+x.extras.reduce((a,b)=>a+b,0), unitCost=batchTotal/x.yield, selling=unitCost/(1-x.margin/100);
  return {...x,costs,materialTotal,batchTotal,unitCost,selling};
});

function nav(depth=1, active="") {
  const pre="../".repeat(depth);
  const links=[["","홈"],["rp/","RP 계산기"],["rp-value/","포인트 효율"],["dilution/","희석 계산기"],["cost/","원가 계산기"],["products/","제품 정보"],["insights/","데이터 분석"],["guide/","이용안내"],["faq/","FAQ"]];
  return `<header class="app-header"><nav class="nav" id="nav"><a href="${pre}" class="brand"><span class="brand-mark">YL</span><span>YL Toolkit</span></a><button class="menu-toggle" id="menuToggle" type="button">메뉴</button><div class="nav-links">${links.map(([href,label])=>`<a${active===href?' class="active"':''} href="${pre}${href}">${label}</a>`).join("")}</div></nav></header>`;
}
function footer(depth=1){const pre="../".repeat(depth);return `<footer class="footer"><div class="footer-links"><a href="${pre}privacy/">개인정보처리방침</a><a href="${pre}terms/">이용약관</a><a href="${pre}contact/">문의</a></div><p>© 2026 YL Toolkit. 영리빙 회원을 위한 개인 제작 계산 플랫폼입니다.</p><p>본 사이트는 영리빙 공식 사이트가 아닙니다. · v${version}</p></footer><script src="${pre}assets/js/common.js?v=${version}"></script>`;}
function page({title,description,slug,body,depth=2,active="insights/"}) {
  active=active||"insights/";
  const pre="../".repeat(depth), url=`https://yltoolkit-droid.github.io/${slug}`;
  return `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | YL Toolkit</title><meta name="description" content="${description}"><meta name="theme-color" content="#365f3b"><link rel="stylesheet" href="${pre}assets/css/common.css?v=${version}"><link rel="icon" href="${pre}favicon.svg" type="image/svg+xml"><link rel="canonical" href="${url}"><meta property="og:type" content="article"><meta property="og:title" content="${title} | YL Toolkit"><meta property="og:description" content="${description}"><meta property="og:url" content="${url}"><meta property="og:image" content="https://yltoolkit-droid.github.io/assets/img/og-image.svg"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5259538571603783" crossorigin="anonymous"></script><script async src="https://www.googletagmanager.com/gtag/js?id=G-E41WLH114Y"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-E41WLH114Y');</script></head><body>${nav(depth,active)}<main class="wrap insights-page">${body}</main>${footer(depth)}</body></html>`;
}
function write(rel, contents){const target=path.join(root,rel);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,contents,"utf8");}
const summaryCards=`<div class="metric-grid"><div><small>분석 제품</small><strong>${valid.length}개</strong></div><div><small>중앙값</small><strong>${value(stats.median)}</strong></div><div><small>Q1–Q3</small><strong>${value(stats.q1)}–${value(stats.q3)}</strong></div><div><small>전체 범위</small><strong>${value(stats.min)}–${value(stats.max)}</strong></div></div>`;

write("insights/index.html",page({depth:1,slug:"insights/",title:"YL Toolkit 데이터 분석",description:"99개 제품 데이터와 실제 계산 로직으로 포인트 효율, RP 조합, 구매 판단과 DIY 원가 사례를 분석합니다.",body:`<p class="breadcrumb"><a href="../">홈</a> / 데이터 분석</p><section class="card insight-hero"><span class="eyebrow">직접 계산한 데이터</span><h1>YL Toolkit 데이터 분석</h1><p class="guide-lead">등록된 ${valid.length}개 제품 데이터와 계산기 공식을 사용해, 숫자가 실제 선택에서 무엇을 뜻하는지 살펴봅니다. 단순 순위나 구매 권유가 아니라 비교 기준과 한계를 함께 제공합니다.</p><p class="small">데이터 기준일 ${dataDate} · 생성일 ${releaseDate}</p></section><section class="analysis-grid"><a class="analysis-card" href="point-value-analysis/"><b>포인트 효율 분포</b><span>중앙값, 사분위수, 상·하위 사례와 카테고리 차이를 확인합니다.</span></a><a class="analysis-card" href="rp-scenarios/"><b>RP별 실제 조합</b><span>20·40·60·80·100 RP에서 우선 기준이 결과에 미치는 차이를 봅니다.</span></a><a class="analysis-card" href="points-or-cash/"><b>포인트 활용 사례</b><span>상위·중앙·하위 사례를 같은 기준으로 비교해 판단 순서를 설명합니다.</span></a><a class="analysis-card" href="diy-cost-examples/"><b>DIY 원가 사례</b><span>10ml·50ml·100ml 사례로 원료비부터 권장 판매가까지 계산합니다.</span></a></section><section class="card"><h2>분석을 읽기 전에</h2><p>가격과 PV는 실시간 공식 DB가 아니며 바뀔 수 있습니다. 수치가 높거나 낮다는 사실만으로 제품의 필요성·품질·구매 적합성을 판단할 수 없습니다.</p><a class="text-link" href="../methodology/">데이터·계산 기준 자세히 보기 →</a></section>`}));

write("insights/point-value-analysis/index.html",page({slug:"insights/point-value-analysis/",title:"제품 1PV당 가치 분포 분석",description:"YL Toolkit 등록 제품의 회원가÷PV를 계산해 중앙값, 사분위수, 상·하위 10개와 카테고리 분포를 분석합니다.",body:`<p class="breadcrumb"><a href="../">데이터 분석</a> / 포인트 효율 분포</p><article><section class="card"><span class="eyebrow">${valid.length}개 제품 전수 계산</span><h1>제품 1PV당 가치 분포 분석</h1><p class="guide-lead">제품마다 같은 1PV가 얼마의 회원가격에 대응하는지 비교합니다. 목적은 구매 순위를 정하는 것이 아니라 포인트를 사용할 때 금액 기준의 차이를 읽는 데 있습니다.</p><p class="small">데이터 기준일 ${dataDate} · 유효한 회원가와 0보다 큰 PV가 있는 제품만 포함</p></section><section class="card"><h2>계산 방법과 전체 분포</h2><p><strong>1PV당 제품가치 = 회원가 ÷ PV</strong>입니다. 사분위수는 정렬된 전체 값에 선형 보간을 적용했습니다. 상위 25%는 Q3 이상, 하위 25%는 Q1 이하를 뜻합니다.</p>${summaryCards}<p>평균은 매우 높거나 낮은 값의 영향을 받을 수 있습니다. 중앙값은 값을 순서대로 놓았을 때 가운데 수준이므로 전체적인 위치를 함께 살피는 참고 기준이 됩니다.</p><p>제외 제품은 ${excluded.length}개입니다.${excluded.length?` 제외 사유: ${excluded.map(p=>`${p.name}(가격 또는 PV 무효)`).join(', ')}.`:" 모든 등록 제품의 가격과 PV가 유효했습니다."}</p></section><section class="card"><h2>1PV당 가치 상위 10개</h2><div class="table-scroll"><table class="analysis-table"><thead><tr><th>순위</th><th>제품명</th><th>분류</th><th>회원가</th><th>PV</th><th>1PV당 가치</th></tr></thead><tbody>${rows(top)}</tbody></table></div></section><section class="card"><h2>1PV당 가치 하위 10개</h2><div class="table-scroll"><table class="analysis-table"><thead><tr><th>순위</th><th>제품명</th><th>분류</th><th>회원가</th><th>PV</th><th>1PV당 가치</th></tr></thead><tbody>${rows(bottom)}</tbody></table></div></section><section class="card"><h2>카테고리별 비교</h2><div class="table-scroll"><table class="analysis-table"><thead><tr><th>카테고리</th><th>제품 수</th><th>중앙값</th><th>평균(참고)</th></tr></thead><tbody>${categories.map(c=>`<tr><td>${c.category}</td><td class="num">${c.count}</td><td class="num">${value(c.median)}</td><td class="num">${value(c.average)}</td></tr>`).join("")}</tbody></table></div><p>현재 등록 데이터에서 생활용품 3개의 중앙값은 ${value(categories.find(c=>c.category==="생활용품").median)}, 싱글오일 ${categories.find(c=>c.category==="싱글오일").count}개는 ${value(categories.find(c=>c.category==="싱글오일").median)}, 블렌드오일 ${categories.find(c=>c.category==="블렌드오일").count}개는 ${value(categories.find(c=>c.category==="블렌드오일").median)}입니다. 제품 수가 서로 다르고 가격·PV 정책도 달라질 수 있으므로 제품 종류 자체가 차이의 원인이라고 단정할 수 없습니다.</p></section><section class="card"><h2>결과를 읽는 방법</h2><p>Q1 아래 값은 전체의 낮은 쪽 25%, Q3 위 값은 높은 쪽 25%에 해당합니다. 중앙값 근처라면 전체 제품 중간 수준입니다. 높은 값은 동일한 PV로 대응되는 회원가격이 상대적으로 크다는 뜻일 뿐, 필요한 제품인지 또는 구매해야 하는지를 뜻하지 않습니다.</p><h3>데이터 한계</h3><ul><li>가격이나 PV가 바뀌면 1PV당 가치, 순위, 중앙값, Q1·Q3와 카테고리 결과도 달라질 수 있습니다.</li><li>제품 용량, 사용 목적, 개인 필요도와 대체 가능성은 이 지표에 포함되지 않습니다.</li><li>실제 주문 전 공식 주문 화면을 최종 확인해야 합니다.</li></ul><a class="btn secondary" href="../../rp-value/">포인트 효율 비교기로 이동 →</a></section></article>`}));

write("insights/rp-scenarios/index.html",page({slug:"insights/rp-scenarios/",title:"20–100 RP 실제 조합 시나리오",description:"현재 RP 계산기와 같은 우선 규칙으로 20, 40, 60, 80, 100 RP의 실제 제품 조합을 비교합니다.",body:`<p class="breadcrumb"><a href="../">데이터 분석</a> / RP 시나리오</p><section class="card"><span class="eyebrow">계산기 로직 재현</span><h1>20–100 RP 실제 조합 시나리오</h1><p class="guide-lead">같은 RP라도 남는 RP를 먼저 줄인 뒤 제품 수 또는 결제금액을 비교하면 선택되는 조합이 달라질 수 있습니다.</p><p class="small">${dataDate} 제품 데이터 · 같은 제품 중복 없음(제품별 최대수량 1) · 포함/제외 제품 없음</p><div class="notice-box">표시된 결과는 설정 조건에서 계산기가 만든 조합 사례이며 구매 추천 목록이 아닙니다. 프로모션과 실시간 재고는 자동 반영되지 않으므로 실제 주문 시 Young Living 공식 주문 화면을 최종 확인하세요.</div></section><section class="card"><h2>실제 계산 결과</h2><div class="table-scroll"><table class="analysis-table scenario-table"><thead><tr><th>입력 RP</th><th>우선 기준</th><th>사용 RP</th><th>남는 RP</th><th>제품 수</th><th>총 회원가</th><th>제품 조합</th></tr></thead><tbody>${scenarioRows()}</tbody></table></div></section><section class="card"><h2>왜 결과가 달라질까요?</h2><p>현재 계산기는 먼저 목표를 넘지 않으면서 남는 RP가 가장 작은 조합을 찾습니다. 남는 RP가 같은 후보가 여럿일 때 선택한 우선 기준으로 제품 수 또는 결제금액을 비교합니다. 따라서 우선 기준은 남는 RP 최소화보다 뒤에 적용됩니다.</p><p>등록 제품의 PV 단위 조합만 사용할 수 있으므로 목표와 정확히 일치하는 합이 없으면 남는 RP가 0이 아닐 수 있습니다. 제품 수 최소는 주문 항목을 줄이는 데, 결제금액 낮은 순은 같은 RP 근처에서 회원가 합계를 낮추는 데 초점을 둡니다.</p><p>필수 제품을 포함하면 그 제품의 RP×수량을 먼저 차감한 뒤 나머지를 계산하므로 전체 결과가 달라집니다.</p><a class="btn secondary" href="../../rp/">RP 계산기에서 직접 조건 바꾸기 →</a></section>`}));

write("insights/points-or-cash/index.html",page({slug:"insights/points-or-cash/",title:"포인트를 어느 제품에 먼저 쓸까",description:"1PV당 가치 상위, 중앙값 근처, 하위 제품 사례로 두 제품 사이의 포인트 사용 순서를 판단하는 방법을 설명합니다.",body:`<p class="breadcrumb"><a href="../">데이터 분석</a> / 포인트 활용 사례</p><section class="card"><span class="eyebrow">세 위치의 실제 제품</span><h1>포인트를 어느 제품에 먼저 쓸까</h1><p class="guide-lead">필요한 두 제품 중 금액 가치만 비교한다면 1PV당 가치가 큰 제품에 포인트를 사용할 때 같은 PV가 더 큰 회원가격에 대응합니다. 아래 사례는 분포의 상위·중앙·하위 위치를 보여주도록 선정했습니다.</p></section><section class="card"><h2>선정 사례</h2><div class="table-scroll"><table class="analysis-table"><thead><tr><th>선정 기준</th><th>제품명</th><th>회원가</th><th>PV</th><th>1PV당 가치</th><th>중앙값 대비</th></tr></thead><tbody>${caseRows}</tbody></table></div><p>전체 중앙값은 <strong>${value(stats.median)}</strong>입니다. 예를 들어 두 제품이 모두 꼭 필요하고 다른 조건이 같다면, 1PV당 가치가 더 큰 쪽에 포인트를 먼저 배분하는 것이 금액 대응 기준에서는 유리합니다.</p></section><section class="card"><h2>금액 가치 밖의 조건</h2><p>이 비교는 투자·재무 조언이나 구매 권유가 아닙니다. 프로모션, 재고, 배송 조건, 제품의 실제 필요도와 사용할 시점에 따라 판단은 달라질 수 있습니다. 현금 또는 포인트 중 하나를 반드시 사용해야 한다는 뜻도 아닙니다.</p><ol><li>먼저 실제로 필요한 두 제품인지 확인합니다.</li><li>공식 주문 화면의 현재 회원가와 PV를 확인합니다.</li><li>1PV당 가치를 비교하되 프로모션과 소멸 예정 포인트도 함께 봅니다.</li></ol><a class="btn secondary" href="../../rp-value/">내 제품 직접 비교하기 →</a></section>`}));

const diyHtml=diy.map(x=>`<section class="card"><h2>${x.title}</h2><div class="table-scroll"><table class="analysis-table"><thead><tr><th>원료</th><th>구매 용량</th><th>구매 가격</th><th>사용량</th><th>원료별 원가</th></tr></thead><tbody>${x.costs.map(m=>`<tr><td>${m.name}</td><td class="num">${m.buyQty}</td><td class="num">${won(m.buyPrice)}</td><td class="num">${m.useQty}</td><td class="num">${won(m.cost)}</td></tr>`).join("")}</tbody></table></div><ul><li>원료비 합계: ${won(x.materialTotal)}</li><li>부자재(용기·라벨·포장·기타): ${won(x.extras.reduce((a,b)=>a+b,0))}</li><li>총 원가: <strong>${won(x.batchTotal)}</strong></li><li>생산 수량: ${x.yield}개 / 개당 원가: <strong>${won(x.unitCost)}</strong></li><li>입력 마진율: ${x.margin}% / 계산 권장 판매가: <strong>${won(x.selling)}</strong></li></ul></section>`).join("");
write("insights/diy-cost-examples/index.html",page({slug:"insights/diy-cost-examples/",title:"DIY 원가 계산 실제 사례",description:"10ml, 50ml, 100ml DIY 제품 사례를 현재 원가 계산기 공식으로 계산해 원료비, 개당 원가와 권장 판매가를 확인합니다.",body:`<p class="breadcrumb"><a href="../">데이터 분석</a> / DIY 원가 사례</p><section class="card"><span class="eyebrow">현재 계산식 그대로</span><h1>DIY 원가 계산 실제 사례</h1><p class="guide-lead">효능이나 제조법이 아니라 구매 단위와 실제 사용량이 원가로 어떻게 바뀌는지 보여주는 중립적 예시입니다.</p><div class="notice-box">아래 금액과 재료 구성은 계산 방법을 설명하기 위한 예시값이며 실제 원료 시세나 판매가를 의미하지 않습니다. 직접 계산할 때는 본인의 구매 가격과 필요한 용기·포장·배송 비용을 반영하세요.</div><p><strong>원료별 원가 = 구매가격 ÷ 구매용량 × 사용량</strong><br>개당 원가 = (원료비 + 부자재) ÷ 생산수량<br>권장 판매가 = 개당 원가 ÷ (1 − 마진율)</p></section>${diyHtml}<section class="card"><h2>직접 계산할 때</h2><p>단위가 서로 같은지, 부자재가 전체 생산분 기준인지 확인하세요. 계산된 판매가는 입력값에 따른 예시이며 시장 판매가를 보장하지 않습니다. 마진율 100% 이상은 현재 계산기에서 판매가를 0으로 처리합니다.</p><a class="btn secondary" href="../../cost/">원가 계산기로 이동 →</a></section>`}));

write("methodology/index.html",page({depth:1,active:"",slug:"methodology/",title:"YL Toolkit 데이터·계산 기준",description:"YL Toolkit의 제품 데이터 관리, RP·1PV당 가치·원가·희석 계산 방식과 검증 원칙을 설명합니다.",body:`<p class="breadcrumb"><a href="../">홈</a> / 데이터·계산 기준</p><article class="doc"><h1>YL Toolkit 데이터·계산 기준</h1><p class="guide-lead">YL Toolkit은 실제 제품 구매와 DIY 준비 과정에서 반복되는 RP 조합, 포인트 효율, 희석량과 원가 계산의 불편을 줄이기 위한 개인 제작 도구입니다.</p><h2>제품 데이터</h2><p>제품명, 회원가와 PV는 하나의 <code>products.js</code> 데이터 파일에서 관리합니다. 현재 데이터 기준일은 ${dataDate}이며 공식 실시간 DB와 연결되어 있지 않습니다. 가격, PV, 판매 여부, 프로모션과 재고는 바뀔 수 있으므로 공식 주문 화면을 최종 기준으로 합니다.</p><p>제품 정보는 확인 가능한 공식 자료와 제품 라벨을 우선하며, 공식 사실정보와 YL Toolkit이 작성한 향·활용 설명을 구분합니다. 오류 제보가 들어오면 원본과 공식 화면을 대조하고 단일 데이터 파일을 고친 뒤 파생 페이지를 다시 생성합니다.</p><h2>계산 방식</h2><h3>RP 조합</h3><p>포함 제품이 있으면 해당 RP×수량을 먼저 차감합니다. 나머지 후보 중 목표 RP를 넘지 않으면서 남는 RP가 가장 작은 조합을 찾고, 동률일 때 사용자가 고른 제품 수 또는 가격 우선 기준을 적용합니다.</p><h3>1PV당 가치</h3><p>회원가 ÷ PV로 계산합니다. PV가 0이거나 유효하지 않은 항목은 분석에서 제외합니다. 이 값은 금액 대응 비교일 뿐 구매 추천이나 제품 품질 평가가 아닙니다.</p><h3>원가</h3><p>각 원료의 구매가격 ÷ 구매용량 × 실제 사용량을 더하고 부자재를 합산한 뒤 생산수량으로 나눕니다. 권장 판매가는 개당 원가 ÷ (1 − 입력 마진율)입니다.</p><h3>희석</h3><p>목표 오일 용량은 총 용량 × 희석률이며, 여기에 1ml당 방울 수를 곱한 뒤 선택한 반올림 방식을 적용합니다. 실제 오일 용량은 반올림된 방울 수 ÷ 1ml당 방울 수로 다시 계산합니다.</p><h2>제작·검증 원칙</h2><ul><li>분석 수치는 제품 데이터에서 생성하며 임의 통계를 쓰지 않습니다.</li><li>계산 기능 변경 시 기존 입력의 결과를 비교하는 회귀 테스트를 수행합니다.</li><li>정적 페이지, 내부 링크와 404 여부를 확인합니다.</li><li>360×800, 390×844 모바일과 1366×768 데스크톱 화면에서 메뉴, 표 스크롤과 가로 넘침을 확인합니다.</li><li>확인하지 못한 항목은 완료로 표시하지 않습니다.</li></ul><p>계산 오류나 데이터 차이는 <a href="../contact/">문의 페이지</a>로 알려주세요.</p></article>`}));

const detailFiles=fs.readdirSync(path.join(root,"products"),{withFileTypes:true}).filter(x=>x.isDirectory()).map(x=>path.join(root,"products",x.name,"index.html")).filter(fs.existsSync);
for(const file of detailFiles){let html=fs.readFileSync(file,"utf8");const id=Number((html.match(/data-product-id="(\d+)"/)||[])[1]);const p=products.find(x=>x.id===id);if(!p)continue;html=html.replace(/(<strong data-product-price>)[^<]*(<\/strong>)/,`$1${won(p.price)}$2`).replace(/(<strong data-product-rp>)[^<]*(<\/strong>)/,`$1${rp(p.rp).replace(/\.00$/,"")} RP$2`);fs.writeFileSync(file,html,"utf8");}

write("assets/data/insights-summary.json",JSON.stringify({generated:releaseDate,dataDate,productCount:products.length,validCount:valid.length,excluded:excluded.map(p=>({id:p.id,name:p.name,reason:"invalid price or non-positive PV"})),stats,categories,top,bottom,scenarios:scenarios.map(s=>({...s,items:s.items.map(p=>({id:p.id,name:p.name,rp:p.rp,price:p.price}))})),cases,diy},null,2)+"\n");

// Keep existing pages on the same release marker and expose the hub without
// changing their established URLs, metadata, calculator markup, or ad code.
const allHtml=[];
function collectHtml(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){if(entry.name===".git"||entry.name==="scripts")continue;const full=path.join(dir,entry.name);if(entry.isDirectory())collectHtml(full);else if(entry.name==="index.html")allHtml.push(full);}}
collectHtml(root);
for(const file of allHtml){
  let html=fs.readFileSync(file,"utf8");
  if(!html.includes('>데이터 분석</a>')){
    const rel=path.relative(root,file).replace(/\\/g,"/");
    const depth=rel.split("/").length-1;
    const pre="../".repeat(depth);
    html=html.replace(/(<a(?: class="active")? href="[^"]*products\/">제품 정보<\/a>)/,`$1<a href="${pre}insights/">데이터 분석</a>`);
  }
  html=html.replace(/(<a(?: class="active")? href="[^"]*rp\/">RP 계산기<\/a>)(<a(?: class="active")? href="[^"]*cost\/">원가 계산기<\/a>)(<a(?: class="active")? href="[^"]*dilution\/">희석 계산기<\/a>)(<a(?: class="active")? href="[^"]*rp-value\/">포인트 효율<\/a>)/, "$1$4$3$2");
  html=html.replace(/· v4\.8\.0/g,`· v${version}`).replace(/common\.css\?v=[0-9.]+/g,`common.css?v=${version}`).replace(/common\.js\?v=[0-9.]+/g,`common.js?v=${version}`);
  fs.writeFileSync(file,html,"utf8");
}

const homeFile=path.join(root,"index.html");
let home=fs.readFileSync(homeFile,"utf8");
if(!home.includes('id="data-analysis-intro"')) home=home.replace('<section class="tips-card">',`<section class="card" id="data-analysis-intro"><span class="badge">직접 계산한 콘텐츠</span><h2>YL Toolkit 데이터 분석</h2><p>99개 제품 데이터를 이용한 포인트 효율 분포, RP별 실제 조합, 포인트 활용 사례 등을 확인할 수 있습니다.</p><a class="btn secondary" href="./insights/">분석실 보기 →</a></section>\n\n<section class="tips-card">`);
home=home.replace('<b>v4.8.0</b>',`<b>v${version}</b>`).replace('<ul>\n      <li>제품별 1PV당 제품가치를 계산하는 포인트 구매 효율 비교기 추가</li>',`<ul>\n      <li>99개 제품 데이터 기반 포인트 효율 분포와 카테고리 분석 추가</li>\n      <li>20·40·60·80·100 RP 실제 조합 및 포인트 활용 사례 추가</li>\n      <li>DIY 원가 사례와 데이터·계산 기준 페이지 추가</li>\n      <li>제품 상세 초기 HTML 가격·PV 자동 주입 구조 추가</li>`);
fs.writeFileSync(homeFile,home,"utf8");

const aboutFile=path.join(root,"about/index.html");
let about=fs.readFileSync(aboutFile,"utf8");
about=about.replace(/<h2>운영 목적<\/h2><p>.*?<\/p><p>/s,'<h2>운영 목적</h2><p>YL Toolkit은 실제 제품 구매와 DIY 준비 과정에서 RP 조합, 포인트 효율, 희석량과 원가를 반복 계산해야 하는 불편을 줄이기 위해 만든 개인 제작 무료 도구입니다. 프로그래밍 지식이 없어도 휴대전화에서 쉽게 사용할 수 있도록 모바일 중심으로 제작합니다.</p><p>');
if(!about.includes('<h3>포인트 구매 효율 비교기</h3>')) about=about.replace('<h2>데이터 관리 원칙</h2>','<h3>포인트 구매 효율 비교기</h3><p>회원가와 PV로 1PV당 제품가치를 계산해 제품 사이의 금액 대응 차이를 비교합니다.</p><h3>제품 정보센터</h3><p>등록된 8개 에센셜오일의 공식 사실정보와 YL Toolkit 편집 설명, 가격·RP를 구분해 제공합니다.</p><h3>데이터 분석 콘텐츠</h3><p>99개 제품의 실제 데이터와 계산기 공식을 바탕으로 분포, RP 조합과 원가 사례를 분석합니다.</p>\n<h2>데이터 관리 원칙</h2>');
if(!about.includes('href="../methodology/"')) about=about.replace('<h2>계산 정확도 관리 원칙</h2>',`<p><a class="text-link" href="../methodology/">데이터·계산 기준 자세히 보기 →</a></p><h2>계산 정확도 관리 원칙</h2>`);
fs.writeFileSync(aboutFile,about,"utf8");

const sitemapFile=path.join(root,"sitemap.xml");
let sitemap=fs.readFileSync(sitemapFile,"utf8");
if(!sitemap.includes('/insights/</loc>')){
  const additions=['insights/','insights/point-value-analysis/','insights/rp-scenarios/','insights/points-or-cash/','insights/diy-cost-examples/','methodology/'].map(slug=>`  <url>\n    <loc>https://yltoolkit-droid.github.io/${slug}</loc>\n    <lastmod>${releaseDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${slug==='insights/'?'0.8':'0.7'}</priority>\n  </url>`).join('\n');
  sitemap=sitemap.replace('</urlset>',`${additions}\n</urlset>`);
}
fs.writeFileSync(sitemapFile,sitemap,"utf8");
console.log(JSON.stringify({products:products.length,valid:valid.length,excluded:excluded.length,stats,categories,scenarios},null,2));
