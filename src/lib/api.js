const FIREBASE_DOMAIN = "https://practice-e56ad-default-rtdb.firebaseio.com";

export async function getAllStudents() {
  const response = await fetch(`${FIREBASE_DOMAIN}/students.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedStudents = [];

  for (const key in data) {
    const studentObj = {
      id: key,
      ...data[key],
    };

    transformedStudents.push(studentObj);
  }

  return transformedStudents;
}
