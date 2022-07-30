import React from 'react'

export const PublishedDate = ({date}) => {
  // console.log(date)
  const pubDate = new Date(date)
    var year = pubDate.getFullYear();

    var month = (1 + pubDate.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = pubDate.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return (
      <>{month} / {day} / {year} </>
    )
  }

  export const Tags = (tags) => {
    
  }