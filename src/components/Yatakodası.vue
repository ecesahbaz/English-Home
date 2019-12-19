<template>
    <div class="yatakodası">
        <div class="p">
         75 TL Üzeri Alışverişlerinizde KARGO BEDAVA!
        </div>
        <img class="yo1" src="../assets/yatakodası1.jpg" >
        <h2>YATAK ODASI KATEGORİLERİ</h2>
        <div class="kategoriler">
            <b-button style="position:relative;top:11px;left:80px;" variant="outline-secondary">NEVRESİM TAKIMI</b-button>
            <b-button style="position:relative;top:11px;left:100px;" variant="outline-secondary">NEVRESİM SETİ</b-button>
            <b-button style="position:relative;top:11px;left:120px;" variant="outline-secondary">NEVRESİM</b-button>
            <b-button style="position:relative;top:11px;left:140px;" variant="outline-secondary">ÇARŞAF</b-button>
            <b-button style="position:relative;top:11px;left:160px;" variant="outline-secondary">YASTIK KILIFI</b-button>
            <b-button style="position:relative;top:11px;left:180px;" variant="outline-secondary">YATAK ÖRTÜSÜ</b-button>
            <b-button style="position:relative;top:11px;left:200px;" variant="outline-secondary">BATTANİYE</b-button>
            <b-button style="position:relative;top:11px;left:220px;" variant="outline-secondary">PİKE TAKIMI</b-button>
            <b-button style="position:relative;top:60px;left:-640px;" variant="outline-secondary">YASTIK</b-button>
            <b-button style="position:relative;top:60px;left:-590px;" variant="outline-secondary">YATAK</b-button>
            <b-button style="position:relative;top:60px;left:-540px;" variant="outline-secondary">ALEZ</b-button>
            <b-button style="position:relative;top:60px;left:-460px;" variant="outline-secondary">HURÇ</b-button>
            <b-button style="position:relative;top:21px;left:-110px;" variant="outline-secondary">YORGAN</b-button>
            
            <a id="tumkategori" href="kategori">
                <h2>Kategorideki Tüm Ürünleri Gör</h2>
            </a>
            <div class="row" style="position:relative;top:20px; left:250px; border:none;"> 
                <!-- %100 -->
                     
                       <div class="col-4"  v-for="(yatak,index) in Yataklar" :key="index" >
                            <!-- %25 -->
                            <a v-bind:href="yatak.url" >
                                <br> <br> <br> <br> <br>  
                             <router-link to="/urunsayfa"><img  v-bind:src="yatak.image" style="width:260px; height:200px;" /></router-link>     
                            </a>
                             <p style="color:#000; font-size:13px; text-align:initial; "> {{yatak.acıklama}} </p>
                            
                             <p style="color:black;"><strong><strike> {{yatak.fiyat}}</strike> </strong> </p>
                             <p style="color:red; border:1px solid red; width:200px;"> {{yatak.detay}}  </p>
                           
                          
                        </div>
                        
    
            </div>
            <div class="kategoribilgi">
                <p>Konforun ve rahatlığın adresi olan yatak odaları English Home ile şenleniyor! 
                    Yoğun geçen günün tüm stres ve yorgunluğunu vücut yapınıza uygun bir yatak, baş ve boyun sağlığınızı 
                    destekleyen yastık, mevsime uygun olarak seçeceğiniz yorgan, battaniye ya da pike takımı aracılığıyla 
                    atabilirsiniz. Sağlık standartları göz önünde bulundurularak üretilen
                    yatak odası takımları rengârenk ve göz alıcı tasarımlarıyla sizlerin beğenisine sunuluyor.</p>
                 
                <p style="top:3200px;">Rahatlık ve ergonominin yanı sıra sezon trendleri göz önünde bulundurularak 
                    tasarlanan yatak örtüsü, battaniye, nevresim takımı ve pike çeşitleriyle yatak 
                    odalarınız renkleniyor. Pamuklu, silikon ya da visko yastıklar ile rahat bir uyku
                     sonrasında günün yorgunluğunu atabilirsiniz. Desen desen pikeler, yumuşak yapılarıyla farklılık yaratıyor.
                     ek kişilik, çift kişilik ve king boy nevresim takımlarından yatağınızın boyutuna uygun olanı seçebilirsiniz.
                      Mikro fiber, pamuk, kaz tüyü, bambu yorgan çeşitlerinden size uygun ürünü seçerek uyku kalitenizi 
                      arttırabilirsiniz. Mikro fiber ürünlerin ısıyı dengeli bir şekilde yayması, yumuşak ve hafif yapısı 
                      alerjen bünyeye sahip olanlar kişiler için özel olarak üretilmiştir. English Home tarafından yatak 
                      odalarınıza ferahlık, huzur ve farklılık getirecek ürünler geniş ürün yelpazesi ile sizleri bekliyor. 
                      Seçeceğiniz yatak odası ürünleri ile hem tarzınızı yansıtabilir hem de size huzur veren bir yatak odası tasarlayabilirsiniz.</p> 
            </div>
        </div>
        
    </div>

    
