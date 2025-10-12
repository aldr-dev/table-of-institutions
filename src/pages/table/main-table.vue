<script setup lang="ts">
import SelectInput from '@/shared/components/ui/select-input/select-input.vue';
import DownloadButton from '@/shared/components/ui/download-button/download-button.vue';
import DateRangePicker from '@/shared/components/ui/date-range-picker/date-range-picker.vue';
import SearchInput from '@/shared/components/ui/search-input/search-input.vue';
import styles from './main-table.module.scss';
import PaginationButton from '@/shared/components/ui/pagination-button/pagination-button.vue';
import { useSchoolStore } from '@/app/stores/school-store.ts';
import { format } from 'date-fns';
import { highlightText, uniqueEducations } from '@/pages/table/useTabPage.ts';

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
                v-for="education in uniqueEducations(data.supplements[0].educational_programs)"
                :key="education"
                :class="styles.tableBodyEducation"
                >{{ education }}</span
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
