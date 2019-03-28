var animation = bodymovin.loadAnimation({
    container: document.getElementById("sheet"), // Required
    path: "sheet.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: true, // Optional
    name: "sheet", // Name for future reference. Optional.
});

var animation2 = bodymovin.loadAnimation({
    container: document.getElementById("check"), // Required
    path: "check.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: true, // Optional
    name: "check", // Name for future reference. Optional.
});