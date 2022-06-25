import React,{useEffect,useState} from 'react'
import {Box,Button, Stack,TextField,Typography} from '@mui/material';
import {exerciseOptions,fetchData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    // What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
    useEffect(() => {
        const fetchExercisesData=async ()=>{
            const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            //The three dots - That's property spread notation. It was added in ES2018 (spread for arrays/iterables was earlier, ES2015), but it's been supported in React projects for a long time via transpilation (as "JSX spread attributes" even though you could do it elsewhere, too, not just attributes).
            setBodyParts(['all',...bodyPartsData]);
        };
        fetchExercisesData();
    }, []);

    const handleSearch= async ()=>{
        if(search){
            const exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            // console.log(exercisesData);

            const searchedExercises=exercisesData.filter(
                (item)=> item.name.toLowerCase().includes(search) ||
                item.target.toLowerCase().includes(search) ||
                item.equipment.toLowerCase().includes(search) ||
                item.bodyPart.toLowerCase().includes(search),
            );
            console.log(searchedExercises);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            setSearch('');
            setExercises(searchedExercises);
        }
    };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
            Awesome Exercises That You <br/>
            Should Definitely know
        </Typography>
        <Box position="relative"  mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises like DeadLift, Squats, Plank"
          type="text"
        />
            <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
                Search
            </Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        </Box>
    </Stack>
  )
}

export default SearchExercises