import {
  BLOGS,
  EVENTS,
  TEAM,
  MENTORS,
  MENTORSDOCS,
  FAQS,
  BRANCH,
  INTERESTS,
  BLOGCATEGORY,
  GROUPS,
  RAISEQUERY,
} from "api/constants";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Blogs = function () {
  return new Promise((resolve, reject) => {
    fetch(BLOGS)
      .then((data) => data.json())
      .then((jsonData) => resolve(jsonData))
      .catch((e) => reject(e));
  });
};
const BlogCategory = function () {
  return new Promise((resolve, reject) => {
    fetch(BLOGCATEGORY)
      .then((data) => data.json())
      .then((jsonData) => resolve(jsonData))
      .catch((e) => reject(e));
  });
};
const Events = function () {
  return new Promise((resolve, reject) => {
    fetch(EVENTS)
      .then((data) => data.json())
      .then((jsonData) => resolve(jsonData))
      .catch((e) => reject(e));
  });
};
const Team = function () {
  return new Promise((resolve, reject) => {
    fetch(TEAM)
      .then((data) => data.json())
      .then((jsonData) => resolve(jsonData))
      .catch((e) => reject(e));
  });
};
const Mentors = function () {
  return new Promise((resolve, reject) => {
    fetch(MENTORS)
      .then((data) => data.json())
      .then((jsonData) => resolve(jsonData))
      .catch((e) => reject(e));
  });
};

const MentorsDocs = function () {
  return new Promise((resolve, reject) => {
    fetch(MENTORSDOCS)
      .then((data) => data.json())
      .then((jsonData) => resolve(jsonData))
      .catch((e) => reject(e));
  });
};
const Faqs = function () {
  return new Promise((resolve, reject) => {
    fetch(FAQS)
      .then((data) => data.json())
      .then((jsonData) => resolve(jsonData))
      .catch((e) => reject(e));
  });
};
const Branch = function () {
  return new Promise((resolve, reject) => {
    fetch(BRANCH)
      .then((data) => data.json())
      .then((jsonData) => resolve(jsonData))
      .catch((e) => reject(e));
  });
};
const Interests = function () {
  return new Promise((resolve, reject) => {
    fetch(INTERESTS)
      .then((data) => data.json())
      .then((jsonData) => resolve(jsonData))
      .catch((e) => reject(e));
  });
};
const Groups = function () {
  return new Promise((resolve, reject) => {
    fetch(GROUPS)
      .then((data) => data.json())
      .then((jsonData) => resolve(jsonData))
      .catch((e) => reject(e));
  });
};
const PostQuery = (data) => {
  return axios.post(RAISEQUERY, data);
};

const CreateInterests = (interestData) => {
  return axios.post(INTERESTS, interestData);
};

const postMentorFormData = (postData) => {
  const {
    name,
    year,
    enrollno,
    branch,
    interest,
    email,
    mobile,
    image,
    resume,
    facebook,
    linkedin,
    groups,
    achievements,
    internships,
    career,
  } = postData;
  let formData = new FormData();
  formData.append("name", name);
  formData.append("year", year);
  formData.append("enrollno", enrollno);
  formData.append("branch", branch);
  formData.append("email", email);
  formData.append("mobile", mobile);
  formData.append("photo", image);
  formData.append("resume", resume);
  formData.append("facebook", facebook);
  formData.append("linkedin", linkedin);
  formData.append("career", career);

  // We need to add each interest separately since
  // DRF reads form data this way. An array can't be
  // sent directly
  interest.forEach((interest_id) => {
    formData.append("interest", interest_id);
  });

  groups.forEach((group_id) => {
    formData.append("groups", group_id);
  });

  // This is also array data but this is being explicitly handled
  // on backend with json parse.
  formData.append("achievements", JSON.stringify(achievements));
  formData.append("interns", JSON.stringify(internships));

  return axios.post(MENTORS, formData);
};

const CreateMentor = (mentorData) => {
  const interestToCreate = mentorData.interest.filter(
    (i) => typeof i === "string"
  );
  const existingInterestIds = mentorData.interest.filter(
    (i) => typeof i === "number"
  );
  const interestData = {
    interests: interestToCreate,
  };

  return new Promise((resolve, reject) => {
    if (interestToCreate.length > 0) {
      CreateInterests(interestData)
        .then((response) => {
          const createInterestIds = response.data.interest_ids;
          const updatedInterestIds = [
            ...existingInterestIds,
            ...createInterestIds,
          ];
          mentorData.interest = updatedInterestIds; // This mutation should be avoided
          postMentorFormData(mentorData)
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              reject(error.response);
            });
        })
        .catch((error) => {
          reject(error.response);
        });
    } else {
      postMentorFormData(mentorData)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error.response);
        });
    }
  });
};

export const getBlogs = Blogs;
export const getEvents = Events;
export const getTeam = Team;
export const getMentors = Mentors;
export const getMentorsDocs = MentorsDocs;
export const getFAQs = Faqs;
export const getBranch = Branch;
export const getInterests = Interests;
export const getGroups = Groups;
export const getBlogCategory = BlogCategory;
export const postQuery = PostQuery;
export const createMentor = CreateMentor;
