# Santiago Morales - Junior Software Engineer

Hello, this is my full stack portfolio website for web development. It uses `VueJs`, `Firebase` and other libraries.

## My process

I started planning the design of the website - each page until I knew how the whole website would look like. I created wireframes with pen and paper, prototyping the website and its animations of HTML elements.

Afterwards, I architected the structure of data I would store in Firebase. My main concern was organization/maintainability and scalability.

## Tools used

- Vue Router `npm install vue-router@4`
- Pinia `npm install pinia`
- Firebase `npm install firebase`
- Firestore `npm install firebase@10.7.0 --save`
- Sass `npm install -D sass`
- VueUse `npm install @vueuse/core`
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

## Issues Encountered

- An issue I encountered had to deal with the navbar. I was trying to make it have a slide down on scroll effect, which worked but my navbar was overflowing on the x. I fixed this by using `box-sizing: border-box;` on my nav container class. This now used the padding and border to calculate the width.

- Another issue I had was trying to upload `.pdf` file to Firebase Storage. I extracted the file from a form and used `uploadBytes()` and the file into it. On Firebase, its type was `application/octet-stream` not `application/pdf`. I further debugged that the cause was my upload by manually uploading the file to Firebase. My error was that I was passing a `[{}]`, and not the file, so I fixed this by uploading the file as `resume[0].file`. Simple mistake, but it was my first time handling file uploads.

- I was trying to fetch data from Firebase to bind it to my `aboutForm` but weirdly enough, I was receiving errors like ` Cannot read properties of undefined`. I thought maybe that it the issue was with rendering. Like, maybe the data _was_ `undefined` at the time of binding, so I tried resolving this by hooking into earlier lifecycle hooks. I originally had it on `onMounted` so I tried `onBeforeMount` but to no avail. I fixed this by removing the `FormKit type='group'>` component. I think this might be an issue with FormKit. The code that wacked out vue was ` :placeholder="placeholder.hero.title"`. After removing the group, `:placeholder=placeholder.title` worked as expected. What I think is weird behavior is that if I remove the binding, refresh the page, have the dom render, and _then_ bind the placeholder, it works properly. Like wtf?

## Useful Links

- [Vue Composables](https://vuejs.org/guide/reusability/composables) - encapsulates and reuses stateful logic
- [VeeValidate](https://vee-validate.logaretm.com/v4/guide/overview/) - Validation for forms.
- [Vue3 Router](https://router.vuejs.org/api/#useRouter) - How to programatically push routes in Vue 3
- [FontAwesome sizes](https://fontawesome.com/docs/web/style/size) - FontAwesome documentation on sizes.

## Reminder

[ ] - lowercase on folders and fix the paths that break

## What I learned
