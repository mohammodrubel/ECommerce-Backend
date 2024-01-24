import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import router from './router/GLOBAL_ROUTER'
import global_Error from './error/GLOBAL_ERROR'
import cookieParser from 'cookie-parser'
const app:Application  =  express()

// parser 

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:'http://localhost:5173',credentials:true}))


app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    status:200,
    message:"Ecomarce Website server is running"
  })
})

app.use('/api/v1',router)
app.use(global_Error)

export default app 