<script setup>
import { ref } from 'vue'
import { vAutoAnimate } from '@formkit/auto-animate'
import { submitPageContentForm, getPageContent } from '@/plugins/firebase.js'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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
    await submitPageContentForm(form, 'aboutPage')
  } catch (error) {
    console.log(error.code, error)

    if (error.code === 'storage/unauthorized' || error.code === 'permission-denied')
      displayMessage.value = 'user does not have permission'
    else displayMessage.value = 'error occurred...'
    disable.value = false
    return
  }

  //on successfull submission
  displayMessage.value = 'submitted!'
  disable.value = false

  //refresh page
  router.push('/manage')
}
onMounted(async () => {
  try {
    placeholder.value = await getPageContent('aboutPage')
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <FormKit type="form" id="about-form" @submit="submit" :disabled="disable">
    <h4>Hero</h4>
    <FormKit type="group" name="hero" id="hero">
      <FormKit type="text" label="title" name="title" :placeholder="placeholder.hero.title" />
      <FormKit
        type="textarea"
        auto-height
        label="content"
        name="content"
        :placeholder="placeholder.hero.content"
      />
    </FormKit>
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
        <FormKit
          type="button"
          label="add more"
          @click="placeholder.values.push({ title: '', content: '', icon: '' })"
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
