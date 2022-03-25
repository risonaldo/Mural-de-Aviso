const PORT =3000;
const path = require('path');
const apiRouter = require('./routes/api');
const express = require('express');

const app = express();

app.use('/api', apiRouter );

app.use('/', express.static(path.join(__dirname, 'public')));



app.listen(PORT, ()=> {
    console.log("Server running on port", PORT);
})

