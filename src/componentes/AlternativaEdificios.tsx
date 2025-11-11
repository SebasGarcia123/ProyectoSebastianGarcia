import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function AlternativaEdificios() {
  return (
    <FormControl sx={{ margin: 2}}>
      <FormLabel id="demo-row-radio-buttons-group-label">Filtrar por edificio</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Torres Catalinas Plaza" />
        <FormControlLabel value="male" control={<Radio />} label="Palacio Barolo" />
      </RadioGroup>
    </FormControl>
  );
}