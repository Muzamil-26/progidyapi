import {config} from 'dotenv';
config();
import express from 'express';
const app = express();
import router from './routes/routes.api.js';
import { ConnectToDB } from './config/db.config.js';
import cors from 'cors';
import cookieparser from 'cookie-parser';


 const corsOptions = {
    origin: 'https://progidyapi.vercel.app/', // specify your frontend URL
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
    credentials:true
// };
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());

app.use("/api",router);

app.get("/",(req,res)=>{
    return res.status(200).json({
        data:"API Working Bhai!",
        success:true
    });
});

try {

    ConnectToDB(process.env.MONGO_URL);
    app.listen(process.env.PORT,()=>{
        console.log(`Server Running On Port ${process.env.PORT}`);
    })
    
} catch (error) {
    console.log("Error in index page");
    
}

