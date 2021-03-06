//Extract zip in game file
function extractDownload(targetPath, targetFolder, filename, gameTitle) {
    var name = filename.slice(0, -4);
    document.getElementById(`${name}-snackbar-title`).innerHTML = `${filename} Extracting`;
    document.getElementById(`${name}-snack-actions`).style.display = 'none';

    async function start() {
        try {
            await extract(targetPath, {dir: targetFolder});
            fs.unlink(targetPath, (err) => {
                if (err) {
                    console.error(err);
                }
            });

            document.getElementById(`${name}-snackbar-title`).innerHTML = `${filename} Extracted`;
            //Remove snackbar after 1 second
            downloadFinish(targetPath, targetFolder, filename, gameTitle);
            addGameToLibrary(targetPath, targetFolder, filename, gameTitle);
        } catch (err) {
            console.log(err);
        }
    }
    start();
}