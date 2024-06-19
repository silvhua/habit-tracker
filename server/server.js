import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import historyRoutes from './routes/water.js';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/history', historyRoutes);

app.use('/', express.static('./public'));


// start Express on port 8080
app.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
  console.log('Press CTRL + C to stop server');
});