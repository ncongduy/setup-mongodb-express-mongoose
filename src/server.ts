import app from './app';
import { connectDatabase } from './db/db';

//Check if data connected
connectDatabase()
  .then(() => console.log('Server connected to database.'))
  .catch((err) => console.log('Server can not connect to database', err));

app.listen(app.get('port'), () => {
  console.log(`App is running on ${process.env.NODE_ENV} on port ${process.env.PORT}`);
});
