import React from 'react';

function Top() {
    return (
        <div>
           <header class="fixed w-full bg-black text-white md:flex justify-between fixed-full">
            <a class="font-bold block px-8 py-4 hover:text-yellow-500">Jalen McCloud</a>

            {/* Right Selections */}
            <nav>
                <ul class="md:flex font-bold">
                    <li>
                        <a 
                            class="block px-8 py-4 hover:text-red-400"
                            href="https://www.linkedin.com/in/jalen-mccloud-523671208/" 
                            >Linkedin</a>
                    </li>
                    <li>
                        <a 
                            class="block px-8 py-4 hover:bg-red-600"
                            href="#me" 
                            >About Me</a>
                    </li>
                    <li>
                        <a
                            class="block px-8 py-4 hover:bg-red-600"
                            href="#hobbies"
                            >Hobbies</a>
                    </li>
                    <li>
                        <a
                            class="block px-8 py-4 hover:bg-red-600"
                            href="#pet"
                            >Pet</a>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    );
}
export default Top;