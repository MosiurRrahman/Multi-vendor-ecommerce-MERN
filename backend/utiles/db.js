const mondgoose = require("mongoose");

module.exports.dbConnect = async () => {
    try {
        await mondgoose.connect(process.env.DB_URL, { useNewUrlParser: true })
        console.log("database--- connect");
    } catch (error) {
        console.log(error.message);
    }
}