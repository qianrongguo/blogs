<template>
  <div id="add-blog">
    <!--<AddBlog></AddBlog>-->
    <!--<ShowBlogs></ShowBlogs>-->
    <BlogHeader></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  // router-view会根据router路径来执行页面
  import BlogHeader from './components/BlogHeader.vue'
  import AddBlog from './components/AddBlog.vue'
  import ShowBlogs from './components/ShowBlogs.vue'

export default {
  name: 'App',
  components:{
    AddBlog,
    ShowBlogs,
    BlogHeader
  }
}
</script>

<style>


</style>
