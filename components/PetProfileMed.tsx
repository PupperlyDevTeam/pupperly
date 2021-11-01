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

    if (!(petProfile.medications instanceof Object)) {petProfile.medications = {};}
   
    //in order to access nest objects for state, need to drill down to that level
    switch (e.target.id) {
      case 'food' :
        //setPetProfile({...petProfile, medications: {diet: stringToArray(e.target.value)}});
        setPetProfile ((prevState:any) => {
          prevState.medications.diet = stringToArray(e.target.value)
          return ({...prevState})
        });
        
        break;
      case 'preventative' :
        //setPetProfile({...petProfile, medications: {preventative: stringToArray(e.target.value)}});
        setPetProfile ((prevState:any) => {
            prevState.medications.preventative = stringToArray(e.target.value);
          return ({...prevState})
        });
        
        break;
      case 'supplements' :
        //setPetProfile({...petProfile, medications: {supplements: stringToArray(e.target.value)}});
        setPetProfile ((prevState:any) => {
            prevState.medications.supplements = stringToArray(e.target.value);
          return ({...prevState})
        });
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
        <Typography>Diet:</Typography> <TextField disabled={isEdit} id="food" placeholder="What does your pet eat?" value={petProfile.medications.diet} onChange={updateHx}/>
        <Typography>Preventatives:</Typography> <TextField disabled={isEdit} id="preventative" placeholder="Flea/Tick/Heartworm Products" value={petProfile.medications.preventative} onChange={updateHx}/>
        <Typography>Vitamins/Supplements:</Typography> <TextField disabled={isEdit} id="supplements"placeholder="Anything else?" value={petProfile.medications.supplements} onChange={updateHx}/>
        </FormControl>
      </Stack>
    </Container>
  )
}

export default PetProfileMed