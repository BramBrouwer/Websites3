
function FieldCell(x,y,state)
{    var self = this;
    this.x = x;
    this.y = y;
    this.rekt = false;
}

function Ship(axis,length,name, id)
{
    var self = this;
    this.axis = axis;
    this.length = length;
    this.name = name;
    this.id = id;
}