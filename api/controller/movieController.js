const Movies = require('../utils/movies.json')

module.exports = {
    getAllMovies: async (req, res, next) => {
        const allMovies = await Movies;
        console.log("all movies ...", allMovies);
        try {
            if (!allMovies) {
                return res.json({ success: false, message: 'not found movies' });
            }
            return res.send(allMovies);
        } catch (err) {
            console.log({ err });
        }
    }
}