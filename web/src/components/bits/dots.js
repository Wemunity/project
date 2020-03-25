import React from 'react';
import { Link } from 'react-router-dom';

const Dots = props => {


  return (
    <div className="dots">
      { props.active === "1" ? <div className="dots__dot-active">1</div> : <div className="dots__dot">1</div> }
      { props.active === "2" ? <div className="dots__dot-active">2</div> : <div className="dots__dot">2</div> }
      { props.active === "3" ? <div className="dots__dot-active">3</div> : <div className="dots__dot">3</div> }
      { props.active === "4" ? <div className="dots__dot-active">4</div> : <div className="dots__dot">4</div> }
    </div>
  );
};

export default Dots;
