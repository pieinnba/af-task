<script setup>
import { ref, onMounted, computed } from 'vue';
import ListMovie from '@/components/listMovie.vue';
import ContentMovie from '@/components/contentMovie.vue';

  const data = ref([])
  let page = 0
  const selectedMovieId = ref(0)
  const loadMoreData = ref(true)
  const windowWidth = ref(0)

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

  function chooseMovie(choosenId) {
    
    selectedMovieId.value = choosenId
  }

  onMounted(() => {
    fetchData()
    windowWidth.value = window.innerWidth
  })

</script>

<template>
  <div class="desktop-wrapper">
    <ContentMovie 
      :selectedMovie="selectedMovie"
      :selectedMovieGenres="selectedMovieGenres"
      :selectedMovieDirectors="selectedMovieDirectors"
      :selectedMovieWriters="selectedMovieWriters"
      :selectedMovieStars="selectedMovieStars"
      :selectedMovieBG="selectedMovieBG"
    />

    <ListMovie
      :data="data"
      :selectedMovieId="selectedMovieId"
      :loadMoreData="loadMoreData"
      @callFecth="fetchData"
      @callChooseMovie="chooseMovie"
    />
  </div>

  <div class="ipad-land-wrapper">
    <ListMovie
      :data="data"
      :selectedMovieId="selectedMovieId"
      :loadMoreData="loadMoreData"
      @callFecth="fetchData"
      @callChooseMovie="chooseMovie"
    />

    <ContentMovie 
      :selectedMovie="selectedMovie"
      :selectedMovieGenres="selectedMovieGenres"
      :selectedMovieDirectors="selectedMovieDirectors"
      :selectedMovieWriters="selectedMovieWriters"
      :selectedMovieStars="selectedMovieStars"
      :windowWidth="windowWidth"
    />
  </div>

  <div class="ipad-portrait-wrapper">
    <ListMovie
      :data="data"
      :selectedMovieId="selectedMovieId"
      :loadMoreData="loadMoreData"
      @callFecth="fetchData"
      @callChooseMovie="chooseMovie"
    />

    <ContentMovie 
      :selectedMovie="selectedMovie"
      :selectedMovieGenres="selectedMovieGenres"
      :selectedMovieDirectors="selectedMovieDirectors"
      :selectedMovieWriters="selectedMovieWriters"
      :selectedMovieStars="selectedMovieStars"
      :windowWidth="windowWidth"
    />
  </div>
</template>

<style scoped>
.desktop-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100vh;
  background-image: v-bind(selectedMovieBG);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: none;
}

.ipad-land-wrapper {
  position: relative;
  display: flex;
  background: #161616;
  height: 100vh;
  overflow: hidden;

  /* display: none; */
}

</style>