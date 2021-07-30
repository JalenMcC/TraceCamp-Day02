import React from 'react';

function PicCard(props) {
    return(
        <div>
            <li class="w-96 block bg-white p-1 rounded-2xl md:w-full">
                <img 
                    src={"./images/" + props.pic} 
                    class="rounded-2xl"
                    alt="Placeholder"
                />
            </li>
        </div>
    );
}

export default PicCard;