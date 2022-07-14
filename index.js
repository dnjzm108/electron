const electron = require('electron');
const app = electron.app; // 일렉트론 애플리케이션 객체에 대한 참조를 저장
const BrowserWindow = electron.BrowserWindow;  //BrowserWindow 클래스의 참조 저장

let mainWindow = null; // 애플리케이션 화면을 저장할 변수 선언

// macOS를 제외하고, 화면이 모두 종료되면 애플리케이션을 곧바로 종료하게 합니다.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// 애플리케이션이 로드되면 mainWindow 변수에 BrowserWinow 클래스 인스턴스를 할당해서,
// 애플리케이션 화면이 가비지 컬렉션에 의해 회수되지 않게 합니다.
app.on('ready', () => {
    mainWindow = new BrowserWindow();
    mainWindow.loadURL(`file://${__dirname}/index.html`); // index.html을 읽어들입니다.
    mainWindow.on('closed', () => { mainWindow = null; }); // 애플리케이션 화면을 닫으면, mainWindow 변수를 null로 비워줍니다.
});