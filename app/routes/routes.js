module.exports = function(app){
    var providermaster = require('../controllers/providermaster');
    app.get('/api/user', providermaster.getRecord);
    //POST API
    app.post('/api/user ', providermaster.postRecord);
    //PUT API
    app.put('/api/user/:id', providermaster.putRecord);
    // DELETE API
    app.delete('/api/user', providermaster.deleteRecord);
};
