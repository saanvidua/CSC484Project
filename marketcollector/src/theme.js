import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#031273',  // Blue #031273 #016180
        },
        secondary: {
            main: '#0492C2',  // Light Blue 
        },
        text: {
            primary: '#000000',  // Black
        },
        background: {
            default: '#F8F9FA',  // Light background to complement the colors
        },
    },
    typography: {
        fontFamily: ['Commissioner', 'Arial', 'serif'].join(','),
        h1: {
            fontFamily: 'Libre Bodoni',  // For large headers
            fontWeight: 700,
            color: '#000000',
        },
        h4: {
            fontFamily: 'Commissioner',
            fontWeight: 600,
            color: '#000000',
        },
        body1: {
            fontFamily: 'Karla',  // Main body text font
            color: '#000000',
        },
        caption: {
            fontFamily: 'Karla',  // Smaller captions or alert text
            fontSize: '0.85rem',
            color: '#000000',
        },
    },
});

export default theme;
