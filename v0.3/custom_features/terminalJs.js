consoleText('> ', 'show portfolio-menu', 'text-edit');
function consoleText(prefix, word, id) {
    var visible = true;
    var con = document.getElementById('console');
    letterCount = 1
    target = document.getElementById(id)
    target.setAttribute('style', 'color: white')

    window.setInterval(async function() {
        if (letterCount > word.length) {
            await new Promise(w => setTimeout(w, 500))
            document.getElementById("menu").classList.remove("hidden")
        } else {
            target.innerHTML = prefix + word.substring(0, letterCount) + (letterCount == word.length ? "" : "_")
            letterCount += 1
        }
    }, 60);

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