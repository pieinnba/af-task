<script setup>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import ListMovie from '@/components/listMovie.vue';
import ContentMovie from '@/components/contentMovie.vue';

const store = useStore()
const router = useRouter()

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