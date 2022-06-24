const { body, validationResult } = require('express-validator');
 


const myown1={
    email: {
       
      isEmail: {
              errorMessage: 'Not EMAIL',

      },
      
    }
    }










const Validate= ((req, res, next)=> {

  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
  })
  module.exports= { Validate,myown1}
  

