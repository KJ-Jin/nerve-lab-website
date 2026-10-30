// Team page (#people)
// Photos live in images/team/. Members without a photo show their initials.

export default {
  banner: {
    eyebrow: '',
    title: 'The Team',
  },

  groupPhoto: {
    eyebrow: 'TOGETHER IN RESEARCH',
    title: 'Our Team',
    image: '', // e.g. 'images/team/group-photo.jpg'
    caption: 'The Nerve Lab team',
    // Shown while there is no image:
    placeholderTitle: 'Space reserved for our lab group photo',
    placeholderNote: 'Add an approved team photo in the Team editor',
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

  // Each group renders as a heading followed by a grid of member cards.
  groups: [
    {
      title: 'Basic Science Team',
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
          bio: 'Short biography.',
          photo: 'images/team/joyce-liu.png',
        },
        {
          name: 'Haneul Ryou',
          role: 'Role',
          bio: 'Short biography.',
        },
        {
          name: 'New member',
          role: 'Role',
          bio: 'Short biography.',
        },
      ],
    },
    {
      title: 'Clinical Team',
      members: [
        {
          name: 'Add clinical member',
          role: 'Clinical research team',
          bio: 'Add a name, role, photo, and short biography in the People editor.',
        },
      ],
    },
    {
      title: 'Translational Team',
      members: [
        {
          name: 'Add translational member',
          role: 'Translational research team',
          bio: 'Add a name, role, photo, and short biography in the People editor.',
        },
      ],
    },
  ],
};
