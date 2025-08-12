const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                API_KEY: JSON.stringify(process.env.API_KEY || 'default-api-key'),
                API_URL: JSON.stringify(process.env.API_URL || 'http://app:8081/api')
            }
        })
    ]
};