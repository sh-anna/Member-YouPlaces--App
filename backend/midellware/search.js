
app.get('/api/places' , (req, res) => {
    const serachPlaces = await Post.find(req.query);
});

db.users.find({}, { 
    title: true, 
    description: true,
    address: true })


    router.get('/', function(req, res, next) {
        var searchPlace = get("/api/places");
        res.render('place', place, places, placesRoutes);
      });




      
