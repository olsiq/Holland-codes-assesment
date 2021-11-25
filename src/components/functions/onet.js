export const onet = (a, b, c) => {
  //   const array = [
  //     { full: "Realistic", firstL: "R" },
  //     { full: "Investigative", firstL: "I" },
  //     { full: "Artistic", firstL: "A" },
  //     { full: "Social", firstL: "S" },
  //     { full: "Enterprising", firstL: "E" },
  //     { full: "Conventional", firstL: "C" },
  //   ];
  const array = [
    "Realistic",
    "Investigative",
    "Artistic",
    "Social",
    "Enterprising",
    "Conventional",
  ];

  let x = array.filter((array) => array.includes(a));
  let y = array.filter((array) => array.includes(b));
  let z = array.filter((array) => array.includes(c));

  const url =
    "https://www.onetonline.org/explore/interests/" +
    x +
    "/" +
    y +
    "/" +
    z +
    "/";
  return url;
};
