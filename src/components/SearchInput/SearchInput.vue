<script setup lang="ts">
import styles from './SearchInput.module.scss';
</script>

<template>
  <div :class="styles.inputSearchWrapper">
    <input :class="styles.inputSearch" type="text" placeholder="Поиск" />
  </div>
</template>
