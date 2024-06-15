document.addEventListener('DOMContentLoaded', function() {
    function addGMTitle() {
        const targetString = '<div class="user-tagline-component"><!----> <a class="user-username-component user-username-white user-username-link user-tagline-username" data-test-element="user-tagline-username">cbrahFor</a>';
        const replacementString = '<div class="user-tagline-component"><a class="user-chess-title-component" href="/members/titled-players" target="_blank" data-tooltip-target="709">GM</a> <a class="user-username-component user-username-white user-username-link user-tagline-username" data-test-element="user-tagline-username">cbrahFor</a>';

        document.querySelectorAll('.user-tagline-component').forEach(function(node) {
            if (node.outerHTML.includes(targetString)) {
                node.outerHTML = node.outerHTML.replace(targetString, replacementString);
            }
        });
    }

    function observeMutations() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' || mutation.type === 'subtree') {
                    addGMTitle();
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Initial check
    addGMTitle();
    // Observe changes
    observeMutations();
});
