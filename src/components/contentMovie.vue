<script setup>
import TrailerBtn from '@/components/trailerBtn.vue';
import RatingMovie from '@/components/ratingMovie.vue';

    const props = defineProps([
        'selectedMovie', 
        'selectedMovieGenres', 
        'selectedMovieDirectors', 
        'selectedMovieWriters', 
        'selectedMovieStars',
        'selectedMovieBG',
        'windowWidth',
    ])
</script>

<template>
    <div class="about-movie">
        <div class="cover-block"><img :src="selectedMovie.bg_picture" alt=""></div>

        <RatingMovie 
            :rating="selectedMovie.imdb_rating"
            v-if="windowWidth > 1180"
        />
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

        <TrailerBtn
            v-if="windowWidth > 1180"
        />

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

      <div class="rating-n-trailer">
        <TrailerBtn
            v-if="windowWidth <= 1180"
        />
        <RatingMovie 
            :rating="selectedMovie.imdb_rating"
            v-if="windowWidth <= 1180"
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
.cover-block {
    display: none;
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


@media (max-width: 1180px) {
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
        background: linear-gradient(180deg, rgba(22, 22, 22, 0) 47.99%, #161616 100%);
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
</style>