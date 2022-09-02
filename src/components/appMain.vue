<template>
    <main>
        <div>
            <!-- Schermata iniziale -->
            <h2 v-if="sState == 'empty'" class="placeHl">
                Usa la barra di ricerca per visualizzare i risultati
            </h2>
            <h2 v-if="sState == 'notFound'" class="notFound bounce-in">
                Nessun Risultato
            </h2>
            <h2 v-if="sState == 'error'" class="nF bounce-in">
                Errore! Nessuna risposta dal server
            </h2>
            <!-- Titolo sezione -->
            <h2 v-if="foundSeries.length > 0">Film:</h2>
            <!-- Card container -->
            <ul id="movie-card-container">
                <li class="card-cont" v-for="(response, index) in foundFilm" :key="index">
                    <span class="card slit-in">
                        <!-- Copertina  Card -->
                        <frontCard :type="'movie'" :response="foundFilm" :indx="index" :imgPt="imgPath"
                            :srcFlag="sourceFlag" />
                        <!-- Retro card -->
                        <div class="back-card bgMove hidden">
                            <!-- Titolo Film -->
                            <titleCard :response="foundFilm" :indx="index" :type="'movie'"/>
                            <!-- Bandiera Lingua Film  -->
                            <flagCard :response="foundFilm" :indx="index" class="language" :srcFlag="sourceFlag" />
                            <!-- Voto Film -->
                            <scoreCard :response="foundFilm" :indx="index" />
                            <!-- Trama Film -->
                            <resumeCard :response="foundFilm" :indx="index" />
                        </div>
                    </span>
                </li>
            </ul>
        </div>
        <!-- Sezione Serie TV -->
        <div>
            <!-- Titolo sezione -->
            <h2 v-if="foundSeries.length > 0">Serie TV:</h2>
            <!-- Card Container -->
            <ul id="tv-card-container">
                <li class="card-cont" v-for="(responseTv, index2) in foundSeries" :key="index2">
                    <span class="card slit-in">
                        <!-- Copertina card -->
                        <frontCard :type="'TV'" :response="foundSeries" :indx="index2" :imgPt="imgPath"
                            :srcFlag="sourceFlag" />
                        <!-- Retro card -->
                        <div class="back-card bgMove hidden">
                            <!-- Titolo Serie Tv  -->
                            <titleCard :response="foundSeries" :indx="index2" :type="'TV'" />
                            <!-- Bandiera Lingua Serie Tv -->
                            <flagCard :response="foundSeries" :indx="index2" :srcFlag="sourceFlag" />
                            <!-- Voto Serie TV -->
                            <scoreCard :response="foundSeries" :indx="index2" />
                            <!-- Trama Serie Tv-->
                            <resumeCard :response="foundSeries" :indx="index2" />
                        </div>
                    </span>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
    
    import titleCard from './card-components/titleCard.vue';
    import frontCard from './card-components/frontCard.vue';
    import flagCard from './card-components/flagCard.vue';
    import scoreCard from './card-components/scoreCard.vue';
    import resumeCard from './card-components/resumeCard.vue';

    export default {
        name: "appMain",
        components: {
            titleCard,
            frontCard,
            flagCard,
            scoreCard,
            resumeCard,
        },
        props: {
            foundFilm: Array,
            foundSeries: Array,
            sState: String,
        },
        data() {
            return {
                sourceFlag: "https://upload.wikimedia.org/wikipedia/commons",
                imgPath: "https://image.tmdb.org/t/p/w342",
            }
        },
    }

</script>

<style lang="scss">

    @import '../styles/vars.scss';
    @import '../styles/general.scss';
    @import '../styles/keyframes.scss';

    main {
        background-color: $secondary_color;
        min-height: 100vh;
        text-align: center;

        .placeHl {
            font-size: 36px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            line-height: 50px;
        }

        .nF {
            padding-top: 20rem;
        }

        h2 {
            display: block;
            padding: 2rem 0;
            color: $light_color;
            text-shadow: 2px 2px 4px $primary_color;
        }

        #tv-card-container,
        #movie-card-container {
            width: 90%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            text-align: center;
            list-style-type: none;
            padding-bottom: 2rem;

            .card-cont {
                width: calc(100% / 6);
                height: 45vh;
                margin: 3px;
                overflow-y: hidden;
                scroll-behavior: smooth;

                &:hover .card {
                    animation: flip-in 0.7s linear both;
                    overflow-y: scroll;
                }
                &:hover .notFoundInfoImg,
                &:hover .poster {
                    display: none;
                }
                &:hover .back-card {
                    transition: all 0.7s linear 0.1s;
                    display: block;
                }

                .card {
                    color: $light_color;
                    text-shadow: 0px 0px 1px $secondary_color;
                    width: 100%;
                    height: 100%;
                    box-shadow: inset 0px 0px 6px -2px $primary_color;
                    border-radius: 5px;
                    overflow-y: hidden;
                    display: block;
                    animation: slit-in 0.45s ease-in-out both;

                    .back-card {
                        padding: 1.5rem 1rem;
                    }
                    p {
                        padding: 0.8rem 0;
                    }
                }
            }
        }
    }

</style>