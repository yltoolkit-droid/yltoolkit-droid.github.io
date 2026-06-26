
document.addEventListener("DOMContentLoaded",()=>{
  const n=document.getElementById("nav"),b=document.getElementById("menuToggle");
  if(b&&n)b.addEventListener("click",()=>n.classList.toggle("open"));
});
