<template>
  <div id="show-blogs" v-theme:columu="'narrow'">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs"  class="single-blog">
      <router-link v-bind:to=" '/blog/'+ blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        <article>{{blog.content | snippet}}</article>
      </router-link>
    </div>
  </div>
</template>

<script>
  //import someComponent from './someComponent'
  export default {
    name: "show-blogs",
    data() {
      return {
        blogs: [],
        search:''
      }
    },
    created() {   //生命周期，create完成数据观测，属性和方法的运算初始化事件$el还没有显示出来
      this.$http.get('https://vuedemo-a31a0.firebaseio.com/posts.json').then(data => {
        // console.log(data.json());
        return data.json()
        // this.blogs = data.body.slice(0, 10)  //只要10个数据
      }).then(function (data) {
        var blogsArray = [];   //空数组
        for (let key in data){
          // console.log(data[key],key+'9999');
          data[key].id = key;
          blogsArray.push(data[key])  //数据添加到数组里
        }
        // console.log(blogsArray)
        this.blogs = blogsArray;
      })
    },

    computed:{
      filteredBlogs:function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search)
        })
      }
    },
    filters:{   //局部的过滤
      'to-uppercase':function(value){
        return value.toUpperCase()
      }

    },
    directives:{  //局部自定义指令
      'rainbow':{
        bind(el,binding,vnode){
          el.style.color = 'red'
        }
      }
    },

    component: {
      //someComponent
    }
  }
</script>

<style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: gainsboro;
    border: 1px dotted #aaa;
  }

 #show-blogs a{
   color: #444;
   text-decoration: none;
  }

  input[type="text"]{
    box-sizing: border-box;
    padding: 8px;
    width: 100%;
  }
</style>
