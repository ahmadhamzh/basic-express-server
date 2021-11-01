'use strict'



const validatorMiddleware = require('../src/middleware/logger')

describe('validator middileware', ()=>{

let resStatusSpy;
let req = {};
let res = {};
let next = jest.fn()

beforeEach(()=>{
    resStatusSpy = jest.spyOn(console, 'log').mockImplementation()
})

afterEach(()=>{
    resStatusSpy.mockRestore()
})

test('check if res.status work', ()=>{
    validatorMiddleware(req, res, next);
    expect(resStatusSpy).toHaveBeenCalled()
})

test('check if next work', ()=>{
    validatorMiddleware(req, res, next);
    expect(next).toHaveBeenCalled()
})







})