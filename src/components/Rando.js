import React, { useState } from 'react'

function Rando( { heroData } ) {
    console.log(heroData)
    const [imageUrl, setImageUrl] = useState({
        image: {
            data: {
                attributes: {
                    formats: {
                        medium: {
                            url: ""
                        }
                    }
                }
            }
        }
    })

    if (heroData) {
       async function getData() {
         try {
           const response = await heroData
   
           setImageUrl(response.image.data.attributes.formats.medium.url)
         }
         catch(error) {
           console.log(`Data detected but not found, err: ${error}`);
         }
       }
       getData()
     }
    console.log(imageUrl)
    
  return (
    <div>
        
        <h2>poop</h2>
    </div>
  )
}

export default Rando