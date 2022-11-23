<script setup>
import ListMovie from '@/components/listMovie.vue';
import ContentMovie from '@/components/contentMovie.vue';
</script>

<template>
    <div class="iphone-wrapper">
        <ListMovie/>
        <ContentMovie/>
    </div>
</template>

<style scoped>
.iphone-wrapper {
  background: #161616;
}
</style>