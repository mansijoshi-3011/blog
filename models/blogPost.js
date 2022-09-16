const { Schema, model} = require('mongoose')

const BlogPostschema = new Schema(
    {
        description:{
            type: String,
            required: true
        },
        date:{
            type:Date,
            default:Date.now()
        }
    }
)

const BlogPost = model('blogPost',BlogPostschema)

module.exports=BlogPost
