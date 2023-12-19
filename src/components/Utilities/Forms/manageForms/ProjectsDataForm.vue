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
      type="textarea"
      name="desc"
      label="description"
      validation="required"
      :placeholder="placeholder.desc"
    />
    <FormKit
      type="select"
      name="category"
      label="category"
      validation="required"
      placeholder="Please Select"
      :options="skillsCategory"
    />

    <FormKit type="group" name="start">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          name="month"
          validation="required|date_val"
          label="start date"
          placeholder="Please Select"
        />
        <div class="number-pad">
          <FormKit
            type="number"
            name="year"
            validation="required|min:1997"
            :value="new Date().getFullYear()"
            step="1"
          />
        </div>
      </div>
    </FormKit>
    <FormKit type="group" name="end" validation="required">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          name="month"
          validation="required|date_val"
          label="end date"
          placeholder="Please Select"
        />
        <div class="number-pad">
          <FormKit
            type="number"
            name="year"
            validation="required|min:1997"
            :value="new Date().getFullYear()"
            step="1"
          />
        </div>
      </div>
    </FormKit>
    <div class="dynam-list" v-auto-animate>
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
          type="select"
          :options="toolsOptions"
          placeholder="Please select"
          validation="required"
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
    <div class="dynam-list" v-auto-animate>
      <h3>issues encountered</h3>
      <FormKit
        type="list"
        :value="['']"
        dynamic
        #default="{ items }"
        name="issues_encountered"
        v-model="placeholder.issues_encountered"
      >
        <FormKit
          v-for="(item, index) in items"
          :key="item"
          :index="index"
          :label="`issue #${index + 1}`"
          type="textarea"
          validation="required"
          suffix-icon="trash"
          @suffix-icon-click="
            placeholder.issues_encountered = placeholder.issues_encountered.filter(
              (_, i) => i !== index
            )
          "
        />
        <ButtonComponent
          type="outline"
          text="+ Add another"
          @click="placeholder.issues_encountered.push('')"
        />
      </FormKit>
    </div>
    <FormKit
      type="textarea"
      name="what_i_learned"
      label="what i learned"
      validation="required"
      :placeholder="placeholder.what_i_learned"
    />
    <FormKit type="checkbox" name="isPrivate" label="Private Repository" :value="false" />
    <div class="dynam-list" v-auto-animate>
      <h3>useful links</h3>
      <FormKit
        type="list"
        :value="[{}]"
        dynamic
        #default="{ items }"
        name="usefulLinks"
        v-model="placeholder.usefulLinks"
      >
        <FormKit type="group" v-for="(item, index) in items" :key="item" :index="index">
          <FormKit
            type="text"
            name="name"
            label="name"
            help="link title for anchor tag"
            validation="required"
            :placeholder="placeholder.usefulLinks.name"
          />
          <FormKit
            label="link"
            type="url"
            :placeholder="placeholder.usefulLinks.link"
            validation="required|url"
            name="link"
          />
          <FormKit
            type="textarea"
            name="desc"
            label="description"
            validation="required"
            :placeholder="placeholder.usefulLinks.desc"
          />
          <ButtonComponent
            type="outline"
            text="Remove"
            class="btn-remove"
            @click="placeholder.usefulLinks = placeholder.usefulLinks.filter((_, i) => i !== index)"
          />
        </FormKit>

        <ButtonComponent
          type="outline"
          text="+ Add another"
          @click="placeholder.usefulLinks.push({ name: '', desc: '', link: '' })"
        />
      </FormKit>
    </div>
    <FormKit
      type="url"
      label="github link"
      name="githubLink"
      help="github repo"
      validation="required|url"
      :placeholder="placeholder.githubLink"
    />
    <FormKit
      type="url"
      label="live site link"
      name="liveSiteLink"
      help="live site"
      validation="required|url"
      :placeholder="placeholder.liveSiteLink"
    />
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { vAutoAnimate } from '@formkit/auto-animate'
import ButtonComponent from '@/components/Utilities/buttons/ButtonComponent.vue'
import { months, skillsCategory } from '@/utils/formOptions'
import { useManageStore } from '@/stores/manage'
import { useFormPlaceholder } from '@/composables/formPlaceholder.js'
import { useManageForm } from '@/composables/manageForm.js'
import { onBeforeMount, ref } from 'vue'
import { getDocuments } from '@/plugins/firebase.js'

const manageStore = useManageStore()
const { placeholder } = useFormPlaceholder()
const { displayMessage, disable, display, submitManageForm } = useManageForm()
const toolsOptions = ref({})

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

onBeforeMount(async () => {
  try {
    toolsOptions.value = await getDocuments('tools')
    toolsOptions.value = toolsOptions.value.map((doc) => doc.name)
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped>
.btn-remove {
  margin: 1rem;
}
.dynam-list {
  margin: 1rem 0;
  h3 {
    margin-bottom: 0.625rem;
  }
}
</style>
