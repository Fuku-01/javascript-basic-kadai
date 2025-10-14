const date = new Date ();
const options = {
  year : "numeric",
  month : "long",
  day : "numeric"
};

console.log(date.toLocaleDateString(undefined, options));