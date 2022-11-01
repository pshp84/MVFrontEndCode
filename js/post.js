

    

function getposts(Id) {
    var tbody = document.getElementById("apiTable").querySelector("tbody");
    if (Id != null) {
        if (Id != undefined) {
            var request = new XMLHttpRequest();
            request.open("GET", "https://jsonplaceholder.typicode.com/posts/?userId=" + Id, true);
            
            request.onreadystatechange = function () {
                tbody.innerHTML = "";
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        it('request called', function () {
                            assert(request.status == 200)
                        });
                        if (request.responseText != null) {
                            const obj = JSON.parse(this.responseText);
                            if (obj.constructor != ({}).constructor) {
                                obj.forEach(function (data, index) {
                                    tbody.innerHTML += "<tr><td>" + data.userId + "</td>" + "<td>" + data.id + "</td>" + "<td>" + data.title + "</td>" + "<td>" + data.body + " </td></tr> ";
                                });
                            }
                            else {
                                tbody.innerHTML += "<tr><td>" + obj.userId + "</td>" + "<td>" + obj.id + "</td>" + "<td>" + obj.title + "</td>" + "<td>" + obj.body + " </td></tr> ";
                            }
                        }
                        else {
                            tbody.innerHTML += "<tr><td colspan='4'>Exception : Status Code :" + request.status + " no data found </td></tr>";
                        }

                    }
                    else if (request.status == 404) {
                        tbody.innerHTML += "<tr><td colspan='4'>Exception : Status Code :" + request.status + " responseURL :  " + request.responseURL + " page not found </td></tr>";
                        console.clear();
                    }
                    else {
                        tbody.innerHTML += "<tr><td colspan='4'>Exception : Status Code :" + request.status + "</td></tr>";
                        console.clear();
                    }
                }


            };
           
            request.send(null);
        }
        else {
                tbody.innerHTML += "<tr><td colspan='4'>Exception : please select valid user</td></tr>";
                console.clear();
            }
        
    }  
}
function getUrlVars(fetchUrl) {
    var url = fetchUrl;
    var vars = {};
    var hashes = url.split("?")[1];
    if (hashes != undefined) {
        var hash = hashes.split('&');

        for (var i = 0; i < hash.length; i++) {
            params = hash[i].split("=");
            vars[params[0]] = params[1];
        }
    }
    return vars;

}
