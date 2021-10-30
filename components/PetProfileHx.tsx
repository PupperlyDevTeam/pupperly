import { Card, Typography, Box, Stack, Container, Grid, Paper, Button, TextField, FormControl } from "@mui/material"

const PetProfileHx = ({isEdit, petProfile, setPetProfile}) => {
  //const isEdit = {isEdit}
  function updateHx (e) {
    e.preventDefault();
    console.log(e.target.value)
    setPetProfile({...petProfile, med_hx:e.target.value})
  }

  return (
    <Container>
      <Typography>Major Medical History</Typography>
      <Stack spacing={2} sx={{p:2}}>
        <FormControl>
          <TextField disabled = {isEdit} id="medhx" variant='outlined' label="Past Illness, Surgeries or Other?" value={petProfile.med_hx} onChange={updateHx}/>
        </FormControl>
      </Stack>
    </Container>

  )
}
export default PetProfileHx