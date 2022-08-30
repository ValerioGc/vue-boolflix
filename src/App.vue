<template>
  <div id="app">
    <appHeader @getSearchQuery.prevent="" />
    <appMain :foundFilm="movieArray" />
  </div>
</template>

<script>
  import axios from 'axios';
  import appHeader from './components/appHeader.vue';
  import appMain from './components/appMain.vue';

export default {
  name: 'App',
  components: {
    appHeader,
    appMain,
  },
  data() {
    return {
      reqState:'loading',
      movieArray: [],
    }
  },
  created() { this.callApi()},

  methods: {
    async callApi() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6e89c6f4314800d5fba95fd05fdabb24&query=2001&lang=it-IT`);
        this.movieArray = response.data.results;
        this.reqState = 'loading';
      } catch (error) {
        this.reqState = 'error';
        console.log('Request State Feed:' + ' ' + this.reqState);
      }
      console.table('Array Film:' + ' ' + this.movieArray);
      this.reqState = 'loading complete';
      console.log('Request State:' + ' ' + this.reqState);
    }
  }
}

</script>

<style lang="scss">

</style>