</template>

<script>
const API_URL="http://localhost:7000/home"
export default {
   data:() =>({
       
       Yataklar:[]
   
    }),

    mounted() {

        fetch(API_URL)
        .then(response=>response.json())
        .then(result=> {
            this.Yataklar=result.Yatak;
            console.log(this.Yataklar)
        } )
        
    }
    
}
</script>

<style>
*{
    margin:0px;
    padding: 0px;
}
body{
    background: #fff;
    background-size: auto
  
}
.p{
    background: #f6f4ee;
    height: 40px;
    top:-70px;
}
.yo1{
    position: relative;
    top:-40px;
    cursor: pointer;
}
.yatakodası h2{
    font-size: 20px;
    font-weight: 700;
    color: #000;
    position: relative;
    top:-20px;
}
.nt{     /*nevresimtakımı*/
    padding: 0 6px;
    border: 1px solid #333;
    margin-right: 15px;
}
.cs{   /*çarşaf */
    min-width: 125px;
    height: 130px;
    padding: 0 6px;
    border: 1px solid #333;
    margin-right: 15px;
} 
.yk{  /*yastıkkılıfı*/
    min-width: 125px;
    height: 130px;
    padding: 0 6px;
    border: 1px solid #333;
    margin-right: 15px;
}   
.yo{   /*yatakörtüsü*/
    min-width: 125px;
    height: 130px;
    padding: 0 6px;
    border: 1px solid #333;
    margin-right: 15px;
}
.ba{   /*battaniye*/
    min-width: 125px;
    height: 130px;
    padding: 0 6px;
    border: 1px solid #333;
    margin-right: 15px;
}
.pt{    /*piketakımı*/
    min-width: 125px;
    height: 130px;
    padding: 0 6px;
    border: 1px solid #333;
    margin-right: 15px;
}
.ya{    /*yastık*/
    min-width: 125px;
    height: 130px;
    padding: 0 6px;
    border: 1px solid #333;
    margin-right: 15px;

}
.yat{   /*yatak*/
    padding: 0 6px;
    border: 1px solid #333;
    margin-right: 15px;
    margin-top: 10px;
}
.al{  /*alez*/
    padding: 0 6px;
    border: 1px solid #333;
    margin-right: 15px;
    position: absolute;
    left:570px;
    bottom:-60px;
}
.h{  /*hurç*/
    
    padding: 0 6px;
    border: 1px solid #333;
    margin-right: 15px;
    position: absolute;
    left:680px;
    bottom:-60px;
}
.y{   /*yorgan*/
    
    padding: 0 6px;
    border: 1px solid #333;
    margin-right: 15px;
    position: absolute;
    left:790px;
    bottom:-60px;
}
.yo2-1{
    float:left; 
    position: relative;
    left:220px;
    bottom:-50px;
    width: 280px;
    height: 200px;
    cursor: pointer;
}
.yo2-2{
    
    float:left; 
    position: relative;
    left:250px;
    bottom:-50px;
    width: 280px;
    height: 200px;
    cursor: pointer;
}
.yo2-3{
    float:left; 
    position: relative;
    left:280px;
    bottom:-50px;
    width: 280px;
    height: 200px;
    cursor: pointer;
}
#r1 span{
    font: inherit;
    color: #000;
    font-size: 13px;
    vertical-align: baseline;
    width:294px;
    text-align:initial;
    text-decoration: none;
    position: absolute;
    bottom:-340px;
    left:220px;
}
#r1 span:hover{
    text-decoration: underline;
}
#r1 p{
    line-height: 2;
    font-size: 15px;
    float: left;
    margin-left: 0;
    color: #ff505f;
    position: absolute;
    bottom:-400px;
    left:225px;

}
#altr1 span{
    color: #000;
    font-size: 13px;
    position: absolute;
    bottom:-405px;
    left:225px;

}
#altr1 p{
    color: #002b5c;
    font-size: 20px;
    position: absolute;
    bottom:-420px;
    left:400px;
}
#r2 span{
    font: inherit;
    color: #000;
    font-size: 13px;
    vertical-align: baseline;
    width:250px;
    text-align:initial;
    text-decoration: none;
    position: absolute;
    bottom:-340px;
    left:530px;
}
#r2 span:hover{
    text-decoration: underline;
}
#r2 p{
    line-height: 2;
    font-size: 15px;
    float: left;
    margin-left: 0;
    color: #ff505f;
    position: absolute;
    bottom:-400px;
    left:530px;

}
#altr2 span{
    color: #000;
    font-size: 13px;
    position: absolute;
    bottom:-405px;
    left:530px;

}
#altr2 p{
    color: #002b5c;
    font-size: 20px;
    position: absolute;
    bottom:-420px;
    left:700px;
}
#r3 span{
    font: inherit;
    color: #000;
    font-size: 13px;
    vertical-align: baseline;
    width:294px;
    text-align:initial;
    text-decoration: none;
    position: absolute;
    bottom:-340px;
    left:840px;
}
#r3 span:hover{
    text-decoration: underline;
}
#r3 p{
    line-height: 2;
    font-size: 15px;
    float: left;
    margin-left: 0;
    color: #ff505f;
    position: absolute;
    bottom:-400px;
    left:840px;

}
#altr3 span{
    color: #000;
    font-size: 13px;
    position: absolute;
    bottom:-405px;
    left:840px;

}
#altr3 p{
    color: #002b5c;
    font-size: 20px;
    position: absolute;
    bottom:-420px;
    left:1000px;
}
.yo3-1{   /*resimler*/
    float:left; 
    position: relative;
    left:-620px;
    bottom:-400px;
    width: 280px;
    height: 200px;
    cursor: pointer;
}
.yo3-2{
    float:left; 
    position: relative;
    left:540px;
    bottom:-200px;
    width: 280px;
    height: 200px;
    cursor: pointer;
}

