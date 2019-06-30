import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 9000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server is live');
})

app.listen(PORT, () => {
    console.log(`Live on port ${PORT}`);
})