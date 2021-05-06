<template>
  <h2 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
      <span v-if="issuesSized.length">
        Issues Sized
      </span>
      <span v-else>
        No Issues Sized Yet
      </span>
    </span>
  </h2>

  <div
    class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-8 pb-8 mb-4 flex justify-center"
    v-if="issuesSized.length"
  >
  {{issuesSized}}
    <template v-for="issue of issuesSized">
      <div
        class="bg-white p-2 border-2 border-purple-400 rounded-md"
      >
        <span class="text-indigo-600">
          {{ issue.name }}
        </span>
        <PokerChip
          :size="issue.size"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { Issue } from '../../models/Issue';
  import PokerChip from '../PokerChip.vue';
  export default defineComponent({
    name: 'Issues',
    components: {
      PokerChip
    },
    props: {
      issuesSized: {
        type: Object as PropType<Issue[]>,
        required: true
      }
    },
    data() {
      return {
       
      }
    },
    mounted() {
      console.log(this.issuesSized)
    },
    methods: {
      
    }
  });
</script>
