<script setup lang="ts">
import SelectInput from '@/components/SelectInput/SelectInput.vue';
import DownloadButton from '@/components/DownloadButton/DownloadButton.vue';
import DateRangePicker from '@/components/DateRangePicker/DateRangePicker.vue';
import SearchInput from '@/components/SearchInput/SearchInput.vue';
import styles from './TablePage.module.scss';
import PaginationButton from '@/components/PaginationButton/PaginationButton.vue';
</script>

<template>
  <header :class="styles.tableHeader">
    <div :class="styles.tableHeaderTop">
      <h1 :class="styles.tableHeaderTopHeadline">Таблица учреждений</h1>
      <div :class="styles.tableHeaderTopAction">
        <SearchInput />
        <DownloadButton />
      </div>
    </div>
    <div :class="styles.tableHeaderBottomAction">
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
  <PaginationButton />
</template>
