const stars = document.getElementsByClassName("star");
stars.forEach((star) => {
  star.addEventListener("mouseover", handleMouseOver);
  star.addEventListener("mouseout", handleMouseOut);
  star.addEventListener("click", handleClick);
});
