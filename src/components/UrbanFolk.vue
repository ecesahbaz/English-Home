<template>
    <div class="urban-f">
        <div class="p">
          75 TL Üzeri Alışverişlerinizde KARGO BEDAVA!
        </div>
        <div class="ustbaslik">
            <span>Anasayfa</span>
            <p>(814 ürün)</p>
        </div>
        <div class="altbaslik">
            <div id="kategori">
                <h2>KATEGORİLER</h2>
            </div>
            <div class="goruntuleme">
                <span><router-link to="/urban-urunsayfa">GÖRÜNTÜLE</router-link></span>
                <div class="urun">
                    <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
                </div>
                <p>SIRALA</p>
                <div class="gelismis-siralama">
                    <b-form-select v-model="selected2" :options="options2" size="sm" class="mt-3"></b-form-select>
                </div>
                <div class="overflow-auto" style="position:relative; bottom:250px; left:1030px;">
                    <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
                </div>
                <div class="kate" >
                    <ul>
                       <li ><a href="#" style="color:#333;"><router-link to="/yatakodası" style="color:#333;"> YATAK ODASI</router-link></a></li>
                       <li><a href="#" style="color:#333;">MUTFAK</a></li>
                       <li><a href="#" style="color:#333;">BANYO</a></li>
                       <li><a href="#" style="color:#333;">SALON</a></li>
                       <li><a href="#" style="color:#333;">DEKORASYON</a></li>
                       <li><a href="#" style="color:#333;">BEBEK&ÇOCUK</a></li>
                       <li><a href="#" style="color:#333;">GİYİM</a></li>
                    </ul>
                </div>
                <div class="filtre">
                    <span>FİLTRELER</span>
                    <p>RENK</p>
                    <button class="b1" type="button"></button>
                    <button class="b2" type="button"></button>
                    <button class="b3" type="button"></button>
                    <button class="b4" type="button"></button>
                    <button class="b5" type="button"></button>
                    <button class="b6" type="button"></button>
                    <button class="b7" type="button"></button>
                    <button class="b8" type="button"></button>
                    <button class="b9" type="button"></button>
                    <button class="b10" type="button"></button>
                    <button class="b11" type="button"></button>
                    <button class="b12" type="button"></button>
                    <button class="b13" type="button"></button>
                    <button class="b14" type="button"></button>
                    <button class="b15" type="button"></button>
                    <button class="b16" type="button"></button>

                </div>
                <span class="olcu">ÖLÇÜ</span>
                <div class="olcu-tab">
                    <span>Çift Kişilik</span>
                </div>
                <div class="olcu-tab2">
                    <span>Tek Kişilik</span>
                </div>
                <div class="olcu-tab3">
                    <span>King Size</span>
                </div>
                <div class="olcu-tab4">
                    <span>Standart</span>
                </div>
                <span class="fiyat-filtre">FİYAT</span>
                <div class="fiyat-tab">
                    <span >25₺ ALTI ÜRÜNLER</span>
                </div>
                <div class="fiyat-tab2">
                    <span>26₺-50₺</span>
                </div>
                <div class="fiyat-tab3">
                    <span>51₺-75₺</span>
                </div>
                <div class="fiyat-tab4">
                    <span>76₺-100₺</span>
                </div>
                <div class="fiyat-tab5">
                    <span>101₺-150₺</span>
                </div>
                <div class="fiyat-tab6">
                    <span>151₺-200₺</span>
                </div>
                <div class="fiyat-tab7">
                    <span>201₺-300₺</span>
                </div>
                <div class="fiyat-tab8">
                    <span>300₺ ÜZERİ ÜRÜNLER</span>
                </div>
                
            </div>
            <div class="images" >
                <div class="overlay"><router-link to="/urban-urunsayfa">SEPETE EKLE</router-link></div>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/09/30/155721/e28560b1-d917-4f0f-a901-d18599dde5d5_size365x273_cropCenter.jpg" alt="product image" 
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >   
                    
                    <b-card-text style="font-size:13px;">
                        Rosery Pamuklu Çift Kişilik Nevresim Takımı 200x220 Cm Mavi
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺129,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/10/16/155714/781d9044-84f4-477f-b4ff-f08ffdcec091_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-a"
                >
                    <b-card-text style="font-size:13px;">
                        Urban Liberty Pamuklu Çift Kişilik Nevresim Takımı 200x220
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺129,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/08/23/152035/bf214249-930a-4927-962a-9a9b18d3d491_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-b"
                >
                    <b-card-text style="font-size:13px;">
                        
                        Urban Check Pamuklu Çift Kişilik Nevresim Seti 200x220 Cm Mavi
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺109,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/09/30/152978/cc3cfacf-bb5c-438d-bfcf-2c98a5078a38_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-c"
                >
                    <b-card-text style="font-size:13px;">
                        Softy Düz Çift Kişilik Battanıye 200x220 Cm Bej - Yeşil
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺89,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/10/11/152952/5d70ed5c-fa6f-4629-87f6-66e8f73f8001_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-d"
                >
                    <b-card-text style="font-size:13px;">
                        Etnich Akrilik Tv Battanıye 130x170 Cm Tarçın
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺59,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/10/11/152951/2763911d-0994-4e5d-9321-e3f5e67a22fd_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-e"
                >
                    <b-card-text style="font-size:13px;">
                        Urban Diamond Akrilik Tv Battanıye 130x170 Cm Yeşil
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺59,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/09/25/150932/92c0c34b-4ffd-4120-b357-b2ed04722538_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-f"
                >
                    <b-card-text style="font-size:13px;">
                        Folk Art Cam Tekli Sürahı 1180 Ml Amber
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺29,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/09/25/150928/fc1fff1d-5deb-4175-9303-169db1cfda9b_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-g"
                >
                    <b-card-text style="font-size:13px;">
                        Urbann Cam Tekli Sürahı 1180 Ml Mavi
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺29,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/09/27/150937/e71cacf5-ee3b-4255-b905-aa975bc4940f_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-h"
                >
                    <b-card-text style="font-size:13px;">
                        Urbann Cam 3'lü Ayaklı Meşrubat Bardağı 330 Ml Mavi
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺29,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/08/05/151206/9377ae1e-b4a2-42c8-81fa-381f906c1a74_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-i"
                >
                    <b-card-text style="font-size:13px;">
                        Liberty New Bone 2'li Kupa 250 Ml Kırmızı - Beyaz - Lacivert
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺34,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/08/05/151202/6a700f87-4005-44d2-87f4-0d6b829c1c5d_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-j"
                >
                    <b-card-text style="font-size:13px;">
                        Folk Art New Bone 2'li Kupa 250 Ml Gri
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺34,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/09/05/151297/dcafac55-d0fc-46f7-9642-22148d33c7a1_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-k"
                >
                    <b-card-text style="font-size:13px;">
                        İris Porselen 2'li Çay Fıncanı Takımı 200 Ml Mor - Lila
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺69,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/09/05/151294/ba4d9896-39bb-49a1-bf04-76210d18a7e9_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-l"
                >
                    <b-card-text style="font-size:13px;">
                        Urbann Porselen 2'li Çay Fıncanı Takımı 200 Ml Renkli
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺69,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/09/16/156574/c3b8e516-4285-4b97-9112-8d2fc965550b_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-m"
                >
                    <b-card-text style="font-size:13px;">
                        Paisley Organızer 35x60 Cm Açık Bej
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺19,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/09/19/157058/8806fa79-330a-44dd-b60f-16c9c4760293_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-n"
                >
                    <b-card-text style="font-size:13px;">
                       Royal Banyo Paspası 60x90 Cm Mavi
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺39,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/08/23/156159/fbfc477b-d0a5-4e1d-b4d3-cdaf9eb272d9_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-o"
                >
                    <b-card-text style="font-size:13px;">
                       Ecocotton Iyra Organik Pamuk Bornoz L Yeşil
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺273,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/07/12/142878/7166bfb6-5146-4f22-8581-0a1bf876ff69_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-p"
                >
                    <b-card-text style="font-size:13px;">
                       Intense Pirinç Bayan Bornoz L-xl Koyu Gül Kurusu
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺119,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/07/04/142879/bcf185bb-9d1e-4bc3-a82a-15d12484ff84_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-r"
                >
                    <b-card-text style="font-size:13px;">
                       Intense Pirinç Erkek Bornoz M-l İndigo
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺119,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/09/03/153078/b2b4f3c3-5b55-4832-9b55-1c023d7c395d_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-s"
                >
                    <b-card-text style="font-size:13px;">
                       Urban Folk Dokuma Koltuk Şalı 120x160 Cm Hardal
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺69,99</span>
                </b-card>
                <b-card
                  img-src="https://cdn-eh.akinon.net/products/2019/09/03/153079/47d3526e-751a-4475-8717-ca77fb3f0d35_size365x273_cropCenter.jpg" alt="product image"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2-t"
                >
                    <b-card-text style="font-size:13px;">
                       Tiles Dokuma Koltuk Şalı 120x160 Cm Gri
                    </b-card-text>

                    <span class="image1f">Özel Fiyat ₺69,99</span>
                </b-card>
            </div>
        </div>
    </div>

