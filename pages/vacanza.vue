<template>
    <v-row>
    <v-col class="text-center">
      <v-card>
        <v-card-actions>
          <definizione
            :def="definizione"
          ></definizione>
          <v-btn
            @click="refreshDef"
          >
            avanti
          </v-btn>
        </v-card-actions>
      </v-card>
      <definizione
        v-for="def in defs"
        :key="def.eng"
        :def="def"
      ></definizione>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import Definizione from '~/components/Definizione.vue'
import { shuffle, sample } from 'lodash'
import { vacanza } from '~/data/holiday'

export default defineComponent({
  components: {
    Definizione
  },
  data () {
    return {
      defs: shuffle(vacanza),
      definizione: sample(vacanza),
      value: ''
    }
  },
  methods: {
    refreshDef () {
      this.value = ''
      this.definizione = sample(vacanza)
    }
  }
})
</script>
