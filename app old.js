const express = request('express')
const app = express()
const port = 3000
app.use(express.json())

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
    res.json(employeesTable)
})

app.get('/api/employee/:id', (req, res) => {
    const idToBeSearched = req.params.id
    const employee = employeesTable.filter(element => element === idToBeSearched)
    res.json(employee[0] || {message: "no employee with such ID!"})
})

app.post('/api/employee', (req, res) => {
    const data = req.body
    employeesTable.push(data)
    res.json({message: 'successfully added employee!'})
})

app.patch('api/employee/:id', (req, res) => {
    const idToBeSearched = Number(req.params.id)
    const employee = employeesTable.filter(element => element.id === idToBeSearched)
    const index = employeesTable.indexOf(employee[0])

    const updatedData = req.body
    updatedData.id = idToBeSearched
    employeesTable[index] = updatedData
    res.json({message: 'successfully updated employee!'})
})

app.delete('/api/employee/:id', (req, res) => {
    const idToBeSearched = Number(req.params.id)
    const employee = employeesTable.filter(element => element.id === idToBeSearched)
    const index = employeesTable.indexOf(employee[0])

    employeesTable.splice(index, 1)
    res.json({message: 'successfully deleted employee!'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})