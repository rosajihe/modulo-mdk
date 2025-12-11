const express = require("express")
const cors = require("cors")
const estudiantesRoutes = require("./src/routes/ERoutes")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use("/estudiantes", estudiantesRoutes)

app.get("/", (req, res) => {
    res.send("MI API ESTA FUNCIONANDO")
})


app.listen(PORT, () => {
    console.log(`API Corriendo en el link : http://localhost:${PORT}`)
})