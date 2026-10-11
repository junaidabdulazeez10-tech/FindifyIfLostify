import MainBar from '../components/mainbar';
import SearchBar from '../components/searchbar';
import Post from '../components/post';
import Forms from '../components/forms'
import './mainPage.css'


function MainPage({ mode, setMode, posts, token, setToken, id, setId, title, setTitle, category, setCategory, location, setLocation, date, setDate, description, setDescription, image, setImage, condition, setCondition, getPosts, showDescription, setShowDescription }) {


  return (
    <>
      <div className="main-page container-xl">
        <div className="main-page-header">
          <MainBar mode={mode} setMode={setMode} token={token} setToken={setToken} setCategory={setCategory} setTitle={setTitle} setLocation={setLocation} setDate={setDate} setDescription={setDescription} setImage={setImage} setCondition={setCondition} condition={condition} />
          <SearchBar mode={mode} />
        </div>

        <div
          className={`posts-scroll-area border d-flex flex-column ${mode ? "border-light bg-dark text-light" : "border-dark bg-body-secondary text-dark"}`} >
          <Post mode={mode} posts={posts} id={id} setId={setId} title={title} setTitle={setTitle} category={category} setCategory={setCategory} location={location} setLocation={setLocation} date={date} setDate={setDate} description={description} setDescription={setDescription} image={image} setImage={setImage} condition={condition} setCondition={setCondition} getPosts={getPosts} showDescription={showDescription} setShowDescription={setShowDescription}
          />
        </div>
      </div>

      <Forms
        mode={mode} setToken={setToken} token={token} id={id} setId={setId} title={title} setTitle={setTitle} category={category} setCategory={setCategory} location={location} setLocation={setLocation} date={date} setDate={setDate} description={description} setDescription={setDescription} image={image} setImage={setImage} condition={condition} setCondition={setCondition} getPosts={getPosts} />

      <div id="bootstrap-alert" style={{ width: "fit-content", position: "fixed", right: "10px", bottom: "0" }} />
    </>
  )
}

export default MainPage