const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoose } = require("./connect");
const URL = require("./models/url");


const app = express();
const PORT = 8001;

app.use(express.json());

connectToMongoose("mongodb://localhost:27017/url-shortner")
    .then(() => console.log("MongoDb connected succesfully!"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Generate a ShortId for the URL
app.use("/url", urlRoute);

// Redirect user to the original URL
app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;

    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            }
        );

        if (!entry) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        res.redirect(entry.redirectURL);
    } catch (err) {
        console.error("Error in /:shortId route:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`); 
})