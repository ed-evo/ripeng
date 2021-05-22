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
import Definizione from '~/components/Definizione.vue'
import { shuffle, sample } from 'lodash'
import { defineComponent } from '@vue/composition-api'
import { emozioni } from '~/data/emozioni'

export default defineComponent({
  components: {
    Definizione
  },
  data () {
    return {
      defs: shuffle(emozioni),
      definizione: sample(emozioni),
      value: ''
    }
  },
  methods: {
    refreshDef () {
      this.value = ''
      this.definizione = sample(emozioni)
    }
  }
})
</script>
