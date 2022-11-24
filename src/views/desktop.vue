<script setup>
import { computed, watch } from 'vue';
import ListMovie from '@/components/listMovie.vue';
import ContentMovie from '@/components/contentMovie.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const selectedMovieBG = computed(() => store.getters.selectedMovieBG)

const data = computed(() => store.getters.data)

watch(data, (newData, oldData) => {
  if(!oldData.length) {
    router.push({
      name: 'ContentMovie',
      params: {
        movieId: store.getters.data[0].id
      }
    })
  }
})


</script>

<template>
  <div class="desktop-wrapper">
    <ContentMovie />
    <ListMovie
      style="z-index: 3"
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
}
.desktop-wrapper:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    background: linear-gradient(180deg, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0.89) 67.19%, #161616 100%);
}

</style>