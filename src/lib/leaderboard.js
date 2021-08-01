import {
  getData,
  postData,
} from './async-data';

const getScores = async () => {
  const data = await getData();

  const leaderboard = data.result;
  return leaderboard;
};

const postScore = async (newName, newScore) => {
  const scoreObj = {
    user: newName,
    score: newScore,
  };
  postData(scoreObj);
};

export {
  getScores, postScore,
};
