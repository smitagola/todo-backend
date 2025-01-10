import { Router } from "express";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controller/todo.js";
import { auth } from "../middleware/authentication.js";

 const ToDoRouter = Router();


// Todo Routes .................................................  . ...         .   .   ..  .   
ToDoRouter.get('/',auth,getTodo);
ToDoRouter.put('/:id',auth,updateTodo);
ToDoRouter.post('/',auth,createTodo);
ToDoRouter.delete('/:id',auth,deleteTodo);

export default ToDoRouter;  