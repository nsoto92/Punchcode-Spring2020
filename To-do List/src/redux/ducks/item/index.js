// 1
import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2
const GET_ITEMS = "item/GET_ITEMS"

// 3
const initialState = {
  items: []
}

// 4
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload }
    default:
      return state
  }
}

// 5
function getItems() {
  return dispatch => {
    axios.get("/items").then(resp => {
      dispatch({
        type: GET_ITEMS,
        payload: resp.data
      })
    })
  }
}

function addItem(name) {
  return dispatch => {
    axios.post("/items", { name }).then(resp => {
      dispatch(getItems())
    })
  }
}

function deleteItem(id) {
  return dispatch => {
    axios.delete("/items/" + id).then(resp => {
      dispatch(getItems())
    })
  }
}

// 6
export function useItems() {
  const dispatch = useDispatch()
  const items = useSelector(appState => appState.itemState.items)
  const add = item => dispatch(addItem(item))
  const del = itemId => dispatch(deleteItem(itemId))

  useEffect(() => {
    dispatch(getItems())
  }, [])

  return { items, add, del }
}
