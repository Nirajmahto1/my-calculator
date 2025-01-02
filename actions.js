
function translateApi(){
    var fromTExt = document.getElementById("from").value;
    const apiUrl = 'https://api.mymemory.translated.net/get?q='+fromTExt+'&langpair=en|hi';
// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    document.getElementById("to").value = data["matches"][1]["translation"]+data["matches"][0]["translation"];
  })
  .catch(error => {
    console.error('Error:', error);
  });
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
