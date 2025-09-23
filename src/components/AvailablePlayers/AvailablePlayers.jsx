import React, { use } from 'react';
import userImg from '../../assets/user1.png'
import flagImg from '../../assets/Vector.png'

const AvailablePlayers = ({ playersPromise }) => {

    const playerData = use(playersPromise);
    console.log(playerData)

    return (
        <div className='max-w-[1200px] mx-auto  grid grid-cols-1  md:grid-cols-3 gap-4' >

            {
                playerData.map(player => <div className="card bg-base-100  shadow-sm p-4 mt-2 ">
                    <figure>
                        <img className='w-full h-[290px] '
                            src={player.player_img}
                            alt="Player Image" />
                    </figure>
                    <div className="mt-4">

                        <div className='flex gap-2' >
                            <img src={userImg} alt="" />
                            <h2 className="card-title ">{player.player_name}</h2>
                        </div>

                        <div className='flex mt-4 justify-between border-b-1 border-purple-200 pb-2'>
                            <div className='flex gap-3 items-center ' >
                                <img className='w-[25px] h-[25px]' src={flagImg} alt="" />
                                <span>{player.player_country}</span>
                            </div>

                            <button className='btn' >{player.playing_role}</button>

                        </div>

                        <div className='flex justify-between font-bold'>
                            <span>Rating</span>
                            <span>{player.rating}</span>
                        </div>

                        <div className='flex justify-between mt-4'>
                            <span className='font-bold' >{player.batting_style}</span>
                            <span>{player.bowling_style}</span>
                        </div>


                        <div className="card-actions mt-4 flex justify-between items-center ">
                            <p className='font-bold' >Price:- {player.price}</p>
                            <button className="btn">Choose Player</button>
                        </div>
                    </div>
                </div>)
            }



        </div>
    );
};

export default AvailablePlayers;