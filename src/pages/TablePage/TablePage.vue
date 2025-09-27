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
        <tr>
          <td>
            <div :class="styles.tableBodyCheckbox">
              <label :class="styles.tableBodyLabel">
                <input type="checkbox" :class="styles.tableBodyChecked" />
                <span :class="styles.customCheckbox"></span>
              </label>
              12/12/2025
            </div>
          </td>
          <td>Белгородская область</td>
          <td>МБОУ Средняя общеобразовательная школа №2</td>
          <td>ул. Николая Гондатти, д. 13 ул. Н. Гондатти 13 ; ул. Н. Зелинского 22</td>
          <td>
            <div :class="styles.tableBodyEducationWrapper">
              <span :class="styles.tableBodyEducation">Среднее</span>
              <span :class="styles.tableBodyEducation">Среднее</span>
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
