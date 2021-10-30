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
    //set state for petprofile
    //invoke updatePetProfile.ts
  }

 
  const [petProfile, setPetProfile] = useState({
    allergies:[],
    breed:'',
    dob:'',
    med_hx:[],
    medications:{diet:[], preventative:[], supplements:[]},
    name:'',
    sex:'',
    species:'',
    surg_hx:[],
    vaccinations:{rabies:'', distemper:'', bordetella:'', lepto:'', lyme:'', flu:''},
  })

  useEffect (()=> {
    fetch('/.netlify/functions/getPetProfile', {
      method: 'POST',
      body: JSON.stringify({
        _id: '13035135'
      })
    })
    .then((res) => res.json())
    .then((res) => {
      const {allergies, breed, dob, med_hx, medications, name, sex, species, surg_hx, vaccinations} = res
      //console.log('this is the breakdown of the information', allergies)
      setPetProfile({allergies, breed, dob, med_hx, medications, name, sex, species, surg_hx, vaccinations})
      console.log('this is in state', petProfile);
    })
    .catch((err) => console.log('err, ', err))
  },[])

  return (
    <Container sx={{display: 'grid', gridAutoFlow: 'row', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr 1fr'}}>
      <Paper sx={{gridColumn:'1', gridRow:'span 3'}}>
        <PetProfileInfo isEdit={isEdit}/>
      </Paper>
      <Paper sx={{gridColumn:'2', gridRow:'1/4'}}>
        <PetProfileVax isEdit={isEdit}/>
        <PetProfileMed isEdit={isEdit}/>
        <PetProfileHx isEdit={isEdit} petProfile={petProfile} setPetProfile = {setPetProfile}/>
        <Button variant="contained" size="small" onClick={editButton}>Edit</Button>
        <Button variant="contained" size="small" onClick={submitButton}>Submit</Button>
      </Paper>
      <Button
        onClick={() => fetch('/.netlify/functions/createPetProfile', {
          method: 'POST',
          body: JSON.stringify({
            owner_id: '103333',
            name: 'nick',
            _id: '65465469849615'
          })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log('err, ', err))
      }
      >
        Create Pet Profile
      </Button>
      <Button
        onClick={() => fetch('/.netlify/functions/deletePetProfile', {
          method: 'POST',
          body: JSON.stringify({
            _id: '1234'
          })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log('err, ', err))
      }
      >
        Delete Pet Profile
      </Button>
      <Button
        onClick={() => fetch('/.netlify/functions/getPetProfile', {
          method: 'POST',
          body: JSON.stringify({
            _id: '13035135'
          })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log('err, ', err))
      }
      >
        Get Pet Profile
      </Button>
      <Button
        onClick={() => fetch('/.netlify/functions/getPetProfileByOwner', {
          method: 'POST',
          body: JSON.stringify({
            _eq: '103333'
          })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log('err, ', err))
      }
      >
        Get Pet Profile BY OWNER
      </Button>
      <Button
        onClick={() => fetch('/.netlify/functions/updatePetProfile', {
          method: 'POST',
          body: JSON.stringify({
            _id: '26236',
            allergies: 'water',
            breed: 'Koi',
            dob: '2020-12-12',
            med_hx: JSON.stringify(['debloating']),
            medications: JSON.stringify(['fish zoloft']),
            name: 'Goldfish',
            sex: 'M',
            species: 'Fish',
            surg_hx: null, //must json.stringify any array values
            vaccinations: null //must json.stringify any array values
          })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log('err, ', err))
      }
      >
       Update Pet Profile
      </Button>
    </Container>
  )
}

export default PetProfile;