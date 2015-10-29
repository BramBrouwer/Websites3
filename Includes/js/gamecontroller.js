function gamecontroller(){
    var self = this;


    this.loadgames = function() {
        // Clear the games table

        maincontroller.apicontroller.sendAjaxRequest("/users/me/games", "GET", function (games) {
            console.log(games);
            self.updatelist(games);
        });
    };

    this.deletegames = function()
    {

    };




    this.updatelist = function(gamelist){

        //var game = ["spel1","spel1","spel1","spel1","spel1","spel1"];
        var list = gamelist;
        var tablebody = $('#gamelist');
            tablebody.empty();
        gamelist.forEach(function (entry) {
            //create listitem
            var tablerow = $('<tr>');

            //set id
            var id = $('<td>');
            id.text(entry["_id"]);
            tablerow.append(id);

            //set status
            var status = $('<td>');
            status.text(entry["status"]);
            tablerow.append(status);

            //set opponent
            var opponent = $('<td>');
            opponent.text(entry["enemyName"]);
            tablerow.append(opponent);

            // add classes
            id.addClass("table");
            status.addClass("table");
            opponent.addClass("table");

            tablebody.append(tablerow);
        });
    };


    //todo make this work
    this.addAIgame = function(handlerCallback)
    {
        maincontroller.apicontroller.sendAjaxRequest("/games/AI", "GET", function(game)
        {
            if (typeof game["msg"] !== "undefined")
            {
                handlerCallback(game, maincontroller.ErrorCode.UNKNOWN_ERROR);
            }
            else
                handlerCallback(game, maincontroller.ErrorCode.NO_ERROR);
        });
    };




  //listeners
    $('#refreshgames').click(function(){
self.loadgames();
    });


    $('#deletegames').click(function(){
        self.loadgames();
    });


    $('#addAIgame').click(function(){
        self.addAIgame(function(game, errorCode)
        {
            if (errorCode === maincontroller.ErrorCode.NO_ERROR)
            {
                self.loadgames();
            }
            else
                alert("Error while requesting an AI game. " + mainController.getErrorMessage(errorCode));
        });
    });


}
