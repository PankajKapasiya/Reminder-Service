const {sendbasicmail} = require('../service/email-service');

const TickertService = require('../service/email-service');

const create = async (req, res) =>{
    try{
        console.log(req.body);
        const response = await TickertService.createNotification(req.body);

        return res.status(201).json({
            message :"Succesfully created",
            err :{},
            data : response,
            success : true
        });
    }
    catch(error){
        console.log("Something went wrong in Controller");
        
        return res.status(500).json({
            message : "Something went wrong in Controller",
            err : error,
            success : false,
            data :{}
        });
    }
}

const fetch = async (req, res) =>{
    try{
        const response = await TickertService.fetchPendingEmail(req.body);
        
        return res.status(201).json({
            message :"Succesfully created",
            err :{},
            data : response,
            success : true
        });
    }
    catch(error){
        console.log("Something went wrong in Controller");
        return res.status(500).json({
            message : "Something went wrong in Controller",
            err : error,
            success : false,
            data :{}
        });
    }
}
module.exports= {
    create,
    fetch

};