<template>
    <div class="field">
        <label v-if="lable" for="lable">{{lable}}</label>
        <input  :value="value" type="text" @input="updateValue" v-bind="$attrs" v-on="listeners">
    </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin'
export default {
  mixins: [formFieldMixin],
  // props: {
  //   lable: {
  //     type: String,
  //     default: ''
  //   },
  //   value: [String, Number]
  // },
  // methods: {
  //   updateValue(event) {
  //     this.$emit('input', event.target.value)
  //   }
  // }
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }
  }
}
</script>
