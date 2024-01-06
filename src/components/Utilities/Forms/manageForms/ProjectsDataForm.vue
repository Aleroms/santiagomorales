<template>
  <FormKit type="form" id="projects-data" @submit="submit" :disable="disable">
    <FormKit
      type="text"
      label="github link"
      name="githubLink"
      help="github repo"
      :validation="manageStore.required"
      placeholder="https://github.com/Aleroms"
      v-model="placeholder.githubLink"
    />
    <FormKit
      type="text"
      label="live site link"
      name="liveSiteLink"
      help="live site"
      :validation="manageStore.required"
      placeholder="https://goo..."
      v-model="placeholder.liveSiteLink"
    />
    <FormKit
      type="text"
      name="name"
      label="project name"
      :validation="manageStore.required"
      placeholder="project name..."
      v-model="placeholder.name"
    />
    <FormKit
      type="textarea"
      name="desc"
      label="description"
      :validation="manageStore.required"
      placeholder="description..."
      v-model="placeholder.desc"
    />
    <FormKit
      type="file"
      name="image"
      label="project webp cover"
      help="used to describe the project"
      :validation="manageStore.required"
      accept=".webp"
    />
    <FormKit
      type="file"
      name="thumbnail"
      label="project webp thumbnail"
      help="size should be small"
      :validation="manageStore.required"
      accept=".webp"
    />
    <FormKit
      type="file"
      name="fallback"
      label="project jpg or png fallback"
      help="fallback in case browser does not support"
      :validation="manageStore.required"
      accept=".jpg,.png"
    />
    <FormKit type="group" name="start" v-model="placeholder.start">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          name="month"
          :validation="`${manageStore.required}|date_val`"
          label="start date"
          placeholder="Please Select"
        />
        <div class="number-pad">
          <FormKit
            type="number"
            name="year"
            :validation="`${manageStore.required}|min:1997`"
            :value="new Date().getFullYear()"
            step="1"
          />
        </div>
      </div>
    </FormKit>
    <FormKit type="group" name="end" v-model="placeholder.end">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          name="month"
          :validation="`${manageStore.required}|date_val`"
          label="end date"
          placeholder="Please Select"
        />
        <div class="number-pad">
          <FormKit
            type="number"
            name="year"
            :validation="`${manageStore.required}|min:1997`"
            :value="new Date().getFullYear()"
            step="1"
          />
        </div>
      </div>
    </FormKit>
    <FormKit
      type="select"
      name="category"
      label="category"
      :validation="manageStore.required"
      placeholder="Please Select"
      :options="skillsCategory"
      v-model="placeholder.category"
    />
    <FormKit
      type="select"
      name="frameworkUsed"
      label="framework"
      :validation="manageStore.required"
      placeholder="Please Select"
      hint="which framework did you use"
      :options="framework"
      v-model="placeholder.frameworkUsed"
    />
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
    <div class="dynam-list" v-auto-animate>
      <h3>my process</h3>
      <FormKit
        type="list"
        :value="['']"
        dynamic
        #default="{ items }"
        name="my_process"
        v-model="placeholder.my_process"
      >
        <FormKit
          v-for="(item, index) in items"
          :key="item"
          :index="index"
          :label="`process #${index + 1}`"
          type="textarea"
          validation="required"
          suffix-icon="trash"
          placeholder="my process..."
          @suffix-icon-click="
            placeholder.my_process = placeholder.my_process.filter((_, i) => i !== index)
          "
        />
        <ButtonComponent
          type="outline"
          text="+ Add another"
          @click="placeholder.my_process.push('')"
        />
      </FormKit>
    </div>
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
          placeholder="issues encountered..."
          @suffix-icon-click="
            placeholder.issues_encountered = placeholder.issues_encountered.filter(
              (_, i) => i !== index
            )
          "
        />
        <ButtonComponent
          type="outline"
          text="+ Add another"
          @click="p.issues_encountered.push('')"
        />
      </FormKit>
    </div>
    <div class="dynam-list" v-auto-animate>
      <h3>what I learned</h3>
      <FormKit
        type="list"
        :value="['']"
        dynamic
        #default="{ items }"
        name="what_i_learned"
        v-model="placeholder.what_i_learned"
      >
        <FormKit
          v-for="(item, index) in items"
          :key="item"
          :index="index"
          label="learned item"
          type="textarea"
          validation="required"
          placeholder="what I learned..."
          suffix-icon="trash"
          @suffix-icon-click="
            placeholder.what_i_learned = placeholder.what_i_learned.filter((_, i) => i !== index)
          "
        />
        <ButtonComponent
          type="outline"
          text="+ Add another"
          @click="placeholder.what_i_learned.push('')"
        />
      </FormKit>
    </div>
    <FormKit
      type="checkbox"
      name="isPrivate"
      label="Private Repository"
      :value="false"
      v-model="placeholder.isPrivate"
    />
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
            placeholder="link name..."
          />
          <FormKit
            label="link"
            type="text"
            placeholder="https://google.com"
            validation="required"
            name="link"
          />
          <FormKit
            type="textarea"
            name="desc"
            label="description"
            validation="required"
            placeholder="description..."
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
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { vAutoAnimate } from '@formkit/auto-animate'
import ButtonComponent from '@/components/Utilities/buttons/ButtonComponent.vue'
import { months, skillsCategory, framework } from '@/utils/formOptions'
import { useManageStore } from '@/stores/manage'
import { useFormPlaceholder } from '@/composables/formPlaceholder.js'
import { useManageForm } from '@/composables/manageForm.js'
import { onBeforeMount, ref } from 'vue'
import { getDocuments } from '@/plugins/firebase.js'

const manageStore = useManageStore()
const { placeholder } = useFormPlaceholder()
// console.log('placeholder', placeholder.value)
const { displayMessage, disable, display, submitManageForm } = useManageForm()
const toolsOptions = ref({})

const submit = async (values) => {
  values.id = manageStore.isEdit ? placeholder.value.id : values.name + '-' + values.category

  //removes empty tools submitted
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
