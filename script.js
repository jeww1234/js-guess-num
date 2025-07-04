const API_KEY = "5ca19004f97f4f5f9d74d0fbb95b21dc"
let news = []
const getLatesNews = async() =>{
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    const response = await fetch(url)
    const data = await response.json()
    news = data.articles
    console.log("ddd", news)
}

getLatesNews()