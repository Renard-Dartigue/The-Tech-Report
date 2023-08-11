const router = require('express').Router();
const { Archive, Blog } = require('../models');
const withAuth = require('../utils/auth');

// ==============================GET ALL ARCHIVES===============================================================================
router.get('/archive/:id', withAuth, async (req,res) => {
    try {
        const dbArchiveData = await Archive.findByPk(req.params.id, {
            include: [
                {
                    model: Blog,
                    attributes: [
                        'id',
                        'title',
                        'author',
                        'post_date',
                        'post_descrip',
                    ],
                },
            ],
        });

        const archive = dbArchiveData.get({ plain: true });
        res.render('archive', {archive, loggedIn: req.session.loggedIn });
    }   catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//=================================GET ONE BLOG================================================================================
router.get('/blog/:id', withAuth, async (req, res) => {
    try {
        const dbblogData = await Blog.findByPk(req.params.id);
        const blog = dbblogData.get({ plain: true });

        res.render('blog', { blog, loggedIn: req.session.loggedIn });
    }   catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//===================================LOGIN====================================================================================
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;