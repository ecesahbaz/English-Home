<template>
  <div class="urunsayfasi" @click="openModal">
    <b-modal id="modal-1" hide-footer="true" hide-header="true" size="sm" body-bg-variant="light" title="BootstrapVue">
      <p class="my-4"><sweetalert-icon="loading" /> </p>
    </b-modal> 
    <div class="ustbilgi">
      <h3>Vanity Rose Pamuklu 2'li Yastık Kılıfı 50x70 Cm Pembe</h3>
      <span class="ustkampanya">Özel Fiyat</span>
      <span class="ustucret">₺ 19,99</span>
      <button type="button">SEPETE EKLE</button>
    </div>
    <p>75 TL ve Üzeri Alışverişlerinizde KARGO BEDAVA!</p>
    <img class="urunresim" :src="img" style="width:650px; height:503px;" >
    <div class="urunresim2">
      <button @click="img = img1"  type="button" id="buton-a">
        <img :src="img1" style="width:65px; height:65px;">
      </button>
    </div>
    <div class="urunresim3">
       <button @click="img = img2" type="button" id="buton-b">
         <img :src="img2"   style="width:65px; height:65px;">
       </button>
    </div>
     <div class="urunresim4">
       <button @click="img = img3" type="button" id="buton-c">
         <img :src="img3" style="width:65px; height:65px;">
       </button>
    </div>
    <div class="paylas">
      <p>Paylaş</p>
      <img src="../assets/paylas.png">
    </div>


    <div class="urunbilgisi">
      <div class="sayfayon">
        <a class="yon1" href="anasayfa"><span>Anasayfa<i class="fa fa-angle-right"></i></span></a>
        <a class="yon2" href="yatakodasi"><span>Yatak Odasi<i class="fa fa-angle-right"></i></span></a>
        <a class="yon3" href="yastikkilifi"><span>Yastık Kılıfı</span></a>
      </div>
      <h2>Vanity Rose Pamuklu 2'li Yastık Kılıfı 50x70 Cm Pembe</h2>
      <div class="fiyat">
        <span class="kampanya">Özel Fiyat</span>
        <span class="ucret">₺ 19,99</span>
      </div>
      <div class="butons">   
        <button type="button" style="outline:none" id="buton1" @click="azalt">-</button>
        <input type="number" style="margin-left:360px; margin-top:150px; width:40px; padding-left: 0px;background-color:white; border:none; outline:none" v-model="adet" disabled>
        <p style="width:5px; background:transparent; margin-left:710px; margin-top:70px; color:#333;">adet</p>
        <button type="button" style="outline:none" id="buton2" @click="arttir">+</button>

      </div>
      <div class="butonkısım">
        <button type="button">SEPETE EKLE</button>
        <img src="../assets/urunkalp.png">
        
      </div>
      <div class="haber">
        <img src="../assets/haberres.png">
        <span>Fiyat düşünce haber ver</span>
      </div>
      <div class="bilgi">
        <div class="title">
          <p>ÜRÜN BİLGİLERİ</p>
          <span>10024691001</span>
        </div>
        <ul>
          <li>Desen: Vanity Rose</li>
          <li>Renk: Pembe</li>
          <li>Ebat: 50x70 cm</li>
          <li>Koleksiyon/Tema: Summer Stories</li>
          <li>Ürün Bileşimi: %100 Pamuk</li>
          <li>Ürün Tarifi: 2'li</li>
          <li>Üretim Yeri: Türkiye</li>
          <li>Ürün Kodu: 10024691001</li>
          <li>Ürün Barkodu: 8680886846088</li>

        </ul>
        <div class="iptal">
          <span>İPTAL VE İADE KOŞULLARI</span>
          <b-button v-b-toggle.collapse-2 class="m-1" style="background:hsla(45,31%,95%,.6); color:#333; border-style:none;">+</b-button>

          <b-collapse id="collapse-2">
            <b-card class="yazi1">
              <ul>
                <li>İPTAL İÇİN;</li>
                <li>- Siparişinizi oluşturduktan sonra 1 saat süresince iptal talebi yapabilirsiniz.</li>
                <li>- Siparişlerim menüsüne giderek, sipariş detayınızda yer alan İPTAL TALEBİ YAP butonuna tıklamanız yeterlidir.</li>
                <li>İADE İÇİN;</li>
                <li>- İade yapabilmek için üyeliğinize giriş yaparak "Üyelik Bilgilerimden", iadelerim seçeneğini tercih ederek "Yeni İade Talebi Yap" butonunu tıklamanız gerekmektedir.</li>
                <li>- İade edeceğiniz ürünü faturanız ile beraber, bu kodu ileterek Yurtiçi Kargoya teslim edebilirsiniz.</li>
              </ul>

            </b-card>
            
          </b-collapse>
        </div>
        <div class="magazadetay">
          <span>HANGİ MAĞAZADA VAR</span>
          <p>Mağazalardaki stok durumu anlık olarak değişebilir. Lütfen mağazayla iletişime geçiniz.</p>
          <div class="sehir">
            
            <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
            <button type="button" id="buton4">GÖSTER</button>
            
                 
          </div>
        </div>
        <div class="taksit">
          <span>TAKSİT SEÇENEKLERİ</span>
          <b-button v-b-toggle.collapse-3 class="m-2" style="background:hsla(45,31%,95%,.6); color:#333; border-style:none;">+</b-button>
          <b-collapse id="collapse-3">
            <b-card class="taksitsecenek">
              <img src="../assets/taksit.png">
            </b-card>
            
          </b-collapse>
        </div>
        <div class="isaret">
          <img src="../assets/isaret.png">
        </div>

      </div>
    
    </div>
    
  </div>
  
