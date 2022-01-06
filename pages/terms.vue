<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <v-chip-group
          v-model="selected"
          center-active
          mandatory
          multiple
          column
        >
          <v-chip
            v-for="item in availableGroups"
            :key="item.en"
            filter
          >
            <span>{{ item.title }}</span>
          </v-chip>
        </v-chip-group>
      </v-card-title>
      <v-card-actions>
        <v-btn @click="selectAll">all</v-btn>
        <v-btn @click="selectRandom">random</v-btn>
        <v-btn @click="inverse">inverse</v-btn>
        <v-btn @click="selected = []">clear</v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      {{ corrects }} / {{ errors }}
      <v-card-text>

        <definizione
          ref="definizioni"
          v-for="def in terms"
          :key="def.en"
          :def="def"
          :bus="bus"
          v-on:validated="validated"
        ></definizione>
      </v-card-text>
      <v-card-actions>
        <v-btn
          ref="done"
          block
          x-large
          @click="validate"
        >Done</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
      v-model="snackbar"
    >
      correct: {{ corrects }} / wrong: {{ errors }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Definizione from '~/components/Definizione.vue'
import { sample, shuffle } from 'lodash'
import { defineComponent } from '@vue/composition-api'
import Def from '~/model/Definizione'

interface TermGroups {
  slug: string,
  title: string
}

export default defineComponent({
  components: {
    Definizione
  },
  data () {
    return {
      errors: 1,
      corrects: 0,
      snackbar: false,
      selected: new Array<number>(),
      availableGroups: new Array<TermGroups>(),
      terms: new Array<Def>(),
      bus: new Vue()
    }
  },
  computed: {
    keys (): number[] {
      const groups = <TermGroups[]> this.availableGroups;
      return Array.from(groups.keys());
    }
  },
  async created () {
    const termgroups: any = await this.$content('terms').only(['slug', 'title']).fetch();
    this.availableGroups = termgroups as TermGroups[];
    this.selectRandom();
  },
  methods: {
    validate () {
      this.bus.$emit('validate');
      this.errors = 0;
      this.corrects = 0;
      this.snackbar = true;
    },
    validated (hasError: boolean) {
      this.$nextTick(() => {
        if (hasError) {
          this.corrects = this.corrects + 1;
        } else {
          this.errors = this.errors + 1;
        }
      })
    },
    selectAll () {
      this.selected = this.availableGroups.map((_term, i) => i);
    },
    selectRandom () {
      this.selected = [<number> sample(this.keys)]
      console.log(this.selected)
    },
    inverse () {
      if (this.selected.length === this.availableGroups.length) {
        this.selected = [0]
      } else {
        this.selected = this.keys.filter((_, i) => !this.selected.includes(i))
      }
    }
  },
  watch: {
    async selected(newValue: string[]) {
      const select = this.selected.map(n => this.availableGroups[n]?.slug)
      const terms: any = await this.$content('terms')
        .where({ slug: { $in: select }})
        .only('terms')
        .fetch()
      this.terms = shuffle(terms.flatMap((page: any) => page.terms))

    }
  }
})
</script>
