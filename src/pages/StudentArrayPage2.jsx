import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage2(props) {


    const [ scoreData, setScoreData] = useState({
        total:0,
        avg: 0
    })

    const staticId = useRef(0);

    const [ studentScoreList, setStudentScoreList] = useState([]);
    const [ inputValue, setInputValue ] = useState({
        id:"",
        name:"",
        score:0
    })

    const [updateID, setUpdateID] = useState(0);


    useEffect(() => {
        
            let totals = 0
            

            for(let i = 0; i < studentScoreList.length; i++) {
                totals += parseInt(studentScoreList[i].score)
            }
            // const total = studentScoreList.reduce((result, student) => result + student.score, 0);

            const avgs = studentScoreList.length === 0 ? 0 : totals/studentScoreList.length;

            setScoreData({
                total:totals,
                avg: avgs
            })

    },[studentScoreList])

    const handleInputChange = (e) =>  {
        const {name, value} = e.target;
        if(name === 'score') {
            setInputValue({
                ...inputValue,
                [name]: parseInt(value)
            });
        }
        setInputValue({
            ...inputValue,
            [name]: value
        });
        

    }
    
    const handleAddClick = () => {
        const scoreStudent = {
            ...inputValue,
            id: staticId.current += 1
        }

        setStudentScoreList([...studentScoreList, scoreStudent])
    }

    const handleUpdateClick = (id) => {
        setUpdateID(id);
        setInputValue(studentScoreList.filter(student => student.id === id)[0]);
    }

    const handleCancelClick = () => {
        setUpdateID(0);
        setInputValue({
            id:"",
            name:"",
            score:""
        })
    }

    const handleUpdateSubmitClick = () => {
        // const findIndex = studentScoreList.indexOf(studentScoreList.filter(student => student.id === updateID)[0])

        // const updateList = [...studentScoreList]

        // updateList[findIndex] = inputValue;

        // setStudentScoreList(updateList);
        // handleCancelClick();

        setStudentScoreList(studentScoreList.map(student => {
            return student.id !== updateID ? student : {
                id: updateID,
                name: inputValue.name,
                score: parseInt(inputValue.score)
            }
        }))
        
    }

    const handleDeleteClick = (id) => {
        setStudentScoreList([...studentScoreList.filter(student => student.id != id)]);
    }






    return (
        <div>
            <div>
                <input type="text" name='id' disabled={true} value={inputValue.id} placeholder='ID'/>
                <input type="text" name='name' onChange={handleInputChange} placeholder='이름' value={inputValue.name}/>
                <input type="text" name='score'onChange={handleInputChange} placeholder='점수' value={inputValue.score}/>
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>
                    {studentScoreList.map(student => {
                        return <tr key={student.id}>
                            <th>{student.id}</th>
                            <th>{student.name}</th>
                            <th>{student.score}</th>
                            <td>{updateID !== student.id
                                ? <button onClick={() => {handleUpdateClick(student.id)}}>수정</button>
                                : <button onClick={handleUpdateSubmitClick}>확인</button>
                                }
                            </td>
                            <td>{updateID !== student.id
                                ? <button onClick={() => {handleDeleteClick(student.id);}}>삭제</button>
                                : <button onClick={handleCancelClick}>취소</button>    
                                }
                            </td>
                        </tr>
                    })

                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th>{scoreData.total}</th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th>{scoreData.avg.toFixed(2)}</th>
                    </tr>
                </tfoot>
            </table>


        </div>
    );
}

export default StudentArrayPage2;