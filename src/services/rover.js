import axios from 'axios';

export default class RoverAPI {
  constructor() {
    this.baseUrl = 'https://hiring.hypercore-protocol.org/termrover'
  }

  async getLatest() {
    const response = await axios.get(`${this.baseUrl}/latest`);
    return response.data;
  }

  async getImage(index) {
    const response = await axios.get(`${this.baseUrl}/${index}`);
    return response.data;
  }

  async * getImages() {
    let index = 0;
    let response = {data: {}};
    while (response.data) {
      const image = await this.getImage(index);
      yield image;
      index++;
    }
  }
};
