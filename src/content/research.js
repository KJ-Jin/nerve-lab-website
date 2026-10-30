// Research overview page (#research)
// The three research areas each have their own content file: research-clinical.js,
// research-basic.js and research-translational.js.

export default {
  banner: {
    eyebrow: '',
    title: 'Our Research',
  },

  overview: {
    title: 'Understanding Nerve Repair and Regeneration',
    // Each string is one paragraph.
    text: [
      'Peripheral nerve injuries can lead to lasting loss of movement and sensation, even after surgical repair. Although peripheral nerves have the ability to regenerate, axonal growth is often slow, and prolonged denervation can cause muscles to lose their capacity for functional reinnervation.',
      'The Nerve Lab addresses these challenges through two complementary research directions: understanding and accelerating axonal regeneration, and preserving motor endplates to support the reformation of neuromuscular junctions (NMJs). By investigating the cellular and molecular mechanisms that govern nerve repair, we seek to identify new therapeutic strategies that bridge fundamental discoveries with clinical applications, ultimately improving functional recovery for patients with peripheral nerve injuries.',
    ],
  },

  areas: {
    eyebrow: 'EXPLORE OUR WORK',
    title: 'Projects',
    items: [
      {
        title: 'Clinical Trials',
        text: 'Clinical trials and patient-oriented research on nerve injury and functional recovery.',
        linkText: 'Explore clinical research',
        href: '#research-clinical',
      },
      {
        title: 'Basic Science',
        text: 'Mechanisms of peripheral nerve regeneration, Schwann cell biology, and neuromuscular junction preservation.',
        linkText: 'Explore basic science',
        href: '#research-basic',
      },
      {
        title: 'Translational',
        text: 'Technologies and strategies linking laboratory discoveries to treatments for nerve injury.',
        linkText: 'Explore translational research',
        href: '#research-translational',
      },
    ],
  },
};
