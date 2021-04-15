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
import { shuffle, sample } from 'lodash'
import { defineComponent } from '@vue/composition-api'
import Definizione from '~/components/Definizione.vue'

class Def {
  constructor (public eng: string, public it: string) {}
}

const DEFS = [
  new Def('beard', 'barba'),
  new Def('curly', 'ricciolini'),
  new Def('freckles', 'lentiggini'),
  new Def('glasses', 'occhiali'),
  new Def('good-looking', 'bell\'aspetto'),
  new Def('moustache', 'baffi'),
  new Def('plump', 'paffuto'),
  new Def('short', 'basso'),
  new Def('slim', 'magro'),
  new Def('spiky', 'sparati'),
  new Def('stocky', 'tarchiato'),
  new Def('straight', 'dritto'),
  new Def('tall', 'alto'),
  new Def('wavy', 'ondulato'),
  new Def('ankle', 'caviglia'),
  new Def('arm', 'braccio'),
  new Def('chest', 'torace'),
  new Def('chin', 'mento'),
  new Def('ear', 'orecchio'),
  new Def('elbow', 'gomito'),
  new Def('eye', 'occhio'),
  new Def('eyebrow', 'sopracciglio'),
  new Def('foot', 'piede'),
  new Def('feet', 'piedi'),
  new Def('forehead', 'fronte'),
  new Def('hand', 'mano'),
  new Def('head', 'testa'),
  new Def('knee', 'ginocchio'),
  new Def('leg', 'gamba'),
  new Def('mouth', 'bocca'),
  new Def('neck', 'collo'),
  new Def('nose', 'naso'),
  new Def('shoulder', 'spalla')
]

export default defineComponent({
  components: {
    Definizione
  },
  data () {
    return {
      defs: shuffle(DEFS),
      definizione: sample(DEFS),
      value: ''
    }
  },
  methods: {
    refreshDef () {
      this.value = ''
      this.definizione = sample(DEFS)
    }
  }
})
</script>
