<template>
  <v-container fluid>
    <v-select
      v-model="selected"
      :items="availableGroups"
      item-value="slug"
      item-text="title"
      label="Select Item"
      multiple
      clearable
    >
      <template v-slot:selection="{ item }">
        <v-chip>
          <span>{{ item.title }}</span>
        </v-chip>
        <span
          class="grey--text text-caption"
        >
        </span>
      </template>
      <template v-slot:prepend-item>
        <v-list-item
          ripple
          @mousedown.prevent
          @click="selectAll"
        >
          <v-list-item-content>
            <v-list-item-title>
              Select All
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-2"></v-divider>
      </template>
    </v-select>
    <v-row>
      <v-col class="text-center">

        <definizione
          ref="definizioni"
          v-for="def in terms"
          :key="def.en"
          :def="def"
          :bus="$refs.done"
          v-on:validated="validated"
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
import Definizione from '~/components/Definizione.vue'
import { shuffle } from 'lodash'
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
      selected: new Array<string>(),
      availableGroups: new Array<TermGroups>(),
      terms: new Array<Def>()
    }
  },
  async created () {
    const termgroups: any = await this.$content('terms').only(['slug', 'title']).fetch();
    this.availableGroups = termgroups as TermGroups[];
    this.selectAll();
  },
  methods: {
    validate () {
      this.$emit('validate');
      this.errors = 0;
      this.corrects = 0;
      this.snackbar = true;
    },
    validated (isValid: boolean) {
      console.log("validated", isValid)
      this.$nextTick(() => {
        if (isValid) {
          this.corrects = this.corrects + 1;
        } else {
          this.errors = this.errors + 1;
        }
      })

    },
    selectAll () {
      this.selected = this.availableGroups.map(term => term.slug);
    }
  },
  watch: {
    async selected(newValue: string[]) {
      const terms: any = await this.$content('terms')
        .where({ slug: { $in: this.selected }})
        .only('terms')
        .fetch()
      this.terms = shuffle(terms.flatMap((page: any) => page.terms))

    }
  }
})
</script>
