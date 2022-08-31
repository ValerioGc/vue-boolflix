<template>
    <header>
        <nav>
            <h1>Boolflix</h1>
            <span>
                <input @keydown.enter="$emit('getSearchQuery', userInput)" v-model="userInput" type="text"
                    id="searchBar" placeholder="Cerca Film">
                <button @click="$emit('getSearchQuery', userInput)" id="searchButton">Cerca</button>
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
            height: 5rem;
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
            }
        }

</style>