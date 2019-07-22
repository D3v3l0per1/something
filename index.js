const express = require('express')
const pathToSwaggerUI = require('swagger-ui-dist').absolutePath()

const app = express()

app.use(express.static(pathToSwaggerUI))

app.listen(3000)