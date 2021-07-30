import React from 'react';

function Hobbies() {
    return(
        <div>

<section id="hobbies">
                {/*<!-- Black Bar Seperator-->*/}
                <div class="block py-10 bg-black"></div>

                {/*<!-- Card Section -->*/}
                <div>
                    <a class="block py-8 py-4 text-center text-5xl font-bold text-white md:text-8xl">Hobbies</a>
                    <div>
                        <ul class="grid p-10 gap-10 md:grid-cols-3">

                            {/*<!-- Card One -->*/}
                            <li class="w-96 block bg-white p-1 rounded-2xl md:w-full">
                                <div class="grid grid-cols-2">
                                    <img src="./images/Plants.JPG" class="rounded-2xl"/>
                                    <div class="pl-4 pt-2 overflow-hidden">
                                        <a class="font-bold text-lg ">Planting</a>
                                        <div><a class="">I like to take care of succulents and cacti in my free time.
                                            I am looking forward to taking care of many other types of plants in the future.
                                        </a></div>
                                    </div>
                                </div>
                            </li>

                            {/*<!-- Card Two -->*/}
                            <li class="w-96 block bg-white p-1 rounded-2xl md:w-full">
                                <div class="grid grid-cols-2">
                                    <img src="./images/RobotSketch.JPG" class="rounded-2xl"/>
                                    <div class="pl-4 pt-2 overflow-hidden">
                                        <a class="font-bold text-lg">Drawing</a>
                                        <div><a>I spend a lot of my downtime doodling on any material I can find.
                                            I am not the best at it, but I enjoy it a lot.
                                        </a></div>
                                    </div>
                                </div>
                            </li>

                            {/*<!-- Card Three -->*/}
                            <li class="w-96 block bg-white p-1 rounded-2xl md:w-full">
                                <div class="grid grid-cols-2">
                                    <img src="./images/PvzDraw.JPG" class="rounded-2xl"/>
                                    <div class="pl-4 pt-2 overflow-hidden">
                                        <a class="font-bold text-lg">Gaming</a>
                                        <div><a class="">Some of my favorites are Hollow Knight, PVZ: Garden Warfare 2, Hyper Light Drifter, and Ori.
                                            Silksong hype! :)
                                        </a></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Hobbies;