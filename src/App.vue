<script setup>
import { ref, onMounted, computed } from 'vue';

  const data = ref([])
  let page = 0
  const selectedMovieId = ref(0)
  const loadMoreData = ref(true)

  async function fetchData() {
    const res = await fetch(`https://live.mocat.amifactory.network/api/v1/movies/?page=${page}`)
    const serverData = await res.json()
      page++
      data.value = data.value.concat(serverData.results)
    if(page === (serverData.pages)) loadMoreData.value = false
    if(selectedMovieId.value === 0) selectedMovieId.value = 1
  }

  const selectedMovie = computed(() => (selectedMovieId.value > 0) ? data.value.find(item => item.id == selectedMovieId.value) : 1)
  
  const selectedMovieGenres = computed(() => {
    return selectedMovie.value?.genres && selectedMovie.value.genres.reduce((result, {title}, index) => {
      const genresLength = selectedMovie.value.genres.length
      return result + title + ((index < genresLength - 1) && ', ' || '')
    }, '') || []
  })

  const selectedMovieDirectors = computed(() => {
    return selectedMovie.value?.directors && selectedMovie.value.directors.reduce((result, {first_name, last_name}, index) => {
      const genresLength = selectedMovie.value.directors.length
      return result + (first_name + ' ' + last_name) + ((index < genresLength - 1) && ', ' || '')
    }, '') || []
  })

  const selectedMovieWriters = computed(() => {
    return selectedMovie.value?.writers && selectedMovie.value.writers.reduce((result, {first_name, last_name}, index) => {
      const genresLength = selectedMovie.value.writers.length
      return result + (first_name + ' ' + last_name) + ((index < genresLength - 1) && ', ' || '')
    }, '') || []
  })

  const selectedMovieStars = computed(() => {
    return selectedMovie.value?.stars && selectedMovie.value.stars.reduce((result, {first_name, last_name}, index) => {
      const genresLength = selectedMovie.value.stars.length
      return result + (first_name + ' ' + last_name) + ((index < genresLength - 1) && ', ' || '')
    }, '') || []
  })

  const selectedMovieBG = computed(() => {
    return selectedMovie.value?.bg_picture && `url('${selectedMovie.value.bg_picture}')` || `url('#')`
  })

  function scrollByButton(direction) {
    const movieList = document.querySelector('.movies-in-list')
    if (direction) {
      movieList.scrollLeft += movieList.offsetWidth
    } else {
      movieList.scrollLeft -= movieList.offsetWidth
    }
  }
  function chooseMovie(choosenId) {
    selectedMovieId.value = choosenId
  }

  onMounted(() => fetchData())

</script>

