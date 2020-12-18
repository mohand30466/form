import React from "react";
import './create.css'
import logo from './mohand.jpg'


const Create = ({
  value,
  onChange,
  isDisabled,
  create,
  onChanget,
  valuet,

  valuea,
  onChangea,
}) => {
  return (
    <div className="create">
      <h3>Front End Crash Course</h3>
      <p>if you intersted to learn coding, I open new platform to teach coding from scratsh,taking you throug HTML,Css,Js,React,git,and Githup from the Basic to senior front end developer</p>
      <div className="forms">
    
      <form action="#">
      <div>
        <input
          type="text"
          id="name"
          placeholder=" Name"
          value={value}
          onChange={onChange}
        />
        </div>
        <div>
        <input
          type="text"
          id="address"
          placeholder=" Address"
          value={valuea}
          onChange={onChangea}
        />
        </div>
        <div>
        <input
          type="text"
          id="name"
          placeholder=" Phone"
          value={valuet}
          onChange={onChanget}
        />
        <div>
        <input
          className="submit"
          disabled={isDisabled}
          onClick={create}
          type="submit"
        />
        </div>
        </div>
        
      </form>
      </div>
      <p>the course will start at saterday 2/1/2021,at south Tel aviv evening twice a weak for 6 monthes,SIGN UP and start target your goal</p>
      <img src={logo}/>
      <p>Mohand Abdalmoneim</p>
      <p>mohand30466@gmail.com</p>

      <p>0547323026</p>

    </div>
  );
};
export default Create;
