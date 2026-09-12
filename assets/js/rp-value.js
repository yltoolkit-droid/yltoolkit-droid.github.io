(function(){
  'use strict';
  const listEl=document.getElementById('valueList');
  const searchEl=document.getElementById('valueSearch');
  const categoryEl=document.getElementById('valueCategory');
  const sortEl=document.getElementById('valueSort');
  const comparePanel=document.getElementById('comparePanel');
  const compareList=document.getElementById('compareList');
  const compareCount=document.getElementById('compareCount');
  const clearCompare=document.getElementById('clearCompare');
  const copyCompare=document.getElementById('copyCompare');
  const statCount=document.getElementById('statCount');
  const statMedian=document.getElementById('statMedian');
  const statTop=document.getElementById('statTop');
  if(!listEl || !Array.isArray(window.PRODUCTS||PRODUCTS)) return;

  const source=(window.PRODUCTS||PRODUCTS)
    .filter(p=>Number(p.price)>0 && Number(p.rp)>0)
    .map(p=>({...p,value:Number(p.price)/Number(p.rp)}))
    .sort((a,b)=>b.value-a.value);
  const total=source.length;
  source.forEach((p,i)=>p.rank=i+1);
  const highCut=Math.ceil(total*.25);
  const lowStart=total-Math.ceil(total*.25)+1;
  const selected=new Set();

  function grade(p){
    if(p.rank<=highCut) return {key:'high',label:'포인트 구매 우선 추천'};
    if(p.rank>=lowStart) return {key:'low',label:'현금 구매도 비교'};
    return {key:'mid',label:'필요도에 따라 선택'};
  }
  const won=n=>Math.round(n).toLocaleString('ko-KR')+'원';
  const pv=n=>Number(n).toLocaleString('ko-KR',{maximumFractionDigits:2})+' PV';
  const categories=[...new Set(source.map(p=>p.category).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'ko'));
  categories.forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;categoryEl.appendChild(o)});

  const sortedValues=source.map(p=>p.value).sort((a,b)=>a-b);
  const median=sortedValues.length%2?sortedValues[(sortedValues.length-1)/2]:(sortedValues[sortedValues.length/2-1]+sortedValues[sortedValues.length/2])/2;
  statCount.textContent=total.toLocaleString('ko-KR')+'개';
  statMedian.textContent=won(median);
  statTop.textContent=won(source[0].value);

  function getFiltered(){
    const q=searchEl.value.trim().toLowerCase();
    const c=categoryEl.value;
    const rows=source.filter(p=>(!q||p.name.toLowerCase().includes(q))&&(!c||p.category===c));
    switch(sortEl.value){
      case 'valueAsc': rows.sort((a,b)=>a.value-b.value);break;
      case 'priceDesc': rows.sort((a,b)=>b.price-a.price);break;
      case 'rpDesc': rows.sort((a,b)=>b.rp-a.rp);break;
      case 'name': rows.sort((a,b)=>a.name.localeCompare(b.name,'ko'));break;
      default: rows.sort((a,b)=>b.value-a.value);
    }
    return rows;
  }
  function render(){
    const rows=getFiltered();
    if(!rows.length){listEl.innerHTML='<div class="empty-state">조건에 맞는 제품이 없습니다.</div>';return}
    listEl.innerHTML=rows.map(p=>{
      const g=grade(p); const checked=selected.has(p.id)?' checked':'';
      return `<article class="value-card">
        <div class="value-card-head"><div><h2>${escapeHtml(p.name)}</h2><span class="value-category">${escapeHtml(p.category||'기타')}</span></div><span class="value-rank">전체 ${p.rank}위 / ${total}개</span></div>
        <div class="value-metrics"><div class="value-metric"><span>회원가</span><strong>${won(p.price)}</strong></div><div class="value-metric"><span>제품 PV</span><strong>${pv(p.rp)}</strong></div><div class="value-metric"><span>1PV당 제품가치</span><strong>${won(p.value)}</strong></div></div>
        <div class="value-card-foot"><span class="efficiency-badge efficiency-${g.key}">${g.label}</span><label class="compare-check"><input type="checkbox" data-id="${p.id}"${checked}> 비교에 담기</label></div>
      </article>`
    }).join('');
    listEl.querySelectorAll('input[data-id]').forEach(el=>el.addEventListener('change',()=>{const id=Number(el.dataset.id);if(el.checked){if(selected.size>=3){el.checked=false;alert('비교 제품은 최대 3개까지 선택할 수 있어요.');return}selected.add(id)}else selected.delete(id);renderCompare()}));
  }
  function getCompareRows(){return source.filter(p=>selected.has(p.id)).sort((a,b)=>b.value-a.value)}
  function renderCompare(){
    const rows=getCompareRows();
    comparePanel.hidden=!rows.length;
    compareCount.textContent=rows.length;
    compareList.innerHTML=rows.map(p=>`<div class="compare-row"><div class="compare-product"><span>${escapeHtml(p.name)}</span><small>${pv(p.rp)}</small><small class="compare-print-detail">가격 ${won(p.price)} · 전체 ${p.rank}위 / ${total}개</small></div><strong>${won(p.value)}</strong><span>${grade(p).label}</span></div>`).join('');
  }
  function buildCompareCopyText(){const rows=getCompareRows();return'[YL Toolkit 포인트 구매 효율 비교]\n\n선택 제품\n\n'+rows.map((p,i)=>`${i+1}. ${p.name}\n   PV: ${pv(p.rp)}\n   가격: ${won(p.price)}\n   1PV당 제품가치: ${won(p.value)}\n   전체 순위: ${p.rank}위 / ${total}개\n   효율 안내: ${grade(p).label}`).join('\n\n')}
  function escapeHtml(s){return String(s).replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]))}
  [searchEl,categoryEl,sortEl].forEach(el=>el.addEventListener(el===searchEl?'input':'change',render));
  clearCompare.addEventListener('click',()=>{selected.clear();render();renderCompare()});
  copyCompare.addEventListener('click',async()=>{const text=buildCompareCopyText();try{await navigator.clipboard.writeText(text);alert('비교 결과를 복사했습니다.')}catch(err){alert(text)}});
  comparePanel.classList.add('print-result');
  comparePanel.insertAdjacentHTML('afterbegin','<div class="print-heading"><b>YL Toolkit</b><h1>포인트 구매 효율 비교기</h1></div>');
  document.getElementById('printCompare').addEventListener('click',()=>window.print());
  render();
})();
