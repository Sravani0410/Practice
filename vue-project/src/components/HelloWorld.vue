<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <h3>{{ anotherMsg }}</h3>
    <h5>{{count}}</h5>
    <button @click="handleIncrement()">Increment</button>
  </div>
</template>

<script setup>
//  1. composition Api ==> we have to pass the setup and this this is called modern API

// Read props being passed to this component
import {ref} from "vue"
defineProps(["msg", "anotherMsg"]);
let count=ref(0);
const handleIncrement=()=>{
  count.value++
  console.log("ggfsgf",count.value)
}

</script>
<!--2. options API ===>old method some companies are still using this method 
// <script></script>
// export default{
//   // reactive state data
//   data(){
//     return{
//       count:0,
//     }
//   },
//   // methods
//   methods:{
//     handleIncrement(){
//       this.count++
//     }
//   }
// }

// </script>-->

<style scoped></style>
