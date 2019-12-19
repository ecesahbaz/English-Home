<template>
    <div class="uyelik">
        <b-tabs content-class="mt-3" fill>
            
            <b-tab title="ÜYEYİM" active class="uyegirisi" >
           
              <input
              v-model="input.username"
              style="position:relative; top:-10px; left:20px;"
              type="text"
              id="email"
              name="email"
              required
              autofocus="autofocus"
              class="inputs"
              placeholder="Eposta Adresinizi Giriniz"
              />
              <input
              v-model="input.password"
              id="password"
              name="password"
              required
              class="inputs"
              placeholder="Parola  Giriniz"
              />
             

              <div class="btn" v-on:click="login()">GİRİŞ YAP</div>
              <input type="checkbox" class="bilgilendirme" id="hatırla1">
              <label class="hatırla-label" for="hatırla1">Beni Hatırla</label><br>
              <a href="#" id="forgot">Şifremi Unuttum</a>
            
            </b-tab>
             
            <b-tab title="ÜYE DEĞİLİM" class="uyeol">
              
              


              <form style="position:relative;top:200px;" >

                 <div style="position:relative; top:-200px;">
                 <input v-model="AdSoyad" 
                 type="AdSoyad"
                 required
                 name="AdSoyad"
                 class="inputs"
                 placeholder="Ad Soyad giriniz">
                 </div>
                 <br>
                 <div style="position:relative; top:-200px;">
                 <input v-model="email" 
                 type="email"
                 required
                 name="email"
                 class="inputs"
                 placeholder="Eposta giriniz">
                 </div>
                 <br>
                 <div style="position:relative; top:-200px;">
                 <input v-model="telefon" 
                 type="telefon"
                 required
                 name="telefon"
                 class="inputs"
                 placeholder="Cep Telefonu giriniz">
                 </div>
                 <br>
                 <div style="position:relative; top:-200px;">
                 <input v-model="sifre" 
                 type="sifre"
                 required
                 name="sifre"
                 class="inputs"
                 placeholder="Parola giriniz">
                 </div>
            </form>


              
              <div class="btn" @click="userEkle" style="position:relative; top:150px;">ÜYE OL</div>

              <input type="checkbox" class="bilgilendirme" id="bilgi1">
              <label class="bilgi-label" for="bilgi1">Bilgilendirme e-postalarını almak istiyorum</label><br>
              <input type="checkbox" class="bilgilendirme" id="bilgi2">
              <label class="bilgi-label2" for="bilgi2">Bilgilendirme SMS’lerini almak istiyorum</label><br>
              <input type="checkbox" class="bilgilendirme" id="bilgi3">
              <label class="bilgi-label3" for="bilgi3">Üyelik sözleşmesi ve Kişisel verilerin korunmasını<br> kabul ediyorum.</label><br>

            </b-tab>
              
            
        
        </b-tabs>
       



      
     


    </div>  
</template>


<script>
import axios from "axios";
const baseURL ="http://localhost:7000/uye/kaydet"
export default {
    
    data(){
        return{
            input:{
                username:"",
                password:""
            },
            Uyeler:[],
            hatali:false,

            user:[],
            AdSoyad:"",
            email:"",
            telefon:"",
            sifre:""




            
        };


    },
    async created(){
        try{
            const res = await axios.get("http://localhost:7000/uye")
            this.Uyeler = res.data;
        }
        catch(e){
            console.error(e);
        }
    },
    
    methods:{
        login(){
            for(let i=0; i<this.Uyeler.length; i++){
                
                if(this.input.username !="" && this.input.password !=""){
                    
                    if(
                        this.input.username == this.Uyeler[i].email &&
                        this.input.password == this.Uyeler[i].sifre
                    ){
                        alert("Giriş Başarılı Anasayfaya Yönlendiriliyorsunuz");
                        this.$emit("authenticated", true);
                        this.$router.replace({ path: "/"});
                        this.hatali = true;
                    }
                
                }
            }
            if(this.input.username=="" || this.input.password ==""){
                alert("Bunlar Boş")
            }
        },
        async userEkle() {
         try{
         const res = await axios.post(baseURL,{
       
         AdSoyad:this.AdSoyad,
         email:this.email,
         telefon:this.telefon,
         sifre:this.sifre
       
          
         });
          if(res.err === true) throw new Error()
          else console.log("başarılı")
       } catch {
         console.log("hata")
       }

       },
    }
   
   
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