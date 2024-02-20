import React, { useEffect, useRef, useState } from 'react';
import AInfoInput from './answerComponents/AInfoInput'
import AStudentInfo from './answerComponents/AStudentInfo';
import AInfoButtons from './answerComponents/AInfoButtons';

function StudentAnser () {

    const studentObj = {
        name:"",
        age:"",
        address: ""
    }

    const [ student, setStudent] = useState({studentObj});
    const [ inputValues, setInputValues ] = useState({studentObj});
    const [ refresh, setRefresh] = useState(false);

    const inputRef = {
        name: useRef(),
        age: useRef(),
        address: useRef()
    }


    // useEffect(() => {
    //     console.log(inputRef.name.current);
    // })

    // [] 안에 아무것도 업을땐 이벤트가 일어날때마다 useEffect가 실행됨
    // 
    useEffect(()=> {
        if(refresh) {
            setInputValues(studentObj)
        }
        setRefresh(true);
    }, [student]);

        /** 
         * js 객체 특징
         * 1. 키값은 문자열이어도 된다.
         * 2. 변수의 문자열 값을 키값으로 쓰고 싶을 때 []대괄호로 묶어서 참조 할 수 있다.
         * 3. 변수명만 입력하면 객체의 속성과 value로 한번에 정의할 수 있다.
         * 
         * */ 

        // ex 
        // let email = "email";
        // let phone = "010561820";
      
        // let user = {
        //   "username": "test",
        //   ["password"]: "1234",
        //   [email]: "test",
        //   phone
        // }

        

    const handleInputChange = (e) => {
        const { name, value } = e.target;
     setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    const handleOnOk = () => {
        setStudent(inputValues);
    }

    const handleOnClear = () => {
        setStudent(studentObj);
    }

    
    return (
        <>
            <AStudentInfo title="이름" text={student.name}/>
            <AStudentInfo title="나이" text={student.age}/>
            <AStudentInfo title="주소" text={student.address}/>

            <AInfoInput 
                name={"name"} 
                onChange={handleInputChange}
                value={inputValues.name}
                placeholder='이름'
                inputRef={inputRef.name}
                />
            <AInfoInput 
                name={"age"} 
                onChange={handleInputChange}
                value={inputValues.age}
                placeholder='나이'
                ref={inputRef.age}
                />
            <AInfoInput 
                name={"address"} 
                onChange={handleInputChange}
                value={inputValues.address}
                placeholder='주소'
                ref={inputRef.address}
                />
            
            <AInfoButtons>
                <button onClick={handleOnOk}>확인</button>
                <button onClick={handleOnClear}>비우기</button>
            </AInfoButtons>

            

        </>
    );
}

export default StudentAnser;