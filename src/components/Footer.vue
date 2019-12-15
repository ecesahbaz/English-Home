<template>
  
   <footer class= "footercontent">
      <div class="container " style="text black">
         <div class="row">
            <div class="col-md-2" style="color:rgb(0, 0, 0);">
               <ul class="liste" style="list-style-type:none;">
                  <li class="text-muted mb-3"><small>Kategoriler</small></li>
                  <li>Yatak Odası</li>
                  <li>Banyo</li>
                  <li>Mutfak</li>
                  <li>Yaşam Alanı</li>
                  <li>Aksesuar</li>
                  <li>Ev Giyimi</li>
                  <li>Bebek & Çocuk</li>
               </ul>
            </div>
            <div class="col-md-2" style="color:rgb(0, 0, 0);;">
               <ul class="liste2" style="list-style-type:none;">
                  <li class="text-muted mb-3"><small>Kurumsal Satış</small></li>
                   <li>Bize Ulaşın</li>
                   <li>Mağazalarımız</li>
                   <li>İnsan Kaynakları</li>
                   <li style="width:300px;">Bilgi Toplum Hizmetleri</li>
                   <li>Site Haritası</li>
                   <li>Franchising</li>
                   <li><router-link to="/hikayemiz">Hikayemiz</router-link></li>
                   <li><router-link to="/kurumsal-satis">Kurumsal Satış</router-link></li>
               </ul>
            </div>
            <div class="col-md-2" style="color:rgb(0, 0, 0);;">
               <ul class="liste3" style="list-style-type:none;">
                   <li class="text-muted mb-3"><small>Yardım</small></li>
                   <li>Kampanyalar</li>
                   <li>Kullanım Şartları</li>
                   <li>İade/İptal Koşulları</li>
                   <li>Sıkça Sorulan Sorular</li>
                   <li>Sipariş Sorgula</li>
                   <li style="width:300px;">KVKK Veri İşleme Politikamız</li>
               </ul>
            </div>
             
                 <form action="eposta">
                    <div class="mail">
                      <h1>Kayıt Olun</h1>
                      <p>Yeniliklerden ilk sizin haberiniz olsun!</p>
                      <hr>
                      <input type="text" placeholder="Email Adresiniz..." name="email" required>
                        <div class="clearfix">
                         <button2 type="button" class="gonder">GÖNDER</button2>
                        </div>
                      </div>
                  </form>

                   
               
         </div>
         
         
      </div>
   <div class="footer">
     <h2>ENGLISH HOME</h2>
     <p>Dil Seçiniz:</p>
     <input type="text" class="turkce" placeholder="Türkçe"  name="dilsecim">
     <input type="text" class= "konum" placeholder="Türkiye"  name="dilsecim">
      <div class="ulke">
         <p>Ülke Seçiniz:</p>
          

      </div>
    
      <div class="altfooter">
         <div class="musteri">
           <p>MÜŞTERİ HİZMETLERİ</p>
           <p class="numara">0850 724 0 346</p>
         </div>
         <div class="social">

           <img src="../assets/social.png" style="cursor:pointer">
         </div>

         <div class="copy">
           <p>Copyright © 2008-2019 ENGLISH HOME, Her hakkı saklıdır.</p>
         </div>  
         <div class="appstore"> 
            <img src="../assets/app_store.png" style="cursor:pointer">
         </div> 
         <div class="googleplay"> 
           <img src="../assets/google_play.png" style="cursor:pointer">
         </div> 
      </div> 
   </div>

</footer>



      
     


   


 
  
</template>

<script>


</script>

<style>

* {box-sizing: border-box}



.row{
   border:1px#d8d8d8;
   width:900px;
   height: 300px;
   float: left;
   border-top-style: solid;
   border-right-style: solid;
   position: relative;
   left:-120px;
   top:-350px;

   
}

/* Full-width input fields */
input[type=text] {
  height: 40px;; 
  width: 200px;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  background: #f1f1f1;
  position: relative;
  bottom:300px;
  left:20px;
}


.container h1{
  font-size:12px;
  font-weight: thin;
  color:grey;
  position: relative;
  bottom:280px;
  right:30px;
}
.container p{
  font-size:14px;
  font-weight: thin;

  position: relative;
  bottom:280px;
  left:57px;
}

/*EPOSTA*/
hr {
  
  margin-bottom: 25px;
  
}
.mail{
   border:1px none#d8d8d8;
   width:463px;
   
   position: relative;
   left: 900px;
   top:-286px;

   
}
.mail h1{
   position: relative;
   top:90px;
   left:-147px;
   color: black;
   font-size: 15px;
}
.mail p{
   position: relative;
   top:100px;
   left:-60px;
   color: #333;
   font-size: 15px;
}
.mail input{
   position: relative;
   top:80px;
   left:-80px;
}

.gonder{
  background-color: #f6f4ee;
  color: black;
  padding: 7px 5px;
  margin: 8px 0;
  width:110px;
  cursor: pointer;
  position: relative;
  float:right;
  bottom:-10px;
  left:-103px;
}

.gonder:hover {
  opacity:1;
  background: #012B5D;
  color:#fff;
}

.footercontent
{
   width:100%;
   height:100vh;
   background-color:white;
   margin: 0px 0px;
}

p.numara{
  margin:0px 10px;
  font-weight: bold;
}
.col-md-2{
   position:relative;
   bottom:600px;
}
.liste4 {
   position: relative;
   float:left;
   left:100px;
   bottom:300px;
   font-size:14px;
}


 .liste{
    position: relative;
    float:left;
    top:650px;
    left:100px;
    font-size:14px;
    text-decoration:none;
    text-align:initial;
    
 }
 .liste2{
    position: relative;
    float:left;
    left:200px;
    top:650px;
    font-size:14px;
    text-decoration:none;
    text-align:initial;
    
 }
 .liste3{
    position: relative;
    float:left;
    left:300px;
    top:650px;
    font-size:14px;
    text-decoration:none;
    text-align:initial;
 }
 .altfooter .musteri {
    color:black;
    position:relative;
    float:left;
    top:50px;
    right:300px;
   }
   

 .altfooter .googleplay{
    position:relative;
    float:right;
    top:55px;
    left:550px;
 }
 .altfooter .appstore{
    position:relative;
    float:right;
    top:50px;
    left:250px;
 }
 .altfooter .social{
    position:relative;
    float:left;
    top:55px;
    left:350px;
 }

 .altfooter .copy {
     position:relative;
     float:right;
     top:100px;
     right:800px;
    
    }
   
 .copy p{
    
    font-size:14px;
    font: inherit;
    color: #333;
    position: relative;
    top:0px;
    
    
 }

 .footer .ulke p{
   position:absolute;
   float:left;
   left:950px;
   bottom:50px;
 }


 .footer .turkce{
    background:#012B5D;
    left:80px;
    top:10px;


 }
 .footer .konum{
    background:#012B5D;
    left:240px;
    top:10px;
 }
 
 


.footer {
   
   position: absolute;
   left: 0px;
   top:3620px;
   height: 60px;
   width: 100%;;
   background-color: #012B5D;
   color: white;
   margin-top:30px;
   
   
}
.altfooter {


    position:absolute;
    top:6500;
}
.footer h2{
    float:left;
    font-size: 25px;
    font-weight: thin;
    font-family: icomoon!important;
    position: relative;
    left:120px;
    top:25px;
}

.footer p{
    float:left;
    font-size: 15px;
    font-weight: thin;
    font-family: tahoma;
    position: relative;
    text-align: center;
    left:420px;
    top:20px;
}
</style>