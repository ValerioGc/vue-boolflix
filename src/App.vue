<template>
  <div id="app">
    <appHeader @getSearchQuery="getSrcQuery" />
    <appMain v-if="reqState !== 'error'" :foundFilm="movieArray" :foundSeries="tvSeriesArray" :sState="searchState"
      :sStateTv="searchStateTv" />
    <div v-if="reqState == 'error'" class="errorD">
      <h2>Errore! Nessuna risposta dal server</h2>
    </div>
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

        searchState: 'empty',
        searchStateTv: 'empty',
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
          this.tvSeriesArray = responseTvSeries.data.results;

        // Controllo Array Risultati Film
          if (this.movieArray.length == 0) {
            this.searchState = 'notFound' ;
          } else {
            this.searchState = 'searching' ;
          }
        // Controllo Risultati Serie TV
          if (this.tvSeriesArray.length == 0) {
            this.searchStateTv = 'notFound' ;
          } else {
            this.searchStateTv = 'searching';
          }
        // Stato Richiesta
          this.reqState = 'loading';
          console.log('Request State:' + ' ' + this.reqState);
          this.checkStatus();
        } catch (error) {
          this.reqState = 'error';
          this.noResp = true;
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
  @import './styles/general.scss';

  #app {
        background-color: $primary_color;
    .errorD {
      height: 100vh;
      background-color: $secondary_color;
      color: $light_color;
      text-align: center;
      padding: 15rem 0;
      
      h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 36px;
      }
    }
  }

</style>
