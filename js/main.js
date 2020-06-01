$('.jq').on('click', function () {
    $('body').append('<div class="box">')
})

const buttonJS = document.querySelector('.js');
buttonJS.addEventListener("click", function () {
    const divItem = document.createElement('div');
    // divItem.className = "box";
    divItem.classList.add('box');
    document.body.appendChild(divItem);
})