// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)

// 1. imports
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
// 2. action definitions
const GET = "players/GET"
// 3. initial state
const initialState = {
  players: [],
}
// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET:
      //payload is what is bundled in your actions
      return {
        ...state,
        players: action.payload,
      }
    default:
      return state
  }
}
// 5. action creators
export function getPlayers() {
  return (dispatch) => {
    axios.get("/api/featplayers").then((resp) => {
      console.log(resp.data)
      dispatch({
        type: GET,
        payload: resp.data,
      })
    })
  }
}
// 6. custom hook
export function useFeatPlayers() {
  const dispatch = useDispatch()
  const players = useSelector((appState) => appState.playerState.players)
  const get = () => dispatch(getPlayers())
  useEffect(() => {
    get()
  }, [])
  return { players, get }
}
