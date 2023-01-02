const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Comment model
class Comment extends Model { }

// create fields/columns for Comment model
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.TEXT("long"),
            allowNull: true,
        },
        comment_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        commentor_id: {
            type: DataTypes.STRING,
            references: {
                model: "user",
                key: "username",
                unique: false,
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "post",
                key: "id",
                unique: false,
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    }
);

module.exports = Comment;
