let app = new Vue({
    el: '#app',
    data: {
        inputName: '',
        lista: []
    },
    methods: {
        add: function() {
            if (this.inputName.length > 0) {
                this.lista.push(this.inputName)
                this.inputName = ''
            }
        },
        press: function (e) {
            if (e.keyCode === 13) {
                this.add()
                console.log('enter')
            }
        },
        clear: function () {
            this.lista = []
        }
    },
})