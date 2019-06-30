import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 9000;

//Import router Object
import mealRoutes from './routes/meal.route'

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server is live');
})

app.use('/api/v1/meals', mealRoutes);

app.listen(PORT, () => {
    console.log(`Live on port ${PORT}`);
})