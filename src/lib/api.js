import axios from "axios";
import moment from "moment";
// const FIREBASE_DOMAIN = "https://practice-e56ad-default-rtdb.firebaseio.com";

const BACKEND_DOMAIN = "http://localhost:8000";
// const BACKEND_DOMAIN = "";
const toStr = (arr) => {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i] + " ";
  }
  return res.trim();
};
// Học sinh
export async function getAllStudents() {
  try {
    const response = await axios.get(`${BACKEND_DOMAIN}/api/auth/hoc-sinh`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    const data = await response.data;

    for (var i = 0; i < data.length; i++) {
      data[i].id = data[i].maHS;
    }
    return data;
  } catch (error) {
    window.location.reload();
  }
}
export async function getStudentById(id) {
  try {
    const response = await axios.get(`${BACKEND_DOMAIN}/api/hoc-sinh/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });

    const data = await response.data;
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Chưa đăng nhập");
    }
  }
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
  try {
    const response = await axios.post(
      `${BACKEND_DOMAIN}/api/hoc-sinh`,

      formData
    );
    const data = await response.data;

    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Chưa đăng nhập");
    }
    if (error.response.status === 422) {
      throw new Error(
        error.response.data.message ||
          "Vui lòng kiểm tra thông tin các trường đã nhập"
      );
    }
  }
}

export async function editStudent(request) {
  var params = new URLSearchParams();
  params.append("hoTen", request.hoTen);
  params.append("gioiTinh", request.gioiTinh);
  params.append(
    "ngaySinh",
    moment(request.ngaySinh, "DD/MM/YYYY").format("YYYY-MM-DD")
  );
  params.append("diaChi", request.diaChi);
  params.append("token", localStorage.getItem("accessToken"));
  try {
    const response = await axios.put(
      `${BACKEND_DOMAIN}/api/hoc-sinh/${request.maHS}`,
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const data = await response.data;

    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Chưa đăng nhập");
    }
    if (error.response.status === 422) {
      throw new Error(
        error.response.data.message ||
          "Vui lòng kiểm tra thông tin các trường đã nhập"
      );
    }
  }
}
// Lớp
export async function getAllClasses() {
  const response = await axios.get(`${BACKEND_DOMAIN}/api/lop`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  try {
    const data = await response.data;

    for (var i = 0; i < data.length; i++) {
      data[i].id = data[i].maLop;
    }
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Chưa đăng nhập");
    }
  }
}

export async function addClass(request) {
  var formData = new FormData();
  formData.append("tenLop", request.tenLop);
  formData.append("maKhoi", request.maKhoi);
  formData.append("token", localStorage.getItem("accessToken"));
  try {
    const response = await axios.post(`${BACKEND_DOMAIN}/api/lop`, formData);
    const data = await response.data;

    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Chưa đăng nhập");
    }
  }
}
export async function getClassesById(id) {
  try {
    const response = await axios.get(
      `${BACKEND_DOMAIN}/api/lop/${id[0]}/${id[1]}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      }
    );
    const data = await response.data;
    for (var i = 0; i < data.hocSinh.length; i++) {
      data.hocSinh[i].id = data.hocSinh[i].maHS;
    }
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Chưa đăng nhập");
    }
  }
}
export async function getStudentsEmpty(id) {
  try {
    const response = await axios.get(
      `${BACKEND_DOMAIN}/api/hoc-sinh-trong/${id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      }
    );
    const data = await response.data;
    for (var i = 0; i < data.length; i++) {
      data[i].id = data[i].maHS;
    }
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Chưa đăng nhập");
    }
  }
}
export async function addStudentsToClass(request) {
  var params = new URLSearchParams();
  params.append("maHS", JSON.stringify(request.maHS));
  params.append("token", localStorage.getItem("accessToken"));
  try {
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
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Chưa đăng nhập.");
    }
  }
}

export async function delStudentsFromClass(request) {
  var params = new URLSearchParams();
  params.append("maHS", JSON.stringify(request.maHS));
  params.append("token", localStorage.getItem("accessToken"));
  try {
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
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Not auth.");
    }
  }
}
// Chương trình học
export async function getAllCourses() {
  try {
    const response = await axios.get(`${BACKEND_DOMAIN}/api/cth`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    const data = await response.data;
    for (var i = 0; i < data.length; i++) {
      data[i].id = data[i].maCTH;
    }
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error("Chưa đăng nhập");
    }
  }
}
export async function addCourse(request) {
  var params = new URLSearchParams();
  params.append("maMH", request.maMH);
  params.append("maKhoi", request.maKhoi);
  params.append("heSo", request.heSo);
  params.append("token", localStorage.getItem("accessToken"));
  try {
    const response = await axios.post(`${BACKEND_DOMAIN}/api/cth`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = await response.data;
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Chưa đăng nhập");
    }
    if (error.response.status === 422) {
      throw new Error(
        error.response.data.message || "Các trường bị sai thông tin"
      );
    }
  }
}
export async function editCourse(request) {
  var params = new URLSearchParams();
  params.append("maMH", request.maMH);
  params.append("maKhoi", request.maKhoi);
  params.append("heSo", request.heSo);
  params.append("token", localStorage.getItem("accessToken"));
  try {
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
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Chưa đăng nhập");
    }
    if (error.response.status === 422) {
      throw new Error(
        error.response.data.message || "Các trường bị sai thông tin"
      );
    }
  }
}
//  Môn học
export async function getAllSubjects() {
  try {
    const response = await axios.get(`${BACKEND_DOMAIN}/api/mon-hoc`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    const data = await response.data;
    for (var i = 0; i < data.length; i++) {
      data[i].id = data[i].maMH;
    }
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Chưa đăng nhập");
    }
  }
}

export async function addSubject(request) {
  var formData = new FormData();
  formData.append("tenMH", request.tenMH);
  formData.append("diemDat", request.diemDat);
  formData.append("token", localStorage.getItem("accessToken"));
  try {
    const response = await axios.post(
      `${BACKEND_DOMAIN}/api/mon-hoc`,
      formData
    );
    const data = await response.data;
    return data;
  } catch (error) {
    if (error.response) {
    }
    console.log(error.response);
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Not auth.");
    }
    if (error.response.status === 422) {
      throw new Error(
        error.response.data.message || "Các trường bị sai thông tin"
      );
    }
  }
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
  try {
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
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(error.response.data.message || "Chưa đăng nhập");
    }
    if (error.response.status === 422) {
      throw new Error(
        error.response.data.message || "Các trường bị sai thông tin"
      );
    }
  }
}
// Bảng điểm
export async function getAllTranscripts(info) {
  const response = await axios.get(
    `${BACKEND_DOMAIN}/api/bang-diem/${info.maHK}/${info.maLop}/${info.maMH}`,
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
    data[i].diemMieng = toStr(data[i].diemMieng);
    data[i].diem15P = toStr(data[i].diem15P);
    data[i].diem1Tiet = toStr(data[i].diem1Tiet);
    data[i].diemHK = toStr(data[i].diemHK);
  }
  return data;
}
export async function editTranscript(request) {
  let response;
  let params = new URLSearchParams();
  params.append("diemMieng", JSON.stringify(request.diemMieng));
  params.append("diem15P", JSON.stringify(request.diem15P));
  params.append("diem1Tiet", JSON.stringify(request.diem1Tiet));
  params.append("diemHK", JSON.stringify(request.diemHK));
  params.append("token", localStorage.getItem("accessToken"));
  if (!request.maBD) {
    params.append("maMH", JSON.stringify(request.maMH));
    params.append("maQTH", JSON.stringify(request.maQTH));
    response = await axios.post(`${BACKEND_DOMAIN}/api/bang-diem`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } else {
    response = await axios.put(
      `${BACKEND_DOMAIN}/api/bang-diem/${request.maBD}`,
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  }
  const data = await response.data;
  if (response.status === 401) {
    throw new Error("Chưa đăng nhập");
  }

  for (var i = 0; i < data.length; i++) {
    data[i].id = data[i].maHS;
  }
  return data;
}
// Tất cả lớp, học kì, môn học
export async function getAllClassesSemSub() {
  const response = await axios.get(`${BACKEND_DOMAIN}/api/lop-hk-mh`, {
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
// Tất cả lớp, môn học
// Tham số
export async function getAllParams() {
  const response = await axios.get(`${BACKEND_DOMAIN}/api/tham-so`, {
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
export async function editParams(request) {
  let params = new URLSearchParams();
  params.append("thamSo", JSON.stringify(request));
  const response = await axios.put(`${BACKEND_DOMAIN}/api/tham-so`, params, {
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
// Người dùng
export async function login(request) {
  var formData = new FormData();
  formData.append("email", request.email);
  formData.append("password", request.password);
  try {
    const response = await axios.post(
      `${BACKEND_DOMAIN}/api/auth/login`,
      formData
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      throw new Error(
        error.respone.data.message || "Thông tin đăng nhập không chính xác"
      );
    }
  }
}
export async function getUser(request) {
  var formData = new FormData();
  formData.append("token", localStorage.getItem("accessToken"));
  try {
    const response = await axios.post(
      `${BACKEND_DOMAIN}/api/auth/me`,
      formData
    );
    const data = await response.data;
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error(
        error.response.data.message || "Cần đăng nhập để sử dụng"
      );
    }
  }
}
