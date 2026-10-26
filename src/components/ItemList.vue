<script setup>
defineProps(['items', 'title']);

const importancePresentation = {
  high: { label: 'High', className: 'is-danger' },
  medium: { label: 'Medium', className: 'is-warning' },
  low: { label: 'Low', className: 'is-success' },
};

function getImportance(importance) {
  return importancePresentation[importance] ?? {
    label: 'Unknown',
    className: 'is-light',
  };
}
</script>

<template>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
        <span class="tag" :class="getImportance(item.importance).className">
          {{ getImportance(item.importance).label }}
        </span>
        <input type="checkbox" v-model="item.isDone">
      </li>
    </ul>
</template>
