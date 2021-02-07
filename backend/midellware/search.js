

// const search = await Post.find({
    
// })
app.get('/api/places' , (req, res) => {
    const places = await Post.find(req.query);
});

db.users.find({}, { 
    title: true, 
    description: true,
    address: true })