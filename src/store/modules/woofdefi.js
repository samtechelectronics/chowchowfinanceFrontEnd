import  {woofdefiAbi , woofdefiAddress ,chowchowAbi ,chowchowAddress} from "./abi"



const state = {
    poolBalance:0,
    myChows : [],
    myTotalValueLocked: 0,
    percentage : 0,
    woofPeriod : 0,
    farmdialog : false,
    myBalance : 0,
    totalChowSupply : 0,
    chowchowAddress : ""
}

const getters = {}
const actions = {
    changeFarmDialog({commit} , status){
        commit("setFarmDialog" , status);
    },

    async chowStatus(_, breedid){
        let status =   await window.woofdefiContract.methods.chowStatus(breedid).call({from: this.state.currentUser.user.address});
        return new Promise( (resolve) => {
            resolve(status);
        })
    },
    async getWoofPeriod({commit}){
        let woofPeriod =   await window.woofdefiContract.methods.getWoofPeriod().call({from: this.state.currentUser.user.address});
        commit("setWoofPeriod" , woofPeriod);
        return new Promise( (resolve) => {
            resolve(woofPeriod);
        })
    },
    async getYeildPassentage({commit}){
        let percentage =   await window.woofdefiContract.methods.getPercentage().call({from: this.state.currentUser.user.address});
        commit("setPercentage" , percentage);
        return new Promise( (resolve) => {
            resolve(percentage);
        })
    },
    async myTotalValueLocked({commit}){
        let myTotalValueLocked =   await window.woofdefiContract.methods.myTotalValueLocked().call({from: this.state.currentUser.user.address});
       myTotalValueLocked = window.web3.utils.fromWei(myTotalValueLocked);
        commit("setmyTotalValueLocked" , myTotalValueLocked);
        return new Promise( (resolve) => {
            resolve(myTotalValueLocked);
        })
    },
    async availaleChowBalance({commit}){
        let myBalance =   await window.chowchowContract.methods.balanceOf(this.state.currentUser.user.address).call({from: this.state.currentUser.user.address});
        myBalance = window.web3.utils.fromWei(myBalance);
        commit("setmyBalance" , myBalance);
        return new Promise( (resolve) => {
            resolve(myBalance);
        })
    },
    async approveTransaction(_ ,amount){
         await window.chowchowContract.methods.approve(woofdefiAddress, window.web3.utils.toBN(window.web3.utils.toWei(amount)).toString() ).send({from: this.state.currentUser.user.address});
    
        return new Promise( (resolve) => {
            resolve("Transaction Approved Successfully!!!");
        })
    },
    async claimMyChow(_ , breedid){
        await window.woofdefiContract.methods.claimMyChowChow(breedid).send({from: this.state.currentUser.user.address});
        return new Promise( (resolve) => {
            resolve("Chow Claimed Successfully!!!");
        })
    },
    async claimMyChowEarly(_ , breedid){
        await window.woofdefiContract.methods.claimMyChowChowEarlier(breedid).send({from: this.state.currentUser.user.address});
        return new Promise( (resolve) => {
            resolve("Chow Claimed Successfully!!!");
        })
    },
    // 
    async breedMyChowChow(_ ,amount){
        let breedIds =   await window.woofdefiContract.methods.getMyBreedIds().call({from: this.state.currentUser.user.address});
        let id = "0";
        do {
            id = Math.floor(Math.random() * 100000000) + 1;
        }while( breedIds.includes(id));
        await window.woofdefiContract.methods.breedMyChowChow( window.web3.utils.toBN(window.web3.utils.toWei(amount),id).toString()  ,id).send({from: this.state.currentUser.user.address});
       return new Promise( (resolve) => {
           resolve("ChowChow Sent for Breeding Successfully!!!");
       })
   },
    // myTotalValueLocked
    async getChow(_, breedid){
        let mychow  =   await window.woofdefiContract.methods.getMychow(breedid).call({from: this.state.currentUser.user.address});
        return new Promise( (resolve) => {
            resolve({
                "id" : breedid,
                "address" : mychow[0],
                "amount" : window.web3.utils.fromWei(mychow[1]),
                "releaseDate" : mychow[2],
                "active" : mychow[3],
            })
        })
    },
    async loadMyChows({state ,commit}) {
        commit("clearChows");
        let breedIds =   await window.woofdefiContract.methods.getMyBreedIds().call({from: this.state.currentUser.user.address});
       await breedIds.forEach( async (breedid)  => {
            let mychow = await window.woofdefiContract.methods.getMychow(breedid).call({from: this.state.currentUser.user.address});
            if(mychow[3]){
                commit("setMyChow" , {
                    "id" : breedid,
                    "address" : mychow[0],
                    "amount" : window.web3.utils.fromWei(mychow[1]),
                    "releaseDate" : mychow[2],
                    "active" : mychow[3],
                    "percentageReturn" : mychow[4]
                }); 
            }
         
        });
       
        return new Promise( (resolve) => {
            resolve(state.myChows);
        })
    },
    async  loadContract({commit}) {
        window.woofdefiContract  =  await new window.web3.eth.Contract( woofdefiAbi ,woofdefiAddress);
        window.chowchowContract  =  await new window.web3.eth.Contract( chowchowAbi ,chowchowAddress);
      let  totalChowSupply =   await window.chowchowContract.methods.totalSupply().call();
        commit("setTotalChowSupply" ,window.web3.utils.fromWei(totalChowSupply));chowchowAddress
        commit("setChowAddress" ,chowchowAddress);
    },
    async getPoolBalance({commit}){
        let balance =   await window.woofdefiContract.methods.poolBalance().call();
        balance = window.web3.utils.fromWei(balance);
          commit("setPoolBalance" , balance);
          return new Promise( (resolve) => {
              resolve(balance);
          })
        }
}

const mutations = {
    setChowAddress(state , chowchowAddress){
        state.chowchowAddress  = chowchowAddress;
    },
    setTotalChowSupply(state ,totalChowSupply ){
        state.totalChowSupply = totalChowSupply
    },
    setmyTotalValueLocked(state ,myTotalValueLocked){
        state.myTotalValueLocked = myTotalValueLocked;
    },
    clearChows(state){
        state.myChows = [];
    },
    setMyChow(state, mychow){
        state.myChows.push(mychow);
    },
    setPoolBalance(state ,  balance){
        state.poolBalance = balance;
    },
    setPercentage(state , percentage){
        state.percentage = percentage;
    },
    setWoofPeriod(state, woofPeriod){
        state.woofPeriod = woofPeriod
    },
    setFarmDialog(state , status){
        state.farmdialog=status;
    },
    setmyBalance(state , myBalance){
        state.myBalance = myBalance
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}