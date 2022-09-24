<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
    <li>navigate. <button @click="navigate('/about')">client routing</button></li>

  </ul>
</template>

<script lang="ts" setup>
import Counter from './Counter.vue'
import { navigate } from 'vite-plugin-ssr/client/router'

</script>
