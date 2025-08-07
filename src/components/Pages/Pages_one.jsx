import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const Pages_one = () => {
    return (
        <Box mt={5} textAlign="center">
            <Typography variant="h6" fontWeight="normal" mb={3}>
                Bu yerda yangi kontent bo‘ladi
            </Typography>

            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
            >
                Bosh sahifaga qaytish
            </Button>
        </Box>
    );
};

export default Pages_one;
