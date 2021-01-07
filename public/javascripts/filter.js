const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
id = urlParams.get('');
console.log(id);

document.getElementById("EntryButton").href="/add?=" + id;
document.getElementById("allLink").href="/?=" + id;


url =`https://api.airtable.com/v0/appZiXTCH56y3q7Yk/journal?filterByFormula=User="${id}"&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&api_key=keypdbXZeoldeTC7L`;

fetch(url)
     .then(response => response.json())
     .then(data => {
        const {records} = data;

        
        
        for(var i=0; i < data.records.length ; i++){
        const li = document.createElement("p");
        li.classList.add("log");
        
        if(data.records[i].fields.Star === "1"){
        
        const markup = `
        <div id= "backlogObj" style="background-color:${data.records[i].fields.Color}">
              <p id="starText">${data.records[i].fields.Entry}</p>
              <p id="ListDate">${data.records[i].fields.Date}</p>
          </div>
        `;
       
        li.innerHTML = markup;
        document.getElementById("log").appendChild(li);
     }}
});
