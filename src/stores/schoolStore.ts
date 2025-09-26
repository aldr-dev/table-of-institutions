import { defineStore } from 'pinia';
import axiosApi from '@/axiosApi.ts';
import type { SchoolData } from '@/types/school.ts';

export const useSchoolStore = defineStore('school', {
  state: () => ({
    responseData: [] as SchoolData[],
    isLoading: false,
    isError: '' as string | null,
    currentPage: 1,
    pagesCount: 0,
    totalCount: 0,
  }),

  actions: {
    async fetchSchools(page = 1, count = 1) {
      this.isLoading = true;
      this.isError = null;

      try {
        const response = await axiosApi.get(`/schools?page=${page}&count=${count}`);
        const { data } = response.data;
        this.responseData = data.list;
        this.pagesCount = data.total_count;
        this.totalCount = data.total_count;
      } catch (error) {
        this.isError = 'Произошла ошибка!' + error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
