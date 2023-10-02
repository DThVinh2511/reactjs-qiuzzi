// Hàm lấy cookie

export const getCookie = (cname) => {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for(let i = 0; i < ca.length; i++) {
    var c = ca[i];
    while(c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if(c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
} 

// Hết hàm lấy cookie
// Hàm tạo cookie
export const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
// Hết hàm tạo cookie

// Hàm xóa cookie
export const deleteCookie = (cname) => {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}
// Hết hàm xóa cookie

// Hàm xóa hết cookie
export const deleteAllCookie = () => {
  const cookies = document.cookie.split(";");

  for(let i = 0; i< cookies.length; i++) {
    const cookie = cookies[i];
    const x = cookie.indexOf("=");
    const name = x > -1 ? cookie.substr(0, x) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
// Hết hàm xóa hết cookie