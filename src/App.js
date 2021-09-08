import React from 'react';

import { Greetings, About, Works, Skills, Experience, Education, Contacts } from './components';

function App() {
  const arr = ['About me', 'Skills', 'Works', 'Experience', 'Education', 'Contacts'];
  const [myBio, setMyBio] = React.useState('');

  const onClose = () => {
    setMyBio('');
  };

  return (
    <div className="wrapper">
      <div className="nav">
        <ul>
          {arr.map((item, index) => (
            <li
              key={index}
              className={myBio === item ? 'active' : ''}
              onClick={() => setMyBio(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <div className="content__item">
          {myBio === '' && <Greetings />}
          {myBio === 'About me' && <About close={onClose} />}
          {myBio === 'Skills' && <Skills close={onClose} />}
          {myBio === 'Works' && <Works close={onClose} />}
          {myBio === 'Experience' && <Experience close={onClose} />}
          {myBio === 'Education' && <Education close={onClose} />}
          {myBio === 'Contacts' && <Contacts close={onClose} />}
        </div>
      </div>
    </div>
  );
}

export default App;
