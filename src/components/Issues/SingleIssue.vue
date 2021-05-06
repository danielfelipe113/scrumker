<template>
  <div
    class="p-2"
  >
    <div
      class="flex flex-col text-purple-600 bg-white p-2 border-2 border-purple-400 rounded-md items-center justify-center"
    >
      <span class="font-bold">
        {{ issue.name }}
      </span>
      <div class="text-purple-600 text-sm" v-if="showDescription">
        {{ issue.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { Issue } from '../../models/Issue';
  import PokerChip from '../PokerChip.vue';
  export default defineComponent({
    name: 'SingleIssue',
    components: {
      PokerChip
    },
    props: {
      issue: {
        type: Object as PropType<Issue>,
        required: true
      },
      showDescription: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
    }
  });
</script>

