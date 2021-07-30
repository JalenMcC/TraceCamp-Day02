import React from 'react';

function Pet() {
    return(
        <div>
            <section id="pet">
                {/*<!-- Black Bar Seperator-->*/}
                <div class="block py-10 bg-black"></div>

                {/*<!-- Text Section -->*/}
                <div>
                    <a class="block py-8 py-4 text-center text-5xl font-bold text-white md:text-8xl">Blitz</a>
                    <div>
                        <ul class="grid p-10 gap-10 md:grid-cols-2">

                            {/*<!-- Pic One -->*/}
                            <li class="w-96 block bg-white p-1 rounded-2xl md:w-full">
                                <img src="Images/BCone.jpeg" class="rounded-2xl"/>
                            </li>

                            {/*<!-- Pic Two -->*/}
                            <li class="w-96 block bg-white p-1 rounded-2xl md:w-full">
                                <img src="Images/BThere.jpeg" class="rounded-2xl"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Pet;