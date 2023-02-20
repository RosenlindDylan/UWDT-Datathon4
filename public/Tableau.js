

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/Book1_16767740253750/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}


