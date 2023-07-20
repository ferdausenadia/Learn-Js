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

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled`;
  return Promise.resolve(calender);
};
async function myMeeting() {
  try {
    const meetingDetails = await meeting;
    const calender = await addToCalender(meetingDetails);
    console.log(calender);
  } catch {
    console.log("error");
  }
}
myMeeting();
