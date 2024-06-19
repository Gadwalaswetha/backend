const app = require('./app');
const sequelize = require('./db');
const Task = require('./models/Task');

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

start();
