import React from 'react';

function Greetings() {
  return (
    <div className="greetings">
      <div className="greetings__item">
        <b>Hello, world! I'm</b>
        <br />
        <span>Diukarev Vladymyr</span>
        <p>
          Hi, my name is Diukarev Vladymyr.
          <br /> I'm 30 years old. I'm a frontend developer. I write code in JavaScript and much
          love ReactJS. I want to start a career as a junior front end developer in the company and
          after 5 years grow to a team lead.
        </p>
      </div>
      <div className="arrow-up">
        <span></span>
        <span></span>
        <span></span>
        <b>Сlick categories to find out more</b>
      </div>
    </div>
  );
}

export default Greetings;
