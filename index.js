var giphyAPIkey = "XqmOeIweZ7Pi6rX8SSGPUpltW49mUDHG"

function sendapirequest(){
  var userinput = document.getElementById("input").value;
  console.log(userinput);
  var newchild = document.createElemnt("div");
  newchild.innerText = userinput;
  document.body.appendChild(newchild);

  var giphyapiurl = `https://api.giphy.com/v1/gifs/q=${"input"}&api_key=${giphyAPIkey}`;
  fetch(giphyapiurl);
    .then(function(response){
      return respomse.json();
    })
    .then(function(json){
      var img = dpcument.createElemnt("img");

      img.src=json["data"][0]["images"]["fixed_height"]["url"]
      document.body.appendChild(img);
    })
  }
