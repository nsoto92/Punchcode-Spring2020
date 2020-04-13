import React, { useState } from "react"
import "../styles/main.css"
import { usePosts } from "../hooks"

export default props => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  const { create } = usePosts()

  function handleSubmit(e) {
    e.preventDefault()
    create(props.match.params.slug, name, desc).then(id => {
      props.history.push("/posting/" + id)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Post Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Posting name"
          />
          <label>Post Description</label>
          <textarea
            value={desc}
            onChange={e => setDesc(e.target.value)}
            placeholder="Posting Description"
          ></textarea>
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  )
}
