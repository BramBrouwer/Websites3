function shipcontroller()
{


var ships = [];//add items with push


    this.getships = function () {
        ships.push(new Ship('H', 5, "swaggeroni", 1));
        ships.push(new Ship('H', 3, 'get memed on', 2));
        ships.push(new Ship('H', 4, "cool schip", 3));
        ships.push(new Ship('H', 4, "inhale my dong", 4));
        ships.push(new Ship('H', 2, "kekkeroni", 5));
        ships.push(new Ship('H', 2, "1v1 me de_dust", 6));
    }

    this.drawdock = function () {
        var list = $("#shiplist");
        //add ships by length
        ships.forEach(function (entry) {
            //create listitem
            var listitem = $('<li>');
            listitem.addClass("list-group-item");

            //update badge
            var badge = $('<span>');
            badge.text(entry.length);
            badge.addClass("badge");

            var alink = $('<a href="#">');
            alink.text(entry.name);
            $(alink).attr('data-id', entry.id);

            listitem.append(badge);
            listitem.append(alink);
            list.append(listitem);

        });

        //drawing the draggable ships
        ships.forEach(function (entry) {
            var divitem = $('<div>');
            divitem.addClass("pbox");
            //this becomes ships
            divitem.text(entry.length);
            $(divitem).attr('ID', entry.id);

            list.append(divitem);
        });

        $(document).ready(function () {
            $('#shiplist').on('click', 'a', function () {
                if($(this).closest('li').hasClass('current')) return; $('.current').not($(this).closest('li').addClass('current')).removeClass('current');
                // fade out all open subcontents
                $('.pbox:visible').hide(600);
                // fade in new selected subcontent
                $('.pbox[id=' + $(this).attr('data-id') + ']').show(600);
            }).find('a:first').click();
        });
    }
}
