function runWCIF() {
    var competitionName = document.getElementById("competitionName").value;
    var apiUrl =
      "https://www.worldcubeassociation.org/api/v0/competitions/" +
      competitionName +
      "/wcif";

    // Open the API URL in a new tab
    window.open(apiUrl, "_blank");
  }

  function runWCIFPublic() {
    var competitionName = document.getElementById("competitionName").value;
    var apiUrl =
      "https://www.worldcubeassociation.org/api/v0/competitions/" +
      competitionName +
      "/wcif/public";

    // Open the API URL in a new tab
    window.open(apiUrl, "_blank");
  }