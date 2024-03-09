import './App.css';
import Card from './components/cv_section/Card';
import Download from '@mui/icons-material/Download';
import CustonIconButton from './components/custom_icon_button/CustonIconButton';

const educationData = [
  {
    "title": "Bachelor's Degree in Computer Systems Engineering.",
    "subtitle": "Polytechnic Institute of Cávado and Ave (Portugal, 2018 -2021)"
  },
  {
    "title": "Bachelor's Degree in Building Construction Technology.",
    "subtitle": "Federal Institute of Santa Catarina (Brazil, 2010-2015)"
  }
]

const summaryExperience = [
  {
    "title": "5 years of work experience as native android developer.",
    "subtitle": "Kotlin is my main language but I’m able to work with other languages and technologies also for backend and frontend."
  },
  {
    "title": "Participation on international projects (Portugal, Qatar, Dubai, Germany).",
  },
  {
    "title": "I work speaking fluently in 3 languages daily (Portuguese, English, Spanish).",
    "subtitle": "I’ve studied French sometime in my life, but I'm not fluent at all, I know enough to not get lost in France."
  },
  {
    "title": "About 5 years of diverse experiences in the civil engineering field (in a previous life), most of those related to planning, budgeting and coordinating roles. ",
    "subtitle": "I also worked as technical lead on construction sites and as structural masonry drawer."
  },
  {
    "subtitle": "*  I have acted in a couple of other roles and fields in life, ask me about that if you get curious and have time."
  }
]

const technicalSkills = [
  {
    "title": "Languages and Technologies to devolop:",
    "subtitle": "Kotlin | Java | JavaScript | C# | C | Python | Git | Jetpack Compose | RxJava | Coroutines | Rest | Retrofit | GraphQL | Apollo | ReactJS | Angular | HTML | CSS | Bootstrap | Material UI kit."
  },
  {
    "title": "Languages and Technologies to test",
    "subtitle": "Unit tests | Integration tests | Espresso tests | Screenshot tests | E2E tests | Ruby | Cucumber | Gherkein | Mockito."
  },
  {
    "title": "Web Development",
    "subtitle": "HTML, CSS, React, Node.js, Express, Django, Flask"
  },
  {
    "title": "Databases",
    "subtitle": "MySQL, PostgreSQL, MongoDB, SQLite"
  },
  {
    "title": "Tools",
    "subtitle": "Git, Docker, Jenkins, Jira, Confluence, Postman"
  },
  {
    "title": "Languages",
    "subtitle": "Portuguese (Native), English (Fluent), Spanish (Intermediate)"
  }
]



function App() {

  return (
    <div className="App">
      <header className="header">
        <h1>THIAGO FERREIRA FARIAS</h1>
        <h2>Software Engineer</h2>
      </header>
      <div className="main-container">
        <div className="section-container left">
          <p>Discover about my experiences and skills</p>
          <Card title="Education" data={educationData} />
          <Card title="Summary Experience" data={summaryExperience} />
          <Card title="Technical Skills" data={technicalSkills} />
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
    </div>
  );
}

export default App;
