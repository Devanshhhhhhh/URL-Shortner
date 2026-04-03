const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId : {
        type : String,
        require : true,
        unique : true
    },
    redirectURL : {
        type : String,
        required: true
    },
    visitHistory : [{ timeStamp : { time: Number}}]
},
    {timeStamps : true}
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;