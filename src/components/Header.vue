<template>
   
  <div class="menu-bar">
    
    <ul>
        <li>
          <router-link to="/"><h2>ENGLISH HOME</h2></router-link>
        </li>
      <li><a href="#">KATEGORİLER</a>
        <div class="sub-menu-1">
          <ul>
            <li>
              <b-button  class="hover-me"><a href="#"><router-link to="/yatakodası" @click="openModal">YATAK ODASI</router-link></a><i class="fa fa-angle-right"></i></b-button>

              <b-modal id="modal-1" hide-footer="true" hide-header="true" size="sm" body-bg-variant="light" title="BootstrapVue">
               <p class="my-4"><sweetalert-icon="loading" /> </p>
              </b-modal>    
              <div class="sub-menu-2" style="width:400px;">
                <ul class="menu1" style="list-style-type:none;">
                  <span>NEVRESİM TAKIMI</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Nevresim</a></li>
                  <li><a href="#">Nevresim Seti</a></li>
                  <li><a href="#">Çift Kişilik Nevresim Takımı</a></li>
                  <li><a href="#">Tek Kişilik Nevresim Takımı</a></li>
                  <li><a href="#">Battal Boy Nevresim Takımı</a></li>
                  <li><a href="#">Bebek Nevresim Takımı</a></li>
                  <li><a href="#">Çocuk Nevresim Takımı</a></li>
                  
                </ul>
                <ul class="menu2" style="list-style-type:none;">
                  <span>ÇARŞAF</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Tek Kişilik Çarşaf</a></li>
                  <li><a href="#">Çift Kişilik Çarşaf</a></li>
                  <li><a href="#">Battal Boy Çarşaf</a></li>
                  <li><a href="#">Lastikli Çarşaf</a></li>
                  <li><a href="#">Çarşaf Takımı</a></li>
                  <li><a href="#">Bebek Çarşafı</a></li>
                  <li><a href="#">Alezler</a></li>

                </ul>
                <ul class="menu3" style="list-style-type:none;">
                  <span>YASTIK</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Ortopedik Yastık</a></li>
                  <li><a href="#">Bebek Yastığı</a></li>
                  <li><a href="#">Kaz Tüyü Yastık</a></li>
                  <li><a href="#">Silikon Yastık</a></li>
                  <li><a href="#">Yastıklar</a></li>
                  <li><a href="#">Yastık Kılıfları</a></li>
                </ul>
                <ul class="menu4" style="list-style-type:none;">
                  <span>YATAK ÖRTÜSÜ</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Yatak Örtüsü Takımı</a></li>
                  <li><a href="#">Çok Amaçlı Yatak Örtüsü</a></li>
                  <li><a href="#">Tek Kişilik Yatak Örtüsü</a></li>
                  <li><a href="#">Çift Kişilik Yatak Örtüsü</a></li>
                  <li><a href="#">Çeyizlik Yatak Örtüsü</a></li>
                </ul>
                <ul class="menu5" style="list-style-type:none;">
                  <span>PİKE TAKIMI</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Tek Kişilik Pike Takımı</a></li>
                  <li><a href="#">Çift Kişilik Pike Takımı</a></li>
                  <li><a href="#">Bebek Pike Takımı</a></li>
                  <li><a href="#">Çocuk Pike Takımı</a></li>
                  <li><a href="#">Pike</a></li>
                </ul>
                <ul class="menu6" style="list-style-type:none;">
                  <span>YASTIK KILIFI</span>
                  
                </ul> 
                <ul class="menu7" style="list-style-type:none;">
                  <span>BATTANİYE</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Tek Kişilik Battaniye</a></li>
                  <li><a href="#">Çift Kişilik Battaniye</a></li>
                  <li><a href="#">Bebek Battaniyesi</a></li>
                  <li><a href="#">Çocuk Battaniyesi</a></li>
                  <li><a href="#">TV Battaniyesi</a></li>
                </ul>
                <ul class="menu8" style="list-style-type:none;">
                  <span>HURÇ</span>
                  
                </ul> 
                <ul class="menu9" style="list-style-type:none;">
                  <span>YORGAN</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Tek Kişilik Yorgan</a></li>
                  <li><a href="#">Çift Kişilik Yorgan</a></li>
                  <li><a href="#">Bebek Yorganı</a></li>
                  <li><a href="#">Yün Yorgan</a></li>
                  <li><a href="#">Kaz Tüyü Yorgan</a></li>
                  <li><a href="#">Pamuk Yorgan</a></li>
                  <li><a href="#">Microfiber Yorgan</a></li>
                  <li><a href="#">Yastık ve Yorgan Takımları</a></li>
                </ul> 
                <ul class="menu10" style="list-style-type:none;">
                  <span>YATAK</span>
                  
                </ul> 
                <ul class="menu11" style="list-style-type:none;">
                  <span>ALEZ</span>
                  
                </ul> 

              </div>
            </li>
            <li class="hover-me"><a href="#">MUTFAK</a><i class="fa fa-angle-right"></i>
              <div class="sub-menu-2">
                <ul class="m-menu1" style="list-style-type:none;">
                 <span>SOFRA</span>
                 <p>Tümünü Gör</p>
                 <li><a href="#">Tabak</a></li>
                 <li><a href="#">Kase</a></li>
                 <li><a href="#">Tepsi</a></li>
                 <li><a href="#">Bardak</a></li>
                 <li><a href="#">Termos Bardak</a></li>
                 <li><a href="#">Çay Takımı</a></li>
                 <li><a href="#">Kupa</a></li>
                 <li><a href="#">Fincan Takımı</a></li>
                 <li><a href="#">Servis&Sunum Ürünleri</a></li>
                 <li><a href="#">Şekerlik</a></li>
                 <li><a href="#">Çerezlik</a></li>
                 <li><a href="#">Çatal&Bıçak&Kaşık</a></li>
                 <li><a href="#">Sürahi</a></li>
                </ul> 
                <ul class="m-menu2" style="list-style-type:none;">
                 <span>MUTFAK GEREÇLERİ</span>
                 <p>Tümünü Gör</p>
                 <li><a href="#">Kesme Tahtası</a></li>
                 <li><a href="#">Mutfak Eşyaları</a></li>
                </ul> 
                <ul class="m-menu3" style="list-style-type:none;">
                 <span>MUTFAK TEKSTİLİ</span>
                 <p>Tümünü Gör</p>
                 <li><a href="#">Kurulama Bezi</a></li>
                 <li><a href="#">Tümünü Gör</a></li>
                 <li><a href="#">Mutfak Masa Örtüsü</a></li>
                 <li><a href="#">Amerikan Servis</a></li>
                </ul> 
                <ul class="m-menu4" style="list-style-type:none;">
                 <span>PİŞİRME</span>
                 <p>Tümünü Gör</p>
                 <li><a href="#">Tencere</a></li>
                 <li><a href="#">Fırın Kabı</a></li>
                 <li><a href="#">Kek Kalıbı</a></li>
                 <li><a href="#">Çaydanlık</a></li>
                 <li><a href="#">Barbekü Izgarası</a></li>
                </ul> 
                <ul class="m-menu5" style="list-style-type:none;">
                 <span>MUTFAK DÜZENLEME</span>
                 <p>Tümünü Gör</p>
                 <li><a href="#">Saklama Kabı</a></li>
                 <li><a href="#">Baharatlık</a></li>
                 <li><a href="#">Kavanoz</a></li>
                </ul> 
                <div class="mutfak">
                 <h2>FAVORİ ÜRÜNLER</h2>
                 <p>MUTFAK KATEGORİSİNDE EN BEĞENİLEN ÜRÜNLER BURADA!</p>
                 <img src="../assets/mutfak.jpg" style="cursor:pointer">

                </div>
              </div>
              
            </li>  
            <li class="hover-me"><a href="#">BANYO</a><i class="fa fa-angle-right"></i>
              <div class="sub-menu-2">
                <ul class="menu1" style="list-style-type:none;">
                  <span>BANYO AKSESUARLARI</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Klozet Seti</a></li>
                  <li><a href="#">Banyo Paspası</a></li>
                  <li><a href="#">Banyo Seti</a></li>
                  <li><a href="#">Banyo Gereçleri</a></li>
                </ul> 
                <ul class="menu2" style="list-style-type:none;">
                  <span>HAVLU</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Yüz Havlusu</a></li>
                  <li><a href="#">El Havlusu</a></li>
                  <li><a href="#">Plaj Havlusu</a></li>
                  <li><a href="#">Banyo Havlusu</a></li>
                  <li><a href="#">Ayak Havlusu</a></li>
                  <li><a href="#">Peştamal</a></li>
                </ul> 
                <ul class="menu3" style="list-style-type:none;">
                  <span>BORNOZ</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Kadın Bornoz</a></li>
                  <li><a href="#">Erkek Bornoz</a></li>
                  <li><a href="#">Çocuk Bornoz</a></li>
                </ul> 
                <div class="banyo">
                 <h2>FAVORİ ÜRÜNLER</h2>
                 <p>BANYO KATEGORİSİNDE EN BEĞENİLEN ÜRÜNLER BURADA!</p>
                 <img src="../assets/banyo.jpg" style="cursor:pointer">

                </div>

              </div>

            </li>
            <li class="hover-me"><a href="#">SALON</a><i class="fa fa-angle-right"></i>
              <div class="sub-menu-2">
                <ul class="s-menu1" style="list-style-type:none;">
                  <span>HALI</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Baskılı Halı</a></li>
                  <li><a href="#">Şönil Halı</a></li>
                  <li><a href="#">Dokuma Halı</a></li>
                  <li><a href="#">Jakarlı Halı</a></li>
                  <li><a href="#">Pamuk Halı</a></li>
                </ul> 
                <ul class="s-menu2" style="list-style-type:none;">
                  <span>PERDE</span>
                  
                </ul> 
                <ul class="s-menu3" style="list-style-type:none;">
                  <span>KİLİM</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Bambu Kilim</a></li>
                  <li><a href="#">Jakarlı Kilim</a></li>
                  <li><a href="#">Pamuklu Kilim</a></li>
                </ul> 
                <ul class="s-menu4" style="list-style-type:none;">
                  <span>MASA ÖRTÜSÜ</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Runner</a></li>
                  <li><a href="#">Örme Masa örtüsü</a></li>
                  <li><a href="#">Polyester Masa Örtüsü</a></li>
                  <li><a href="#">Pvc Masa Örtüsü</a></li>
                  <li><a href="#">Vinil Masa Örtüsü</a></li>
                  <li><a href="#">Baskılı Masa Örtüsü</a></li>
                  <li><a href="#">Dantelli Masa Örtüsü</a></li>
                  <li><a href="#">Amerikan Servis</a></li>
                </ul>
                <ul class="s-menu5" style="list-style-type:none;">
                  <span>PASPAS</span>
                  
                </ul>  
                <ul class="s-menu6" style="list-style-type:none;">
                  <span>SALON DEKORASYON</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Koltuk Şalı</a></li>
                  <li><a href="#">Gazetelik</a></li>
                  <li><a href="#">Dilsiz Uşak</a></li>
                  <li><a href="#">Sehpa</a></li>
                </ul> 
                <ul class="s-menu7" style="list-style-type:none;">
                  <span>KIRLENT</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Goblen Kırlent</a></li>
                  <li><a href="#">Çift Taraflı Kırlent</a></li>
                  <li><a href="#">Baskılı Kırlent</a></li>
                  <li><a href="#">Pamuklu Kırlent</a></li>
                  <li><a href="#">Kırlent Yastığı</a></li>
                </ul> 
                <ul class="s-menu8" style="list-style-type:none;">
                  <span>MOBİLYA</span>
                  
                </ul> 
                 <div class="salon">
                 <h2>FAVORİ ÜRÜNLER</h2>
                 <p>SALON KATEGORİSİNDE EN BEĞENİLEN ÜRÜNLER BURADA!</p>
                 <img src="../assets/salon.jpg" style="cursor:pointer">

                </div>

              </div>
            </li>
            <li class="hover-me"><a href="#">DEKORASYON</a><i class="fa fa-angle-right"></i>
              <div class="sub-menu-2">
                <ul class="menu1" style="list-style-type:none;">
                  <span>EV DEKORASYON</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Biblo</a></li>
                  <li><a href="#">Kapı önü Ağırlığı</a></li>
                  <li><a href="#">Mum</a></li>
                  <li><a href="#">Vazo</a></li>
                  <li><a href="#">Yapay Çiçek</a></li>
                  <li><a href="#">Çerçeve</a></li>
                  <li><a href="#">Fener</a></li>
                  <li><a href="#">Abajur</a></li>
                  <li><a href="#">Dekoratif Aksesuarlar</a></li>
                  <li><a href="#">Tablo</a></li>
                  <li><a href="#">Dekoratif Kutu</a></li>
                  <li><a href="#">Saksı</a></li>
                  <li><a href="#">Ayna</a></li>
                  <li><a href="#">Şamdan</a></li>
                  <li><a href="#">Mumluk</a></li>
                </ul> 
                <ul class="menu2" style="list-style-type:none;">
                  <span>EV GEREÇLERİ</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Düzenleyiciler</a></li>
                  <li><a href="#">Sepet</a></li>
                  <li><a href="#">Çamaşır Sepeti</a></li>
                  <li><a href="#">Takılık</a></li>
                  <li><a href="#">Hurç</a></li>
                  <li><a href="#">Alışveriş Çantası</a></li>
                </ul> 
                <ul class="menu3" style="list-style-type:none;">
                  <span>OFİS&KIRTASİYE</span>
                  
                </ul> 
                <ul class="menu4" style="list-style-type:none;">
                  <span>PET ÜRÜNLERİ</span>
                 
                </ul> 
                <div class="dekorasyon">
                 <h2>FAVORİ ÜRÜNLER</h2>
                 <p>DEKORASYON KATEGORİSİNDE EN BEĞENİLEN ÜRÜNLER BURADA!</p>
                 <img src="../assets/dekorasyon.jpg" style="cursor:pointer">

                </div>

              </div>
            </li>
            <li class="hover-me"><a href="#">BEBEK&ÇOCUK</a><i class="fa fa-angle-right"></i>
              <div class="sub-menu-2">
                <ul class="menu1" style="list-style-type:none;">
                  <span>BEBEK GİYİM</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Bebek Kundak</a></li>
                  <li><a href="#">Bebek Bornoz</a></li>
                  <li><a href="#">Tümünü Gör</a></li>
                  <li><a href="#">Bebek Pijama</a></li>
                 
                </ul> 
                <ul class="menu2" style="list-style-type:none;">
                  <span>OYUNCAK</span>
                 
                </ul> 
                <ul class="menu3" style="list-style-type:none;">
                  <span>BEBEK ODASI</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Bebek Nevresim Takımı</a></li>
                  <li><a href="#">Bebek Nevresim</a></li>
                  <li><a href="#">Bebek Çarşaf</a></li>
                  <li><a href="#">Bebek Battaniye</a></li>
                  <li><a href="#">Bebek Yastık</a></li>
                  <li><a href="#">Bebek Yastık Kılıfı</a></li>
                  <li><a href="#">Bebek Yorgan</a></li>
                  <li><a href="#">Müslin Bezi</a></li>
                </ul> 
                <ul class="menu4" style="list-style-type:none;">
                  <span>BEBEK BAKIM&BESLENME</span>
                  
                </ul> 
                <ul class="menu5" style="list-style-type:none;">
                  <span>ÇOCUK GİYİM</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Çocuk Pijama</a></li>
                  <li><a href="#">Çocuk Bornoz</a></li>
                  <li><a href="#">Çocuk Çorap</a></li>
                  <li><a href="#">Çocuk Şortu</a></li>
                  <li><a href="#">Çocuk Çantası</a></li>
                </ul> 
                <ul class="menu6" style="list-style-type:none;">
                  <span>ÇOCUK ODASI</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Çocuk Nevresim</a></li>
                  <li><a href="#">Çocuk Battaniye</a></li>
                  <li><a href="#">Çocuk Çarşaf</a></li>
                  <li><a href="#">Çocuk Yastık Kılıfı</a></li>
                </ul> 
                <ul class="menu7" style="list-style-type:none;">
                  <span>ÇOCUK ODASI AKSESUARLARI</span>
                 
                </ul> 
                <div class="bebek-cocuk">
                 <h2>FAVORİ ÜRÜNLER</h2>
                 <p>BEBEK VE ÇOCUK KATEGORİSİNDE EN BEĞENİLEN ÜRÜNLER BURADA!</p>
                 <img src="../assets/bebekcocuk.jpg" style="cursor:pointer">

                </div>
              </div>
            
            </li>
            <li class="hover-me"><a href="#">GİYİM</a><i class="fa fa-angle-right"></i>
              <div class="sub-menu-2">
                <ul class="menu1" style="list-style-type:none;">
                  <span>PİJAMA</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Tümünü Gör</a></li>
                  <li><a href="#">Kadın Pijama</a></li>
                  <li><a href="#">Erkek Pijama</a></li>       
                </ul> 
                <ul class="menu2" style="list-style-type:none;">
                  <span>ŞAL</span>
                 
                </ul> 
                <ul class="menu3" style="list-style-type:none;">
                  <span>ÇORAP</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Kadın Çorap</a></li>
                  <li><a href="#">Erkek Çorap</a></li>
                  <li><a href="#">Çocuk Çorap</a></li>
                </ul> 
                <ul class="menu4" style="list-style-type:none;">
                  <span>ELDİVEN</span>
                </ul> 
                
                <ul class="menu5" style="list-style-type:none;">
                  <span>SABAHLIK</span>
                </ul> 
                <ul class="menu6" style="list-style-type:none;">
                  <span>ALT GİYİM</span>
                </ul>
                <ul class="menu7" style="list-style-type:none;">
                  <span>ŞORT</span>
                </ul>
                <ul class="menu8" style="list-style-type:none;">
                  <span>TERLİK</span>
                </ul>
                <ul class="menu9" style="list-style-type:none;">
                  <span>ÜST GİYİM</span>
                </ul>
                <ul class="menu10" style="list-style-type:none;">
                  <span>İÇ GİYİM</span>
                </ul>
                <ul class="menu11" style="list-style-type:none;">
                  <span>SPOR</span>
                </ul>
                <div class="giyim">
                 <h2>FAVORİ ÜRÜNLER</h2>
                 <p>GİYİM KATEGORİSİNDE EN BEĞENİLEN ÜRÜNLER BURADA!</p>
                 <img src="../assets/giyim.jpg" style="cursor:pointer">

                </div>
              </div>
            
            </li>
            <li class="hover-me"><a href="#">KİŞİSEL BAKIM&KOZMETİK</a><i class="fa fa-angle-right"></i>
              <div class="sub-menu-2">
                <ul class="menu1" style="list-style-type:none;">
                  <span>KİŞİSEL BAKIM</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">El Kremi</a></li>
                  <li><a href="#">Sabun</a></li>
                  <li><a href="#">Body Mist</a></li>     
                  <li><a href="#">Parfüm</a></li>
                  <li><a href="#">Makyaj Çantası</a></li>
                  <li><a href="#">Bakım</a></li>    
                </ul> 
                 
                <ul class="menu2" style="list-style-type:none;">
                  <span>ODA KOKUSU</span>
                  <p>Tümünü Gör</p>
                  <li><a href="#">Koku Setleri</a></li>
                  <li><a href="#">Oda Kokusu</a></li>
                  <li><a href="#">Kokulu Çubuk</a></li>
                  <li><a href="#">Dolap İçi Koku</a></li>
                  <li><a href="#">Oda Spreyi</a></li>
                </ul> 
                <ul class="menu3" style="list-style-type:none;">
                  <span>KOLONYA</span>
                </ul> 
                
                <ul class="menu4" style="list-style-type:none;">
                  <span>KOZMETİK</span>
                </ul> 
                <ul class="menu5" style="list-style-type:none;">
                  <span>TAKI</span>
                </ul>
                <ul class="menu6" style="list-style-type:none;">
                  <span>SPOR</span>
                </ul>
                <div class="kisiselbakım-kozmetik">
                 <h2>FAVORİ ÜRÜNLER</h2>
                 <p>KİŞİSEL BAKIM VE KOZMETİK KATEGORİSİNDE EN BEĞENİLEN ÜRÜNLER BURADA!</p>
                 <img src="../assets/kozmetik.jpg" style="cursor:pointer">

                </div>
              </div>
            
            </li>

          </ul>
        </div>
      <li><a href="#">TEMALAR</a>
        <div class="sub-menu-3">
          <ul class="tema-menu">
            <li><router-link to="/urbanfolk">URBAN FOLK</router-link></li>
            <li><a href="#">SUMMER STORİES</a></li>
            <li><a href="#">MODEST VANİTY</a></li>
            <li><a href="#">DOĞUM GÜNÜ HEDİYELERİ</a></li>
            <li><a href="#">ÇEYİZ LİSTESİ</a></li>
            <li><a href="#">NİŞAN HEDİYELERİ</a></li>
            <li><a href="#">BEBEK HEDİYELERİ</a></li>
            <li><a href="#">EV HEDİYELERİ</a></li>
            <li><a href="#">OFİS HEDİYELERİ</a></li>

          </ul>
          
          <div class="tema">
            <h2>2019 - 2020 Sonbahar-Kış Koleksiyonu</h2>
            <p>URBAN FOLK</p>
            <img src="../assets/tema.jpg" style="cursor:pointer">

          </div>
        </div>
      </li>

      <li><a href="#">MAĞAZALAR</a></li>
      <input type="text" name="search" placeholder="Ara..">
    </ul>
    <div class="favoriler"> 
      <img src="../assets/favoriler.png" style="cursor:pointer">
    </div> 
    <div class="uyegirisi">
      
      <router-link to="/uye-giris"><img src="../assets/uyegirisi.png" style="cursor:pointer"></router-link>
    </div>
    <div class="sepet">
      <ul>
        <li>
          <router-link to="/sepet-giris"> <img class="hover-me" src="../assets/sepet.png" style="cursor:pointer"></router-link>
          <div class="sub-menu-sepet">
            <div class="sepet1">
              <p>Sepetinizde 1 ürün var</p>
                      
            </div>
            <div class="sepet2">
              <img src="../assets/sepetresim.jpg" style="cursor:pointer">
              <p>Rosejoy Pamuklu Çift Kişilik Nevresim 200x220 Cm Kırmızı</p>
              <span>₺ 79,99</span>

            </div>
            <div class="sepet3">
              <span>Toplam</span>
              <p>₺ 79,99</p>
              <div class="btn">ALIŞVERİŞİ TAMAMLA</div>
              <div class="btn1"><router-link to="/sepet-giris">SEPETİ GÖRÜNTÜLE</router-link></div>
              <h3>75 TL ve Üzeri Alışverişlerinizde KARGO BEDAVA!</h3>
            </div>



          </div>
        </li>
      </ul>
    </div>
    

   




  </div>

    
    

