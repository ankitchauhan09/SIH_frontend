import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useUser} from "../contexts/UserContext.jsx";
import {RiMailLine, RiMapPin2Line, RiPhoneLine} from 'react-icons/ri'
import UserImage from '../assets/profile-pictures/user1.jpg';

const ProfileSection = () => {
    const {userId} = useParams()
    const loggedInUser = useUser()

    useEffect(() => {
        console.log(userId)
        console.log(loggedInUser.user)
    }, []);


    return (<>
        <div className="px-40 py-20">
            <div className="p-10 user-dashboard w-full rounded-md backdrop-blur-lg bg-[#1F2937] shadow-lg">
                <div className="details flex flex-row gap-10">
                    <div className="user-info w-4/6 flex flex-row gap-10">
                        <div
                            className="profile-image-frame w-2/5 flex align-items-center justify-center h-60 rounded-full overflow-hidden">
                            <div
                                className="profile-image w-60 h-60 rounded-full translate-middle border-black border bg-white">
                                <img src={UserImage} className="w-fit h-fit rounded-full" alt="User Image"/>
                            </div>
                        </div>
                        <div className="user-info-text w-4/5  ">
                            <h1 className="user-full-name text-white text-4xl p-3">
                                Ankit Chauhan
                            </h1>
                            <div className="divider w-full bg-[#656565] h-px"></div>
                            <div className="additional-user-details w-full flex p-3 flex-row items-center">
                                <div className="first-half flex flex-col gap-8">
                                    <div className="flex flex-row gap-2 items-center">
                                        <RiMapPin2Line size={24} color="white"/>
                                        <h1>Varanasi</h1>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <RiPhoneLine size={24} color="white"/>
                                        <h1>8234XXXX09</h1>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <RiMailLine size={24} color="white"/>
                                        <h1>ankitxxxxchauhan@gmail.com</h1>
                                    </div>
                                </div>

                                {/* Fixing the divider */}
                                <div className="divider h-full w-[1px] bg-white mx-4"></div>

                                <div className="second-half">
                                    second half
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="pending-details w-2/6 rounded-lg border border-white"></div>
                </div>
            </div>
        </div>
    </>)
};

export default ProfileSection;