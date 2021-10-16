import axios from "axios";
import qs from "qs";
const FIREBASE_DOMAIN = "https://practice-e56ad-default-rtdb.firebaseio.com";
const BACKEND_DOMAIN = "http://localhost:8000";
export async function getAllStudents() {
  const response = await fetch(`${FIREBASE_DOMAIN}/students.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedStudents = [];

  for (const key in data) {
    if (data[key]) {
      const studentObj = {
        id: key,
        ...data[key],
      };

      transformedStudents.push(studentObj);
    }
  }

  return transformedStudents;
}
// export async function getAllStudents() {
//   const response = await fetch(`${BACKEND_DOMAIN}/api/students`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not fetch quotes.");
//   }
//   return data;
// }
// export async function getStudentById(id) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/students/${id}.json`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not fetch quotes.");
//   }

//   const loadedStudent = {
//     id: id,
//     ...data,
//   };
//   return loadedStudent;
// }
export async function getStudentById(id) {
  const response = await fetch(`${BACKEND_DOMAIN}/api/students/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}
export async function addStudent(request) {
  const response = await axios.post(
    `${BACKEND_DOMAIN}/api/students`,

    qs.stringify(request)
  );
  console.log(JSON.stringify(request));
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}
