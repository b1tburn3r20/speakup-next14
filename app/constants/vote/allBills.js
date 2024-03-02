const allBillsData = {
    bills: [
      {
        billName: "Environmental Protection and Sustainability Act",
        billNumber: "EPSA2024",
        sponsors: ["Alex Johnson", "Jamie Smith"],
        billSummary: "This bill aims to introduce new regulations and incentives for businesses to adopt more sustainable practices, reduce carbon emissions, and promote renewable energy usage. It seeks to amend existing laws to include stricter penalties for environmental violations.",
        currentStateOfProcess: "Committee Review",
        timeUntilNextCycle: "2 months",
        delayed: false,
        billTags: ["Environment", "Sustainability", "Energy"],
        billCategory: "Environment"
      },
      {
        billName: "Digital Privacy Protection Act",
        billNumber: "DPPA2024",
        sponsors: ["Emily Chen", "Michael Rodriguez"],
        billSummary: "The Digital Privacy Protection Act aims to enhance privacy rights for individuals online by imposing stricter regulations on data collection, usage, and sharing by tech companies and online platforms. It seeks to empower users with more control over their personal data and establish penalties for unauthorized data breaches.",
        currentStateOfProcess: "Senate Debate",
        timeUntilNextCycle: "1 week",
        delayed: true,
        billTags: ["Privacy", "Data Protection", "Technology"],
        billCategory: "Internet"
      },
      {
        billName: "Clean Energy Investment Act",
        billNumber: "CEIA2024",
        sponsors: ["Rachel Thompson", "David Nguyen"],
        billSummary: "The Clean Energy Investment Act proposes tax incentives and subsidies to encourage investment in renewable energy infrastructure and technologies. It aims to accelerate the transition to clean energy sources such as solar, wind, and hydroelectric power, fostering environmental sustainability and reducing dependency on fossil fuels.",
        currentStateOfProcess: "House Subcommittee Review",
        timeUntilNextCycle: "3 weeks",
        delayed: false,
        billTags: ["Clean Energy", "Renewable Resources", "Economic Stimulus"],
        billCategory: "Energy"
      },
      {
        billName: "Cybersecurity Enhancement Act",
        billNumber: "CEA2024",
        sponsors: ["Daniel Lee", "Sophia Patel"],
        billSummary: "The Cybersecurity Enhancement Act proposes measures to strengthen the nation's cybersecurity infrastructure. It includes provisions for increased funding for cybersecurity research and development, collaboration between government agencies and private sector entities, and the establishment of cybersecurity standards and best practices.",
        currentStateOfProcess: "Conference Committee",
        timeUntilNextCycle: "Pending",
        delayed: false,
        billTags: ["Cybersecurity", "National Security", "Technology"],
        billCategory: "Security"
      },
      {
        billName: "Affordable Housing Expansion Act",
        billNumber: "AHEA2024",
        sponsors: ["Sarah Ramirez", "Jonathan Kim"],
        billSummary: "The Affordable Housing Expansion Act aims to address the growing housing affordability crisis by providing incentives for the construction of affordable housing units, expanding rental assistance programs, and implementing zoning reforms to promote equitable access to housing. It seeks to alleviate housing shortages and mitigate homelessness.",
        currentStateOfProcess: "House Floor Vote",
        timeUntilNextCycle: "2 days",
        delayed: false,
        billTags: ["Affordable Housing", "Homelessness", "Zoning Reform"],
        billCategory: "Housing"
      },
      {
        billName: "Education Reform and Equity Act",
        billNumber: "EREA2024",
        sponsors: ["Jessica Wong", "Ryan Patel"],
        billSummary: "The Education Reform and Equity Act proposes comprehensive reforms to improve educational outcomes and promote equity in schools. It includes provisions for increased funding for underprivileged schools, teacher training programs, and initiatives to address disparities in access to quality education. The bill aims to ensure that every student has equal opportunities for academic success.",
        currentStateOfProcess: "Senate Committee Markup",
        timeUntilNextCycle: "1 month",
        delayed: true,
        billTags: ["Education Reform", "Equity", "School Funding"],
        billCategory: "Education"
      },
      {
        billName: "Healthcare Access and Affordability Act",
        billNumber: "HAAA2024",
        sponsors: ["Emma Thompson", "Christopher Martinez"],
        billSummary: "The Healthcare Access and Affordability Act aims to improve access to healthcare services and reduce healthcare costs for all Americans. It includes provisions for expanding Medicaid coverage, implementing prescription drug price controls, and promoting competition among healthcare providers. The bill seeks to address disparities in healthcare access and affordability across the country.",
        currentStateOfProcess: "House Committee Review",
        timeUntilNextCycle: "3 weeks",
        delayed: false,
        billTags: ["Healthcare", "Affordability", "Access"],
        billCategory: "Healthcare"
      },
      {
        billName: "Climate Resilience and Adaptation Fund Act",
        billNumber: "CRAFA2024",
        sponsors: ["Olivia Baker", "Ethan Thompson"],
        billSummary: "The Climate Resilience and Adaptation Fund Act proposes the establishment of a federal fund dedicated to supporting communities in adapting to the impacts of climate change. It allocates funding for infrastructure projects, disaster preparedness initiatives, and community resilience programs aimed at addressing the challenges posed by rising sea levels, extreme weather events, and other climate-related threats.",
        currentStateOfProcess: "Senate Subcommittee Review",
        timeUntilNextCycle: "1 month",
        delayed: true,
        billTags: ["Climate Change", "Resilience", "Adaptation"],
        billCategory: "Environment"
      },
      {
        billName: "Infrastructure Modernization and Investment Act",
        billNumber: "IMIA2024",
        sponsors: ["Nathan Johnson", "Isabella Martinez"],
        billSummary: "The Infrastructure Modernization and Investment Act aims to address the nation's aging infrastructure by allocating funds for the repair, maintenance, and modernization of roads, bridges, public transportation, and other critical infrastructure systems. It seeks to create jobs, enhance transportation efficiency, and improve overall infrastructure resilience.",
        currentStateOfProcess: "House Committee Markup",
        timeUntilNextCycle: "2 weeks",
        delayed: false,
        billTags: ["Infrastructure", "Investment", "Job Creation"],
        billCategory: "Infrastructure"
      },
      {
        billName: "Student Loan Debt Relief Act",
        billNumber: "SLDRA2024",
        sponsors: ["Aiden Thompson", "Sophia Rodriguez"],
        billSummary: "The Student Loan Debt Relief Act proposes measures to alleviate the burden of student loan debt on borrowers. It includes provisions for loan forgiveness, lower interest rates, and expanded repayment options. The bill aims to provide relief to millions of Americans struggling with student loan debt and stimulate economic growth by freeing up disposable income.",
        currentStateOfProcess: "Senate Floor Debate",
        timeUntilNextCycle: "1 week",
        delayed: true,
        billTags: ["Student Loans", "Debt Relief", "Higher Education"],
        billCategory: "Education"
      }
      
      
      
      
    ]
  };
  
  module.exports = allBillsData;
  