import mongoose, { ConnectOptions } from 'mongoose';
import express from 'express';
import userRouter from './routes/userRouter';
import productRouter from './routes/productRouter';

const app = express();
app.use(express.json());



// Membuat koneksi ke database MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Praktikum_7', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}as ConnectOptions)
  .then(() => {
    console.log('Koneksi MongoDB berhasil');
  })
  .catch((err) => {
    console.error('Koneksi MongoDB gagal', err);
  });

  app.use('/users', userRouter);
  app.use('/products', productRouter);

  const port = 3000; // Ganti dengan port yang ingin Anda gunakan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

  

  
