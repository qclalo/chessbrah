// Get all div elements with the class 'user-tagline-component'
let divElements = document.querySelectorAll('div.user-tagline-component');

// Iterate through each div element
divElements.forEach(div => {
    // Iterate through each child node of the div element
    for (let i = 0; i < div.childNodes.length; i++) {
        let node = div.childNodes[i];
        // Check if the node is a comment node (nodeType === 8) and if its value is empty (<!---->)
        if (node.nodeType === 8 && node.nodeValue.trim() === '') {
            // Create a new span element with the replacement content
            let newContent = document.createElement('span');
            newContent.innerHTML = '<a class="user-chess-title-component" href="/members/titled-players" target="_blank" data-tooltip-target="709">WNM</a> <span class="user-tagline-rating user-tagline-white">';

            // Replace the comment node with the new content
            div.replaceChild(newContent, node);
            // Stop after the first replacement
            return;
        }
    }
});
