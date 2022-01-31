document.getElementById("button").addEventListener("click", function() {
    document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".bg-modal").style.display = "none";
});

document.getElementById("btn").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "flex";
});

document.querySelector(".quit").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "none";
});

document.getElementById("press").addEventListener("click", function() {
    document.querySelector(".mod").style.display = "flex";
});

document.querySelector(".stop").addEventListener("click", function() {
    document.querySelector(".mod").style.display = "none";
});

document.getElementById("hold").addEventListener("click", function() {
    document.querySelector(".modarl").style.display = "flex";
});

document.querySelector(".off").addEventListener("click", function() {
    document.querySelector(".modarl").style.display = "none";
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

//

document.getElementById("button").addEventListener("click", function() {
    document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".bg-modal").style.display = "none";
});

document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();

    var phone = document.getElementById("phone").value;
    console.log(phone);

    var network = document.getElementById("network").value;
    console.log(network);

    var lname = document.getElementById("amt").value;
    console.log(lname);
});

//
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var disco = document.getElementById("disco").value;
    console.log(disco);

    var plan = document.getElementById("plan").value;
    console.log(plan);

    var metre = document.getElementById("meter").value;
    console.log(meter);

    var numb = document.getElementById("number").value;
    console.log(number);

    var email = document.getElementById("email").value;
    console.log(email);

    var amnt = document.getElementById("amt").value;
    console.log(amnt);
});

//
document.getElementById("cable").addEventListener("submit", function(event) {
    event.preventDefault();

    var cable = document.getElementById("cabletv").value;
    console.log(cable);

    var bouq = document.getElementById("bouquet").value;
    console.log(bouq);

    var smtCard = document.getElementById("smartcard").value;
    console.log(smtCard);

    var phNum = document.getElementById("num").value;
    console.log(phNum);

    var mail = document.getElementById("numb").value;
    console.log(mail);
});

//

document
    .getElementById("payForElectricity")
    .addEventListener("click", function() {
        var disco = document.getElementById("disco");
        var discoValue = disco.options[disco.selectedIndex].value;

        var plan = document.getElementById("plan");
        var planValue = plan.options[plan.selectedIndex].value;

        var meter_number = document.getElementById("meter").value;

        var data = {
            disco: discoValue,
            account_type: planValue,
            meter_number,
        };

        fetch(
                "https://vas-vendors.myfela.ng/staging/electricity/v2/validateMeterNo", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTY2ZTU2NzIyYWU2NTA2NGZiNGJlOCIsImlhdCI6MTYwNzEwNTk5OCwiZXhwIjozMTcxNTE1NDgzOTh9.-1ZVCt99jk6a4KTOch4dH3mZaIDSu79ojO0P6QPf_Go",
                    },
                    body: JSON.stringify(data),
                }
            )
            .then((res) => res.json())
            .then((data) => {
                console.log("sdhcjhsdhs");
                if (data.status === "success") {
                    console.log(`data.status: ${data}`);
                    const verified = document.getElementById("suc");
                    console.log("verified");
                    verified.removeAttribute("hidden"); //.style.display = "block";
                } else {
                    document.getElementById("failure").style.display = "visible";
                }
            })
            .catch((error) => {
                console.log("eror:", error);
            });
    });

document.getElementById("service").addEventListener("click", function() {
    document.querySelector(".modarl").style.display = "flex";
});

document.querySelector(".off").addEventListener("click", function() {
    document.querySelector(".modarl").style.display = "none";
});

document.getElementById("serv").addEventListener("submit", function(event) {
    event.preventDefault();

    var service = document.getElementById("service").value;
    console.log(service);
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// function myFunction() {
//   document.getElementById("#").innerHTML = "#";
// }