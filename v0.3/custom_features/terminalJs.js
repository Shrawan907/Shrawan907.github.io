consoleText('> ', 'show portfolio-menu', 'text-edit');
async function consoleText(prefix, word, id) {
    await new Promise(w => setTimeout(w, 10000))
    document.getElementById("loader").remove()
    document.getElementById("landingPage").classList.remove("hidden")
    var visible = true;
    var con = document.getElementById('console');
    letterCount = 1
    target = document.getElementById(id)
    window.setInterval(async function() {
        if (letterCount > word.length) {
            await new Promise(w => setTimeout(w, 500))
            document.getElementById("menu").classList.remove("hidden")
        } else {
            target.innerHTML = prefix + word.substring(0, letterCount) + (letterCount == word.length ? "" : "_")
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