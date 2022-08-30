<template>
    <header>
        <nav>
            <h1>Boolflix</h1>
            <span> 
                <input v-model="userInput" type="text" id="searchBar" placeholder="Cerca Film">
                <button id="searchButton">Cerca</button>
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

</style>