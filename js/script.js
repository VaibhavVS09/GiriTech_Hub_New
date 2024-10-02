function incrementStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 200;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 11);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}
document.addEventListener("DOMContentLoaded", incrementStats);

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "foo"));
const promise3 = 42; // This will be automatically converted to a resolved promise.

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: [3, "foo", 42]
  })
  .catch((error) => {
    console.error("Error: ", error); // Handles any rejection from the promises
  });
