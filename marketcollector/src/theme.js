import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#031273',  // Blue
        },
        secondary: {
            main: '#0492C2',  // Light Blue 
        },
        text: {
            primary: '#2E1503',  // Dark Brown
        },
        background: {
            default: '#F8F9FA',  // Light background to complement the colors
        },
    },
    typography: {
        fontFamily: ['Commissioner', 'Arial', 'sans-serif'].join(','),
        h1: {
            fontFamily: 'Libre Bodoni',  // For large headers
            fontWeight: 700,
            color: '#4E342E',
        },
        h4: {
            fontFamily: 'Commissioner',
            fontWeight: 600,
            color: '#4E342E',
        },
        body1: {
            fontFamily: 'Karla',  // Main body text font
            color: '#4E342E',
        },
        caption: {
            fontFamily: 'Karla',  // Smaller captions or alert text
            fontSize: '0.85rem',
            color: '#4E342E',
        },
    },
});

export default theme;
