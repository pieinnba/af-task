<script setup>
    const props = defineProps(['rating'])
</script>

<template>
    <div class="movie-ratting">
        <div class="ratting-title">iMDb ratting</div>
        <div class="rating-points">
            <img src="@/assets/icons/star.svg" alt="star">
            <span><span class="ratting-point">{{ rating }}</span>/10</span>
        </div>
    </div>
</template>

<style scoped>
    .movie-ratting {
        margin-bottom: 17px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
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
</style>