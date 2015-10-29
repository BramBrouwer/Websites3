function boardcontroller() {

    //board
    this.generatealliedboard = function () {
        var Atable = $("#alliedboard");
        console.log(Atable);
        var outer;
        var inner;
        for (outer = 0; outer < 10; outer++) {
            {
                var row = $('<tr>');  //create 10 rows
                for (inner = 0; inner < 10; inner++) {
                    var cell = $('<td>'); //add 10 td's
                    cell.data("field", new FieldCell(inner, outer, "free"));
                    cell.addClass("bs_alliedtd");
                    row.append(cell);
                }
                Atable.append(row);


            }
        }


    }

    this.generateenemyboard = function () {

        var Etable = $("#enemyboard");
        var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        var outer;
        var inner;
        for (outer = 0; outer < 10; outer++) {
            {
                //create 10 rows
                var row = $('<tr>');
                for (inner = 0; inner < 10; inner++) {  //add 10 td's

                    var cell = $('<td>');
                    //change alpha[inner] naar inner om puur numerieke coordinaten te gebruiken
                    cell.data("field", new FieldCell(inner, alpha[outer], "free"));
                    cell.addClass("bs_enemytd");
                    row.append(cell);
                }
                Etable.append(row);


            }
        }

    }
}