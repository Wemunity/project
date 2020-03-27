import React, { useState } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import en from 'date-fns/locale/en-GB';
import MaskedInput from 'react-text-mask'
// registerLocale('en', en)

import ArrowBlue from '../../assets/arrow-blue.svg';
import ArrowWhite from '../../assets/arrow-white.svg';

// const DateField = props => {
//   const placeholderText = props.placeholderText;
//   var textColor = props.lightText ? '#FFF' : '#090039';
//   // const calendar = useRef(null)
//   const [startDate, setStartDate] = useState(new Date());
//   const handleSetStartDate = (date) => {
//     setStartDate(date);
//     props.onChange(date);
//   }
//   return (
//
//     <div className="datefield" style={{color:textColor}}>
//       <div className="datefield__toptext">
//         <span>{props.topText}</span>
//       </div>
//       <div className="datefield__content">
//         <form>
//           <label className="datefield__container">
//             <DatePicker
//                 selected={startDate}
//                 onChange={handleSetStartDate}
//                 className="datefield__textinput"
//                 shouldCloseOnSelect={true}
//                 locale={en}
//                 placeholderText="dd/mm/yy"
//                 dateFormat="MMMM d, yyyy"
//                 // ref={calendar}
//               />
//             {/* <span className="datefield__textfield"></span> */}
//           </label>
//         </form>
//         {props.arrow === true ? <img className="datefield__arrow" src={
//           props.lightText === true ? ArrowWhite: ArrowBlue} alt="->"/>
//           : null
//         }
//
//       </div>
//       {props.lightText ? <div className="datefield__line" style={{backgroundColor:'#E1E1EF'}}/> : <div className="datefield__line"/>}
//
//     </div>
//   );
// };
//
// export default DateField;

const DateField = props => {
  var textColor = props.lightText ? '#FFF' : '#090039';
  // const calendar = useRef(null)
  // const [startDate, setStartDate] = useState(new Date());
  const handleSetStartDate = (date) => {
    // console.log(date.target.value);
    // console.log(date);
    // setStartDate(date.target.value);
    props.onChange(date.target.value);

  }

  return (

    <div className="datefield" style={{color:textColor}}>
      <div className="datefield__toptext">
        <span>{props.topText}</span>
      </div>
      <div className="datefield__content">
        <form autoComplete="off">
          <label className="datefield__container">
            <MaskedInput
              mask={[/[0-9]/, /\d/, '/' , /\d/, /\d/, '/', "2020"]}
              placeholder="dd/mm/2020"
              className="datefield__textinput"
              onChange={handleSetStartDate}
              // value={props.value}
              kind={'datetime'}
      				options={{
      					format: 'DD-MM-YYYY'
      				}}
            />
          </label>
        </form>
        {props.arrow === true ? <img className="datefield__arrow" src={
          props.lightText === true ? ArrowWhite: ArrowBlue} alt="->"/>
          : null
        }

      </div>
      {props.lightText ? <div className="datefield__line" style={{backgroundColor:'#E1E1EF'}}/> : <div className="datefield__line"/>}

    </div>
  );
};

export default DateField;
