<template>
    <div class="front-card">
        <div v-if="response[indx].poster_path == null" class="notFoundInfoImg">
            <h3>Copertina non trovata</h3>
            <img decode="async" :src="srcFlag + '/9/95/No_immagine_disponibile.svg'"
                alt="PlaceHolder Poster">
            <h3 v-if="type == 'movie'">{{response[indx].title}}</h3>
            <h3 v-else>{{response[indx].name}}</h3>
        </div>
        <img v-else-if="type == 'movie'" class="poster" :src="imgPt + response[indx].poster_path"
            :alt="`copertina ${response[indx].title} `" />
        <img v-else-if="type == 'TV' " class="poster" :src="imgPt + response[indx].poster_path"
            :alt="`copertina ${response[indx].name} `" />
    </div>
</template>

<script>

    export default {
        name:'frontCard',
        props: {
            type: String,
            response: Array,
            indx: Number,
            imgPt: String,
            srcFlag: String,
        }
    }

</script>

<style lang="scss">

    @import '../../styles/vars.scss';
    @import '../../styles/general.scss';
    @import '../../styles/keyframes.scss';

    .poster {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

    .notFoundInfoImg {
        padding: 1rem 0;
    
        img {
            width: 80%;
            margin: 1rem 0;
        }
    }
    
</style>