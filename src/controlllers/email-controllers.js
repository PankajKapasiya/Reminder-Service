const {sendbasicmail} = require('../service/email-service');

class Emailcontrollers{

    constructor(){
    }
    async send (req, res){
        try{
            const response=  await sendbasicmail(req.body.from, req.body.to, req.body.subject, req.body.mailbody);
            // console.log(response);
            return res.status(200).json({
                message : 'succesfully send an email',
                success : true,
                err :{},
                data : 'send an email'
            });

        }
        catch(error){
            console.log('something went wrong in email controller');
            console.log(error);

            
            return res.status(500).json({
                message : 'Unable to send an email',
                err : error,
                success : false,
                data : {}
            })
        }
    }
}

module.exports= Emailcontrollers;