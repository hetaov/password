//const { finished } = require('stream');
const fs = require('fs');


function readText() {
  const stream = fs.createReadStream('./zi.txt');
  return new Promise((resolve, reject) => {
    stream.on('data', (data) => {
      let text = data.toString().split(/\s+/g);
      resolve(text);
    });
    stream.on('end', (err, data) => {
      if(err) {
        console.log(err)
        reject(err)
        return;
      }
    });
  })  
}

async function getText() {
  let text = await readText();
  //console.log(text);
  return text;
}

function getDict() {
  return '~`!1@2#3$4%5^6&7*8(9)0_-+=QqWwEeRrTtYyUuIiOoPp{[}]|\AaSsDdFfGgHhJjKkLl:;”’ZzXxCcVvBbNnMm<,?/'.split('');
}

async function start(offset) {
  let keys = '床前明月光疑是地上霜举头望明月低头思故乡';
  let dicts = getDict();
  let len = dicts.length;
  let source = await getText();
  let result = [];
  for(let i = 0; i < keys.length; i++) {
    let dictIndex = Math.floor(Math.abs(source.indexOf(keys[i])-offset)%len);
    result.push(dicts[dictIndex]);
  }
  console.log(result.join(''));
}
start(9);

/*
finished(stream, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('reading');
  }
})
const file = fs.open('./zi.txt', 'r', (error, data) => {
  if(error) {
    console.log(error);
    return;
  }
  console.log(data.toString())
});
*/
