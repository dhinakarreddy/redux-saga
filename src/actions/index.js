import { IMAGES, STATS } from "../constants";

const loadImages = () => ({
    type: IMAGES.LOAD
})

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images
})

const setError = error => ({
    type: IMAGES.LOAD_ERROR,
    error
})

const loadImageStats = () => ({
    type: STATS.LOAD
})

const setImageStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads
})

const setImageStatsError = error => ({
    type: STATS.LOAD_ERROR,
    error
})

export {
    loadImages,
    setImages,
    setError,
    loadImageStats,
    setImageStats,
    setImageStatsError
}