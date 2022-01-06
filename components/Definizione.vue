<template>
  <v-text-field
    v-model="input"
    :label="italiano"
    :error="$v.input.$error"
    @focus="$v.$dirty && $v.$reset()"
  ></v-text-field>
</template>

<script lang="ts">
import useVuelidate from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup (props) {
    const def = props.def
    let match = def?.en ? helpers.regex(new RegExp(`^${def.en}$`, 'i')) : () => false;
    return {
      sameAs: (value: any) => helpers.req(value) && match(value.trim().replaceAll(/\s+/g, ' ')),
      $v: useVuelidate({$lazy: true})
    }
  },
  props: ["def", "bus"],
  data () {
    return {
      input: null
    }
  },
  computed: {
    inglese (): string {
      return this.def ? this.def.en : ''
    },
    italiano (): string {
      return this.def ? this.def.it : ''
    }
  },
  validations () {
    return {
      input: {
        required,
        sameAs: this.sameAs
      }
    }
  },
  created () {
    console.log(this.bus)
    this.bus.$on('validate', this.validate)
  },
  methods: {
    validate () {
      console.log("called")
      this.$v.$validate()
      this.$emit("validated", this.$v.$error)
    }
  }
})
</script>
