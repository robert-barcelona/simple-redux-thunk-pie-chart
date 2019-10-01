import axios from "axios"

const proxy = "https://bypasscors.herokuapp.com/api/?url="

const ALL_DOGS_URL = "https://dog.ceo/api/breeds/list/all"

export const logicGetAllBreeds = async () => {
  try {
    const url = `${proxy}${encodeURIComponent(ALL_DOGS_URL)}`
    const results = await axios.get(url)
    if (!results) throw new Error("No breeds returned from API")
    const breeds = results.data.message
    return Object.keys(breeds)
  } catch (e) {
    console.log(e)
    throw new Error(`Error getting breeds: ${e.message}`)
  }
}

export const logicGetImageForBreed = async breed => {
  try {
    if (!breed || typeof breed !== "string" || breed.length === 0)
      throw new Error("Missing breed parameter")
    const partURL = `http://dog.ceo/api/breed/${breed}/images`
    const url = `${proxy}${encodeURIComponent(partURL)}`
    const results = await axios.get(url)
    if (!results) throw new Error("No images returned from API")
    return results.data.message
  } catch (e) {
    throw new Error(`Error getting image for breed ${breed}: ${e.message}`)
  }
}
