<script setup lang="ts">
import styles from './SearchInput.module.scss';
import { useSchoolStore } from '@/stores/schoolStore.ts';

const store = useSchoolStore();
</script>

<template>
  <div :class="styles.inputSearchWrapper">
    <input v-model.trim="store.searchQuery" :class="styles.inputSearch" type="text" placeholder="Поиск" />
  </div>
</template>
