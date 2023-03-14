// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080




const homeRoutes = require('./routes/homeRoutes')
const aboutRoutes = require('./routes/aboutRoutes')
const blogRoutes = require('./routes/blogRoutes')
const cartRoutes = require('./routes/cartRoutes')
const contactRoutes = require('./routes/contactRoutes')
const projectsRoutes = require('./routes/projectsRoutes')
const productsRoutes = require('./routes/productsRoutes')
const salesRoutes = require('./routes/salesRoutes')
const shoppingRoutes = require('./routes/shoppingRoutes')
const vlogRoutes = require('./routes/vlogRoutes')

app.get('/:404', (req, res) => {
  res.send('Page Not Found. Please Try Again.');
});

// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

app.use('/', homeRoutes)
app.use('/about', aboutRoutes)
app.use('/blog', blogRoutes)
app.use('/cart', cartRoutes)
app.use('/contact', contactRoutes)
app.use('/products', productsRoutes)
app.use('/projects', projectsRoutes)
app.use('/sales', salesRoutes)
app.use('/shopping', shoppingRoutes)
app.use('/vlog', vlogRoutes)


// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})