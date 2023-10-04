// promise creation
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB Calls, cryptoGraphy, network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  //
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  //
  setTimeout(() => {
    resolve({ userName: "shubham", email: "shubham@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "shubham", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("finally either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUser() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );
    console.log(response);
    const data = await JSON.parse(response);
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUser();
