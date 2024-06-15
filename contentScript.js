// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Find the element containing the username
    let usernameElements = document.querySelectorAll('a.user-username-component, span.user-username-component');

    usernameElements.forEach(element => {
        // Check if the username matches your username
        if (element.textContent.trim() === 'YourUsername') {
            // Create a new span element for the WNM title
            let wnmTitle = document.createElement('span');
            wnmTitle.innerHTML = ' <a class="user-chess-title-component" href="/members/titled-players" target="_blank" data-tooltip-target="709">WNM</a>';

            // Insert the WNM title after the username
            element.parentNode.insertBefore(wnmTitle, element.nextSibling);
        }
    });
});
