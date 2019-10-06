<template>
  <div>
    <nav>
      <ul class="header-ul">
        <li>
          <router-link class="router-link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
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

