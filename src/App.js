import './App.css';
import Card from './components/cv_section/Card';
import Download from '@mui/icons-material/Download';
import CustonIconButton from './components/custom_icon_button/CustonIconButton';
import PreviousExperiencesCard from './components/cv_section/PreviousExperiencesCard';

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
    "title": "+ Languages and Technologies to devolop:",
    "subtitle": "Kotlin | Java | JavaScript | C# | C | Python | Git | Jetpack Compose | RxJava | Coroutines | Rest | Retrofit | GraphQL | Apollo | ReactJS | Angular | HTML | CSS | Bootstrap | Material UI kit."
  },
  {
    "title": "+ Languages and Technologies to test",
    "subtitle": "Unit tests | Integration tests | Espresso tests | Screenshot tests | E2E tests | Ruby | Cucumber | Gherkein | Mockito."
  },
  {
    "title": "+ Platforms and tools",
    "subtitle": "Github | Gitlab | Bitrise | Jenkins | Fastlane | Vercel | Heroku | SourceTree | Jira | Confluence | Miro | Zeplin."
  },
  {
    "title": "+ Architectures",
    "subtitle": "MVVM | MVC | MVP | Unidirectional Architecture (UDA, BUDA)."
  },
  {
    "title": "+ Methodologies, technics and principles",
    "subtitle": "Agile | Scrum | Waterfall | PDCA | Kanban | Kaizen | 5S | Clean Code | SOLID."
  },
  {
    "title": "+ Languages",
    "subtitle": "Portuguese (Native), English (Fluent), Spanish (Intermediate)"
  }
]

const previousExperiences = [
  {
    "companyName": "Xing",
    "startEndDate": "Started at: 09/2021",
    "description": "Xing is part of New Work SE group. It’s the largest job matcher application in Germany.\nAt Xing I was part of the content team and had the pleasure to work close to a senior engineer with over 10 years experience in software development who was like a mentor to me for about one year. After that I was in a multidisciplinary team as the only android engineer, responsible for the app modules related to content and companies pages.\nI also worked on platform team related tasks created at our kaizen board, helping the android community (about 30 engineers) to improve our codebase.\nI was part of the compose migration task force and helped on migrating some features from my team and also for other teams.\nDuring my time at xing I joined a group that was create with the purpose of rethinking the “android engineer hiring tunnel”. After getting insights from the other enginners and organizing ideas we were able to successfully design a new approach for the process.",
    "subitems": []
  },
  {
    "companyName": "Celfocus IT Services and Consulting.",
    "startEndDate": "04/2019 – 08/2021",
    "subitems": [
      {
        "companyName": "Du Telecom is a telecom company from Dubai.",
        "projectName": "Project: Digital Catalog",
        "startEndDate": "04/2019 – 08/2021",
        "description": "I participated in the creation of a digital catalog to perform devices comparison, presenting all the devices carachteristics and specifications in order to help clients to decided which device fits better their needs. The app was created to be used on tablets at Du stores and was meant to work “offline” the catalog was updated once a day syncing with a remote Omnichannel.\n\nFor this project we were a team of two android developers, the app was created from scratch and delivered on time."
      }
    ]
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
          <PreviousExperiencesCard title="Previous Experiences" data={previousExperiences} />
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
