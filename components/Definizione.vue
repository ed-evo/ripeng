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
import { sameAs } from '@vuelidate/validators';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup () {
    return { $v: useVuelidate({$lazy: true}) }
  },
  props: ['def'],
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
      input: { sameAs: sameAs(this.inglese) }
    }
  },
  mounted () {
    this.$parent.$on('validate', this.$v.$validate)
  },
  methods: {
    check (value: string): boolean {
      return value ? value === this.inglese : true
    }
  }
})
</script>
