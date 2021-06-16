<template>
    <div>
      <navbar status="full"></navbar>
        <div  class="site-header  d-flex flex-column align-items-center justify-content-between">
      <div class="hero">
        <h1>★彡 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 FINANCE 彡★</h1>
      <h1>𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 
      <span class="highlight">is a MEME with a DEFI </span> USECASE</h1>
      <p class="lead mt-3 mx-auto"> 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 FINANCE is a 100% decentralized MEME-DEFI community experiment with <span class="highlight">50%</span> of the tokens  locked in the <span class="highlight">WOOF DEFI FARM (WDF)</span></p>
      <p>By breeding your 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 you earn  <span class="highlight">30%</span> of your 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 after a Full CHOW BREEDING PERIOD ( 1 WEEK)  <span class="highlight">(1560% AWY->Anual Woof Yield) </span></p>
      
      <a href="mychows" class="btn btn-primary mt-3">Breed 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖
      <img src="images/right-arrow.svg" alt="arrow">
      </a>
      </div>
      <div class="graph">
      <img src="images/graph-dark.svg" alt="graph" class="img-fluid">
      </div>
      <div class=" mx-4">
        <div class="row">
          <div class="col-10">
 <h4 class="centered-text mb-4 section-highlight-text ">Through the inniovation of  GRAND  MASTER 𝐂𝐇𝐎𝐖 and the 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 community the 𝐂𝐇𝐎𝐖 Ecosystem has been designed to be sustainable through many
        community activities and platforms aimed at generating revenue for the 𝐂𝐇𝐎𝐖 nation.</h4>
          </div>
          <div class="col-2">
            <img src="@/assets/img/cho2.png" style="width: 220px ; height: 220px; " alt="">
          </div>
        </div>
      </div>
      </div>
      <section class="section feature-highlight" id="chowbreed">
      <div class="container">
      <div class="section-title mini-title">
      <h4>HOW TO BREED YOUR 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖</h4>
      </div>
      <div class="row">
      <div class="col-12 col-md-4">
      <div class="feature-item">
            <img src="@/assets/img/cho.png" style="width: 100px ; height: 100px; " alt="">
      <h4 class="featured-item-title">Purchase  𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 </h4>
      <p>𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 would be listed in various Decentralized and Centralized exchange over time, from this exchanges you can purchase some 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 you would need for BREEDING.</p>
      </div>
      </div>
      <div class="col-12 col-md-4">
      <div class="feature-item">
      <img src="@/assets/img/cho2.png" style="width: 100px ; height: 100px; " alt="">
      <h4 class="featured-item-title">WOOF your 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖</h4>
      <p>The 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 breeding process is called WOOFING, this is when you put your 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 in the WOOF DEFI FARM for Breeding. The Breeding Period is One full WOOF PERIOD ( 1 WEEK)</p>
      </div>
      </div>
      <div class="col-12 col-md-4">
      <div class="feature-item">
      <img src="@/assets/img/cho3.jpg" style="width: 100px ; height: 100px; " alt="">
      <h4 class="featured-item-title">WOOF HARVEST </h4>
      <p>After a successful breeding over the specified WOOFING period, your Chow and ChowChow would be available for you to claim.</p>
      </div>
      </div>
      </div>
      </div>
      
      </section>
      <section class="section section-highlight" id="tokenmetric">
      <div class="container">
      <div class="section-title max-title">
      <h3>𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 TOKENMETRICS</h3>
      </div>
      <p class="lead p-3 centered-text text-center mx-auto"> After  the Breeding Period is One full WOOF PERIOD ( 1 WEEK)
        the your 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 and your new 𝐂𝐇𝐎𝐖 would be released to you.
      </p>
      
      
      <div class="row text-center">
      <div class="col">
      <h6 class="text-info">
      Initial Total Supply 
      </h6>
      <h3 class="display-5 mb-5">{{convertToInternationalCurrencySystem(1000000000000000)}}</h3>
      </div>
      <div class="col">
      <h6 class="text-info">
      Current Total Supply 
      </h6>
      <h3 class="display-5 mb-5">{{convertToInternationalCurrencySystem(totalSupply)}}</h3>
      </div>
      <div class="col">
      <h6 class="text-info">
      Total Burn
      </h6>
      <h3 class="display-5 mb-5">{{convertToInternationalCurrencySystem(1000000000000000-totalSupply)}}</h3>
      </div>
      <div class="col">
      <h6 class="text-info">
      WOOF DEFI FARM 
      </h6>
       <h3 class="display-5 mb-5">{{convertToInternationalCurrencySystem(500000000000000)}}</h3>
      </div>
      <div class="col">
      <h6 class="text-info">
      Liguidity
      </h6>
      <h3 class="display-5 mb-5">{{convertToInternationalCurrencySystem(400000000000000)}}</h3>
      </div>
      <div class="col">
      <h6 class="text-info">
      Dev Pool
      </h6>
      <h3 class="display-5 mb-5">{{convertToInternationalCurrencySystem(100000000000000)}}</h3>
      </div>
      </div>
      <div class="text-center">
      <h4>OUR DREAM MARKETCAP TRACKER</h4>
      </div>
      <div class="progress-area">
      <div class="row">
      <div class="col-2 col-md-1 text-right">
      <span> $50K </span>
      </div>
      <div class="col-8 col-md-10">
      <div class="progress">
      <div class="progress-bar bg-gradient" role="progressbar" style="width: 4%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      </div>
      <div class="col-2 col-md-1 text-left">
      <span> $10B </span>
      </div>
      </div>
      </div>
     
    
      
      </div>
      <div class="container">
      <div class="section-title max-title">
      <h3>WOOF DEFI FARM TOKENMETRICS</h3>
      </div>
      <p class="lead p-3 centered-text text-center mx-auto"> 50% of the entire supply of 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 has been allocated to th WOOF DEFI FARM, where CHOW Breeders can breed their 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 to earn 𝐂𝐇𝐎𝐖
      </p>
      
      
      <div class="row text-center">
      <div class="col">
      <h6 class="text-info">
      Total Value Locked  
      </h6>
      <h3 class="display-5 mb-5">{{convertToInternationalCurrencySystem(poolBalance)}}</h3>
      </div>
      <div class="col">
      <h6 class="text-info">
      Percentage Return 
      </h6>
       <h3 class="display-5 mb-5">{{percentageReturn}}%</h3>
      </div>
      <div class="col">
      <h6 class="text-info">
      Woof Period
      </h6>
      <h3 class="display-5 mb-5">{{woofPeriod}} {{woofPeriod > 1 ? "Days" : "Day"}}</h3>
      </div>
      <div class="col">
      <h6 class="text-info">
      Harvest / Claim Fees.
      </h6>
      <h3 class="display-5 mb-5"> 3%</h3>
      </div>
      </div>
      <div class="text-center">
      <h4>FEE STRUCTURE</h4>
       <p class="lead p-3 centered-text text-center mx-auto"> 3% of Fees is deducted from accrued Yeild every time a Harvest/Claim occures, 33.3% of the fees is Burnt while  66.6% is sent to the developer pool.  </p>
      </div>
    
      <div class="text-center">
      <div class="btn btn-lg btn-primary mt-5" @click="toast">Purchase 𝐂𝐇𝐎𝐖 Now
      <img src="images/right-arrow.svg" alt="arrow">
      </div>
      
      </div>
      <div class="row text-center mt-3">
      <div class="col">
      <h6 class="text-info">
      ChowChow Contract Address. 
      </h6>
      <h3 class="display-5 mb-5">{{contractAddress}}</h3>
      </div>
      </div>
      </div>
      </section>
      
   
     
     
      <section class="section" id="roadmap">
      <div class="container">
      <div class="section-title max-title">
      <h3>𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 Project Roadmap</h3>
      </div>
      <p class="lead p-3 centered-text text-center mx-auto">The roadmap focuses on the development of the
      technology, operations infrastructure, new partnerships, and marketing
      initiative the would keep the 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 WOOF Pool sustained.
      </p>
      <section class="cd-timeline js-cd-timeline">
      <div class="cd-timeline__container">
      <div class="cd-timeline__block js-cd-block">
      <div class="cd-timeline__milestone"> </div>
      <div class="cd-timeline__content js-cd-content">
      <div class="cd-timeline__date">March 2021</div>
      <h4>Project Concept</h4>
      <p>The project was innitiate by the founder Grand Master 𝐂𝐇𝐎𝐖</p>
      </div>
      </div>
      <div class="cd-timeline__block js-cd-block">
      <div class="cd-timeline__milestone"> </div>
      <div class="cd-timeline__content js-cd-content">
      <div class="cd-timeline__date">June 2021</div>
      <h4>Platform Launch</h4>
      <p>This includes the lunch of the 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 token , the WOOF DEFI FARM and the official Lunch of our web Application</p>
      </div>
      </div>
         <div class="cd-timeline__block js-cd-block">
      <div class="cd-timeline__milestone"> </div>
      <div class="cd-timeline__content js-cd-content">
      <div class="cd-timeline__date">June 2021</div>
      <h4>Prelist For Pilot Test</h4>
      <p>A small amount of the sales token is  listed on pancakeSwap to facilitate the pilot Phase Test where the Woof Defi Pool would be tested by the community</p>
      </div>
      </div>
       <div class="cd-timeline__block js-cd-block">
      <div class="cd-timeline__milestone"> </div>
      <div class="cd-timeline__content js-cd-content">
      <div class="cd-timeline__date">June 2021</div>
      <h4>Token Sale</h4>
      <p>The token sale would would occur in three stages where all the remaining token allocated for sale would be sold to raise liquidity, Once sales is done liquidity would be locked for 3 Years. </p>
      </div>
      </div>
      <div class="cd-timeline__block js-cd-block">
      <div class="cd-timeline__milestone"> </div>
      <div class="cd-timeline__content js-cd-content">
      <div class="cd-timeline__date">July 2021</div>
      <h4>Publishment of Full Woofpaper</h4>
      <p>Our Woofpaper Would be released to the 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 community, deteailing the 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 plans.</p>
      </div>
      </div>
      <div class="cd-timeline__block js-cd-block">
      <div class="cd-timeline__milestone"> </div>
      <div class="cd-timeline__content js-cd-content">
      <div class="cd-timeline__date">August 2021</div>
      <h4>Lunch of 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 CASINO</h4>
      <p>The 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 casino would be one of the revenue generation source for the WOOF DEFI FARM where the revenue would be shared equally with the Game Development team. </p>
      </div>
      </div>
      <div class="cd-timeline__block js-cd-block">
      <div class="cd-timeline__milestone"> </div>
      <div class="cd-timeline__content js-cd-content">
      <div class="cd-timeline__date">Sept 2021</div>
      <h4>Lunch of 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 NFT Market</h4>
      <p>The 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 NFT marketplace would be where game assets would be designed and sold by our community Artists, the revenue would also be share equally between the WOOF DEFI FARM and the NFT Artists </p>
      </div>
      </div>
      <div class="cd-timeline__block js-cd-block">
      <div class="cd-timeline__milestone"> </div>
      <div class="cd-timeline__content js-cd-content">
      <div class="cd-timeline__date">More Updated Loading...</div>
      <h4 class="m-0">As we WOOF more POOFs would be Provided.</h4>
      </div>
      </div>
      </div>
      </section>
      </div>
      
      </section>
      
      <section class="section" id="team">
      <div class="container">
      <div class="section-title max-title mb-5">
      <h3>Our Team Members</h3>
      </div>
       <div class="row text-center">
      <div class="col-12 col-md-6 col-lg-4 mb-5">
      <img src="@/assets/img/chomas.png" alt="team" class="img-fluid mb-4">
      <h4 class="mb-0">Grand Master Chow</h4>
      <small class="text-info text-uppercase">Founder &amp;Innovator</small>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-5">
      <img src="@/assets/img/chomas2.png" alt="team" class="img-fluid mb-4">
      <h4 class="mb-0">Master Chow</h4>
      <small class="text-info text-uppercase">Community Lead</small>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-5">
      <img src="@/assets/img/chomas1.png" alt="team" class="img-fluid mb-4">
      <h4 class="mb-0">Uncle Chow</h4>
      <small class="text-info text-uppercase">lead developer</small>
      </div>
     
      </div>
      </div>
      
      </section>
    
      
      <footer class="section section-separated py-lg">
      <div class="container">
      <div class="row">
      <div class="col-md-6 col-lg-6">
       <img src="@/assets/img/cho2.png" style="width: 50px ; height: 50px; " alt="">𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖
      <p class="footer__info--text">Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. 𝐂𝐇𝐎𝐖𝐂𝐇𝐎𝐖 FINANCE accepts no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published</p>
      <ul class="social__links">
      <li>
      <a href="https://www.facebook.com/%F0%9D%90%82%F0%9D%90%87%F0%9D%90%8E%F0%9D%90%96%F0%9D%90%82%F0%9D%90%87%F0%9D%90%8E%F0%9D%90%96-Finance-109894211322796">
      <img src="images/facebook-icon.svg" alt="fb" class="img-fluid">
      </a>
      </li>
      <li>
      <a href="https://twitter.com/ChowchowFinance">
      <img src="images/twitter-icon.svg" alt="tw" class="img-fluid">
      </a>
      </li>
      <li>
      <a href="https://t.me/officialchowchowfinance">
      <img src="images/telegram.svg" alt="in" class="img-fluid">
      </a>
      </li>
      <li>
      <a href="#">
      <img src="images/github-icon.svg" alt="gh" class="img-fluid">
      </a>
      </li>
      </ul>
      </div>
      
  
      </div>
     
      </div>
       
      </footer>
    </div>
</template>
<script>
export default
{
data(){
  return {

  }
},
computed : {
  contractAddress : function(){
  return this.$store.state.woofdefi.chowchowAddress;
  },
  totalSupply : function(){
  return this.$store.state.woofdefi.totalChowSupply;

  },
  poolBalance : function(){
return this.$store.state.woofdefi.poolBalance;
  },
  percentageReturn : function(){
  return this.$store.state.woofdefi.percentage;

  },
  woofPeriod : function(){
 return this.$store.state.woofdefi.woofPeriod;

  }
},
methods:{
   convertToInternationalCurrencySystem (labelValue) {

    // Nine Zeroes for Billions
     return Math.abs(Number(labelValue)) >= 1.0e+15

    ? (Math.abs(Number(labelValue)) / 1.0e+15).toFixed(2) + "Q"
     : Math.abs(Number(labelValue)) >= 1.0e+12

    ? (Math.abs(Number(labelValue)) / 1.0e+12).toFixed(2) + "T"

    : Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));

},
  toast(){
    this.$toast.success('response');
  }
}
}
</script>
