import './App.css';
import Card from './components/cv_section/Card';
import Download from '@mui/icons-material/Download';
import CustonIconButton from './components/custom_icon_button/CustonIconButton';
import PreviousExperiencesCard from './components/cv_section/PreviousExperiencesCard';
import educationData from './repository/education.json';
import summaryExperienceData from './repository/summary_experience.json';
import technicalSkillsData from './repository/technical_skills.json';
import previousExeriencesData from './repository/previous_experiences.json';
import profilePhoto from './images/me_coffee.jpeg';
import { UilEnvelope, UilLinkedin, UilGithub } from '@iconscout/react-unicons';

function App() {

  return (
    <div className="App">
      <div className='content-container'>
        <header className="header">
          <h1>THIAGO FERREIRA FARIAS</h1>
          <h2>Software Engineer</h2>
        </header>
        <div className="container-full-screen">
          <img src={profilePhoto} alt="Thiago Farias" className="profile-picture" />
        </div>
        <div className="main-container">
          <div className="section-container left">
            <p>Discover about my experiences and skills</p>
            <Card title="Education" data={educationData} />
            <Card title="Summary Experience" data={summaryExperienceData} />
            <Card title="Technical Skills" data={technicalSkillsData} />
            <PreviousExperiencesCard title="Previous Experiences" data={previousExeriencesData} />
          </div>
          <div className="section-container right">
            <p>Download a short/full version of my CV</p>
            <CustonIconButton
              title="TLDR CV"
              icon={<Download />}
              pdfName="/THIAGO_FERREIRA_FARIAS_TLDR_CV.pdf"
            />
            <CustonIconButton
              title="FULL VERSION CV"
              icon={<Download />}
              pdfName="/THIAGO_FERREIRA_FARIAS_CV.pdf"
            />
          </div>
        </div>
        <footer className="footer">
          <div className="footer-item">
            <a href='mailto:thiagoferreirafarias@gmail.com'>
              <UilEnvelope color="white" />
              <span>thiagoferreirafarias@gmail.com</span>
            </a>
          </div>
          <div className="footer-item">
            <a href='https://www.linkedin.com/in/thiagoferreirafarias/' target="_blank">
              <UilLinkedin color="white" />
              <span>linkedin.com/in/thiagoferreirafarias</span>
            </a>
          </div>
          <div className="footer-item">
            <a href='https://github.com/thiagoeffarias' target="_blank">
              <UilGithub color="white" />
              <span>github.com/thiagoeffarias</span>
            </a>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;
