function filterGames(category) {
  const games = document.querySelectorAll("[data-category]");

  games.forEach(game => {
    if (category === "all" || game.dataset.category === category) {
      game.classList.remove("hidden");
    } else {
      game.classList.add("hidden");
    }
  });
}
