const app = require('../server.js');
const supertest = require('supertest');
const agent = supertest.agent(app)


describe("GET /people", function() {



    it("Get a JSON list of people", function(done) {
        console.log("Running Test")
        //console.log(app)
        request(app)
            .get("/people")
            .expect(200)
            .end(done);
    });
});
