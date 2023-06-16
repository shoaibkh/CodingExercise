import {factorial} from './Q1/factorial.js';
import {retrieveData} from './Q2/query.js';
import express from 'express'
import { serverRedering, uploadFile } from './Q3/services.js';
import { upload } from './Q3/middleware.js';
import { addUser, login, protectedFunction } from './Q4/services.js';
import { authenticateToken } from './Q4/middleware.js';
const app = express(); 
app.use(express.json());

//<!-- Question no 1 -->
console.log(factorial(5));

//<!-- Question no 2 -->
retrieveData();

//<!-- Question no 3 -->

app.get('/',serverRedering);
app.post('/uploadphoto', upload.single('myImage'), uploadFile)

//<!-- Question no 4 -->
app.post('/register', addUser);
app.post('/login', login);
app.get('/protected', authenticateToken, protectedFunction);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


 
  
