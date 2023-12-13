<script setup>
import { ref, onMounted } from 'vue'
import { vAutoAnimate } from '@formkit/auto-animate'
import { submitPageContentForm, getPageContent, uploadFile } from '@/plugins/firebase.js'
import { filterForm } from '@/utils/filterForm.js'
import { useManageStore } from '@/stores/manage'
import ButtonComponent from '@/components/Utilities/buttons/ButtonComponent.vue'

const placeholder = ref({})
const displayMessage = ref('')
const disable = ref(false)
const display = ref(false)
const manageStore = useManageStore()

const submit = async (values) => {
  disable.value = true
  displayMessage.value = 'submitting...'
  display.value = true
  console.log(values)

  try {
    await uploadFile(values.resume, 'resume.pdf')
    await uploadFile(values.avatar, 'misc/avatar.jpg')

    //submit filtered form
    let filteredForm = filterForm(values)

    // await submitPageContentForm(values, 'homePage')
    await submitPageContentForm(filteredForm, 'homePage')
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
    placeholder.value = await getPageContent('homePage')
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <FormKit type="form" id="home-form" @submit="submit" :disabled="disable">
    <FormKit
      type="file"
      label="resume"
      accept=".pdf"
      multiple="false"
      name="resume"
      validation="required"
    />
    <FormKit
      type="file"
      label="avatar"
      accept=".jpg,.png"
      multiple="false"
      name="avatar"
      validation="required"
    />
    <FormKit
      type="text"
      label="title"
      name="title"
      :placeholder="placeholder.title"
      validation="required"
    />
    <FormKit
      type="text"
      label="subtitle"
      name="subtitle"
      :placeholder="placeholder.subtitle"
      validation="required"
    />
    <!-- Form Kit List  for slug-->
    <div v-auto-animate class="fk-wrapper">
      <h4 class="title">slug text array</h4>
      <FormKit v-model="placeholder.slug" type="list" dynamic #default="{ items }" name="slug">
        <div v-for="(item, index) in items" :key="item" class="list-item">
          <FormKit type="text" :index="index" validation="required" />
          <ul class="controls">
            <li>
              <button
                type="button"
                @click="placeholder.slug.splice(index - 1, 0, placeholder.slug.splice(index, 1)[0])"
              >
                <font-awesome-icon icon="fa-solid fa-arrow-up" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="placeholder.slug.splice(index + 1, 0, placeholder.slug.splice(index, 1)[0])"
              >
                <font-awesome-icon icon="fa-solid fa-arrow-down" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button type="button" @click="placeholder.slug.splice(index, 1)" class="button close">
                <font-awesome-icon icon="fa-solid fa-xmark" size="sm" color="#f4433b" />
              </button>
            </li>
          </ul>
        </div>
        <ButtonComponent
          type="outline"
          text="add a slug"
          @click="placeholder.slug.push('')"
          style="margin: 1rem 0"
        />
      </FormKit>
    </div>
    <FormKit
      type="textarea"
      auto-height
      label="keywords"
      name="keywords"
      :placeholder="placeholder.keywords"
      validation="required"
    />

    <!-- introduction list  -->
    <div v-auto-animate class="fk-wrapper">
      <h4 class="title">introduction text array</h4>
      <FormKit
        v-model="placeholder.introduction"
        type="list"
        :value="[{}]"
        dynamic
        #default="{ items }"
        name="introduction"
      >
        <FormKit
          type="group"
          v-for="(item, index) in items"
          :key="item"
          :index="index"
          class="list-item"
          validation="required"
        >
          <FormKit type="text" name="title" label="title" validation="required" />
          <FormKit
            type="textarea"
            auto-height
            name="content"
            label="content"
            validation="required"
          />
          <ul class="controls">
            <li>
              <button
                type="button"
                @click="
                  placeholder.introduction.splice(
                    index - 1,
                    0,
                    placeholder.introduction.splice(index, 1)[0]
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
                  placeholder.introduction.splice(
                    index + 1,
                    0,
                    placeholder.introduction.splice(index, 1)[0]
                  )
                "
              >
                <font-awesome-icon icon="fa-solid fa-arrow-down" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="placeholder.introduction.splice(index, 1)"
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
          @click="placeholder.introduction.push({ title: '', content: '' })"
          style="margin-bottom: 1rem"
        />
      </FormKit>
    </div>
    <FormKit
      type="text"
      label="skills tagline"
      name="skills"
      :placeholder="placeholder.skills"
      validation="required"
    />
    <FormKit
      type="text"
      label="projects tagline"
      name="projects"
      :placeholder="placeholder.projects"
      validation="required"
    />
    <FormKit
      type="text"
      label="contact tagline"
      name="contact"
      :placeholder="placeholder.contact"
      validation="required"
    />
  </FormKit>
  <div v-if="display" class="display-container">
    <p>{{ displayMessage }}</p>
  </div>
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
