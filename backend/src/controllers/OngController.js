const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response) {
        //Desestruturação
        const {name, email, whatsapp, city, uf } = request.body;

        //Não posso deixar existir 02 ongs cadastradas no mesmo e-mail
        const sql = await connection('ongs').select('email').where('email', email).first();

        if(sql){
            return response.status(422).json({error: 'E-mail found in database for another ONG!'});
        }

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })   

        return response.json({ id });
    },

    async index(resquest, response) {
        const ongs = await connection('ongs').select("*");

        return response.json(ongs);
    }
};