const Service = require('../services/Service');

module.exports = {
    buscarScore: async (req, res)=> {
        let json = {error:'', result:[]};

        let score = await Service.buscarScore();

        for(let i in score){
            json.result.push({
                tag: score[i].tag,
                points: score[i].points,
            });
        }
        res.json(json);
    },

    inserirScore: async(req,res) => {
        let json = {error:'', result:{}};

        let tag = req.body.tag;
        let points = req.body.points;

        if(tag && points){
            let score = await Service.inserirScore(tag, points);
            json.result = {
                id: score,
                tag,
                points
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    }
    
}