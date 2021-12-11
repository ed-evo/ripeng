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
        :key="def.en"
        :def="def"
      ></definizione>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Definizione from '~/components/Definizione.vue'
import { shuffle, sample } from 'lodash'
import { defineComponent } from '@vue/composition-api'
import vocaboli from '~/data/vocaboli'
import Def from '~/model/Definizione'

export default defineComponent({
  components: {
    Definizione
  },
  data () {
    return {
      definizione: null,
      value: ''
    } as {
      definizione ?: Def | null,
      value: string
    }
  },
  computed: {
    defs () {
      return shuffle(vocaboli[this.$route.params['vocaboli']]);
    }
  },
  beforeMount () {
    this.refreshDef();
  },
  methods: {
    refreshDef () {
      this.value = '';
      this.definizione = sample(vocaboli[this.$route.params['vocaboli']])
    }
  }
})
</script>
