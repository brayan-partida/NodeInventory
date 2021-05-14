const controller={}
const pool =require("../database/database")
const  departament=require("../query/departamentQuery")

 controller.list=async(res,res)=>{

    const query =await pool.query(departament.selectFrom())
    res.json("hola mundo")


 }