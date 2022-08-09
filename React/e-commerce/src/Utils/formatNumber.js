const formatName = (name) =>
  name.length < 10
    ? name
    : name
        .split("")
        .filter((x, u) => u < 10)
        .join("") + "...";

export default formatName;
