function apicontroller() {
   var self = this;
    this.server = "https://zeeslagavans2.herokuapp.com";
    this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImJicm91d2VyNUBzdHVkZW50LmF2YW5zLm5sIg.Q6EkYPe_0bb-pZRHlsVUcyWSACjc7fpZ7gFGFZLX65Y";


    this.sendAjaxRequest = function (request, requestType, dataHandlerCallback) {
        $.ajax(
            {
                url: self.server + request + "?token=" + self.token,

                type: requestType,
                success: function (data, textStatus, jqXHR) {
                    dataHandlerCallback(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("ajax request error",textStatus,errorThrown);

                }
            });
    };

    this.sendAjaxRequestWithData = function (request, requestType, data, dataHandlerCallback) {
        $.ajax(
            {
                url: self.server + request + "?token=" + self.token,
                type: requestType,
                data: data,
                success: function (data, textStatus, jqXHR) {
                    dataHandlerCallback(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("ajax request error",textStatus,errorThrown);

                }
            });
    };

}