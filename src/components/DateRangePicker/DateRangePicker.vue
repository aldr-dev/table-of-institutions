<script setup lang="ts">
import { ref } from 'vue';

const dp = ref();
const date = ref();

const selectDate = () => {
  dp.value.selectDate();
};

const cancelDate = () => {
  dp.value.closeMenu();
};

const format = (rangeDate: [Date, Date]): string => {
  const [startDate, endDate] = rangeDate;

  if (!startDate || !endDate) return '';

  return `
  ${startDate
    .toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
    .replace('г.', '')}- ${endDate
    .toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
    .replace('г.', '')}
  `;
};
</script>

<template>
  <VueDatePicker
    ref="dp"
    range
    locale="ru"
    v-model="date"
    :format="format"
    :month-name-format="'long'"
    :preview-format="() => ''"
    placeholder="Выбрать период"
    hide-input-icon
    :enable-time-picker="false"
    cancel-button-text="Отмена"
    confirm-button-text="Выбрать"
  >
    <template #menu-header>
      <div class="my-header">Выбрать период</div>
    </template>
    <template #action-buttons>
      <button class="custom-select" @click="cancelDate">Отмена</button>
      <button class="custom-select" @click="selectDate">Сохранить</button>
    </template>
  </VueDatePicker>
</template>
