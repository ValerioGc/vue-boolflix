<template>
    <header>
        <nav>
            <h1>Boolflix</h1>
            <span>
                <input @change="$emit('getSearchQuery', userInput)" @keydown.enter=" $emit('getSearchQuery', userInput)" 
                    v-model="userInput" type="text" id="searchBar" placeholder="Cerca Film">
                    <!-- <select name="genre" id="genre">
                        <option v-for="(genre, index) in genreList" :key="index" value="?">{{genre.genre}}</option>
                    </select> -->
            </span>
        </nav>
    </header>
</template>

<script>

    export default {
        name:'appHeader',
        data() {
            return {
                userInput: '',
            }
        }
    }

</script>

<style lang="scss">

    @import '../styles/vars.scss';
    @import '../styles/general.scss';

        header {
            width: 100%;
            z-index: 90;
            position: fixed;
            padding: 30px 0;
            background-color: $primary_color;
            box-shadow: 0px 0px 10px -3px $light_color;

            nav {
                width: 80%;
                margin: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                h1 {
                    color: $brand_color;
                    text-shadow: 2px 2px 3px $secondary_color;
                }
                input {
                    text-align: center;
                    padding: 3px 30px;
                    border-radius: 5px;
                }
            }
        }

</style>