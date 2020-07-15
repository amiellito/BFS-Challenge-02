const api_key = "$api_key=50d57945-64d7-4f99-9bb3-46d5026782fb"
const url = 'https://api.thecatapi.com/v1/images/search?mime_types=jpg&format=landscape';
const quotes ='https://api.kanye.rest/'
const title = './title.json'
const brit = './british.json'


fetch(url)
  .then(results => results.json())
  .then(data => 
    {
    document.getElementById("app").innerHTML=`<img  class="img-container" src="${data[0].url}">`

      function yes(){
        vote = 1;
      }

      function no(){
        vote = 0;
      }

      document.getElementById("yes").onclick = yes();
      document.getElementById("no").onclick = no();
    
      //Create Object

      const vData = { 
        "image_id": data[0].id,
        "sub_id": "guest_user",
        "value": vote
       };


      fetch('https://api.thecatapi.com/v1/votes?', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '50d57945-64d7-4f99-9bb3-46d5026782fb'
        },
        body: JSON.stringify(vData),
      })
        .then(response => response.json())
        .then(vData => {
          console.log('Success:', vData);
        })
        .catch((error) => {
          console.error('Error:', error);
        });


    }
    )




fetch(quotes)
  .then(results => results.json())
  .then(qData => 
  
  document.getElementById("quote").innerHTML=`<p>${qData.quote}</p>`
  
  )


fetch(title)
  .then(results => results.json())
  .then(tData => {
    const titleRandom = Math.floor(Math.random()*tData.length);
  
    document.getElementById("title").innerHTML=`<h2>${tData[titleRandom].title}</h2>`

  }
  
  )

fetch(brit)
  .then(results => results.json())
  .then(bData => {
    const engRandom = Math.floor(Math.random()*bData.length);
  
    document.getElementById("eng").innerHTML=`${bData[engRandom].english} !`

  }
  
  )


////////////////////////////////////

//VOTING: I NEED TO CREATE THIS:

// {
//   "image_id": "asf2",
//   "sub_id": "my-user-1234",
//   "value": 1
// }

// AND SEND IT HERE: https://api.thecatapi.com/v1/votes?

//HEADER: x-api-key: 50d57945-64d7-4f99-9bb3-46d5026782fb
//CONTENT-TYPE: application/json


///////////////////////////////// 

//**** CREATE AN OBJECT ******//

// Create vote object

// const voteObj = new Object();

// voteObj.image_id = data[0].id;
// voteObj.sub_id = "guest_user";
// voteObj.value = voteValue;


// console.log(voteObj);

// console.log("vote object: " + JSON.stringify(voteObj));
// console.log(url);







































