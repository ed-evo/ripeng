<template>
    <v-row>
    <v-col class="text-center">
      <definizione
        ref="definizioni"
        v-for="def in terms"
        :key="def.en"
        :def="def"
        :bus="$refs.done"
      ></definizione>
      <v-btn
        ref="done"
        block
        depressed
        elevation="7"
        fab
        rounded
        @click="validate"
      >Done</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Definizione from '~/components/Definizione.vue'
import { shuffle, sample } from 'lodash'
import { defineComponent } from '@vue/composition-api'
import Def from '~/model/Definizione'

export default defineComponent({
  components: {
    Definizione
  },
  data () {
    return {
      terms: []
    } as { terms: Def[] }
  },
  async mounted() {
    const page: any = await this.$content(this.$route.path).only('terms').fetch();
    this.terms = shuffle(page.terms)
  },
  methods: {
    validate () {
      this.$emit('validate');
    }
  }
})
</script>
