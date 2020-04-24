new Vue ({
    el: '#password',
    data() {
        return {
            password: '',
            attributes: {
            length: 12,
            digits: 4,
            symbols: 8,
        }
        }
    }
})