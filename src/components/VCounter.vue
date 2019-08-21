<template>
  <div>
    <div>{{ count }}</div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import useCount from '~/compositions/useCount'

export default Vue.extend({
  name: 'VCounter',
  props: {
    initialCount: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    return {
      ...useCount(props.initialCount)
    }
  }
})
</script>
