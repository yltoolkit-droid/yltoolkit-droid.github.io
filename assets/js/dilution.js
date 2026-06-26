
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

document.addEventListener("DOMContentLoaded", () => {
  $("calcDilutionBtn").addEventListener("click", calculateDilution);
  ["totalVolume","dilutionPercent","dropsPerMl","roundMode"].forEach(id => {
    $(id).addEventListener("input", calculateDilution);
    $(id).addEventListener("change", calculateDilution);
  });
  document.querySelectorAll("[data-volume]").forEach(btn => btn.addEventListener("click", () => setVolume(btn.dataset.volume)));
  document.querySelectorAll("[data-percent]").forEach(btn => btn.addEventListener("click", () => setPercent(btn.dataset.percent)));
  calculateDilution();
});
