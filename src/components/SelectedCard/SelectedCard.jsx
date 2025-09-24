import React from 'react';

const SelectedCard = ({player, removePlayer}) => {
    console.log(player)

    const handleRemove = () =>{
        removePlayer(
            
            player
        )
    }
    return (
       
            <div className='border-2 border-gray-400 p-3 flex justify-between items-center rounded-xl mt-2 ' >
                <div className='flex items-center  ' >
                   <img className=' h-[50px] w[50px] rounded-xl ' src={player.player_img} alt="" />
                   <div className='ml-2  ' >
                    <h1>{player.player_name}</h1>
                    <p className='text-xs' >{player.playing_role}</p>
                   </div>
                </div>
                <div onClick={handleRemove} >
                    <img src="https://i.ibb.co.com/gFSDfsJj/Vector-2png.png" alt="" />
                </div>

            </div>
    );
};

export default SelectedCard;