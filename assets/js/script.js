const boxForm = document.querySelector(".box-form");
const form = boxForm.querySelector("#form");
const btnSubmit = document.querySelector("#btn-login");

btnSubmit.addEventListener("click", () => {
  const username = boxForm.querySelectorAll("#input")[0].value;
  const pass = boxForm.querySelectorAll("#input")[1].value;

  if (username == "221011400668" && pass == "unpam#400668") {
    Swal.fire({
      icon: 'success',
      title: 'Berhasil',
      text: 'Selamat datang Restu Muhamad',
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Gagal',
      text: 'Silahkan diperiksa kembali',
    })
  }
});
