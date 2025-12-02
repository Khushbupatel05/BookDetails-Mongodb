import mongoose from "mongoose";
const MONGO_URI = "mongodb://localhost:27017/bookStoreDb"

const connectDb = async () => {
    try{
        mongoose.connection.on('connected' , () => {
            console.log("DataBase Connected Successfully...")
        })
        await mongoose.connect(MONGO_URI)
    }catch (error){
        console.log(error)
    }
}

export default connectDb;