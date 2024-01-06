# Santiago Morales - Junior Software Engineer

Hello, this is my full stack portfolio website for web development. It uses `VueJs`, `Firebase` and other libraries.

## My process

I started planning the design of the website - each page until I knew how the whole website would look like. I created wireframes with pen and paper, prototyping the website and its animations of HTML elements.

Afterwards, I architected the structure of data I would store in Firebase. My main concern was organization/maintainability and scalability. As I was coding the forms I realized that the page content section were only one document in the collection, but the data had multiple documents in the collection that I would display individually in a list. After creating one component, work experience, i realized this code was not maintainable if every section had its own view and controller. I adapted to change by modifying the code and created a store to manage the forms and lists. I had to learn how to use the dynamic vue component `<component :is""/>`. The code I wrote, in my opinion, is now more managable since the store is a centralized place that each component roughly uses the same logic.

## Tools used

- Vue Router `npm install vue-router@4`
- Pinia `npm install pinia`
- Firebase `npm install firebase`
- Firestore `npm install firebase@10.7.0 --save`
- Sass `npm install -D sass`

- VueUse

```shell
npm install @vueuse/core
npm install @vueuse/motion
```

- Fontawesome

```shell
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/vue-fontawesome@latest-3
```

- VeeValidate `npm i vee-validate --save`
- FormKit

```shell
npm install @formkit/vue
npm install @formkit/themes
npm install @formkit/addons
```

- SwiperJs `npm install swiper`

## Issues Encountered

- An issue I encountered had to deal with the navbar. I was trying to make it have a slide down on scroll effect, which worked but my navbar was overflowing on the x. I fixed this by using `box-sizing: border-box;` on my nav container class. This now used the padding and border to calculate the width.

- Another issue I had was trying to upload `.pdf` file to Firebase Storage. I extracted the file from a form and used `uploadBytes()` and the file into it. On Firebase, its type was `application/octet-stream` not `application/pdf`. I further debugged that the cause was my upload by manually uploading the file to Firebase. My error was that I was passing a `[{}]`, and not the file, so I fixed this by uploading the file as `resume[0].file`. Simple mistake, but it was my first time handling file uploads.

- I was trying to fetch data from Firebase to bind it to my `aboutForm` but weirdly enough, I was receiving errors like ` Cannot read properties of undefined`. I thought maybe that it the issue was with rendering. Like, maybe the data _was_ `undefined` at the time of binding, so I tried resolving this by hooking into earlier lifecycle hooks. I originally had it on `onMounted` so I tried `onBeforeMount` but to no avail. I fixed this by removing the `FormKit type='group'>` component. I think this might be an issue with FormKit. The code that wacked out vue was ` :placeholder="placeholder.hero.title"`. After removing the group, `:placeholder=placeholder.title` worked as expected. What I think is weird behavior is that if I remove the binding, refresh the page, have the dom render, and _then_ bind the placeholder, it works properly. Like wtf?

- whenever I got an error in my pinia store "function not found" and it was in the getter, just remove the '()'

- I was receiving `undefined` values for my component after the pinia store fetched the data in an api call. I was stuck cause I didn't know how to handle this but I reached out for help and I created a `isLoading` boolean that was used when fetching data and updated after receiving data. Now, the data would only be rendered when data was received.

- files were uploading the same fileName for images used in projects. Whenever I would retreive files from Firebase, it would display, the same image. For example, `burrito.png` would display for 6+ projects, since when I uploaded the file its file name was `burrito.png`. Duplicates were not created which led to overwritten images in multiple projects referencing the same image url, `tools/burrito.png`. To resolve this, before uploading the file I checked if the file already existed and would modify the file name to `burrito2.png` instead, so that each image uploaded with the same name would not overwrite and reference the same image. If the file did not exist, simply upload it as is.

- retrieving image url and name from my pinia store would break my app. `project.image.url | reading url undefined`. I was retrieving it on my `Mounted` lifecycle hook. When I switched to `BeforeMounted` lifecycle hook, the problem was solved. I am assuming I need to have the data ready before the component mounts to the DOM and not when the component mounts to he DOM. Only strange thing is the data was locally stored and not fetched asynchronously.

- Key attribute should be on the component that is being transitioned. I.E

```vue
<Transition name="fade" mode="out-in">
      <LearningDisplay v-if="!learningStore.isLoading" :key="learningStore.activeItem.id" />
    </Transition>
```

## Useful Links

- [Vue Composables](https://vuejs.org/guide/reusability/composables) - encapsulates and reuses stateful logic
- [VeeValidate](https://vee-validate.logaretm.com/v4/guide/overview/) - Validation for forms.
- [Vue3 Router](https://router.vuejs.org/api/#useRouter) - How to programatically push routes in Vue 3
- [FontAwesome sizes](https://fontawesome.com/docs/web/style/size) - FontAwesome documentation on sizes.
- [Vue <Component/>](https://vuejs.org/api/built-in-special-elements.html#component) - dynamically binding components
- [Simple Local Storage implementation using Vue 3, Vueuse and Pinia with zero extra lines of code.](https://stephanlangeveld.medium.com/simple-local-storage-implementation-using-vue-3-vueuse-and-pinia-with-zero-extra-lines-of-code-cb9ed2cce42a) - fun and easy way to persist the user's authentication pinia state without any extra code. Kinda like magic tbh.
- [Ux Confirm Delete](https://medium.com/@joaopegb/ux-writing-an-effective-cancel-dialog-confirmation-on-web-539b73a39929) - best practices on user experience for confirming deletion of a file.
- [Vue <slot></slot](https://vuejs.org/guide/components/slots.html) - vue slot documentation i used for `ListItemTemplate.vue`
- [useMouseInElement](https://vueuse.org/core/useMouseInElement/#usemouseinelement) - the demo is really helpful to understand how it could be used
- [defineAsyncComponent](https://vuejs.org/guide/components/async) - reducing bundle size by dynamically importing modules `code-splitting`

## Reminder

[ ] - lowercase on folders and fix the paths that break
[x] - do date validation for forms

## What I learned

In the past, I have created components that were similar and I thought I learned that I could follow the DRY principal by creating one that alternates. Recently, I learned how to use `<template>` to my advantage and implemented some in this project. But, what I am now thinking is not every shoe fits. Even though, the structure of some, for example my listTemplate, are extremely similar, the use-case when it is rendered in template may be distinct enough to warrent a new component altogether.

I poured my heart and soul into this project. Every little detail is under my scrutiny and customized into my liking. This project is a reflection of me. And what I can create with scratch paper and my determination to complete something.

I learned to determine the pros and cons of trying to be performant with maintaining the structure of the codebase. I am using Lighthouse to find performance weaknesses and one was 'serve images as new-gen'. So, I modified my code to serve webp files but broke functionality of editing. The bad part was this metric only increased 5pts so I feel i traded a slightly more performant app for maintainability of code - granted I should have foreseen and considered this and structured my code around it.
