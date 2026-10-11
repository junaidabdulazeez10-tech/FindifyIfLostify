import { useState } from 'react'
import { Link } from 'react-router-dom'
import './searchbar.css'

function SearchBar({ mode }) {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div
      className={`border-end border-start p-2 ${mode
          ? "border-light bg-dark text-light"
          : "border-dark light-background text-dark"
        }`}
    >
      <div className="searchbar-wrapper">

        <div className="search-row">
          <input
            className={`form-control ${mode
                ? "border-light text-light dark-input"
                : "border-dark text-dark light-input"
              }`}
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search"
          />

          <Link
            className="Link-green search-btn"
            to={`/category/${searchInput}`}
          >
            Search
          </Link>
        </div>

        <div className="popular-row">
          <span className="popular-title">Popular:</span>

          <div className="popular-links">
            <Link className="Link category-link" to="/category/Laptops">
              Laptops
            </Link>

            <Link className="Link category-link" to="/category/Wallets">
              Wallets
            </Link>

            <Link className="Link category-link" to="/category/IDs">
              IDs
            </Link>

            <Link className="Link category-link" to="/category/Passports">
              Passports
            </Link>

            <Link className="Link category-link" to="/category/Watches">
              Watches
            </Link>

            <Link className="Link category-link" to="/category/Others">
              Others
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SearchBar