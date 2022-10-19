module.exports = (sequelize, DataTypes) => {
  // schema for the user table....separate schema for each table
  const Organization = sequelize.define(
      'Organization', {
      id: {
          type: DataTypes.NUMBER(20),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id'
      },
      orgId: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: false,
        field: 'orgId'
      },
      name: {
          type: DataTypes.STRING(45),
          allowNull: false,
          primaryKey: false,
          field: 'name'
      },
     }, {
      timestamps: false,
      tableName: 'organizations'
  }
  );
  return Organization;
} 