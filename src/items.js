import { ref } from 'vue';

export const items = ref([
  { id: 0, text: 'Piim', isDone: false, importance: 'low' },
  { id: 1, text: 'Viin', isDone: true, importance: 'high' },
  { id: 2, text: 'Sai', isDone: false, importance: 'medium' },
  { id: 3, text: 'Mac', isDone: true, importance: 'high' },
]);