</template>  
  


<script>


 export default {
    methods:{
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
 
*{
    padding:0px;
    margin:0px;
    
}
body{
    background:#fff;
    background-size:cover;
    background-position: center;

    
}
.menu-bar{
    background:#002b5c;
    width: 100%px;
    text-align: center;
    position: relative;
    z-index:2;
    top:-70px;
    
    
}
.menu-bar ul{
    display:inline-flex;
    list-style: none;
    color:#fff;
}
.menu-bar ul li{
   
    padding: 10px;
    margin:10px;
   
    
}
.menu-bar ul li a{
    text-decoration: none;
    color:#fff;
    position:relative;
    right:50px;
    top:15px;
    font-size:15px;

}
.menu-bar ul li h2{
  font-family: icomoon!important;
  position: relative;
  right:30px;
  top:-2px;
  font-size:24px;
  font-weight: 400px;
}
.active, .menu-bar ul li:hover
{
    background:#002b5c;;
    border-radius: 3px;


}
.sub-menu-1{
    display: none;
    border-style: solid;
    border-left-width:1050px;
    border-top-width: 60px;
    border-bottom-width: 80px;
    position: relative;
    top: 60px;
    left:120px;
    line-height: 17px;
    
    
  

}
.sub-menu-1 ul li a{
  color:#002b5c;
  font-size: 13px;
  position: relative;
  top:-2px;
  
}
.menu-bar ul li:hover .sub-menu-1{
    display: block;
    position:absolute;
    background:#fff;
    margin-top:15px;
    margin-left:-15px;
   
}
.menu-bar ul li:hover .sub-menu-1 ul{
    display: block;
    margin:10px;
    

}
.menu-bar ul li:hover .sub-menu-1 ul li{
    width:150px;
    padding: 10px;
    border-bottom: 1px  #fff;
    background: transparent;
    text-align: left;
    position: relative;
    right:950px;
    bottom:60px;
    

}
.menu-bar ul li:hover .sub-menu-1 ul li:last-child{
    border-bottom:none;
    
    
   

}
.menu-bar ul li:hover .sub-menu-1 ul li a:hover{
    color:#002b5c;

}

.sub-menu-3{
    display: none;
    border-style: solid;
    border-left-width:400px;
    height: 480px;
    position: relative;
    top: 60px;
    left:300px;
    
    
  

}

.sub-menu-3 ul li a {

  float: left;
  color:#002b5c;
  font-size: 13px;
  font-family:  Raleway,sans-serif;
  display:inline-flex;
  position: relative;
  right:400px;
  
  
  
  
}

.menu-bar ul li:hover .sub-menu-3{
    display: block;
    position:absolute;
    background:#fff;
    margin-top:15px;
    margin-left:-15px;
   
}
.menu-bar ul li:hover .sub-menu-3 ul{
    display: block;
    margin:10px;
    

}



.tema{
    border:1px solid #d8d8d8;
    width:350px;
    height: 430px;
    position: relative;
    bottom:250px;
    right:40px;
  }
  .tema img{
    width: 300px;
    position: relative;
    top:40px;
    left:3px;
  }
  .tema h2{
    float: right;
    position: relative;
    top:50px;
    left:1px;
    color: #333;
    font-size: 24px;
  }
  .tema p{
    float: right;
    position: relative;
    top:20px;
    right:130px;
    color: #333;
    font-size: 14px;
  }
 
  
  .banyo{
    border:1px solid #d8d8d8;
    width:350px;
    height: 430px;
    position: relative;
    bottom:250px;
    right:40px;
  }
   .banyo img{
    width: 300px;
    position: relative;
    top:40px;
    left:3px;
  }
  .banyo h2{
    float: right;
    position: relative;
    top:50px;
    left:1px;
    color: #333;
    font-size: 24px;
  }
  .banyo p{
    float: right;
    position: relative;
    top:20px;
    right:130px;
    color: #333;
    font-size: 14px;
  }
  
   .salon img{
    width: 300px;
    position: relative;
    top:40px;
    left:3px;
  }
  .salon h2{
    float: right;
    position: relative;
    top:50px;
    left:1px;
    color: #333;
    font-size: 24px;
  }
  .salon p{
    float: right;
    position: relative;
    top:20px;
    right:130px;
    color: #333;
    font-size: 14px;
  }
  .dekorasyon{
    border:1px solid #d8d8d8;
    width:350px;
    height: 430px;
    position: relative;
    bottom:250px;
    right:40px;
  }
   .dekorasyon img{
    width: 300px;
    position: relative;
    top:40px;
    left:3px;
  }
  .dekorasyon h2{
    float: right;
    position: relative;
    top:50px;
    left:1px;
    color: #333;
    font-size: 24px;
  }
  .dekorasyon p{
    float: right;
    position: relative;
    top:20px;
    right:130px;
    color: #333;
    font-size: 14px;
  }
  .bebek-cocuk{
    border:1px solid #d8d8d8;
    width:350px;
    height: 430px;
    position: relative;
    bottom:250px;
    right:40px;
  }
   .bebek-cocuk img{
    width: 300px;
    position: relative;
    top:40px;
    left:3px;
  }
  .bebek-cocuk h2{
    float: right;
    position: relative;
    top:50px;
    left:1px;
    color: #333;
    font-size: 24px;
  }
  .bebek-cocuk p{
    float: right;
    position: relative;
    top:20px;
    right:130px;
    color: #333;
    font-size: 14px;
  }
  .giyim{
    border:1px solid #d8d8d8;
    width:350px;
    height: 430px;
    position: relative;
    bottom:250px;
    right:40px;
  }
   .giyim img{
    width: 300px;
    position: relative;
    top:40px;
    left:3px;
  }
  .giyim h2{
    float: right;
    position: relative;
    top:50px;
    left:1px;
    color: #333;
    font-size: 24px;
  }
  .giyim p{
    float: right;
    position: relative;
    top:20px;
    right:130px;
    color: #333;
    font-size: 14px;
  }
  .kisiselbakım-kozmetik{
    border:1px solid #d8d8d8;
    width:350px;
    height: 430px;
    position: relative;
    bottom:250px;
    right:40px;
  }
   .kisiselbakım-kozmetik img{
    width: 300px;
    position: relative;
    top:40px;
    left:3px;
  }
  .kisiselbakım-kozmetik h2{
    float: right;
    position: relative;
    top:50px;
    left:1px;
    color: #333;
    font-size: 24px;
  }
  .kisiselbakım-kozmetik p{
    float: right;
    position: relative;
    top:20px;
    right:130px;
    color: #333;
    font-size: 14px;
  }

  .fa-angle-right{  /*ok işaretleri için*/
    float: right;
    color:#002b5c;
    top:25px;
    width: 15px;
    
  }
  
 /*iç menülerin yapılışı*/
 
 
 .sub-menu-2{
    display:none; /*alt kategorileri sakladık*/
    

    


}
.hover-me:hover .sub-menu-2{  /*alt kategorilerin borderlarını burda düzenledim*/

    
    position:absolute;
    display: block;
    margin-top:-10px;
    margin-left:150px;
    background:white;
    width: 973px;
    height:462px;
    top:0px;
    border:none;
    border-left:1px dotted #333;
   
    
    
    
    
    
}.menu1 li {
  width: 400px;
  line-height: 2px;
  font-size:13px;
  position: relative;
  top:-17px;
  left:60px;
  
 
  
}

.menu1 span{
  width:10px;
  color:#c46870!important;
  position: relative;
  left:30px;
  font-size:12px;
  
}
.menu1 p{
  position: relative;
  left:30px;
}
.menu2 li{
  line-height: 2px;
  font-size:13px;
  position: relative;
  top:-290px;
  left:210px;
}
.menu2 span{
  width:10px;
  color:#c46870!important;
  position: relative;
  left:180px;
  top:-287px;
  font-size:12px;
}
.menu2 p{
  position: relative;
  left:180px;
  top:-285px;
}
.menu3 li{  /*yastık*/
  line-height: 2px;
  font-size:13px;
  position: relative;
  top:-395px;
  left:470px;

}
.menu3 span{
  width:10px;
  color:#c46870!important;
  position: relative;
  left:440px;
  top:-383px;
  font-size:13px;
}
.menu3 p{
  position: relative;
  left:440px;
  top:-383px;
}
.menu4 li{  /*yatakörtüsü*/
  line-height:2px;
  font-size:13px;
  position: relative;
  top:-815px;
  left:634px;

}
.menu4 span{
  width:10px;
  color:#c46870!important;
  position: relative;
  left:605px;
  top:-809px;
  font-size:13px;
}
.menu4 p{
  position: relative;
  left:605px;
  top:-807px;
}
.menu5 li{  /*pike*/
  line-height:3px;
  font-size:13px;
  position: relative;
  top:-758px;
  left:208px;

}
.menu5 span{
  width:10px;
  color:#c46870!important;
  position: relative;
  left:179px;
  top:-758px;
  font-size:13px;
}
.menu5 p{
  position: relative;
  top:-757px;
  left:178px;
}

.menu6 li{  
  line-height:2px;
  font-size:13px;
  position: relative;
  top:-708px;
  left:300px;

}
.menu6 span{   /*yastık kılıfı*/
  font-size:12px; 
  width:10px;
  color:#c46870!important;
  position: relative;
  left:320px;
  top:-1240px;
  
}

.menu7 li{ /*battaniye*/
  line-height:2px;
  font-size:13px;
  position: relative;
  top:-1285px;
  left:469px;

}
.menu7 span{
  width:10px;
  color:#c46870!important;
  position: relative;
  left:440px;
  top:-1270px;
  font-size:13px;;
}
.menu7 p{
  position: relative;
  top:-1268px;
  left:440px;
}
.menu8 li{   /*hurç*/
  line-height:2px;
  font-size:13px;
  position: relative;
  top:-1008px;
  left:436px;

}
.menu8 span{  /*hurç*/
  width:10px;
  color:#c46870!important;
  position: relative;
  left:322px;
  top:-1148px;
  font-size:13px;
}
.menu9 li{ /*yorgan*/
  line-height:3px;
  font-size:12px;
  position: relative;
  top:-1498px;
  left:349px;

}
.menu9 span{
  width:10px;
  color:#c46870!important;
  position: relative;
  left:320px;
  top:-1493px;
  font-size:12px;
}
.menu9 p{
  position: relative;
  top:-1494px;
  left:320px;
}
.menu10 li{  /*yatak*/
  line-height:2px;
  font-size:13px;
  position: relative;
  top:-1658px;
  left:130px;

}
.menu10 span{  /*yatak*/
  width:10px;
  color:#c46870!important;
  position: relative;
  left:606px;
  top:-1630px;
  font-size:13px;
}

.menu11 li{   /*alez*/
  line-height:2px;
  position: relative;
  top:-1300px;
  left:430px;
  font-size:13px;

}
.menu11 span{   /*alez*/
  width:10px;
  color:#c46870!important;
  position: relative;
  left:606px;
  top:-1630px;
  font-size:13px;
}

/*mutfak*/
.m-menu1 li{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-25px;
  left:60px;
}
.m-menu1 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:-25px;
  left:30px;
}
.m-menu1 p{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-17px;
  left:30px;
}
.m-menu2 li{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-475px;
  left:180px;
}
.m-menu2 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:-478px;
  left:150px;
}
.m-menu2 p{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-470px;
  left:150px;
}
.m-menu3 li{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-475px;
  left:180px;
}
.m-menu3 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:-478px;
  left:150px;
}
.m-menu3 p{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-470px;
  left:150px;
}
.m-menu4 li{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-735px;
  left:350px;
}
.m-menu4 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:-740px;
  left:320px;
}
.m-menu4 p{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-731px;
  left:320px;
}
.m-menu5 li{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-928px;
  left:470px;
}
.m-menu5 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:-936px;
  left:440px;
}
.m-menu5 p{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-927px;
  left:440px;
}
.mutfak{
  border:1px solid #d8d8d8;
  width:350px;
  height: 430px;
  position: relative;
  top:250px;
  left:40px;
}
 .mutfak img{
    width: 300px;
    position: relative;
    top:40px;
    left:3px;
  }
  .mutfak h2{
    position: relative;
    top:250px;
    left:30px;
    color: #333;
    font-size: 14px;
    line-height:1px;
  }
  .mutfak p{
    float: right;
    position: relative;
    top:20px;
    right:130px;
    color: #333;
    font-size: 14px;
  }

  /*salon*/
  .s-menu1 li{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-2005px;
  left:60px;
}
.s-menu1 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:-1005px;
  left:30px;
}
.s-menu1 p{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-17px;
  left:30px;
}

