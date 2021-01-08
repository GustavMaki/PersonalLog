const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(require('chai-json')); 

const expect = chai.expect;

const baseUrl = "https://api.airtable.com/v0/appZiXTCH56y3q7Yk/";

chai.use(chaiHttp);

const notesdata= {
    "title": "hej",
    "content": "hjälp",
    "id": 1
};

const changeddata= {
    title: "changedtitle",
    content: "changedcontent",
    id: 1
};

describe("/GET all database entries", function(){
    it("GET all database entries", function(done){
        chai.request(baseUrl)
        .get("journal?api_key=keypdbXZeoldeTC7L")
        .end(function(err, res){
            expect(res).to.have.status(200);
            done();
        })
    });
});

