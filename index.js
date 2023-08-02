const express = require('express')
const app = express()
require('dotenv').config();
// const CategoryRouter = require('./api/category/Router')
const UserRouter = require('./api/user/Router')
const BrandRouter = require('./api/Brands/Router')
const ProductRouter = require('./api/Products/Router')


const port = process.env.SERVER_PORT || 3200

app.use(express.json())
// app.use('/api', CategoryRouter)
app.use('/api', UserRouter)
app.use('/api', ProductRouter)
app.use('/api', BrandRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})