.s-menu2 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:1008px;
  left:300px;
}

.s-menu3 li{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-475px;
  left:180px;
}
.s-menu3 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:-478px;
  left:150px;
}
.s-menu3 p{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-470px;
  left:150px;
}
.s-menu4 li{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-735px;
  left:350px;
}
.s-menu4 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:-740px;
  left:320px;
}
.s-menu4 p{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-731px;
  left:320px;
}
.s-menu5 li{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-928px;
  left:470px;
}
.s-menu5 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:-936px;
  left:440px;
}
.s-menu5 p{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-927px;
  left:440px;
}
.s-menu6 li{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-928px;
  left:470px;
}
.s-menu6 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:-936px;
  left:440px;
}
.s-menu6 p{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-927px;
  left:440px;
}
.s-menu7 li{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-928px;
  left:470px;
}
.s-menu7 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:-936px;
  left:440px;
}
.s-menu7 p{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-927px;
  left:440px;
}
.s-menu8 li{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-928px;
  left:470px;
}
.s-menu8 span{
  font-size:13px;
  line-height:2px;
  color:#c46870!important;
  position: relative;
  top:-936px;
  left:440px;
}
.s-menu8 p{
  font-size:13px;
  line-height:2px;
  position: relative;
  top:-927px;
  left:440px;
}
.salon{
    border:1px solid #d8d8d8;
    width:350px;
    height: 430px;
    position: relative;
    bottom:250px;
    right:40px;
  }
