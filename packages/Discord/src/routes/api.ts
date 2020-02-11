exports.actions = {
    example: {
        function: (message:any) => {
            if (message.type === "post") {
                return {status: 200, message: "This should work"};
            }
            else {
                return {status: 200, message: "This didnt work"};
            }
        }
    },
    runaction: {
        function: (message:any) => {
            if (message.type === "post") {
                return {status: 200, message: "This should work"};
            }
            else {
                return {status: 200, message: "This didnt work"};
            }
        }
    }
};
