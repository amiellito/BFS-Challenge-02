const api_key = "$api_key=50d57945-64d7-4f99-9bb3-46d5026782fb"
const url = 'https://api.thecatapi.com/v1/images/search?mime_types=jpg&format=landscape' + api_key;
const quotes ='https://api.kanye.rest/'
const title = './title.json'
const brit = './british.json'



async function getKitty(){
  const response = await fetch(url);
  const data = await response.json();


  document.getElementById("app").innerHTML=`
    
  <img  class="img-container" src="${data[0].url}">

  `

}

async function getQuote(){
  const response = await fetch(quotes);
  const qData = await response.json();


  document.getElementById("quote").innerHTML=`
    
  <p>${qData.quote}</p>

  `

}

async function getTitle(){
  const response = await fetch(title);
  const tData = await response.json();
  const titleRandom = Math.floor(Math.random()*tData.length);


  document.getElementById("title").innerHTML=`
    
  <h2>${tData[titleRandom].title}</h2>

  `

}

async function getEng(){
  const response = await fetch(brit);
  const bData = await response.json();
  const engRandom = Math.floor(Math.random()*bData.length);


  document.getElementById("eng").innerHTML=`
    
  ${bData[engRandom].english} !

  `

}



getKitty()
getQuote()
getTitle()
getEng()

