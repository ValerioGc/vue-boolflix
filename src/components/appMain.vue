<template>
    <main>
        <h2 v-if="this.foundSeries.length < 1" class="placeHl">
            Usa la barra di ricerca per visualizzare i risultati
        </h2>
        <div>
            <h2 v-if="this.foundSeries.length > 0">Film:</h2>
            <ul id="movie-card-container">
                <li class="card" v-for="(response, index) in foundFilm" :key="index">
                    <!-- <img class="poster" :src="imgPath + response.poster_path" :alt="`copertina ${response.title} `"> -->
                    <p>Titolo: {{ response.title }}</p>
                    <p>Titolo Originale: {{ response.original_title }}</p>
                    <img class="flagL" :src="sourceFlag + langFlag" :alt="`${response.original_language} Flag`">
                    <div class="rating">
                        <span>Voto: {{ response.vote_average }}</span>
                        <i v-for="starF in starFull" :key="starF" class="fa-solid fa-star"></i>
                        <i v-for="starE in starEmpty" :key="starE" class="fa-regular fa-star"></i>
                    </div>
                    <p class="resume">{{ response.overview }}</p>
                </li>
            </ul>
        </div>
        <div>
            <h2 v-if="this.foundSeries.length > 0">Serie TV:</h2>
            <ul id="tv-card-container">
                <li class="card" v-for="(responseTv, index2) in foundSeries" :key="index2 + '3'">
                    <!-- <img class="poster" :src="imgPath + response.poster_path" :alt="`copertina ${response.name} `"> -->
                    <p>Titolo: {{ responseTv.name }}</p>
                    <p>Titolo Originale: {{ responseTv.original_name }}</p>
                    <img class="flagL" :src="sourceFlag + langFlag" :alt="responseTv.original_language + 'Flag' ">
                    <span v-if="langFlag == '/0/03/Flag_Blank.svg'">
                        {{responseTv.original_language}}
                    </span>
                    <!-- <p>Voto: {{ responseTv.vote_average }}</p> -->
                    <div class="rating">
                        <span>Voto: {{ responseTv.vote_average }}</span>
                        <i v-for="TvstarF in starFull" :key="TvstarF" class="fa-solid fa-star"></i>
                        <i v-for="TvStarE in starEmpty" :key="TvStarE" class="fa-regular fa-star"></i>
                    </div>
                    <p class="resume">{{ responseTv.overview }}</p>
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
        },
        data() {
            return {
            // Immagine Bandiera
                langFlag:'/0/03/Flag_Blank.svg',
                sourceFlag: 'https://upload.wikimedia.org/wikipedia/commons',
                imgPath:'https://image.tmdb.org/t/p/w342',
            // Conversione e calcolo punteggio
                actualRating: '5',
                convertedRating: '0',
                
                starFull: 3,
                starEmpty: 2,

            }
        },
        created() {
            this.selectFlag();
        },
        methods: {
            selectFlag () {
                for (let i = 0; i < this.foundFilm.length; i++) {
                    if (this.foundFilm[i].original_language == 'en') {
                        this.langFlag = '/a/ae/Flag_of_the_United_Kingdom.svg';
                    } else if (this.foundFilm[i].original_language == 'it') {
                        this.langFlag = '/c/ca/Bandiera_italiana_foto.svg';
                    } else if (this.foundFilm[i].original_language == 'es') {
                        this.langFlag = '/9/9a/Flag_of_Spain.svg';
                    } else if (this.foundFilm[i].original_language == 'fr') {
                        this.langFlag = '/c/c3/Flag_of_France.svg';
                    } else if (this.foundFilm[i].original_language == 'de') {
                        this.langFlag = '/b/ba/Flag_of_Germany.svg';
                    }
                }
            },
        // Conversione punteggio
            calcStar() {
                this.actualRating = this.foundFilm.vote_average;
                let vote = Math.ceil(this.actualRating / 2);
                this.convertedRating = vote;
            }
        // Assegnazione variabile
            
        },
    }

</script>

<style lang="scss">

    @import '../styles/vars.scss';
    @import '../styles/general.scss';

    main {
        background-color: $secondary_color;
        min-height: calc(100vh - 6rem);
        text-align: center;

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

            ::-webkit-scrollbar {
                width: 0;
            }
        
            .card {
                width: calc(100% / 6);
                height: 45vh;
                list-style-type: none;
                margin: 3px;
                box-shadow: 0px 0px 5px -1px $primary_color;
                border-radius: 5px;
                overflow-y: auto;

                .poster {
                    width: 100%;
                    height: 100%;
                }
                p {
                    padding: 0.5rem 0;
                }
                .flagL {
                    width: 20px;
                    height: 15px;
                }

                span {
                    text-transform: uppercase;
                }
                .rating {
                    list-style: none;

                    i {
                        display: inline-block;
                        color: $light_color;
                        text-shadow: 2px 2px 4px $primary_color;
                    }
                }
            }
        }


    }

</style>