import { Avatar, Card, Typography, Box, Stack, Container, Button, FormControl, TextField } from "@mui/material"
import { useState, useEffect } from "react"

const PetProfileMed = ({isEdit, petProfile, setPetProfile}) => {

  function updateHx (e) {
    e.preventDefault();
   
    //need to find an entry that has an object for items to test this code or it will fail
    switch (e.target.id) {
      case 'food' :
        setPetProfile({...petProfile, medications:e.target.value});
        break;
      case 'preventative' :
        setPetProfile({...petProfile, medications:e.target.value});
        break;
      case 'supplements' :
        setPetProfile({...petProfile, medications:e.target.value});
        break;
      default :
        console.log('no changes made')
    }
  }


  return (
    <Container>
      <Typography>Medications</Typography>
      <Stack spacing={2} sx={{p:2}}>
        <FormControl>
        <Typography>Diet:</Typography> <TextField disabled={isEdit} id="food" label="What does your pet eat?" value={petProfile.medications.diet} onChange={updateHx}/>
        <Typography>Preventatives:</Typography> <TextField disabled={isEdit} id="preventatives" label="Flea/Tick/Heartworm Products" value={petProfile.medications.preventative} onChange={updateHx}/>
        <Typography>Vitamins/Supplements:</Typography> <TextField disabled={isEdit} id="supplements"label="Anything else?" value={petProfile.medications.supplements} onChange={updateHx}/>
        </FormControl>
      </Stack>
    </Container>
  )
}

export default PetProfileMed