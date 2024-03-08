import Button from '@mui/material/Button';
import './CustomIconButton.css';

function CustomIconButton({ title, icon, pdfUrl }) {
    const handleDownload = () => {
        // Create a link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        // Set the download attribute with the file name you want
        link.download = 'document.pdf';
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger the click event to start the download
        link.click();
        // Clean up by removing the link from the body
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