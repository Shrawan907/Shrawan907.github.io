consoleText(['> ', '', '> '], ['echo $welcome_message', 'Welcome to my portfolio website', 'show portfolio-menu', ], ['text1', 'text2', 'text3']);
async function consoleText(prefixes, words, id) {
    await new Promise(w => setTimeout(w, 2000))
    document.getElementById("loader").remove()
    document.getElementById("landingPage").classList.remove("hidden")
    var visible = true;
    var con = document.getElementById('console');
    letterCount = 1
    index = 0
    target = document.getElementById(id[index])
    done = false
    window.setInterval(async function() {
        if (done == true) {
            // do nothing
        } else if (index >= words.length) {
            done = true
            await new Promise(w => setTimeout(w, 500))
            document.getElementById("menu").classList.remove("hidden")
        } else if (letterCount > words[index].length) {
             index += 1
             letterCount = 1
             target = document.getElementById(id[index])
        } else {
            target.innerHTML = prefixes[index] + words[index].substring(0, letterCount) + ((index != 1 && letterCount < words[index].length) ? "_" : "")
            letterCount += 1
        }
    }, 120);

    window.setInterval(function() {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;
        } else {
            con.className = 'console-underscore'
            visible = true;
        }
    },400)
}