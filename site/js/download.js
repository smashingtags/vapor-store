window.download = function download() {
};

$.get('https://api.github.com/repos/SushyDev/vapor-store/releases/latest', function (data) {
    document.getElementById('version').innerHTML = data.name
    document.getElementById('download-btn').setAttribute('onclick', `window.open('${data.assets[0].browser_download_url}')`);
});
