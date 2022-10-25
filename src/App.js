/* eslint-disable no-unused-expressions */
import React from "react";

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

  const saveProcessing = () => {
    const cloneStudent = [...student];
    cloneStudent.push({
      name: text,
      attendace: false,
    });
    setStudent(cloneStudent);
  };

  const resetProcess = () => {
    setText("");
  };

  const [text, setText] = React.useState("");

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
      <input
        value={text}
        type="text"
        className="addStudent"
        onChange={(event) => {
          console.log(event.target.value);
          setText(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          saveProcessing();
          resetProcess();
        }}
      >
        Save
      </button>
    </div>
  );
}

function App() {
  //return <Counter />;
  return <Attendance />;
}

export default App;
