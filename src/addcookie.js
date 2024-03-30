const firstText = document.querySelector("#firstText");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
    setCookie(firstText.value, firstText.value, 365);
});

function setCookie(name, value, daysToLive) {
    const isSessionOnly = sessionStorage.getItem('isSessionOnly') === 'true';

    let expires = "";
    if (!isSessionOnly && daysToLive !== null) { // If not session-only and daysToLive is specified
        const date = new Date();
        date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
        expires = "expires=" + date.toUTCString();
    }
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name){
    setCookie(name, null, null);
}
