//this component need to conditionally render based on species.
import { Avatar, Card, Typography, Box, Stack, Container, Button, TextField, FormControl } from "@mui/material"
import { useState, useEffect } from "react"



const PetProfileVax = ({isEditable, petProfile, setPetProfile}:any) => {

  function updateHx (e:React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

   
    const updatedVax = [...petProfile.vaccinations]
    //if (!(petProfile.vaccinations instanceof Object)) {petProfile.vaccinations = {};}

    //need to find an entry that has an object for items to test this code or it will fail
    switch (e.target.id) {
      case 'rabies' :
        updatedVax[0] = e.target.value;
        setPetProfile({...petProfile, vaccinations: updatedVax})
        break;
      case 'distemper' :
        updatedVax[1] = e.target.value;
        setPetProfile({...petProfile, vaccinations: updatedVax})
    
        break;
      case 'bordetella' :
        updatedVax[2] = e.target.value;
        setPetProfile({...petProfile, vaccinations: updatedVax})
     
        break;
      case 'lepto' :
        updatedVax[3] = e.target.value;
        setPetProfile({...petProfile, vaccinations: updatedVax})
    
        break;
      case 'lyme' :
        updatedVax[4] = e.target.value;
        setPetProfile({...petProfile, vaccinations: updatedVax})
      
        break;
      case 'flu' :
        updatedVax[5] = e.target.value;
        setPetProfile({...petProfile, vaccinations: updatedVax})
     
          break;
      default :
        console.log('no changes made')
    }
  }

  return (
    <Container>
      <Typography>Vaccinations</Typography>
      <Typography>Please only fill in vaccinations applicable to your pet.</Typography>
        <FormControl sx={{p:2}}>
          <Typography>Rabies</Typography><TextField disabled={isEditable} id="rabies" variant='outlined' placeholder="Date Given" value={petProfile.vaccinations[0]} onChange={updateHx} />
          <Typography>DA2PP/FVRCP</Typography><TextField disabled={isEditable} id="distemper" variant='outlined' placeholder="Date Given" value={petProfile.vaccinations[1]} onChange={updateHx}/>
          <Typography>Bordetella</Typography><TextField disabled={isEditable} id="bordetella" variant='outlined' placeholder="Date Given" value={petProfile.vaccinations[2]} onChange={updateHx}/>
          <Typography>Leptospirosis</Typography><TextField disabled={isEditable} id="lepto" variant='outlined' placeholder="Date Given" value={petProfile.vaccinations[3]} onChange={updateHx}/>
          <Typography>Lyme</Typography><TextField disabled={isEditable} id="lyme" variant='outlined' placeholder="Date Given" value={petProfile.vaccinations[4]} onChange={updateHx}/>
          <Typography>Influenza</Typography><TextField disabled={isEditable} id="flu" variant='outlined' placeholder="Date Given" value={petProfile.vaccinations[5]} onChange={updateHx}/>
        </FormControl>
    </Container>
  )
}

export default PetProfileVax