const fs = require("fs");

const directory = '../images';


window.API = {
    getImgFile() {
      return new Promise((res, rej) => {
        const files = fs.readdirSync(directory);
        setTimeout(() => res(files), 0)
      })
    }
  }


export default {
     getImgFile: function () {
        return API.files;
   
    }
};