</template>
<script>  /*şehirlistesiiçin*/
export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Şehir Seçiniz' },
          { value: 'a', text: 'Artvin' },
          { value: 'b', text: 'Bursa' },
          { value: { C: '3PO' }, text: 'İstanbul' },
          { value: 'd', text: 'Yalova', disabled: true }
        ],
        img: require('../assets/urunresmi.jpg'),   /*küçük resimleri değiştirmek için img i data ya yazdık*/
        img1: require('../assets/urunresmi.jpg'),
        img2: require('../assets/urunresmi2.jpg'),
        img3: require('../assets/urunresmi3.jpg'),
        adet: 1
      }
    },
    methods:{  /*azaltıp artması için method oluşturuldu*/
      azalt(){
        if(this.adet > 1){
          this.adet--
        }
      },
      arttir(){
        this.adet++
      },
      
      openModal(){
        this.$bvModal.show('modal-1')
        var v = this;
        setTimeout(function(){
          v.$bvModal.hide('modal-1')
        },1000)
      }
    
    }
  }
</script>

<style>
.ustbilgi{
  border:1px solid;
  background: white;
  width: 650px;
  height: 100px;
  position: fixed;
  top:110px;
  left:90px;
  z-index: 2;

}
.ustbilgi h3{
  font-size:20px;
  position: absolute;
  top:10px;
  left:50px;
}
.ustbilgi button{
  background: #4688d7;
  border:1px solid;
  width: 250px;
  height: 40px;
  color: #fff;
  position: absolute;
  top:50px;
  left:380px;
}
.ustbilgi button:hover{
  background: black;
}

.ustkampanya{
  border:1px solid #ff505f;
  color: #ff505f;
  border-right-style: none;
  position: absolute;
  top:60px;
  left:220px;
}
.ustucret{
  border:1px solid #ff505f;
  color: #ff505f;
  border-left-style: none;
  width: 90px;
  position: absolute;
  top:60px;
  left:280px;
}
.urunsayfasi p{
  padding:0px 90px;
  margin:0px;
  background:#f6f4ee;
  height: 40px;
  font-weight:thin; 
  font-size:15px;
  font-family: BrandonText;
  color:blue;
  position: relative;
  left:30px;
  top:-70px;
}

