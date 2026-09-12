
const $ = (id) => document.getElementById(id);

function round2(n){ return Math.round(n * 100) / 100; }
function fmt(n){ return Number.isInteger(n) ? String(n) : String(round2(n)); }

function calculateDilution(){
  const volume = Number($("totalVolume").value);
  const percent = Number($("dilutionPercent").value);
  const dropsPerMl = Number($("dropsPerMl").value);
  const mode = $("roundMode").value;

  if(!volume || volume <= 0 || !percent || percent <= 0 || !dropsPerMl || dropsPerMl <= 0){
    $("resultBox").innerHTML = "용량, 희석률, 1ml 방울 수를 입력해주세요.";
    return;
  }

  const eoMlRaw = volume * (percent / 100);
  const dropsRaw = eoMlRaw * dropsPerMl;

  let drops;
  if(mode === "floor") drops = Math.floor(dropsRaw);
  else if(mode === "ceil") drops = Math.ceil(dropsRaw);
  else drops = Math.round(dropsRaw);

  const eoMl = drops / dropsPerMl;
  const carrierMl = Math.max(volume - eoMl, 0);
  const actualPercent = volume > 0 ? (eoMl / volume) * 100 : 0;

  $("resultBox").innerHTML = `
    <div class="result-main">
      <div class="result-stat"><small>에센셜오일</small><b>${fmt(drops)}방울</b></div>
      <div class="result-stat"><small>오일 용량</small><b>${fmt(eoMl)}ml</b></div>
      <div class="result-stat"><small>베이스/캐리어</small><b>${fmt(carrierMl)}ml</b></div>
    </div>
    <ul class="info-list">
      <li>목표 희석률: ${fmt(percent)}%</li>
      <li>실제 계산 희석률: 약 ${fmt(actualPercent)}%</li>
      <li>기준: 1ml = ${fmt(dropsPerMl)}방울</li>
    </ul>
  `;
}

function setVolume(v){ $("totalVolume").value = v; calculateDilution(); }
function setPercent(v){ $("dilutionPercent").value = v; calculateDilution(); }

function buildDilutionCopyText(){
  const mode = $("roundMode").options[$("roundMode").selectedIndex].text;
  return [
    "[YL Toolkit 에센셜오일 희석 계산 결과]", "",
    `전체 용량: ${$("totalVolume").value}ml`,
    `희석률: ${$("dilutionPercent").value}%`,
    `1ml 기준: ${$("dropsPerMl").value}방울`,
    `방울 수 처리: ${mode}`, "", $("resultBox").innerText.trim()
  ].join("\n");
}

document.addEventListener("DOMContentLoaded", () => {
  const resultPanel = $("resultBox").closest(".calc-result");
  resultPanel.classList.add("print-result");
  resultPanel.insertAdjacentHTML("afterbegin",'<div class="print-heading"><b>YL Toolkit</b><h1>에센셜오일 희석 계산기</h1></div>');
  $("resultBox").insertAdjacentHTML("afterend",'<pre class="print-text" id="dilutionPrintText"></pre><div class="result-actions print-actions"><button class="secondary copy-action" id="dilutionCopyBtn" type="button">계산 결과 복사하기</button><button class="secondary copy-action" id="dilutionPrintBtn" type="button">인쇄 · PDF 저장</button></div>');
  $("calcDilutionBtn").addEventListener("click", calculateDilution);
  ["totalVolume","dilutionPercent","dropsPerMl","roundMode"].forEach(id => {
    $(id).addEventListener("input", calculateDilution);
    $(id).addEventListener("change", calculateDilution);
  });
  document.querySelectorAll("[data-volume]").forEach(btn => btn.addEventListener("click", () => setVolume(btn.dataset.volume)));
  document.querySelectorAll("[data-percent]").forEach(btn => btn.addEventListener("click", () => setPercent(btn.dataset.percent)));
  $("dilutionCopyBtn").addEventListener("click", async () => { const text=buildDilutionCopyText(); try{await navigator.clipboard.writeText(text);alert("계산 결과를 복사했어요.")}catch(err){alert(text)} });
  $("dilutionPrintBtn").addEventListener("click", () => { $("dilutionPrintText").textContent=buildDilutionCopyText(); window.print(); });
  calculateDilution();
});
