import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        data: [],
        page: 0,
        selectedMovieId: 0,
        loadMoreData: true,
        windowWidth: 0,
      }
    },
    getters: {
        data(state) {
            return state.data
        },
        selectedMovieId(state) {
            return state.selectedMovieId
        },
        selectedMovie(state) {
            return state.selectedMovieId > 0 && state.data.find(item => item.id == state.selectedMovieId) || {};
        },
        selectedMovieGenres(state, getters) {
            return getters.selectedMovie?.genres && getters.selectedMovie.genres.reduce((result, {title}, index) => {
                const genresLength = getters.selectedMovie.genres.length
                return result + title + ((index < genresLength - 1) && ', ' || '')
            }, '') || []
        },
        selectedMovieDirectors(state, getters) {
            return getters.selectedMovie?.directors && getters.selectedMovie.directors.reduce((result, {first_name, last_name}, index) => {
                const genresLength = getters.selectedMovie.directors.length
                return result + (first_name + ' ' + last_name) + ((index < genresLength - 1) && ', ' || '')
            }, '') || []
        },
        
        selectedMovieWriters(state, getters)  {
            return getters.selectedMovie?.writers && getters.selectedMovie.writers.reduce((result, {first_name, last_name}, index) => {
                const genresLength = getters.selectedMovie.writers.length
                return result + (first_name + ' ' + last_name) + ((index < genresLength - 1) && ', ' || '')
            }, '') || []
        },
        
        selectedMovieStars(state, getters) {
            return getters.selectedMovie?.stars && getters.selectedMovie.stars.reduce((result, {first_name, last_name}, index) => {
                const genresLength = getters.selectedMovie.stars.length
                return result + (first_name + ' ' + last_name) + ((index < genresLength - 1) && ', ' || '')
            }, '') || []
        },
        selectedMovieBG(state, getters) {
            return getters.selectedMovie?.bg_picture && `url('${getters.selectedMovie.bg_picture}')` || `url('#')`
        },
        loadMoreData(state) {
            return state.loadMoreData
        },
        windowWidth(state) {
            return state.windowWidth
        },
        ratingIMDb(state, getters) {
            return getters.selectedMovie.imdb_rating
        }
  
    },
    mutations: {
        chooseMovie(state, choosenId) {
            state.selectedMovieId = choosenId
        }
    },
    actions: {
        async fetchData({ state }) {
            const res = await fetch(`https://live.mocat.amifactory.network/api/v1/movies/?page=${state.page}`)
            const serverData = await res.json()
            state.page++
            state.data = state.data.concat(serverData.results)
            console.log(state.data);
            if(state.page === (serverData.pages)) state.loadMoreData = false
            if(state.selectedMovieId === 0) state.selectedMovieId = 1
          }
    }
  })

  export default store