<template>
    <div class="field">
        <label v-if="lable" for="lable">{{lable}}</label>
        <input type="text" @input="updateValue">
    </div>
</template>

<script>
export default {
  props: {
    lable: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
