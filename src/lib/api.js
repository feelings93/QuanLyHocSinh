import axios from "axios";
import moment from "moment";
// const FIREBASE_DOMAIN = "https://practice-e56ad-default-rtdb.firebaseio.com";

// const BACKEND_DOMAIN = "http://localhost:8000";
const BACKEND_DOMAIN = "";

// export async function getAllStudents() {
//   const response = await fetch(`${FIREBASE_DOMAIN}/students.json`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not fetch quotes.");
//   }

//   const transformedStudents = [];

//   for (const key in data) {
//     if (data[key]) {
//       const studentObj = {
//         id: key,
//         ...data[key],
//       };

//       transformedStudents.push(studentObj);
//     }
//   }

//   return transformedStudents;
// }
export async function getAllStudents() {
  const response = await axios.get(`${BACKEND_DOMAIN}/api/auth/hoc-sinh`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  const data = await response.data;
  if (response.status === 401) {
    throw new Error("Chưa đăng nhập");
  }
  for (var i = 0; i < data.length; i++) {
    data[i].id = data[i].maHS;
  }
  return data;
}
export async function getStudentById(id) {
  const response = await axios.get(`${BACKEND_DOMAIN}/api/hoc-sinh/${id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });

  const data = await response.data;

  if (response.status === 401) {
    throw new Error(data.message || "Not auth");
  }
  return data;
}
export async function addStudent(request) {
  var formData = new FormData();
  formData.append("hoTen", request.hoTen);
  formData.append("gioiTinh", request.gioiTinh);
  formData.append(
    "ngaySinh",
    moment(request.ngaySinh, "DD/MM/YYYY").format("YYYY-MM-DD")
  );
  formData.append("diaChi", request.diaChi);
  formData.append("token", localStorage.getItem("accessToken"));
  const response = await axios.post(
    `${BACKEND_DOMAIN}/api/hoc-sinh`,

    formData
  );
  const data = await response.data;

  if (response.status === 401) {
    throw new Error(data.message || "Not auth.");
  }

  return data;
}

export async function editStudent(request) {
  var formData = new FormData();
  formData.append("hoTen", request.hoTen);
  formData.append("gioiTinh", request.gioiTinh);
  formData.append(
    "ngaySinh",
    moment(request.ngaySinh, "DD/MM/YYYY").format("YYYY-MM-DD")
  );
  formData.append("diaChi", request.diaChi);
  formData.append("token", localStorage.getItem("accessToken"));
  const response = await axios.put(
    `${BACKEND_DOMAIN}/api/hoc-sinh/${request.maHS}`,
    formData
  );
  const data = await response.data;

  if (response.status === 401) {
    throw new Error(data.message || "Not auth.");
  }

  return data;
}
// Lớp
export async function getAllClasses() {
  const response = await axios.get(`${BACKEND_DOMAIN}/api/lop`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  const data = await response.data;
  if (response.status === 401) {
    throw new Error("Chưa đăng nhập");
  }
  for (var i = 0; i < data.length; i++) {
    data[i].id = data[i].maLop;
  }
  return data;
}

export async function addClass(request) {
  var formData = new FormData();
  formData.append("tenLop", request.tenLop);
  formData.append("maKhoi", request.maKhoi);
  formData.append("token", localStorage.getItem("accessToken"));
  const response = await axios.post(`${BACKEND_DOMAIN}/api/lop`, formData);
  const data = await response.data;

  if (response.status === 401) {
    throw new Error(data.message || "Not auth.");
  }
  return data;
}
export async function getClassesById(id) {
  const response = await axios.get(
    `${BACKEND_DOMAIN}/api/lop/${id[0]}/${id[1]}`,
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }
  );
  const data = await response.data;
  if (response.status === 401) {
    throw new Error("Chưa đăng nhập");
  }
  for (var i = 0; i < data.hocSinh.length; i++) {
    data.hocSinh[i].id = data.hocSinh[i].maHS;
  }
  return data;
}
export async function getStudentsEmpty(id) {
  const response = await axios.get(
    `${BACKEND_DOMAIN}/api/hoc-sinh-trong/${id}`,
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }
  );
  const data = await response.data;
  if (response.status === 401) {
    throw new Error("Chưa đăng nhập");
  }
  for (var i = 0; i < data.length; i++) {
    data[i].id = data[i].maHS;
  }
  return data;
}
export async function addStudentsToClass(request) {
  var params = new URLSearchParams();
  params.append("maHS", JSON.stringify(request.maHS));
  params.append("token", localStorage.getItem("accessToken"));
  const response = await axios.post(
    `${BACKEND_DOMAIN}/api/lop/${request.maLop}/${request.maHK}`,
    params,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  const data = await response.data;

  if (response.status === 401) {
    throw new Error(data.message || "Not auth.");
  }
  return data;
}

export async function delStudentsFromClass(request) {
  var params = new URLSearchParams();
  params.append("maHS", JSON.stringify(request.maHS));
  params.append("token", localStorage.getItem("accessToken"));
  const response = await axios.post(
    `${BACKEND_DOMAIN}/api/lop/xoa-hoc-sinh/${request.maLop}/${request.maHK}`,
    params,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  const data = await response.data;

  if (response.status === 401) {
    throw new Error(data.message || "Not auth.");
  }
  return data;
}
// Chương trình học
export async function getAllCourses() {
  const response = await axios.get(`${BACKEND_DOMAIN}/api/cth`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  const data = await response.data;
  if (response.status === 401) {
    throw new Error("Chưa đăng nhập");
  }

  for (var i = 0; i < data.length; i++) {
    data[i].id = data[i].maCTH;
  }
  return data;
}
export async function addCourse(request) {
  var params = new URLSearchParams();
  params.append("maMH", request.maMH);
  params.append("maKhoi", request.maKhoi);
  params.append("heSo", request.heSo);
  params.append("token", localStorage.getItem("accessToken"));
  const response = await axios.post(`${BACKEND_DOMAIN}/api/cth`, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const data = await response.data;

  if (response.status === 401) {
    throw new Error(data.message || "Not auth.");
  }
  return data;
}
export async function editCourse(request) {
  var params = new URLSearchParams();
  params.append("maMH", request.maMH);
  params.append("maKhoi", request.maKhoi);
  params.append("heSo", request.heSo);
  params.append("token", localStorage.getItem("accessToken"));
  const response = await axios.put(
    `${BACKEND_DOMAIN}/api/cth/${request.maCTH}`,
    params,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  const data = await response.data;

  if (response.status === 401) {
    throw new Error(data.message || "Not auth.");
  }
  return data;
}
//  Môn học
export async function getAllSubjects() {
  const response = await axios.get(`${BACKEND_DOMAIN}/api/mon-hoc`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  const data = await response.data;
  if (response.status === 401) {
    throw new Error("Chưa đăng nhập");
  }

  for (var i = 0; i < data.length; i++) {
    data[i].id = data[i].maMH;
  }
  return data;
}

export async function addSubject(request) {
  var formData = new FormData();
  formData.append("tenMH", request.tenMH);
  formData.append("diemDat", request.diemDat);
  formData.append("token", localStorage.getItem("accessToken"));
  const response = await axios.post(`${BACKEND_DOMAIN}/api/mon-hoc`, formData);
  const data = await response.data;

  if (response.status === 401) {
    throw new Error(data.message || "Not auth.");
  }
  return data;
}

export async function getSubjectById(id) {
  const response = await axios.get(`${BACKEND_DOMAIN}/api/mon-hoc/${id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  const data = await response.data;
  if (response.status === 401) {
    throw new Error("Chưa đăng nhập");
  }
  return data;
}

export async function editSubject(request) {
  var params = new URLSearchParams();
  params.append("tenMH", request.tenMH);
  params.append("diemDat", request.diemDat);
  params.append("token", localStorage.getItem("accessToken"));
  const response = await axios.put(
    `${BACKEND_DOMAIN}/api/mon-hoc/${request.maMH}`,
    params,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  const data = await response.data;

  if (response.status === 401) {
    throw new Error(data.message || "Not auth.");
  }
  return data;
}

export async function login(request) {
  var formData = new FormData();
  formData.append("email", request.email);
  formData.append("password", request.password);
  const response = await axios.post(
    `${BACKEND_DOMAIN}/api/auth/login`,
    formData
  );
  const data = await response.data;
  if (response.status === 401) {
    throw new Error("Thông tin đăng nhập không chính xác");
  } else if (response.status !== 200) {
    throw new Error("Đã có lỗi xảy ra");
  }
  return data;
}
export async function getUser(request) {
  var formData = new FormData();
  formData.append("token", localStorage.getItem("accessToken"));
  const response = await axios.post(`${BACKEND_DOMAIN}/api/auth/me`, formData);
  const data = await response.data;
  if (response.status === 401) {
    throw new Error("Cần đăng nhập để sử dụng");
  } else if (response.status !== 200) {
    throw new Error("Đã có lỗi xảy ra");
  }
  return data;
}
