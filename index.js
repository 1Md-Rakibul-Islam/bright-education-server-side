const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const allCourse = require('./data/course.json');

// categories data response
app.get('/categories', (req, res) => {
    res.send(categories)
})

// course data response
app.get('/course', (req, res) => {
    res.send(allCourse)
})


//singel course data response
app.get('/course/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = allCourse.find( course => course._id === id)
    res.send(selectedCourse)
})


// categories course data response
app.get('/categories/:id', (req, res) =>{
    const id = req.params.id
    const selectedCategory = allCourse.filter( course => course.category_id == id);
    res.send(selectedCategory);
})





app.get('/', (req, res) => {
    res.send('Bright Education server ranning.')
});


app.listen(port, () => {
    console.log(`Bright Education Server running on port: `, port)
})
