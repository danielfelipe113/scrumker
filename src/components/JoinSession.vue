<template>
  <h2 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
    Start or join to a 
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
      Scrum Poker
    </span>
    session
  </h2>

  <form class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4" @submit.prevent="sessionSubmit()">
    <div class="mb-4">
      <label
        class="block text-blue-300 py-2 font-bold mb-2 text-left"
        for="sessionId"
      >
        Session name
        <button
          class="bg-blue-100 px-4 py-2 text-xs font-semibold tracking-wider text-blue-600 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-3 transform transition hover:scale-125 duration-300 ease-in-out"
          @click.self.prevent="createRandomName()"
          type="button"
        >
          Random
        </button>
      </label>
      <input
        class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        id="sessionId"
        type="text"
        placeholder="Session name"
        required
        v-model="sessionId"
      />
    </div>
    <div class="flex items-center justify-between mt-1">
      <button
        class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-125 duration-300 ease-in-out"
        type="submit"
      >
        Create Session
      </button>
    </div>
  </form>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'JoinSession',
    emits: ['onSessionSubmit'],
    props: {
      
    },
    data() {
      return {
        sessionId: '',
        maxMathRandomName: 90000
      }
    },
    methods: {
      createRandomName(): void {
        this.sessionId = Math.floor(10000 + Math.random() * this.maxMathRandomName).toString();
      },
      sessionSubmit(): void {
        this.$emit('onSessionSubmit', this.sessionId);
      }
    }
  });
</script>
