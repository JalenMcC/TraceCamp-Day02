import React from 'react';

function Velkoz() {
    return(
        <div>

            <section>
                {/*<!-- Black Bar Seperator-->*/}
                <div class="block py-10 bg-black"></div>

                {/*<!-- Links to Velkoz Highlight Reels-->*/}
                <a 
                    class="block py-8 py-4 text-center text-5xl font-bold text-white md:text-8xl hover:text-purple-500"
                    href="https://www.youtube.com/watch?v=KDejKi-12_M"
                >Best Velkoz Eu/Na</a>
                <div
                    class="text-white text-center"
                >Not my video. All rights to Azzapp. Check out his 
                <a class="hover:text-purple-500" href="https://www.youtube.com/channel/UCjLuDK6daotQxTcjdLsyUzQ">Youtube</a> 
                and 
                <a class="hover:text-purple-500" href="https://www.twitch.tv/azzapp">Twitch</a> 
                channels.</div>
            </section>

        </div>
    );
}

export default Velkoz;