<script setup lang="ts">
import style from './DownloadButton.module.scss';
import { documentDownload } from '@/helpers/documentDownload.ts';
</script>

<template>
  <button @click="documentDownload" :class="style.downloadButton" type="button">Скачать</button>
</template>
