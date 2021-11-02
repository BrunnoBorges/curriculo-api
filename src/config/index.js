module.exports = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        connectionString: process.env.MONGO_DB
    }
}