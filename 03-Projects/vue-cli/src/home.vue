<!-- Create a new component -->
<template>
    <p>Server Status: {{ status }}</p>
</template>

<script>
    export default {
        data: function() {
            return {
                status: 'Critical'
            }
        },
        methods: {
            changeStatus() {

            }
        }
    }
</script>
