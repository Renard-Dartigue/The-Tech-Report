const { Blog } = require('../models');

const blogdata = [
    {
        title: 'Database Utilization',
        author: 'NodeLord',
        post_date: 'August 10, 2023',
        blog_id: 1,
        post_descrip: 
        'post content goes here.',
    },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;