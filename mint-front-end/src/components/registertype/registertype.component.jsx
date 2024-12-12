import { Grid2 } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router';

const RegisterType = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h1>Register As</h1>
            </div>
            <Grid2>
                <Grid2>
                    <div onClick={() => navigate('/startup')}>Startup</div>
                    <div onClick={() => navigate('/individual')}>Individual</div>
                    <div>Mentor</div>
                    <div>Incubator</div>
                </Grid2>
                <Grid2>
                    <div>Accelerator</div>
                    <div>Individual Investor</div>
                    <div>Institutional Investor</div>
                    <div>Government Body</div>
                </Grid2>
                <Grid2>
                    <div>Corporate</div>
                </Grid2>
            </Grid2>

            <div>


            </div>
        </div>
    )
}

export default RegisterType;