/*
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 pm",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("meeting already scheduled!"));
  }
});
/*
const addToCalender = (meetingDetails) => {
  return new Promise((resolve, reject) => {
    const calender = `${meetingDetails.name} has been scheduled`;
    resolve(calender);
  });
};
*/
/*
const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled`;
  return Promise.resolve(calender);
};
meeting
  .then(addToCalender)
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err.message);
  });
*/

const promise1 = Promise.resolve(`Promise 1 resoleved`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 resolved`);
  }, 2000);
});
Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
});
Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
