// null
const serachName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log("Searching...");
  }
};

serachName(null);

// unknown
const getfMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed}`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed} ${unit}`);
  }
};
getfMyCarSpeed(10);
getfMyCarSpeed("10 km^-1");

// never type
function throwErr(message: string): never {
  throw new Error(message);
}

throwErr("Something went wrong!");
