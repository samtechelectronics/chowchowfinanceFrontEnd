<template>
    <v-row justify="center">
    <v-dialog
      v-model="farmdialog"
      persistent
      max-width="600px"
    >
     
      <v-card>
        <v-card-title>
          <span class="text-h5">Farm Your CHOWCHOW  </span>
          <p>(Balance Available : <span @click="loadBalance">{{new Intl.NumberFormat().format(myBalance)}}</span>)</p>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                 <v-col cols="12">
                <v-text-field
                 :readonly=" showInput ? false : true"
                  label="Amount of ChowChow to Breed*"
                  required
                  type="number"
                  v-model="amount"
                ></v-text-field>
               
              </v-col>
             <div>
             </div>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div v-if="loading" style="padding:10px">
            <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
                ></v-progress-circular>
          </div>
          
          <div v-if="!loading">
              <v-btn
            color="blue darken-1"
            text
             @click="changeFarmDialog(false)"
          >
            Close
          </v-btn>
          <v-btn
          v-if="buttonType == 'approve'"
            color="blue darken-1"
            text
            @click="requestapproval()"
          >
            Approve
          </v-btn>
          <v-btn
          v-if="buttonType == 'farm'"
            color="blue darken-1"
            text
            @click="breedChowChow()"
          >
            Breed My ChowChow
          </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
      data(){
          return {
              showInput : true,
              loading :false,
              amount : 0,
              buttonType : 'approve',
          }
      },
      methods: {
          breedChowChow(){
            if(this.intAmount <= 0){
                this.$toast.error("Enter Amount of CHOWCHOW to Breed!!!"); 
                return
                }
                this.loading = true;
                this.$store.dispatch("woofdefi/breedMyChowChow" , window.web3.utils.toBN(this.amount).toString()).then( 
                    response => {
                        this.$toast.success(response);
                        this.buttonType = "approve";
                        // this.$store.dispatch("loading/activateLoader" , false);
                        
                         this.loading =  false;
                         this.showInput = true;
                         this.amount = 0;
                         this.changeFarmDialog(false);
                         this.$emit('chowvreeded', true);
                    }
                ).catch( 
                    error => {
                         this.loading =  false;
                       this.$toast.error(error.message); 
                    //    this.$store.dispatch("loading/activateLoader" , false);
                 }
                )   ;

          },
        requestapproval(){
            if(this.intAmount <= 0){
                this.$toast.error("Enter Amount of CHOWCHOW to Breed!!!"); 
                return
                }
            //    else 
            console.log(window.web3.utils.toWei(this.myBalance));
            console.log(window.web3.utils.toWei(this.amount));
            //  this.$store.dispatch("loading/activateLoader" , true);
            this.loading = true;
                this.$store.dispatch("woofdefi/approveTransaction" , window.web3.utils.toBN(this.amount).toString()).then( 
                    response => {
                        this.$toast.success(response);
                        this.buttonType = "farm";
                        this.showInput = false;
                        // this.$store.dispatch("loading/activateLoader" , false);
                         this.loading =  false;
                    }
                ).catch( 
                    error => {
                         this.loading =  false;
                       this.$toast.error(error.message); 
                    //    this.$store.dispatch("loading/activateLoader" , false);
                 }
                )   ;
            
                

        },
          loadBalance(){
              this.amount = this.myBalance;
          },
   changeFarmDialog(status){
    this.$store.dispatch("woofdefi/changeFarmDialog" ,status)
   },
      },
    computed :{
        intAmount : function() {
            return parseInt(this.amount)
        },
        myBalance :  function (){
            return this.$store.state.woofdefi.myBalance;

        },
        farmdialog : function(){
            return this.$store.state.woofdefi.farmdialog;
        }
    }

  }
</script>