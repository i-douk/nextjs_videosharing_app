import {useState, useEffect} from 'react';
import Image from 'next/image';
import {GoIssueReopened, GoVerified} from 'react-icons/go';
import axios from "axios";
import VideoCard from "../../components/VideoCard";
import Noresults from "../../components/NoResults";
import {IUser, Video} from "../../types";
import {BASE_URL} from '../../utils';
import { IoIosThunderstorm } from 'react-icons/io';
import NoResults from '../../components/NoResults';


interface IProps {
    data : {user: IUser,
    userVideos : Video[],
    userLikedVideos :Video[]
    }
}

const Profile = ({data} : IProps) =>{
    const [showUserVideos, setShowUserVideos] = useState(true);
    const videos = showUserVideos?'text-red-400' : '';
    const liked = !showUserVideos?'text-red-400' : '';
    const {user, userVideos, userLikedVideos} = data;
    const [videosList, setVideosList] = useState<Video[]>([]);
    useEffect(() => {
      if (showUserVideos){
        setVideosList(userVideos)
      }else{
        setVideosList(userLikedVideos)
      }
    }, [showUserVideos,userLikedVideos, userVideos])
    
    return (
        <div className="w-full">
            <div className="flex gap-6 md:gap-5 mb-4 bg-white w-full">
                <div className="w-20 h-20 md:w-32 md:h-32">
                        <Image src={user.image}
                        width={54}
                        height={54}
                        className="rounded-full "
                        alt="User profile"
                        layout="responsive"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                <p className="justify-center md:text-2xl tracking-wider flex items-center gap-1 text-md text-gray-600 lowercase font-bold">{user.userName}
                <GoVerified  className="text-blue-400"/>
                </p>
                </div>
            </div>
            <div>
                <div className="flex gap-10 mb-10 mt-10 border-b-2 border-red-400 bg-white w-full">
                    <p className={`text-xl font-semibold cursor-pointer mt-2 ${videos}`} onClick={()=>setShowUserVideos(true)}>Posted</p>
                    <p className={`text-xl font-semibold cursor-pointer mt-2 ${liked}`} onClick={()=>setShowUserVideos(false)}>Activity</p>
                </div>

            <div className="flex gap-6 flex-wrap md:justify-start">
                {videosList.length>0? (
                    videosList.map((post : Video, idx:number) =>(
                        <VideoCard post= {post} key={idx} />
                    ))
                ) :(
                    <NoResults text={`No ${showUserVideos? '' : 'Liked'} Videos available.`} />
                )
                    }
            </div>
            </div>
        </div>
    )
}
export const getServerSideProps = async({params : {id}}:{params :{id :string}}) =>{
    const res = await axios.get(`${BASE_URL}/api/profile/${id}`)
    return {
        props : { data: res.data}
    }
}
export default Profile;