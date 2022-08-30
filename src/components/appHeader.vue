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


    @import url('@/styles/vars.scss');
    @import url('@/styles/general.scss');

        header {
            padding: 30px 0;
            // background-color: $secondary_color;

            nav {
                width: 80%;
                margin: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                h1 {
                    color: brand_color;
                    text-transform: uppercase;
                    font-weight: bold;
                }
            }
        }

</style>