const express = require('express')
// change the route to swagger.json file
const swaggerDocument = require('')

const app = express()
const swaggerUi = require('swagger-ui-express')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})