// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = function (robot) {
}

  // robot.hear(/badger/i, function (res) {
  //   res.send "Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS"
  // });
  //
  // robot.respond(/open the (.*) doors/i, function (res) {
  //   var doorType = res.match[1];
  //   if (doorType === "pod bay") {
  //     res.reply("I'm afraid I can't let you do that.");
  //   } else {
  //     res.reply("Opening " + doorType + " doors");
  //   }
  // });
  //
  // robot.hear(/I like pie/i, function (res) {
  //   res.emote("makes a freshly baked pie");
  // });
  //
  // var lulz = ['lol', 'rofl', 'lmao'];
  //
  // robot.respond(/lulz/i, function (res) {
  //   res.send(res.random lulz);
  // });
  //
  // robot.topic(function (res) {
  //   res.send("//{res.message.text}? That's a Paddlin'");
  // });
  //
  //
  // var enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you']
  // var leaveReplies = ['Are you still there?', 'Target lost', 'Searching']
  //
  // robot.enter(function (res) {
  //   res.send(res.random enterReplies);
  // });
  // robot.leave(function (res) {
  //   res.send(res.random leaveReplies);
  // });
  //
  // var answer = process.env.HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING
  //
  // robot.respond(/what is the answer to the ultimate question of life/, function (res) {
  //   if (!answer) {
  //     res.send("Missing HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING in environment: please set and try again");
  //   } else {
  //     res.send("//{answer}, but what is the question?");
  //   }
  // });
  //
  // robot.respond(/you are a little slow/, function (res) {
  //   setTimeout(function () {
  //     res.send "Who you calling 'slow'?"
  //   }, 60 * 1000);
  // });
  //
  // robot.respond(/have a soda/i, function (res) {
  //   // Get number of sodas had (coerced to a number).
  //   var sodasHad = robot.brain.get('totalSodas') * 1 or 0
  //
  //   if (sodasHad > 4) {
  //     res.reply("I'm too fizzy..");
  //   } else {
  //     res.reply('Sure!');
  //   }
  //   robot.brain.set('totalSodas', sodasHad+1);
  // });
  //
  // robot.respond(/sleep it off/i, function (res) {
  //   robot.brain.set('totalSodas', 0);
  //   res.reply('zzzzz');
  // });
