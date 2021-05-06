<template>
  <h3 class="my-4 text-3xl md:text-4xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
    Active session
    <div class="my-3.5 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
      {{ sessionId }}
    </div>
  </h3>

  <div class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-8 pb-8 mb-4 ">
    <button
      class="text-sm text-gray-400 hover:text-gray-500 float-right"
      type="button"
      @click="closeSession"
    >
      Close session
    </button>
    <p class="leading-normal text-base md:text-xl mb-3 text-center md:text-left text-purple-200" v-if="issues.length">
      Issues to be sized:
    </p>
    <div class="flex flex-wrap justify-center">
      <button
        class="transform transition hover:scale-105 duration-300 ease-in-out focus:outline-none"
        :class="{active: issue._isActive}"
        v-for="issue of issues"
        @click="selectIssue(issue)"
        v-if="issues.length"
      >
        <SingleIssue 
          :issue="issue"
        />
      </button>
      <p class="leading-normal text-base md:text-xl mb-3 text-center md:text-left text-purple-200 mt-8" v-else>
        There are no issues added yet.
      </p>
    </div>

    <hr class="mt-3 mb-3" />
    <p class="leading-normal text-base md:text-xl text-center md:text-left text-purple-200">
      New issue
    </p>
    <form class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg mb-4" @submit.prevent="addNewIssue()">
      <div class="">
        <label
          class="block text-blue-300 py-2 font-bold text-left"
          for="name"
        >
          Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          id="name"
          type="text"
          placeholder="WEB-000"
          required
          v-model="newIssue.name"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-blue-300 py-2 font-bold text-left"
          for="description"
        >
          Description
        </label>
        <textarea
          class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          id="description"
          type="text"
          placeholder="Issue Description"
          required
          v-model="newIssue.description"
        />
      </div>
      <div class="flex items-center justify-between mt-1">
        <button
          class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-125 duration-300 ease-in-out"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { Issue } from '../../models/Issue';
  import SingleIssue from './SingleIssue.vue';
  export default defineComponent({
    name: 'Issues',
    components: {
      SingleIssue
    },
    emits: ['onSelectIssue', 'onCloseSession', 'onRemoveIssue', 'onAddIssue'],
    props: {
      sessionId: {
        type: String,
        required: true
      },
      issues: {
        type: Object as PropType<Issue[]>,
        required: true
      }
    },
    data() {
      return {
        newIssue: new Issue(),
      }
    },
    mounted() {
      
    },  
    methods: {
      selectIssue(issue: Issue): void {
        this.$emit('onSelectIssue', issue);
      },
      closeSession() {
        const confirm = window.confirm('Are you sure?');
        if(confirm) {
          this.$emit('onCloseSession');
        }
      },
      addNewIssue() {
        this.newIssue.id = Date.now();
        this.$emit('onAddIssue', this.newIssue);
        this.newIssue = new Issue();
      },
      removeIssue(issue: Issue) {
        this.$emit('onRemoveIssue', issue);
      }
    }
  });
</script>
<style scoped>
  .active {
    transform: scale(1.3);
  }
</style>