const orgService = require('../services/organizationService');

const addOrganization = async (req, res) => {
    try{
        console.log('inside controller');
        const orgData = await orgService.addOrganization(req, res);
        return res.status(200).json(orgData.data);
    } catch (error) {
        console.log(error);
        return res.status(401).json(error);
      }
  }

  module.exports = {
      addOrganization
  }