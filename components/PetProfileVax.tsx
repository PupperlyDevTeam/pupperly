//this component need to conditionally render based on species.
import { Avatar, Card, Typography, Box, Stack, Container, Button, TextField, FormControl } from "@mui/material"
import { useState, useEffect } from "react"



const PetProfileVax = ({isEdit, petProfile, setPetProfile}) => {

  function updateHx (e) {
    e.preventDefault();

   
    if (!(petProfile.vaccinations instanceof Object)) {petProfile.vaccinations = {};}

    //need to find an entry that has an object for items to test this code or it will fail
    switch (e.target.id) {
      case 'rabies' :
        //setPetProfile({...petProfile, vaccinations:e.target.value});
        setPetProfile ((prevState:any) => {
          prevState.vaccinations.rabies = e.target.value
          return ({...prevState})
        });
        break;
      case 'distemper' :
        // setPetProfile({...petProfile, vaccinations:e.target.value});
        setPetProfile ((prevState:any) => {
          prevState.vaccinations.distemper = e.target.value
          return ({...prevState})
        });
        break;
      case 'bordetella' :
        // setPetProfile({...petProfile, vaccinations:e.target.value});
        setPetProfile ((prevState:any) => {
          prevState.vaccinations.bordetella = e.target.value
          return ({...prevState})
        });
        break;
      case 'lepto' :
        // setPetProfile({...petProfile, vaccinations:e.target.value});
        setPetProfile ((prevState:any) => {
          prevState.vaccinations.lepto = e.target.value
          return ({...prevState})
        });
        break;
      case 'lyme' :
        //setPetProfile({...petProfile, vaccinations:e.target.value});
        setPetProfile ((prevState:any) => {
          prevState.vaccinations.lyme = e.target.value
          return ({...prevState})
        });
        break;
      case 'flu' :
          // setPetProfile({...petProfile, vaccinations:e.target.value});
          setPetProfile ((prevState:any) => {
            prevState.vaccinations.flu = e.target.value
            return ({...prevState})
          });
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
          <Typography>Rabies</Typography><TextField disabled={isEdit} id="rabies" variant='outlined' placeholder="Date Given" value={petProfile.vaccinations.rabies} onChange={updateHx} />
          <Typography>DA2PP/FVRCP</Typography><TextField disabled={isEdit} id="distemper" variant='outlined' placeholder="Date Given" value={petProfile.vaccinations.distemper} onChange={updateHx}/>
          <Typography>Bordetella</Typography><TextField disabled={isEdit} id="bordetella" variant='outlined' placeholder="Date Given" value={petProfile.vaccinations.bordetella} onChange={updateHx}/>
          <Typography>Leptospirosis</Typography><TextField disabled={isEdit} id="lepto" variant='outlined' placeholder="Date Given" value={petProfile.vaccinations.lepto} onChange={updateHx}/>
          <Typography>Lyme</Typography><TextField disabled={isEdit} id="lyme" variant='outlined' placeholder="Date Given" value={petProfile.vaccinations.lyme} onChange={updateHx}/>
          <Typography>Influenza</Typography><TextField disabled={isEdit} id="flu" variant='outlined' placeholder="Date Given" value={petProfile.vaccinations.flu} onChange={updateHx}/>
        </FormControl>
    </Container>
  )
}

export default PetProfileVax