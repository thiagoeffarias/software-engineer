import Button from '@mui/material/Button';
import './CustomIconButton.css';



function CustomIconButton({ title, icon, pdfName }) {

    const handleDownload = () => {
        const pdfPath = process.env.PUBLIC_URL + pdfName;
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = pdfName.toString().split('/').pop();
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