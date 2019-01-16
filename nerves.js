
// experimental line that redirects to my mobile portfolio if they're mobile
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    location.replace("https://codejoy-wins.github.io/");
 }


function displayGame(){
    var elem = document.getElementById("game");
    elem.innerHTML = `<iframe frameborder="0" src="https://itch.io/embed-upload/1202412?color=0b24ce" allowfullscreen="" width="1280" height="640"></iframe>`;
    var instructions = document.getElementById("x");
    instructions.innerHTML = `
        <div id="small">
        <ul>
        <li>Press left shift and space to use jetpack</li>
        <li>Press right shift to come back down to earth</li>
        <li>Stay below 1000 temp</li>
        <li>Press q and e to switch weapons</li>
        <li>Fire straight ahead with shotgun at eye level to fix glitch</li>
        <li>Press r to teleport</li>
        <li>Get 1000 points before songs up.</li>

        </ul>
        </div>
    `;
    var devlog = document.getElementById("y");
    devlog.innerHTML = `
        <p>This is my most recent project built from the ground up.</p>
    `;
}
function endGame(){
    var elem = document.getElementById("game");
    elem.innerHTML = `<a href="https://codejoy-wins.github.io/"><p>Thanks for playing</p></a>  `;
    var x = document.getElementById("x");
    var y = document.getElementById("y");
    x.innerHTML = "Jann";
    y.innerHTML = "Software"

}


// next game takes all the work
function nextGame(){
    var database = [
        {
            "title": "First Person Shooter 9",
            "code": `<iframe frameborder="0" src="https://itch.io/embed-upload/1202412?color=0b24ce" allowfullscreen="" width="1280" height="640"></iframe>`,
            "instructions": "Left shift and space for jetpack.  Right shift to fly down.  R to teleport",
            "devlog": "This is my most recent project built from the ground up."
        },
        {
            "title": "Red Grass Island: Apocalypse",
            "code": `<iframe frameborder="0" src="https://itch.io/embed-upload/1076577?color=333333" allowfullscreen="" width="1280" height="640"></iframe>`,
            "instructions": "Pick up the gems with e if that works",
            "devlog": "This was to explore 3D"
        },
        {
            "title": "Starsenal 4",
            "code": `<iframe frameborder="0" src="https://itch.io/embed-upload/1135453?color=20f024" allowfullscreen="" width="1280" height="640"></iframe>`,
            "instructions": `
                <div id="small">
                <ul>
                <li>Press q and e to rotate</li>
                <li>wasd to move</li>
                <li>Hold b for black hole</li>
                <li>Press i to spin around fast</li>
                <li>Press o to readjust</li>
                <li>Press n for level 2 or beat level 1</li>

                </ul>
                </div>
            `,
            "devlog": "This was after a failed 2D coding test"
        },
        {
            "title": "Starbros",
            "code": `<iframe frameborder="0" src="https://itch.io/embed-upload/932686?color=ad00f2" allowfullscreen="" width="1024" height="640"></iframe>`,
            "instructions": `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yxxDWVSn93c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `,
            "devlog": "first game ever.  Made with preview and Unity.  Song by XXXtencion"
        },
        {
            "title": "I am Ghost",
            "code": `<iframe frameborder="0" src="https://itch.io/embed-upload/959917?color=f7f319" allowfullscreen="" width="1280" height="640"></iframe>`,
            "instructions": `
                <div id="small">
                <ul>
                <li>Press v to toggle ghost mode</li>
                <li>Collect the speed and jump boost power ups</li>
                <li>Hold shift to walk and slow down</li>
                </ul>
                </div>

            `,
            "devlog": "You have to toggle ghost mode in mid air to climb up the light tunnels to heaven.  Kid Cudi song inspired. Trippy"
        },
        {
            "title": "Grand Theft Basketball",
            "code": `<iframe frameborder="0" src="https://itch.io/embed-upload/955733?color=d42400" allowfullscreen="" width="1280" height="640"></iframe>`,
            "instructions": "drive to the end and then shoot the basketball",
            "devlog": "Someone had me make a demo for a video game idea"
        },
        {
            "title": "First Person Shooter 5",
            "code": `<iframe frameborder="0" src="https://itch.io/embed-upload/1197968?color=b3b3b3" allowfullscreen="" width="1280" height="640"></iframe>`,
            "instructions": `
                <p> Press f to melee.  Point and click to shoot </p>
            `,
            "devlog": "Huge animation problems with this one but some cool sounds"
        },
        {
            "title": "Zombiverse",
            "code": `<iframe frameborder="0" src="https://itch.io/embed-upload/955620?color=3ae3ee" allowfullscreen="" width="1280" height="640"></iframe>`,
            "instructions": "build upwards and jump around sprint with shift",
            "devlog": "Should go back and finish.  First time instantiating objects."
        },
        {
            "title": "Killjoy",
            "code": `<iframe frameborder="0" src="https://itch.io/embed-upload/973488?color=7a07f4" allowfullscreen="" width="1280" height="640"></iframe>`,
            "instructions":`
                <div id="small">
                <p>Not much to this game.  Build and climb around to get a good sniping spot.</p>
                </div>
            `,
            "devlog": " back in the day before I could animate the gun"
        }

    ];
    // var data = [`<iframe frameborder="0" src="https://itch.io/embed-upload/1138684?color=333333" allowfullscreen="" width="1280" height="640"></iframe>`,`<iframe frameborder="0" src="https://itch.io/embed-upload/1135453?color=15f115" allowfullscreen="" width="1280" height="640"></iframe>`,`<iframe frameborder="0" src="https://itch.io/embed-upload/1076577?color=333333" allowfullscreen="" width="1280" height="640"></iframe>`];
    var elem = document.getElementById("game");
    var db_target = Math.floor(Math.random(0,1)*database.length);
    elem.innerHTML = database[db_target].code;
    // target red her for game title
    var title = document.getElementById("title");
    title.innerHTML = `
        <h1>${database[db_target].title}</h1>
    `;
    var red = document.getElementById("x");
    red.innerHTML = `
        <p>${database[db_target].instructions}</p>
    `;
    var blue = document.getElementById("y");
    blue.innerHTML = `
        <p>${database[db_target].devlog}</p>
    `;

}
// data should be an object with instructions attatched to each game that I can display underneath.
// Red could be instructions
// Blue could be my dev log

{/* <iframe frameborder="0" src="https://itch.io/embed-upload/1138684?color=333333" allowfullscreen="" width="1280" height="640"></iframe> */}