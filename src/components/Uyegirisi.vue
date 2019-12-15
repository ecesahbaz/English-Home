<template>
    <div class="uyelik">
        <b-tabs content-class="mt-3" fill>
            
            <b-tab title="ÜYEYİM" active class="uyegirisi" >
              <input type="text1" name="epostaadresi" placeholder="E-Posta Adresiniz" class="inp" required autofocus><br>
              <input type="password" name="password" placeholder="Şifreniz" class="inp" required><br>
              <div class="btn">GİRİŞ YAP</div>
              <input type="checkbox" class="bilgilendirme" id="hatırla1">
              <label class="hatırla-label" for="hatırla1">Beni Hatırla</label><br>
              <a href="#" id="forgot">Şifremi Unuttum</a>
            
            </b-tab>
             
            <b-tab title="ÜYE DEĞİLİM" class="uyeol">
              <input type="text1" name="uname"  class="inp1" required autofocus><br>
              <p id="ad">Adınız</p>
              <input type="text1" name="usurname" class="inp2" required><br>
              <p id="soyad">Soyadınız</p>
              <input type="email" name="email"  class="inp3" required><br>
              <p id="email">E-Posta Adresiniz</p>
              <input type="telno" name="telno" class="inp4" required><br>
              <p id="telno">Telefon Numaranız</p>
              <input type="text1" name="uname" class="inp5" required autofocus><br>
              <p id="sifre">Şifreniz</p>
              <input type="checkbox" class="bilgilendirme" id="bilgi1">
              <label class="bilgi-label" for="bilgi1">Bilgilendirme e-postalarını almak istiyorum</label><br>
              <input type="checkbox" class="bilgilendirme" id="bilgi2">
              <label class="bilgi-label2" for="bilgi2">Bilgilendirme SMS’lerini almak istiyorum</label><br>
              <input type="checkbox" class="bilgilendirme" id="bilgi3">
              <label class="bilgi-label3" for="bilgi3">Üyelik sözleşmesi ve Kişisel verilerin korunmasını<br> kabul ediyorum.</label><br>
              <div class="btn">ÜYE OL</div>

            </b-tab>
              
            
        
        </b-tabs>
       



      
     


    </div>  
</template>


<script>
export default {
    
}
</script>



<style>
*{
    margin:0px;
    padding: 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    
 
    
}

#ad {
    color:#333;
    font-size:14px;
    position: relative;
    top:2px;
    left:-217px;
    
    
}
#soyad{
    color:#333;
    font-size:14px;
    position: relative;
    top:-60px;
    left:-115px;
}
#email{
    color:#333;
    font-size:14px;
    position: relative;
    top:-80px;
    left:-113px;

}
#telno{
    color:#333;
    font-size:14px;
    position: relative;
    top:-80px;
    left:-110px;

}
#sifre{
    color:#333;
    font-size:14px;
    position: relative;
    top:-82px;
    left:-145px;


}
.uyelik{
    background: url(../assets/arkaplan.png) no-repeat;
    height:700px;
   
}

.mt-3{    /*ana class*/
    
   
    background:#fff;
    padding:30px;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 0px #8abfff;
    width:600px;
    height:320px;
    position: relative;
    left:350px;
    top:40px;
    
  
    
}
.uyeol{
    background:#fff;
    padding:30px;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 0px #8abfff;
    width:600px;
    height: 600px;
    position: relative;
    left:-30px;
    top:-30px;
}


.uyegirisi input{
    width: 300px;
    height: 40px;
    box-sizing: border-box;
    padding:20px;
    margin-bottom: 25px;
    border:1px solid #e9eaea;
    color:#3e3e40;
    font-size: 14px;
    outline: none;
    transition: all 0.5s ease;
    position: relative;
    top:30px;
    left:10px;

}
.uyeol input{
    width: 300px;
    height: 40px;
    box-sizing: border-box;
    padding:20px;
    margin-bottom: 23px;
    border:2px solid #e9eaea;
    color:#3e3e40;
    font-size: 14px;
    outline: none;
    transition: all 0.5s ease;
    position: relative;
    top:40px;
    right:20px;
}
.uyeol .inp1{
    width:140px;
    height: 45px;
    position:relative;
    float:left;
    left:100px;
    top:50px;
}
.uyeol .inp2{
    width:140px;
    height: 45px;
    position:relative;
    float:left;
    left:120px;
    top:-10px;
}
.uyeol .inp3{
    position:relative;
    right:20px;
    top:15px;
    width:300px;
}
.uyeol .inp4{
    position:relative;
    right:20px;
    top:15px;
    width:300px;
}
.uyeol .inp5{
    position:relative;
    right:20px;
    top:15px;
    width:300px;
}
.input:focus{
    border:1px solid #34b3a0;
}
.uyegirisi .btn{
    width:310px;
    background: #4688d7;
    height: 45px;
    text-align: center;
    line-height: 30px;
    text-transform: uppercase;
    color:#fff;
    font-weight: normal;
    letter-spacing: 1px;
    cursor:pointer;
    margin-bottom: 30px;
    border:4px solid;
    position: relative;
    top:30px;
    left:36px;
    

}
.uyeol .btn{
    width:300px;
    background: #4688d7;
    height: 50px;
    text-align: center;
    line-height: 33px;
    text-transform: uppercase;
    color:#fff;
    font-weight: normal;
    letter-spacing: 1px;
    cursor:pointer;
    margin-bottom: 30px;
    position:relative;
    top:-30px;
    right:20px;
    

}
.uyeol .btn:hover{
    background-color: #002b5c;;
    color:white;

}
.uyegirisi .btn:hover{
    background-color: #002b5c;;
    color:white;
}
#hatırla1{
    width:14px;
    height: 14px;
    position: relative;
    float:left;
    top:80px;
    left:55px;

}
.hatırla-label{
    font-size:12px;
    font-weight:400;
    cursor: default;
    color: #333;
    position:relative;
    right:250px;
    top:50px;

}

#forgot{
    color:black;
    font-size: 12px;
    position: relative;
    left:120px;
    top:0px;
}
#bilgi1{
    width:13px;
    height:13px;
    position: relative;
    float:left;
    top:-25px;
    left:100px;
}
#bilgi2{
    width:13px;
    height:13px;
    position: relative;
    float:left;
    top:-25px;
    left:87px;
}
#bilgi3{
    width:13px;
    height:13px;
    position: relative;
    float:left;
    top:-25px;
    left:75px;
}
.bilgi-label{
    font-size: 12px;
    color: #333;
    position:relative;
    top:-30px;
    right:45px;
}
.bilgi-label2{
    font-size: 12px;
    color: #333;
    position:relative;
    top:-30px;
    right:58px;
}
.bilgi-label3{
    font-size: 12px;
    color: #333;
    position:relative;
    top:-26px;
    right:38px;
}

 
</style>