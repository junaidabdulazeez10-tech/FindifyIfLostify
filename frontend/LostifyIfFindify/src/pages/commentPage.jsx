import MainBar from '../components/mainbar';
import Post from '../components/post';
import Forms from '../components/forms';
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './mainPage.css'

function CommentPage({
  mode,
  setMode,
  posts,
  token,
  setToken,
  id,
  setId,
  title,
  setTitle,
  category,
  setCategory,
  location,
  setLocation,
  date,
  setDate,
  description,
  setDescription,
  image,
  setImage,
  condition,
  setCondition,
  commentId,
  setCommentId,
  getPosts,
  showDescription,
  setShowDescription
}) {
  const [show, setShow] = useState(true)
  const { postId } = useParams();

  return (
    <>
      <div className="main-page container-xl">

        <div className="main-page-header">
          <MainBar
            mode={mode}
            setMode={setMode}
            token={token}
            setToken={setToken}
          />
        </div>

        <div
          className={`posts-scroll-area border d-flex flex-column ${
            mode
              ? "border-light bg-dark text-light"
              : "border-dark bg-body-secondary text-dark"
          }`}
        >
          <Post
            mode={mode}
            show={show}
            posts={posts.filter(post => post._id === postId)}
            setToken={setToken}
            token={token}
            postId={postId}
            id={id}
            setId={setId}
            title={title}
            setTitle={setTitle}
            category={category}
            setCategory={setCategory}
            location={location}
            setLocation={setLocation}
            date={date}
            setDate={setDate}
            description={description}
            setDescription={setDescription}
            image={image}
            setImage={setImage}
            condition={condition}
            setCondition={setCondition}
            commentId={commentId}
            setCommentId={setCommentId}
            getPosts={getPosts}
            showDescription={true}
            setShowDescription={setShowDescription}
          />
        </div>

      </div>

      <Forms
        mode={mode}
        token={token}
        setToken={setToken}
        id={id}
        setId={setId}
        title={title}
        setTitle={setTitle}
        category={category}
        setCategory={setCategory}
        postId={postId}
        location={location}
        setLocation={setLocation}
        date={date}
        setDate={setDate}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        condition={condition}
        setCondition={setCondition}
        commentId={commentId}
        setCommentId={setCommentId}
        getPosts={getPosts}
      />

      <div
        id="bootstrap-alert"
        style={{
          width: "fit-content",
          position: "fixed",
          right: "10px",
          bottom: "0"
        }}
      />
    </>
  )
}

export default CommentPage