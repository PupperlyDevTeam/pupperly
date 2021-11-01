import { Avatar, Card, Typography, Box, Stack, Container, Button, FormControl, TextField } from "@mui/material"
import { useState, useEffect } from "react"

const PetProfileMed = ({isEdit, petProfile, setPetProfile}) => {

  function updateHx (e) {
    e.preventDefault();


    //converts the string to an array in order to pass it to database
    function stringToArray(string) {
      const splitted = string.split(',')
      return [...splitted];
    }
   
    //in order to access nest objects for state, need to drill down to that level - the current user does not have an existing object at petprofile.medications
    switch (e.target.id) {
      case 'food' :
        // setPetProfile ((prevState) => {
        //   console.log('this is in setprofile', prevState.medications)
        //   if (!prevState.medications[diet]){
        //     const prevState.medications.diet = ['hard','code']
        //   } else {
        //   console.log('this is adusted state', {...prevState})
        //   prevState.medications[diet] = ['hard','code']
        //   }
        //   return ({...prevState})
        // });
        setPetProfile({...petProfile, medications: {diet: stringToArray(e.target.value)}});
        console.log(petProfile);
        break;
      case 'preventative' :
        setPetProfile({...petProfile, medications: {preventative: stringToArray(e.target.value)}});
        break;
      case 'supplements' :
        setPetProfile({...petProfile, medications: {supplements: stringToArray(e.target.value)}});
        break;
      default :
        console.log('no changes made')
    }
  }
  // const {diet, preventative, supplements} = petProfile.medications
  // console.log('this is the destructur', diet)

  //console.log(petProfile.medications)

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