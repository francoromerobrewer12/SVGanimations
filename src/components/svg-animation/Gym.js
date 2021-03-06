import React from 'react';
import './Gym.css';
import { ImArrowRight2 } from 'react-icons/im';
import { Link } from 'react-router-dom';


function Gym() {
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          height="512"
          viewBox="0 0 512 512"
          width="512"
          data-name="Layer 1"
          className="gym-svg"
        >
          <path
            d="m136 88h-48c-44.183 0-80 42.981-80 96s35.817 96 80 96h48"
            fill="#90e3f5"
          />
          <path
            d="m184 260.807c-13.37 12.052-29.99 19.193-48 19.193-44.183 0-80-42.981-80-96s35.817-96 80-96c29.609 0 55.461 19.3 69.294 47.994"
            fill="#0f8ca8"
          />
          <path
            d="m256 208h-108a20 20 0 0 1 -20-20v-8a20 20 0 0 1 20-20h12"
            fill="#076372"
          />
          <path
            d="m208 512v-208l-32-56v-51.771l142.714-52.229v107l-22.714 53v208"
            fill="#f9ac78"
          />
          <path
            d="m176 204.533s6.589 14.467 29.294 14.467h42.063s-6.357 51 8.643 53l45.5-70.642-5.256-9.82z"
            fill="#e57f39"
          />
          <circle className="circle1" cx="371.298" cy="32" fill="#f69038" r="24" />
          <circle className="circle2" cx="392" cy="344" fill="#90e3f5" r="24" />
          <path  className="star2"
            d="m89.009 345.009 13.677-25.009 13.678 25.009 25.009 13.677-25.009 13.678-13.678 25.009-13.677-25.009-25.009-13.678z"
            fill="#f69038"
          />
          <path className="star1"
            d="m217.009 43.636 13.677-25.009 13.678 25.009 25.009 13.678-25.009 13.677-13.678 25.009-13.677-25.009-25.009-13.677z"
            fill="#90e3f5"
          />
          <path className="punto1" d="m72 32h16v16h-16z" fill="#f69038" />
          <path className="punto2" d="m368 400h16v16h-16z" fill="#f69038" />
          <path
            d="m307.357 208h-117.357a30 30 0 0 1 -30-30v-12a30 30 0 0 1 30-30h117.357z"
            fill="#fccdac"
          />
          <path
            d="m239.686 212c0-4.418-3.582-12-8-12a8.009 8.009 0 0 1 -8-8v-32h-16v32a23.887 23.887 0 0 0 1.376 8h-1.062a8.009 8.009 0 0 1 -8-8v-32h-16v32c0 6.142 3.855 15.751 7.663 20z"
            fill="#e57f39"
          />
          <path
            d="m318.71 211.02v39.98l-20.79 48.52h-41.92v-27.52c-8-32 16-48 16-48l-24-32v-40l13.09 13.09 34.91 34.91z"
            fill="#f9ac78"
          />
          <path
            d="m307.357 136h-26.086c-3.033 32.028-5.182 101.5 26.99 139.386l10.449-24.386v-39.98l-11.353-5.509z"
            fill="#232626"
            opacity=".2"
          />
          <path
            d="m424 88h-48c-44.183 0-80 42.981-80 96s35.817 96 80 96h48"
            fill="#90e3f5"
          />
          <ellipse cx="424" cy="184" fill="#0f8ca8" rx="80" ry="96" />
          <ellipse cx="436" cy="184" fill="#076372" rx="20" ry="24" />
        </svg>

        <Link to="/">
          <div className="btnArrow">
            <ImArrowRight2 className="arrowIcon" />
          </div>
        </Link>
        
      </div>
    );
}

export default Gym
