new Vue({
    el: '#desafio',
    data: {
        nome: "Gabriel Costa Pinto",
        idade: '22',
        link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png'
    },
    methods: {
        aleatorio(){
            return Math.random()
        }
    }
})