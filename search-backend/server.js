let express =require('express')
let app =express()


app.get('/',(req,res)=>{
    
res.send('server')

})




app.listen(8000,()=>console.log('Server is running ... '))