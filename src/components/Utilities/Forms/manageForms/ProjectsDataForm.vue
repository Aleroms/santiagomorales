<template>
  <FormKit type="form" id="projects-data" @submit="submit" :disable="disable">
    <FormKit
      type="file"
      name="image"
      label="project cover"
      help="used to describe the project"
      validation="required"
    />
    <FormKit
      type="text"
      name="name"
      label="project name"
      validation="required"
      :placeholder="placeholder.name"
    />
    <FormKit
      type="text"
      name="desc"
      label="description"
      validation="required"
      :placeholder="placeholder.desc"
    />
    <!-- might want to change this to select  -->
    <FormKit
      type="text"
      name="category"
      label="category"
      validation="required"
      :placeholder="placeholder.category"
    />

    <FormKit type="group" name="start" validation="required">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          name="month"
          validation="required"
          label="start date"
        />
        <div class="number-pad">
          <FormKit type="number" name="year" validation="required" />
        </div>
      </div>
    </FormKit>
    <FormKit type="group" name="end" validation="required">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          name="month"
          validation="required"
          label="end date"
        />
        <div class="number-pad">
          <FormKit type="number" name="year" validation="required" />
        </div>
      </div>
    </FormKit>
    <div class="tools-used" v-auto-animate>
      <h3>tools used</h3>
      <FormKit
        type="list"
        :value="['']"
        dynamic
        #default="{ items }"
        name="toolsUsed"
        v-model="placeholder.toolsUsed"
      >
        <FormKit
          v-for="(item, index) in items"
          :key="item"
          :index="index"
          label="tool"
          placeholder="tool name"
          suffix-icon="trash"
          @suffix-icon-click="
            placeholder.toolsUsed = placeholder.toolsUsed.filter((_, i) => i !== index)
          "
        />
        <ButtonComponent
          type="outline"
          text="+ Add another"
          @click="placeholder.toolsUsed.push('')"
        />
      </FormKit>
    </div>
    <FormKit
      type="textarea"
      name="my_process"
      label="my process"
      validation="required"
      :placeholder="placeholder.my_process"
    />
    <FormKit
      type="textarea"
      name="issues_encountered"
      label="issues encountered"
      validation="required"
      :placeholder="placeholder.issues_encountered"
    />
    <FormKit
      type="textarea"
      name="what_i_learned"
      label="what i learned"
      validation="required"
      :placeholder="placeholder.what_i_learned"
    />
    <FormKit type="checkbox" name="isPrivate" label="Private Repository" />
    <FormKit
      type="text"
      label="github link"
      name="githubLink"
      help="github repo"
      validation="required"
      :placeholder="placeholder.githubLink"
    />
    <FormKit
      type="text"
      label="live site link"
      name="liveSiteLink"
      help="live site"
      validation="required"
      :placeholder="placeholder.liveSiteLink"
    />
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { vAutoAnimate } from '@formkit/auto-animate'
import ButtonComponent from '@/components/Utilities/buttons/ButtonComponent.vue'
import { months } from '@/utils/formOptions'
import { useManageStore } from '@/stores/manage'
import { useFormPlaceholder } from '@/composables/formPlaceholder.js'
import { useManageForm } from '@/composables/manageForm.js'

const manageStore = useManageStore()
const { placeholder } = useFormPlaceholder()
const { displayMessage, disable, display, submitManageForm } = useManageForm()

const submit = async (values) => {
  values.id = manageStore.isEdit
    ? placeholder.value.id
    : placeholder.value.name + '-' + placeholder.value.category
  const filteredTools = values.toolsUsed.filter((value) => value !== '')
  values.toolsUsed = filteredTools

  try {
    submitManageForm(values)
  } catch (error) {
    console.log(error.code, error)
  }
}
</script>

<style lang="scss" scoped>
.tools-used {
  margin: 1rem 0;
  h3 {
    margin-bottom: 0.625rem;
  }
}
</style>
