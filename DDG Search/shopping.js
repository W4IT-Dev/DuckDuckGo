function shoppingSearch(query) {
    let xhr = new XMLHttpRequest({ mozSystem: true });
    let vqd;
    getVQD(query)
        .then((value) => {
            vqd = value;
            debug(value, 'white')
            const URL = `https://links.duckduckgo.com/m.js?shopping=1&sfexp=1&o=json&q=${encodeURIComponent(query)}&vqd=${vqd}&&ama5exp=b&a=h_&mkt=de-de`
            xhr.open('GET', URL, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText)
                    alert(xhr.responseText)
                }
            };
            // error handler
            xhr.addEventListener("error", handleEvent);
            function handleEvent(e) {
                debug(e, 'red')
            }
            xhr.send();
        })
        .catch((err) => {
            debug(err, 'red')
        });
}