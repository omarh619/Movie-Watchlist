module.exports = {
    getIndex: (req,res)=>{
        res.render('index', {
            title: "Movie Night"
        })
    }
}