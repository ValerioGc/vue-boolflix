<template>
    <main>
        <div>
            <!-- Schermata iniziale -->
            <h2 v-if="sState == 'empty'" class="placeHl">
                Usa la barra di ricerca per visualizzare i risultati
            </h2>
            <h2 v-if="sState == 'notFound'" class="placeHl">
                Nessun Risultato
            </h2>
            <h2 v-if="sState == 'error'" class="placeHl">
                Errore! Nessuna risposta dal server
            </h2>
            <!-- Titolo sezione -->
            <h2 v-if="foundSeries.length > 0">Film:</h2>
            <!-- Card container -->
            <ul id="movie-card-container">
                <li class="card-cont" v-for="(response, index) in foundFilm" :key="index">
                    <span class="card bgMove slit-in">
                        <!-- Copertina  Card -->
                        <div class="front-card">
                            <div v-if="response.poster_path == null" class="notFoundInfo">
                                <h3>Copertina non trovata</h3>
                                <img :src="sourceFlag + '/9/95/No_immagine_disponibile.svg'" alt="">
                            </div>
                            <img v-else class="poster card-front" :src="imgPath + response.poster_path"
                                :alt="`copertina ${response.title} `" />
                        </div>
                        <!-- Retro card -->
                        <div class="info fip-in hidden">
                            <!-- Titolo Film -->
                            <div>
                                <p>
                                    <span class="inf">Titolo:</span> {{ response.title }}
                                </p>
                                <p>
                                    <span class="inf">Titolo Originale:</span> {{ response.original_title }}
                                </p>
                            </div>
                            <!-- Bandiera Lingua Film  -->
                            <div>
                                <span class="inf lang">Lingua Originale:</span>
                                <img class="flagL" :src="sourceFlag + selectFlag(index)"
                                    :alt="`${response.original_language} Flag`" />
                                <span v-if="langFlag == '/0/03/Flag_Blank.svg'">
                                    {{response.original_language}}
                                </span>
                            </div>
                            <!-- Voto Film -->
                            <div class="rating">
                                <span class="inf">Voto: </span>
                                <span v-if="response.vote_average !== 0">
                                    <i v-for="n in 5" class="fa-star" :key="n + 3"
                                        style="--fa-animation-iteration-count: 2; --fa-animation-delay: 0.2s;"
                                        :class="(n >= calcStar(response.vote_average)) ? 'fa-regular':'fa-solid'"></i>
                                </span>
                                <p v-else> Voto non disponibile </p>
                            </div>
                            <!-- Trama Film -->
                            <div class="resume">
                                <p v-if="response.overview !== ''">
                                    <span class="inf">Trama:</span>
                                    {{response.overview }}
                                </p>
                                <p v-else>
                                    <span class="inf">Trama:</span> Trama non disponibile
                                </p>
                            </div>
                        </div>
                    </span>
                </li>
            </ul>
        </div>
        <div>
            <!-- Titolo sezione -->
            <h2 v-if="foundSeries.length > 0">Serie TV:</h2>
            <!-- Card Container -->
            <ul id="tv-card-container">
                <li class="card-cont" v-for="(responseTv, index2) in foundSeries" :key="index2">
                    <span class="card bgMove slit-in">
                        <!-- Copertina card -->

                        <!-- <transition name:></transition> -->
                        <img class="poster" :src="imgPath + responseTv.poster_path"
                            :alt="`copertina ${responseTv.name}`" />

                        <!-- Retro card -->
                        <div class="info flip-in hidden">
                            <!-- Titolo Serie Tv  -->
                            <div>
                                <span>
                                    <span class="inf">Titolo:</span>
                                    <p v-if="responseTv.name !== ''">{{ responseTv.name }}</p>
                                    <p v-else>Titolo non trovato</p>
                                </span>
                    <span>
                        <p>
                            <span class="inf">Titolo Originale:</span> {{ responseTv.original_name }}
                        </p>
                    </span>
        </div>
        <!-- Bandiera Lingua Serie Tv -->
        <div>
            <span class="inf lang">Lingua Originale:</span>
            <img class="flagL" :src="sourceFlag + selectFlag(index2)" :alt="responseTv.original_language + 'Flag'" />
            <span v-if="langFlag == '/0/03/Flag_Blank.svg'">
                {{responseTv.original_language}}
            </span>
        </div>
        <!-- Voto Serie TV -->
        <div class="rating">
            <span class="inf">Voto: </span>
            <span v-if="responseTv.vote_average !== 0">
                <i v-for="n in 5" class="fa-star" :key="n + 4"
                    style="--fa-animation-iteration-count: 2; --fa-animation-delay: 0.2s;"
                    :class="(n >= calcStar(responseTv.vote_average)) ? 'fa-regular':'fa-solid'"></i>
            </span>
            <p v-else> Voto non disponibile </p>
        </div>
        <!-- Trama Serie Tv-->
        <div class="resume">
            <p v-if="responseTv.overview !== ''">
                <span class="inf">Trama:</span>
                {{responseTv.overview }}
            </p>
            <p v-else>
                <span class="inf">Trama:</span> Trama non disponibile
            </p>
        </div>
        </div>
        </span>
        </li>
        </ul>
        </div>
    </main>
