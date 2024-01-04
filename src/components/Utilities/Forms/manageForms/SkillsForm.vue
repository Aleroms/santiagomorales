<template>
  <FormKit type="form" id="skills-form" @submit="submit" :disable="disable">
    <FormKit
      type="textarea"
      auto-height
      label="how I approach a problem"
      name="approach_problem"
      validation="required"
      v-model="placeholder.approach_problem"
    />
    <!-- <FormKit
      type="textarea"
      auto-height
      label="how I program"
      name="how_i_program"
      validation="required"
      v-model="placeholder.how_i_program"
    /> -->
    <div v-auto-animate class="fk-wrapper">
      <h4 class="list-title">How I Program</h4>
      <FormKit
        v-model="placeholder.how_i_program"
        type="list"
        :value="['']"
        dynamic
        #default="{ items }"
        name="how_i_program"
      >
        <div v-for="(item, index) in items" :key="item" class="list-item">
          <FormKit
            type="textarea"
            :index="index"
            :validation="manageStore.required"
            placeholder="item..."
          />
          <ul class="controls">
            <li>
              <button
                type="button"
                @click="
                  placeholder.how_i_program.splice(
                    index - 1,
                    0,
                    placeholder.how_i_program.splice(index, 1)[0]
                  )
                "
              >
                <font-awesome-icon icon="fa-solid fa-arrow-up" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="
                  placeholder.how_i_program.splice(
                    index + 1,
                    0,
                    placeholder.how_i_program.splice(index, 1)[0]
                  )
                "
              >
                <font-awesome-icon icon="fa-solid fa-arrow-down" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="placeholder.how_i_program.splice(index, 1)"
                class="button close"
              >
                <font-awesome-icon icon="fa-solid fa-xmark" size="sm" color="#f4433b" />
              </button>
            </li>
          </ul>
        </div>
        <ButtonComponent
          type="outline"
          text="add a entry"
          @click="placeholder.how_i_program.push('')"
          style="margin: 1rem 0"
        />
      </FormKit>
    </div>
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { submitForm, getDocument } from '@/plugins/firebase.js'
import { useManageStore } from '@/stores/manage'
import { vAutoAnimate } from '@formkit/auto-animate'
import ButtonComponent from '@/components/Utilities/buttons/ButtonComponent.vue'

const manageStore = useManageStore()
const disable = ref(false)
const display = ref(false)
const displayMessage = ref('')
const placeholder = ref({})

const submit = async (values) => {
  disable.value = true
  display.value = true
  displayMessage.value = 'submitting...'
  console.log(values)

  //do not need to filter form for files - this form never has files
  try {
    await submitForm(values, 'pageContent', 'skillsPage')
  } catch (error) {
    console.log(error.code, error)
    manageStore.result(error)
    return
  }

  //on successfull submission
  manageStore.result('success')
}

onMounted(async () => {
  try {
    placeholder.value = await getDocument('pageContent', 'skillsPage')
  } catch (error) {
    console.log(error)
  }
})
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
