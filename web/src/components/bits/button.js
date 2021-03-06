import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBlue from '../../assets/arrow-blue.svg';
import ArrowWhite from '../../assets/arrow-white.svg';

const Button = props => {
  const link = props.link;
  const light = props.light;
  const text = props.text;
  const arrow = props.arrow;
  var backgroundColor = light ? '#FFF' : '$blue';
  var textColor = light ? '#0043FF' : '#FFF';

  return (
    <>
      {props.handleValidation ? (
        <button
          onClick={props.handleValidation}
          className="button"
          style={{ backgroundColor: backgroundColor, color: textColor }}
        >
          <div className="button__content">
            <span>{text}</span>
            {arrow === true ? (
              <img
                className="button__arrow"
                src={light === true ? ArrowBlue : ArrowWhite}
                alt="->"
              />
            ) : null}
          </div>
        </button>
      ) : (
        <Link to={link} style={{ textDecoration: 'none' }}>
          <div
            className="button"
            style={{ backgroundColor: backgroundColor, color: textColor }}
          >
            <div className="button__content">
              <span>{text}</span>
              {arrow === true ? (
                <img
                  className="button__arrow"
                  src={light === true ? ArrowBlue : ArrowWhite}
                  alt="->"
                />
              ) : null}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Button;
