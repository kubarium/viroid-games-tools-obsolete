const {Menu} = require('electron')
const electron = require('electron')
const app = electron.app

const template = [
    {
        label: 'Meta',
        submenu: [
            {
                label: 'Energize',
                click(item) {

                    app.relaunch({
                        args: process.argv.slice(1).concat(['--relaunch'])
                    })
                    app.exit(0)
                }
            }
        ]
    }
]

if (process.platform === 'darwin') {
    const name = app.getName()
    template.unshift({
        label: name,
        submenu: [
            {
                role: 'about'
            },
            {
                type: 'separator'
            },
            {
                role: 'services',
                submenu: []
            },
            {
                type: 'separator'
            },
            {
                role: 'hide'
            },
            {
                role: 'hideothers'
            },
            {
                role: 'unhide'
            },
            {
                type: 'separator'
            },
            {
                role: 'quit'
            }
        ]
    })
}



Menu.setApplicationMenu(Menu.buildFromTemplate(template))