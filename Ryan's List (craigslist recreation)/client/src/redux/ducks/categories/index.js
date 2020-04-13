//CATEGORIES REDUX

import axios from "axios"
import { useDispatch, useSelector } from "react-redux"

const GET = "cats/GET" //only GET because it is uniquely used for categories in this project.
const GET_CURRENT = "cats/GET_CURRENT"

const initialState = {
  cats: [], //Set initial state of cats array
  current: "", //Returns object
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return { ...state, cats: action.payload } //updates state of cats
    case GET_CURRENT:
      return {
        ...state,
        current: action.payload.category,
        posts: action.payload.posts
      }
    default:
      return state
  }
}

//action to get current category
function getCurrent(slug) {
  return dispatch => {
    axios.get("/api/category/" + slug).then(resp => {
      dispatch({
        type: GET_CURRENT,
        payload: {
          category: resp.data.catName,
          posts: resp.data.posts
        }
      })
    })
  }
}

// action to get all categories
function getCategories() {
  return dispatch => {
    axios.get("/api/categories").then(resp => {
      dispatch({
        type: GET,
        payload: resp.data
      })
    })
  }
}

export function useCats() {
  const dispatch = useDispatch()
  const cats = useSelector(appState => appState.catState.cats)
  const get = () => dispatch(getCategories())
  const getPosts = slug => dispatch(getCurrent(slug))
  const currentCategory = useSelector(appState => appState.catState.current)
  const posts = useSelector(appState => appState.catState.posts)

  return { cats, get, getPosts, posts, currentCategory }
}
