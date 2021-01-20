const calculateMoneyLine = (stake, odds) => {
    //moneyline payout for positive and negative odds:
    if(odds > 0){
        profit = stake * (odds/100);
        return profit;}
    else if(odds < 0){
        profit = stake / (odds/100);
        return 0 - profit;
    }
    else{
        //Needs to message "something went terribly wrong."
        return;
    }
}
const calculateTotals = (stake, odds, over, totalPoints) => {
  //This betting odds take two options, over/under
  var profit;
  if(totalPoints > over){
    profit = stake / (odds/100);
    return Math.ceil(-profit);
  }
  else if(totalPoints < over){
    profit = stake / (odds/100);
    return Math.ceil(-profit);
  }
  else{
    return;
  }
}
const calculateSpreads = (stake, odds, spread, scoreDifference) => {
  //Need something to check if spread is covered
  //Score difference must be winner - loser
  //TODO:add code instead difference is loser - winner
  //TODO:Fix spaghetti code 
  var profit;
  if(odds > 0){
    if(scoreDifference >= spread){
    //favorite wins
      profit = stake * (odds/100);
      return profit;}
    else if(scoreDifference <= spread){
      profit = stake * (odds/100);
      return profit;} 
  }
  else if(odds < 0){
    //favorite loses
    if(scoreDifference >= spread){
    //favorite wins
      profit = stake / (odds/100);
      return -profit;}
    else if(scoreDifference <= spread){
      profit = stake / (odds/100);
      return -profit;}
  }
}