.yo3-3{
    float:left; 
    position: relative;
    left:570px;
    bottom:-200px;
    width: 280px;
    height: 200px;
    cursor: pointer;
}
#r31 span{
    font: inherit;
    color: #000;
    font-size: 13px;
    vertical-align: baseline;
    width:294px;
    text-align:initial;
    text-decoration: none;
    position: absolute;
    bottom:-700px;
    left:220px;
}
#r31 span:hover{
    text-decoration: underline;
}
#r31 p{
    line-height: 2;
    font-size: 15px;
    float: left;
    margin-left: 0;
    color: #ff505f;
    position: absolute;
    bottom:-750px;
    left:220px;

}
#altr31 span{
    color: #000;
    font-size: 13px;
    position: absolute;
    bottom:-760px;
    left:220px;

}
#altr31 p{
    color: #002b5c;
    font-size: 20px;
    position: absolute;
    bottom:-770px;
    left:400px;
}

#r32 span{
    font: inherit;
    color: #000;
    font-size: 13px;
    vertical-align: baseline;
    width:274px;
    text-align:initial;
    text-decoration: none;
    position: absolute;
    bottom:-700px;
    left:520px;
}
#r32 span:hover{
    text-decoration: underline;
}
#r32 p{
    line-height: 2;
    font-size: 15px;
    float: left;
    margin-left: 0;
    color: #ff505f;
    position: absolute;
    bottom:-750px;
    left:520px;

}
#altr32 span{
    color: #000;
    font-size: 13px;
    position: absolute;
    bottom:-760px;
    left:520px;

}
#altr32 p{
    color: #002b5c;
    font-size: 20px;
    position: absolute;
    bottom:-770px;
    left:720px;
}
#r33 span{
    font: inherit;
    color: #000;
    font-size: 13px;
    vertical-align: baseline;
    width:274px;
    text-align:initial;
    text-decoration: none;
    position: absolute;
    bottom:-700px;
    left:850px;
}
#r33 span:hover{
    text-decoration: underline;
}
#r33 p{
    line-height: 2;
    font-size: 15px;
    float: left;
    margin-left: 0;
    color: #ff505f;
    position: absolute;
    bottom:-750px;
    left:850px;

}
#altr33 span{
    color: #000;
    font-size: 13px;
    position: absolute;
    bottom:-760px;
    left:850px;

}
#altr33 p{
    color: #002b5c;
    font-size: 20px;
    position: absolute;
    bottom:-770px;
    left:1020px;
}


.yo4-1{
    float:left; 
    position: relative;
    left:-340px;
    bottom:-560px;
    width: 280px;
    height: 200px;
    cursor: pointer;
}
.yo4-2{
    float:left; 
    position: relative;
    left:-300px;
    bottom:-560px;
    width: 280px;
    height: 200px;
    cursor: pointer;
}

