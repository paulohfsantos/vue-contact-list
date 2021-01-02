let app = new Vue({
    el: '#app',
    data: {
        inputName: '',
        aviso: '',
        showName: false,
        lista: [],
        timer: null
    },
    watch: {
        inputName: function () {
            if (this.timer != null) {
                clearTimeout(this.timer)
            }
            if (this.inputName != '') {
                this.aviso = 'typing...'
                this.showName = false
                this.timer = setTimeout(this.getReady, 1000);
            }
        }  
    },
    methods: {
        getReady: function () {
            this.aviso = ''
            if (this.inputName.length > 2) {
                this.showName = true
            }
        },
        add: function() {
            this.lista.push(this.inputName)
            this.inputName = ''
            this.showName = false
        },
        press: function () {
            this.add()
        },
        clear: function () {
            this.lista = []
        }
    },
    computed: {
        totalTexto: function () {
            return `Total de nomes: ${this.lista.length}`
        }
    }
})