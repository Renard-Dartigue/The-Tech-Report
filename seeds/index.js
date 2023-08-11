const sequelize = require('../config/connections');
const seedArchive = require('./archiveData');
const seedBlog = require('./blogData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedArchive();

    await seedBlog();

    process.exit(0);
};

seedAll();