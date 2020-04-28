/* input = 2
output = ['rr','rp','rs','pr','pp','ps','sr','sp','ss']
 */

let rps = function (rounds) {
    let results = [];
    let possibilities = ['r','p','s'];

    let play = function (playedSoFar, rounds) {
        if (rounds === 0){
            results.push(playedSoFar);
            return
        }
        for (let i = 0; i < 3; i++){
            play(playedSoFar + possibilities[i], rounds -1)
        }
    }
    play('', rounds);
    return results;

};

let maple = rps(1);
maple;