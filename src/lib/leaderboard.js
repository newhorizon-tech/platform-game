import {
  getData,
  postData,
} from './async-data';

const getScores = async () => {
  const data = await getData();

  const leaderboard = data.result;
  // console.log(leaderboard)
  console.table(leaderboard);
  // Object.keys(leaderboard).forEach((key) => {
  //   console.log(`Player: ${leaderboard[key].user}. Score: ${leaderboard[key].score}`);
  // });
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
