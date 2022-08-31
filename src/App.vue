<template>
  <div id="app">
    <appHeader @getSearchQuery="getSrcQuery" />
    <appMain :foundFilm="movieArray" :foundSeries="tvSeriesArray" />
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
        srcQuery: '',
      // Array Risultati
        movieArray: [],
        tvSeriesArray: [],
      // API Info
        apiLink:'https://api.themoviedb.org/3',
        apiKey:'6e89c6f4314800d5fba95fd05fdabb24',
      // Stato richiesta
        apiLang:'it-IT',
        reqState: 'loading',
      }
    },

    methods: {
      getSrcQuery (query) {
        this.srcQuery = query.toLowerCase().trim();
        this.callApi();
      },

      async callApi() {
        try {
        // Chiamata API
          const responseMovie = await axios.get(this.apiLink + '/search/movie?api_key=' + this.apiKey + '&query=' +this.srcQuery + '&language=' + this.apiLang);
          const responseTvSeries = await axios.get(this.apiLink + '/search/tv?api_key=' + this.apiKey + '&query=' +this.srcQuery + '&language=' + this.apiLang);
        // Array Risultati
          this.movieArray = responseMovie.data.results;
          console.table('moviearr:' + ' ' + this.movieArray)

          this.tvSeriesArray = responseTvSeries.data.results;
        // Stato Richiesta
          this.reqState = 'loading';
          console.log('Request State:' + ' ' + this.reqState);
          this.checkStatus();
        } catch (error) {
          this.reqState = 'error';
          console.log('Request State Feed:' + ' ' + this.reqState);
        }
      },
      
      checkStatus() {
        if (this.movieArray.length > 0 ) {
          this.reqState = 'loading complete';
          console.log('Request State:' + ' ' + this.reqState);
        }
      }
    }
  }

</script>

<style lang="scss">

  @import './styles/vars.scss';

  #app {
    background-color: $secondary_color;
  }

</style>
