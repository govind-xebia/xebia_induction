import peopleFirst from "./icons/people.svg";
import sharingKnowledge from "./icons/knowledge.svg";
import customerIntimacy from "./icons/customer.svg";
import quality from "./icons/quality.svg";

const PillarsData = {
  cardContent: [
    {
      title: "People First",
      desc: "Our motto is You Grow. We Grow.",
      icon: peopleFirst,
    },
    {
      title: "Sharing Knowledge",
      desc: "We believe the more you share the more you grow.",
      icon: sharingKnowledge,
    },
    {
      title: "Quality without Compromise",
      desc: "At Xebia quality without compromise is the mantra",
      icon: quality,
    },
    {
      title: "Customer Intimacy",
      desc: "We don't just create customers, we create relationships",
      icon: customerIntimacy,
    }
  ],
  sectionData: {
    peopleFirst: [
      "Xebia provides an atmosphere of mutual respect, trust, responsibility and accountability",
      "We recognize the potential of Xebians and offer them an opportunity for professional development and upward mobility",
      "We provide platform to Xebians wherein they can connect with experienced Xebians to share their aspirations, areas of interest, and challenges and charter a clear path towards their goal"
    ],
    sharingKnowledge: [
      "With mandatory bi-weekly sessions of Xebia Knowledge Exchange we ensure a flow of knowledge from country to country, unit to unit, and employee to employee.",
      "We encourage Xebians to write and share their knowledge through blog posts.",
      "Xebians nurtures a free and open culture where you have flexibility to experiment. Xebians are known for their contribution to the open community; be it writing a book or speaking at conferences."

    ],
    qualityWithoutCompromise: [
      "Be it work, be it personal interactions, be it surroundings or be it the self, at Xebia 100% is the norm.",
      "We believe in delivering exceptional value be it for our client or in our day to day work."
    ],
    customerIntimacy: [
      "Understand the business case of your customer; become the trusted advisor.",
      "Strive for an equal level relationship between Xebia, you and the customer. Avoid hierarchy. Be truly interested in the person.",
      "Understanding customer’s business problem and providing an integrated solution is our top business priority."
    ]
  }
};

export default PillarsData;
