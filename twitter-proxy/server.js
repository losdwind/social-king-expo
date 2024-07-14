import express from 'express';
import fetch from 'node-fetch';
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.get('/oembed', async (req, res) => {
    const tweetUrl = req.query.url;
    const twitterApiUrl = `https://publish.twitter.com/oembed?url=${encodeURIComponent(tweetUrl)}`;

    try {
        const response = await fetch(twitterApiUrl);
        const json = await response.json();
        res.json(json);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tweet embed HTML' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
