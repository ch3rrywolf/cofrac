const express = require('express')
const app = express()
const dotenv = require('dotenv')
const body_parser = require('body-parser')
const cors = require('cors')
const db_connect = require('./utils/db')
const pdfRoute = require('./routes/pdfRoutes')

dotenv.config()

app.use(body_parser.json({ limit: '50mb' }));
app.use(body_parser.urlencoded({ limit: '50mb', extended: true }));

if (process.env.mode === 'production') {
    app.use(cors())
} else {
    app.use(cors({
        origin: "http://localhost:5173"
    }))
}

const port = process.env.port

app.use('/', require('./routes/authRoutes'))
app.use('/', require('./routes/pdfRoutes'))
app.use('/', require('./routes/chantierRoutes'))
app.use('/', require('./routes/contratRoutes'))
app.use('/', require('./routes/clientRoutes'))
app.use('/', require('./routes/operationRoutes'))
app.use('/', require('./routes/inspectionRoute'))
app.get('/', (req, res) => res.send('Hello Cofrac'))

db_connect()

app.listen(port, () => console.log(`server is running on port ${port}!`))