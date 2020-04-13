import React, { useState } from "react"

function Butty(props) {
  const [count, setCount] = useState(0)
  var name = "Likes"

  function addLike(e) {
    e.preventDefault()
    setCount(count + 1)
  }
  if (count === 1) {
    name = "Like"
  }

  return (
    <div>
      <button onClick={addLike}>
        {count} {name}
      </button>
    </div>
  )
}
Butty.defaultProps = {
  name: "Likes"
}

export default Butty
