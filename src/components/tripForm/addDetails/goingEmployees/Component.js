import React from "react";

const GoingEmployees = ({ goingEmployees }) => (
  <>
    {goingEmployees.length > 0 ? (
      <div>
        <h4>Į kelionę vykstantys darbuotojai: </h4>
        <ul>
          {goingEmployees.map(employee => (
            <li key={`${employee.id}`}>{employee.label}</li>
          ))}
        </ul>
      </div>
    ) : null}
  </>
);

export default GoingEmployees;
