<template>
  <footer class="footer">
    <a href="#" class="back-link"
      >back to top
      <font-awesome-icon icon="fa-solid fa-turn-up" />
    </a>
    <div class="footer-inner">
      <div class="contact-info">
        <h3 class="title">Contact information</h3>
        <p>Santiago Morales</p>
        <p>Mission Viejo, CA</p>
        <div class="icon-link">
          <SocialMedia social="linkedin" displayName="true" />
        </div>
        <div class="icon-link">
          <SocialMedia social="email" displayName="true" />
        </div>
        <div class="icon-link">
          <SocialMedia social="resume" displayName="true" />
        </div>
      </div>
      <div class="socials">
        <h3 class="title">Links</h3>
        <div class="icon-link">
          <SocialMedia social="linkedin" displayName="true" />
        </div>
        <div class="icon-link">
          <SocialMedia social="github" displayName="true" />
        </div>
      </div>
      <div class="navigation">
        <h3 class="title">Navigation</h3>
        <div class="nav-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/skills">Skills</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/login" v-if="!userStore.userLoggedIn">Login</RouterLink>
          <RouterLink to="/manage" v-else>Manage</RouterLink>
        </div>
      </div>
    </div>
    <h4 class="copyright">
      Designed by <span>Santiago Morales</span> | All rights reserved
      <font-awesome-icon icon="fa-regular fa-copyright" />
    </h4>
    <p class="subtitle made-with">
      Made with Vue + Firebase | source code on
      <a class="subtitle" href="https://github.com/Aleroms/santiagomorales">github</a>
    </p>
  </footer>
</template>

<script setup>
import SocialMedia from '@/components/socials/SocialMedia.vue'
import { useUserStore } from '@/stores/user.js'
const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.copyright {
  padding-right: 1rem;
  letter-spacing: 3px;
  height: 60px;

  span {
    color: var(--primary);
  }
}
.made-with {
  height: 60px;
}
.navigation,
.socials {
  border-left: 1px solid var(--divider-dark-1);
  padding-left: 1rem;
}
.nav-links {
  display: flex;
  flex-direction: column;

  a {
    margin: 5px 0;
    font-weight: 400;
  }
}
.icon-link {
  margin: 0.825rem 0;
}
.footer-inner {
  display: flex;
  flex-direction: row;
  gap: 60px;

  .title {
    text-decoration: underline;
    margin-bottom: 0.825rem;
  }
}
footer {
  border-top: 1px solid var(--divider-dark-1);
  padding: 1rem 1rem 0;
  margin: 1rem 0;
  min-height: 500px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .back-link {
    transition: color 0.3s ease;

    svg {
      margin-left: 10px;
    }
    &:hover {
      color: var(--primary);
    }
  }
}
@media (max-width: 550px) {
  .footer-inner {
    flex-direction: column;
    gap: 30px;
  }
  .navigation,
  .socials {
    border-left: none;
    padding-left: 0;
    padding-top: 1rem;
    border-top: 1px solid var(--divider-dark-1);
  }
}
@media (min-width: 555px) {
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
