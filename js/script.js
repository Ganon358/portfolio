let compt=0;
let exemple = document.getElementById("boutonmenu");
let texte = document.getElementsByClassName("sous_menu_deroulant");
function Solution(){
  console.log("test")
  for(i=0; i<texte.length;i++){
    texte[i].classList.remove("none")
  }
  compt+=1
  if (compt==2){
      compt=0;
      for(i=0; i<texte.length;i++){
        texte[i].classList.add("none")
      }
  }
}