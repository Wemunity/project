import React from 'react';

import ArrowBlue from '../../assets/arrow-blue.svg';
import ArrowWhite from '../../assets/arrow-white.svg';


const FormField = props => {
  const lightText = props.lightText;
  const topText = props.topText;
  const placeholderText = props.placeholderText;
  const arrow = props.arrow;
  // const date = props.date;
  var textColor = lightText ? '#FFF' : '#090039';
  // var linestyle = {
  //   lightText ? {
  //     backgroundColor:'#090039'
  //   }:
  //   {
  //     backgroundColor:'#E1E1EF'
  //   }
  // }
  return (

    <div className="formfield" style={{color:textColor}}>
      <div className="formfield__toptext">
        <span>{topText}</span>
      </div>
      <div className="formfield__content">
        <form>
          <label className="formfield__container">
            <input type="text" value={props.value} placeholder={placeholderText} onChange={props.onChange}/>
            <span className="formfield__textfield"></span>
          </label>
        </form>
        {arrow === true ? <img className="formfield__arrow" src={
          lightText === true ? ArrowWhite: ArrowBlue} alt="->"/>
          : null
        }
      </div>
      {lightText ? <div className="formfield__line" style={{backgroundColor:'#E1E1EF'}}/> : <div className="formfield__line"/>}

    </div>
  );
};

export default FormField;

// <div className="formfield">
//   <div className="formfield__toptext">
//     <span>{topText}</span>
//   </div>
//   <div className="formfield__content">
//     <span>{placeholderText}</span>
//     {arrow === true ? <img className="formfield__arrow" src={lightText === true ? ArrowWhite: ArrowBlue} alt="->"/> : null}
//   </div>
//   <div className="formfield__line"/>
// </div>

        // <input type="submit" value="Submit" />
