<script setup lang="ts">
import styles from './PageNotFound.module.scss';
</script>
<template>
  <div :class="styles.wrapperNotFound">
    <div :class="styles.containerNotFound">
      <h1 :class="styles.headlineNotFound">404</h1>
      <p :class="styles.descNotFound">Упс... страница которую вы ищите не найдена!</p>
      <router-link to="/" :class="styles.linkNotFound">На главную</router-link>
    </div>
  </div>
</template>
