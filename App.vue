<template>
    <div id="app">
      <router-view></router-view>
      <meta http-equiv="refresh" content="URL=Login.vue">
    </div>
  </template>
   
  <script>
  export default {
    name: 'app',
    data () {
        return {
        }
    },
    methods: {},
  }
  </script>
   
  <style>
    .header-css{
      height:6rem;
      background: black;
      color: white;
      line-height: 6rem;
      text-align: center;
      font-size: 15px;
    }
    .header-css a {
      color: white;
      padding: 0 2rem;
    }
  </style>