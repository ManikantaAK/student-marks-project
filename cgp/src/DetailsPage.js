import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DetailsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/students');
      setStudents(response.data);
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll</th>
          <th>Subject 1</th>
          <th>Subject 2</th>
          <th>Subject 3</th>
          <th>Subject 4</th>
          <th>Subject 5</th>
          <th>Subject 6</th>
          <th>Avg CGP</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.roll}</td>
            {student.subjects.map((subject, i) => (
              <td key={i}>{subject.marks}</td>
            ))}
            <td>{student.avgCGP}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetailsPage;
