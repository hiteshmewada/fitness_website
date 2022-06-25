import React,{useContext} from 'react'
import { Box, Typography } from '@mui/material';
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu';
import {BiLeftArrowAlt} from 'react-icons/bi';
import {BiRightArrowAlt} from 'react-icons/bi';
import BodyPart from './BodyPart';
import ExerciseCard  from './ExerciseCard';

const LeftArrow=()=>{
  // “useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”.
  const {scrollPrev} = useContext(VisibilityContext);
  
  return (
    <Typography onClick={()=> scrollPrev()} className="left-arrow">
       <BiLeftArrowAlt size={40} width={40}/>
    </Typography>
  );
};

const RightArrow=()=>{
  const {scrollNext} = useContext(VisibilityContext);
  
  return (
    <Typography onClick={()=> scrollNext()} className="right-arrow">
       <BiRightArrowAlt size={40}/>
    </Typography>
  );
};

const HorizontalScrollbar = ({data,bodyParts,setBodyPart,bodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item)=>(
            <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
            >
              {/* <BodyPart/> */}
               {bodyPart ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar