import React, { useState } from 'react';
import userImg from '../../assets/user1.png'
import flagImg from '../../assets/Vector.png'
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setAvailableBalance, availableBalance , purchasedPlayers , setPurchasedPlayers}) => {


    const [isSelected, seIsSelected] = useState(false)

    const handleSelected = (playerData) => {

      const  playerPrice = parseInt(playerData.price.split("$").join("").split(",").join(""));

        if(availableBalance< playerPrice ){
            toast("Not Enough Balance!!")
            return
        }
        if(purchasedPlayers.length> 11){
            toast("Team of 11 Selected")
            return
        }

        seIsSelected(true)
        setAvailableBalance(availableBalance - playerPrice);
        setPurchasedPlayers([...purchasedPlayers, playerData]);

        toast("Player Selected");
    }

    return (
        <div>
            <div className="card bg-base-100  shadow-sm p-4 mt-2 ">
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

                        <button disabled={isSelected} onClick={() => {
                            handleSelected(player)
                        }}

                            className="btn">{isSelected === true ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlayerCard;