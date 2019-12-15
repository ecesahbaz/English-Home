<template>
  <div id="app" v-title="title">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
   
    <Header></Header>
    <Body></Body>
    
    
     <div class="sup-position2">
       <b-dropdown id="dropdown-form-dropup" @click="seen = false" dropup text="Footer" ref="dropdown" class="m-2" style="border-radius: 8px 8px 0px 0px; width:220px; padding: 0;" > 
         <b-dropdown-form style="height:505px; margin-right:-215px;">


           <Footer style="transform: scale(0.5)"/>
        </b-dropdown-form>
      </b-dropdown>
    </div>
   
   
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Body from '@/components/Body.vue'
import Footer from '@/components/Footer.vue'




export default {
  name: 'app',
  components: {
   
    Header,
    Body,
    Footer
  },

  data(){
    return {
      title: 'English Home',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sup-position2 {
  position:fixed;
  bottom: 0;
  left: 0px;
  background-color: rgb(246,246,246);
  height: 45px;
  z-index: 20;
}
</style>