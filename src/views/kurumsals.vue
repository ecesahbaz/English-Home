<template>
  <div>
      <Header></Header>
      <KurumsalSatis></KurumsalSatis>
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
import KurumsalSatis from '@/components/KurumsalSatis.vue'


export default {
    name:'kurumsals',
    components:{
        Header,
        KurumsalSatis
        
    }
}
</script>

<style>

</style>