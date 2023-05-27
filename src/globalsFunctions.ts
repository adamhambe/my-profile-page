export const scrollTo = (selector: string) => {
  const target = document.querySelector(selector);
  if (target) {
    const offset = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
};
