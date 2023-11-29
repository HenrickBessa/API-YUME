// import firebase from 'firebase-admin'
// import serviceAccount from '../../credentials.json' assert { type: 'json' }
import dotenv from 'dotenv'
import axios from 'axios'
import mongoose  from 'mongoose'
dotenv.config()

const MONGO = process.env.MONGO
export const ConnectDatabase = async () =>{
    if(!MONGO)
    {
        console.log('A string de conexão do MongoDB não está definida.')
        return
    }
    console.log('Conectando DataBase MongoDB...\n....\n.....\n......')
    try{
        await mongoose.connect(MONGO)
        console.log('Conexão com MongoDB Atlas estabelecida com sucesso!!')    
    }
    catch(error){
        console.error('Falha ao conectar com MongoDB Atlas...\n....\n.....\n......')
    }

}

export const ConnectAnilist = () =>{
    const encodeParams = new URLSearchParams()
    encodeParams.set('userId', 'HenrickBessa')

    const options = {
        method: 'POST',
        url: 'https://anilistmikilior1v1.p.rapidapi.com/getAnimeList',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'e91abb7175msh16800ee3e3b159dp1af',
            'X-RapidAPI-Host': 'Anilistmikilior1V1.p.rapidapi.com'
        },
        data: encodeParams,
    }
    const response = axios.request(options)
    return response

}
