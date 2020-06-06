import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
    root: {
        width: '100%',
        display:'flex',
        background: '#333333',
        left:0,
        bottom:0,
        right:0,
        height: '5%'
    },
  });
const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root} display='flex' flexDirection="row-reverse" color='white' bgcolor="#333333">
            <Box p={1} mr={5}>
                利用規約
            </Box>
            <Box p={1} mr={3}>
                プライバシーポリシー
            </Box>
        </Box>
    );
};

export default Footer;