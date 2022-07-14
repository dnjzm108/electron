const { app, BrowserWindow } = require('electron');
const path = require('path')

const createWindow = () => {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            preload:path.join(__dirname,'preload.js')
        }
    })
    win.loadFile('main.html')
}

app.whenReady().then(() => {
    createWindow() //ready 이벤트가 발생시 창을 열게 한다.

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length == 0) createWindow()
    })
})

// 모든 창이 닫히면 앱 종료
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


