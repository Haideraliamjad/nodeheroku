class webController {
    static index(req, res) {
        res.render('index',{
            name : "Haider Ali Amjad"
        });
    }

    static about(req, res) {
        res.send("My Name is Haider Ali Amjad");
    }

    static contact(req, res) {
        res.send("haideraliamjad4391@gamil.com");
    }

    static notFind(req, res) {
        res.status(404).send("Page Not Exits");
    }
}
export default webController;