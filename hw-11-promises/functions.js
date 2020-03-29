function createChineseChar(){
    // return new Promise((resolve, _) => {
    //     setTimeout(() => {
    //         const sign = String(Date.now()).slice(-length);
    //         return resolve(String.fromCharCode(sign));
    //     }, time);
    // })
    const now = Date.now();
    const char = now.toString().substr(now.length-5);
    return String.fromCharCode(char);
}

module.exports = {createChineseChar}