const services = {
  graphic: {
    title: "🎨 Graphic Design",
    message: "Hello, I want to order Graphic Design services. Please I would like to know more.",
    items: [
      ["Logo Design", "₦5,000"],
      ["Birthday Flyer", "₦7,000"],
      ["Business Card", "₦10,000"]
    ]
  },

  nin: {
    title: "🪪 NIN Registration",
    message: "Hello, I want to make an enquiry about NIN Registration. Please I would like to know more.",
    items: [
      ["NIN Registration", "Contact Us"],
      ["NIN Registration Assistance", "Contact Us"],
      ["NIN Status Information", "Contact Us"]
    ]
  },

  web: {
    title: "💻 Web Development",
    message: "Hello, I want Web Development services. Please I would like to know more.",
    items: [
      ["Personal Website", "₦150,000"],
      ["Business Website", "₦250,000"]
    ]
  },

  computer: {
    title: "🖥️ Computer Training",
    message: "Hello, I want to register for Computer Training. Please I would like to know more.",
    items: [
      ["Basic Computer", "₦15,000"],
      ["Microsoft Word", "₦20,000"],
      ["Microsoft Excel", "₦20,000"],
      ["Graphic Design Training", "₦40,000"]
    ]
  },

  exam: {
    title: "📚 Exam Training",
    message: "Hello, I want to register for Exam Training. Please I would like to know more.",
    items: [
      ["JAMB Training", "₦20,000"],
      ["WAEC Training", "₦20,000"],
      ["NECO Training", "₦15,000"],
      ["GCSE Training", "₦15,000"]
    ]
  },

  idcard: {
    title: "🪪 ID Card Services",
    message: "Hello, I want ID Card Services. Please I would like to know more.",
    items: [
      ["Laminated ID → Plastic ID Card", "₦10,000"],
      ["Plastic ID Card Printing", "₦5,000"],
      ["ID Card Design", "₦5,000"],
      ["ID Card Replacement", "₦15,000"]
    ]
  }
};


function showService(serviceName) {

  const service = services[serviceName];

  if (!service) return;

  document.getElementById("serviceTitle").textContent =
    service.title;

  const list = service.items.map(item => `
    <li class="price-item">
      <span>${item[0]}</span>
      <strong>${item[1]}</strong>
    </li>
  `).join("");

  const whatsappLink =
    "https://wa.me/2348102104558?text=" +
    encodeURIComponent(service.message);

  document.getElementById("serviceContent").innerHTML = `

    <ul class="price-list">
      ${list}
    </ul>

    <a
      class="service-whatsapp"
      href="${whatsappLink}"
      target="_blank"
    >
      <span>🟢</span>
      Contact us on WhatsApp
    </a>

  `;

  document.getElementById("details").scrollIntoView({
    behavior: "smooth"
  });
}


const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const response =
      document.getElementById("response");

    const data = {

      name:
        document.getElementById("name").value,

      email:
        document.getElementById("email").value,

      message:
        document.getElementById("message").value

    };

    try {

      const result = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(data)
        }
      );

      const answer = await result.json();

      response.textContent =
        answer.message;

      if (answer.success) {
        form.reset();
      }

    } catch (error) {

      response.textContent =
        "Unable to send message. Please try again.";

    }

  });

}
