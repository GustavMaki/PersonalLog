const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
id = urlParams.get('');
console.log(id);

document.getElementById("EntryButton").href="/add?=" + id

url =`https://api.airtable.com/v0/appZiXTCH56y3q7Yk/journal?filterByFormula=User="${id}"&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&api_key=keypdbXZeoldeTC7L`;

fetch(url)
     .then(response => response.json())
     .then(data => {
        const {records} = data;
  
        for(var i=0; i < data.records.length ; i++){
        const li = document.createElement("p");
        li.classList.add("log");

    
        const markup = `
          <div id= "backlogObj">
              <p id="ListText">${data.records[i].fields.Entry}</p>
              <p id="ListDate">${data.records[i].fields.Date}</p>
          </div>
        `;
       
        li.innerHTML = markup;
        document.getElementById("log").appendChild(li);
     }
      });

document.querySelector("p").addEventListener("click", e => {
    e.preventDefault();

url ='https://api.airtable.com/v0/appZiXTCH56y3q7Yk/journal';

var text= document.getElementById("addText").value;

const addData = {
    "fields":{
        "Entry": text,
        "User": id
    }
}

fetch (url, {method: 'POST' , body: JSON.stringify(addData),
headers: {'Authorization': 'Bearer keypdbXZeoldeTC7L', 'Content-Type': 'application/json'}})
.then(response => response.json())
.then(json => {console.log(json)
    window.location.href= "/backlog?="+ id;})
.catch(err => console.log (err));

});