import { Card, Typography, Box, Stack, Container, Grid, Paper, Button, TextField, FormControl } from "@mui/material"

const PetProfileHx = ({isEdit, petProfile, setPetProfile}) => {
  //const isEdit = {isEdit}
  function updateHx (e) {
    e.preventDefault();
   
    switch (e.target.id) {
      case 'medhx' :
        setPetProfile({...petProfile, med_hx:e.target.value});
        break;
      case 'allergies' :
        setPetProfile({...petProfile, allergies:e.target.value});
        break;
      case 'surghx' :
        setPetProfile({...petProfile, surg_hx:e.target.value});
        break;
      default :
        console.log('no changes made')
    }
  }

  return (
    <Container>
      <Typography>Major Medical History</Typography>
      <Stack spacing={2} sx={{p:2}}>
        <FormControl>
        <Typography>Allergies</Typography> <TextField disabled={isEdit} id="allergies" label="Food, Medications , Others?" value={petProfile.allergies} onChange={updateHx}/>
        <Typography>Illnesses</Typography> <TextField disabled={isEdit} id="medhx" label="Any Major Illnesses?" value={petProfile.med_hx} onChange={updateHx} />
        <Typography>Surgical History</Typography> <TextField disabled={isEdit} id="surghx" label="Previous Surgeries" value={petProfile.surg_hx} onChange={updateHx}/>
        </FormControl>
      </Stack>
    </Container>

  )
}
export default PetProfileHx