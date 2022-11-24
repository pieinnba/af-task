<script setup>
import TrailerBtn from '@/components/trailerBtn.vue';
import RatingMovie from '@/components/ratingMovie.vue';
import { useStore } from 'vuex';

const store = useStore()

</script>

<template>
    <div class="about-movie">
        <RouterLink 
          v-if="store.getters.windowWidth <= 820" 
          :to="{name: 'ListMovie'}"
          class="back-button"
        >
          <img src="@/assets/icons/back.svg" alt="back">
        </RouterLink>
        <div class="cover-block"><img :src="store.getters.selectedMovie.bg_picture" alt=""></div>

        <RatingMovie 
            :rating="store.getters.selectedMovie.imdb_rating"
            v-if="store.getters.windowWidth > 1180"
        />
        <div>
          <span class="movie-title">{{ store.getters.selectedMovie.title }}</span>
          <span class="release-year">({{ store.getters.selectedMovie.release_year }})</span>
        </div>
        <div class="movie-description">{{ store.getters.selectedMovie.description }}</div>
        <div class="movie-stats">
          <div class="movie-genres">{{ store.getters.selectedMovieGenres }}</div>
          <div class="movie-age-ratting">{{ store.getters.selectedMovie.mpa_rating }}</div>
          <div class="movie-duration">{{ store.getters.selectedMovie.duration }}m</div>
        </div>

        <TrailerBtn
            v-if="store.getters.windowWidth > 1180"
        />

      <div class="movie-creators">
        <div v-if="store.getters.selectedMovieDirectors.length" class="movie-director">
          <span class="movie-director-title">Director: </span>
          <span class="movie-director-name">{{ store.getters.selectedMovieDirectors }}</span>
        </div>
        <div v-if="store.getters.selectedMovieWriters.length" class="movie-writers">
          <span class="movie-writers-title">Writers: </span>
          <span class="movie-writers-name">{{ store.getters.selectedMovieWriters }}</span>
        </div>
        <div v-if="store.getters.selectedMovieStars.length" class="movie-stars" >
          <span class="movie-stars-title">Stars: </span>
          <span class="movie-stars-name">{{ store.getters.selectedMovieStars }}</span>
        </div>
      </div>

      <div class="rating-n-trailer">
        <TrailerBtn
            v-if="store.getters.windowWidth <= 1180"
        />
        <RatingMovie 
            :rating="store.getters.selectedMovie.imdb_rating"
            v-if="store.getters.windowWidth <= 1180"
        />
      </div>

    </div>
</template>

<style scoped>
.about-movie {
  position: relative;
  margin: 0 100px;
  margin-bottom: 50px;
}
.back-button {
  background: none;
  position: absolute;
  z-index: 2;
  top: 24px;
  left: 24px;
  display: none;
}
.cover-block {
    display: none;
}
.movie-ratting {
  display: block;
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
  max-width: 560px;
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


@media (min-width: 821px) and (max-width: 1180px) {
    .about-movie {
        position: relative;
        margin: 0;
        margin-bottom: 0;
    }
    .cover-block {
        position: relative;
        display: block;
        width: 100%;
        max-height: 390px;
        overflow: hidden;
    }
    .cover-block > img {
        width: 100%;
    }
    .cover-block:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0; left: 0;
        background: linear-gradient(180deg, rgba(22, 22, 22, 0) 47.99%, #161616 100%);
    }
    .movie-title {
        margin-left: 10px;
    }
    .movie-creators {
        position: static;
        margin-left: 10px;
    }
    .movie-description {
        max-width: 500px;
        margin-top: 34px;
        margin-bottom: 16px;
        margin-left: 10px;
    }
    .movie-stats {
        margin-bottom: 32px;
        margin-left: 10px;
    }
    .rating-n-trailer {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: absolute;
        right: 10px;
        top: 400px;
        gap: 30px;
    }

}

@media (min-width: 415px) and (max-width: 820px) {
  .about-movie {
      position: relative;
      margin: 0;
      margin-bottom: 0;
      height: 100vh;
  }
  .back-button {
    display: block;
  }
  .cover-block {
      position: relative;
      display: block;
      width: 100%;
      min-height: 785px;
      max-height: 785px;
      overflow: hidden;
      display: flex;
      justify-content: center;
  }
  .cover-block > img {
      object-fit: cover;
      object-position: center top;
  }
  .cover-block:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0; left: 0;
        background: linear-gradient(180deg, rgba(22, 22, 22, 0) 48.44%, #161616 100%);
    }
    .movie-title {
        margin-left: 25px;
    }
    .movie-creators {
        position: static;
        margin-left: 25px;
    }
    .movie-description {
        max-width: 500px;
        margin-top: 34px;
        margin-bottom: 16px;
        margin-left: 25px;
    }
    .movie-stats {
        margin-bottom: 32px;
        margin-left: 25px;
    }
    .rating-n-trailer {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: absolute;
        right: 25px;
        bottom: 250px;
        gap: 30px;
    }
}
@media (max-width: 414px) {
  .about-movie {
      position: relative;
      margin: 0;
      margin-bottom: 0;
      height: 100vh;
  }
  .back-button {
    display: block;
  }
  .cover-block {
      position: relative;
      display: block;
      width: 100%;
      height: 500px;
      overflow: hidden;
      display: flex;
      justify-content: center;
  }
  .cover-block > img {
      height: 100%;
  }
  .cover-block:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0; left: 0;
        background: linear-gradient(180deg, rgba(22, 22, 22, 0) 48.44%, #161616 100%);
    }
    .movie-title {
        display: inline-block;
        margin-left: 25px;
    }
    .release-year {
      margin-left: 25px;
    }
    .movie-creators {
        position: static;
        margin-left: 25px;
        margin-bottom: 25px;
    }
    .movie-description {
        max-width: 500px;
        margin-top: 34px;
        margin-bottom: 16px;
        margin-left: 25px;
    }
    .movie-stats {
        margin-bottom: 32px;
        margin-left: 25px;
    }
    .rating-n-trailer {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        position: sticky; 
        bottom: 0;
        padding: 20px 25px 55px 25px;
        background-color: #161616;
        
    }
    .movie-ratting {
      margin: 0;
    }
}
</style>