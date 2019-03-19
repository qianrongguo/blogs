<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>博客</router-link>
        <router-link to="/add" exact>写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  //import someComponent from './someComponent'
  export default {
    name: "blog-header",
    data() {
      return {
        msg: "Hello Vue.js"
      }
    },
    component: {
      //someComponent
    }
  }

  // exact防止点击遗留 router-link-active是一个类
</script>

<style scoped>
  ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;

  }

  nav{
    background: crimson;
    margin: 30px 0;
    margin-bottom: 40px;
  }



  .router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
  }

</style>
