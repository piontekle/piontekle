'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    topics: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
