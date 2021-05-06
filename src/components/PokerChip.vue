<template>
  
  <div
    :class="'poker-chip mt-2 poker-chip-' + size + ' ' + jobActive"
    v-if="size !== 0"
  >
    <div class="selected" v-if="selected">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
    </div>
    <span>
      {{ size }}
    </span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'PokerChip',
    props: {
      size: {
        type: Number,
        required: true
      },
      selected: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        
      }
    },
    computed: {
      jobActive() {
        if(this.selected) {
          return 'active';
        }
      }
    },
    methods: {
      
    }
  });
</script>
<style scoped>
  .selected {
    position: absolute;
    top: 0;
    right: -11px;
    color: #07fd47;
    width: 30px;
    height: 30px;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 1));
  }
  .poker-chip {
    font-family: 'Itim', cursive;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 3rem;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.3));
    background-image: url('../assets/img/1.svg');
    color: #c2c6d7;
  }
  .poker-chip span {
    position: relative;
    top: -2px;
  }
  .poker-chip.active {
    border: 4px solid #32a27e;
    border-radius: 50%;
  }
  .poker-chip-1 {
    background-image: url('../assets/img/1.svg');
    color: #c2c6d7;
  }
  .poker-chip-2 {
    background-image: url('../assets/img/2.svg');
    color: #515169;
  }
  .poker-chip-3 {
    background-image: url('../assets/img/3.svg');
    color: #d2606d;
  }
  .poker-chip-5 {
    background-image: url('../assets/img/5.svg');
    color: #d35f6c;
  }
  .poker-chip-8 {
    background-image: url('../assets/img/8.svg');
    color: #87b974;
  }
  .poker-chip-13 {
    background-image: url('../assets/img/13.svg');
    color: #474861;
    font-size: 1.6rem;
  }
</style>