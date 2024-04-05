document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username') || 'DefaultUsername';
    const pronouns = urlParams.get('pronouns') || 'they/them';

    document.getElementById('usernameValue').textContent = username;
    document.getElementById('pronounsValue').textContent = pronouns;
});
