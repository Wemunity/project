import React from 'react';

const Checkbox = props => {
  const text = props.text;
  const caption = props.caption;

  return (
    <div className="checkboxfield">
      <form>
        <label className="checkboxfield__container">
          <input type="checkbox"/>
          <span className="checkboxfield__checkmark"></span>
        </label>
      </form>
      <div className="checkboxfield__text-wrapper">
        <span>{text}</span>
        <span className="checkboxfield__caption">{caption}</span>
      </div>
    </div>
  );
};

export default Checkbox;
