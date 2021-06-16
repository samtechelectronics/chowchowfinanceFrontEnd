<template>
<div>
    <div v-show="loading" class="row" style="background-color: #fff;"  >
      <div class="col-4 offset-4">
        <div id=container>
          <div class="dog-head">
        <h1 style="color: green ; margin-button : 50%" >Loading...</h1>

            <img src="http://www.clker.com/cliparts/j/3/Z/Y/D/5/dog-head-md.png">
          </div>
        
          <div class="dog-body" >
          </div>
          
        </div>
      </div>
    </div>
    <div  v-show="!loading" style="background-color:#2e3880">
        
        <router-view></router-view>
    </div>
</div>
</template>
<script>

export default {
    data(){
        return {

        }
    },
    computed : {
        loading : function(){
            return this.$store.state.loading.status;
        }
    },
   
    mounted(){
      setTimeout( ()=> {
             this.$store.dispatch("loading/activateLoader" , false)
      }, 1000)
    }

}
</script>
