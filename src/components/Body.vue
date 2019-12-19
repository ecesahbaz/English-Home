<template>
    
  <div>
    <div class="p">
      75 TL Üzeri Alışverişlerinizde KARGO BEDAVA!
    </div>
   


<md-card >
  
    <md-card-actions>
     
      <md-button class="md-icon-button" target="_blank">
        
        <a href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/03-pagination.vue"></a>
        
      </md-button>
    </md-card-actions>
    
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption" >
        
        <swiper-slide><img  src="../assets/anasayfa1.jpg"></swiper-slide>
        <swiper-slide><img   src="../assets/anasayfa2.jpg"></swiper-slide>
        <swiper-slide><img  src="../assets/anasayfa3.jpg"></swiper-slide>
        
       
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </md-card-media>
  
  </md-card>



    <ul>
      <img class="konum1" src="../assets/anasayfa4.jpg" alt="Cinque Terre" width="566.500" height="589.569" top="3px">"
      <img class="konum2" src="../assets/anasayfa5.jpg"  alt="Cinque Terre" width="566.500" height="589.569" top="3px">
        </ul>
           <img src="../assets/anasayfa6.jpg"  alt="Cinque Terre" width="1150" height="250">
        <ul>
         <img class="konum1" src="../assets/anasayfa7.jpg"  alt="Cinque Terre" width="566.500" height="589.569">
         <img class="konum2" src="../assets/anasayfa8.jpg"  alt="Cinque Terre" width="566.500" height="589.569">
        </ul>
        <img src="../assets/anasayfa9.jpg" alt="Cinque Terre" width="1150" height="250">
        <ul>
         <img class="konum1" src="../assets/anasayfa10.jpg"  alt="Cinque Terre" width="566.500" height="589.569">
         <img class="konum2"  src="../assets/anasayfa11.jpg"  alt="Cinque Terre" width="566.500" height="589.569">
        </ul>
        <img src="../assets/anasayfa12.jpg"  alt="Cinque Terre" width="1150" height="250">

        <div class="alt_bolum">
          <div class="alt" >
            <div class="magazaiade">
             <img src="../assets/magazadan_iade.png" style="cursor:pointer">
             <div class="text">MAĞAZADAN</div>
             <div class="text2">İADE</div>
            </div>
            <div class="magazateslim">
             <img class="konumb" src="../assets/magazadan_teslim.png" style="cursor:pointer">
             <div class="text3">MAĞAZADAN</div>
             <div class="text4">TESLİM</div>
            </div>
            <div class="kapıdaodeme">
             <img class="konumc" src="../assets/kapida_odeme.png" style="cursor:pointer">
             <div class="text5">KAPIDA ÖDEME</div>
            </div>
            <div class="kargo">
             <img class="konumd" src="../assets/kargo.png" style="cursor:pointer">
             <div class="text6">5 İŞ GÜNÜNDE</div>
             <div class="text7">KARGO</div>
            </div> 
            <div class="iadegarantisi">
             <img class="konume" src="../assets/iade_garantisi.png" style="cursor:pointer">
             <div class="text8">30 GÜN İADE</div>
             <div class="text9">GARANTİSİ</div>
            </div>
             
          </div>



        </div>


        


        
    </div> 
    
      
 
</template> 



<script>
    export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>



<style>

 .md-icon-button{
   position: relative;
   top:-50px;
 }
 h3{
   position: relative;
   top:100px;
  }

  /*konum düzenlemeleri */
 .alt .konume{    /*iadegarantisi*/
   position: relative;
   float:left;
   left:20px;
   top:7px;
   
 }
 .alt .konumd{   /*kargo*/
   width:55px;
   position: relative;
   float:left;
   left:20px;
   top:1px;
 }
 
 .alt .konumc{   /*kapıdaodeme*/
   position: relative;
   float:left;
   left:20px;
   top:1.5px;
 }

 .alt .konumb{  /*magazateslim*/
   position: relative;
   float:left;
   left:20px;
 }
  
  /* resim ve text düzenlemeleri*/
  .alt img{
   width: 45px;
   position: relative;
   float:left;
   left:20px;
   top:2px;
  }
  .alt .text{
    position: relative;
    float:left;
    left:20px;
    top:7px;
    cursor:pointer;
    font-size:13px;
  }
  .alt .text2{
   position: relative;
   float:left;
   left:-62px;
   top:23px;
   cursor:pointer;
   font-size:13px;
  }
  .alt .text3{
   position: relative;
   float:left;
   left:23px;
   top:7px;
   cursor:pointer;
   font-size:13px;
  }
 .alt .text4{
   position: relative;
   float:left;
   left:-58px;
   top:25px;
   cursor:pointer;
   font-size:13px;

  }

  .alt .text5{   /*kapıdaodeme*/
   position: relative;
   float:left;
   left:18px;
   top:14px;
   cursor:pointer;
   font-size:13px;
  }
  .alt .text6{   /*kargo*/
   position: relative;
   float:left;
   left:20px;
   top:8px;
   cursor:pointer;
   font-size:13px;
  }
  .alt .text7{    /*kargo*/
   position: relative;
   float:left;
   left:-73px;
   top:25px;
   cursor:pointer;
   font-size:13px;
  }
  .alt .text8{     /*iadegarantisi*/
   position: relative;
   float:left;
   left:25px;
   top:7px;
   cursor:pointer;
   font-size:13px;
  }
  .alt .text9{    /*iadegarantisi*/
   position: relative;
   float:left;
   left:-55px;
   top:25px;
   cursor:pointer;
   font-size:13px;
  }
  ul img{
   position: relative;

  }
 


 .p{padding:0px 90px;
    margin:0px;
    font-weight:thin; 
    font-size:15px;
    font-family: BrandonText;
    color:blue;
    position: relative;
    left:0px;
    top:-60px;
    
    
  }
  .konum1 {
    float:left; 
    position: relative;
    left:100px;
    top:0px;
    width: 550px;
    height: 600px;
    

  }
  .konum2 {
    float: right;
    position: relative;
    right:100px;
    top:0px;
    width: 550px;
    height: 600px;

  }
  /* border ayarlamaları */
  .magazaiade{
    border:1px solid #4688d7;
    width: 200px;
    height: 52px;
    position: relative;
    left:100px;
    top:50px;


  }
  .magazateslim{
    border:1px solid #4688d7;
    width: 200px;
    height: 52px;
    position: relative;
    left:330px;
    top:-2px;
  }
  .kapıdaodeme{
    border:1px solid #4688d7;
    width: 200px;
    height: 52px;
    position: relative;
    left:560px;
    top:-55px;
  }
  .kargo {
    border:1px solid #4688d7;
    width: 200px;
    height: 52px;
    position: relative;
    left:790px;
    top:-107px;
  }
  .iadegarantisi{
    border:1px solid #4688d7;
    width: 200px;
    height: 52px;
    position: relative;
    left:1015px;
    top:-159px;
  }
