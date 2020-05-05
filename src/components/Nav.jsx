import React from 'react'

function Nav() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/">Pre-Game View</Link>
        </div>
        <div className="col">
          <Link to="/livegame">Live Game View</Link>
        </div>
        <div className="col">
          <Link to="/postgame">Post Game View</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
