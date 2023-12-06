<template>
  <FormKit type="form" id="home-form" @submit="submit">
    <FormKit type="text" label="tile" name="title" />
    <FormKit type="text" label="subtitle" name="subtitle" />
    <!-- Form Kit List  for slug-->
    <div v-auto-animate class="fk-wrapper">
      <h4 class="title">slug text array</h4>
      <FormKit v-model="slug" type="list" dynamic #default="{ items }" name="slug">
        <div v-for="(item, index) in items" :key="item" class="list-item">
          <FormKit type="text" :index="index" />
          <ul class="controls">
            <li>
              <button type="button" @click="slug.splice(index - 1, 0, slug.splice(index, 1)[0])">
                <font-awesome-icon icon="fa-solid fa-arrow-up" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button type="button" @click="slug.splice(index + 1, 0, slug.splice(index, 1)[0])">
                <font-awesome-icon icon="fa-solid fa-arrow-down" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button type="button" @click="slug.splice(index, 1)" class="button close">
                <font-awesome-icon icon="fa-solid fa-xmark" size="sm" color="#f4433b" />
              </button>
            </li>
          </ul>
        </div>
        <FormKit type="button" label="add a slug" @click="slug.push('')" />
      </FormKit>
    </div>
    <!-- FK List end -->
    <FormKit type="text" label="keywords" name="keywords" />
    <FormKit
      type="file"
      label="resume"
      accept=".pdf"
      multiple="false"
      name="resume"
      placeholder="asd"
    />
    <!-- introduction list here  -->
    <div v-auto-animate class="fk-wrapper">
      <h4 class="title">introduction text array</h4>
      <FormKit
        v-model="introduction"
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
        >
          <FormKit type="text" name="title" label="title" />
          <FormKit type="textarea" auto-height name="content" label="content" />
          <ul class="controls">
            <li>
              <button
                type="button"
                @click="introduction.splice(index - 1, 0, introduction.splice(index, 1)[0])"
              >
                <font-awesome-icon icon="fa-solid fa-arrow-up" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button
                type="button"
                @click="introduction.splice(index + 1, 0, introduction.splice(index, 1)[0])"
              >
                <font-awesome-icon icon="fa-solid fa-arrow-down" color="#ccc" size="sm" />
              </button>
            </li>
            <li>
              <button type="button" @click="introduction.splice(index, 1)" class="button close">
                <font-awesome-icon icon="fa-solid fa-xmark" size="sm" color="#f4433b" />
              </button>
            </li>
          </ul>
        </FormKit>
        <FormKit
          type="button"
          label="add more"
          @click="introduction.push({ title: '', content: '' })"
        />
      </FormKit>
    </div>
    <FormKit type="text" label="skills tagline" name="skils" />
    <FormKit type="text" label="projects tagline" name="projects" />
    <FormKit type="text" label="contact tagline" name="contact" />
  </FormKit>
</template>

<script setup>
import { ref } from 'vue'
import { vAutoAnimate } from '@formkit/auto-animate'

const slug = ref([
  'centering one div at a time!',
  'inspecting the DOM...',
  'designing the next page...'
])
const introduction = ref([
  {
    title: '🚀 Welcome to my Web Development Portfolio',
    content:
      'I am on the lookout for exciting opportunities in Web Development, eager to bring my skills, passion and work ethic.'
  },
  {
    title: '💼 Position & Experience',
    content:
      'Graduated from UCI with a B.S in Computer Game Science. Recent Content Programmer / Frontend Developer for McGraw Hill in Irvine, CA.'
  },
  {
    title: '🎯 Passion & Goals',
    content:
      'Driven by an unyielding passion for coding, I approach each project with a growth mindset and an unwavering commitment to not cut corners. My goal is to create seamless, innovative, and user-friendly web experiences.'
  }
])

const submit = (values) => {
  console.log(values)
}
</script>

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
