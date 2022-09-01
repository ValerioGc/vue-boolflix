<template>
    <div class="resume">
        <p v-if="response[indx].overview !== ''">
            <span class="inf">Trama:</span>
            {{ response[indx].overview }}
        </p>
        <p v-else class="alert-not-found">
            <span class="inf">Trama:</span> Trama non disponibile
        </p>
    </div>
</template>

<script>
    export default {
        name:'resumeCard',
        props: {
            response: Array,
            indx: Number,
        },
    }

</script>

<style lang="scss"></style>