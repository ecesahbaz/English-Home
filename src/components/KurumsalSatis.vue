<template>
   <div class="kurumsal">
       <div class="p">
          75 TL Üzeri Alışverişlerinizde KARGO BEDAVA!
        </div>
        <div class="sayfayon">
          <a class="yona" href="anasayfa"><span>Anasayfa<i class="fa fa-angle-right"></i></span></a>
          <a class="yonb" href="kurumsal"><span>Kurumsal<i class="fa fa-angle-right"></i></span></a>
          <span class="yonc">Kurumsal Satış</span>
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
            <h1 class="title2">Kurumsal Satış</h1>
            <p class="p1">Kurumsal SatışEnglish Home’un Kurumsal Ürün ve Hediye Hizmeti ile 
                kış koleksiyonumuzun en güzel ürünlerini çalışanlarınız, iş ortaklarınız 
                ve müşterilerinizle paylaşın! English Home Kurumsal Satış 
                ekibi olarak ihtiyaçlarınıza en uygun alternatifler sunmaktan mutluluk 
                duyarız.
            </p>
            <ul class="li">
              <li><strong>Kurumsal Hizmet Verdiğimiz Alanlar;</strong></li> 
              <li>Kurumsal Hediye Satışı</li>
              <li>Özel Gün Hediyeleri</li>
              <li>Bayram Hediyeleri</li>
              <li>Hediye Kartı</li>
              <li>Otel ve İşletmeler için</li>
              <li>Yatak Satışı, Nevresim, Havlu, Yatak Örtüsü Seçenekleri ve Fazlası</li>
            </ul>
            <img src="https://cdn-eh.akinon.net/static_omnishop/eh172/assets/img/corporate/our-story-01.png">
            <img src="https://cdn-eh.akinon.net/static_omnishop/eh172/assets/img/corporate/our-story-02.png">
            <p class="p2">Tüm ürünlerimize englishhome.com.tr adresinden ulaşabilirsiniz. 
                Dilerseniz web sitemizden sizin için en uygun ürünleri seçebilir veya 
                size uygun öneriler sunması için satış ekibiyle iletişime geçebilirsiniz. 
                Farklı fiyat seçeneklerinde kurumlara özel olarak hazırlanan ürünler, mağazalarda 
                dilediğiniz gibi alışveriş yapma imkanı tanıyan hediye çekleri, English Home özel desenleriyle 
                hazırlanan geniş ürün yelpazesi bu prestijli dünyada bekleyen alternatiflerden yalnızca birkaçı. 
                Daha fazla bilgi almak için; 
                <a href="mailto:kurumsalsatis@englishhome.com.tr" style="color:#333; text-decoration:underline;">Kurumsalsatis@englishhome.com.tr</a>
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
}
.yona{
    color: #4a4a4a;
    cursor: pointer;
    outline: none;
    font-size:12px;
    position: absolute;
    right:1180px;
    bottom:450px;
    
}
.yonb{
    color: #4a4a4a;
    cursor: pointer;
    outline: none;
    font-size:12px;
    position: absolute;
    right:1110px;
    bottom:450px;
}
.yonc{
    color: #4a4a4a;
    cursor: pointer;
    outline: none;
    font-size:12px;
    position: absolute;
    right:1025px;
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
.title2{
    font-size: 30px;
    margin-bottom: 25px;
    padding: 30px 30px 0;
    color: #333;
    float: left;
    position: relative;
    top:20px;
    right:250px;
}
.p1{
    margin-bottom: 15px;
    line-height: 1.4em;
    vertical-align: baseline;
    text-align:initial;
    color: #333;
    font-size: 15px;
    font: BrandonText;
    width: 1070px;
    position: relative;
    top:150px;
    right:485px;
}
.li li{
    
  position: relative;
  top:150px;
  left:-210px;
  font-size:15px;
  text-align:initial;
  margin: 0;
  padding: 0;
  border: 0;
  font-family:Arial;
  vertical-align: baseline;
  display: list-item;
  color: #4a4a4a;
  list-style-type:none;
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
.p2{
    margin-bottom: 15px;
    line-height: 1.4em;
    vertical-align: baseline;
    text-align:initial;
    color: #333;
    font-size: 15px;
    font: BrandonText;
    width: 550px;
    position: relative;
    bottom:410px;
    left:40px;
}
</style>