<script setup>
import { computed } from 'vue';
import ListMovie from '@/components/listMovie.vue';
import ContentMovie from '@/components/contentMovie.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

const store = useStore()
const selectedMovieBG = computed(() => store.getters.selectedMovieBG)

onMounted(() => {
    // router.push({
    //   name: 'ContentMovie',
    //   params: {
    //     movieId: store.getters.data[0].id
    //   }
    // })
  })

</script>

<template>
  <div class="desktop-wrapper">
    <ContentMovie />
    <ListMovie/>
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

</style>