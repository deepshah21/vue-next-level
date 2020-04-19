export const formFieldMixin = {
  inheritAttrs: false,
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
