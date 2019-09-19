'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(1234),
      allowNull: false
    },
    topics: DataTypes.ARRAY(DataTypes.STRING),
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
