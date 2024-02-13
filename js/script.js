let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let homeBtn = document.querySelector(".navbar-brand");
let ui = new UI;


searchBtn.addEventListener("click", function handleClick(e) {
    let userText = searchUser.value;
    // if (userText!=""){
    //     alert(userText);
    // }
    // else(alert("Empty"));
    fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(fetchedData => {
            if (fetchedData.message == "Not Found") {
                ui.showAlert();
            }
            else {
                // alert(JSON.stringify(fetchedData))
                // document.getElementById("profile").innerHTML = `${JSON.stringify(fetchedData)}`;
                ui.showProfile(fetchedData);
            }
        })
},
    homeBtn.addEventListener("click", function handleClick(e) {
        searchUser.value = "";
        ui.resetUI()

    })
    
    
);
