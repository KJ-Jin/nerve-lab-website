// Translational Research page (#research-translational)
// Study fields are listed at the top of research-clinical.js.

export default {
  banner: {
    title: 'Translational Research',
    intro: 'Connecting discoveries in nerve biology to new approaches for repair and rehabilitation.',
  },

  studies: [
    {
      title: 'EMG-driven rehabilitation and therapeutic gaming',
      subtitle: 'Translating residual muscle signals into engaging rehabilitation',
      status: 'Research and development · not presented as an active clinical trial',
      description:
        'Dr. Liu and collaborators developed a wireless surface electromyography (EMG) system linked to a smartphone game. It uses muscle activity to control a rehabilitation task and may help patients practice motor relearning after peripheral nerve or tendon transfer surgery.',
      questions: [
        'Can weak muscle signals support active task-based rehabilitation?',
        'How might interactive feedback improve motor relearning?',
      ],
      methods: 'UW Department of Surgery research profile; verify study stage and availability before publication.',
      sourceUrl: 'https://uwsurgery.org/wp-content/uploads/2024/02/surgsynopsis-wtr-2024-final-rfs.pdf',
      art: 'nmj',
      imageAlt: 'Conceptual EMG-driven rehabilitation illustration',
      caption: 'Conceptual illustration · replace with an approved project image',
    },
    {
      title: 'Vascularized patches for peripheral nerve repair',
      subtitle: 'Tissue engineering and the nerve microenvironment',
      status: 'Collaborative translational research · development status to confirm',
      description:
        'A collaborative line of research at UW investigates patterned microvascular patches intended to encourage angiogenesis in nerve surgery. This translational approach explores whether engineering the local vascular environment may support nerve regeneration.',
      questions: [
        'How can engineered microvasculature support injured nerves?',
        'Can localized angiogenesis be incorporated into surgical repair strategies?',
      ],
      methods: 'Collaborative work listed by the UW Rayner Lab with Katie Liu and Sean Yuan.',
      sourceUrl: 'https://sites.uw.edu/raynerlab/',
      art: 'vascular',
      imageAlt: 'Conceptual diagram of vascularization and peripheral nerves',
      caption: 'Conceptual illustration · replace with an approved project image',
    },
  ],

  collaborators: {
    intro: 'Partners helping translate discoveries into new approaches for peripheral nerve repair.',
    // Each collaborator: { name, affiliation, role, link, image }
    items: [],
  },
};
