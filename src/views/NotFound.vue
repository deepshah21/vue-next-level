<template>
    <div>
        <h1>opps</h1>
        <h3>The {{ resource }} page you lookin is not here</h3>
        <router-link :to="{name: 'event-list'}">Back to home page</router-link>
    </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>
