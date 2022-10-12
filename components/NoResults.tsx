import React from 'react';
import {RiUserVoiceLine} from 'react-icons/ri';
interface IProps {
    text : string
}

const NoResults = ({text}: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">

    <p className="text-3xl">
      <RiUserVoiceLine />

    </p>
    <p className= "text-1xl text-center">
{text}

    </p>
    </div>
  )
}

export default NoResults