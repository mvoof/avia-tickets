import api from './apiService';

api
  .countries()
  .then((countries) => console.log(countries))
  .catch((err) => console.log(err.message));
