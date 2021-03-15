
function newApp() {
  win = new BrowserWindow();
  win.loadURL(
    url.format({
      pathname: "colortheorist.html",
      slashes: true
    })
  );
}
