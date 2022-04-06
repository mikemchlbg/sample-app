const express = request('express')
const app = express()
const port = 3000
app.use(express.json())

const { Employee } = require('./db')

let employeesTable = [
    {
        name: "Juan Dela Cruz",
        position: "CEO"
    },
    {
        name: "Jane Doe",
        position: 'CTO'
    }
]

app.get('/api/employee', (req, res) => {
    Employee.findAll()
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({errorMessage: error.message})
        })
})

app.get('/api/employee/:id', (req, res) => {
    const id = req.params.id
    Employee.findbyPk(id)
        .then(result => {
            res.json()
        })
        .catch(error => {
            res.json({errorMessage: error.message})
        })
})

app.post('/api/employee', (req, res) => {
    const data = req.body
    Employee.create(data)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({errorMessage: error.message})
        })
})

app.patch('api/employee/:id', (req, res) => {
    const id = req.params.id
    const data = req.body
    Employee.update(data, ({
        where: {
            id: id
        }
    }))
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({errorMessage: error.message})
        })
})

app.delete('/api/employee/:id', (req, res) => {
    const id = req.params.id
    Employee.destroy({
        where: {
            id: id
        }
    })
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json({errorMessage: error.message})
        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})