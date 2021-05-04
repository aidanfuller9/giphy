// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
let custom_api_url = ""
$(".search-button").click(function(){
  fetch(custom_api_url)
  .then(function(response) {
        return response.json();
        })
  .then(function(data) {
        console.log(data);
        console.log(data.custom_api_url);
        });
console.log(custom_api_url)
  
});

