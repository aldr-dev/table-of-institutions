<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div :class="{ 'wrapper-container': route.name === 'table' }">
    <div :class="{ container: route.name === 'table' }">
      <router-view></router-view>
    </div>
  </div>
</template>
