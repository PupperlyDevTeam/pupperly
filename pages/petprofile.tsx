import PetProfileHx from "../components/PetProfileHx"
import PetProfileInfo from "../components/PetProfileInfo"
import PetProfileMed from "../components/PetProfileMed"
import PetProfileVax from "../components/PetProfileVax"
import type { NextPage } from 'next'

import { Container, Button, Paper } from "@mui/material"

import { useState, useEffect } from "react"

const PetProfile: NextPage = () => {
  //onclick will change the boolean value of disabled for text field
  const [isEdit, setEdit] = useState(true);

  function editButton() {
    setEdit(false);
    console.log(isEdit)
  }
  
  function submitButton(){
    setEdit(true)
    console.log(isEdit)
  }
 
  // useEffect(() => {console.log(edit)}, [edit]);

  //big submit button to disable all the fields
  return (
    <Container sx={{display: 'grid', gridAutoFlow: 'row', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr 1fr'}}>
      <Paper sx={{gridColumn:'1', gridRow:'span 3'}}>
        <PetProfileInfo/>
      </Paper>
      <Paper sx={{gridColumn:'2', gridRow:'1/4'}}>
        <PetProfileVax isEdit={isEdit}/>
        <PetProfileMed isEdit={isEdit}/>
        <PetProfileHx isEdit={isEdit}/>
        <Button variant="contained" size="small" onClick={editButton}>Edit</Button>
        <Button variant="contained" size="small" onClick={submitButton}>Submit</Button>
      </Paper>
      <Button
        onClick={() => fetch('/.netlify/functions/createPetProfile', {
          method: 'POST',
          body: JSON.stringify({
            owner_id: '103333',
            name: 'kailee',
            _id: '13035135'
          })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
      }
      >
        Create Pet Profile
      </Button>
    </Container>
  )
}

export default PetProfile;