.sub-menu-2 p{
  color:black;
  cursor: pointer;
  font-size:13px;
}

 /*aramabutonu*/
 input[type=text] {
  width: 130px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  position: relative;
  top:15px;
}


input[type=text]:focus {
  width: 500px;
}

  
  
  /*resim bölümü*/
  .favoriler{
   position:relative;
   float:right;
   right:190px;
   top:6px;
 }
 .uyegirisi{
   position:relative;
   float:right;
   right:70px;
   top:15px;
 }
 .sepet{
   position:relative;
   float:right;
   left:110px;
   top:-22px;
 }

 .active, .sepet:hover{
   background-color:#fff;
 }
  



/*-----------sepet dropdown-------------*/
  .sepet1{
    border:1px;
    border-style:none;
    border-bottom-style: solid;
    cursor: pointer;
}
.sepet1 p{
  color:#333;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  position: relative;
  top:50px;
  left:-140px;
}
.sepet2{
    border:1px #333;
    border-style: none;
    border-bottom-style: solid;
    border-top-style: solid;
    border-radius: 2px;
    height:150px;
    cursor: pointer;
    position: relative;
    top:55px;
    
}
.sepet2 p{
  color:#333;
  cursor: pointer;
  font-size:18px;
  width:270px;
  display:inline-flex;
  position: relative;
  top:-25px;
  left:20px;
}
.sepet2 span{
  color:#002b5c;
  cursor: pointer;
  font-weight: 600;
  width:120px;
  font-size: 22px;
  position: relative;
  top:40px;
  right: 100px;
}
.sepet2 img{
    width:150px;
    cursor: pointer;
    position: relative;
    top:15px;
    left:10px;
}

