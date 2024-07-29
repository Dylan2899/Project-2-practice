const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Ensure this path is correct

class Task extends Model {}

// Define the Task model
Task.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, // Pass the Sequelize instance
  freezeTableName: true, // Prevent Sequelize from pluralizing table names
  underscored: true, // Use snake_case for automatically added attributes
  modelName: 'task' // Define the model name
});

module.exports = Task;
