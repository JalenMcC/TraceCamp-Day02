import React from 'react';

function AboutMe() {
    return (
        <div>
            <section id="me">
                <a class="block py-8 py-4 pt-20 text-center text-5xl font-bold text-white md:text-8xl">About Me</a>
                <div>
                    <ul class="md:grid grid-cols-2" >
                        {/*<!-- Picture Section -->*/}
                        <li class="p-8">
                            <img src="./images/Me.JPG" 
                                class="p-8 border-8 border-white md:p-20"
                            />
                        </li>

                        {/*<!-- Text Section -->*/}
                        <div class="text-center text-white text-2xl py-4 md:text-left">
                            <li class="block font-bold px-10 py-2 text-3xl md:text-5xl md:pt-36">
                                <a>Jalen McCloud</a>
                            </li>
                            <li class="italic block px-10 py-2 md:text-4xl">
                                <a>Fayetteville, GA</a>
                            </li>
                            <li class="italic block px-10 py-2 md:text-4xl">
                                <a>Junior Computer Science Major</a>
                            </li>
                            <li class="italic block px-10 py-2 md:text-4xl">
                                <a>Clemson University</a>
                            </li>
                            
                        </div>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;