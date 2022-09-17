const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async emotion => {
  try {
    const IXX = await promiseTheaterIXX();
    const VGC = await promiseTheaterVGC();

    return [...IXX, ...VGC].filter(element => element.hasil === emotion).length;
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  promiseOutput,
};
