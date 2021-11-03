import PetProfileHx from '../components/PetProfileHx';
import PetProfileInfo from '../components/PetProfileInfo';
import PetProfileMed from '../components/PetProfileMed';
import PetProfileVax from '../components/PetProfileVax';
import type { NextPage } from 'next';
import styles from '../styles/PetProfile.module.css';

import { Container, Button, Paper } from '@mui/material';

import React, { useState, useEffect } from 'react';

//types
interface PetProfile {
  allergies: any;
  breed: string;
  dob: string;
  med_hx: any;
  medications: any;
  name: string;
  sex: string;
  species:string;
  surg_hx: any;
  vaccinations: any;
}

const PetProfile: NextPage = () => {
  //state for the boolean that is passed onto children components in order to turn on and off the disabled function
  const [isEditable, setEditable] = useState<boolean>(true); 

  function editButton() {
    setEditable(false);
  }
  
  function submitButton(){
    setEditable(true)
    console.log(petProfile)
    let data = {_id: '13035135', ...petProfile};
    

    // const allergyStringified = JSON.stringify(petProfile.allergies);
    // const med_hxStrigified = JSON.stringify(petProfile.med_hx);
    // const medicationsStringified = JSON.stringify(petProfile.medications);
    // const surg_hxStringified = JSON.stringify(petProfile.surg_hx);
    // const vaxStringified = JSON.stringify(petProfile.vaccinations);

    // const data = {
    //   _id: '13035135',
    //   allergies: allergyStringified,
    //   breed: petProfile.breed, 
    //   dob: petProfile.dob, 
    //   med_hx: med_hxStrigified,
    //   medications: medicationsStringified, 
    //   name: petProfile.name, 
    //   sex: petProfile.sex, 
    //   species: petProfile.species,
    //   surg_hx: surg_hxStringified,
    //   vaccinations: vaxStringified
    // }

    console.log('this is the data to be passed', data)

    fetch('/.netlify/functions/updatePetProfile', {
      method: 'POST',
      body: JSON.stringify({
        _id: "13035135",
        allergies: "{'new fake allergy', 'test allergy'}",
        breed: "Beagle",
        dob: "2021-10-04",
        med_hx: "{'test', 'test'}",
        medications: "{'cat Zoloft', 'cat Xanax'}",
        name: "Spot",
        sex: "M",
        species: "Cat",
        surg_hx:"{'test', 'test'}",
        vaccinations:"{'test', 'test'}"
      })
    })
  }
 
  const [petProfile, setPetProfile] = useState<PetProfile>({
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
    })
    .catch((err) => console.log('err, ', err))
  },[])

  return (
    <Container className={styles.container} sx={{display: 'grid', gridAutoFlow: 'row', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr 1fr'}}>
      <Paper className={styles.infoScreen} sx={{gridColumn:'1', gridRow:'span 3'}}>
        <PetProfileInfo isEditable={isEditable} petProfile={petProfile} setPetProfile = {setPetProfile}/>
      </Paper>
      <Paper className={styles.questionScreen} sx={{gridColumn:'2', gridRow:'1/4'}}>
        <PetProfileVax isEditable={isEditable} petProfile={petProfile} setPetProfile = {setPetProfile}/>
        <PetProfileMed isEditable={isEditable} petProfile={petProfile} setPetProfile = {setPetProfile}/>
        <PetProfileHx isEditable={isEditable} petProfile={petProfile} setPetProfile = {setPetProfile}/>
        <Button className={styles.btn} variant="contained" size="small" onClick={editButton}>Edit</Button>
        <Button className={styles.btn} variant="contained" size="small" onClick={submitButton}>Submit</Button>
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
