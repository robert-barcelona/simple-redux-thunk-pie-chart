import {
  ERROR,
  CALLING_API,
  FINISHED_API_CALL,
  STORE_BREED_IMAGE,
  STORE_ALL_BREEDS,
  STORE_CHART_DATA
} from "./action-types"

import { logicGetAllBreeds, logicGetImageForBreed } from "../logic"

const storeDogBreeds = breeds => ({ type: STORE_ALL_BREEDS, data: breeds })
const storeBreedImage = image => ({ type: STORE_BREED_IMAGE, data: image })
const storeChartData = data => ({ type: STORE_CHART_DATA, data })
export const callingAPI = () => ({ type: CALLING_API })
export const finishedAPICall = () => ({ type: FINISHED_API_CALL })
export const error = message => ({ type: ERROR, data: message })

export const getAllBreedImages = () => async (dispatch, getState) => {
  try {
    dispatch(error(""))
    dispatch(callingAPI())
    const breeds = getState().breeds
    if (!breeds || !(breeds instanceof Array))
      throw new Error("No breeds to get images from")
    const promises = []
    for (let breed of breeds) {
      promises.push(
        logicGetImageForBreed(breed).then(image =>
          dispatch(storeBreedImage({ image, breed }))
        )
      )
    }
    await Promise.all(promises)
  } catch (e) {
    dispatch(error(e.message))
  } finally {
    dispatch(finishedAPICall())
  }
}

export const getAllBreeds = () => async dispatch => {
  try {
    dispatch(error(""))
    dispatch(callingAPI())
    const dogBreeds = await logicGetAllBreeds()
    if (!dogBreeds) throw new Error("Dog breeds were not retrieved from API")
    dogBreeds.sort()
    dispatch(storeDogBreeds(dogBreeds))
  } catch (e) {
    dispatch(error(e.message))
  } finally {
    dispatch(finishedAPICall())
  }
}

export const processChartData = () => (dispatch, getState) => {
  const data = Object.entries(getState().images).map(entry => {
    const [breed, images] = entry
    return [breed, images.length]
  })
  data.sort((entry1, entry2) => {
    const [, a] = entry1
    const [, b] = entry2
    if (a > b) {
      return -1
    }
    if (a < b) {
      return 1
    }
    return 0
  })
  dispatch(storeChartData(data.slice(0, 11)))
}
