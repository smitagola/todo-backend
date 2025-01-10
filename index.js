import express from 'express';
import dotenv from 'dotenv';
import ToDoRouter from './routes/todo.js'; // Adjust the import according to your project structure
import userRouter from './routes/user.js'; // Adjust the import according to your project structure
import db from './db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api/todos', ToDoRouter);
app.use('/api/user', userRouter);

db.connect().then(()=>{
    console.log('database connected successfully . . . . .')
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err)=>{
    console.log('db error ', err);
})
