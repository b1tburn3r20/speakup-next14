const bills = [
  {
    id: 1,
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies tortor at tellus consequat congue. Mauris a arcu at urna ultricies egestas. Sed hendrerit, justo et malesuada posuere, leo dolor posuere urna, et tincidunt leo metus non est.",
    sponsors: ["John Doe", "Jane Smith"],
    introducer: "Senator Smith",
    currentState: "In Committee",
    nextStep: "Vote in Committee",
    tags: ["healthcare", "education", "environment"]
  },
  {
    id: 2,
    summary: "Nullam eget sem vitae nunc lobortis ultricies. Duis dictum metus sit amet leo mattis, id lobortis orci dictum. Suspendisse potenti. Pellentesque ultricies erat vitae lectus ultricies, vitae ullamcorper risus ultrices.",
    sponsors: ["Alice Johnson", "Bob Brown"],
    introducer: "Representative Adams",
    currentState: "On House Floor",
    nextStep: "Debate and Vote",
    tags: ["technology", "transportation", "economy"]
  },
  {
    id: 3,
    summary: "Vestibulum condimentum rhoncus diam, quis tempor mi lacinia ut. Nullam vulputate ligula eu justo venenatis vestibulum. Integer eget lorem vestibulum, pulvinar enim nec, blandit est.",
    sponsors: ["Emily White"],
    introducer: "Senator Green",
    currentState: "Passed House",
    nextStep: "Senate Committee Review",
    tags: ["energy", "immigration", "social welfare"]
  }
];

export default bills;
