const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
id = urlParams.get('');
console.log(id);
var color;

document.getElementById("backButton").href="/?=" + id

document.querySelector("p").addEventListener("click", e => {
    e.preventDefault();

if(document.getElementById("favOption").value === "1") color= "#FFFFDA";
if(document.getElementById("favOption").value === "0") color= "#FFDFFF";

url ='https://api.airtable.com/v0/appZiXTCH56y3q7Yk/journal';

var text= document.getElementById("addText").value;

const addData = {
    "fields":{
        "Entry": text,
        "User": id,
        "Star": document.getElementById("favOption").value,
        "Color": color
    }
}

fetch (url, {method: 'POST' , body: JSON.stringify(addData),
headers: {'Authorization': 'Bearer keypdbXZeoldeTC7L', 'Content-Type': 'application/json'}})
.then(response => response.json())
.then(json => {console.log(json)
    window.location.href= "/?="+ id;})
.catch(err => console.log (err));

});