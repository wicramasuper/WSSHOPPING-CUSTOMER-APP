const express = require('express');
const Posts = require ("../../models/customer-core/posts");


const router = express.Router();

//  add schedule items

router.post('/post/save',(req,res)=>{
let newPost = new Posts(req.body);
newPost.save((err)=>{
if(err){
return res.status(400).json({
error:err    
});   
}   
return res.status(200).json({
success:"Schedule items saved successfully"    
}); 
});
});

//get shedule items
router.get('/posts',(req,res)=>{
Posts.find().exec((err,posts)=>{
if(err){
return res.status(400).json({
error:err    
})   
}   
return res.status(200).json({
success:true,
existingPosts:posts    
}); 
});
});

// get specific items

router.get('/post/:id',(req,res)=>{
let postId = req.params.id;
Posts.findById(postId,(err,post)=>{
if(err){
return res.status(400).json({success:false, err});
}
return res.status(200).json({
success:true,
post
});
});
}); 

    

// update schedule items


router.put('/post/update/:id',(req,res)=>{
Posts.findByIdAndUpdate(
req.params.id,
{
$set:req.body
},
(err,post)=>{
if(err){
return res.status(400).json({error:err});
}
return res.status(200).json({
success:"Update successfully"
});
}
);
});


//Delete Schedule items

router.delete('/post/delete/:id',(req,res)=>{
Posts.findByIdAndRemove(req.params.id).exec((err,deletedpost)=>{
if(err)return res.status(400).json({
message:"Delete unsuccesfully",err
});
return res.json({
message:"Delete successfully",deletedpost
});   
});
});




module.exports = router;
