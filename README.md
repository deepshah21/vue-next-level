## To run this app

npm install -g json-server
json-server --watch db.json

npm install
npm run serve

## next level vue

  1. progress bars
  2. in-component route guard
  3. global and pre-route guard
  4. error handling
  5. reusable form components
  6. form validation with vuelidate
  7. mixins
  8. filters

## 1. Nprogres bar and axios interceptors
npm install nprogress
have to add  import 'nprogress/nprogress.css' in main.js 
in service create axios interceptors for request and response 
check EventService.js

## 2. in-component route guard
    lifecycle hooks

    1. beforeCreate()
    2. created()
    3. beforeMount()
    4. Mounted()
    5. beforeUpdated()
    6. updated()
    7. beforeDestroy()
    8. destroyed()

    but using route navigation guard we get three more hooks
    1. beforeRouteEnter(routeTo,routeFrom,next)
        called before component is created
        Doesn't have access to this
    2. beforeRouteUpdate(routeTo,routeFrom,next
        called when route change,but still using same component,
        have access to this
    3. beforeRouteLeave(routeTo,routeFrom,next)
        called when this component is navigated away from
        have access to this

    here next is function which will called.
        next() --> confirm navigation
        next(false) --> cancel navigation
        next('/')  --> redirect to path
        next({name:'event-list'}) --> Redirect to this named path
  
    here we can notice that eventShow component did not see progressBar 
    We have three steps to implement   
    1. Start the progress bar when routing to the component.
    2. Make the API call, using the fetchEvent action.
    3. When API returns finish progress bar.
    4. Render the component template.

## 3. Global Route and per-route guards to removing vuex from componenets
    in router.js we have created router instance 
    our guard will call on router object

    1. router.beforeEach((routeTo,routeFrom,next) => { next()})
       runs before navigation to a componenets , must call next to continue
    2. router.afterEach((routeTo,routeFrom)=> {}) 
       runs right before component is created , doesn't have next

    so in hooks it will look like
    https://router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard

    1. router.beforeEach()
    2. beforeEnter()  // inside the router instance
    2. beforeRouteEnter()
    3. router.afterEach()
    4. beforeCreate
    5. created()

    we have implemented in router.js for global 

    Now How we can remove vuex store dependencies from components
     we have made changes in event.js for returning event promise in fetchEvent method
     we have made changes in component by removing store and progressbar, and add props only
     in router.js , we have changes in '/event/:id' path where we have added store and progress bar
     and dispatch Action and set event in route params

## 4. in pagination componenet is reused where progressbar doesn't work properly
    1. we have to change page index into state
    2. use beforeRouteEnter and beforeRouteUpdate in eventList
    3. we need to modify router.js to sent in currentPage as props

## 5. error handling 404 page
    1. NotFound.vue component
    2. add into router.js
    3. add-catch-all router 

    Question is for event/:id it wont wotk so that time we have to replace catch with 
    $route.push('/404')

    

## Following along?

We encourage you to follow the course on Vue Mastery, and code along with us. This course has tags representing the start and finish of each level, just in case you get stuck. Here's the start and ending code of each lesson, if you'd like to download them.

| Lesson                               |                                                                                                              |                                                                                                               |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| 2 - Vue CLI                          | n/a                                                                                                          | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson2-cli-finish)                   |
| 3 - Optimizing your IDE              | [Starting Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson3-editor-start)                | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson3-editor-finish)                |
| 4 - Vue Router Basics                | [Starting Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson4-routing-start)               | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson4-routing-finish)               |
| 5 - Dynamic Routes & History Mode    | [Starting Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson5-dynamic-routing-start)       | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson5-dynamic-routing-finish)       |
| 6 - Single File Components           | [Starting Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson6-sfc-start)                   | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson6-sfc-finish)                   |
| 7 - Global Components                | [Starting Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson7-global-start)                | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson7-global-finish)                |
| 8 - Slots                            | [Starting Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson8-slots-start)                 | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson8-slots-finish)                 |
| 9 - API Calls with Axios             | [Starting Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson9-axios-start)                 | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson9-axios-finish)                 |
| 11 - Vuex State & Getters            | [Starting Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson11-vuex-start)                 | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson11-vuex-finish)                 |
| 12 - Vuex Mutations & Actions Part 1 | [Starting Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson12-mutations%26actions1-start) | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson12-mutations%26actions1-finish) |
| 13 - Vuex Mutations & Actions Part 2 | [Starting Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson13-mutations%26actions2-start) | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson13-mutations%26actions2-finish) |
| 14 - Vuex Modules                    | [Starting Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson14-modules-start)              | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson14-modules-finish)              |
| 15 - Success & Error Notifications    | [Starting Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson15-notifications-start)         | [Finished Code](https://github.com/Code-Pop/real-world-vue/releases/tag/lesson15-notifications-finish)         |

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
