const User = require('./User');
const Archive = require('./Archive');
const Blog = require('./Blog');

Archive.hasMany(Blog, {
    foreignKey: 'archive_id',
});

Blog.belongsTo(Archive, {
    foreignKey: 'archive_id',
});

module.exports = { User, Archive, Blog };