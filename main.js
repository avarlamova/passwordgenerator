new Vue ({
    el: '#password',
    data: {
        options: [
            {
                name: 'Include lowercase',
                checked: true,
            },

            {
                name: 'Include uppercase',
                checked: false,
            },
            {
                name: 'Include digits',
                checked: true,
            },
            {
                name: 'Include special symbols',
                checked: false,
            }
        ],
            password: '',
            settings: {
            length: 12,
        },
    },
     generatePassword() {
            let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            let specialsymbols = ["!", "$", "%", "&", "?", "+", "*", "#", "-", "/"];
            let arr = [];
            let length = this.settings.length;
            let actualcount = 0;
            [...this.options]
                .map(item => {
                    if (item.checked === true)
                        actualcount = actualcount + 1;
                })
            if (actualcount === 0) return 'You should check at least one option!';
            [...this.options]
                .map(item => {
                    for (i = 0; i < length; i++) {
                        let random = Math.floor(Math.random() * length);
                        if (item.name === 'Include lowercase' && item.checked === true)
                            arr.push(letters[random]);
                        if (item.name === 'Include uppercase' && item.checked === true)
                            arr.push(letters[random].toUpperCase());
                        if (item.name === 'Include digits' && item.checked === true)
                            arr.push(Math.round(Math.random() * 9));
                        if (item.name === 'Include special symbols' && item.checked === true)
                            arr.push(specialsymbols[random]);
                    }
                })
            return arr.sort(() => Math.random() - 0.5).join('').slice(0, length);
        },
    },
         
})
