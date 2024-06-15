/*

При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/


const circle = document.querySelector(".outerCircle");

circle.addEventListener('click', (evt) => {
    if (evt.currentTarget.style.position === "absolute") {
        evt.currentTarget.style.position = 'static';
        window.removeEventListener("mousemove", handlerMove);
        return;
    }
      evt.currentTarget.style.position = "absolute";
    window.addEventListener('mousemove', handlerMove);
});

function handlerMove(evt) {
    circle.style.top = `${evt.pageY - 15}px`;
    circle.style.left = `${evt.pageX - 15}px`;
}
