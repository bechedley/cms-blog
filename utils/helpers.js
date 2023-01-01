
module.exports = {
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()
            }`;
    },
   
    format_uppercase: (text) => {
        return `${text.toUpperCase()}`;
    },

    eq: (a, b) => {
        let v1 = a;
        let v2 = b;
        if (v1 == v2) {
            return true;
        }
    },

};
