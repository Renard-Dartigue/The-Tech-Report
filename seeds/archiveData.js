const { Archive } = require('../models');

const archivedata = [
    {
        name: '',
        date: '',
    },
];

const seedArchive = () => Archive.bulkCreate(archivedata);

module.exports = seedArchive;