<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div :class="{ 'wrapper-container': route.name === 'TablePage' }">
    <div :class="{ container: route.name === 'TablePage' }">
      <router-view></router-view>
    </div>
  </div>
</template>
