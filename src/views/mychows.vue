<template>
<div>
     <navbar status="half"></navbar>


 <v-app>
       <div style="margin-top: 3%">
      <h4 style="color:black">Total 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 Loocked in WOOF DEFI POOL : {{myTotalValueLocked}} 𝐂𝐇𝐎𝐖 </h4>
            
   <v-data-table
    :headers="headers"
    :items="mychows"
    :items-per-page="5"
    
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
  >
  <template  v-slot:top="">
    <v-toolbar
    flat
  >
    <v-toolbar-title>MY Woof Pools</v-toolbar-title>
    <v-divider
      class="mx-4"
      inset
      vertical
    ></v-divider>
    <v-spacer></v-spacer>
    <chowBreedModal v-on:chowvreeded="reloadData()"></chowBreedModal>
    <button class="btn btn-primary" @click="changeFarmDialog(true)" >Breed My ChowChow</button>
  </v-toolbar>
   
  </template>
<template v-slot:item="row">
          <tr >
              <td>{{row.item.id}}</td>
              <td>{{ new Intl.NumberFormat().format(row.item.amount)}} </td>
              <td>{{ new Intl.NumberFormat().format( (row.item.amount * row.item.percentageReturn / 100))}} </td>
              <td>
              <span v-if="row.item.active" class="badge badge-success">active</span>
              <span v-else class="badge badge-danger">inactive</span>
              </td>
              <td><span  v-if="row.item.active">{{ evaluateTime(row.item.releaseDate)   }}</span> <span v-else class="badge badge-danger">Claimed</span></td>
              <td>
                <span class="float-right">
                    <button @click="claimMyChow(row.item.id)" v-if="row.item.active && availableForClaim(row.item.releaseDate)  " class="btn greencolor btn-sm">Claim</button>
                    <button @click="earlyclaim(row.item.id)" v-if="row.item.active && !availableForClaim(row.item.releaseDate)  " class="btn warningcolor btn-sm">Claim Early</button>
                </span>
              </td>
          </tr>
      </template>
  </v-data-table>
   </div>
    <v-dialog
      v-model="earlyclaimconfirmation"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Claim Early?
        </v-card-title>

        <v-card-text >
         <span style="color: red">Early Claim of ChowChow Leads to a loss of all interrest!!! Also 3% fees is always deducted for every claim!!!</span>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="earlyclaimconfirmation = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="orange darken-1"
            text
            @click="claimMyChowEarly"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
 </v-app>
</div>
    
</template>
<script>
  export default {
    data: () => ({
      breedid : 0,
      earlyclaimconfirmation : false,
      breedIds :["343" , "345" ,"3243"],
      headers: [
                      
                        {
                        text: ' ID', 
                        align: 'center',
                        sortable: false,
                        value: 'id',
                        },
                        { text: ' Amount of CHOWCHOW Farmed', align: 'center', value: 'amount' },
                        { text: ' Expected Yield  (WYP)', align: 'center', value: 'amount' },
                        { text: 'Status', align: 'center', value: 'status' },
                        { text: 'Release Date', align: 'center', value: 'releaseDate' },
                        { text: 'Action', align: 'center', sortable: false,},
                    ],
    }),

    computed :  {
  myTotalValueLocked : function(){
   return  new Intl.NumberFormat().format(this.$store.state.woofdefi.myTotalValueLocked) ;

  },
  totalValueLocked :  function (){
   return  new Intl.NumberFormat().format(this.$store.state.woofdefi.poolBalance) ;
      

  },
  mychows : function(){
     return this.$store.state.woofdefi.myChows;
  },
   user : function(){
     return this.$store.state.currentUser.user;
   }
 },
 methods : {
   claimMyChowEarly(){
     this.earlyclaimconfirmation = false;
 this.$store.dispatch("loading/activateLoader" , true);
                this.$store.dispatch("woofdefi/claimMyChowEarly" ,this.breedid).then( 
                    response => {
                      this.reloadData();
                        this.$toast.success(response);
                        this.$store.dispatch("loading/activateLoader" , false);
                    }
                ).catch( 
                    error => {
                        this.$store.dispatch("loading/activateLoader" , false);
                       this.$toast.error(error.message); 
                 }
                )   ;
   },
   earlyclaim(id) {
     this.breedid =id;
     this.earlyclaimconfirmation = true;
   },
   claimMyChow(breedID){
     this.earlyclaimconfirmation = false;
 this.$store.dispatch("loading/activateLoader" , true);
                this.$store.dispatch("woofdefi/claimMyChow" ,breedID).then( 
                    response => {
                      this.reloadData();
                       this.earlyclaimconfirmation = false;
                        this.$toast.success(response);
                        this.$store.dispatch("loading/activateLoader" , false);
                    }
                ).catch( 
                    error => {
                       this.earlyclaimconfirmation = false;
                        this.$store.dispatch("loading/activateLoader" , false);
                        console.log(error)
                      //  this.$toast.error(error.message); 
                 }
                )   ;
   },
   availableForClaim(time){
     console.log(time) 
     console.log(parseInt(Math.floor(Date.now() / 1000))) 
  return  parseInt(Math.floor(Date.now() / 1000)) >= (parseInt(time)) ? true : false;
   },

   testRandom(){
    
      let id = "0";
        do {
            id = Math.floor(Math.random() * 100000000) + 1;
        }while( this.breedIds.includes(id));
        this.breedIds.push(id);
        console.log(this.breedIds);
        console.log(id);
   },
   changeFarmDialog(status){
     this.reloadData();
    this.$store.dispatch("woofdefi/changeFarmDialog" ,status)
   },
    evaluateTime(time){
    const unixTimestamp = time
    const milliseconds = unixTimestamp * 1000 // 1575909015000
    const dateObject = new Date(milliseconds)
    return dateObject.toLocaleString() //2019-12-9 10:30:15
  },
  reloadData(){
       this.loadMyChows();
       this.loadPoolBalance();
  },
   loadMyChows(){
     console.log('loading chows');
   this.$store.dispatch("woofdefi/loadMyChows").then( response => {
       console.log(response)
     });
   },
   loadPoolBalance(){
       this.$store.dispatch("woofdefi/availaleChowBalance").then( response => {
       console.log(response)
     });
     this.$store.dispatch("woofdefi/myTotalValueLocked").then( response => {
       console.log(response)
     });
     this.$store.dispatch("woofdefi/getPoolBalance").then( response => {
       console.log(response)
     });
    //  myTotalValueLocked
   }
 },
 created(){
  
 },
    mounted(){
      setTimeout(()=> {
        
        this.reloadData();
      }, 2000);
        if(!this.user.id){
            
         this.$router.push('/')
              this.$toast.error("Authentication required!!!");
        }
    }

  }
</script>
<style scoped>
.greencolor {
 background: #65bb21;
 color : white
}
.warningcolor {
  background: #d0c371;
 color : white

}
</style>