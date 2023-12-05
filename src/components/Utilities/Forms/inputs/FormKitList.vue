<template>
  <div v-auto-animate class="fk-wrapper">
    <h4 class="title">slug text array</h4>
    <FormKit v-model="fkList" type="list" dynamic #default="{ items }">
      <div v-for="(item, index) in items" :key="item" class="slug">
        <FormKit type="text" :index="index" />
        <ul class="controls">
          <li>
            <button type="button" @click="slug.splice(index - 1, 0, slug.splice(index, 1)[0])">
              <FormKitIcon icon="arrowUp" />
            </button>
          </li>
          <li>
            <button type="button" @click="slug.splice(index + 1, 0, slug.splice(index, 1)[0])">
              <FormKitIcon icon="arrowDown" />
            </button>
          </li>
          <li>
            <button type="button" @click="slug.splice(index, 1)" class="button close">
              <FormKitIcon icon="close" />
            </button>
          </li>
        </ul>
      </div>
      <FormKit type="button" label="add a slug" @click="slug.push('')" />
    </FormKit>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { FormKitIcon } from '@formkit/vue'
import { vAutoAnimate } from '@formkit/auto-animate'

const emit = defineEmits(['update'])
const fkList = computed({
  get: () => props.list,
  set: (newVal) => emit('update', newVal)
})
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  list: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 0.625rem;
}
.slug {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  :deep(.formkit-outer) {
    margin-bottom: 0;
    flex-grow: 1;
  }
}
.controls {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  :deep(svg) {
    display: block;
    width: 1em;
    max-height: 1.25em;
    height: auto;
    fill: currentColor;
  }

  .close {
    color: var(--danger);
  }

  .button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    line-height: 1;
    transition: color 0.3s ease;
    appearance: none;
    font-size: 1em;
    color: var(--fk-color-primary);
    margin-left: 0.5rem;
  }
}
</style>
