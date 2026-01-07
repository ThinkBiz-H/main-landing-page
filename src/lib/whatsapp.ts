type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export const buildWhatsAppUrl = () => {
  const phoneNumber = "8512001218"; // Bahrain number
  const message = "Hello, I am interested in your services";

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const openWhatsAppWithFormData = (data: ContactFormData) => {
  const phoneNumber = "8512001218"; // Bahrain number

  const text = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "N/A"}
Message: ${data.message}
`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
};
