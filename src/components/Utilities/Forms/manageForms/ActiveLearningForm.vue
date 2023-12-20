<template>
  <FormKit type="form" id="active-learning" @submit="submit" :disable="disable">
    <FormKit type="file" name="image" label="icon" :validation="manageStore.required" />
    <FormKit
      type="text"
      name="name"
      label="name"
      help="what am I learning?"
      :validation="manageStore.required"
      placeholder="actively learning..."
      v-model="placeholder.name"
    />
    <div v-auto-animate class="fk-wrapper">
      <h4 class="list-title">Body</h4>
      <FormKit
        v-model="placeholder.body"
        type="list"
        :value="['']"
        dynamic
        #default="{ items }"
        name="body"
      >
        <div v-for="(item, index) in items" :key="item" class="list-item">
          <FormKit type="textarea" :index="index" :validation="manageStore.required" placeholder="item..." />
          <ul class="controls">
            <li>
              <button
                type="button"
                @click="placeholder.body.splice(index - 1, 0, placeholder.body.splice(index, 1)[0])"
              >
                <font-awesome-icon icon="fa-solid fa-arrow-up" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="placeholder.body.splice(index + 1, 0, placeholder.body.splice(index, 1)[0])"
              >
                <font-awesome-icon icon="fa-solid fa-arrow-down" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button type="button" @click="placeholder.body.splice(index, 1)" class="button close">
                <font-awesome-icon icon="fa-solid fa-xmark" size="sm" color="#f4433b" />
              </button>
            </li>
          </ul>
        </div>
        <ButtonComponent
          type="outline"
          text="add a entry"
          @click="placeholder.body.push('')"
          style="margin: 1rem 0"
        />
      </FormKit>
    </div>
  </FormKit>

  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { useManageStore } from '@/stores/manage'
import { useFormPlaceholder } from '@/composables/formPlaceholder.js'
import { useManageForm } from '@/composables/manageForm.js'
import { vAutoAnimate } from '@formkit/auto-animate'
import ButtonComponent from '@/components/Utilities/buttons/ButtonComponent.vue'

const manageStore = useManageStore()

const { placeholder } = useFormPlaceholder()
const { displayMessage, disable, display, submitManageForm } = useManageForm()

const submit = async (values) => {
  values.id = manageStore.isEdit ? placeholder.value.id : values.name + '-id'

  try {
    submitManageForm(values)
  } catch (error) {
    console.log(error.code, error)
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  :deep(.formkit-outer) {
    margin-bottom: 0;
    flex-grow: 1;
  }
}
.list-title {
  margin-bottom: 0.625rem;
}
.controls {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
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

  button {
    border: none;
    background: none;
    padding: 0;
    margin-right: 3px;
    cursor: pointer;
    line-height: 1;
    transition: color 0.3s ease;
    appearance: none;
    font-size: 1em;
    color: var(--fk-color-primary);
    margin-left: 0.5rem;

    svg {
      &:hover {
        color: var(--primary);
      }
    }
  }
}
</style>
