
const $=(id)=>document.getElementById(id);
const tbody=()=>document.getElementById("materialRows");
function won(n){return isFinite(n)?Math.round(n).toLocaleString("ko-KR")+"원":"0원"}
function num(v){return Number(v)||0}
function rowTemplate(data={}){
  const tr=document.createElement("tr");
  tr.innerHTML=`
    <td><input class="mat-name" value="${data.name||""}" placeholder="예: 알로에 베라겔"></td>
    <td><input class="buy-qty num" type="number" step="0.01" value="${data.buyQty??""}" placeholder="구입량"></td>
    <td><select class="unit"><option value="g" ${data.unit==="g"?"selected":""}>g</option><option value="ml" ${data.unit==="ml"?"selected":""}>ml</option><option value="개" ${data.unit==="개"?"selected":""}>개</option></select></td>
    <td><input class="buy-price num" type="number" step="1" value="${data.buyPrice??""}" placeholder="구입가"></td>
    <td><input class="use-qty num" type="number" step="0.01" value="${data.useQty??""}" placeholder="사용량"></td>
    <td class="row-cost num">0원</td>
    <td><button class="delete-row" type="button">삭제</button></td>`;
  tr.querySelectorAll("input,select").forEach(el=>el.addEventListener("input",calculateCost));
  tr.querySelector(".delete-row").addEventListener("click",()=>{tr.remove();calculateCost()});
  return tr;
}
function addRow(data){tbody().appendChild(rowTemplate(data));calculateCost()}
function calculateCost(){
  let materialTotal=0;
  document.querySelectorAll("#materialRows tr").forEach(tr=>{
    const buyQty=num(tr.querySelector(".buy-qty").value);
    const buyPrice=num(tr.querySelector(".buy-price").value);
    const useQty=num(tr.querySelector(".use-qty").value);
    const cost=buyQty>0?(buyPrice/buyQty)*useQty:0;
    materialTotal+=cost;
    tr.querySelector(".row-cost").textContent=won(cost);
  });
  const containerCost=num($("containerCost").value);
  const labelCost=num($("labelCost").value);
  const packagingCost=num($("packagingCost").value);
  const miscCost=num($("miscCost").value);
  const yieldCount=Math.max(num($("yieldCount").value),1);
  const marginRate=num($("marginRate").value)/100;
  const batchTotal=materialTotal+containerCost+labelCost+packagingCost+miscCost;
  const unitCost=batchTotal/yieldCount;
  const sellingPrice=marginRate>=1?0:unitCost/(1-marginRate);
  const profit=sellingPrice-unitCost;
  $("materialTotal").textContent=won(materialTotal);
  $("batchTotal").textContent=won(batchTotal);
  $("unitCost").textContent=won(unitCost);
  $("sellingPrice").textContent=won(sellingPrice);
  $("profit").textContent=won(profit);
}
function clearRows(){tbody().innerHTML="";addRow()}
function loadSample(){
  tbody().innerHTML="";
  [
    {name:"알로에 베라겔",buyQty:300,unit:"g",buyPrice:12000,useQty:72},
    {name:"아르간오일",buyQty:100,unit:"ml",buyPrice:18000,useQty:8},
    {name:"헥산디올",buyQty:100,unit:"g",buyPrice:4500,useQty:2},
    {name:"에센셜오일",buyQty:15,unit:"ml",buyPrice:16800,useQty:1}
  ].forEach(addRow);
  $("containerCost").value=600;$("labelCost").value=100;$("packagingCost").value=300;$("miscCost").value=0;$("yieldCount").value=1;$("marginRate").value=40;
  calculateCost();
}
document.addEventListener("DOMContentLoaded",()=>{
  $("addRowBtn").addEventListener("click",()=>addRow());
  $("clearBtn").addEventListener("click",clearRows);
  $("sampleBtn").addEventListener("click",loadSample);
  ["containerCost","labelCost","packagingCost","miscCost","yieldCount","marginRate"].forEach(id=>$(id).addEventListener("input",calculateCost));
  addRow();
  calculateCost();
});
