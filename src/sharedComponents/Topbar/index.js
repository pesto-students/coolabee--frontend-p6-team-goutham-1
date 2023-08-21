import React from 'react';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import SearchIcon from '../../assets/searchIcon.png';
import Button from '@mui/material/Button';
import Styles from './style.module.scss';
import DropDown from '../DropDown/index.js';
// import './style.scss'

const Topbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/auth');
  };

  return (
    <>
      <div
        style={{
          backgroundColor: '#131921',
          border: '1px solid white',
          padding: '1vh',
          margin: '0',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              color: 'white',
              backgroundColor: '#f3a847',
              fontWeight: 'bolder',
              fontSize: '3vh',
              padding: '1vh',
              borderRadius: '5px',
            }}
          >
            Coolabee
          </span>
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Select your address
          </button>
          <div style={{ display: 'flex' }}>
            <DropDown />
            <input
              style={{ width: '50vw', borderRadius: '0px' }}
              type="email"
              className="form-control form-control-md"
              id="exampleFormControlInput1"
              placeholder="Search"
            />
            <img
              src={SearchIcon}
              alt="_blank"
              style={{
                height: '40px',
                backgroundColor: '#f3a847',
                padding: '1vh',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            Account and SigIn
          </button>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
            CART
          </a>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
