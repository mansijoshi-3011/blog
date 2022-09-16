// const { Router } = require('express')
const express = require('express')
const router = express.Router();
const BlogPost = require('../../models/blogPost')


router.get('/', async (req,res)=>{
    try{
        const blogPost = await BlogPost.find()
        if(!blogPost) throw new Error('No Blog post found')
        const sorted = blogPost.sort((a,b)=>{
            return new Date(a.Date).getTime() - new Date(b.Date).getTime()
        })
        res.status(200).json(sorted)
    } catch(error){
        res.status(500).json({message:error.message})
    }
})

router.post('/', async (req,res)=>{
    const newBlogPost= new BlogPost(req.body)
    try{
        const blogPost = await newBlogPost.save()
        if(!blogPost) throw new Error('Something went wrong saving the Blog Post')
              res.status(200).json(blogPost)
    } catch(error){
        res.status(500).json({message:error.message})
    }
})

router.put('/:id', async (req,res)=>{
    const { id } = req.params
    try{
        const response = await BlogPost.findByIdAndUpdate(id, req.body)
        if(!response) throw new Error('Something went wrong')
        const updated = { ...response._doc, ...req.body}
              res.status(200).json(updated)
    } catch(error){
        res.status(500).json({message:error.message})
    }
})

router.delete('/:id', async (req,res)=>{
    const { id } = req.params
    try{
        const removed = await BlogPost.findByIdAndDelete(id)
        if(!removed) throw new Error('Something went wrong')
              res.status(200).json(removed)
    } catch(error){
        res.status(500).json({message:error.message})
    }
})

module.exports= router
