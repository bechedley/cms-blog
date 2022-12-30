const { User } = require("../models");

module.exports = {
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()
            }`;
    },
   
    format_uppercase: (text) => {
        return `${text.toUpperCase()}`;
    },

    format_author: (data) => {

        if (data == User.id) {
        return User.username;
    }},

    format_commentor: (data) => {

        if (data == userData.id) {
        return User.username;
    }},

    ifCommentEdit: (data) => {

        if (data == userData.id) {
            return true;
        } else {
            return false;
        }
    },

    ifPostEdit: (data) => {

        if (data == userData.id) {
            return true;
        } else {
            return false;
        }
    }

};
