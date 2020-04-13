import React from "react"
import { useItems } from "../hooks"

export default props => {
  const { items, del } = useItems()

  return (
    <div>
      <h1>Items</h1>
      {items.map(item => (
        <p key={"itemlist" + item.id}>
          {item.id}. {item.name}
          <button onClick={e => del(item.id)}>X</button>
        </p>
      ))}
    </div>
  )
}
