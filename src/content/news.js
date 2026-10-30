// Lab News page (#news)
// Listed in the order below (newest first). `url` is optional.

export default {
  banner: {
    eyebrow: '',
    title: 'News',
  },

  // Add new conference/event photos to images/news/events/ and list NEWEST FIRST.
  // The newest nine appear in Recent Happenings; older photos go to Gallery Archive.
  gallery: {
    intervalMs: 6000,
    photos: [
      {
        src: 'images/news/events/aanem-2026.jpg',
        alt: '2026 AANEM Annual Meeting presentation screen and conference attendees',
        caption: '“Surgical Strategies for Functional Upper Extremity Reconstruction After Spinal Cord Injury.” American Association of Neuromuscular & Electrodiagnostic Medicine Annual Meeting. Orlando, FL, 9/30/2026.',
        date: 'September 30, 2026',
      },
      {
        src: 'images/news/events/assh-2026-panel.jpg',
        alt: 'Panel discussion at the 2026 American Society for Surgery of the Hand Annual Meeting',
        caption: '“Does Free Functional Muscle Transfer Outperform Nerve-Based Hand Reconstruction?” CCC15: Adult Brachial Plexus Reconstruction: Controversies in Strategy and Priorities. American Society for Surgery of the Hand Annual Meeting. Boston, MA, 9/19/2026.',
        date: 'September 19, 2026',
      },
      {
        src: 'images/news/events/assh-2026-presentation.jpg',
        alt: 'Speaker at the podium during the 2026 ASSH Annual Meeting',
        caption: '“Does Free Functional Muscle Transfer Outperform Nerve-Based Hand Reconstruction?” CCC15: Adult Brachial Plexus Reconstruction: Controversies in Strategy and Priorities. American Society for Surgery of the Hand Annual Meeting. Boston, MA, 9/19/2026.',
        date: 'September 19, 2026',
      },
      {
        src: 'images/news/events/assh-2025-presentation.jpg',
        alt: 'Dr. Katie Liu presenting at the 2025 ASSH Annual Meeting',
        caption: '“Patient Selection: Who, When, and What to Prioritize?” Pre-Course 12 – A Little Is A Lot: Brachial Plexus From The Ground Up. American Society for Surgery of the Hand Annual Meeting. Vancouver, BC, Canada, 10/9/2025.',
        date: 'October 9, 2025',
      },
    ],
  },

  news: [
    {
      date: '2026',
      title: 'Dr. Katie Liu receives Goldner Award for basic science research',
      description: 'Dr. Yusha (Katie) Liu received a Goldner Award for the basic science project “Induced pluripotent stem cells to model the neuromuscular junction.”',
      url: 'https://www.assh.org/annualmeeting/general-information/awards',
    },
    {
      date: '2026',
      title: 'Dr. Christopher Crowe receives Goldner Award for clinical research',
      description: 'Dr. Christopher Crowe received a Goldner Award for the clinical research project “Electrodiagnostic Features of Hyperselective Neurectomy in the Spastic Upper Limb.”',
      url: 'https://www.assh.org/annualmeeting/general-information/awards',
    },
    {
      date: 'JUNE 2026',
      title: 'Tietze Research Award recognizes Dr. Liu’s research',
      description: 'ISCRM announced that Yusha (Katie) Liu and Mark Bothwell received awards from the John H. Tietze Foundation Trust to support their research.',
      url: 'https://iscrm.uw.edu/mark-bothwell-and-yusha-katie-liu-receive-tietze-research-awards/',
    },
    {
      date: 'FEBRUARY 2026',
      title: 'Harborview Medical Center joins FASTR-TEN study and enrolls first patient',
      description: 'Checkpoint Surgical announced that UW Medicine’s Harborview Medical Center enrolled its first patient in FASTR-TEN, a multicenter trial studying brief electrical stimulation during peripheral nerve repair. Dr. Katie Liu is a participating investigator at Harborview.',
      url: 'https://checkpointsurgical.com/news/harborview-medical-center-fastr-ten-study-site',
    },
    {
      date: 'OCTOBER 2025',
      title: 'Neuraptive Therapeutics begins Phase 3 NTX-001 clinical trial',
      description: 'Neuraptive Therapeutics announced the first patient enrollment in its Phase 3 clinical trial evaluating NTX-001 for traumatic upper-extremity nerve injuries. Dr. Katie Liu serves as a principal investigator at the University of Washington study site.',
      url: 'https://www.businesswire.com/news/home/20251002748937/en/Neuraptive-Therapeutics-Inc.-Announces-First-Patient-Enrolled-in-Phase-3-Clinical-Trial-Evaluating-the-Safety-and-Efficacy-of-NTX-001-Compared-to-Standard-of-Care-in-the-Treatment-of-Upper-Extremity-Transected-Nerves-Requiring-Surgical-Repair',
    },
    {
      date: 'OCTOBER 2024',
      title: 'Optimizing Peripheral Nerve Injury Care',
      description: 'UW Medicine Vitals profiles the Northwest Institute for Nerve Injury at Harborview Medical Center and Dr. Yusha Katie Liu’s approach to coordinated, multidisciplinary peripheral nerve injury care. Originally published October 16, 2024; updated March 19, 2025.',
      url: 'images/news/optimizing-peripheral-nerve-injury-care.pdf',
      linkLabel: 'Read PDF',
    },
    {
      date: '2024',
      title: '2024 AFSH Basic Science Grant supports microvascular patch research',
      description: 'The project “Patterned Microvascular Patches to Promote Angiogenesis in Nerve Surgery,” in collaboration with Dr. Samuel Rayner, received a 2024 American Foundation for Surgery of the Hand (AFSH) Basic Science Grant.',
      url: 'https://afsh.assh.org/s/basic-science-grants',
    },
    {
      date: 'JANUARY 2024',
      title: 'Introducing Dr. Yusha “Katie” Liu at ISCRM',
      description: 'An ISCRM profile highlights Dr. Liu’s surgeon-scientist career and the research directions of the new laboratory.',
      url: 'https://iscrm.uw.edu/welcome-yusha-katie-liu/',
    },
  ],
};
