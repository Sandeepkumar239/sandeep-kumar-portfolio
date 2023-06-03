// code for side bar
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';

    } else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';

        }, 300)
    }
})


//   <------------------------code for blog page-------------------------------> 

//  code for movies blog
const MoreText1 = () => {

    const readButton = document.querySelector('#btn-sm1');

    if ((document.querySelector('.readmore1').style.display) == 'inline') {
        document.querySelector('.readmore1').style.display = 'none';
        readButton.innerHTML = "read more";
    }
    else {
        document.querySelector('.readmore1').style.display = 'inline';
        readButton.innerHTML = "read less";


    }
}

//  code for drawing tips blog
const MoreText2 = () => {

    const readButton = document.querySelector('#btn-sm2');

    if ((document.querySelector('.readmore2').style.display) == 'inline') {
        document.querySelector('.readmore2').style.display = 'none';
        readButton.innerHTML = "read more";
    }
    else {
        document.querySelector('.readmore2').style.display = 'inline';
        readButton.innerHTML = "read less";


    }
}

//  code for Interesting Technologies

const MoreText3 = () => {

    const readButton = document.querySelector('#btn-sm3');

    if ((document.querySelector('.readmore3').style.display) == 'inline') {
        document.querySelector('.readmore3').style.display = 'none';
        readButton.innerHTML = "read more";
    }
    else {
        document.querySelector('.readmore3').style.display = 'inline';
        readButton.innerHTML = "read less";


    }
}
//  code for Life Hacks

const MoreText4 = () => {

    const readButton = document.querySelector('#btn-sm4');

    if ((document.querySelector('.readmore4').style.display) == 'inline') {
        document.querySelector('.readmore4').style.display = 'none';
        readButton.innerHTML = "read more";
    }
    else {
        document.querySelector('.readmore4').style.display = 'inline';
        readButton.innerHTML = "read less";

    }
}






