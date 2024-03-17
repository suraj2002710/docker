const express=require("express")
const app=express()
const port=process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.status(200).send({msg:"hy Docker"})
})

app.listen(port,()=>{
    console.log(`server started on port :${port}`);
})