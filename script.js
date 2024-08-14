function DarkMode(){

    let body1 = document.body
    body1.classList.toggle('darkMode')

    var btn = document.getElementById('sarah');
    if(btn.innerText=="Darkmode"){
       btn.innerText="light-mode";
      }
    else{
      btn.innerText="Darkmode";
      }

}