$(document).ready(function() {
    $('#search_trains').click(function() {
        let boarding = $('#boarding').val();
        let destination = $('#destination').val();
        $.ajax({
            url: "https://indianrailapi.com/api/v2/TrainBetweenStation/apikey/30c382602bfa67c8a7c580e6cfe2becb/From/" + boarding + "/To/" + destination,
            success: function(data) {
                console.log(data.Trains);
                let blob;
                for (let i = 0; i < data.Trains.length; i++) {
                    blob = blob + '<tr><td>${data.Trains[i].TrainNo}</td><td>${data.Trains[i].TrainName}</td><td>${data.Trains[i].TravelTime}</td><td>${data.Trains[i].TrainType}</td></tr>';
                    // console.log(data.Trains[i].TrainName);
                }

                $('#display_trains').html(`<
                                        table class = "table" >
                                        
                                        <tr >
                                        <th> Train Number < /th> 
                                        <th> Train Name < /th> 
                                        <th> Train Duration < /th> 
                                        <th > Train Type < /th> 
                                        </tr>
                                        $ { blob }
                                        </table>
                                        `);
            },
            error: function(error) {
                alert("Some Error");
                console.log(error);
            }
        })
    });
    $('#fetch_station').click(function() {
        let trainNo = $('#train_no').val();
        $.ajax({
            url: "http://indianrailapi.com/api/v2/TrainSchedule/apikey/<apikey>/TrainNumber/<TrainNumber>/",
            success: function(data) {
                console.log(data.Route);

                let textblob;
                for (let i = 0; i < data.Route.length; i++) {
                    textblob = textblob + '<tr><td>${data.Route[i].StationName}</td><td>${data.Route[i].ArrivalTime}</td><td>${data.Route[i].DepartureTime}</td><td>${data.Route[i].Distance}kms</td></tr>';
                    // console.log(data.Trains[i].TrainName);
                }

                $('#display_station').html(`<
                                        table class = "table" >
                                        
                                        <tr >
                                        <th> Station Name < /th> 
                                        <th> Arrival Time < /th> 
                                        <th> Departure Time < /th> 
                                        <th >Distance Travelled < /th> 
                                        </tr>
                                        $ { textblob }
                                        </table>
                                        `);
            },
            error: function(error) {
                console.log(error);
                alert("error occured");
            }
        })
    })
});