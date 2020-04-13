// Coded by Norbert M. Soto (https://github.com/nsoto92)

import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

const GET_STATUS = "cart/GET_STATUS"
const ADD_PRODUCT = "cart/ADD_PRODUCT"
const DELETE_PRODUCT = "cart/DELETE_PRODUCT"
const DELETE_ONE = "cart/DELETE_ONE"

const initialState = {
  cart: [],
  open: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const exists =
        state.cart.filter(
          product => product.productId === action.payload.productId
        ).length > 0
      if (exists) {
        const item = state.cart.find(
          product => product.productId === action.payload.productId
        )
        item.quantity = item.quantity + 1

        return {
          ...state,
          cart: state.cart.map(p => (item.productId === p.productId ? item : p))
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        }
      }
    case GET_STATUS:
      return { ...state, open: !state.open }
    case DELETE_ONE:
      if (
        state.cart.find(item => item.productId === action.payload).quantity ===
        1
      ) {
        return {
          ...state,
          cart: state.cart.filter(item => item.productId !== action.payload)
        }
      } else {
        return {
          ...state,
          cart: state.cart.map(item => {
            if (item.productId === action.payload) {
              item.quantity = item.quantity - 1
              return item
            } else {
              return item
            }
          })
        }
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        cart: [...state.cart.filter(cart => cart !== action.payload)]
      }
    default:
      return state
  }
}

function toggleCart() {
  return {
    type: GET_STATUS
  }
}

function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  }
}

function delProduct(product) {
  return {
    type: DELETE_PRODUCT,
    payload: product
  }
}

function delOne(product) {
  return {
    type: DELETE_ONE,
    payload: product
  }
}

export function useItems() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => appState.cartState.cart)
  const status = useSelector(appState => appState.cartState.open)

  const toggle = () => dispatch(toggleCart())
  const add = product => dispatch(addProduct(product))
  const del = product => dispatch(delProduct(product))

  const del1 = product => dispatch(delOne(product))

  const [total, setTotal] = useState("")

  useEffect(() => {
    const amount = cart.reduce(
      (a, b) => Number(a) + Number(b.price * b.quantity),
      0
    )

    setTotal(amount.toFixed(2))
  }, [cart])

  return { cart, status, toggle, add, del, total, del1 }
}
