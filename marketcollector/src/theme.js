import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#007BFF',  // Blue
        },
        secondary: {
            main: '#D6EFFF',  // Light Blue
        },
        text: {
            primary: '#2E1503',  // Dark Brown
        },
        background: {
            default: '#F8F9FA',  // Light background to complement the colors
        },
    },
    typography: {
        fontFamily: ['Poppins', 'Roboto', 'Arial', 'sans-serif'].join(','),
        h1: {
            fontFamily: 'Poppins',  // For large headers
            fontWeight: 700,
            color: '#4E342E',
        },
        h4: {
            fontFamily: 'Poppins',
            fontWeight: 600,
            color: '#4E342E',
        },
        body1: {
            fontFamily: 'Roboto',  // Main body text font
            color: '#4E342E',
        },
        caption: {
            fontFamily: 'Arial',  // Smaller captions or alert text
            fontSize: '0.85rem',
            color: '#4E342E',
        },
    },
});

export default theme;
