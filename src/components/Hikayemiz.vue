<template>
   <div class="kurumsal">
       <div class="p">
          75 TL Üzeri Alışverişlerinizde KARGO BEDAVA!
        </div>
        <div class="sayfayon">
          <a class="yon4" href="anasayfa"><span>Anasayfa<i class="fa fa-angle-right"></i></span></a>
          <a class="yon5" href="kurumsal"><span>Kurumsal<i class="fa fa-angle-right"></i></span></a>
          <span class="yon6">Hikayemiz</span>
        </div>
        <div class="liste">
            <ul >
             <li><a href="#"><router-link to="/kurumsal-satis" style="color:#333;">Kurumsal Satış</router-link></a></li>
             <li><a href="#"><router-link to="/hikayemiz" style="color:#333;">Hikayemiz</router-link></a></li>
             <li><a href="#" style="color:#333;">Mağaza Bul</a></li>
             <li><a href="#" style="color:#333;">İnsan Kaynakları</a></li>
             <li><a href="#" style="color:#333;">Sıkça Sorulan Sorular</a></li>
             <li><a href="#" style="color:#333;">Bize Ulaşın</a></li>
             <li><a href="#" style="color:#333;">Site Haritası</a></li>
             <li><a href="#" style="color:#333;">Franchise</a></li>
            </ul>
        </div>
        <div class="ayrıntı">
            <h1 class="title">Hikayemiz</h1>
            <p class="p-1">Dönem trendlerini uygun fiyatlarla evlerinize taşıyarak, 
                hayalinizdeki evi oluşturmanıza yardımcı olma tutkusuyla yola çıkan English Home, 
                kısa zamanda evini önemseyen ve dekorasyonu sevenlerin beğenisini kazandı. 
                
            </p>
            <h2 class="alt-title">Arzumuz</h2>
            <p class="p-2">
                English Home, vaktinizin tümünü geçirdiğiniz; çalıştığınız, dinlendiğiniz,
                sevdiklerinizle vakit geçirdiğiniz, uyuduğunuz ve hayaller kurduğunuz yaşam alanınızda
                huzurlu bir ortam yaratmayı
                amaçlıyor ve koleksiyonundaki her bir parçayı bunu düşünerek hazırlıyor.
            </p>
            <img src="https://cdn-eh.akinon.net/static_omnishop/eh172/assets/img/corporate/our-story-01.png">
            <img src="https://cdn-eh.akinon.net/static_omnishop/eh172/assets/img/corporate/our-story-02.png">
            <h2 class="alt-title2">Alanında Uzman Ekip</h2>
            <p class="p-3">
              Hem kaliteli hem de uygun fiyatlı ürünleriyle
              odalarınıza her sezon canlılık ve tazelik vadeden English Home’un
              tasarım ekibi hem sizin için son trendleri takip ederken, aynı zamanda
              eğitimli satış personelleri ve güler yüzüyle sizi mağazalarında ağırlıyor.
            </p>
            <h2 class="alt-title3">English Home Her Yerde</h2>
            <p class="p-4">
                Ülkemizin her yerine dağılmış 290’dan fazla mağazası ve online alışveriş seçeneği 
                ile size kolay ulaşılabilirlik sunarken, yurt dışında 110’dan fazla mağazası ile
                Yunanistan, Bulgaristan, Romanya, Ukrayna, ve Polonya’da hizmet vermektedir.
            </p>
        </div>

   </div>
 
  
    
</template>

<script>
export default {
    
}
</script>

<style>
*{
    box-sizing: border-box;
}
.p{
    height:25px;
    color: #002b5c;
}
.yon4{
    color: #4a4a4a;
    cursor: pointer;
    outline: none;
    font-size:12px;
    position: absolute;
    right:1180px;
    bottom:450px;
    
}
.yon5{
    color: #4a4a4a;
    cursor: pointer;
    outline: none;
    font-size:12px;
    position: absolute;
    right:1110px;
    bottom:450px;
}
.yon6{
    color: #4a4a4a;
    cursor: pointer;
    outline: none;
    font-size:12px;
    position: absolute;
    right:1050px;
    bottom:450px;
}
.liste{
    border:1px solid #ddd;
    width:260px;
    height: 750px;
    position: relative;
    top:20px;
    left:100px;
}
.liste ul li{
  position: relative;
  top:50px;
  left:35px;
  font-size: 14px;
  line-height: 30px;
  text-align:initial;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  list-style-type:none;
}
.ayrıntı{
    border:1px solid #ddd;
    width:900px;
    height: 750px;
    position: relative;
    top:20px;
    left:380px;
}
.title{
    font-size: 30px;
    margin-bottom: 25px;
    padding: 30px 30px 0;
    color: #333;
    float: left;
    position: relative;
    top:20px;
    right:250px;
}
.p-1{
    margin-bottom: 15px;
    line-height: 1.4em;
    display: block;
    font-size: 15px;
    color:#333;
    text-align: initial;
    width: 1020px;
    position: relative;
    top:120px;
    right:420px;
}
.ayrıntı img{
   width: 250px;
   height: 250px;
   margin:25px;
   display: list-item;
   position: relative;
   bottom:120px;
   left:360px;
}
.p-2{
    margin-bottom: 15px;
    line-height: 1.4em;
    vertical-align: baseline;
    text-align:initial;
    color: #333;
    font-size: 15px;
    font: BrandonText;
    width: 750px;
    position: relative;
    top:120px;
    right:220px;
}
.alt-title{
    font-size: 24px;
    color: #4688d7;
    margin-top: 25px;
    margin-bottom: 5px;
    font: BrandonText;
    position: relative;
    top:120px;
    right:494px;
}
.alt-title2{
    font-size: 24px;
    color: #4688d7;
    margin-top: 25px;
    margin-bottom: 5px;
    font: BrandonText;
    position: relative;
    bottom:440px;
    right:294px;
}
.p-3{
    margin-bottom: 15px;
    line-height: 1.4em;
    vertical-align: baseline;
    text-align:initial;
    color: #333;
    font-size: 15px;
    font: BrandonText;
    width: 550px;
    position: relative;
    bottom:446px;
    left:22px;
}
.alt-title3{
    font-size: 24px;
    color: #4688d7;
    margin-top: 25px;
    margin-bottom: 5px;
    font: BrandonText;
    position: relative;
    bottom:455px;
    right:280px;
}
.p-4{
    margin-bottom: 15px;
    line-height: 1.4em;
    vertical-align: baseline;
    text-align:initial;
    color: #333;
    font-size: 15px;
    font: BrandonText;
    width: 550px;
    position: relative;
    bottom:460px;
    left:15px;
}
</style>