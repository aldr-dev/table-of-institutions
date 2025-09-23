<script setup lang="ts">
import SearchInput from '@/components/SearchInput/SearchInput.vue';
import DownloadButton from '@/components/DownloadButton/DownloadButton.vue';
import DateRangePicker from '@/components/DateRangePicker/DateRangePicker.vue';
</script>

<template>
  <div class="wrapper-container">
    <div class="container">
      <header class="table-header">
        <div class="table-header-top">
          <h1 class="table-header-top-headline">Таблица учреждений</h1>
          <div class="table-header-top-action">
            <SearchInput />
            <DownloadButton />
          </div>
        </div>
        <div class="table-header-bottom-action">
          <DateRangePicker />
          <select name="" id="">
            <option value="volvo">Все виды</option>
          </select>
          <select name="" id="">
            <option value="volvo">Все статусы</option>
          </select>
        </div>
      </header>
    </div>
  </div>
</template>
