import { defineStore } from 'pinia';
import axiosApi from '@/app/api/axios-api.ts';
import type { SchoolData } from '@/shared/model/types/school.ts';

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
        this.isError = 'Ошибка при запросе данных с сервера!';
        console.error(`Ошибка сервера - ${error}`);
      } finally {
        this.isLoading = false;
      }
    },

    async documentDownload() {
      try {
        const response = await axiosApi('/schools?download', {
          responseType: 'blob',
        });

        if (response.status === 200) {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'table.csv');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          console.error('Ошибка скачивания таблицы:', response);
        }
      } catch (error) {
        this.isError = 'Ошибка сервера при скачивании таблицы!';
        console.error(`Ошибка таблицы - ${error}`);
      }
    },
  },
});
