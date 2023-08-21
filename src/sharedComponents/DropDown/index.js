import React from 'react';

function index() {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          all
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#" style={{ color: 'black' }}>
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: 'black' }}>
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: 'black' }}>
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default index;
