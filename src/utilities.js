export const firstLetterUpperCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

export const filterAndSort = (list) => {
  const newList = list.sort((a, b) => a.order - b.order);
  return newList.map((pokemon) => {
    const { name, id, abilities, moves, sprites, types } = pokemon;
    const eggMoves = moves.filter((move) => move.version_group_details[0].move_learn_method.name === "egg");
    return { name, id, abilities, eggMoves, sprites, types };
  });
};
