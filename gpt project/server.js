const express = require('express');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai');

const app = express();
const port = 3000;

const openai = new OpenAI({
    apiKey: 'sk-r40R0afQhYVsK6gQp-OdKKIUPbTZrrvVh8_QjwBwJNT3BlbkFJabbIqLYLQNs-PNIFvEPfj8eBWOp7rZFyBQmD5F10kA', // replace 'your-api-key' with your actual OpenAI API key
});

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/ask', async (req, res) => {
    const question = req.body.question;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: question }],
            max_tokens: 150
        });
        res.json({ answer: response.choices[0].message.content.trim() });
    } catch (error) {
        if (error.response && error.response.status === 429) {
            res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
        } else {
            console.error('API Error:', error);
            res.status(500).json({ error: 'Something went wrong!' });
        }
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
