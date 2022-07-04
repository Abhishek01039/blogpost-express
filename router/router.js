const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')
const router = express.Router()


router.get('/', (req,res)=>{
    // res.sendFile(path.join(__dirname, '../static/index.html'))
    res.render('home');
});

router.get('/blogpost', (req,res)=>{
    // res.sendFile(path.join(__dirname, '../static/bloghome.html'))
    res.render('blogpost', {
        blogs: blogs
    });
});

router.get('/blogpost/:slug', (req,res)=>{
    const blog = blogs.filter(e=>{
       return e.slug==req.params.slug;
    })
    console.log(blog);
    res.sendFile(path.join(__dirname, '../static/blogpost.html'))
});

module.exports = router