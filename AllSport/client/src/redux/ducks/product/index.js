// Coded by Norbert M. Soto (https://github.com/nsoto92)
// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)

// 1. imports
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

// 2. action definitions
const GET = "products/GET"
const POST = "products/POST"

// 3. initial state
const initialState = { products: [] }

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return { ...state, products: action.payload }
    case POST:
      return { ...state, products: [...state.products, action.payload] }
    default:
      return state
  }
}

// 5. action creators
export function getProducts() {
  return (dispatch) => {
    axios.get("/api/products").then((resp) => {
      console.log(resp.data)
      dispatch({ type: GET, payload: resp.data })
    })
  }
}

//Adds product to database
function createProduct(title, price, image) {
  return (dispatch) => {
    axios.post("/api/products", title, price, image).then((resp) => {
      dispatch({
        type: POST,
        payload: resp.data,
      })
    })
  }
}

// 6. custom hook
export function useProducts() {
  const dispatch = useDispatch()
  const create = (title, price, image) =>
    dispatch(createProduct(title, price, image))
  const products = useSelector((appState) => appState.productState.products)
  const get = () => dispatch(getProducts())

  useEffect(() => {
    get()
  }, [])

  return { products, get, create }
}
