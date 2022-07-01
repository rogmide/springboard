const parsedUrl = new URL(window.location.href);

if (parsedUrl.pathname === '/page1.html') {
    console.log(parsedUrl.searchParams.get("first") + " " + parsedUrl.searchParams.get("sec"));
}