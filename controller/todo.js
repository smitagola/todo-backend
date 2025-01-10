import db from "../db.js";

export const getTodo = async (req, res) =>{
    const query = "select * from todos";

    try {        
    const data = await db.query(query);
    console.log(data.rows)
    res.status(200).json({msg:"data fetch succsess" , error:false , data:data.rows})

    } catch (error) {
        res.status(500).json({msg:"data fetch error" , error:false , error:error})
    }

}

export const updateTodo = (req, res) =>{
  
}


export const createTodo = (req, res) =>{
    const { title , description , status , due_date  } = req.body;
    const {id}=req.user;
    const user_id = id;


    if(title === '' || description === '' || status === '' || due_date === '' || user_id === ''){
        res.status(400).json({message:'all fields are required' , error:true});
    }
    const query = 'INSERT INTO todos (title , description , status , due_date , user_id) VALUES ($1,$2,$3,$4,$5) RETURNING *';
    const values = [title , description , status , due_date , user_id];
    db.query(query,values)
    .then((data)=>{
        res.status(200).json({message:'todo created successfully' , error:false , data:data.rows[0]});

    })
    .catch((err)=>{
        res.status(500).json({message:'error while creating todo' , error:true , err:err});
        console.log("error while creating todo",err);
    })

}


export const deleteTodo = async (req, res) =>{
  const { id }= req.params;
    

    const query = 'DELETE FROM  todos WHERE id=$1 RETURNING *';


        console.log(id)
        await db.query(query,[id]).
        then(()=>{
            res.status(200).json({message:"delete successfully" , error:false});
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).json({message:'error while deleting todo ' , error:true});
        })
     
    }
