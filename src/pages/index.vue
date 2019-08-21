<template>
  <div class="container">
    <div>
      <h1>Nuxt + vue-function-api</h1>
      <v-counter :initial-count="count"></v-counter>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VCounter from '~/components/VCounter.vue'
export default Vue.extend({
  components: {
    VCounter
  },
  data() {
    return {
      count: 0
    }
  },
  asyncData() {
    return { count: 100 }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
