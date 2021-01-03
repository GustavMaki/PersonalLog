url =`https://api.airtable.com/v0/appZiXTCH56y3q7Yk/journal?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&api_key=keypdbXZeoldeTC7L`;

fetch(url)
     .then(response => response.json())
     .then(data => {
        const {records} = data;
  
        for(var i=0; i < data.records.length ; i++){
        const li = document.createElement("p");
        li.classList.add("utgifter");
        color=data.records[i].fields.Color;

    
        const markup = `
          <div id= "backlogObj">
              <p id="notesListDate">${data.records[i].fields.Entry}</p>
          </div>
        `;
       
        li.innerHTML = markup;
        document.getElementById("utgifter").appendChild(li);
     }
      })