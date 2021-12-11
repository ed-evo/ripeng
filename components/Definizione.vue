<template>
  <v-text-field
    :rules="[check]"
    :label="italiano"
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: ['def'],
  computed: {
    inglese (): string {
      return this.def ? this.def.en : ''
    },
    italiano (): string {
      return this.def ? this.def.it : ''
    }
  },
  methods: {
    check (value: string): boolean {
      return value ? value === this.inglese : true
    }
  }
})
</script>
