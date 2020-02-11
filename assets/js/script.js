// Add event on card
document.querySelectorAll('.card').forEach(el => {
    var maskEl = document.createElement("div");
    var buttonElDetails = document.createElement("a");
    var buttonElAdd = document.createElement("a");
    maskEl.classList.add("card-mask");
    el.appendChild(maskEl);
    el.addEventListener('mouseover', function () {
        maskEl.classList.add("toshow");
    });
    el.addEventListener('mouseout', function () {
        maskEl.classList.remove("toshow");
    });

    buttonElDetails.classList.add("button-card-detail");
    buttonElDetails.innerText = "View Details";
    buttonElAdd.classList.add("button-card-add");
    buttonElAdd.innerText = "Add To Card";

    maskEl.appendChild(buttonElDetails);
    maskEl.appendChild(buttonElAdd);
});