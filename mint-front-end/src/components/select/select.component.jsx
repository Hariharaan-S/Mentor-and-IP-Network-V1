import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel sx={{ marginTop: "-3px" }} id="demo-simple-select-autowidth-label">Domain</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    sx={{ marginTop: "4px", height: "2.7rem" }}
                    label="Domain"
                >
                    <MenuItem value={20}>Artificial Intelligence</MenuItem>
                    <MenuItem value={21}>Machine Learning</MenuItem>
                    <MenuItem value={22}>Cyber Security</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}