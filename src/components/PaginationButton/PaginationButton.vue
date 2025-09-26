<script setup lang="ts">
import { useSchoolStore } from '@/stores/schoolStore.ts';
import { computed, watch, ref, onMounted, onBeforeUnmount } from 'vue';
import styles from './PaginationButton.module.scss';

const store = useSchoolStore();

const limitRecords = ref(10);
const limitRecordsList = ref(false);
const limitRecordsValues = [10, 20, 30, 40, 50];
const pageLimit = 1;

const onChangeValueLimit = (value: number) => {
  limitRecords.value = value;
};

const toggleChange = () => {
  limitRecordsList.value = !limitRecordsList.value;
};

const rangePage = computed(() => {
  const currentPage = store.currentPage;
  const limit = limitRecords.value;
  const total = store.totalCount;

  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, total);

  return `${start}-${end} из ${total} записей`;
});

const pages = computed(() => {
  const total = store.pagesCount;
  const current = store.currentPage;
  const array: (number | string)[] = [];

  if (total <= pageLimit) {
    for (let i = 1; i <= pageLimit; i++) {
      array.push(i);
    }
    return array;
  }

  if (current < 3) {
    array.push(1, 2, 3, '...', total);
  } else if (current > total - 2) {
    array.push(1, '...', total - 2, total - 1, total);
  } else {
    array.push(1, '...', current - 1, current, current + 1, '...', total);
  }

  return array;
});

watch(
  [() => store.currentPage, () => limitRecords.value],
  ([newPage, newLimit]) => {
    store.fetchSchools(newPage, newLimit);
  },
  { immediate: true },
);

const goToPage = (page: number | string) => {
  if (typeof page === 'number' && page !== store.currentPage) {
    store.currentPage = page;
  }
};

const nextPage = () => {
  if (store.currentPage < store.pagesCount) {
    store.currentPage++;
  }
};

const prevPage = () => {
  if (store.currentPage > 1) {
    store.currentPage--;
  }
};

onMounted(() => {
  window.addEventListener('click', toggleChange);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', toggleChange);
});
</script>

<template>
  <div :class="styles.paginationWrapper">
    <div :class="styles.pagination">
      <button :class="styles.paginationPrevButton" @click="prevPage" :disabled="store.currentPage === 1">
        <img :class="styles.paginationPrevButtonImg" src="/icons/ic-arrow.svg" alt="prevButton" />
      </button>

      <button
        v-for="p in pages"
        :key="p"
        @click="goToPage(p)"
        :disabled="p === '...' || p === store.currentPage"
        :class="[styles.paginationButton, { [styles.active]: p === store.currentPage }]"
      >
        {{ p }}
      </button>

      <button :class="styles.paginationNextButton" @click="nextPage" :disabled="store.currentPage === store.pagesCount">
        <img :class="styles.paginationNextButtonImg" src="/icons/ic-arrow.svg" alt="nextButton" />
      </button>
    </div>

    <div :class="styles.rangePageWrapper">
      <div :class="styles.rangePageInner">
        <span :class="styles.rangePageValue">
          {{ rangePage }}
        </span>
      </div>

      <div :class="styles.recordLimitWrapper">
        <span :class="styles.recordLimitShowText">Показать</span>
        <div :class="styles.recordLimitInner">
          <button :class="styles.recordLimitButton" @click.stop="toggleChange">
            {{ limitRecords }}
            <img
              :class="[styles.recordLimitImg, { [styles.active]: limitRecordsList }]"
              src="/icons/ic-arrow.svg"
              alt="Arrow"
            />
          </button>
          <ul :class="styles.recordLimitList" v-if="limitRecordsList">
            <li
              :class="styles.recordLimitItem"
              @click="onChangeValueLimit(number)"
              v-for="number in limitRecordsValues"
              :key="number"
            >
              {{ number }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
