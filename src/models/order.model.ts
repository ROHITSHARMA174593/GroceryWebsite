import mongoose from "mongoose";

interface IOrder{
    _id:mongoose.Types.ObjectId
    user:mongoose.Types.ObjectId
    items:[
        {
            grocery:mongoose.Types.ObjectId,
            name:string,
            price:string,
            unit:string,
            image:string, 
            quantity:number
        }
    ]

    totalAmount:number,
    paymentMethod: 'cod' | 'online'
    address:{
        fullName:string,
        city:string,
        state:string,
        pincode:string,
        phone:string 
        fullAddress:string,
        latitude:number,
        longitude:number
    }
    
    status:"pending" | "out of delivery" | "delivered"
    createdAt?:Date
    updatedAt?:Date // question mark means optional
}

const orderSchemam = new mongoose.Schema<IOrder>({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
     items: [
        {
            grocery:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Grocery",
                required:true
            },
            name:String,
            price:String,
            unit:String,
            image:String, 
            quantity:Number
             
        }
     ],
     paymentMethod: {
        type:String,
        enum:['cod','online'],
        default:"cod",
        required:true
    },
    totalAmount:Number,
    address:{
        fullName:String,
        city:String,
        state:String,
        pincode:String,
        phone:String,
        fullAddress:String,
        latitude:Number,
        longitude:Number
    },
    status:{
        type:String,
        enum:['pending','out of delivery','delivered'],
        default:"pending",
        required:true
    }
}, {timestamps:true})

const Order = mongoose.models.Order || mongoose.model("Order", orderSchemam)
export default Order;