
function translateApi(){
  

    var fromTExt = document.getElementById("from").value;
    var from = document.getElementById("fromselect").value;
    var to = document.getElementById("toselect").value;
  if(fromTExt){
    document.getElementById("loader").style.display = "inline-block";
    const apiUrl = 'https://api.mymemory.translated.net/get?q='+fromTExt+'&langpair='+from+'|'+to;
 if(document.getElementById("translate-comp").style.display == "block"){
  document.getElementById("translate-comp").style.display = "none";
  document.getElementById("loader").style.display = "block";
 }
fetch(apiUrl)
  .then(response => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("translate-comp").style.display = "block";
    console.log(document.getElementById("translate-comp").style.display);
   
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    document.getElementById("to").value = data["matches"][0]["translation"];
    setTimeout(transComp,2000)
   
  })
  .catch(error => {
    console.error('Error:', error);
  });

}else{
  document.getElementById("error-dialog").style.display = "flex";
}
}
function transComp(){
  document.getElementById("translate-comp").style.display = "none";
}
function dialogClose(){
  document.getElementById("error-dialog").style.display = "none";
}
function copyClipfrom(){
  var text = document.getElementById("from").value;
  document.getElementById("copySquare").style.display ="inline-block"
  document.getElementById("fromCopy").style.display ="none";
  navigator.clipboard.writeText(text);
  setTimeout(squareTime,1000);

}
function squareTime(){
  document.getElementById("copySquare").style.display ="none"
  document.getElementById("fromCopy").style.display ="inline-block";
}

function copyClipto(){
  var text = document.getElementById("to").value;
  document.getElementById("copySquare2").style.display ="inline-block"
  document.getElementById("toCopy").style.display ="none";
  navigator.clipboard.writeText(text);
  setTimeout(squareTime2,1000);

}
function squareTime2(){
  document.getElementById("copySquare2").style.display ="none"
  document.getElementById("toCopy").style.display ="inline-block";
}
function changeSelection(){
  var from = document.getElementById("fromselect").value;
  var to = document.getElementById("toselect").value;
  var fromtext = document.getElementById("from").value;
  var totext = document.getElementById("to").value;
  document.getElementById("to").value = fromtext;
  document.getElementById("from").value = totext;
  document.getElementById("fromselect").value = to;
  document.getElementById("toselect").value = from;
}
