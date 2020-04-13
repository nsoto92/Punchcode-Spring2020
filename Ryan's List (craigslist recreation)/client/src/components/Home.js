import React, { useEffect } from "react"
import { useCats } from "../hooks"
import { Link } from "react-router-dom"

import "../styles/main.css"

export default props => {
  const { cats, get } = useCats()

  useEffect(() => {
    get()
  }, [])

  return (
    <div className="container">
      <aside className="grey">
        <h2>Ryan's List</h2>
      </aside>
      <main>
        <h2>Las Vegas</h2>
        <div className="categories">
          {cats.map((
            parent //Links to main categories.
          ) => (
            <div key={"p-c-category-" + parent.id}>
              <h4>
                <Link to={"/" + parent.slug}>{parent.name}</Link>
              </h4>
              <div className="sub">
                {parent.sub.map(child => (
                  <Link key={"child-cat-" + child.id} to={"/" + child.slug}>
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
