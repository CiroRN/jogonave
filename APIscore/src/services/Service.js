const db = require('../db');

module.exports = {
    buscarScore: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM score ORDER BY points DESC LIMIT 5', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    inserirScore: (tag, points) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO score (tag, points) VALUES (?, ?)', [tag, points], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results.insertId);
            });
        });
    }

};