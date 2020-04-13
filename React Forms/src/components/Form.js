import React, { useState } from "react"

import validator from "validator"

export default props => {
  const [name, setName] = useState("")
  const [nameError, setnameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setemailError] = useState("")
  const [username, setUsername] = useState("")
  const [usernameError, setusernameError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setpasswordError] = useState("")
  const [secondpw, setSecondpw] = useState("")
  const [secondpwError, setsecondpwError] = useState("")
  const [website, setWebsite] = useState("")
  const [websiteError, setwebsiteError] = useState("")

  function formSubmit(e) {
    e.preventDefault()

    let valid = true

    if (name === "") {
      valid = false
      setnameError("Field cannot be blank.")
    } else {
      setnameError("")
    }

    if (!validator.isEmail(email)) {
      valid = false
      setemailError("Invalid email.")
    } else {
      setemailError("")
    }

    if (username === "") {
      valid = false
      setusernameError("- Field cannot be blank.")
    } else {
      setusernameError("")
    }

    if (password === "") {
      valid = false
      setpasswordError("- Field cannot be blank.")
    } else {
      setpasswordError("")
    }

    if (secondpw != password) {
      valid = false
      setsecondpwError("- Passwords must match.")
    } else {
      setsecondpwError("")
    }

    if (!validator.isURL(website)) {
      valid = false
      setwebsiteError("- Invalid url.")
    } else {
      setwebsiteError("")
    }

    if (valid) {
      props.history.push("/validated")
    } else {
      alert("Oops! Something went wrong.")
    }
  }

  return (
    <div className="formBody">
      <h1>Please fill out my form. (All fields required)</h1>
      <form onSubmit={formSubmit}>
        <label className={nameError ? "error" : ""} htmlFor="name">
          Name {nameError && nameError}
        </label>
        <input
          className={nameError ? "error" : ""}
          type="text"
          id="name"
          placeholder="Smitty Werbenjagermanjensen"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <label className={emailError ? "error" : ""} htmlFor="email">
          Email {emailError && emailError}
        </label>
        <input
          className={emailError ? "error" : ""}
          type="text"
          id="email"
          placeholder="bob@google.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label className={usernameError ? "error" : ""} htmlFor="username">
          Username {usernameError && usernameError}
        </label>
        <input
          className={usernameError ? "error" : ""}
          type="text"
          id="username"
          placeholder="User01"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <label className={passwordError ? "error" : ""} htmlFor="password">
          Password {passwordError && passwordError}
        </label>
        <input
          className={passwordError ? "error" : ""}
          type="password"
          id="password"
          placeholder="Enter password."
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <label className={secondpwError ? "error" : ""} htmlFor="secondpw">
          Confirm Password {secondpwError && secondpwError}
        </label>
        <input
          className={secondpwError ? "error" : ""}
          type="password"
          id="secondpw"
          placeholder="Re-enter password."
          value={secondpw}
          onChange={e => setSecondpw(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
