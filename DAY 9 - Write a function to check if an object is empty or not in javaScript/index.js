const obj = { key: 1 };

function isEmpty(obj) {
  if (Object.keys(obj).length > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(`is empty object: ${isEmpty(obj)}`);
