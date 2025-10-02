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
    searchQuery: '',
  }),

  getters: {
    searchSchool(state): SchoolData[] {
      const query = state.searchQuery.toLowerCase();
      if (!query) return state.responseData;

      return state.responseData.filter((s) => {
        return (
          s.edu_org?.full_name?.toLowerCase().includes(query) ||
          s.edu_org?.short_name?.toLowerCase().includes(query) ||
          s.edu_org?.contact_info?.post_address?.toLowerCase().includes(query) ||
          s.edu_org?.region?.name?.toLowerCase().includes(query)
        );
      });
    },
  },

  actions: {
    async fetchSchools(page = 1, count = 1) {
      this.isLoading = true;
      this.isError = null;

      try {
        const response = await axiosApi.get(`/schools?page=${page}&count=${count}`);
        const { data } = response.data;
        this.responseData = data.list;
        this.pagesCount = data.pages_count;
      } catch (error) {
        this.isError = 'Произошла ошибка!' + error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
