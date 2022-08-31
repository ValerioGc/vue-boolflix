<template>
    <main>
        <div>
            <h2 v-if="sState == 'empty'" class="placeHl">
                Usa la barra di ricerca per visualizzare i risultati
            </h2>
            <h2 v-if="sState == 'notFound'" class="placeHl">
                Nessun Risultato
            </h2>
            <h2 v-if="foundSeries.length > 0">Film:</h2>
            <ul id="movie-card-container">
                <li class="card bgMove slit-in" v-for="(response, index) in foundFilm" :key="index">
                    <!-- <img class="poster" :src="imgPath + response.poster_path" :alt="`copertina ${response.title} `" />  -->
                    <div class="info">
                        <!-- Titolo -->
                        <div>
                            <p>
                                <span class="inf">Titolo:</span> {{ response.title }}
                            </p>
                            <p>
                                <span class="inf">Titolo Originale:</span> {{ response.original_title }}
                            </p>
                        </div>
                        <!-- Bandiera Lingua -->
                        <div>
                            <span class="inf lang">Lingua Originale:</span>
                            <img class="flagL" :src="sourceFlag + selectFlag(index)"
                                :alt="`${response.original_language} Flag`" />
                            <span v-if="langFlag == '/0/03/Flag_Blank.svg'">
                                {{responseTv.original_language}}
                            </span>
                        </div>
                        <!-- Voto Serie TV -->
                        <div class="rating">
                            <span>Voto: {{ response.vote_average }}</span>
                            <i style="--fa-animation-iteration-count: 1; --fa-animation-delay: 0.2s;"
                                v-for="starF in starFull" :key=" 20 + starF" class="fa-solid fa-star fa-bounce"></i>
                            <i style="--fa-animation-iteration-count: 1; --fa-animation-delay: 0.2s;"
                                v-for="starE in starEmpty" :key="30 + starE" class="fa-regular fa-star fa-bounce"></i>
                        </div>
                        <!-- Trama -->
                        <p class="resume">
                            <span class="inf">Trama:</span>{{ response.overview }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <h2 v-if="foundSeries.length > 0">Serie TV:</h2>
            <ul id="tv-card-container">
                <li class="card bgMove slit-in" v-for="(responseTv, index2) in foundSeries" :key="index2">
                    <!-- <img class="poster" :src="imgPath + response.poster_path" :alt="`copertina ${response.name}`" /> -->
                    <div class="info">
                        <!-- Titolo -->
                        <div>
                            <p>
                                <span class="inf">Titolo:</span> {{ responseTv.name }}
                            </p>
                            <p>
                                <span class="inf">Titolo Originale:</span> {{ responseTv.original_name }}
                            </p>
                        </div>
                        <!-- Bandiera Lingua -->
                        <div>
                            <span class="inf lang">Lingua Originale:</span>
                            <img class="flagL" :src="sourceFlag + selectFlag(index2)"
                                :alt="responseTv.original_language + 'Flag'" />
                            <span v-if="langFlag == '/0/03/Flag_Blank.svg'">
                                {{responseTv.original_language}}
                            </span>
                        </div>
                        <!-- Voto Serie TV -->
                        <div class="rating">
                            <span class="inf">Voto: {{ responseTv.vote_average }} </span>
                            <i style="--fa-animation-iteration-count: 1; --fa-animation-delay: 0.2s;"
                                v-for="starF in starFull" :key=" 40 + starF" class="fa-solid fa-star fa-bounce"></i>
                            <i style="--fa-animation-iteration-count: 1; --fa-animation-delay: 0.2s;"
                                v-for="starE in starEmpty" :key="50 + starE" class="fa-regular fa-star fa-bounce"></i>
                        </div>
                        <!-- Trama -->
                        <p class="resume">
                            <span class="inf">Trama:</span>{{ responseTv.overview }}
                        </p>
                    </div>
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
            sStateTv: String,
        },
        data() {
            return {
            // Immagine Bandiera
                langFlag:'',
                sourceFlag: 'https://upload.wikimedia.org/wikipedia/commons',
                imgPath:'https://image.tmdb.org/t/p/w342',
            // Conversione e calcolo punteggio
                actualRating: '5',
                convertedRating: '0',
            // Stelle voto
                starFull: 3,
                starEmpty: 2,
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
                } else { 
                    flag = '/0/03/Flag_Blank.svg';
                }
                return flag;
            },
        // Conversione punteggio
            calcStar(index) {
                this.actualRating = this.foundFilm[index].vote_average;
                let vote = Math.ceil(this.actualRating / 2);
                this.convertedRating = vote;
                this.starCount(vote);
                return vote;
            },
        // Assegnazione variabile quantità stelle 
            starCount(vote) {
                if (vote == 1) {
                    this.starEmpty = 4;
                    this.starFull = 1;
                } else if (vote == 2) {
                    this.starEmpty = 3;
                    this.starFull = 2;
                } else if (vote == 3) {
                    this.starEmpty = 2;
                    this.starFull = 3;
                } else if (vote == 4) {
                    this.starEmpty = 1;
                    this.starFull = 4;
                } else if (vote == 5) {
                    this.starEmpty = 0;
                    this.starFull = 5;
                }
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
            width: 90%;
            height: 100%;
            margin: 1rem auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            text-align: left;

            .card {
                color: $light_color;
                text-shadow: 0px 0px 1px $secondary_color;
                width: calc(100% / 6);
                height: 45vh;
                list-style-type: none;
                margin: 3px;
                box-shadow: 0px 0px 6px -2px $primary_color;
                border-radius: 5px;
                overflow-y: auto;
                padding: 1.5rem;
                position: relative;

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
                }
                .inf:not(.lang) {
                    display: block;
                }

                p {
                    padding-bottom: 0.8rem;
                }

                .flagL {
                    width: 20px;
                    height: 15px;
                    margin: 0 1rem;
                }

                .rating {
                    list-style: none;

                    i {
                        display: inline-block;
                        color: $stars_color;
                        text-shadow: 2px 2px 4px $primary_color;
                    }
                }
            }
        }


    }

</style>