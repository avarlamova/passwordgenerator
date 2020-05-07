new Vue ({
    el: '#password',
    data() {
        return {
            password: ' ',
            checkedoption:false,
            length:18,
            options: [
                {
                    name: 'Include lowercase',
                    checked: false,
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
        };
    },
     computed: {
     generatePassword() {
            let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            let specialsymbols = ["!", "$", "%", "&", "?", "+", "*", "#", "-", "/"];
            let arr = [];
            let length = this.length;
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
      methods: {
        copy() {

            let copied = document.createElement("textarea");
            copied.style.opacity = '0';
            copied.style.position = 'fixed';
            copied.value = this.generatePassword;
            password.append(copied);
            copied.select();
            document.execCommand('copy');
            password.removeChild(copied);
            alert ('Copied successfully!')
        },
        check() {
            this.checkedoption=!this.checkedoption;
        }
    },
         
})
