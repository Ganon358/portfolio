let compt=0;
let exemple = document.getElementById("boutonmenu");
let text = document.getElementById("sous_menu_deroulant");
text.classList.add("none");
function Solution(){
  text.classList.remove("none");
  compt+=1
  if (compt==2){
      compt=0;
      text.classList.add("none");
  }
}