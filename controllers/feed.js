// CORS Error Resolved!
    // app.use((req, res, next) => {
    //     res.setHeader('Access-Control-Allow-Origin', '*'); // we allowed a specific domain/origin to access our content/our data
    //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // we allow these origins to use specific HTTP methods
    //     res.setHeader('Access-Control-Allow-Methods', 'Content-Type, Authorization'); // for the headers our clients might set on their Requests
    //     next();
    // });

exports.getPosts = (req, res, next) => {
    res.status(200).json({ 
        post: [{ 
            title: 'first commit', 
            content: 'commit message One' 
        }] 
    }); 
        // to return a JSON response
        // argument passed -> normal JS Object
        // it'll convert it to JSON format & send back as a RESPONSE to client
}

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    // Create post in DB
    res.status(201).json({
        // status code 200 --> indicates just success
        // status code 201 --> indicates success & that we created a resource

        message: 'Code commited succesfully!',
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    });
}