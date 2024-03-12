new Vue({
    el: '#app',
    data: {
        titulo: 'Vue JS',
        link: 'https://www.google.com.br/',
        linkHTML: '<a href="https://www.google.com.br/">Google</a>'
    },
    methods: {
        alterarTitulo(event) {
            this.titulo = event.target.value
        },
        saudacao: function() {
            return 'Boa semana! ' + this.titulo
        }
    }
})