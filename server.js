// const express = require ("express")
// const cors = require("cors")
// const stripe = require("stripe")("sk_test_51LMXTSSGPDscdIJCqlR0OO3xGQZeQoFoPorijvzqQ57WrvXNMmT3pbV7jL0CZJ451nCb2bB7RtWgEZUoNDJr4kaO004BpZrxsu");

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("Welcome into react shop")
// });

// app.post("checkout",async(req,res)=>{
//     let error;
//     let status;
//     try {
//         const {product,token} = req.body;
//         const customer =await async stripe.customers.create({
//             email:token.email,
//             source : token.id
//         })
//     }
//     catch(error){
//         console.log(error)
//     }

// })
// app.listen(8080,()=>{
//     console.log("runing on 8080")
// })
