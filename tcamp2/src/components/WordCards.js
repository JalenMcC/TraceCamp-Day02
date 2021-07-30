import React from 'react';

function Card(props) {
    return(
        <div>
            <li class="w-96 block bg-white p-1 rounded-2xl md:w-full">
                <div class="grid grid-cols-2">
                    <img 
                        src={"./images/" + props.pic} 
                        class="rounded-2xl"
                        alt="Placeholder"
                    />
                    <div class="pl-4 pt-2 overflow-hidden">
                        <p class="font-bold text-lg ">{props.hobby}</p>
                        <div><p>{props.des}</p></div>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default Card;