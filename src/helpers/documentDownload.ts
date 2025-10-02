import axiosApi from '@/axiosApi.ts';

export const documentDownload = async () => {
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
    console.error('Ошибка сервера при скачивании таблицы:', error);
  }
};
