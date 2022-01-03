import express from 'express';
const router = express.Router();

//Login handle
router.get('/login', (req: any, res: any) => {

})

//Register handle
router.post('/register', (req: any, res: any) => {
  const {fullName, businessName, email, password} = req.body;
  let errors = [];
  
  //Checking required fields
  if(!fullName || !businessName || !email || !password){
    errors.push({msg: 'Please fill in all fields'})
  }
  
  if(password.length < 6 ){
    errors.push({msg: 'Password should be at least 6 characters'})
  }
  
  if(errors.length > 0) {
  
  } else {
    res.send('Success!')
  }
  
})

export default router;