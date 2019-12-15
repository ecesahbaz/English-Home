<template>
   <div class="sepetsayfası">
       <img src="../assets/sepet2.jpg" style="cursor:pointer">
       <div class="solsayfa">
           <h1>SEPETİM</h1>
           <span>1 Ürün</span>
           <div class="solsayfaic">
               <img src="../assets/sepetresim.jpg" style="cursor:pointer">
               <a href="#">Rosejoy Pamuklu Çift Kişilik Nevresim 200x220 Cm Kırmızı</a> 
               <span class="tutar1">₺ 79,99</span>
               <span class="tutar2">₺ 79,99</span>
               <div class="eksi-btn">-</div>
               <input type="text" class="adet" value="1" data-id="22414">
               <span class="adet-text">adet</span>
               <div class="artı-btn">+</div>
           </div>
          
       </div>
       <div class="sagsayfa">
           <h2>SİPARİŞ ÖZETİ</h2>
           <a href="#">Alışverişe devam et</a>
           <div class="sagsayfaic">
               <div class="siparis">
                   <span class="uruntoplamı">1 Adet Ürün Toplamı</span>
                   <span class="ucret">₺ 79,99</span>
                   <span class="kampanya">75 TL ve Üzeri Alışverişlerinizde KARGO BEDAVA!</span>
               </div>
               <div class="sonsiparis">
                   <span class="toplam">Toplam</span>
                   <span class="ucret2">₺ 79,99</span>
                   <div class="sepet-btn">SİPARİŞİ TAMAMLA</div>

               </div>
               <div class="indirim">
                   <span>İndirim kodunuz var mı?</span>
                   <div class="indirim-btn">+</div>
                   

               </div>
           </div>
        </div>
       
        
   </div>  

	
</template>

<script>
export default {
    
}
</script>


<style>
*{
    margin: 0px;
    padding: 0px;
}
body{
    box-sizing: border-box;
}
.sepetsayfası{
    background-size:auto;
}
.sepetsayfası img{
    width:1200px;
}
.solsayfa h1{
    font-size: 20px;
    font-weight: 700;
    float: left;
    position: relative;
    left:90px;
    top:40px;
    color:#000;

}
.solsayfa span{
    position: relative;
    float: left;
    left:100px;
    top:42px;
}

.solsayfaic{
    padding: 30px;
    background-color: #fff;
    border: 1px solid #d5d3ce;
    float: left;
    right:50px;
    top:90px;
    width: 780px;
    height: 150px;
    border-radius: 10px;
    position: relative;
}
.solsayfaic img{
    width:110px;
    float:left;
    position: relative;

}
.solsayfaic a{
    height: 42px;
    font-size: 15px;
    font-weight: 400;
    color: #000;
    float:left;
    position: relative;
    left:10px;

}
.solsayfaic a:hover{
    color:#000;
}

.tutar1{
    font-size: 24px;
    font-weight: 700;
    color: #2c4f79;
    position: absolute;
    top:50px;
    
}
.tutar2{
    font-size: 24px;
    font-weight: 700;
    line-height: 50px;
    color: #2c4f79;
    padding-left: 5px;
    position: relative;
    left:-30px;
    top:30px;

}

.sagsayfa h2{
    width: calc(100% / 2 - 5px);
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color:#000;
    position: relative;
    left:900px;
    top:-110px;
}
.sagsayfa a{
    font-size: 14px;
    font-weight: 400;
    color: #636363;
    text-align: right;
    width: calc(100% / 2 - 5px);
    cursor: pointer;
    position: relative;
    left:300px;
    top:-140px;
    
}
.sagsayfa a:hover{
    color:#636363;
}
.sagsayfaic{
    padding: 30px;
    background-color: #f6f4ee;
    border: 1px solid transparent;
    float: left;
    width: 370px;
    height: 270px;
    border-radius: 10px;
    position: relative;
    left:900px;
    top:-93px;
}

.uruntoplamı{
    
    font-size: 15px;
    color: #000;
    display: inline-block;
    position: relative;
    top:-5px;
    left:-55px;
}
.ucret{
    font-size: 15px;
    color: #000;
    position: relative;
    top:-5px;
    left:55px;
}
.kampanya{
    float: left;
    font-size: 18px;
    font-weight: 600;
    color: #4688d7;
    position: relative;
    top:10px;
    left:-10px;
}
.toplam{
    font-size: 20px;
    font-weight: 700;
    color: #000;
    text-align: left;
    position: relative;
    top:35px;
    left:-75px;
}
.ucret2{
    font-size: 20px;
    font-weight: 700;
    color: #000;
    float:right;
    position: relative;
    top:35px;
    left:5px;
}
.sepet-btn{
    font-size: 15px;
    letter-spacing: 1px;
    display: inline-block;
    background-color: #4688d7!important;
    color:#fff;
    text-align: center;
    cursor: pointer;
    width: 100%;
    height: 40px;
    position: relative;
    top:65px;
    left:5px;
}
.indirim{
    border:1px solid #4688d7;
    border-radius: 7px;
    width: 370px;
    height:60px;
    position: relative;
    top:105px;
    left:-27px;
    
}
.indirim span{
    font-size: 15px;
    font-weight: 400;
    color: #333;
    float: left;
    position: relative;
    top:13px;
    left:27px;
    line-height: 33px;
}
.eksi-btn{
  border: 1px solid #9b9b9b;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  left:480px;
  top:58px;
  text-align: center;
  font-size: 20px;
  
}
.artı-btn{
  border: 1px solid #9b9b9b;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  left:600px;
  top:-20px;
  text-align: center;
  font-size: 20px;

}
.indirim-btn{
  border:1px solid #4688d7;
  border-radius:0px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: relative;
  top:15px;
  left:297px;
  
}

.adet{
  border:1px solid;
  border-color: #fff;
  width:2px;
  position: relative;
  left:50px;
  top:100px;
}

</style