import React from 'react';
import PicCard from './PicCard';

function Pet() {
    return(
        <div>
            <section id="pet">
                {/*<!-- Black Bar Seperator-->*/}
                <div class="block py-10 bg-black"></div>

                {/*<!-- Text Section -->*/}
                <div>
                    <p class="block py-8 py-4 text-center text-5xl font-bold text-white md:text-8xl">Blitz</p>
                    <div>
                        <ul class="grid p-10 gap-10 md:grid-cols-2">

                            {/*<!-- Pic One -->*/}
                            <PicCard pic="BCone.jpeg" />

                            {/*<!-- Pic Two -->*/}
                            <PicCard pic="BThere.jpeg" />
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Pet;