.urunsayfasi img{
  position:absolute;
  left:90px;
  top:140px;
}
.yon1{
  color: #4a4a4a;
  cursor: pointer;
  outline: none;
  font-size:12px;
  position:absolute;
  right:400px;
  top:160px;
}
.yon2{
  color: #4a4a4a;
  cursor: pointer;
  outline: none;
  font-size:12px;
  position:absolute;
  right:315px;
  top:159px;
}
.yon3{
  color: #4a4a4a;
  cursor: pointer;
  outline: none;
  font-size:12px;
  position:absolute;
  right:248px;
  top:158px;
}
.yon1:hover{
  color:#ad8b4f;
}
.yon2:hover{
  color:#ad8b4f;
}
.yon3:hover{
  color:#ad8b4f;
}
.fa-angle-right{
  position: relative;
  top:3px;
}
.urunbilgisi h2{
  font-size: 24px;
  line-height: 1.1;
  text-align: center;
  font-family: BrandonText,sans-serif;
  font-weight: 700;
  width: 500px;
  position: absolute;
  left:755px;
}
.fiyat{
  border:1px solid #ff505f;
  color: #ff505f;
  display: inline-block;
  width: 160px;
  height: 35px;
  padding: 0 6px;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  right:270px;
  top:280px;
}
.kampanya{
  color: #ff505f;
  font-size: 14px;
  font-weight: 500;
  width: 100px;
  position: absolute;
  right:270px;
  top:5px;
  
}
.ucret{
  color: #ff505f;
  font-size: 18px;
  margin-left: 10px;
  width: 100px;
  position: absolute;
  right:270px;
  top:1px;
}
.butonkısım button{
  background: #4688d7;
  border:1px solid;
  width: 250px;
  height: 40px;
  color: #fff;
  position:absolute;
  top:340px;
  right:180px;
}
.butonkısım button:hover{
  background:#333;
}
.butonkısım img{
  position: absolute;
  left:1190px;
  top:333px;
  cursor:pointer;
}
#buton1{
  border: 1px solid #9b9b9b;
  background:#fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  left:770px;
  top:340px;
}
#buton2{
  border: 1px solid #9b9b9b;
  background:#fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  left:870px;
  top:340px;
}
.haber{
  padding: 15px 30px;
  margin-top: 35px;
  font-size: 15px;
  font-weight: 700;
  width:500px;
  height:55px;
  color: #4688d7;
  background-color: hsla(45,31%,95%,.6);
  position: absolute;
  left:760px;
  top:370px;
  
  
}
.haber img{
  position: absolute;
  left:30px;
  top:20px;
  cursor: pointer;
}

