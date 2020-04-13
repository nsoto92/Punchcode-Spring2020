// Coded by Norbert M. Soto (https://github.com/nsoto92)

// 1. imports
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

// 2. action definitions
const GET = "products/GET"

// 3. initial state
const initialState = { products: [] }

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET:
      //payload is what is bundled in your actions
      return { ...state, products: action.payload }
    default:
      return state
  }
}

// 5. action creators
export function getProducts() {
  return dispatch => {
    axios.get("/api/featproducts").then(resp => {
      console.log(resp.data)
      dispatch({ type: GET, payload: resp.data })
    })
  }
}

// 6. custom hook
export function useFeatProducts() {
  const dispatch = useDispatch()
  const products = useSelector(appState => appState.productState.products)
  const get = () => dispatch(getProducts())

  useEffect(() => {
    get()
  }, [])

  return { products, get }
}
