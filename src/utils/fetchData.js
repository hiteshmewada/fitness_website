export const fetchData=async (url,options)=>{
    const res=await fetch(url,options);
    const data=await res.json();
    return data;
};

// https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  // https://rapidapi.com/h0p3rwe/api/youtube-search-and-download/

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