<template>
  <div class="wrapper" >
    <div class="content">
      <div class="about-movie">
        <div class="movie-ratting">
          <div class="ratting-title">iMDb ratting</div>
          <div class="rating-points">
            <img src="@/assets/icons/star.svg" alt="star">
            <span><span class="ratting-point">{{ selectedMovie.imdb_rating }}</span>/10</span>
          </div>
        </div>
        <div>
          <span class="movie-title">{{ selectedMovie.title }}</span>
          <span class="release-year">({{ selectedMovie.release_year }})</span>
        </div>
        <div class="movie-description">{{ selectedMovie.description }}</div>
        <div class="movie-stats">
          <div class="movie-genres">{{ selectedMovieGenres }}</div>
          <div class="movie-age-ratting">{{ selectedMovie.mpa_rating }}</div>
          <div class="movie-duration">{{ selectedMovie.duration }}m</div>
        </div>
        <button class="watch-button">
          <img src="@/assets/icons/play.svg" alt="Play">
          <span>Watch trailer</span>
        </button>
      </div>
      <div class="movie-creators">
        <div v-if="selectedMovieDirectors.length" class="movie-director">
          <span class="movie-director-title">Director: </span>
          <span class="movie-director-name">{{ selectedMovieDirectors }}</span>
        </div>
        <div v-if="selectedMovieWriters.length" class="movie-writers">
          <span class="movie-writers-title">Writers: </span>
          <span class="movie-writers-name">{{ selectedMovieWriters }}</span>
        </div>
        <div v-if="selectedMovieStars.length" class="movie-stars" >
          <span class="movie-stars-title">Stars: </span>
          <span class="movie-stars-name">{{ selectedMovieStars }}</span>
        </div>
      </div>
    </div>

    <div class="movie-list-block">
      <button class="scroll-button" @click="scrollByButton(false)"><img src="@/assets/icons/left-arrow.svg" alt="back"></button>
      <div class="movies-in-list">
        <div class="movie-in-list" 
          @click="chooseMovie(movie.id)"
          :class="{ active: movie.id == selectedMovieId }"
          v-for="movie in data"
          :key="movie.id"
        >
          <div class="movie-poster"><img :src="movie.poster" alt="Poster"></div>
          <div class="rating-points-in-list">
            <div class="rating-points-in-list-ico"><img src="@/assets/icons/star.svg" alt="star"></div>
            <span><span class="ratting-point-in-list">{{ movie.imdb_rating }}</span>/10</span>
          </div>
          <div class="movie-in-list-title">{{ movie.title }}</div>
        </div>
        <button class="load-more" v-if="loadMoreData" @click="fetchData">
          <div class="load-more-ico"><img src="@/assets/icons/plus.svg" alt="load more"></div>
          <div class="load-more-text">View more</div>
        </button>
      </div>
      <button class="scroll-button" @click="scrollByButton(true)"><img src="@/assets/icons/right-arrow.svg" alt=""></button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100vh;
  background-image: v-bind(selectedMovieBG);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.content {
  position: relative;
  margin: 0 100px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}
.about-movie {
  max-width: 560px;
}
.movie-ratting {
  margin-bottom: 17px;
}
.ratting-title {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #E2E2E2;
}
.rating-points {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #E2E2E2;
}
.rating-points > img {
  vertical-align: baseline;
  margin-right: 7px;
}
.ratting-point {
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  color: #FFFFFF;
}
.movie-title {
  font-family: 'Krona One';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  color: #FFFFFF;
  margin-right: 8px;
}
.release-year {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  color: #FFFFFF;
}
.movie-description {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #FFFFFF;
  margin-top: 15px;
  margin-bottom: 12px;
}
.movie-stats {
  display: flex;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #FFFFFF;
  margin-bottom: 20px;
}
.movie-genres {
  padding-right: 20px;
  border-right: 1px solid #A6A6A6;
}
.movie-age-ratting {
  padding: 0 20px;
  border-right: 1px solid #A6A6A6;
}
.movie-duration {
  padding-left: 20px;
}
.watch-button {
  width: 160px;
  height: 42px;
  background: #DA1617;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
}
.watch-button > img {
  margin-right: 14px;
  vertical-align: baseline;
}
.movie-creators {
  width: 320px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #E2E2E2;
  position: absolute;
  bottom: 42px;
  right: 0;
}
.movie-director, .movie-writers {
  margin-bottom: 8px;
}
.movie-director-name, .movie-writers-name, .movie-stars-name {
  font-weight: 700;
}
.movie-list-block {
  margin: 0 160px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
}
.movies-in-list {
  display: flex;
  min-height: 290px;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.movie-in-list {
  min-width: 120px;
  margin: 0 12px;
  margin-top: 20px;
}
.movie-in-list.active {
  min-width: 147px;
  height: 225px;
  margin-top: 0;
}
.movie-poster > img {
  width: 100%;

}
.rating-points-in-list {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #E2E2E2;
  margin: 6px 0;
}
.ratting-point-in-list {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
}
.rating-points-in-list-ico {
  display: inline-block;
  height: 14px;
  margin-right: 4px;
}
.rating-points-in-list-ico > img {
  height: 100%;
}
.movie-in-list-title {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;

}
.load-more {
  height: 215px;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff00;
}
.load-more-ico {
  margin-bottom: 16px;
  width: 16px;
  height: 16px;
}
.load-more-ico > img {
  height: 100%;
}
.load-more-text {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
}
.scroll-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(47px);
  min-width: 34px;
  height: 34px;
  border-radius: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
}
</style>