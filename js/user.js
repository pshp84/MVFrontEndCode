function ShowAllUsers() {
    try {
        var request = new XMLHttpRequest();
        request.open("GET", "https://jsonplaceholder.typicode.com/users", true);

        request.onreadystatechange = function () {
            var tbody = document.getElementById("responseTable").querySelector("tbody");
            tbody.innerHTML = "";

            if (request.readyState == 4) {
                if (request.status == 200) {
                    it('callles success', function () {
                        assert(request.status == 200)
                    });
                    if (this.responseText != null) {
                        const obj = JSON.parse(this.responseText);
                        if (obj.constructor != ({}).constructor) {
                            obj.forEach(function (data, index) {
                                tbody.innerHTML += "<tr><td>" + data.id + "</td>" + "<td>" + data.name + "</td>" + "<td>" + data.username + "</td>"
                                    + "<td>" + data.email + " </td>" + "<td>" + data.phone + " </td>" + "<td>" + data.website + " </td>" + "<td>"
                                    + data.company.name + "</td>" + "<td>" + data.company.catchPhrase + "</td>" + "<td>" + data.company.bs + "</td>"
                                    + "<td>" + data.address.street + " " + data.address.suite + ", "
                                    + data.address.city + " , zipcode- " + data.address.zipcode + ", Geo:Lat- " + data.address.geo.lat + " Geo:Lng- " + data.address.geo.lng + "  </td ><td><a href='./Posts.html?Id=" + data.id+"'>User Posts</a></td></tr> ";
                            });
                        }
                        else {
                            tbody.innerHTML += "<tr><td>" + obj.id + "</td>" + "<td>" + obj.name + "</td>" + "<td>" + obj.username + "</td>"
                                + "<td>" + obj.email + " </td>" + "<td>" + obj.phone + " </td>" + "<td>" + obj.website + " </td>" + "<td>"
                                + obj.company.name + "</td>" + "<td>" + obj.company.catchPhrase + "</td>" + "<td>" + obj.company.bs + "</td>"
                                + "<td>" + obj.address.street + " " + obj.address.suite + ", "
                                + obj.address.city + " , zipcode- " + obj.address.zipcode + ", Geo:Lat- " + obj.address.geo.lat + " Geo:Lng- " + obj.address.geo.lng + "  </td ></tr > ";
                        }
                    }
                    else {
                        tbody.innerHTML += "<tr><td colspan='10'>Exception : Status Code :" + request.status + " no data found </td></tr>";
                    }
                }
                else if (request.status == 404) {
                    tbody.innerHTML += "<tr><td colspan='4'>Exception : Status Code :" + request.status + " responseURL :  " + request.responseURL + " page not found </td></tr>";
                    console.clear();
                }
                else {
                    tbody.innerHTML += "<tr><td colspan='10'>Exception : Status Code :" + request.status + "   responseURL :  " + request.responseURL + " page not found </td></tr>";
                    console.clear();
                }
            }
        };

        request.send(null);
    } catch (e) {
        var tbody = document.getElementById("responseTable").querySelector("tbody");
        tbody.innerHTML = "";
        tbody.innerHTML += "<tr><td colspan='10'>Exception : Status Code :" + e + "</td></tr>";
    }

}