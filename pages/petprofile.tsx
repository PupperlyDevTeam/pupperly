import PetProfileHx from '../components/PetProfileHx';
import PetProfileInfo from '../components/PetProfileInfo';
import PetProfileMed from '../components/PetProfileMed';
import PetProfileVax from '../components/PetProfileVax';
import type { NextPage } from 'next';

import { Container, Button, Paper } from '@mui/material';

import React, { useState, useEffect } from 'react';

const PetProfile: NextPage = () => {
  //onclick will change the boolean value of disabled for text field
  const [isEditable, setEditable] = useState<boolean>(true); //isEditable, setIsEditable

  function editButton() {
    setEditable(false);
  }
  
  function submitButton(){
    setEditable(true)
    console.log(petProfile)
    let data = {_id: '13035135', ...petProfile};
    console.log('this is the data to be passed', data)

    fetch('/.netlify/functions/updatePetProfile', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  //parser for arrays to covert into text

 
  const [petProfile, setPetProfile] = useState({
    allergies:[],
    breed:'',
    dob:'',
    med_hx:[],
    medications:['N/A','N/A','N/A'],
    name:'',
    sex:'',
    species:'',
    surg_hx:[],
    vaccinations:['N/A','N/A','N/A','N/A','N/A']
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
      console.log('this is the response', res)
      const {allergies, breed, dob, med_hx, medications, name, sex, species, surg_hx, vaccinations} = res

      setPetProfile({
        allergies,
        breed, 
        dob, 
        med_hx,
        medications, 
        name, 
        sex, 
        species,
        surg_hx,
        vaccinations
      })
      //why is all the data returning as an string rather than an array 
      console.log('this is in state', petProfile);
    })
    .catch((err) => console.log('err, ', err))
  },[])

  return (
    <Container sx={{display: 'grid', gridAutoFlow: 'row', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr 1fr'}}>
      <Paper sx={{gridColumn:'1', gridRow:'span 3'}}>
        <PetProfileInfo isEditable={isEditable} petProfile={petProfile} setPetProfile = {setPetProfile}/>
      </Paper>
      <Paper sx={{gridColumn:'2', gridRow:'1/4'}}>
        <PetProfileVax isEditable={isEditable} petProfile={petProfile} setPetProfile = {setPetProfile}/>
        <PetProfileMed isEditable={isEditable} petProfile={petProfile} setPetProfile = {setPetProfile}/>
        <PetProfileHx isEditable={isEditable} petProfile={petProfile} setPetProfile = {setPetProfile}/>
        <Button variant="contained" size="small" onClick={editButton}>Edit</Button>
        <Button variant="contained" size="small" onClick={submitButton}>Submit</Button>
      </Paper>
      <Button
        onClick={() =>
          fetch('/.netlify/functions/createPetProfile', {
            method: 'POST',
            body: JSON.stringify({
              owner_id: '2355252',
              name: 'nick',
              _id: '1234',
            }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log('err, ', err))
        }
      >
        Create Pet Profile
      </Button>
      <Button
        onClick={() =>
          fetch('/.netlify/functions/deletePetProfile', {
            method: 'POST',
            body: JSON.stringify({
              _id: '1234',
            }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log('err, ', err))
        }
      >
        Delete Pet Profile
      </Button>
      <Button
        onClick={() =>
          fetch('/.netlify/functions/getPetProfile', {
            method: 'POST',
            body: JSON.stringify({
              _id: '13035135',
            }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log('err, ', err))
        }
      >
        Get Pet Profile
      </Button>
      <Button
        onClick={() =>
          fetch('/.netlify/functions/getPetProfileByOwner', {
            method: 'POST',
            body: JSON.stringify({
              _eq: '103333',
            }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log('err, ', err))
        }
      >
        Get Pet Profile BY OWNER
      </Button>
      <Button
        onClick={() =>
          fetch('/.netlify/functions/updatePetProfile', {
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
              vaccinations: null, //must json.stringify any array values
            }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log('err, ', err))
        }
      >
        Update Pet Profile
      </Button>
    </Container>
  );
};

export default PetProfile;
