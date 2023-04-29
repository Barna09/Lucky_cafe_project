
$(document).ready(function () {
  var icons = {
    0: "img/villamos.svg",
    1: "img/metro.svg",
    109: "img/hev.svg",
    3: "img/busz.svg",
    4: "img/hajo.svg",
    11: "img/trolibusz.svg",
  };
  var icons_n = {
    0: "Villamos",
    1: "Metro",
    109: "Hév",
    3: "Busz",
    4: "Hajó",
    11: "Trolibusz",
  };
  $.ajax({
    url: "routes.txt",
    dataType: "text",
    success: function (data) {
      var parsedData = Papa.parse(data, { header: true, delimiter: "," }).data;
      var routesTable = $("#routes-table").DataTable({
        data: parsedData,
        columns: [
          {
            data: "route_id",
            render: function (data, type, row) {
              var icon,
                vpIcon = "";
              if (row.route_short_name >= 900 && row.route_short_name <= 999) {
                icon = "img/ejszakai.svg";
              } else if (
                row.route_short_name >= "900A" &&
                row.route_short_name <= "999A"
              ) {
                icon = "img/ejszakai.svg";
              } else if (row.route_id.startsWith("VP")) {
                icon = icons[row.route_type];
                vpIcon =
                  '<img style="width: 50px;" title="Villamospótló" alt="Villamospótló" src="img/villamos.svg">';
              } else if (row.route_id.startsWith("MP")) {
                icon = icons[row.route_type];
                vpIcon =
                  '<img style="width: 50px;" title="Metrópótló" alt="Metrópótló" src="img/metro.svg">';
              } else {
                icon = icons[row.route_type];
              }
              return (
                '<div class="d-flex"><img style="width: 50px;" class="rounded mx-auto d-block" src="' +
                icon +
                '" alt="' +
                row.route_type +
                '"/>' +
                vpIcon +
                "</div>"
              );
            },
          },
          {
            data: "route_short_name",
            render: function (data, type, row) {
              var color = row.route_color;
              var textColor =
                row.route_text_color !== "0" ? "#ffffff" : "#000000";
              if (row.route_type === "0") {
                // black color code in hex
                textColor = "#000000";
              } else if (row.route_short_name === "M1") {
                // black color code in hex
                textColor = "#000000";
              }
              var routeName = data;
              var routeName = data;
              $.ajax({
                url: "alerts.txt",
                dataType: "text",
                success: function (alertData) {
                  var alerts = Papa.parse(alertData, {
                    header: true,
                    delimiter: ",",
                  }).data;
                  alerts.forEach(function (alert) {
                    if (alert.route_id === row.route_id) {
                      routeName += " Zavar";
                    }
                  });
                },
                async: false
              });
              
              
            }

          {
            data: 'route_type',
            render: function (data, type, row) {
              return icons_n[row.route_type];
            }
          },
          {
            data: 'route_desc',
            render: function(data, type, row) {
              var destinations = data.split('/');
              if (row.route_id === '8140') {
                return '<div href="#" data-bs-toggle="modal" data-bs-target="#N" style="font-weight: bold; display:flex;flex-direction:column;justify-content:center;height:100%">' +
                         '<a>' + destinations[0] + '</a>' +
                         '<a>' + destinations[1] + '</a>' +
                       '</div>';
              }
              else if (row.route_id === '5100') {
                return '<div href="#" data-bs-toggle="modal" data-bs-target="#S1" style="font-weight: bold; display:flex;flex-direction:column;justify-content:center;height:100%">' +
                         '<a>' + destinations[0] + '</a>' +
                         '<a>' + destinations[1] + '</a>' +
                       '</div>';
              }
              else if (row.route_id === '5200') {
                return '<div href="#" data-bs-toggle="modal" data-bs-target="#S2" style="font-weight: bold; display:flex;flex-direction:column;justify-content:center;height:100%">' +
                         '<a>' + destinations[0] + '</a>' +
                         '<a>' + destinations[1] + '</a>' +
                       '</div>';
              }
              else if (row.route_id === '5300') {
                return '<div href="#" data-bs-toggle="modal" data-bs-target="#S3" style="font-weight: bold; display:flex;flex-direction:column;justify-content:center;height:100%">' +
                         '<a>' + destinations[0] + '</a>' +
                         '<a>' + destinations[1] + '</a>' +
                       '</div>';
              }
              else if (row.route_id === 'MP533') {
                return '<div href="#" data-bs-toggle="modal" data-bs-target="#MP3" style="font-weight: bold; display:flex;flex-direction:column;justify-content:center;height:100%">' +
                         '<a>' + destinations[0] + '</a>' +
                         '<a>' + destinations[1] + '</a>' +
                       '</div>';
              }
              else if (row.route_id === 'MP536') {
                return '<div href="#" data-bs-toggle="modal" data-bs-target="#SP30" style="font-weight: bold; display:flex;flex-direction:column;justify-content:center;height:100%">' +
                         '<a>' + destinations[0] + '</a>' +
                         '<a>' + destinations[1] + '</a>' +
                       '</div>';
              }
              else if (row.route_id === 'MP538') {
                return '<div href="#" data-bs-toggle="modal" data-bs-target="#SP14" style="font-weight: bold; display:flex;flex-direction:column;justify-content:center;height:100%">' +
                         '<a>' + destinations[0] + '</a>' +
                         '<a>' + destinations[1] + '</a>' +
                       '</div>';
              }
              else if (row.route_id === 'H6') {
                return '<div href="#" data-bs-toggle="modal" data-bs-target="#H6" style="font-weight: bold; display:flex;flex-direction:column;justify-content:center;height:100%">' +
                         '<a>' + destinations[0] + '</a>' +
                         '<a>' + destinations[1] + '</a>' +
                       '</div>';
              }
              else if (row.route_id === 'H7') {
                return '<div href="#" data-bs-toggle="modal" data-bs-target="#H7" style="font-weight: bold; display:flex;flex-direction:column;justify-content:center;height:100%">' +
                         '<a>' + destinations[0] + '</a>' +
                         '<a>' + destinations[1] + '</a>' +
                       '</div>';
              }
              else if (row.route_id === 'H8') {
                return '<div href="#" data-bs-toggle="modal" data-bs-target="#H8" style="font-weight: bold; display:flex;flex-direction:column;justify-content:center;height:100%">' +
                         '<a>' + destinations[0] + '</a>' +
                         '<a>' + destinations[1] + '</a>' +
                       '</div>';
              }
              else if (row.route_id === 'H9') {
                return '<div href="#" data-bs-toggle="modal" data-bs-target="#H9" style="font-weight: bold; display:flex;flex-direction:column;justify-content:center;height:100%">' +
                         '<a>' + destinations[0] + '</a>' +
                         '<a>' + destinations[1] + '</a>' +
                       '</div>';
              }
              else {
                return '<div href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" style="display:flex;flex-direction:column;justify-content:center;height:100%">' +
                         '<a>' + destinations[0] + '</a>' +
                         '<a>' + destinations[1] + '</a>' +
                       '</div>';
              }
            }
          },
          { data: 'route_color' },
          { data: 'route_id' },
        ],
      });
    }
  });
});
