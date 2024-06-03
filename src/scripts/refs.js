const myFrames = document.querySelector('.js-my-frames');
myFrames.remove();

export const screens = {
  main: myFrames.children[0],
  mine: myFrames.children[1],
  friends: myFrames.children[2],
  airdrop: myFrames.children[3],
  earn: myFrames.children[4],
};
