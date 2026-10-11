export default function Loading() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center gap-3 min-vh-100">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h4 className="mb-0">Findifying things...</h4>
      <small className="text-secondary">
        Please wait while we load the latest posts
      </small>
    </div>
  )
}