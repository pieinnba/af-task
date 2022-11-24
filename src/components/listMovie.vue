<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

  const store = useStore()

  function scrollByButton(direction) {
    const movieList = document.querySelector('.movies-in-list')
    if (direction) {
      movieList.scrollLeft += movieList.offsetWidth
    } else {
      movieList.scrollLeft -= movieList.offsetWidth
    }
  }

  const selectedMovieId = computed(() => store.getters.selectedMovieId);

</script>

<template>
    <div class="movie-list-block">
      <div class="movie-list-title">Popular <span>series</span></div>
      <button class="scroll-button" @click="scrollByButton(false)"><img src="@/assets/icons/left-arrow.svg" alt="back"></button>
      <div class="movies-in-list">
        <RouterLink class="movie-in-list"
          :to="{ name: 'ContentMovie', params: { movieId: movie.id }}"
          @click="store.commit('chooseMovie', movie.id)"
          :class="{ active: movie.id === selectedMovieId }"
          v-for="movie in store.getters.data"
          :key="movie.id"
        >
          <div class="movie-poster"><img :src="movie.poster" alt="Poster"></div>
          <div class="rating-points-in-list">
            <div class="rating-points-in-list-ico"><img src="@/assets/icons/star.svg" alt="star"></div>
            <span><span class="ratting-point-in-list">{{ movie.imdb_rating }}</span>/10</span>
          </div>
          <div class="movie-in-list-title">{{ movie.title }}</div>
        </RouterLink>
        <button class="load-more" v-if="store.getters.loadMoreData" @click="store.dispatch('fetchData')">
          <div class="load-more-ico"><img src="@/assets/icons/plus.svg" alt="load more"></div>
          <div class="load-more-text">View more</div>
        </button>
      </div>
      <button class="scroll-button" @click="scrollByButton(true)"><img src="@/assets/icons/right-arrow.svg" alt=""></button>
    </div>
</template>

<style scoped>
.movie-list-block {
  margin: 0 160px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}
.movie-list-title {
  display: none;
}
.movies-in-list {
  display: flex;
  min-height: 290px;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.movie-in-list {
  min-width: 120px;
  max-width: 120px;
  /* width: 120px; */
  margin: 0 12px;
  margin-top: 20px;
}
.movie-in-list.active {
  min-width: 147px;
  max-width: 147px;
  /* width: 147px; */
  /* height: 225px; */
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

@media (min-width: 821px) and (max-width: 1180px) {
  .scroll-button {
    display: none;
  }
  .movie-list-block {
    margin: 0;
    margin-top: 40px;
    display: block;
    min-width: 450px;
    max-width: 450px;
  }
  .movie-list-title {
    display: block;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-left: 15px;
    margin-bottom: 25px;
  }
  .movie-list-title > span {
    color: #DA1617;
  }
  .movies-in-list {
    display: flex;
    min-height: 290px;
    flex-wrap:wrap;
  }
  .movie-in-list {
    min-width: 190px;
    max-width: 190px;
    margin-top: 0;
    margin: 15px;
  }
  .movie-in-list.active {
    min-width: 190px;
    max-width: 190px;
    margin-top: 0;
    margin: 15px;
  }
  .load-more {
    height: 270px;
    min-width: 230px;
  }
}

@media (min-width: 415px) and (max-width: 820px) {
  .scroll-button {
    display: none;
  }
  .movie-list-block {
    margin: 0;
    display: block;
    min-width: auto;
    max-width: auto;
  }
  .movie-list-title {
    display: block;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin: 50px 0;
    margin-left: 15px;
    margin-bottom: 25px;
  }
  .movie-list-title > span {
    color: #DA1617;
  }
  .movies-in-list {
    display: flex;
    min-height: 100vh;
    flex-wrap:wrap;
  }
  .movie-in-list {
    min-width: 190px;
    max-width: 190px;
    margin-top: 0;
    margin: 25px 7px;
  }
  .movie-in-list.active {
    min-width: 190px;
    max-width: 190px;
    margin-top: 0;
    margin: 25px 7px;
  }
  .load-more {
    min-height: 270px;
    min-width: 230px;
  }
}

@media (max-width: 414px) {
  .scroll-button {
    display: none;
  }
  .movie-list-block {
    margin: 0;
    display: block;
    min-width: auto;
    max-width: auto;
  }
  .movie-list-title {
    display: block;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin: 30px 0;
    margin-left: 15px;
    margin-bottom: 25px;
  }
  .movie-list-title > span {
    color: #DA1617;
  }
  .movies-in-list {
    display: flex;
    min-height: 100vh;
    flex-wrap:wrap;
    justify-content: center;
  }
  .movie-in-list {
    min-width: 164px;
    max-width: 164px;
    margin-top: 0;
    margin: 25px 7px;
  }
  .movie-in-list.active {
    min-width: 164px;
    max-width: 164px;
    margin-top: 0;
    margin: 25px 7px;
  }
  .load-more {
    min-height: 270px;
    min-width: 164px;
  }

}
</style>