<template>
    <div>
        <span class="inf lang">Lingua Originale:</span>
        <img class="flagL" :src="srcFlag + this.selectFlag(indx)" :alt="response[indx].original_language + 'Flag'" />
        <span class="countryN">
            {{ response[indx].original_language }}
        </span>
    </div>
</template>

<script>

    export default {
        name:'flagCard',
        props: {
            response: Array,
            indx: Number,
            srcFlag: String,
        },
        methods: {
            // Seleziona bandiera lingua
            selectFlag(index) {
                let flag;
                if (this.response[index].original_language == "en") {
                    flag = "/a/ae/Flag_of_the_United_Kingdom.svg";
                }
                else if (this.response[index].original_language == "it") {
                    flag = "/c/ca/Bandiera_italiana_foto.svg";
                }
                else if (this.response[index].original_language == "es") {
                    flag = "/9/9a/Flag_of_Spain.svg";
                }
                else if (this.response[index].original_language == "fr") {
                    flag = "/c/c3/Flag_of_France.svg";
                }
                else if (this.response[index].original_language == "de") {
                    flag = "/b/ba/Flag_of_Germany.svg";
                }
                else if (this.response[index].original_language == "ja") {
                    flag = "/9/9e/Flag_of_Japan.svg";
                }
                else if (this.response[index].original_language == "ko") {
                    flag = "/0/09/Flag_of_South_Korea.svg";
                }
                else if (this.response[index].original_language == "cn") {
                    flag = "/f/fa/Flag_of_the_People's_Republic_of_China.svg";
                }
                else if (this.response[index].original_language == "tr") {
                    flag = "/b/b4/Flag_of_Turkey.svg";
                }
                else if (this.response[index].original_language == "nl") {
                    flag = "/2/20/Flag_of_the_Netherlands.svg";
                }
                else if (this.response[index].original_language == "pl") {
                    flag = "/1/15/Flag_of_Poland_(with_coat_of_arms).svg";
                }
                else if (this.response[index].original_language == "ca") {
                    flag = "/c/cf/Flag_of_Canada.svg";
                }
                else if (this.response[index].original_language == "ru") {
                    flag = "/f/f3/Flag_of_Russia.svg";
                }
                else if (this.response[index].original_language == "be") {
                    flag = "/9/92/Flag_of_Belgium_%28civil%29.svg";
                }
                else if (this.response[index].original_language == "at") {
                    flag = "/4/41/Flag_of_Austria.svg";
                }
                else if (this.response[index].original_language == "pt") {
                    flag = "/5/5c/Flag_of_Portugal.svg";
                }
                else if (this.response[index].original_language == "au") {
                    flag = "/b/b9/Flag_of_Australia.svg";
                }
                else {
                    flag = "/0/03/Flag_Blank.svg";
                }
            return flag;
            },
        }
    }

</script>

<style lang="scss">

        .flagL {
            width: 20px;
            height: 15px;
            margin: 0 1rem;
            vertical-align: middle;
        }
        .countryN {
            text-transform: uppercase;
        }

</style>