<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submitted">
      <label> 博客标题</label>
      <input type="text" v-model="blog.title" required>
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular.js</label>
        <input type="checkbox" value="Angular.js" v-model="blog.categories">
      </div>
      <label for="">作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <hr>
    <div v-if="submitted">
      <h3>你的博客发送成功</h3>
    </div>
    <div id="preview">
      <h3>博客纵览</h3>
      <p>博客标题: {{blog.title}}</p>
      <p>博客内容</p>
      <p>{{blog.content}}</p>
      <ul>
        <li v-for="catogrioe in blog.categories">{{catogrioe}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: "add-blog",
    data() {
      return {
        blog: {
          title: '',
          content: '',
          categories: [],
          author: ''
        },
        authors: ['hel', 'henry', 'mary'],
        submitted: false
      }

    },
    component: {
      //someComponent
    },
    methods: {
      post: function () {   //firebase添加数据
        this.$http.post('https://vuedemo-a31a0.firebaseio.com/posts.json', this.blog).then(function (data) {
          this.submitted = true
        })
      }
    //   post: function () {   //axios添加数据
    //     axios.post('https://vuedemo-a31a0.firebaseio.com/posts.json', this.blog).then(function (data) {
    //       this.submitted = true
    //     })
    //   }
    }
  }
</script>

<style scoped>
  #add-blog {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }

  label {
    margin: 20px 0 10px;
  }

  input[type="text"], textarea, select {
    display: block;
    width: 100%;
    padding: 8px;
    border: 1px black solid;
  }

  #checkbox label {
    display: inline-block;
    margin-top: 0
  }
  #checkbox input{
    display: inline-block;
    margin-right: 10px;
  }

  button  {
    display: block;
    margin: 20px 0 ;
    background: crimson;
    color: aliceblue;
    border-radius: 4px;
    border: 0;
    padding: 14px;
    font-size: 18px;
    cursor: pointer;
  }

  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }

  h3 {
    margin-top: 10px;
  }

  textarea{
    height: 200px;
  }
</style>
