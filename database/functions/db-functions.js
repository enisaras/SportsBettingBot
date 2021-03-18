/*usage: findUser(firstname, function(users))*/
//Some functions to add: isDatabaseReady, removeUser, 
function findUser(searchParams,callBack)
{
    db.find({searchParams : firstname}, function (err, docs)
    {
        callBack(docs);
    });
};
function createUser(credentials, callback)
{
  const {firstname, user_id, amount} = credentials;
  this.db.insert({
    firstname,
    user_id,
    amount},
  (error, user) => {
    if(error){
      return callback(null, error);}
    return callback({username});
    }
  );
}
module.exports.findUser = findUser;
module.exports.insertUser = createUser;