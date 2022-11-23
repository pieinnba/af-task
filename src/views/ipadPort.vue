<script setup>
    import ListMovie from '@/components/listMovie.vue';
    import ContentMovie from '@/components/contentMovie.vue';
</script>

<template>
    <div class="ipad-portrait-wrapper">
        <ListMovie/>
        <ContentMovie/>
    </div>
</template>

<style scoped>
.ipad-portrait-wrapper {
  background: #161616;
}
</style>