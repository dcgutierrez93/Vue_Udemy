<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
    </div>
</template>

<script>
export default {
    // To Receive data from parent we use props property
    props: {
        name: String
        // Validating properties
        // name: [String, Array]
    },
    methods: {
        switchName () {
            return this.name.split("").reverse().join("");
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
