function AddPost({ mode, token, setCategory, setCondition, condition, setDate, setDescription, setTitle, setLocation }) {
  return (
    token ?
      <div>
        <button className={`btn  ${mode ? "btn-outline-light" : "btn-outline-dark"} p-2 px-3 fs-1 `}
          data-bs-toggle="modal" data-bs-target="#add-post-form" onClick={() => {
            setCategory('')
            setCondition('')
            setDate('')
            setTitle('')
            setLocation('')
            setDescription('')
          }} >+</button>
      </div>
      :
      null
  )
}

export default AddPost