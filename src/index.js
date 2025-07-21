const express = require('express');

const bodyparser = require('body-parser');


const {PORT} = require('./config/server-config');

const apiroutes = require('./routes/index');
const jobs = require('./utils/jobs');

// const {sendbasicmail}= require('./service/email-service');
const Ticketcontroller = require('./controlllers/email-controllers');
const setupandstartserver =()=>{
    const app= express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));

    // app.use('/api', apiroutes);
    app.post('/api/v1/tickets', Ticketcontroller.create);
    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}`);
    });
    jobs();
    // sendbasicmail(
    //     'pankajkapasiya29@gmail.com',
    //     '22237@iiitu.ac.in',
    //     'This is second mail',
    //     'Mail send to succesfully'
    // )
}

setupandstartserver();