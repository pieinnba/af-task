<script setup>
    const reload = () => window.location.reload()
</script>

<template>
    <div class="container">
        <div class="image"><img src="@/assets/icons/UFO.png" alt="UFO"></div>
        <div class="title">Ooops..</div>
        <div class="subtitle">Something went wrong!</div>
        <button 
            @click="reload"
            class="retry-btn"
        >Retry</button>
    </div>
</template>

<style scoped>
.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.image {
    margin-bottom: 30px;
}
.title {
    font-family: 'Krona One';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 5px;
}
.subtitle {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #E2E2E2;
    margin-bottom: 120px;
}
.retry-btn {
    width: 160px;
    height: 42px;
    background: #DA1617;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    /* margin-bottom: 50px; */
}

</style>