const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());


app.post('/events', async (req, res) => {
    console.log("received event", req.body);
    const { type, data } = req.body;

    if (type == 'commentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved';

        await axios.post('http://event-bus-srv:4005/events', {
            type: 'commentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        });

    }
    res.send({});
});


app.listen(4003, () => {
    console.log("Listening moderation service on port 4003");
})