
function translateApi(){
  

    var fromTExt = document.getElementById("from").value;
    
  if(fromTExt){
    document.getElementById("loader").style.display = "inline-block";
    const apiUrl = 'https://api.mymemory.translated.net/get?q='+fromTExt+'&langpair=en|hi';
// Make a GET request
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
    
   
  })
  .catch(error => {
    console.error('Error:', error);
  });

}else{
  document.getElementById("error-dialog").style.display = "flex";
}
}

function dialogClose(){
  document.getElementById("error-dialog").style.display = "none";
}
function copyClipfrom(){
  var text = document.getElementById("from").value;

  navigator.clipboard.writeText(text);

}
function copyClipto(){
  var text = document.getElementById("to").value;
  console.log(text);
  navigator.clipboard.writeText(text);

}
function changeSelection(){
  var from = document.getElementById("fromselect").value;
  var fromtext = document.getElementById("from").value;
  var totext = document.getElementById("to").value;
  var to = document.getElementById("toselect").value;
  document.getElementById("to").value = fromtext;
  document.getElementById("from").value = totext;
  document.getElementById("fromselect").value = to;
  document.getElementById("toselect").value = from;
}
// function translateApi2(){
//   var fromTExt = document.getElementById("from").value;
//   var res = fetch("https://libretranslate.com/translate", {
// 	method: "POST",
// 	body: JSON.stringify({
// 		q: fromTExt,
// 		source: "auto",
// 		target: "hi",
// 		format: "text",
// 		alternatives: 3,
// 		api_key: ""
// 	}),
// 	headers: { "Content-Type": "application/json" }
// });

// console.log(res.json());
// }
function textToSpeech(){
    const axios = require('axios');

    const options = {
    
      method: 'POST',
    
      url: 'https://api.play.ht/v1/convert',
    
      headers: {
    
        'Content-Type': 'application/json',
    
        'Authorization': 'ebba2770091144b080b8853f53fd6189'
    
      },
    
      data: {
    
        text: 'Welcome to PlayHT!',
    
        voice: 'en_us_male',
    
        output_format: 'mp3'
    
      }
    
    };
    
    axios.request(options).then(response => {
    
      console.log(response.data);
    
    }).catch(error => {
    
      console.error(error);
    
    });


}
