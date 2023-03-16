const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>

    el.addEventListener("click", () => {
        if (el.classList.contains("faq-active")) {
            el.classList.remove("faq-active");
        } else {
            accordionItem.forEach((el) => el.classList.remove("faq-active"));
            el.classList.add("faq-active");
        }
    })
);

