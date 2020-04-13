import React, { useState } from "react"
import { useItems } from "../hooks"

export default props => {
  const [item, setItem] = useState("")
  const { add } = useItems()

  function handleSubmit(e) {
    e.preventDefault()

    console.log(item)
    add(item)

    setItem("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>To-Do: </label>
        <input
          type="text"
          placeholder="Type your item here."
          onChange={e => setItem(e.target.value)}
          value={item}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
