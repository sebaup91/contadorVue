const {createApp} = Vue;

createApp({
    data() {
        return{
            numero:"1"
        }
    },
    methods: {
        suma() {
            this.numero ++
        },
        resta() {
            this.numero --
        }
    }
}).mount("#app")