</template>

<script>

    export default {
        name:'appMain',
        props: {
            foundFilm: Array,
            foundSeries: Array,
            sState: String,
        },
        data() {
            return {
            // Immagine Bandiera
                langFlag:'',
                sourceFlag: 'https://upload.wikimedia.org/wikipedia/commons',
                imgPath:'https://image.tmdb.org/t/p/w342',
            }
        },
        methods: {
        // Seleziona bandiera lingua
            selectFlag (index) {
                let flag = this.langFlag;
                if (this.foundFilm[index].original_language == 'en') {
                    flag = '/a/ae/Flag_of_the_United_Kingdom.svg';
                } else if (this.foundFilm[index].original_language == 'it') {
                    flag = '/c/ca/Bandiera_italiana_foto.svg';
                } else if (this.foundFilm[index].original_language == 'es') {
                    flag = '/9/9a/Flag_of_Spain.svg';
                } else if (this.foundFilm[index].original_language == 'fr') {
                    flag = '/c/c3/Flag_of_France.svg';
                } else if (this.foundFilm[index].original_language == 'de') {
                    flag = '/b/ba/Flag_of_Germany.svg';
                } else if (this.foundFilm[index].original_language == 'ja') {
                    flag = '/9/9e/Flag_of_Japan.svg';
                } else if (this.foundFilm[index].original_language == 'ko') {
                    flag = '/0/09/Flag_of_South_Korea.svg';
                } else if (this.foundFilm[index].original_language == 'cn') {
                    flag = '/f/fa/Flag_of_the_People%27s_Republic_of_China.svg';
                } else if (this.foundFilm[index].original_language == 'tr') {
                    flag = '/b/b4/Flag_of_Turkey.svg';
                } else if (this.foundFilm[index].original_language == 'nl') {
                    flag = '/2/20/Flag_of_the_Netherlands.svg';
                } else if (this.foundFilm[index].original_language == 'pl') {
                    flag = '/1/15/Flag_of_Poland_%28with_coat_of_arms%29.svg';
                } else if (this.foundFilm[index].original_language == 'ca') {
                    flag = '/c/cf/Flag_of_Canada.svg';
                } else {
                    flag = '/0/03/Flag_Blank.svg';
                }
                return flag;
            },
        // Conversione punteggio
            calcStar(score) {
                return Math.ceil(score / 2);
            },
        },
    }

</script>

<style lang="scss">




    @import '../styles/vars.scss';
    @import '../styles/general.scss';
    @import '../styles/keyframes.scss';

    .notFoundInfo {
        padding: 1rem 0;
        img {
            width: 100%;
            margin: 1rem 0;
        }
    }

    main {
        background-color: $secondary_color;
        min-height: 100vh;
        text-align: center;
        padding-top: 6rem;

        .placeHl {
            font-size: 36px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            line-height: 50px;
        }

        h2 {
            display: block;
            padding: 2rem 0;
            color: $light_color;
            text-shadow: 2px 2px 4px $primary_color;
        }

        #tv-card-container,
        #movie-card-container {
            &:after {
                    content: "";
                    flex: center;
                }
            width: 90%;
            height: 100%;
            margin: 1rem auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            text-align: center;
            list-style-type: none;

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
                &:hover .notFoundInfo,
                &:hover .poster {
                    display: none;
                }
                &:hover .info {
                    transition: all 0.7s linear 0.1s;
                    display: block;
                }

                .card {
                    color: $light_color;
                    text-shadow: 0px 0px 1px $secondary_color;
                    width: 100%;
                    height: 100%;
                    box-shadow: 0px 0px 6px -2px $primary_color;
                    border-radius: 5px;
                    overflow-y: hidden;
                    padding: 1.5rem 1rem;
                    display: block;
                    animation: slit-in 0.45s ease-in-out both;

                    .poster {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        width: 100%;
                    }

                    .inf {
                        color: $light_color;
                        text-transform: capitalize;
                        font-weight: bold;
                        text-decoration-line: underline;
                        padding: 3px 0;
                        font-style: italic;
                        display: block;
                    }

                    p {
                        padding: 0.8rem 0;
                    }

                    .flagL {
                        width: 20px;
                        height: 15px;
                        margin: 0 1rem;
                    }

                    .rating {
                        list-style: none;
                        padding: 1rem 0;

                        i {
                            display: inline-block;
                            color: $stars_color;
                            text-shadow: 2px 2px 4px $primary_color;
                        }
                    }
                }
            }
        }
    }

</style>

<div>
    <i v-for="star in 5" class="fa-star" :class="(star >= calcStar(response.vote_average)) ? 'fa-solid':'fa-regular'"  key="stars"></i>
</div>


getNumb(score) {
    return Math.ceil(score / 2);
}