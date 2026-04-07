const shortid  = require("shortid")
const URL = require('../models/url');

async function GenerateShortURL(req, res){
    try{
        const body = req.body;
        if(!body.url){
            return res.status(400).json({error: 'url is required'})
        }
    
        const shortURL = shortid(); // 1
    
        await URL.create({
            shortId : shortURL,
            redirectURL : body.url,
            visitHistory: [],
        });

        return res.json({id: shortURL});
    } catch(err) {
        console.log("Error in Generating Short URL", err);
        return res.status(500).json({error: "Internal Server Error"});
    }
}

async function ReturnClicks(req, res){
    const shortId = req.params.shortId;
    if(!shortId){
        return res.status(400).json({error: "Short ID is required"});
    }
    const result = await URL.findOne({ shortId })
    return res.json({ 
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });

}


module.exports = {
    GenerateShortURL,
    ReturnClicks
}