.yo4-3{
    float:left; 
    position: relative;
    left:860px;
    bottom:-358px;
    width: 280px;
    height: 200px;
    cursor: pointer;
}
#r41 span{
    font: inherit;
    color: #000;
    font-size: 13px;
    vertical-align: baseline;
    width:294px;
    text-align:initial;
    text-decoration: none;
    position: absolute;
    bottom:-1050px;
    left:220px;
}
#r41 span:hover{
    text-decoration: underline;
}
#r41 p{
    line-height: 2;
    font-size: 15px;
    float: left;
    margin-left: 0;
    color: #ff505f;
    position: absolute;
    bottom:-1100px;
    left:220px;

}
#altr41 span{
    color: #000;
    font-size: 13px;
    position: absolute;
    bottom:-1110px;
    left:220px;

}
#altr41 p{
    color: #002b5c;
    font-size: 20px;
    position: absolute;
    bottom:-1120px;
    left:400px;
}
#r42 span{
    font: inherit;
    color: #000;
    font-size: 13px;
    vertical-align: baseline;
    width:294px;
    text-align:initial;
    text-decoration: none;
    position: absolute;
    bottom:-1050px;
    left:540px;
}
#r42 span:hover{
    text-decoration: underline;
}
#r42 p{
    line-height: 2;
    font-size: 15px;
    float: left;
    margin-left: 0;
    color: #ff505f;
    position: absolute;
    bottom:-1100px;
    left:540px;

}
#altr42 span{
    color: #000;
    font-size: 13px;
    position: absolute;
    bottom:-1110px;
    left:540px;

}
#altr42 p{
    color: #002b5c;
    font-size: 20px;
    position: absolute;
    bottom:-1120px;
    left:740px;
}
#r43 span{
    font: inherit;
    color: #000;
    font-size: 13px;
    vertical-align: baseline;
    width:294px;
    text-align:initial;
    text-decoration: none;
    position: absolute;
    bottom:-1050px;
    left:860px;
}
#r43 span:hover{
    text-decoration: underline;
}
#r43 p{
    line-height: 2;
    font-size: 15px;
    float: left;
    margin-left: 0;
    color: #ff505f;
    position: absolute;
    bottom:-1100px;
    left:860px;

}
#altr43 span{
    color: #000;
    font-size: 13px;
    position: absolute;
    bottom:-1110px;
    left:860px;

}
#altr43 p{
    color: #002b5c;
    font-size: 20px;
    position: absolute;
    bottom:-1120px;
    left:1020px;
}
.yo5-1{
    float:left; 
    position: relative;
    left:-60px;
    bottom:-720px;
    width: 280px;
    height: 200px;
    cursor: pointer;
}
.yo5-2{
    float:left; 
    position: relative;
    left:-10px;
    bottom:-720px;
    width: 280px;
    height: 200px;
    cursor: pointer;
}
#r51 span{
    font: inherit;
    color: #000;
    font-size: 13px;
    vertical-align: baseline;
    width:294px;
    text-align:initial;
    text-decoration: none;
    position: absolute;
    bottom:-1410px;
    left:220px;
}
#r51 span:hover{
    text-decoration: underline;
}
#r51 p{
    line-height: 2;
    font-size: 15px;
    float: left;
    margin-left: 0;
    color: #ff505f;
    position: absolute;
    bottom:-1460px;
    left:220px;

}
#altr51 span{
    color: #000;
    font-size: 13px;
    position: absolute;
    bottom:-1470px;
    left:220px;

}
#altr51 p{
    color: #002b5c;
    font-size: 20px;
    position: absolute;
    bottom:-1480px;
    left:400px;
}   
#r52 span{
    font: inherit;
    color: #000;
    font-size: 13px;
    vertical-align: baseline;
    width:294px;
    text-align:initial;
    text-decoration: none;
    position: absolute;
    bottom:-1410px;
    left:550px;
}
#r52 span:hover{
    text-decoration: underline;
}
#r52 p{
    line-height: 2;
    font-size: 15px;
    float: left;
    margin-left: 0;
    color: #ff505f;
    position: absolute;
    bottom:-1460px;
    left:550px;

}
#altr52 span{
    color: #000;
    font-size: 13px;
    position: absolute;
    bottom:-1470px;
    left:550px;

}
#altr52 p{
    color: #002b5c;
    font-size: 20px;
    position: absolute;
    bottom:-1480px;
    left:710px;
} 

#tumkategori h2{
    color:black;
    font-size:20px;
    position: absolute;
    top:3000px;
    left:550px;
    text-decoration: underline;
}
.kategoribilgi p{
    font-size: 15px;
    color: #000;
    text-align: center;
    margin-bottom: 30px;
    width:880px;
    display: block;
    position: absolute;
    top:3060px;
    left:250px;
}
</style>