<template>
  <div>
    <h1>Works !</h1>
    <button @click="load">load segment</button>
  </div>
</template>

<script>
export default {
  methods: {
    load() {
      this.$segment.load(SEGMENT_WRITE_KEY)
    }
  }
}
</script>

