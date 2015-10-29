function Maincontroller() {
    var self = this;


    this.ErrorCode =
    {
        NO_ERROR: 0,
        UNKNOWN_ERROR: 1,
        GAME_ALREADY_PENDING: 2,
        UNKNOWN_GAME: 3,
        INVALID_GAME: 4,
        NO_ACTIVE_GAME: 5
    }

    this.ErrorMessage =
    {
        0: "No error.",
        1: "Unknown error.",
        2: "You are already in queue for a new game with a player.",
        3: "Unknown game.",
        4: "Invalid game.",
        5: "No active game."
    }


//create controllers
    this.boardcontroller = new boardcontroller();
    this.shipcontroller = new shipcontroller();
    this.gamecontroller = new gamecontroller();
    this.apicontroller = new apicontroller();

    this.start = function () {

        self.boardcontroller.generatealliedboard();
        self.boardcontroller.generateenemyboard();

    self.gamecontroller.loadgames();

    }


}


