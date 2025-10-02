<script setup lang="ts">
import SelectInput from '@/components/SelectInput/SelectInput.vue';
import DownloadButton from '@/components/DownloadButton/DownloadButton.vue';
import DateRangePicker from '@/components/DateRangePicker/DateRangePicker.vue';
import SearchInput from '@/components/SearchInput/SearchInput.vue';
import styles from './TablePage.module.scss';
import PaginationButton from '@/components/PaginationButton/PaginationButton.vue';
import { useSchoolStore } from '@/stores/schoolStore.ts';
import { format } from 'date-fns';

function highlightText(text: string, query: string) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, `<span class="highlight">$1</span>`);
}

const store = useSchoolStore();
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
  <main :class="styles.tableBody">
    <table>
      <thead>
        <tr>
          <th>
            <div :class="styles.tableBodyHeader">
              <div :class="styles.tableBodyHeaderCheck">
                <img src="/icons/ic-check.svg" alt="check icon" />
                Дата
              </div>
              <img :style="styles.tableBodyHeaderImg" src="/icons/ic-sort.svg" alt="sort icon" />
            </div>
          </th>
          <th>
            <div :class="styles.tableBodyHeader">
              Регион
              <img :style="styles.tableBodyHeaderImg" src="/icons/ic-sort.svg" alt="sort icon" />
            </div>
          </th>
          <th>
            <div :class="styles.tableBodyHeader">
              Название
              <img :style="styles.tableBodyHeaderImg" src="/icons/ic-sort.svg" alt="sort icon" />
            </div>
          </th>
          <th>
            <div :class="styles.tableBodyHeader">
              Адрес
              <img :style="styles.tableBodyHeaderImg" src="/icons/ic-sort.svg" alt="sort icon" />
            </div>
          </th>
          <th>
            <div :class="styles.tableBodyHeader">
              Уровень образования
              <img :style="styles.tableBodyHeaderImg" src="/icons/ic-sort.svg" alt="sort icon" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in store.searchSchool" :key="data.uuid">
          <td>
            <div :class="styles.tableBodyCheckbox">
              <label :class="styles.tableBodyLabel">
                <input type="checkbox" :checked="data.is_federal" :class="styles.tableBodyChecked" />
                <span :class="styles.customCheckbox"></span>
              </label>
              {{ format(data.updated_at, 'dd/MM/yy') }}
            </div>
          </td>
          <td>
            <span v-html="highlightText(data.edu_org.region.name, store.searchQuery)"></span>
          </td>
          <td>
            <span v-html="highlightText(data.edu_org.short_name || data.edu_org.full_name, store.searchQuery)"></span>
          </td>
          <td>
            <span v-html="highlightText(data.edu_org.contact_info.post_address, store.searchQuery)"></span>
          </td>
          <td>
            <div :class="styles.tableBodyEducationWrapper">
              <span
                v-for="education in data.supplements[0].educational_programs"
                :key="education.uuid"
                :class="styles.tableBodyEducation"
                >{{ education.edu_level.name }}</span
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
  <footer>
    <PaginationButton />
  </footer>
</template>
