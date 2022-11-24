<script setup>
import { onMounted, computed, onUnmounted } from 'vue';
import Desktop from '@/views/desktop.vue';
import IpadLand from '@/views/ipadLand.vue';
import IpadPort from '@/views/ipadPort.vue';
import Iphone from '@/views/iphone.vue';
import { useStore } from 'vuex';

const store = useStore()
const views = {
  Desktop,
  IpadLand,
  IpadPort,
  Iphone
}

window.addEventListener("resize", () => {
  store.state.windowWidth = window.innerWidth
});

const currentView = computed(() => {
  if(store.getters.windowWidth > 1180) {
      return 'Desktop'
    } else if(store.getters.windowWidth > 820) {
      return 'IpadLand'
    } else if(store.getters.windowWidth > 413) {
      return 'IpadPort'
    } else {
      return 'Iphone'
    }
})

  onMounted(async () => {
    store.state.windowWidth = window.innerWidth
    await store.dispatch('fetchData')
  })

  onUnmounted(() => {
    window.removeEventListener("resize", () => {
      store.state.windowWidth = window.innerWidth
    });
  })

</script>

<template>
  <component :is="views[currentView]" class="view"></component>
</template>