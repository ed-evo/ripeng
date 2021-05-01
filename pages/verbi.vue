<template>
  <v-row>
    <v-col class="text-center">
      <v-card
        v-for="verbo in verbi"
        :key="verbo.baseForm"
      >
        <v-card-title>{{ verbo.baseForm }}</v-card-title>
        <v-row>
          <v-col>
            <v-text-field
              label="Past simple"
              :rules="[check(verbo.pastSimple)]"
              class="mt-0 pt-0"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Past participle"
              :rules="[check(verbo.pastParticiple)]"
              class="mt-0 pt-0"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { shuffle } from 'lodash'
import { verbi } from '~/data/verbi'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data () {
    return {
      verbi : shuffle(verbi)
    }
  },
  methods: {
    check (parola: string) {
      return (value: string) => value == parola
    }
  }
})
</script>
