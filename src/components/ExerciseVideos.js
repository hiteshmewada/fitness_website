import React, { useState } from "react";
import { Typography, Box, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(4);

  // Pagination

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = exerciseVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behaviour: "smooth" });
  };

  // console.log(exerciseVideos);
  if (!exerciseVideos.length) return "Loading";
  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#001"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2825", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentVideos.map((item, index) => (
          //   <a
          //     key={index}
          //     className="exercise-video"
          //     href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          //     target="_blank"
          //     // The noreferrer keyword for the rel attribute of the <a>, <area>, and <form> elements instructs the browser, when navigating to the target resource, to omit the Referer header and otherwise leak no referrer information — and additionally to behave as if the noopener keyword were also specified.
          //     rel="noreferrer"
          //   >
          //     <img
          //       style={{ borderTopLeftRadius: "20px" }}
          //       src={item.video.thumbnails[0].url}
          //       alt={item.video.title}
          //     />
          <>
            <iframe
              width="460"
              height="315"
              src={`https://www.youtube.com/embed/${item.video.videoId}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            {/* <Typography 
              sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                 fontWeight={600}
                 color="#010" 
               >
              {item.video.title}
            </Typography> */}
            {/* <Typography fontSize="14p;x" color="#001">
                {item.video.channelName}
              </Typography> */}

            {/* //   </a> */}
          </>
        ))}
        {/* {currentVideos.map((item,index)=>(
                
            ))} */}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exerciseVideos.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exerciseVideos.length / videosPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
      {/* <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '80px', xs: '0px' } }} justifyContent="center" flexWrap="wrap" alignItems="center" mt="10px" mb="10px" px="20px">
            
        </Stack> */}
    </Box>
  );
};

export default ExerciseVideos;