</template>


<script>
export default {
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
       
      }
    },
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Sayfada 48 ürün' },
          { value: 'a', text: 'Sayfada 24 ürün' },
          { value: { C: '3PO' }, text: 'Sayfada 120 ürün' },
        ],
        selected2: null,
        options2: [
          { value: null, text: 'Gelişmiş Sıralama' },
          { value: 'a', text: 'Artan Fiyat' },
          { value: 'b', text: 'Azalan Fiyat' },
          { value: 'c', text: 'Yeni Gelenler' },
          { value: { D: '3PO' }, text: 'Renge Göre Sırala' },
          { value: 'e', text: 'Stoklu Ürünler', disabled: true }
        ],
      
       }
       
    }
    
}
</script>


<style>
.overlay {
  position: absolute;
  bottom: 80px;
  left:370px;
  background: rgb(0, 0, 0);
  background: white;
  color: #f1f1f1;
  width: 250px;
  transition: .5s ease;
  opacity:0;
  color: blue;
  font-size: 20px;
  padding: 20px;
  text-align: center;
  z-index: 2;
  
}

.images:hover .overlay {
  opacity: 1;
  text-decoration: underline;
  cursor: pointer;
}
.images img:hover{
    -webkit-transform: scaleX(-1); 
    transform: scaleX(-1);
}
.mb-2{
    width: 270px;
    height:320px;
    position: relative;
    bottom:950px;
    left:360px;
}
.image1f{
  
    color:#ff505f;
    border:1px solid red;

}
.mb-2-a{
    width: 270px;
    height:320px;
    position: relative;
    bottom:1278px;
    left:650px;
}
.mb-2-b{
    width: 270px;
    height:320px;
    position: relative;
    bottom:1598px;
    left:940px;
}
.mb-2-c{
    width: 270px;
    height:320px;
    position: relative;
    bottom:1558px;
    left:360px;
}
.mb-2-d{
    width: 270px;
    height:320px;
    position: relative;
    bottom:1878px;
    left:650px;
}
.mb-2-e{
    width: 270px;
    height:320px;
    position: relative;
    bottom:2198px;
    left:942px;
}
.mb-2-f{
    width: 270px;
    height:320px;
    position: relative;
    bottom:2158px;
    left:360px;
}
.mb-2-g{
    width: 270px;
    height:320px;
    position: relative;
    bottom:2478px;
    left:652px;
}
.mb-2-h{
    width: 270px;
    height:320px;
    position: relative;
    bottom:2798px;
    left:944px;
}
.mb-2-i{
    width: 270px;
    height:320px;
    position: relative;
    bottom:2758px;
    left:362px;
}
.mb-2-j{
    width: 270px;
    height:320px;
    position: relative;
    bottom:3078px;
    left:655px;
}
.mb-2-k{
    width: 270px;
    height:320px;
    position: relative;
    bottom:3398px;
    left:948px;
}
.mb-2-l{
    width: 270px;
    height:320px;
    position: relative;
    bottom:3358px;
    left:362px;
}
.mb-2-m{
    width: 270px;
    height:320px;
    position: relative;
    bottom:3678px;
    left:657px;
}
.mb-2-n{
    width: 270px;
    height:320px;
    position: relative;
    bottom:3999px;
    left:950px;
}
.mb-2-o{
    width: 270px;
    height:320px;
    position: relative;
    bottom:3959px;
    left:362px;
}
.mb-2-p{
    width: 270px;
    height:320px;
    position: relative;
    bottom:4280px;
    left:660px;
}
.mb-2-r{
    width: 270px;
    height:320px;
    position: relative;
    bottom:4600px;
    left:953px;
}
.mb-2-s{
    width: 270px;
    height:320px;
    position: relative;
    bottom:4560px;
    left:363px;
}
.mb-2-t{
    width: 270px;
    height:320px;
    position: relative;
    bottom:4880px;
    left:663px;
}
.ustbaslik{
    width: 1150px;
    position: relative;
    left:100px;
}
.ustbaslik span{
   color:#4a4a4a;
   cursor: pointer;
   position: relative;
   left:-530px;
   bottom:50px;
}
.ustbaslik span:hover{
    text-decoration: underline;
}
.ustbaslik p{
    color:#4a4a4a;
    position: relative;
    left:-270px;
    bottom:80px;
}
#kategori{
   border:1px solid #333;
   border-left: none;
   border-right: none;
   border-bottom: none;
   position: relative;
   bottom:70px;
   left: 110px;;
   width:1150px;
}
#kategori h2{

   font-size: 16px;
   color: #4a4a4a;
   font-weight: 400;
   position: relative;
   top:15px;
   right: 520px;
}
.goruntuleme span{
   font-size: 16px;
   color: #4a4a4a;
   font-weight: 400;
   position: relative;
   bottom:85px;
   right: 265px
}
.goruntuleme p{
   font-size: 16px;
   color: #4a4a4a;
   font-weight: 400;
   position: relative;
   bottom:155px;
   left:130px;
}
.urun{
    width: 150px;
    position: relative;
    bottom:170px;
    left:200px;
    border:none;

}
.gelismis-siralama{
    width: 170px;
    border:none;
    position: relative;
    bottom:257px;
    left:500px;
}
.kate{
    border:1px solid;
    border-left: none;
    border-right: none;
    border-bottom:none;
    width:170px;
    position: relative;
    bottom:200px;
    left:110px;
}
.kate ul li{
    text-align: initial;
    list-style-type: none;
    line-height: 25px;
    
    position: relative;
    top:20px;
}
.filtre{
    border:1px solid;
    border-left: none;
    border-right: none;
    border-bottom:none;
    width:170px;
    position: relative;
    bottom:118px;
    left:110px;
}
.filtre span{
    font-size: 16px;
    color: #4a4a4a;
    font-weight: 400;
    position: relative;
    bottom:30px;
    right:40px;
}
.filtre p{
    font-size: 15px;
    color: #4a4a4a;
    font-weight: 400;
    position: relative;
    bottom:0px;
    left:-60px;
}
.b1{
  border: 1px solid #fff;
  background:#1480b9;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  bottom:0px;
  left:0px;

}
.b2{
  border: 1px solid white;
  background:#eccdcd;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  bottom:0px;
  left:10px;

}
.b3{
  border: 1px solid white;
  background:#e7daba;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  bottom:0px;
  left:20px;

}
.b4{
  border: 1px solid white;
  background:#9f9ea3;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  bottom:0px;
  left:30px;

}
.b5{
  border: 1px solid white;
  background: #f8f9fb;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top:50px;
  right:124px;

}
.b6{
  border: 1px solid white;
  background: #7043c3;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top:14px;
  left:40px;

}
.b7{
  border: 1px solid white;
  background: #56221c;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top:14px;
  left:50px;

}
.b8{
  border: 1px solid white;
  background: #153c28;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top:14px;
  left:60px;

}
.b9{
  border: 1px solid white;
  background: #f38230;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top:60px;
  left:-92px;

}
.b10{
  border: 1px solid white;
  background:#f2eddb;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top:58px;
  left:-80px;

}
.b11{
  border: 1px solid white;
  background: #ffe63f;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top:23px;
  left:80px;

}
.b12{
  border: 1px solid white;
  background: #041f5a;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top:23px;
  left:90px;

}
.b13{
  border: 1px solid white;
  background: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top:70px;
  left:-70px;

}
.b14{
  border: 1px solid white;
  background: #90091d;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top:70px;
  left:-50px;

}
.b15{
  border: 1px solid white;
  background: #e4181d;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top:70px;
  left:-38px;

}
.b16{
  border: 1px solid white;
  background: #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top:34px;
  left:60px;

}
.olcu {
  font-size: 13px;
  float:left;
  position: relative;
  top:-30px;
  left:120px;
  
}
.olcu-tab{
  border:1px solid #ddd;  
  width: 180px;
  height: 32px;
  position: relative;
  left:121px;
  top:10px;
  cursor: pointer;
}
.olcu-tab span{
  font-size: 15px;
  position: relative;
  top:5px;
  left:-20px;
  cursor: pointer;
}
.olcu-tab2{
  border:1px solid #ddd;  
  width: 180px;
  height: 32px;
  position: relative;
  left:121px;
  top:20px;
  cursor: pointer;
}
.olcu-tab2 span{ 
  font-size: 15px;
  position: relative;
  top:5px;
  left:2px;
  cursor: pointer;
}
.olcu-tab3{
  border:1px solid #ddd;  
  width: 180px;
  height: 32px;
  position: relative;
  left:121px;
  top:30px;
  cursor: pointer;
}
.olcu-tab3 span{
  font-size: 15px;
  position: relative;
  top:5px;
  left:2px;
  cursor: pointer;
}
.olcu-tab4{
  border:1px solid #ddd;  
  width: 180px;
  height: 32px;
  position: relative;
  left:121px;
  top:40px;
  cursor: pointer;
}
.olcu-tab4 span{
  font-size: 15px;
  position: relative;
  top:5px;
  left:0px;
  cursor: pointer;
}
.fiyat-filtre{
  font-size: 13px;
  float:left;
  position: relative;
  top:70px;
  left:120px;
}
.fiyat-tab{
  border:1px solid #ddd;  
  width: 180px;
  height: 32px;
  position: relative;
  left:121px;
  top:110px;
  cursor: pointer;
}
.fiyat-tab span{
  font-weight: 400;
  font-size: 14px;
  position: relative;
  top:5px;
  right:20px;
  cursor: pointer;
}
.fiyat-tab2{
  border:1px solid #ddd;  
  width: 180px;
  height: 32px;
  position: relative;
  left:121px;
  top:120px;
  cursor: pointer;
}
.fiyat-tab2 span{
  width: 100px;
  font-size: 14px;
  position: relative;
  top:5px;
  right:0px;
  cursor: pointer;
}
.fiyat-tab3{
  border:1px solid #ddd;  
  width: 180px;
  height: 32px;
  position: relative;
  left:121px;
  top:130px;
  cursor: pointer;
}
.fiyat-tab3 span{
  width: 100px;
  font-size: 14px;
  position: relative;
  top:5px;
  right:0px;
  cursor: pointer;
}
.fiyat-tab4{
  border:1px solid #ddd;  
  width: 180px;
  height: 32px;
  position: relative;
  left:121px;
  top:140px;
  cursor: pointer;
}
.fiyat-tab4 span{
  width: 100px;
  font-size: 14px;
  position: relative;
  top:5px;
  right:0px;
  cursor: pointer;
}
.fiyat-tab5{
  border:1px solid #ddd;  
  width: 180px;
  height: 32px;
  position: relative;
  left:121px;
  top:150px;
  cursor: pointer;
}
.fiyat-tab5 span{
  width: 100px;
  font-size: 14px;
  position: relative;
  top:5px;
  right:0px;
  cursor: pointer;
}
.fiyat-tab6{
  border:1px solid #ddd;  
  width: 180px;
  height: 32px;
  position: relative;
  left:121px;
  top:160px;
  cursor: pointer;
}
.fiyat-tab6 span{
  width: 100px;
  font-size: 14px;
  position: relative;
  top:5px;
  right:0px;
  cursor: pointer;
}
.fiyat-tab7{
  border:1px solid #ddd;  
  width: 180px;
  height: 32px;
  position: relative;
  left:121px;
  top:170px;
  cursor: pointer;
}
.fiyat-tab7 span{
  width: 100px;
  font-size: 14px;
  position: relative;
  top:5px;
  right:0px;
  cursor: pointer;
}
.fiyat-tab8{
  border:1px solid #ddd;  
  width: 180px;
  height: 32px;
  position: relative;
  left:121px;
  top:180px;
  cursor: pointer;
}
.fiyat-tab8 span{
  width: 100px;
  font-size: 14px;
  position: relative;
  top:5px;
  right:0px;
  cursor: pointer;
}
</style>


