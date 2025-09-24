<script setup lang="ts">
import SearchInput from '@/components/SearchInput/SearchInput.vue';
import DownloadButton from '@/components/DownloadButton/DownloadButton.vue';
import DateRangePicker from '@/components/DateRangePicker/DateRangePicker.vue';
import SelectInput from '@/components/SelectInput/SelectInput.vue';
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
          <SelectInput
            :options="[
              { id: 1, value: 'Все виды' },
              { id: 2, value: 'Постоянно' },
              { id: 3, value: 'Не определен' },
            ]"
            modelValue="Все виды"
          />
          <SelectInput
            :options="[
              { id: 1, value: 'Все статусы' },
              { id: 2, value: 'Действующее' },
              { id: 3, value: 'Недействующее' },
            ]"
            modelValue="Все статусы"
          />
        </div>
      </header>
    </div>
  </div>
</template>
