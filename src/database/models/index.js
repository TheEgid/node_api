import R from 'ramda';
import Sequelize from 'sequelize';
import path from 'path';
import rqAll from 'require-all';
import config from '../config/config';

class DatabaseCore {
  async startConnection() {
    const sequelize = new Sequelize(config.database, config.username, config.password, config);
    await sequelize.authenticate();
    this.initModels(sequelize);
    return sequelize;
  }

  // eslint-disable-next-line class-methods-use-this
  initModels(sequelize) {
    const files = rqAll(path.join(__dirname, './'));
    console.log(files);
    const models = R.mapObjIndexed(
      (model) => R.prop('default', model).init(sequelize, Sequelize),
      files,
    );

    const startAssociation = R.compose(
      R.forEach((model) => model.associate(models)),
      R.filter((model) => typeof model.associate === 'function'),
      R.values,
    );

    startAssociation(models);
    // eslint-disable-next-line no-return-assign
    R.forEachObjIndexed((model, modelName) => (global[modelName] = model), models);

    return models;
  }
}

const db = new DatabaseCore();
export default db;
