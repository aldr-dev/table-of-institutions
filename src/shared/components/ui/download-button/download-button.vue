<script setup lang="ts">
import style from './download-button.module.scss';
import { useSchoolStore } from '@/app/stores/school-store.ts';

const store = useSchoolStore();
</script>

<template>
  <button @click="store.documentDownload" :class="style.downloadButton" type="button">Скачать</button>
</template>
