import { Card, Typography, Box, Stack, Container, Grid, Paper, Button, TextField, FormControl } from "@mui/material"
import { useEffect } from 'react';

const PetProfileHx = ({isEditable, petProfile, setPetProfile}:any) => {
  //const isEdit = {isEdit}
  function updateHx (e:any) {
    e.preventDefault();
    
    //converts the string to an array in order to pass it to database
    function stringToArray(string:String) {
      const splitter = string.split(',')
      return [...splitter];
    }
   
    switch (e.target.id) {
      case 'medhx' :
        setPetProfile({...petProfile, med_hx:stringToArray(e.target.value)});
        //console.log(petProfile.med_hx)
        break;
      case 'allergies' :
        setPetProfile({...petProfile, allergies:stringToArray(e.target.value)});
        break;
      case 'surghx' :
        setPetProfile({...petProfile, surg_hx:stringToArray(e.target.value)});
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
        <Typography>Allergies</Typography> <TextField disabled={isEditable} id="allergies" placeholder="Food, Medications , Others?" value={petProfile.allergies} onChange={updateHx}/>
        <Typography>Illnesses</Typography> <TextField disabled={isEditable} id="medhx" placeholder="Any Major Illnesses?" value={petProfile.med_hx} onChange={updateHx} />
        <Typography>Surgical History</Typography> <TextField disabled={isEditable} id="surghx" placeholder="Previous Surgeries" value={petProfile.surg_hx} onChange={updateHx}/>
        </FormControl>
      </Stack>
    </Container>

  )
}
export default PetProfileHx