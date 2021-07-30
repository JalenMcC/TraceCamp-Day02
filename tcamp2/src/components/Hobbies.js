import React from 'react';
import Card from './WordCards';

function Hobbies() {
    return(
        <div>

<section id="hobbies">
                {/*<!-- Black Bar Seperator-->*/}
                <div class="block py-10 bg-black"></div>

                {/*<!-- Card Section -->*/}
                <div>
                    <p class="block py-8 py-4 text-center text-5xl font-bold text-white md:text-8xl">Hobbies</p>
                    <div>
                        <ul class="grid p-10 gap-10 md:grid-cols-3">

                            {/*<!-- Card One -->*/}
                            <Card 
                                hobby="Planting"
                                pic="Plants.JPG"
                                des="I like to take care of succulents and cacti in my free time.
                                    I am looking forward to taking care of many other types of plants in the future."
                            />

                            {/*<!-- Card Two -->*/}
                            <Card 
                                hobby="Drawing"
                                pic="RobotSketch.JPG"
                                des="I spend a lot of my downtime doodling on any material I can find.
                                    I am not the best at it, but I enjoy it a lot."
                            />

                            {/*<!-- Card Three -->*/}
                            <Card 
                                hobby="Drawing"
                                pic="PvzDraw.JPG"
                                des="Some of my favorites are Hollow Knight, PVZ: Garden Warfare 2, Hyper Light Drifter, and Ori.
                                    Silksong hype! :)"
                            />
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Hobbies;