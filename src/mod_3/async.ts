// get todoes

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodoes = async (): Promise<ITodo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return data;
};

const getTodoData = async():Promise<void> => {
  const res = await getTodoes();
  console.log(res)
}

getTodoData();

// mocking
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data found";
    if (data) {
      resolve(data);
    }
    reject("Failed to fetch!");
  });
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    }
    reject(false);
  });
};

type dataType = {
  data: string;
};

const makePromiseObj = (): Promise<dataType> => {
  return new Promise<dataType>((resolve, reject) => {
    const data: dataType = { data: "Data found" };
    if (data) {
      resolve(data);
    }
    reject("Failed to fetch!");
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

const getPromiseBoolData = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};

const getPromiseObjData = async (): Promise<dataType> => {
  const data = await makePromiseObj();
  return data;
};
