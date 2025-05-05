import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
	res.send("Invoce Scanner API is running")
})

const PORT = process.env.PORT || 5000
