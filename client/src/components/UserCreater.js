import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

function UserCreater() {

  const [inputValue, setInputValue] = useState('');
  const setUser = useSetRecoilState(userState);

  const addUser = () => {
    setUser((oldUser) => [
      ...oldUser,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: {value}}) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange}/>
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

let id=0;
function getId() {
  return id++;
}