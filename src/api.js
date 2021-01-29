const api = {
    getTrending: 'trending/all/week?language=en-US',
    getNetflixOriginals: '/discover/tv?sort_by=popularity.desc&with_networks=213',
    getNetflixLatest: '/discover/tv?sort_by=release_date.asc&with_networks=213',
    getTopRated: '/movie/top_rated?language=en-US',
    getActionMovies: '/discover/movie?with_genres=28',
    getDocumentaries: '/discover/movie?with_genres=99',
    getComedyMovies: '/discover/movie?with_genres=35',
    getHorrorMovies: '/discover/movie?with_genres=27',
    getRomanceMovies: '/discover/movie?with_genres=10749',
    getTVByID: '/tv/',
    getMovieByID: '/movie/'
}

export default api