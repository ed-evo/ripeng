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
    },
    selectAll () {
      this.selected = this.availableGroups.map(term => term.slug);
    }
  },
  watch: {
    async selected(newValue: string[]) {
      console.log(newValue)
      const terms: any = await this.$content('terms')
        .where({ slug: { $in: this.selected }})
        .only('terms')
        .fetch()
      this.terms = shuffle(terms.flatMap((page: any) => page.terms))

    }
  }
})
</script>
