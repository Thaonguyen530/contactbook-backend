const config = {
    app: {
        port: process.env.PORT || 8080,
    },
db: {
    url: process.env.MONGODB_URL || "mongodb://localhost:27017/contacbook"
}

};

module.exports = config;