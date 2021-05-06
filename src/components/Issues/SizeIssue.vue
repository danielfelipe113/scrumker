<template>
  
  <div class="relative h-7 w-full">
    <div class="counter bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
      {{ counter }}
    </div>
  </div>
  <h2 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left relative w-full">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
      Let's Size 'Em All!
    </span>
  </h2>
  <p class="leading-normal text-base md:text-xl mb-8 text-center md:text-left text-purple-200">
    Select an issue from the "Issues to be sized grid", wait for all participants to choose their size and have fun!
  </p>

  <div class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col justify-center items-center">
    <div class="flex items-center">
      <div class="mb-4">
        <SingleIssue
          :issue="activeIssue"
          :showDescription="true"
        />
      </div>
    </div>
    <div class="flex items-center justify-around mt-1 w-full">
      <button
        class="transform transition hover:scale-125 duration-300 ease-in-out focus:outline-none"
        v-for="size in pokerChipsSizes"
        @click="chooseSize(size)"
      >
        <PokerChip
          :size="size"
          :selected="size === activeIssue.size"
        />
      </button>
    </div>
  </div>

  <div class="flex items-center justify-around mt-1 w-full">
    <button
      class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-125 duration-300 ease-in-out"
      @click="confirmSelection()"
      :disabled="loading"
    >
      Confirm Selection
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
import { Issue } from '../../models/Issue';
  import PokerChip from '../PokerChip.vue';
  import SingleIssue from './SingleIssue.vue';
  const initialCounter: number = 15;
  export default defineComponent({
    name: 'SizeIssue',
    components: {
      PokerChip,
      SingleIssue
    },
    props: {
      activeIssue: {
        type: Object as PropType<Issue>,
        required: true
      }
    },
    data() {
      return {
        pokerChipsSizes: [1, 2, 3, 5, 8, 13],
        counter: initialCounter,
        loading: false
      }
    },
    methods: {
      chooseSize(size: number) {
        this.activeIssue.size = size;
        this.startTimer();
      },
      startTimer() {
        this.counter--;
        const interval = setInterval(() => {
          if(this.counter === 0) {
            clearInterval(interval);
            return;
          }
          this.counter--;
        }, 1000);
      },
      confirmSelection() {
        this.loading = true;

        //then
        this.loading = false;
        this.counter = initialCounter;
      }
    }
  });
</script>
<style scoped>
  .counter {
    font-family: 'Itim', cursive;
    font-size: 8rem;
    position: absolute;
    top: -60px;
    right: 0;
  }
</style>