import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const serverRedering =(req,res) =>{
    res.sendFile(__dirname + '/index.html');
}

export const uploadFile = (req,res) =>{
    res.send('File uploaded successfully!');
}