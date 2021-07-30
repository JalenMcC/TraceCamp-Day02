import React from 'react';

function AboutMe() {
    return (
        <div>
            <section id="me">
                <p class="block py-8 py-4 pt-20 text-center text-5xl font-bold text-white md:text-8xl">About Me</p>
                <div>
                    <ul class="md:grid grid-cols-2" >
                        {/*<!-- Picture Section -->*/}
                        <li class="p-8">
                            <img src="./images/Me.JPG" 
                                class="p-8 border-8 border-white md:p-20"
                                alt="Placeholder"
                            />
                        </li>

                        {/*<!-- Text Section -->*/}
                        <div class="text-center text-white text-2xl py-4 md:text-left">
                            <li class="block font-bold px-10 py-2 text-3xl md:text-5xl md:pt-36">
                                <p>Jalen McCloud</p>
                            </li>
                            <li class="italic block px-10 py-2 md:text-4xl">
                                <p>Fayetteville, GA</p>
                            </li>
                            <li class="italic block px-10 py-2 md:text-4xl">
                                <p>Junior Computer Science Major</p>
                            </li>
                            <li class="italic block px-10 py-2 md:text-4xl">
                                <p>Clemson University</p>
                            </li>
                            
                        </div>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;