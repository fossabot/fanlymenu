'use strict';

import axios from 'axios';

export default class WeatherService {
  async getWeathers() {
    const res = await axios.get('https://**.**.com/weatherdata');
    console.log(res);

    return res.data;
  }
}
