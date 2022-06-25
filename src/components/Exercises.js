import React,{useState,useEffect} from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage]=useState(6);
  
  // for search exercise categories

  useEffect(() => {
    const fetchExercisesData=async()=>{

      let exercisesData=[];

      if(bodyPart=='all'){
        exercisesData=await  fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        // console.log(exercisesData);
      }
      else{
        exercisesData=await  fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        // console.log(exercisesData);
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();

  }, [bodyPart]);

// Pagination

const indexOfLastExercise=currentPage*exercisesPerPage;
const indexOfFirstExercise=indexOfLastExercise-exercisesPerPage;
const currentExercises=exercises.slice(indexOfFirstExercise,indexOfLastExercise);

const paginate=(event,value)=>{
  setCurrentPage(value);
  window.scrollTo({top:1800,behaviour:"smooth"});
}

  return (
    <Box
    id="exercises"
    sx={{ mt: { lg: '109px' } }} mt="50px" p="20px"
    >
      {/* {console.log(exercises)} */}
      <Typography
      variant="h3" 
      fontWeight="bold"
      sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px"
      >
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise} />
        ))}
        {/* Hitesh */}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
          {exercises.length>9 && (<Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length/exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />)}
      </Stack>
    </Box>
  )
}

export default Exercises