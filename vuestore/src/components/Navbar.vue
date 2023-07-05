<template>
<div>
 <div id="navbar">
       <div id="lhs">
         Home
       </div>
       <div id="rhs">
         <div>Account</div>
         <div id="cart">
            <div id="cart-count">1</div>
         </div>
       </div>
    </div>
</div>
</template>
<script setup>

</script>
<style scoped>
 #navbar{
    display:flex;
    height:70px;
    align-items: center;
    font-size: 130%;
    border-bottom: solid 1px black;
 }
 #lhs{
    display:flex;
    flex:3;
    align-items: center;

 }
 #rhs{
    display:flex;
    flex:7;
    gap:10%;
    align-items: center;
    justify-content: flex-end;
 }
</style>