.haber span{
  color: #337ab7;
  font:bold;
  font-size:16px;
  font-weight: 400px;
  text-decoration: none;
  position: absolute;
  left:70px;
  top:20px;
  cursor: pointer;
}
.bilgi{
  width:500px;
  height: 720px;
  background-color: hsla(45,31%,95%,.6);
  position: absolute;
  left:760px;
  top:500px;
}
.title p{
  color: #002b5c;
  text-align: left;
  font-size: 15px;
  font-family: Arial;
  font-weight: 700;
  padding: 15px 0;
  position: absolute;
  left:40px;
  top:1px;
}
.title span{
  color: #002b5c;
  float: right;
  font-weight: 400;
  position: absolute;
  left:350px;
  top:20px;
}
.bilgi ul li{
  position: relative;
  top:70px;
  left:45px;
  font-size:13px;
  text-align:initial;
  line-height: 2.2;
  margin: 0;
  padding: 0;
  border: 0;
  font-family:Arial;
  vertical-align: baseline;
  display: list-item;
  color: #4a4a4a;
  list-style-type:none;
}
.iptal{
  border:1px grey;
  border-style: none;
  border-top-style: solid;
  border-bottom-style: solid;
  height:90px;
  width: 430px;
  position: relative;
  top:70px;
  left:30px;
}
.iptal span{
  font-size: 16px;
  font-weight:bold;
  padding: 15px 0;
  color: #002b5c;
  position: absolute;
  left:3px;
  top:20px;
  cursor: pointer;
}
.m-1{
  position: absolute;
  left:383px;
  top:20px;

}
.yazi1{
  background-color: hsla(45,31%,95%,.6);
  height: 400px;
  position: absolute;
  left:3px;
  top:60px;
  z-index: 2;
  text-align: left;
}
.yazi1 ul li{
  
  position: relative;
  top:30px;
  left:5px;
  font-size:13px;
  text-align:initial;
  line-height: 2.2;
  margin: 0;
  padding: 0;
  border: 0;
  font-family:Arial;
  vertical-align: baseline;
  display: list-item;
  color: #4a4a4a;
  list-style-type:none;
  
}
.magazadetay{
  border:1px grey;
  border-style: none;
  border-top-style: solid;
  border-bottom-style: solid;
  height:200px;
  width: 400px;
  position: relative;
  top:70px;
  left:30px;
}
.magazadetay span{
  font-size: 16px;
  font-weight:bold;
  padding: 15px 0;
  color: #002b5c;
  position: absolute;
  left:3px;
  top:20px;
  cursor: pointer;
}
.magazadetay p{
  font-size: 14px;
  color: #4a4a4a;
  width:550px;
  position: absolute;
  left:-87px;
  top:70px;
  text-align:initial;
}
.sehir{
  position: relative;
  left:-343px;
  top:75px;
  width: 130px;
  height:60px;
  outline: none;
  border:none;
  

}
#buton4{
  background: #4688d7;
  border:1px solid;
  width: 200px;
  height: 40px;
  color: #fff;
  position:absolute;
  top:50px;
  right:-590px;
}
#buton4:hover{
  background:black;
}
.taksit{
  border:1px grey;
  border-style: none;
  border-top-style: solid;
  height:50px;
  width: 430px;
  position: relative;
  top:70px;
  left:50px;
}
.taksit span{
  font-size: 16px;
  font-weight:bold;
  padding: 15px 0;
  color: #002b5c;
  position: absolute;
  left:1px;
  top:20px;
  cursor: pointer;
}
.m-2{
  position: absolute;
  left:363px;
  top:10px;
}
.taksitsecenek{
  background-color: hsla(45,31%,95%,.6);
  height: 236px;
  position: absolute;
  left:-43px;
  top:60px;
  z-index: 2;
  
}
.taksitsecenek img{
  position: absolute;
  left:3px;
  top:0px;
  cursor: pointer;
}
.urunresim2{
  border:1px solid hsla(45,31%,95%,.6);;
  width: 100px;
  height: 100px;
  position: absolute;
  left:300px;
  top:680px;

}
#buton-a{
  width: 70px;
  height: 70px;
  position: absolute;
  left:15px;
  top:15px;
}
#buton-a:hover{
  border-bottom-color:#002b5c;
}

.urunresim2 img{
  position: absolute;
  left:0px;
  top:0px;
}
.urunresim3{
  border:1px solid hsla(45,31%,95%,.6);;
  width: 100px;
  height: 100px;
  position: absolute;
  left:420px;
  top:680px;

}
#buton-b{
  
  width: 70px;
  height: 70px;
  position: absolute;
  left:15px;
  top:15px;
}
#buton-b:hover{
  border-bottom-color:#002b5c;
}
.urunresim3 img{
  position: absolute;
  left:0px;
  top:0px;
}

.urunresim4{
  border:1px solid hsla(45,31%,95%,.6);;
  width: 100px;
  height: 100px;
  position: absolute;
  left:540px;
  top:680px;

}
#buton-c{
  width: 70px;
  height: 70px;
  position: absolute;
  left:15px;
  top:15px;
}
#buton-c:hover{
  border-bottom-color:#002b5c;
}
.urunresim4 img{
  position: absolute;
  left:0px;
  top:0px;
}

.paylas p{
  background:#fff;
  color: #5c97dc;
  margin-right: 10px;
  position: absolute;
  left:320px;
  top:800px;
}
.paylas img{
  position: absolute;
  left:470px;
  top:795px;
  cursor: pointer;
}
.isaret img{
  position: absolute;
  left:200px;
  top:770px;
}

</style>