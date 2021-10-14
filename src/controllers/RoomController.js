module.exports = {
    create(req, res){

        let roomId = 21321;

        res.redirect(`/room/${roomId}`);
    }
}