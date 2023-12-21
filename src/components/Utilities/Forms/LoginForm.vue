<template>
  <div class="form-wrapper">
    <h3 class="login-alert" v-if="login_alert_display">
      {{ login_alert_msg }}
    </h3>
    <Form @submit="login" class="form">
      <label for="email">Email</label>
      <Field type="email" name="email" placeholder="sbob@bikinibottom.org" :rules="validateEmail" />
      <ErrorMessage name="email" class="error" />
      <label for="password">Password</label>
      <Field type="password" name="password" autocomplete="on" />
      <button type="submit" class="btn" :disabled="login_in_submission">Login</button>
      <p class="subtitle guest" @click="loginAnon">continue as guest</p>
    </Form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()
const router = useRouter()

//login display variables & methods
const login_alert_display = ref(false)
const login_alert_msg = ref('logging in...')
const login_in_submission = ref(false)

//log in with email and password
const login = async (values) => {
  login_alert_display.value = true
  login_alert_msg.value = 'Logging in...'
  login_in_submission.value = true

  try {
    await userStore.login(values)
  } catch (error) {
    //Handle Firebase errors
    if (error.code === 'auth/invalid-login-credentials') {
      login_alert_msg.value = 'Invalid login credentials...'
    } else {
      login_alert_msg.value = 'An error has occured...'
    }
    login_in_submission.value = false
    console.log(error)
    return
  }
  login_alert_msg.value = 'Success'
  login_in_submission.value = false
  //everything OK - redirect
  router.push('/manage')
}

const loginAnon = async () => {
  login_alert_display.value = true
  login_alert_msg.value = 'Logging in...'
  login_in_submission.value = true

  try {
    await userStore.loginAnonymously()
  } catch (error) {
    console.log(error)
    login_alert_msg.value = 'An error has occured...'
    login_in_submission.value = false
    return
  }
  login_alert_msg.value = 'Success'
  login_in_submission.value = false
  //everything OK - redirect
  router.push('/manage')
}

//Form Validation
const validateEmail = (value) => {
  // if the field is empty
  if (!value) {
    return 'This field is required'
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  // All is good
  return true
}
</script>

<style lang="scss" scoped>
.guest {
  text-align: center;
  cursor: pointer;

  &:hover {
    color: var(--text-light-1);
  }
}
.login-alert {
  margin-bottom: 1rem;
  text-align: center;
}
.error {
  color: var(--warning);
  text-wrap: wrap;
}
.btn {
  background-color: var(--primary);
  border: none;
  border-radius: 3px;
  padding: 5px;
  color: var(--text-light-1);
  font-weight: 700;
  cursor: pointer;
}
.form-wrapper {
  background-color: var(--secondary-soft);
  border-radius: 10px;
  padding: 1rem;
  max-width: 280px;
  margin: 2rem auto;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-weight: 900;
  }
  input {
    padding: 4px;
    border-radius: 3px;
    border: none;
  }
}
@media (min-width: 456px) {
  .form-wrapper {
    width: 460px;
  }
  .form {
    gap: 20px;
  }
}
</style>
