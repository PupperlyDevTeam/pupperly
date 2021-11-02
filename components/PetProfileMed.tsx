import { Avatar, Card, Typography, Box, Stack, Container, Button, FormControl, TextField } from "@mui/material"
import { useState, useEffect } from "react"

const PetProfileMed = ({isEditable, petProfile, setPetProfile}:any) => {

  function updateHx (e:any) {
    e.preventDefault();

    const updateMedication = [...petProfile.medications]
   
    switch (e.target.id) {
      case 'food' :
        updateMedication[0] = e.target.value;
        setPetProfile({...petProfile, medications: updateMedication})
      break;
    
      case 'preventative' :
        updateMedication[1] = e.target.value;
        setPetProfile({...petProfile, medications: updateMedication})
     break;
      case 'supplements' :
        updateMedication[2] = e.target.value;
        setPetProfile({...petProfile, medications: updateMedication})
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
        <Typography>Diet:</Typography> <TextField disabled={isEdit} id="food" placeholder="What does your pet eat?" value={petProfile.medications[0]} onChange={updateHx}/>
        <Typography>Preventatives:</Typography> <TextField disabled={isEdit} id="preventative" placeholder="Flea/Tick/Heartworm Products" value={petProfile.medications[1]} onChange={updateHx}/>
        <Typography>Vitamins/Supplements:</Typography> <TextField disabled={isEdit} id="supplements"placeholder="Anything else?" value={petProfile.medications[2]} onChange={updateHx}/>
        </FormControl>
      </Stack>
    </Container>
  )
}

export default PetProfileMed