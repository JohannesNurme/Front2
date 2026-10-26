<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
import { items } from '../items.js';

let nextItemId = items.value.reduce((nextId, item) => Math.max(nextId, item.id + 1), 0);
let newItem = ref('');
let newImportance = ref('medium');

function add(){
  if(newItem.value.trim() !== '') {
    items.value.push({
      id: nextItemId++,
      text: newItem.value.trim(),
      isDone: false,
      importance: newImportance.value,
    });
  }
  newItem.value = '';
}

const importanceOrder = { high: 3, medium: 2, low: 1 };

function sortByImportance(list) {
  return [...list].sort((first, second) =>
    (importanceOrder[second.importance] ?? 0) -
    (importanceOrder[first.importance] ?? 0)
  );
}

let allItems = computed(() => sortByImportance(items.value));
let doneItems = computed(() =>
  sortByImportance(items.value.filter(item => item.isDone))
);
let toDoItems = computed(() =>
  sortByImportance(items.value.filter(item => !item.isDone))
);
</script>

<template>
  <div class="container content mt-3">
    <div class="field has-addons">
        <div class="control is-expanded">
            <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="New item">
        </div>
        <div class="control">
            <div class="select">
                <select v-model="newImportance" aria-label="Item importance">
                    <option value="high">High importance</option>
                    <option value="medium">Medium importance</option>
                    <option value="low">Low importance</option>
                </select>
            </div>
        </div>
        <div class="control">
            <button @click="add" class="button is-info">
                Add
            </button>
        </div>
    </div>
    <ItemList :items="allItems" title="All Items"></ItemList>
    <ItemList :items="doneItems" title="Done Items"></ItemList>
    <ItemList :items="toDoItems" title="ToDo Items"></ItemList>
  </div>
</template>

<style></style>
