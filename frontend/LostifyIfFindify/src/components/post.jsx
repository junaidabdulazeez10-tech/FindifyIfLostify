import { Link } from 'react-router-dom'
import Comments from './comments'
import api from "../api/axios";
import { useState } from 'react'
import alertBootstrap from '../utils/utils'
import "./post.css"


function Post({ mode, show, posts, token, postId, setId, setTitle, setCategory, setLocation, setDate, setDescription, setCondition, setCommentId, getPosts, showDescription }) {
  const [commentText, setCommentText] = useState('')
  const [loading, setLoading] = useState(false)

  async function sendComment() {
    try {
      setLoading(true);
      const bodyForComment = {
        user: localStorage.getItem("username"),
        text: commentText,
        profilePicture: localStorage.getItem("profilePicture")
      }
      const response = await api.post(
        `/post/${postId}/comment`,
        bodyForComment,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alertBootstrap(response.data.message, "success")
      console.log(response.data)
      setCommentText('')
      getPosts()
    } catch (error) {
      console.log(error.response?.data || error)
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {posts.map((value) => (
        <div key={value._id} className={`card p-4 border border-2 ${mode ? "border-light bg-dark text-light" : "border-dark bg-body-secondary  text-dark"
          }`}>
          <div className={`d-flex border-bottom align-items-center p-1 ${mode ? "border-light text-light" : "border-dark text-dark"}`}>
            <Link to={`/profile/${value.username}`} style={{ textDecoration: "none" }}>
              <img className={` border border-2 ${mode ? "border-light" : "border-dark"}`}
                style={{ objectFit: "cover", height: "60px", width: "60px", borderRadius: "30px" }} src={value.profilePicture} />
            </Link>
            <Link to={`/profile/${value.username}`} style={{ textDecoration: "none", }} className={`fs-3 ${mode ? "text-light" : "text-dark"}`}>@{value.username}</Link>
            {/* Only users can edit or delete thier own posts */}
            {localStorage.getItem("username") === value.username && <div className='d-flex flex-column gap-2' style={{ marginLeft: "auto" }}>
              <button className="btn btn-primary effect-btn" type='button' data-bs-toggle="modal" data-bs-target="#edit-post-form" onClick={() => {
                setId(value._id)
                setCondition(value.condition);
                setTitle(value.title);
                setCategory(value.category);
                setLocation(value.location);
                setDate(value.date?.slice(0, 10));
                setDescription(value.description);
              }}>Edit</button>
              <button className="btn btn-danger mb-2 effect-btn" type='button' data-bs-toggle="modal" data-bs-target="#Delete-post-form" onClick={() => { setId(value._id) }}>Delete</button>
            </div>}
          </div>
          <Link to={`/comment/${value._id}`} style={{ textDecoration: "none", }} className={`fs-1 d-flex justify-content-center ${mode ? "text-light" : "text-dark"}`}>{value.condition}</Link>
          <Link to={`/comment/${value._id}`} style={{ textDecoration: "none", }} className={`d-flex fs-3 justify-content-between ${mode ? "text-light" : "text-dark"}`}>
            <div>{value.title}</div>
            <div>{new Date(value.date).toLocaleDateString("de-DE")}</div>
          </Link>
          <Link to={`/comment/${value._id}`} style={{ textDecoration: "none", }}><img className={`border rounded mt-2 ${mode ? "border-light" : "border-dark"}`}
            style={{ width: "100%", height: "auto", maxHeight: "550px", objectFit: "cover" }} src={value.image} /></Link>
          <Link to={`/comment/${value._id}`} style={{ textDecoration: "none", textAlign: "center", marginTop: "5px" }} className={` fs-3 ${mode ? "text-light" : "text-dark"}`}>Location: {value.location}</Link>
          {showDescription && (
            <Link to={`/comment/${value._id}`} style={{ textDecoration: "none", }} className={` fs-5 ${mode ? "text-light" : "text-dark"}`}>Description: {value.description}</Link>
          )}
          <div className={`card-body d-flex align-items-center gap-3 fs-4 border mt-3 ${mode ? "border-light  text-light" : "border-dark  text-dark"} `}>
            <Link to={`/comment/${value._id}`} style={{ textDecoration: "none", }} className={`${mode ? "text-light" : "text-dark"}`}>Comments ({value.comments.length})</Link>
            <button className="btn btn-outline-secondary me-2 effect-btn">{value.category}</button>
          </div>
          {/* logged-in users can send comments here, while guests don't even see it */}
          {token &&
            <div className="border card-body fs-5">
              <div className={`border mt-2 mb-2 p-3 ${mode ? "border-light text-light" : "border-dark text-dark"}`}>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Link to={`/profile/${value.username}`} style={{ textDecoration: "none" }} className="flex-shrink-0">
                    <img className={`user-img-comment border border-2 ${mode ? "border-light" : "border-dark"}`} style={{ objectFit: "cover", width: "55px", height: "55px", borderRadius: "30px", }} src={localStorage.getItem("profilePicture")} />
                  </Link>
                  <div className="d-flex flex-column flex-grow-1" style={{ minWidth: 0 }}>
                    <Link to={`/profile/${localStorage.getItem("username")}`} style={{ textDecoration: "none" }}>
                      <div className={`${mode ? "text-light" : "text-dark"}`} style={{ fontSize: "17px" }}> @{localStorage.getItem("username")} </div>
                    </Link>
                    <div className={`d-flex flex-column flex-sm-row gap-2 mt-2 ${mode ? "bg-dark text-light" : "bg-body-secondary text-dark"}`}>
                      <input className={`form-control ${mode ? "bg-dark text-light" : "bg-body-secondary text-dark"}`} value={commentText} onChange={(e) => setCommentText(e.target.value)} type="text" placeholder="Enter Your Text Here:" />
                      <button className={`btn ${mode ? "btn-outline-light" : "btn-outline-dark"} effect-btn `} onClick={sendComment} disabled={loading}> {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                          />
                          Sending...
                        </>
                      ) : (
                        "Send"
                      )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          {show && <Comments mode={mode} comments={value.comments} setCommentId={setCommentId} />}
        </div>
      ))}
    </>
  )
}

export default Post

