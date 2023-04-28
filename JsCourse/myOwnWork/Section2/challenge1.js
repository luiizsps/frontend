const calcAverage = (scores) => (scores[0] + scores[1] + scores[2]) / 3;

function checkWinner(averageScoreKoalas, averageScoreDolphins) {
  if (averageScoreKoalas >= 2 * averageScoreDolphins)
    console.log(
      `Koalas wins!! (${averageScoreKoalas} x ${averageScoreDolphins})`
    );
  else if (averageScoreDolphins >= 2 * averageScoreKoalas)
    console.log(
      `Dolphins wins!! (${averageScoreDolphins} x ${averageScoreKoalas})`
    );
  else console.log(`That was a draw!`);
}

averageScoreDolphins = calcAverage([100, 20, 50]);
averageScoreKoalas = calcAverage([100, 20, 50]);

checkWinner(averageScoreKoalas, averageScoreDolphins);
