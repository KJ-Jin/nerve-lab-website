// Basic Science page (#research-basic)
// Study fields are listed at the top of research-clinical.js.

export default {
  banner: {
    title: 'Basic Science',
    intro: 'Overview of basic science research',
  },

  showStudyNumbers: false,

  studies: [
    {
      title: 'Microvascular patches for improving axonal regeneration',
      description:
        'With our collaborator, Dr. Samuel Rayner, we are working to improve axonal regeneration after peripheral nerve injury. Microvascular patches made of collagen are lined with human endothelial cells and implanted into rats post peripheral nerve injury to promote the growth of blood vessels. We hypothesize that our novel bioengineered patch will provide a supportive local microenvironment to enhance angiogenesis and axonal regeneration.',
      image: 'images/research/basic-microvascular-patches.jpg',
      imageAlt: 'Illustrative visualization of branching peripheral nerve fibers',
    },
    {
      title: 'Exosomes and neurotrophic factors',
      description:
        'Investigating exosomes and neurotrophic factors provides important insight into how cells communicate and support neural growth, survival, and repair. Exosomes act as nanoscale vesicles that transport proteins, lipids, and RNA between cells, influencing processes such as inflammation, regeneration, and synaptic plasticity. Neurotrophic factors play a central role in promoting neuron survival, differentiation, and axonal growth. Together, investigating these components helps researchers better understand the molecular mechanisms underlying neural repair and identify potential therapeutic targets for enhancing recovery after nerve injury or neurodegenerative disease.',
      image: 'images/research/basic-exosomes.jpg',
      imageAlt: 'Conceptual diagram of a neuromuscular junction',
    },
    {
      title: 'Denervated human tissue',
      description:
        'Studying human tissue that has been denervated provides critical insight into how the loss of nerve supply alters structure and function at the cellular and molecular levels. Denervation leads to progressive changes such as muscle atrophy, altered gene expression, and impaired regenerative capacity, making it an important model for understanding neuromuscular disorders and injury. By examining these tissues, we hope to identify pathways involved in degeneration and recovery, evaluate the effectiveness of therapeutic interventions, and develop strategies to promote reinnervation and functional restoration.',
      image: 'images/research/basic-denervated-tissue.jpg',
      imageAlt: 'Conceptual nerve and vascular network illustration',
    },
  ],

  collaborators: {
    intro: 'Scientific partners working with us on fundamental questions of nerve and muscle regeneration.',
    // Each collaborator: { name, affiliation, role, link, image }
    items: [
      { name: "Mark Bothwell", affiliation: "Neuromuscular Disease Research Group", link: "https://depts.washington.edu/eph/wordpress/" },
      { name: "David Mack", affiliation: "Neuromuscular Disease Research Group", link: "https://depts.washington.edu/eph/wordpress/" },
      { name: "Alec Smith", affiliation: "Neuromuscular Disease Research Group", link: "https://depts.washington.edu/eph/wordpress/" },
      { name: "Shao-En Ong", link: "https://pharmacology.uw.edu/team-member/shao-en-ong/" },
      { name: "Samuel Rayner", link: "https://sites.uw.edu/raynerlab/" },
    ],
  },
};
