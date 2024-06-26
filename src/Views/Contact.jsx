import React,{ useEffect }  from "react";
import "../stylesheets/contact.css";
import Link from "../Components/Link";
import Swal from "sweetalert2";
import Aos from "aos";
function Contact() {

  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  const copyEmail = () => {
    var copy = document.createElement("input");
    copy.setAttribute("value", "isr.gr1999@outlook.com");
    document.body.appendChild(copy);
    copy.select();
    document.execCommand("copy");
    document.body.removeChild(copy);
    copyAlert();
  };

  const copyAlert = () => {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      icon: "success",
      title:"Correo copiado",
      backdrop:"20px",
      background:"rgb(31, 130, 206)",
      color: "#fff",
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
  };

  return (
    <div className="container-fluid contact p-0" id="contact" data-aos="zoom-in-up">
      <div className="separation"></div>
      <div className="col-12 cont-contact">
        <div className="col-md-5 title-footer">
          <h5 className="h1">Contacto</h5>
        </div>
        <div className="line"></div>
        <div className="col-md-5 inf-contact">
          <div className="contact-social">
            <Link
              href="https://github.com/IsraelGr99-99"
              className="social"
              text=""
              icon=" fa-brands fa-github"
              ariaLabel='enlace a mi github'
            />
            <Link
              href="https://www.linkedin.com/in/isrgr/"
              className="social"
              text=""
              icon=" fa-brands fa-linkedin"
              ariaLabel='enlace al perfil de linkedin'
            />
            <Link
              href="whatsapp://send?phone=2223738823"
              className="social"
              text=""
              icon=" fa-brands fa-square-whatsapp"
              ariaLabel='enlace para enviar mensaje whatsapp'
            />
          </div>
          <div className="contact-email">
            <div className="btn-copy">
              <label htmlFor="email" className="d-none"></label>
              <input
                type="text"
                className="form-control text-copy"
                value="isr.gr1999@outlook.com"
                name="email"
                id="email"
              />
              <button aria-label="copiar correo" className="btn" onClick={copyEmail}>
                <i className="fa-solid fa-clone"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="container-fluid"></footer>
    </div>
  );
}

export default Contact;
