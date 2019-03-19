import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '../components/AddBlog.vue'
import ShowBlogs from '../components/ShowBlogs.vue'
import SingleBlog from '../components/SingleBlog.vue'
import EditBlog from '../components/EditBlog.vue'

Vue.use(Router);
//实例化路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowBlogs',
      component: ShowBlogs
    },
    {
      path: '/add',
      name: 'AddBlogs',
      component: AddBlog
    },
    {
      path:'/blog/:id',
      component:SingleBlog
    },{
      path:'/edit/:id',
      component:EditBlog
    }
  ],
  mode:'history'
})

// mode:'history' 路由模式可选hash,history
