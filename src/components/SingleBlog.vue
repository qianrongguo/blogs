<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.author}}</p>
    <p>分类:</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">
        {{category}}
      </li>
    </ul>
    <button @click="deleteBlogs()">删除</button>
    <router-link :to=" '/edit/' + id ">编辑</router-link>
  </div>
</template>

<script>
  export default {
    name: "single-blog",
    data() {
      return {
        id: this.$route.params.id,
        blog: {}   //展示id的blog  blog是一个对象
      }
    },
    created(){   //每个文章都含有一个id  通过每个文章的id来查看文章
      this.$http.get('https://vuedemo-a31a0.firebaseio.com/posts/'+this.id+'.json').then(function (data) {
        this.blog = data.body;  //直接把值复制给id
        return data.json()
      }).then(function (data) {
        this.blog = data
      })
    },
    methods:{
      deleteBlogs(){
        this.$http.delete('https://vuedemo-a31a0.firebaseio.com/posts/'+this.id+'.json' ).then(data => {
          this.$router.push({path:'/'})
        })
      }
    },

    component: {
      //someComponent
    }
  }
</script>

<style scoped>
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
  }
</style>
