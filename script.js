function mostrarConteudo() {
  const complemento = document.querySelectorAll(".complemento");
  const button = document.querySelectorAll(".button");

  button.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (complemento[index].style.display === "block") {
        complemento[index].style.display = "none";
        button.src = "./faq-accordion-main/assets/images/icon-plus.svg";
      } else {
        complemento[index].style.display = "block";
        button.src = "./faq-accordion-main/assets/images/icon-minus.svg";
      }
    });
  });
}

mostrarConteudo();
