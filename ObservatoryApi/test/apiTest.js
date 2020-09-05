const request = require('supertest');
var chai = require('chai');
var expect=chai.expect;
const app = require('../server');

var token;
var product = {
  "name":  "Προϊόν 1",
  "description":  "Περιγραφή προϊόντος 1",
  "category":  "Κατηγορία Πρώτη",
  "tags": ["Υπολογιστές"],
  "id":""
};
var product2 = {
  "name":  "Προϊόν 2",
  "description":  "Περιγραφή προϊόντος 2",
  "category":  "Κατηγορία 2",
  "tags": ["κουζίνα"],
  "id":""
};


describe('Wait for Mongo DB', function(){
  it('waits for mongoDb connection', function (done){
    this.timeout(0);
    done();
  });
  setTimeout(function() {
    run()
  }, 15000);
});

describe('Test REST API endpoints (user & product)',function(){
  describe('POST /observatory/api/login', function () {
    let data = {
      "username": "kouz17",
      "password": "password1234"
    }
    it('respond with json containing a JWT token', function (done) {
      request(app)
        .post('/observatory/api/login')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err,res){
          if (err)
            throw err;
          token=res.body.token;
          done();
        });
    });
  });
  describe('POST /observatory/api/products',function(){
    it('add a new product',function(done){
      request(app)
        .post('/observatory/api/products')
        .set('x-observatory-auth',token)
        .send(product)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err,res){
          if (err)
            throw err;
          expect(res.body.name).to.eql(product.name);
          expect(res.body.description).to.eql(product.description);
          expect(res.body.category).to.eql(product.category);
          expect(res.body.tags).to.eql(product.tags);
          product.id=res.body.id;
          done();
        });
      });
    });
  describe('GET /observatory/api/products/:_id',function(){
      it('get a product by id',function(done){
        request(app)
          .get('/observatory/api/products/'+product.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err,res){
            if (err)
              throw err;
            expect(res.body.name).to.eql(product.name);
            expect(res.body.description).to.eql(product.description);
            expect(res.body.category).to.eql(product.category);
            expect(res.body.tags).to.eql(product.tags);
            done();
          });
      });
    });
    describe('PUT /observatory/api/products/:_id',function(){
      it('update existing product',function(done){
        request(app)
          .put('/observatory/api/products/'+product.id)
          .set('x-observatory-auth',token)
          .send(product2)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err,res){
            if (err)
              throw err;
            expect(res.body.name).to.eql(product2.name);
            expect(res.body.description).to.eql(product2.description);
            expect(res.body.category).to.eql(product2.category);
            expect(res.body.tags).to.eql(product2.tags);
            product2.id=res.body.id;
            done();
          });
        });
      });
      describe('PATCH /observatory/api/products/:_id',function(){
        it('update specific field existing product',function(done){
          request(app)
            .patch('/observatory/api/products/'+product.id)
            .set('x-observatory-auth',token)
            .send({"name" : "Προϊόν 3"})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err,res){
              if (err)
                throw err;
              expect(res.body.name).to.eql("Προϊόν 3");
              done();
            });
          });
        });
        describe('DELETE /observatory/api/products/:_id',function(){
          it('delete existing product',function(done){
            request(app)
              .delete('/observatory/api/products/'+product.id)
              .set('x-observatory-auth',token)
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .expect(200)
              .end(function(err,res){
                if (err)
                  throw err;
                expect(res.body.message).to.eql("OK");
                done();
              });
            });
          });
          describe('POST /observatory/api/logout', function () {
            it('logs user out', function (done) {
              request(app)
                .post('/observatory/api/logout')
                .set('x-observatory-auth',token)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err,res){
                  if (err)
                    throw err;
                  expect(res.body.message).to.eql("OK");
                  done();
                });
            });
          });

});
