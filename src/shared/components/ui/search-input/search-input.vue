<script setup lang="ts">
import styles from './search-input.module.scss';
import { useSchoolStore } from '@/app/stores/school-store.ts';

const store = useSchoolStore();
</script>

<template>
  <div :class="styles.inputSearchWrapper">
    <input v-model.trim="store.searchQuery" :class="styles.inputSearch" type="text" placeholder="Поиск" />
  </div>
</template>
