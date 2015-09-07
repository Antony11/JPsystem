/**
 * Created by Antony on 9/6/2015.
 */

var request=require('supertest');

var app=require('../app.js');

describe('GET /',function(){
   it('provides application name as response',function(done){
      request(app).get('/').expect('Jurassic Park eco-system monitor',done);
   });
});