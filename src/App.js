
import './App.css';
import StudentInfo from './components/StudentInfo';
import InfoInput from './components/InfoInput';
import { useState } from 'react';
import StudentAnser from './answer/StudentAnser';

function App() {
  const [userName, setUserName] = useState('이름');
  const [userAge, setUserAge] = useState('나이');
  const [userAddress, setUserAddress] = useState('주소');


  const [responName, setResponName] = useState();
  const [responAge, setResponAge] = useState();
  const [responAddress, setResponAddress] = useState();

  const handleOnInsert = () => {
    setResponName(userName)
    setResponAge(userAge)
    setResponAddress(userAddress)
    setUserName("")
    setUserAge("")
    setUserAddress("")
  }

  const handleOnDelete = () => {
    setResponName("")
    setResponAge("")
    setResponAddress("")
  }


  return (
    <>
      {/* <StudentInfo set={responName} title={"이름"}/>
      <StudentInfo set={responAge} title={"나이"}/>
      <StudentInfo set={responAddress} title={"주소"}/>
      
      <InfoInput set={setUserName} value={userName}/>
      <InfoInput set={setUserAge} value={userAge}/>
      <InfoInput set={setUserAddress} value={userAddress}/>

      <button onClick={handleOnInsert}>확인</button>
      <button onClick={handleOnDelete}>비우기</button> */}

      <StudentAnser/>
    </>
  );
}

export default App;
