import './App.css';
import Card from './components/cv_section/Card';
import Download from '@mui/icons-material/Download';
import CustonIconButton from './components/custom_icon_button/CustonIconButton';


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
          <Card title="Education" />

        </div>
        <div className="section-container right">
          <p>Download a short/full version of my CV</p>
          <CustonIconButton title="TLDR CV" icon={<Download />} pdfUrl="./resources/CV_Thiago_Farias.pdf" />
          <CustonIconButton title="FULL VERSION CV" icon={<Download />} />
        </div>
      </div>
    </div>
  );
}

export default App;
