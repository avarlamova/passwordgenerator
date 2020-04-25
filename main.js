new Vue ({
    el: '#password',
    data() {
        return {
            password: '',
            settings: {
            length: 12,
            digits: 4,
            symbols: 8,
        }
        }
    }
})
