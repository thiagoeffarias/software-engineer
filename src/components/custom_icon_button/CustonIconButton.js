import Button from '@mui/material/Button';
import './CustomIconButton.css';

function CustomIconButton({ title, icon }) {

    const handleDownload = () => {
        // Adjust the path to the PDF file based on the location of your component
        const pdfPath = process.env.PUBLIC_URL + '/THIAGO_FERREIRA_FARIAS_TLDR_CV.pdf';
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'THIAGO_FERREIRA_FARIAS_TLDR_CV.pdf'; // specify the desired filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return <Button
        className="button-cv"
        variant="outlined"
        startIcon={icon}
        onClick={handleDownload}
    >
        <span>{title}</span>
    </Button>
};

export default CustomIconButton;