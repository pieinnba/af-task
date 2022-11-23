<script setup>
import ListMovie from '@/components/listMovie.vue';
import ContentMovie from '@/components/contentMovie.vue';
</script>

<template>
    <div class="ipad-land-wrapper">
        <ListMovie/>
        <ContentMovie />
    </div>
</template>

<style scoped>
.ipad-land-wrapper {
  position: relative;
  display: flex;
  background: #161616;
  height: 100vh;
  overflow: hidden;

}
</style>