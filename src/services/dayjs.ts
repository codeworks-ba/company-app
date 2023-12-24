import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  const newDate = new Date(date).toISOString();
  return dayjs(newDate).format('DD.MM.YYYY');
};
