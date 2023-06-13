import React, { useState } from 'react';

const ResumeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);
  const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
  const [skills, setSkills] = useState([]);

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institute: '', year: '', degree: '' }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', year: '', designation: '' }]);
  };

  const handleAddSkill = (skill) => {
    setSkills([...skills, skill]);
  };

  return (
    <div>
      <h2>Resume Builder</h2>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <input
              type="text"
              value={edu.institute}
              onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
            />

            <input
              type="text"
              value={edu.year}
              onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
            />

            <input
              type="text"
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            />
          </div>
        ))}

        <button type="button" onClick={handleAddEducation}>
          Add Education
        </button>

        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <input
              type="text"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
            />

            <input
              type="text"
              value={exp.year}
              onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
            />

            <input
              type="text"
              value={exp.designation}
              onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
            />
          </div>
        ))}

        <button type="button" onClick={handleAddExperience}>
          Add Experience
        </button>

        <h3>Skills</h3>
        <input
          type="text"
          placeholder="Add skill"
          onChange={(e) => handleAddSkill(e.target.value)}
        />
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResumeForm;
