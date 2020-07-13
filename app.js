const url = 'https://api.thecatapi.com/v1/images/search';

async function getKitty(){
  const response = await fetch(url);
  const data = await response.json();


  document.getElementById("app").innerHTML=`
    
  <img  class="img-container" src="${data[0].url}">

  `

}

getKitty()

