const app = require('../server.js');
const supertest = require('supertest');
let agent = supertest.agent(app)


describe("POST /people", function() {

    it("tests that we post one user", function(done) {
        agent.post("/people")
            .type('form')
            .send({name: "pedro", age: 22, email: "pedro@pedro.pedro"}) //Request construction finished
            .expect( function(res){
                if (res.body.name !== "pedro") {
                    throw new Error("Saved Wrong Name")
                }
            })
            .end(function(err, res) {
                if(err) return done.fail(err)
                done()
            })
    })


    it("tests that we user name should be unique", function(done) {
        agent.post("/people")
            .type('form')
            .send({name: "pedro", age: 22})
            .expect('Content-Type', /json/)
            .expect(400)
            .expect(function(res) {
                if (res.body.code !== 11000) {
                    throw new Error(res.body.errmsg)
                }
            })
            .end(function(err, res) {
                if(err) return done.fail(err)
                done()
            })
    });

    it("Age should not be required", function(done) {
        agent.post("/people")
            .expect('Content-Type', /json/)
            .type('form')
            .send({name: "pedro2"})
            .expect(200)
            .end(function(err, res) {
                if(err) return done.fail(err)
                done()
            })
    })


});

var records;
describe("GET /people", function() {
    it("Get a JSON list of people", function(done) {
        agent.get("/people")
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((res) => {
                records = res.body;
                expect([res.body[0].name, res.body[1].name]).toContain("pedro")
            })
            .end(function(err, res) {
                if(err) return done.fail(err)
                done()
            })
    });
});

describe("POST /people/update", function() {
    it("Person deleted by name", function(done) {
        agent.post("/people/update")
            .type('form')
            .send({id: records[0]._id, age: 54, email: "pedro@pedro.pedro"})
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if(err) return done.fail(err)
                done()
            })
    });
});


describe("POST /people/delete", function() {
    it("should Person deleted by name", function(done) {
        agent.post("/people/delete")
            .type('form')
            .send({name: 'pedro2'})
            .expect('Content-Type', /json/)
            .expect((res) => { 
                console.log(res.body)
                if (!res.body) {throw new Error("Person not deleted") }} )
            .end(function(err, res) {
                if(err) return done.fail(err)
                done()
            })
    });

    it(" After, Get Index should not contain pedro", function(done) {
        agent.get("/people")
            .expect('Content-Type', /json/)
            .expect(200)
            .expect((res) => {
                records = res.body;
                expect([res.body[0].name]).not.toContain("pedro")
            })
            .end(function(err, res) {
                if(err) return done.fail(err)
                done()
            })
    });


});


