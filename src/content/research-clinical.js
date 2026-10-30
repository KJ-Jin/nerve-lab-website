// Clinical Trials page (#research-clinical)
//
// Study fields (only `title` and `description` are required):
//   title, subtitle, principalInvestigator, status (small badge),
//   description (a string, or a list of paragraphs),
//   questions (list), methods (side note), sourceUrl ("Research source ↗" link),
//   image + imageAlt (file in images/), caption (small note under the image),
//   art: 'axon' | 'nmj' | 'vascular' (generated illustration used when there is no image).
// Study numbering can be hidden per page with showStudyNumbers: false.

export default {
  banner: {
    title: 'Clinical Trials',
    intro: 'Learn about our team’s current research studies to improve care for nerve injuries and see if you are eligible to participate.',
  },

  // Keep the clinical collaborators easy to find before the longer study list.
  collaboratorsFirst: true,
  showStudyNumbers: false,

  studies: [
    {
      title: 'PLANeT Study',
      principalInvestigator: 'Yusha Katie Liu, MD, PhD',
      description: [
        'The PLANeT (Prospective Longitudinal Assessment of Nerve Trauma) Study is a multicenter prospective cohort study for patients with traumatic brachial plexus injuries who undergo surgery. The goal is to identify the best outcome measures to use for patients with brachial plexus injuries that include a comprehensive patient perspective on function, pain, and quality of life.',
        'If you participate in this study, we will complete surveys with you at your preoperative clinic visit, and then again at several time points after surgery. These surveys are regarding your ability to perform certain activities, any pain you experience, how you cope with your injury, and how your injury has affected your life.',
      ],
      // Hidden on the current site:
      // sourceUrl: 'https://orthop.washington.edu/role-of-polyethylene-glycol-mediated-axonal-fusion-in-early-recovery-of-median-and-ulnar-nerve.html',
      art: 'axon',
      imageAlt: 'Conceptual nerve repair diagram',
      caption: 'Conceptual illustration · replace with an approved figure',
    },
    {
      title: 'Mechanisms Underlying Peripheral Nerve Injury and Regeneration',
      principalInvestigator: 'Yusha Katie Liu, MD, PhD',
      description: [
        'Our primary goal is to gain a deeper understanding of the biology of peripheral nerve injuries. To achieve this, we collect small samples of peripheral nerve and/or mixed nerve/muscle tissue during surgery. This is tissue that would typically be discarded, so we are utilizing something that would otherwise go to waste. We take this tissue into the lab to study further.',
        'We aim to learn more about what happens to nerves when they are damaged, like how nerves break down, how they repair themselves, and how certain conditions like painful neuromas occur. By understanding these processes better, we can develop new treatments to help patients with nerve injuries. This study will provide valuable insights into the progression of nerve injury and recovery.',
      ],
      art: 'vascular',
      imageAlt: 'Conceptual illustration of nerve injury outcomes',
      caption: 'Conceptual illustration · replace with an approved figure',
    },
    {
      title: 'Utility of Rehabilitation Psychology in Peripheral Nerve Injury Care',
      principalInvestigator: 'Jeffrey Friedrich, MD',
      description: [
        'Nerve injuries have huge impacts on people’s lives, their work, finances, and relationships. In our clinic, we seek to provide comprehensive care to the whole person and include rehabilitation psychologists as a part of our multidisciplinary team. We are conducting a study to understand the role of rehabilitation psychology in our peripheral nerve clinic. Patients who have had a nerve injury will be asked to evaluate their interactions with the rehabilitation psychologists in the clinic.',
        'If you decide to be in this study, we will ask you to fill out a short survey with your thoughts about the role of rehabilitation psychologists in our clinic. The survey will take you about 5 minutes to complete.',
      ],
      art: 'nmj',
      imageAlt: 'Conceptual illustration of sensory nerve pathways',
      caption: 'Conceptual illustration · replace with an approved figure',
    },
    {
      title: 'Neuraptive Phase III',
      principalInvestigator: 'Yusha Katie Liu, MD, PhD',
      description: [
        'NTX-001 is a single use surgical product used with standard nerve repair in patients between 18 and 80 years old. It is designed to speed nerve recovery, which is often slow and incomplete, sometimes leading to long-term motor or sensory loss. By reconnecting severed nerves (PEG fusion), NTX-001 may reduce nerve degeneration and muscle atrophy, shorten recovery time, and improve return of function.',
        'What happens to me if I agree to take part in this research?',
        'The NTX-001 surgical product contains three (3) solutions that are applied in consecutive order and timed steps to your severed nerve during the surgical repair. You will be randomly (like flipping a coin) entered into either the NTX-001 or Standard of Care group.',
        'Other procedures include collection of your vital signs and medical history, a physical exam, blood tests, a nerve stimulation test, electromyography, nerve conduction and sensory tests, muscle and sensory assessments, and questionnaires are conducted during the course of a 12-month period post operatively.',
      ],
      image: 'images/research/clinical-neuraptive.png',
      imageAlt: 'Neuraptive Phase III',
    },
    {
      title: 'Neuraptive Expanded Access',
      principalInvestigator: 'Yusha Katie Liu, MD, PhD',
      description: [
        'The proposed use of NTX-001 for transections of upper extremity and facial peripheral nerves, acutely or planned. For this expanded access program, there is a case-by-case internal review process conducted by Neuraptive after the respective investigator provides a prospective case narrative for enrollment consideration. Allowed Sunderland Classifications are IV degree (Seddon’s Class II) and V degree (Seddon’s Class III). If the case is approved, the investigator can move forward.',
        'If you decide to take part in this research study, the general procedures include applying an investigational solution to the two ends of the nerve that’s being surgically repaired followed by standard of care follow-up visits. There are currently no known side effects related to the use of NTX-001.',
      ],
      image: 'images/research/clinical-neuraptive.png',
      imageAlt: 'Neuraptive Expanded Access',
    },
    {
      title: 'FASTR-TEN',
      principalInvestigator: 'Yusha Katie Liu, MD, PhD',
      description: [
        'The purpose of this research is to evaluate the effects of a brief period of electrical stimulation, done during the surgery, to promote recovery and improve arm function following surgical treatment of nerve injury using the investigational Checkpoint BEST System.',
        'If you agree to participate in this research study, you will receive current standard of surgical care for your nerve injury but will also be randomly chosen to either receive electrical nerve stimulation after repair or no electrical stimulation. The surgeon will know which treatment group you are in, but neither you nor the study personnel performing the follow-up tests will know if you received the electrical stimulation or not. If you decide to participate in this study, you will have up to 8 required study visits over a time period of approximately 9 months.  These study visits will require you to visit the clinic.  Each visit to the clinic will last about 1 hour.',
      ],
      art: 'axon',
    },
    {
      title: 'Human Lipoaspirate for Regenerative Medicine',
      principalInvestigator: 'Yusha Katie Liu, MD, PhD',
      description: [
        'Adipose tissue (fat cells) have been shown some promise in their ability to speed up the healing of other types of cells and tissues. If we can develop this into new treatments to aid in healing, patients who have sustained traumatic injuries could benefit.',
        'If you agree to be in this study, we will ask you to allow us to collect any biological material, including cells and fluid, that was obtained through liposuction that will not be used in your surgery. This material would otherwise be thrown away. From some of the discarded cells that we collect, we would like to grow additional cells to help us further understand how these cells can help repair other damaged tissue in the future. This is called creating cell lines and these cells may grow in the lab indefinitely.',
      ],
      art: 'axon',
    },
    {
      title: 'Cutaneous Thermography for Diagnosis of Nerve Injury and Recovery',
      principalInvestigator: 'Yusha Katie Liu, MD, PhD',
      description: [
        'This study utilizes the FLIR ONE Series Thermal Imaging Camera to capture an infrared (IR) thermographic image of a limb affected by a peripheral nerve injury due to any cause, such as compression, trauma, and iatrogenic. IR imaging is a relatively quick, low-cost, no-contact method of objectively evaluating thermal differences present in a body part affected by peripheral neuropathy. We are investigating the utility of thermal imaging in diagnosing peripheral nerve injury and recovery.',
        'If you agree to participate in this research study, a physician or research coordinator will use the FLIR ONE camera to scan your limb during your clinic visit at Harborview Medical Center. Using the camera will only add about 10 minutes to your clinic visit. We will take images again when you have scheduled clinic visits up to 1 year after your first FLIR imaging session. The investigators will analyze the photos to monitor changes in skin temperature, which may indicate healing of the affected nerve. We will collect information from your medical records such as the type of injury you had, history of other injuries, demographic information, medical history, and the results of other nerve tests you’ve had.',
      ],
      image: 'images/research/clinical-thermography.jpg',
      imageAlt: 'Cutaneous Thermography for Diagnosis of Nerve Injury and Recovery',
    },
  ],

  collaborators: {
    intro: 'Researchers and partners contributing to our clinical research.',
    // Each collaborator: { name, affiliation, role, link, image }
    items: [
      { name: "Chris Crowe", link: "https://www.uwmedicine.org/bios/christopher-crowe" },
      { name: "Jeff Friedrich", link: "https://www.uwmedicine.org/bios/jeffrey-friedrich" },
      { name: "Ben Grannan", link: "https://www.uwmedicine.org/bios/benjamin-grannan" },
    ],
  },
};
