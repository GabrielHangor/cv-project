import React, { useState } from 'react';
import MainInfo from './Components/InputForm/MainInfo';
import PreviewHeader from './Components/Preview/PreviewHeader';
import PreviewPersonal from './Components/Preview/PreviewPersonal';
import PreviewMain from './Components/Preview/PreviewMain';
import Experience from './Components/InputForm/Experience';
import Education from './Components/InputForm/Education';

function App() {
  const [mainInfo, setMainInfo] = useState({});
  const [experienceObj, setExperienceObj] = useState({});
  const [experienceArr, setExperienceArr] = useState([]);
  const [educationObj, setEducationObj] = useState({});
  const [educationArr, setEducationArr] = useState([]);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMainInfo({
      ...mainInfo,
      [name]: name === 'photo' ? URL.createObjectURL(e.target.files[0]) : value,
    });
  };

  const handleExperienceInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setExperienceObj({ ...experienceObj, [name]: value });
  };

  const handleEducationInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEducationObj({ ...educationObj, [name]: value });
  };

  const submitExperience = () => {
    setExperienceArr([...experienceArr, experienceObj]);
    setExperienceObj({});
  };

  const submitEducation = () => {
    setEducationArr([...educationArr, educationObj]);
    setExperienceObj({});
  };

  const deletePreviousExperience = () => {
    const array = experienceArr;
    array.pop();
    setExperienceArr(array);
  };

  const deletePreviousEducation = () => {
    const array = educationArr;
    array.pop();
    setEducationArr(array);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>CV APP</h1>
      </header>
      <main className="inner-container">
        <div className="input-form">
          <MainInfo handleInputChange={handleInputChange} />
          <Experience
            handleInputChange={handleExperienceInputChange}
            submitExperience={submitExperience}
            deletePreviousExperience={deletePreviousExperience}
          />
          <Education
            handleInputChange={handleEducationInputChange}
            submitEducation={submitEducation}
            deletePreviousEducation={deletePreviousEducation}
          />
        </div>
        <div className="preview">
          <PreviewHeader mainInfoState={mainInfo} />
          <div className="preview-inner">
            <PreviewMain
              experienceArr={experienceArr}
              educationArr={educationArr}
              description={mainInfo.description}
            />
            <PreviewPersonal mainInfoState={mainInfo} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
