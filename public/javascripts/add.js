document.querySelector("p").addEventListener("click", e => {
    e.preventDefault();

url ='https://api.airtable.com/v0/appZiXTCH56y3q7Yk/journal';

var text= document.getElementById("addText").value;

const addData = {
    "fields":{
        "Entry": text
    }
}

fetch (url, {method: 'POST' , body: JSON.stringify(addData),
headers: {'Authorization': 'Bearer keypdbXZeoldeTC7L', 'Content-Type': 'application/json'}})
.then(response => response.json())
.then(json => {console.log(json)
    window.location.href= "/add";})
.catch(err => console.log (err));

});