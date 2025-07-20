const express = require('express');

const bodyparser = require('body-parser');


const {PORT} = require('./config/server-config');

const {sendbasicmail}= require('./service/email-service');
const setupandstartserver =()=>{
    const app= express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));

    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}`);
    })

    sendbasicmail(
        'pankajkapasiya29@gmail.com',
        '22237@iiitu.ac.in',
        'This is first mail',
        'Mail send succesfully'
    )
}

setupandstartserver();