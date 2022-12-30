module.exports = {
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()
            }`;
    },
   
    format_uppercase: (text) => {
        return `${text.toUpperCase()}`;
    },

    // ifCommentEdit: (data) => {

    //     if (data == req.session.user_id) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // },

    if_owner: (req, data) => {
        if (req.session.username == data) {
            return true;
        }
    }

};
