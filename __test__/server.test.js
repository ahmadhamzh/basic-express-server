'use strict'

const {app} = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('web server', ()=>{

test('check for bad rout', async ()=>{
    const response = await mockRequest.get('/bad');
    expect(response.status).toEqual(404)
});

test('check for bad method', async ()=>{
    const response = await mockRequest.get('/');
    expect(response.request.method).toEqual('GET')
});

test('check  if no name in the query string', async ()=>{
    const response = await mockRequest.get('/person');
    expect(response.status).toEqual(500)
});

test('given a name in the query string, the output object is correct', async ()=>{
    const response = await mockRequest.get('/person?name=ahmad');
    expect(response.body.name).toEqual('ahmad')
});

})