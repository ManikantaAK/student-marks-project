import React, { useState } from 'react';
import axios from 'axios';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    subjects: Array(6).fill({ name: '', marks: 0 }),
    avgCGP: 0,
  });

  const handleInputChange = (index, field, value) => {
    const newSubjects = formData.subjects.map((subject, i) =>
      i === index ? { ...subject, [field]: value } : subject
    );
    setFormData({ ...formData, subjects: newSubjects });
  };

  const calculateAvgCGP = () => {
    const totalMarks = formData.subjects.reduce((sum, subject) => sum + parseInt(subject.marks), 0);
    const avg = totalMarks / 6;
    setFormData({ ...formData, avgCGP: avg });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    calculateAvgCGP();
    await axios.post('http://localhost:5000/api/student', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Roll"
        value={formData.roll}
        onChange={(e) => setFormData({ ...formData, roll: e.target.value })}
        required
      />
      {formData.subjects.map((subject, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Subject ${index + 1} Name`}
            value={subject.name}
            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
            required
          />
          <input
            type="number"
            placeholder={`Subject ${index + 1} Marks`}
            value={subject.marks}
            onChange={(e) => handleInputChange(index, 'marks', e.target.value)}
            required
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPage;
