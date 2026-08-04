(function(){
  const root=document.querySelector("[data-product-id]");
  if(!root)return;
  const error=root.querySelector("[data-product-error]");
  if(typeof PRODUCTS==="undefined"){if(error)error.textContent="제품 데이터를 불러오지 못했습니다.";return;}
  const product=PRODUCTS.find(item=>item.id===Number(root.dataset.productId));
  if(!product){if(error)error.textContent="제품 데이터를 확인할 수 없습니다.";return;}
  const set=(selector,value)=>{const el=root.querySelector(selector);if(el)el.textContent=value;};
  set("[data-product-price]",product.price.toLocaleString("ko-KR")+"원");
  set("[data-product-rp]",product.rp.toLocaleString("ko-KR",{minimumFractionDigits:0,maximumFractionDigits:2})+" RP");
  const volumeMatch=product.name.match(/(\d+(?:\.\d+)?)\s*ml/i);
  if(volumeMatch)set("[data-product-volume]",volumeMatch[1]+"ml");
  set("[data-product-updated]","2026-08-04");
  if(error)error.textContent="YL Toolkit 제품 데이터를 사용합니다. 실제 주문 화면을 우선하세요.";
})();
