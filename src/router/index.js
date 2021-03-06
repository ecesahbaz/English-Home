import Vue from 'vue'
import VueRouter from 'vue-router'
import Anasayfa from '../views/Anasayfa.vue'
import Uyegirisisayfası from '../views/Uyegirisisayfası.vue'
import Sepetsayfası from '../views/Sepetsayfası.vue'
import Yatakodasısayfası from '../views/Yatakodasısayfası.vue'
import Urunbilgi from '../views/Urunbilgi.vue'
import Urban from '../views/Urban.vue'
import kurumsals from '../views/kurumsals.vue'
import Hikaye from '../views/Hikaye.vue'
import Urunbilgi2 from '../views/Urunbilgi2.vue'
import Urbansayfa2 from '../views/Urbansayfa2.vue'
import Dortluresim from '../views/Dortluresim.vue'
import Urbansayfa3 from '../views/Urbansayfa3.vue'
import Filtrerenk from '../views/Filtrerenk.vue'
import gift from '../views/gift.vue'



Vue.use(VueRouter)

const routes = [
  {
    
    path: '/anasayfa',
    name: 'anasayfa',
    component: Anasayfa
  },
  {
    
    path: '/',
    name: 'gift',
    component: gift
  },
  {
    path: '/uye-giris',
    name: 'uyegiris',
    component: Uyegirisisayfası
  },
  {
    path: '/sepet-giris',
    name: 'sepettgiris',
    component: Sepetsayfası
  },
  {
    path: '/yatakodası',
    name: 'yatakodasısayfa',
    component: Yatakodasısayfası
  },
  {
    path: '/urunsayfa',
    name: 'yatakodasıurun',
    component: Urunbilgi
  },
  {
    path: '/urbanfolk',
    name: 'urbanfolksayfa',
    component: Urban
  },
  {
    path: '/kurumsal-satis',
    name: 'kurumsalsatis',
    component: kurumsals
  },
  {
    path: '/hikayemiz',
    name: 'hikayesayfa',
    component: Hikaye
  },
  {
    path: '/urban-urunsayfa',
    name: 'urbanfolkurun',
    component: Urunbilgi2
  },
  {
    path: '/urbanfolkpage2',
    name: 'urbanfolksayfa',
    component: Urbansayfa2
  },
  {
    path: '/dortlusayfa',
    name: 'urbanfolkdortlu',
    component: Dortluresim
  },
  {
    path: '/urbanfolkpage3',
    name: 'urbanfolksayfa2',
    component: Urbansayfa3
  },
  {
    path: '/urbanfolkfiltre',
    name: 'filtreleme',
    component: Filtrerenk
  },
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
