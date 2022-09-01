<template>
    <div class="rating">
        <span class="inf">Voto: </span>
        <span v-if="response[indx].vote_average !== 0">
            <i v-for="n in 5" class="fa-star" :key="n + 3"
                style="--fa-animation-iteration-count: 2; --fa-animation-delay: 0.2s;"
                :class="(n >= calcStar(response[indx].vote_average)) ? 'fa-regular':'fa-solid'"></i>
        </span>
        <p v-else class="alert-not-found"> Voto non disponibile </p>
    </div>
</template>

<script>

    export default {
        name:'scoreCard',
        props: {
            response: Array,
            indx: Number,
        },
        methods: {
            calcStar(score) {
                return Math.ceil(score / 2);
            },
        }
    }

</script>

<style lang="scss">

    @import '../../styles/vars.scss';
    @import '../../styles/general.scss';
    @import '../../styles/keyframes.scss';
    
    .rating {
        list-style: none;
        padding: 1rem 0;

        i {
            display: inline-block;
            color: $stars_color;
            text-shadow: 2px 2px 4px $primary_color;
        }
    }

</style>