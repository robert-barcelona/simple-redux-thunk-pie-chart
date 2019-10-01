import {
  ERROR,
  CALLING_API,
  FINISHED_API_CALL,
  STORE_BREED_IMAGE,
  STORE_ALL_BREEDS
} from "./action-types"

import { logicGetAllBreeds, logicGetImageForBreed } from "../logic"

const storeDogBreeds = breeds => ({ type: STORE_ALL_BREEDS, data: breeds })
const storeBreedImage = image => ({ type: STORE_BREED_IMAGE, data: image })
export const callingAPI = () => ({ type: CALLING_API })
export const finishedAPICall = () => ({ type: FINISHED_API_CALL })
export const error = message => ({ type: ERROR, data: message })

export const getAllBreedImages = breeds => async dispatch => {
  console.log("get all breed images", breeds)
  try {
    dispatch(error(""))
    dispatch(callingAPI())
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
    dispatch(getAllBreedImages(dogBreeds))
  } catch (e) {
    dispatch(error(e.message))
  } finally {
    dispatch(finishedAPICall())
  }
}
