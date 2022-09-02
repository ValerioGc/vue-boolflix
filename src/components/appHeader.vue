<template>
    <header>
        <nav>
            <h1>Boolflix</h1>
            <span>
                <input @change="$emit('getSearchQuery', userInput)" @keydown.enter=" $emit('getSearchQuery', userInput)" 
                    v-model="userInput" type="text" id="searchBar" placeholder="Cerca Film">
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
            top: 0;
            overflow: hidden;
            padding: 20px 0;
            background-color: $primary_color;
            box-shadow: 0px 0px 10px -3px $brand_color;

            nav {
                width: 80%;
                margin: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                h1 {
                    font-size: 2.2rem;
                    color: $brand_color;
                    text-shadow: 2px 2px 3px $secondary_color;
                }

                input {
                    font-weight: bold;
                    color: $brand_color;
                    text-align: center;
                    background-color: $secondary_color;
                    filter: brightness(3);
                    padding: 5px 80px;
                    border-radius: 5px;
                    text-shadow: 0px 0px 1px $secondary_color;
                    box-shadow: 0px 0px 6px 1px $brand_color;
                }
            }
        }

</style>