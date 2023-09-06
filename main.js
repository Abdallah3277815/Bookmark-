let siteName = document.getElementById("siteName");
let websiteURL = document.getElementById("websiteURL");
let displayBtn = document.getElementById("displayData");
let rowsContainer = document.getElementById("rowsContainer")
let allWebsites = [];
if (localStorage.getItem("allWebsites") != null) {
    allWebsites = JSON.parse(localStorage.getItem("allWebsites"));
    displayData()
}

function addProduct() {
    let website = {
        name: siteName.value,
        url: websiteURL.value,

    }
    
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\??([\w\d%&=]*)?$/;
    if (!urlRegex.test(website.url)) {
        alert("Invalid URL");
        websiteURL.style.outline="3px solid #B33A3A "
      return;
    }
    else{
        websiteURL.style.outline="3px solid green "


    }
   

   let existWebsiteUrl = allWebsites.some(w => w.url === website.url);
   let existWebsiteName = allWebsites.some(w => w.name === website.name);
    console.log(existWebsiteName);
    if (existWebsiteUrl == true ||existWebsiteName==true ) {
        alert("This Website Name Or URL is Already In The List")
    } else {
        allWebsites.push(website)
        localStorage.setItem("allWebsites", JSON.stringify(allWebsites))
        displayData()
    }
}

function displayData() {
    let row = []
    for (i = 0; i < allWebsites.length; i++) {
        row += `
       <tr>
                <th scope="row">${i + 1}</th>
                <td>${allWebsites[i].name}</td>
                <td><a href="${allWebsites[i].url}" class="btn btn-success">Visit</a></td>
                <td> <button class="btn btn-danger" onclick="deleteWebsite(${i})">Delete</button></td>
              </tr>`;
    }
    rowsContainer.innerHTML = row;
}
function deleteWebsite(websiteindex) {
    allWebsites.splice(websiteindex, 1)
    localStorage.setItem("allWebsites", JSON.stringify(allWebsites))
    displayData()

}


