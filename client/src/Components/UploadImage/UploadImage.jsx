import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import './UploadImage.css'
import { Button, Group } from '@mantine/core'

const UploadImage = ({propertyDetails, setPropertyDetails, nextStep, prevStep}) => {
    const [imageURL, setImageURL] = useState(propertyDetails.image)

    const cloudinaryRef = useRef()
    const widgetRef = useRef()

    const handleNext = () => {
        setPropertyDetails((prev) => ({...prev, image: imageURL}))
        nextStep()
    }

    useEffect(()=> {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName : "df6pj1qcg",  // get the cloudname from cloudinary
                uploadPreset : "m4e1w5af",  // get it from the unsigned uploadpreset (from settings -> new upload preset -> set signing mode as unsigned)
                maxFile: 1
            },
            (err, result) => {
                if(result.event === "success") {
                    setImageURL(result.info.secure_url)
                }
            }
        )
    }, [])

  return (
    <div className="flexColCenter uploadWrapper">
        {
            !imageURL? (
                <div className="flexColCenter uploadZone"
                onClick={()=> widgetRef.current?.open()}
                >
                    <AiOutlineCloudUpload size={50} color="grey" alt="Upload symbol" />
                    <span>Upload Image</span>
                </div>
            ) : (
                <div className="uploadedImage"
                onClick={()=> widgetRef.current?.open()}
                >
                    <img src={imageURL} alt="" />
                </div>
            ) 
        }
        <Group position="center" mt="xl">
        <Button variant='default' onClick={prevStep}>Back</Button>
        <Button onClick={handleNext} disabled={!imageURL}>Next</Button>
      </Group>
    </div>
  )
}

export default UploadImage