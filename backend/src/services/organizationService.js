const sequilize = require('sequelize');
const db = require('../models/index');
const { Organization } = db.sequelize.models;
const {v4: uuid} = require('uuid');

const addOrganization = async (req, res) => {
  try {  
    const createOrg = {
      name : req.body.name,
      orgId: uuid()
    }
    console.log('inside service', createOrg);
    const orgData = await Organization.create(createOrg);
    return { status: "success", data: orgData };
  } catch (error) {
    return { status: "error", message: "unable to add Organization"}
  }
}

module.exports = {
  addOrganization
}