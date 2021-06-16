<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link class="navbar-brand" to="/">
      <img src="@/assets/img/cho.png" style="width: 60px ; height: 60px; " alt="logo"><span style="font-size: 1rem">★彡 𝐂𝐇𝐎𝐂𝐇𝐎𝐖 彡★</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
      <li class="nav-item active" v-if="status == 'full'">
      <a class="nav-link" href="#roadmap">Road Map</a>
      </li>
      <li class="nav-item" v-if="status == 'full'">
      <a class="nav-link" href="#chowbreed">How to breed Chow</a>
      </li>
      <li class="nav-item" v-if="status == 'full'">
      <a class="nav-link" href="#tokenmetric">TokenMetrics</a>
      </li>
     <li class="nav-item" v-if="user.id">
      <router-link class="nav-link" to="/mychows">Woof Defi Farm</router-link>
      </li>
      <li class="nav-item  " v-if="!user.id">
     <button class="btn btn -success" @click="login">Connect Wallet</button>
      </li>
      <li  class="nav-item " v-else >
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{addressFormated}}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" @click="logout">logout</a>
          </div>
        </div>
      </li>
      </ul>
      </div>
      </nav>
</template>
<script>
export default {
  props : ['status'],
 data(){
   return {
     
   }
 },
 computed :  {
   addressFormated : function(){
     if(!this.user.address) return "";
     return this.user.address.substring(0 ,6) + "...." + this.user.address.substring(this.user.address.length -4 ,this.user.address.length)
   },
   user : function(){
     return this.$store.state.currentUser.user;
   },
   metamaskUser : function(){
     return this.$store.state.metamask.user;
     
   }
 },
 mounted(){
 },
 methods :{
   load(status){
     this.$store.dispatch("loading/activateLoader" , status)
   },
     logout(){
       this.load(true);
          this.$store.dispatch('currentUser/logout').then(
            response => {
              this.$router.push('/')
              this.load(false);
              console.log(response);
              this.$toast.success(response);
            }
          ).catch(
            error => {
              this.load(false);
              console.log(error)
              this.$toast.error(error.message)
            }
          )
        },
     login(){
       
        this.$store.dispatch("metamask/validateMetamaskAvailable").then(
          response => {
            console.log(response);
            this.$store.dispatch("metamask/loginMetaMask").then(
              response=>{
                this.$store.dispatch("currentUser/setUser" ,this.metamaskUser);
                this.$toast.success(response);
              }
            ).catch( error => {
              if(error.error){
             this.$toast.error(error.message);   
              }
              else{
                this.$toast.error("Error while connecting to metamask");
              }
            })
          }
        ).catch(error => {
          this.$toast.error(error.message)
        })
        
 },
 loginMoralis(){
   this.load(true);
          this.$store.dispatch('currentUser/loginUser').then(
            response => {
               this.load(false);
              console.log(response);
              this.$toast.success(response);
            }
          ).catch(
            error => {
              console.log(error)
              this.$toast.error(error.message);
               this.load(false);

            }
          )
        }
 }
}
</script>

<style scoped>

</style>