.sepet3 p{
  color:#333;
  cursor: pointer;
  position: relative;
  text-align: right;
  font-size:20px;
  font-family: BrandonText;
  right:50px;
  top:60px;
}

.sepet3 .btn{
    width:450px;
    background: #4688d7;
    height: 40px;
    text-align: center;
    line-height: 33px;
    text-transform: uppercase;
    color:#fff;
    font-weight: normal;
    letter-spacing: 1px;
    cursor:pointer;
    margin-bottom: 30px;
    position:relative;
    top:70px;
    left:35;
    border:1px solid #fff;
    
}
.sepet3 .btn:hover{
    background-color: #333;;
    color:#fff;
    cursor: pointer;

}
.sepet3 .btn1{
    width:450px;
    background: #fff;
    height: 40px;
    text-align: center;
    line-height: 33px;
    text-transform: uppercase;
    color:#4688d7;
    font-weight: normal;
    letter-spacing: 1px;
    cursor:pointer;
    margin-bottom: 30px;
    position:relative;
    top:70px;
    left:25px;
    border:1px solid #4688d7;
    
}
.sepet3 h3{
  color:#4688d7;
  text-align: left;
  font-size:17px;
  position: relative;
  left:20px;
  top:75px;
  width: 300px;
  cursor: pointer;
  

}
.sepet3 span{
  color:#333;
  cursor: pointer;
  font-size:20px;
  text-align: left;
  position: relative;
  top:85px;
  left:-190px;
}
.sub-menu-sepet{
    display: none;
    border-style: solid #fff;
    border-right-width:1050px;
    border-top-width: 60px;
    border-bottom-width: 80px;
    width: 500px;
    height: 500px;
    position: relative;
    top: 85px;
    right:0px;
    line-height: 17px;

}
.menu-bar ul li:hover .sub-menu-sepet{
    display: block;
    position:absolute;
    background:#fff;
    margin-top:15px;
    margin-left:-15px;
}
.menu-bar ul li:hover .sub-menu-sepet ul{
    display: block;
    margin:10px;

}
.menu-bar ul li:hover .sub-menu-sepet ul li{
    width:150px;
    padding: 10px;
    border-bottom: 1px  #fff;
    background: transparent;
    text-align: left;

}
.menu-bar ul li:hover .sub-menu-sepet ul li:last-child{
    border-bottom: none;

}
.menu-bar ul li:hover .sub-menu-sepet ul li a:hover{
    color:#fff;

}

 </style>  