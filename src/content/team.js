// Team page (#people)
// Members and collaborators are shown on dedicated Basic Sciences and Clinical Team pages.
// Photos live in images/team/. Members without a photo show their initials.

export default {
  banner: {
    eyebrow: '',
    title: 'The Team',
  },

  pi: {
    heading: 'Principal Investigator',
    role: 'Principal Investigator',
    name: 'Yusha “Katie” Liu, MD, PhD',
    title: 'Assistant Professor · Division of Plastic Surgery, Department of Surgery',
    bio: 'Dr. Yusha “Katie” Liu is a board-certified hand and peripheral nerve surgeon and an Assistant Professor in the University of Washington Division of Plastic Surgery. She leads basic science research on nerve and muscle regeneration within the Institute for Stem Cell & Regenerative Medicine and conducts clinical and translational peripheral nerve injury research through the UW Department of Surgery.',
    // A full biography was found in the old editor data but is not shown on the current site:
    // 'Dr. Katie Liu is a hand and peripheral nerve surgeon scientist in the Division of Plastic Surgery who cares deeply about helping people regain function after life-changing nerve injuries. She spearheaded the creation of the Northwest Institute for Nerve Injury at Harborview Medical Center, a multidisciplinary clinic providing comprehensive care for patients from diagnosis to surgery to rehabilitation. Her research program includes her basic science laboratory within the UW Institute for Stem Cell & Regenerative Medicine, focusing on molecular and cellular mechanisms of nerve and muscle degradation and regeneration, as well as translational studies and multi-institutional clinical trials exploring new ways to improve recovery after peripheral nerve injury. Dr. Liu enjoys spending quality time with her husband and two sons when she’s not in surgery or in the laboratory.'
    photo: 'images/team/yusha-katie-liu.jpg',
    profileUrl: 'https://www.uwmedicine.org/bios/yusha-katie-liu',
  },

  // Both team photo cards link to dedicated member-and-collaborator pages.
  groups: [
    {
      id: 'basic',
      title: 'Basic Sciences Team',
      href: '#team-basic',
      photo: '', // Add the approved basic sciences group photo here later.
      members: [
        {
          name: 'Sean Yuan, PhD',
          role: 'Research Scientist',
          bio: 'Sean has a background in molecular biology and microbiology, with extensive research experience in drug discovery, cancer biology, and protein–small molecule interactions. He has worked across academia and biotech, developing assays, and studying mechanisms of disease using cell-based and molecular techniques. Outside the lab, he enjoys traveling and spending time with his family.',
          photo: 'images/team/sean-yuan.jpg',
        },
        {
          name: 'Bonnie J. Berry PhD',
          role: 'Research/Laboratory Management',
          bio: 'Bonnie has a background in tissue engineering, studying mechanisms of pathology in Alzheimer’s Disease, and astrobiology. She and her husband have two ridiculous and lovely Boston Terriers and enjoy traveling when they can get away from the lab.',
          photo: 'images/team/bonnie-berry.png',
        },
        {
          name: 'Elise Kouris',
          role: 'Research Scientist',
          bio: 'Elise is a research scientist with a background in cellular and molecular neuroscience. She has a passion for research with direct clinical implications and spent her undergraduate time researching the neuroendocrine controls and novel treatments of polycystic ovary syndrome. When she is not working in the lab, she enjoys walking with her greyhound and seeing live music.',
          photo: 'images/team/elise-kouris.jpg',
        },
        {
          name: 'Joyce Liu',
          role: 'Research Scientist',
          bio: 'Joyce is a research scientist with a background in biochemistry and experience in cardiovascular research. She is passionate about peripheral nerve regeneration and bridging basic science discoveries with clinical applications to improve patient outcomes. Outside of the lab, she enjoys traveling, exploring new places, and spending time with her three very active cats.',
          photo: 'images/team/joyce-liu.png',
        },
        {
          name: 'Haneul Ryou',
          role: 'Medical Student Research Fellow',
          bio: 'Haneul is a medical student research fellow with a background in neuroscience. Her research interests include peripheral nerve regeneration and socioeconomic barriers to care. She is hoping to pursue a career in plastic surgery. In her free time, Haneul loves cafe hopping, cooking, reading, and running!',
          photo: 'images/team/haneul-ryou.webp',
        },
      ],
      collaborators: {
        title: 'Basic Sciences Collaborators',
        intro: 'Scientific partners working with us on fundamental questions of nerve and muscle regeneration.',
        // Each collaborator: { name, affiliation, role, link, image }
        items: [
          { name: "Mark Bothwell", affiliation: "University of Washington", role: "Neuromuscular Disease Research Group", link: "https://ndrg.uw.edu/" },
          { name: "David Mack", affiliation: "University of Washington", role: "Neuromuscular Disease Research Group", link: "https://ndrg.uw.edu/" },
          { name: "Alec Smith", affiliation: "University of Washington", role: "Neuromuscular Disease Research Group", link: "https://ndrg.uw.edu/" },
          { name: "Shao-En Ong", affiliation: "University of Washington", link: "https://www.quantbiology.org/" },
          { name: "Samuel Rayner", affiliation: "University of Washington", link: "https://sites.uw.edu/raynerlab/" },
          { name: "David Brogan", affiliation: "Washington University in St. Louis", link: "https://nerveresearch.wustl.edu/" },
        ],
      },
    },
    {
      id: 'clinical',
      title: 'Clinical Team',
      href: '#team-clinical',
      photo: '', // Add the approved clinical group photo here later.
      members: [
        {
          name: 'Haneul Ryou',
          role: 'Medical Student Research Fellow',
          bio: 'Haneul is a medical student research fellow with a background in neuroscience. Her research interests include peripheral nerve regeneration and socioeconomic barriers to care. She is hoping to pursue a career in plastic surgery. In her free time, Haneul loves cafe hopping, cooking, reading, and running!',
          photo: 'images/team/haneul-ryou.webp',
        },
        {
          name: 'Joyce Liu',
          role: 'Research Scientist',
          bio: 'Joyce is a research scientist with a background in biochemistry and experience in cardiovascular research. She is passionate about peripheral nerve regeneration and bridging basic science discoveries with clinical applications to improve patient outcomes. Outside of the lab, she enjoys traveling, exploring new places, and spending time with her three very active cats.',
          photo: 'images/team/joyce-liu.png',
        }
      ],
      collaborators: {
        title: 'Clinical Studies Collaborators',
        intro: 'Researchers and partners contributing to our clinical research.',
        // Each collaborator: { name, affiliation, role, link, image }
        items: [
          { name: "Chris Crowe", affiliation: "University of Washington", link: "https://www.uwmedicine.org/bios/christopher-crowe" },
          { name: "Jeff Friedrich", affiliation: "University of Washington", link: "https://www.uwmedicine.org/bios/jeffrey-friedrich" },
          { name: "Ben Grannan", affiliation: "University of Washington", link: "https://www.uwmedicine.org/bios/benjamin-grannan" },
          { name: "Chris Dy", affiliation: "Washington University in St. Louis", link: "https://nerveresearch.wustl.edu/" },
          { name: "David Brogan", affiliation: "Washington University in St. Louis", link: "https://nerveresearch.wustl.edu/" },
        ],
      },
    },
  ],
};
