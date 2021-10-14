// Js puxa tudo que tem dentro do sqlite3
const sqlite3 = require("sqlite3");
// Js puxa somente o open do sqlite
const { open } = require("sqlite");

module.exports = () =>
    // Open está abrindo a conexão com o sqlite
    open({
        //Caminho e o nome do db
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    });