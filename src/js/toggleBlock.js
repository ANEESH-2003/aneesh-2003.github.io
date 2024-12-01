function toggleblock(blockId)
{
  var block = document.getElementById(blockId);
  if (block.style.display == 'none') {
    block.style.display = 'block' ;
  } else {
    block.style.display = 'none' ;
  }
}
document.addEventListener('keydown',(event)=>{
  if(event.key=='[')
  {
    const togg = document.getElementById("toggle");
    togg.checked=!togg.checked;
    extracurricularClick(togg);
  }
})
function extracurricularClick(checkbox) {
  var acads = document.querySelectorAll(".acads");
  var extra = document.querySelectorAll(".extra");
  if (checkbox.checked == true) {
      acads.forEach(x => x.classList.add("hidden"));
      extra.forEach(x => x.classList.remove("hidden"));
  } else {
      acads.forEach(x => x.classList.remove("hidden"));
      extra.forEach(x => x.classList.add("hidden"));
  }
}