let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let profile = document.querySelector("#profile");

searchBtn.addEventListener("click", function handleClick(e) {
    let userText = searchUser.value;
    // if (userText!=""){
    //     alert(userText);
    // }
    // else(alert("Empty"));
    fetch(`https://api.github.com/users/${userText}`)
        .then(fetchedData => fetchedData.json())
        .then(fetchedData => {
            if (fetchedData.message == "Not Found") {
                alert("User Not found")
            }
            else {
                alert(JSON.stringify(fetchedData))
            }
        })
});