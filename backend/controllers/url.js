const shortid  = require("shortid")
const URL = require('../models/url');
const QRCode = require('qrcode');

async function GenerateShortURL(req, res){
    try{
        const body = req.body;
        if(!body.url){
            return res.status(400).json({error: 'url is required'})
        }
        
        console.log("📍 Request received!");
        console.log("req.body:", req.body);
        console.log("req.headers:", req.headers);

        const shortURL = shortid(); // 1
        // wait to generate QR code for saving in DB
        const qrCode = await generateQRCode(shortURL, req);
    
        await URL.create({
            shortId : shortURL,
            redirectURL : body.url,
            qrCode : qrCode,
            visitHistory: [],
        });


        return res.json({id: shortURL, qrCode: qrCode});
    } catch(err) {
        console.log("Error in Generating Short URL", err);
        return res.status(500).json({error: "Internal Server Error"});
    }
}

//   QR Code Generator
async function generateQRCode(shortURL, req){
    try {
        const protocol = req.protocol;
        const host = req.get('host');
        const baseURL = `${protocol}://${host}`
        const fullShortenedURL = `${baseURL}/${shortURL}`

        const qrCode = await QRCode.toDataURL(fullShortenedURL);
        return qrCode
    } catch (err){
        throw new Error("Failed to generate QR code: " + err.message);
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