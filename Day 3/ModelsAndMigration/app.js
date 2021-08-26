const { sequelize } = require('./models');

async function main() {
  console.log('Server up on http://localhost:5000');
  await sequelize.authenticate();
  console.log('Database Connected!');
}
main();
