const url='http://www.omdbapi.com/?apikey=9f206eb8&&'

class MovieService {
    static async fetchMovies(text){
        const res = await fetch(`${url}s=${text}`)
        const movies = await res.json()
        return movies
    }

    static async fetchDetailMovie(id){
        const res = await fetch(`${url}i=${id}`)
        const detailMovie = await res.json()
        return detailMovie
    }
}

export default MovieService