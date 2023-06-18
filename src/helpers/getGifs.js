

// fetch
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ku6W5J83nJcqF3ky2yPohiG2yN0elzd9&q=${category}&limit=10`

    const resp = await fetch(url)
    const { data } = await resp.json()
    
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    })  

    return gifs

}