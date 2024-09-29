

// Static File Upload 

import express from 'express';
const app = express();
import path from 'path';
import fileUpload from 'express-fileupload';
const __dirname = path.resolve();

app.use(fileUpload());  // Middlewares 

app.post('/upload', (req, res) => {
    const file = req.files?.file;
    if (!file) return res.status(400).send('No files were uploaded.');

    file.mv(`${__dirname}/${file.name}`, err => {
        if (err) return res.status(500).send(err);
        res.send('File uploaded successfully!');
    });
});

app.listen(3001, () => {
    console.log("Server is running");
});



/*

1. Open Postman & Set the request type to POST.
2. Enter the URL http://localhost:3000/upload.
3. Set up the request body - Click body tab, select form-data.
4. Add a key with the name file.
5. In the key row, change the type from Text to File.
6. Choose a file & Send the request 

*/