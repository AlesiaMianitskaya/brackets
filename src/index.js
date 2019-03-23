module.exports = function check(str, bracketsConfig) {
  let opened = [],
    closed = [];

  bracketsConfig.forEach(bracket => {
    opened.push(bracket[0]);
    closed.push(bracket[1]);
  });

  console.log("heheh  " + opened);
  console.log("heheh  " + closed);

  let matchingOpeningBracket, character;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    character = str[i];

    if (closed.indexOf(character) > -1) {
      matchingOpeningBracket = opened[closed.indexOf(character)];
      if (stack.length == 0 || stack.pop() != matchingOpeningBracket) {
        return false;
      }
    } else {
      stack.push(character);
    }
  }

  return stack.length == 0;
};
