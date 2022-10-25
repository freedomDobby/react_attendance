/* eslint-disable no-unused-expressions */
import React, { useState } from "react";

// function Counter() {
//   const [number, setNumber] = useState(0);

//   const onIncrease = () => {
//     setNumber(number + 1);
//   };
//   const onDecrease = () => {
//     setNumber(number - 1);
//   };
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

function Item(props) {
  console.log(props);

  return (
    <div>
      <p>{props.name}</p>
      <p>{props.attendace}</p>
    </div>
  );
}

function Attendance() {
  const [student, setStudent] = React.useState([
    {
      name: "jae1",
      attendace: false,
    },
    {
      name: "jae2",
      attendace: false,
    },
    {
      name: "jae3",
      attendace: false,
    },
    {
      name: "jae4",
      attendace: false,
    },
  ]);

  const check = (clickIndex) => {
    const cloneStudent = [...student];
    cloneStudent[clickIndex].attendace = !cloneStudent[clickIndex].attendace;
    setStudent(cloneStudent);
    console.log(cloneStudent[clickIndex].attendace);
  };

  return (
    <div>
      <table border={1}>
        <thead>Attendance</thead>
        <tr>
          <th>Name</th>
          <th>Attendance</th>
          <th>Check</th>
        </tr>
        <tbody id="list">
          {student.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.attendace === true ? "O" : "X"}</td>
                <td>
                  <button onClick={check.bind(this, index)}>CHECK</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  //return <Counter />;
  return <Attendance />;
}

export default App;
