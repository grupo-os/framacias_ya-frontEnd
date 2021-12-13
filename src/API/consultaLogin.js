import axios from "axios";


//creamos una const de la url de nuestra api.
const baseUrl = "https://ipf-profesionales.herokuapp.com/api/login";


//Creamos la funcion de login
const buscador = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    return data
    
}
export default  {buscador};