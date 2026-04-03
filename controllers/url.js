const shortid  = require("shortid")
const URL = require('../models/url');

async function GenerateShortURL(req, res){
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error: 'url is required'})
    }

    const shortURL = shortid();

    await URL.create({
        shortId : shortURL,
        redirectURL : body.url,
        visitedHistory: [],
    });

    return res.json({id: shortURL});
}

async function ReturnClicks(req, res){
    const shortId = req.params.shortId;
    if(!shortId){
        return res.status(400, json({error: "Short ID is required"}));
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