const { Sequelize, DataTypes } = require('sequelize')
const EmployeeModel = require('./models/employee.model')

const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'toro',
    username: 'root',
    password: '',
    host: '127.0.0.1',
    port: '3306'
})

const Employee = EmployeeModel(sequelize, DataTypes)

if (true) {
    sequelize.sync()
    .then(() => {
        console.log('Database sync is complete.')
    })
}

module.exports = {
    Employee
}