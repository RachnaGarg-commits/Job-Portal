import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";


dotenv.config({});
connectDB();
//const PORT = process.env.PORT || 3000;
const app = express();




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
//const corsOptions = {
    //origin: 'https://jobportal-frontend-6bel.onrender.com',
    //credentials: true
//};

app.use(cors());

let isConnected = false;

async function connectToMongoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

app.use((req, res, next) => {
    if(!isConnected) {
        connectToMongoDB();
    }
    next();
});



app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);




//app.listen(PORT,()=>{
    //console.log(`Server running at port ${PORT}`);
//})

module.exports = app