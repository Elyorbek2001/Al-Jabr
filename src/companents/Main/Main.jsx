import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate(); // sahifa o'zgartirish uchun

    return (
        <div className='main flex flex-col items-center justify-center p-5'>
            <Button
                variant="contained"
                onClick={() => navigate('/keyingi')} // bosilganda boshqa sahifaga o‘tadi
            >
                Keyingi sahifa
            </Button>
        </div>
    );
}

export default MainPage;
