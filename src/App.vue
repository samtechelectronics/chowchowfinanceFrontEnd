<template>
  <div id="app">
     <loader></loader>
  </div>
</template>

<script>

export default {
  name: 'App',
   created(){
      this.$store.dispatch("currentUser/setUser" , localStorage.getItem("user") != null ? JSON.parse(localStorage.getItem("user"))  : {});
      this.$store.dispatch("metamask/innitaliseWeb3").then(
         ()=>{
           console.log("Web 3 loaded");
           
            this.$store.dispatch("woofdefi/loadContract").then( console.log("contract loaded")).then(
              () => {
                  this.$store.dispatch("woofdefi/getPoolBalance").then( console.log("getPoolBalance loaded"));
                  this.$store.dispatch("woofdefi/getWoofPeriod").then( console.log("getWoofPeriod loaded"));
                  this.$store.dispatch("woofdefi/getYeildPassentage").then( console.log("getYeildPassentage loaded"));
              }
            );
          
        }
      );
    },
  
}
</script>

<style>
body {
  background-color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
