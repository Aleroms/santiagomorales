<script setup>
import { ref, onMounted } from 'vue'
import { vAutoAnimate } from '@formkit/auto-animate'
import { submitForm, getDocument } from '@/plugins/firebase.js'
import { useManageStore } from '@/stores/manage'
import ButtonComponent from '@/components/Utilities/buttons/ButtonComponent.vue'

const manageStore = useManageStore()

const placeholder = ref({})
const displayMessage = ref('')
const disable = ref(false)
const display = ref(false)

const submit = async (form) => {
  disable.value = true
  displayMessage.value = 'submitting...'
  display.value = true
  console.log(form)

  try {
    await submitForm(form, 'pageContent', 'aboutPage')
  } catch (error) {
    console.log(error.code, error)
    manageStore.result(error)
    disable.value = false
    return
  }

  //on successfull submission
  manageStore.result('success')
}
onMounted(async () => {
  try {
    placeholder.value = await getDocument('pageContent', 'aboutPage')
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <FormKit type="form" id="about-form" @submit="submit" :disabled="disable">
    <h4>Hero</h4>
    <FormKit type="text" label="title" name="title" :placeholder="placeholder.title" />
    <FormKit
      type="textarea"
      auto-height
      label="content"
      name="content"
      :placeholder="placeholder.content"
    />
    <!-- my values  -->
    <div v-auto-animate class="fk-wrapper">
      <h4 class="title">My values</h4>
      <FormKit
        v-model="placeholder.values"
        type="list"
        :value="[{}]"
        dynamic
        #default="{ items }"
        name="values"
      >
        <FormKit
          type="group"
          v-for="(item, index) in items"
          :key="item"
          :index="index"
          class="list-item"
        >
          <FormKit type="text" name="title" label="title" :placeholder="item.title" />
          <FormKit
            type="textarea"
            auto-height
            name="content"
            label="content"
            :placeholder="item.content"
          />
          <FormKit type="text" name="icon" label="icon" :placeholder="item.icon" />
          <ul class="controls">
            <li>
              <button
                type="button"
                @click="
                  placeholder.values.splice(index - 1, 0, placeholder.values.splice(index, 1)[0])
                "
              >
                <font-awesome-icon icon="fa-solid fa-arrow-up" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="
                  placeholder.values.splice(index + 1, 0, placeholder.values.splice(index, 1)[0])
                "
              >
                <font-awesome-icon icon="fa-solid fa-arrow-down" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="placeholder.values.splice(index, 1)"
                class="button close"
              >
                <font-awesome-icon icon="fa-solid fa-xmark" size="sm" color="#f4433b" />
              </button>
            </li>
          </ul>
        </FormKit>
        <ButtonComponent
          type="outline"
          text="add more"
          @click="placeholder.values.push({ title: '', content: '', icon: '' })"
          style="margin: 1rem 0"
        />
      </FormKit>
    </div>
    <FormKit
      type="textarea"
      auto-height
      label="how I learn"
      name="how_i_learn"
      :placeholder="placeholder.how_i_learn"
    />
    <FormKit
      type="textarea"
      auto-height
      label="how I develop"
      name="how_i_develop"
      :placeholder="placeholder.how_i_develop"
    />
  </FormKit>
</template>

<style lang="scss" scoped>
.title {
  margin-bottom: 0.625rem;
}
.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

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
