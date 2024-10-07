import config from './apiConfig';

class Api {
  constructor(config) {
    this.url = config.url;
  }

  async countries() {
    try {
      const response = await fetch(`${this.url}/countries`);
      
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  async cities() {
    try {
      const response = await fetch(`${this.url}/cities`);

      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  async price() {}
}

const api = new Api(config);

export default api;
