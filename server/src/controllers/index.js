exports.home = async function home(req, res) {
    res.render('index', {title: 'User Information'});
}