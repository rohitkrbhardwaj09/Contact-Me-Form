import "./style.css";

const submitBtn = document.getElementById("sbmt-btn");
submitBtn.addEventListener("click", () => {
  let param = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contact").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceId = "service_3xtm33k";
  const templateId = "template_w6b3ews";

  emailjs
    .send(serviceId, templateId, param)
    .then((response) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("contact").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";

      alert("Message sent successfully");
    })
    .catch((response) => {
      console.log(ërror);
      alert("Oops! Somthing went wrong");
    });
});

// emailjs.send("service_3xtm33k","template_w6b3ews",{
//   name: "Sachin",
//   subject: "freelanching",
//   contact: "9084282393",
//   email: "Sachin@gmail.com",
//   message: "Hoping, you are well",
//   });

// const btnit = document.getElementById('sbmt-btn')
// btnit.addEventListener('click', sendMail)

// function sendMail() {
//     var param = {
//         name: document.getElementById("name"),
//         email: document.getElementById("email"),
//         contact: document.getElementById("contact"),
//         subject: document.getElementById("subject"),
//         message: document.getElementById("message"),
//      };

//      const serviceId = "service_3xtm33k";
//      const templateId = "template_n2skz36";

//   emailjs
//     .send(serviceId, templateId, param)
//     .then((res) => {
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("contact").value = "";
//       document.getElementById("subject").value = "";
//       document.getElementById("message").value = "";

//       console.log(res);

//       alert("Your message sent successfully");
//     })
//     .catch((err) => console.log(err));
// }
