//fs stands for file system
let fs = require('fs'); //die require Methode von JS greift auf die verschiedenen Module zu, in dem Fall auf das fs (file system)- Modul
let path = require('path');
let currentPath = 'C:/Dev/Backend/JavaScript/tutorial/test/';
// fs.mkdir('Testordner', dirCreated) //mkdir steht für make directory und wird dafür verwendet um ein Verzeichnis zu erstellen
// fs.mkdir(currentPath + '.txt', dirCreated);
fs.readdir(currentPath, dirRead);

function dirRead(err, files) {
    console.log('Verzeichnis ausgelesen: ' + currentPath)
    console.log(files);

    files.forEach(processFile);
}

//file = Rechnung1.txt
function processFile(file) {
    let extension = path.extname(file);
    console.log('Extension is: ' + extension);

    fs.mkdir(extension, function () {
        console.log('Ordner wurde erstellt!');
        fs.rename(
            currentPath + file,
            'C:/Dev/Backend/JavaScript/tutorial/' + extension + '/' + file,
            copySuccess
        ); //mit der rename methode kann man Dateien umbenennen
    });
}

function dirCreated() {
    console.log('Ordner wurde erstellt!');

    // fs.rename(
    //     currentPath + 'test/Rechnung1.txt',
    //     currentPath + '.txt/Rechnung1.txt',
    //     copySuccess
    // ); //mit der rename methode kann man Dateien umbenennen
    // // fs.appendFile('datei1.txt', 'Hallo', fileCreated);
}

function copySuccess() {
    console.log('Copy was successfull!');
}

// function fileCreated(){
//     console.log('Deine Datei wurde erstellt!');
// }