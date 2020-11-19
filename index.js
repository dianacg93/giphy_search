import dotenv from 'dotenv'
dotenv.config()

const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY

const button = document.querySelector("button")
const giphyInput = document.querySelector("input")

button.addEventListener("click", async () => {
    let giphy = giphyInput.value;
    try{
        let res = await axios.get(`${BASE_URL}/v1/gifs/search?api_key=${API_KEY}&q=${giphy}&limit=25`)
        let gifs = res.data.data;

        for (let i = 0; i < gifs.length; i++){
            let gif = gifs[i].images.fixed_height_small.url;
            let img = document.createElement("img")
            img.setAttribute('src', gif)
            document.querySelector("div").appendChild(img)
        }
        
    } catch (err) {
        console.log(err)
    }
})