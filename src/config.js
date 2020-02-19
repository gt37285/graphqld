const colors = require('colors')

colors.setTheme({
    alert: 'magenta'
})


/**configuracion del puerto */

const PORT = process.env.PORT || 3000



module.exports = { PORT }

