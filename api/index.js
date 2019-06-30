import express from 'express';

const app = express();
const PORT = 9000;

app.get('/', (req, res) => {
    res.send('Server is live');
})

app.listen(PORT, () => {
    console.log(`Live on port ${PORT}`);
})