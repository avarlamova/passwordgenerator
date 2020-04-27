new Vue ({
    el: '#password',
    data: {
        options: [
            {
                name: 'Include lowercase',
                status: true,
                chars: 'abcdefghjkmnopqrstuvwxyz'
            },

            {
                name: 'Include uppercase',
                status: false,
                chars: 'ABCDEFGHJKLMNOPQRSTUVWXYZ'
            },
            {
                name: 'Include digits',
                status: true,
                chars: '0123456789'
            },
            {
                name: 'Include special symbols',
                status: false,
                chars: '!$%&?+*#-/'
            }
        ],
            password: '',
            settings: {
            length: 12,
            digits: 4,
            symbols: 8,
        }
    }
})
