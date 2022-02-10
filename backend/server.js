import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
      console.log("Connected to Database");
  })
  .catch((err) => {
      console.log(err.message);
  })

const app = express();

app.use('/api/seed', seedRouter)

app.use('/api/galaxymerch', productRouter)


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server has started at http://loaclhost:${port}`);
})