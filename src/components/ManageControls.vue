<template>
  <div class="manage-controls">
    <div class="controls-wrapper">
      <h2>Manage Page Content</h2>
      <ul class="controls">
        <li v-for="item in props.selector.managePages" :key="item.id" @click="handleEmit(item.id)">
          <h3 :class="{ active: isActive === item.id }">{{ item.title }}</h3>
        </li>
      </ul>
    </div>
    <div class="controls-wrapper">
      <h2>Manage Data</h2>
      <ul class="controls">
        <li v-for="item in props.selector.manageData" :key="item.id" @click="handleEmit(item.id)">
          <h3 :class="{ active: isActive === item.id }">{{ item.title }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
//@click="selector('edu')"
//default
const isActive = ref('home')

const props = defineProps({
  selector: {
    type: Object,
    required: true
  }
})

const emits = defineEmits(['emitSelectorId'])
const handleEmit = (id) => {
  isActive.value = id
  emits('emitSelectorId', id)
}
</script>

<style lang="scss" scoped>
.active {
  color: var(--text-light-1) !important;
}
.controls {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  cursor: pointer;
  padding: 1rem;

  h3 {
    color: var(--primary);
  }
}
.controls-wrapper{
    margin: 1rem 0;
    border-bottom: 1px solid var(--divider-dark-1);
}
</style>
