(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`};function t(t){return String(t).replace(/[&<>"']/g,t=>e[t])}var n=class{constructor(e){this.value=e}toString(){return this.value}};function r(e){return e==null||e===!1?``:e instanceof n?e.value:Array.isArray(e)?e.map(r).join(``):t(e)}function i(e,...t){let i=e[0];return t.forEach((t,n)=>{i+=r(t)+e[n+1]}),new n(i)}function a(e){return Array.isArray(e)?e.join(`

`):e}function o(e){return e.startsWith(`#`)?``:i`target="_blank" rel="noopener noreferrer"`}var s={heroImage:{src:`images/home/hero-neuromuscular-junction.png`,alt:`Fluorescence microscopy of a neuromuscular junction`},kicker:{text:`UNIVERSITY OF WASHINGTON`,abbr:`NDRG`,abbrTitle:`Neuromuscular Disease Research Group`},headline:`Welcome to the Nerve Lab!`,intro:`Work in my basic science laboratory focuses on the underlying mechanisms of axonal regeneration and muscle denervation and reinnervation. The long-term vision for my research program is to enhance our understanding of the complex interactions between nerve and muscle that are disrupted in peripheral nerve injuries, as well as to translate discoveries into therapeutic treatments to improve functional outcomes in our patients.`,cta:{label:`Learn more`,href:`#research`},patientNote:{text:`Are you a patient interested in participating in our studies? You can find more information`,linkText:`here`,href:`#research-clinical`}};function c(){let{heroImage:e,kicker:t,headline:n,intro:r,cta:a,patientNote:c}=s;return i`
    <section class="home-hero" aria-label="Welcome to the Nerve Lab">
      <div class="home-art">
        <img class="hero-image" src="${e.src}" alt="${e.alt}">
      </div>
      <div class="home-copy">
        <div class="home-kicker"><span>${t.text}</span> <span class="home-kicker-sep" aria-hidden="true">/</span> <abbr title="${t.abbrTitle}">${t.abbr}</abbr></div>
        <h1 class="display">${n}</h1>
        <p class="copy">${r}</p>
        <div class="home-actions">
          <a class="home-cta" href="${a.href}"><span class="home-cta-label">${a.label}</span> <span aria-hidden="true">→</span></a>
        </div>
        <p class="home-patient-note">${c.text} <a href="${c.href}" ${o(c.href)}>${c.linkText}</a>.</p>
      </div>
    </section>
  `}function l({eyebrow:e=``,title:t,intro:n=``}){return i`
    <section class="page-banner shell-wide">
      <div class="eyebrow">${e}</div>
      <h1 class="display">${t}</h1>
      ${n&&i`<p class="copy multiline">${a(n)}</p>`}
    </section>
    <div class="thin-rule"></div>
  `}var u={banner:{eyebrow:``,title:`Our Research`},overview:{title:`Understanding Nerve Repair and Regeneration`,text:[`Peripheral nerve injuries can lead to lasting loss of movement and sensation, even after surgical repair. Although peripheral nerves have the ability to regenerate, axonal growth is often slow, and prolonged denervation can cause muscles to lose their capacity for functional reinnervation.`,`The Nerve Lab addresses these challenges through two complementary research directions: understanding and accelerating axonal regeneration, and preserving motor endplates to support the reformation of neuromuscular junctions (NMJs). By investigating the cellular and molecular mechanisms that govern nerve repair, we seek to identify new therapeutic strategies that bridge fundamental discoveries with clinical applications, ultimately improving functional recovery for patients with peripheral nerve injuries.`]},areas:{eyebrow:`EXPLORE OUR WORK`,title:`Projects`,items:[{title:`Clinical Trials`,text:`Clinical trials and patient-oriented research on nerve injury and functional recovery.`,linkText:`Explore clinical research`,href:`#research-clinical`},{title:`Basic Science`,text:`Mechanisms of peripheral nerve regeneration, Schwann cell biology, and neuromuscular junction preservation.`,linkText:`Explore basic science`,href:`#research-basic`},{title:`Translational`,text:`Technologies and strategies linking laboratory discoveries to treatments for nerve injury.`,linkText:`Explore translational research`,href:`#research-translational`}]}};function d(){let{banner:e,overview:t,areas:n}=u;return i`
    ${l(e)}

    <section class="shell-wide research-overview">
      <h2>${t.title}</h2>
      <p class="multiline">${a(t.text)}</p>
    </section>

    <section class="research-areas">
      <div class="shell">
        <div class="eyebrow">${n.eyebrow}</div>
        <h2 class="section-title">${n.title}</h2>
        <div class="research-area-grid">
          ${n.items.map((e,t)=>i`
            <a class="research-area-link" href="${e.href}">
              <span class="research-area-index">${String(t+1).padStart(2,`0`)}</span>
              <h3>${e.title}</h3>
              <p>${e.text}</p>
              <span class="research-area-action">${e.linkText} →</span>
            </a>
          `)}
        </div>
      </div>
    </section>
  `}var f=0,p=(e,t=3,n=`#e8b1a2`,r=1)=>i`<path d="${e}" fill="none" stroke="${n}" stroke-width="${t}" opacity="${r}" stroke-linecap="round"/>`;function m(){let e=[];for(let t=0;t<12;t++){let n=305+t*14;e.push(p(`M-20 ${n} Q 120 ${n-30} 255 ${n+8} T650 ${n+7}`,3,`#b0bfc0`,.47))}e.push(p(`M245 -30 C238 90 340 95 330 170 S418 244 405 282`,10,`#f3c5ae`,.95));for(let t=0;t<8;t++){let n=335+t%4*26,r=250+Math.floor(t/4)*14;e.push(i`<ellipse cx="${n}" cy="${r}" rx="13" ry="7" fill="#e4b2a4" opacity=".9"/>`)}for(let t=0;t<15;t++){let n=235+t*13,r=310+Math.sin(t)*10;e.push(i`<path d="M${n} ${r} q9 -12 17 -2" stroke="#b9a3df" stroke-width="3" fill="none"/>`)}return e}function h(){let e=[];for(let t=0;t<26;t++){let n=40+t*19;e.push(p(`M-40 ${n} C${100+t%3*50} ${n-90} 320 ${n+95} 660 ${n-40}`,1.4,t%3?`#b5a7d2`:`#aa8ad4`,.45))}e.push(p(`M-25 420 C155 400 176 205 347 205 S495 90 644 -20`,13,`#9579c8`,.8)),e.push(p(`M-10 452 C180 391 240 355 310 282 S400 280 605 112`,6,`#d3c4ea`,.86));for(let t=0;t<50;t++){let n=(t*173+36)%600,r=(t*107+48)%540;e.push(i`<circle cx="${n}" cy="${r}" r="${2+t%3}" fill="#c3b1e6" opacity=".55"/>`)}return e}function g(){let e=[];for(let t=0;t<31;t++){let n=t*13;e.push(p(`M-38 ${70+n*.8} C 140 ${110+n} 200 ${n*.2} 360 ${140+n*.35} S570 ${80+n*.9} 680 ${180+n}`,t%4==0?3:1.5,t%3?`#c1a8df`:`#ad9bce`,.4))}e.push(p(`M-40 375 C170 370 158 189 365 177 S500 45 640 -13`,9,`#ad98d4`,.9)),e.push(p(`M314 186 C380 267 430 250 520 330 S580 417 648 402`,5,`#9780c6`,.76)),e.push(p(`M170 300 C120 210 70 188 -40 170`,5,`#9780c6`,.65));for(let t=0;t<37;t++){let n=(t*97+18)%600,r=(t*73+17)%540;e.push(i`<circle cx="${n}" cy="${r}" r="${2+t%4}" fill="#d3c2f0" opacity="${.2+t%4*.16}"/>`)}return e}var _={nmj:m,vascular:h,axon:g};function v(e=`axon`){let t=`art-${++f}`;return i`<svg viewBox="0 0 600 540" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Decorative scientific diagram, not experimental data" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${t}-bg" x1="0" x2="1" y2="1"><stop stop-color="#312946"/><stop offset="1" stop-color="#71608f"/></linearGradient><radialGradient id="${t}-glow"><stop stop-color="#d1b9ed" stop-opacity=".6"/><stop offset="1" stop-color="#d1b9ed" stop-opacity="0"/></radialGradient></defs><rect width="600" height="540" fill="url(#${t}-bg)"/><circle cx="400" cy="205" r="230" fill="url(#${t}-glow)"/>${(_[e]??g)()}</svg>`}var y=[`axon`,`nmj`,`vascular`];function b(e,t){let{title:n,subtitle:r,principalInvestigator:o,status:s,description:c,questions:l=[],methods:u,sourceUrl:d,image:f,imageAlt:p,caption:m=``,art:h=y[t%3]}=e;return i`
    <article class="project">
      <div class="project-visual">
        <div class="visual-frame">
          ${f?i`<img src="${f}" alt="${p||n}">`:v(h)}
        </div>
        <p class="image-note">${m}</p>
      </div>
      <div class="project-content">
        <span class="project-index">${String(t+1).padStart(2,`0`)}</span>
        <h3>${n}</h3>
        ${r&&i`<p class="project-subtitle">${r}</p>`}
        ${o&&i`
          <p class="study-pi"><span class="study-pi-label">Principal Investigator:</span> <span class="study-pi-name">${o}</span></p>
        `}
        ${s&&i`<p class="study-status">${s}</p>`}
        <p class="copy multiline">${a(c)}</p>
        ${l.length>0&&i`
          <h4>Questions we explore</h4>
          <ul class="question-list">${l.map(e=>i`<li>${e}</li>`)}</ul>
        `}
        ${u&&i`<p class="method-note">${u}</p>`}
        ${d&&i`<a class="study-source" href="${d}" target="_blank" rel="noopener noreferrer">Research source ↗</a>`}
      </div>
    </article>
  `}function x({name:e,affiliation:t,role:n,link:r,image:a}){return i`
    <article class="collaborator-card">
      ${a&&i`<img class="collaborator-logo" src="${a}" alt="${e} logo or portrait">`}
      <h3>${e}</h3>
      ${t&&i`<p>${t}</p>`}
      ${n&&i`<p>${n}</p>`}
      ${r&&i`<a class="text-link" href="${r}" target="_blank" rel="noopener noreferrer">Visit collaborator ↗</a>`}
    </article>
  `}function S({intro:e,items:t}){return i`
    <section class="shell collaborator-section" aria-label="Collaborators">
      <div class="collaborator-top">
        <div>
          <div class="eyebrow">WORKING TOGETHER</div>
          <h2 class="section-title">Collaborators</h2>
        </div>
        <p class="copy">${e}</p>
      </div>
      ${t.length>0?i`<div class="collaborator-grid">${t.map(x)}</div>`:i`<p class="collaborator-empty">Collaborator profiles will be added here.</p>`}
    </section>
  `}function C({banner:e,studies:t,collaborators:n}){return i`
    ${l({eyebrow:i`<a class="research-breadcrumb" href="#research">RESEARCH</a> <span aria-hidden="true">/</span> ${e.title.toUpperCase()}`,title:e.title,intro:e.intro})}

    <section class="study-list">
      <div class="shell">
        ${t.length>0?t.map(b):i`<p class="research-empty">Studies for this category are being prepared.</p>`}
      </div>
    </section>

    ${S(n)}
  `}function w(e){return(e.match(/\p{L}+/gu)??[`?`]).map(e=>e[0]).slice(0,2).join(``)}function T({photo:e,name:t}){return i`
    <div class="portrait">
      ${e?i`<img src="${e}" alt="Portrait of ${t}">`:i`<span class="portrait-placeholder">${w(t)}</span>`}
    </div>
  `}function E(e){return i`
    <article class="member-card">
      ${T(e)}
      <h3 class="member-name">${e.name}</h3>
      <div class="member-role">${e.role}</div>
      <p class="member-description multiline">${a(e.bio)}</p>
    </article>
  `}function D(e){return i`<div class="members-grid">${e.map(E)}</div>`}var O={banner:{eyebrow:`THE LAB`,title:`Team`},groupPhoto:{eyebrow:`TOGETHER IN RESEARCH`,title:`Our Team`,image:``,caption:`The Nerve Lab team`,placeholderTitle:`Space reserved for our lab group photo`,placeholderNote:`Add an approved team photo in the Team editor`},pi:{heading:`Principal Investigator`,role:`Principal Investigator`,name:`Yusha “Katie” Liu, MD, PhD`,title:`Assistant Professor · Division of Plastic Surgery, Department of Surgery`,bio:`can put biography here or can put links whatever we want`,photo:`images/team/yusha-katie-liu.jpg`,profileUrl:`https://www.uwmedicine.org/bios/yusha-katie-liu`},groups:[{title:`Lab Members`,members:[{name:`Sean Yuan, PhD`,role:`Research Scientist`,bio:`Sean has a background in molecular biology and microbiology, with extensive research experience in drug discovery, cancer biology, and protein–small molecule interactions. He has worked across academia and biotech, developing assays, and studying mechanisms of disease using cell-based and molecular techniques. Outside the lab, he enjoys traveling and spending time with his family.`,photo:`images/team/sean-yuan.jpg`},{name:`Bonnie J. Berry PhD`,role:`Research/Laboratory Management`,bio:`Bonnie has a background in tissue engineering, studying mechanisms of pathology in Alzheimer’s Disease, and astrobiology. She and her husband have two ridiculous and lovely Boston Terriers and enjoy traveling when they can get away from the lab.`,photo:`images/team/bonnie-berry.png`},{name:`Elise Kouris`,role:`Research Scientist`,bio:`Elise is a research scientist with a background in cellular and molecular neuroscience. She has a passion for research with direct clinical implications and spent her undergraduate time researching the neuroendocrine controls and novel treatments of polycystic ovary syndrome. When she is not working in the lab, she enjoys walking with her greyhound and seeing live music.`,photo:`images/team/elise-kouris.jpg`},{name:`Joyce Liu`,role:`Research Scientist`,bio:`Short biography.`,photo:`images/team/joyce-liu.png`},{name:`Haneul Ryou`,role:`Role`,bio:`Short biography.`},{name:`New member`,role:`Role`,bio:`Short biography.`}]},{title:`Clinical Team`,members:[{name:`Add clinical member`,role:`Clinical research team`,bio:`Add a name, role, photo, and short biography in the People editor.`}]},{title:`Translational Team`,members:[{name:`Add translational member`,role:`Translational research team`,bio:`Add a name, role, photo, and short biography in the People editor.`}]}]};function k({eyebrow:e,title:t,image:n,caption:r,placeholderTitle:a,placeholderNote:o}){return i`
    <section class="team-group-photo">
      <div class="group-photo-heading">
        <div class="eyebrow">${e}</div>
        <h2 class="team-heading">${t}</h2>
      </div>
      ${n?i`
          <figure class="group-photo-figure">
            <img src="${n}" alt="Group photograph of Nerve Lab members">
            <figcaption>${r}</figcaption>
          </figure>`:i`
          <div class="group-photo-empty">
            <span>${a}</span>
            <small>${o}</small>
          </div>`}
    </section>
  `}function A(e){return i`
    <h2 class="team-heading">${e.heading}</h2>
    <div class="pi-block">
      ${T(e)}
      <div class="pi-text">
        <div class="eyebrow">${e.role}</div>
        <h3>${e.name}</h3>
        <div class="pi-title">${e.title}</div>
        <p class="copy multiline">${a(e.bio)}</p>
        <a class="text-link" href="${e.profileUrl}" target="_blank" rel="noopener noreferrer">Faculty profile ↗</a>
      </div>
    </div>
  `}function j(){let{banner:e,groupPhoto:t,pi:n,groups:r}=O;return i`
    ${l(e)}

    <section class="shell-wide team-wrap">
      ${k(t)}
      ${A(n)}
      ${r.filter(e=>e.members.length>0).map(e=>i`
          <div class="team-group">
            <h2 class="team-heading">${e.title}</h2>
            ${D(e.members)}
          </div>
        `)}
    </section>
  `}var M={banner:{eyebrow:`SELECTED WORK`,title:`Publications`},publications:[{year:`2026`,title:`Electrical Modalities in the Rehabilitation of Peripheral Nerve Injuries: State of the Literature and Current Clinical Applications`,authors:`Smith SM, Schlosser KM, Munaim R, Vu SH, Uh JA, Liu YK`,journal:`Muscle & Nerve`,url:`https://pubmed.ncbi.nlm.nih.gov/42394298/`},{year:`2026`,title:`Current Gaps and Future Directions in Brachial Plexus, Upper-Extremity and Lower-Extremity Nerve Injuries (Nerve SPACE 2025)`,authors:`Blum E, Wright DJ, Liu YK, Dy CJ`,journal:`Journal of Hand Surgery Global Online`,url:`https://pubmed.ncbi.nlm.nih.gov/41640819/`},{year:`2024`,title:`The Role of Electrical Stimulation in Peripheral Nerve Regeneration: Current Evidence and Future Directions`,authors:`Liu Y, Fox PM`,journal:`Journal of Hand Surgery Global Online`,url:`https://pubmed.ncbi.nlm.nih.gov/39381378/`}]};function N(){let{banner:e,publications:t}=M;return i`
    ${l(e)}

    <section class="shell-wide publications-wrap">
      ${t.map(e=>i`
        <a class="publication" href="${e.url}" target="_blank" rel="noopener noreferrer">
          <div class="pub-year">${e.year}</div>
          <div>
            <h2 class="pub-title">${e.title}</h2>
            <div class="pub-meta">${e.authors}<br>${e.journal}</div>
          </div>
          <div class="arrow" aria-hidden="true">↗</div>
        </a>
      `)}
    </section>
  `}var P={banner:{eyebrow:`FROM THE LAB`,title:`Lab News`,intro:`Selected updates and milestones from the Liu Lab and its research community.`},news:[{date:`JUNE 2026`,title:`Tietze Research Award recognizes Dr. Liu’s research`,description:`ISCRM announced that Yusha (Katie) Liu and Mark Bothwell received awards from the John H. Tietze Foundation Trust to support their research.`,url:`https://iscrm.uw.edu/news/`},{date:`JANUARY 2024`,title:`Introducing Dr. Yusha “Katie” Liu at ISCRM`,description:`An ISCRM profile highlights Dr. Liu’s surgeon-scientist career and the research directions of the new laboratory.`,url:`https://iscrm.uw.edu/welcome-yusha-katie-liu/`}]};function F(){let{banner:e,news:t}=P;return i`
    ${l(e)}

    <section class="shell-wide news-wrap">
      ${t.map(e=>i`
        <article class="news-entry">
          <span class="news-date">${e.date}</span>
          <div>
            <h2>${e.title}</h2>
            <p>${e.description}</p>
            ${e.url&&i`<a class="text-link" href="${e.url}" target="_blank" rel="noopener noreferrer">Read more ↗</a>`}
          </div>
        </article>
      `)}
    </section>
  `}var I={banner:{eyebrow:`CONNECT WITH US`,title:`Contact`},locations:{eyebrow:`OUR LOCATIONS`,items:[{name:`Northwest Institute for Nerve Injury at Harborview Medical Center`,address:`Ninth & Jefferson Building, 908 Jefferson St., Floor 6, Seattle, WA 98104`},{name:`University of Washington Nerve Lab`,address:`850 Republican St., Seattle, WA 98109`}]},recruiting:{eyebrow:`OPPORTUNITIES`,title:`Join our team`,text:`We welcome inquiries from curious scientists interested in joining our research efforts, including postdoctoral fellows, graduate students, medical students, and clinical residents and fellows.`,email:`UWnerve@uw.edu`}};function L(){let{banner:e,locations:t,recruiting:n}=I;return i`
    ${l(e)}

    <section class="shell-wide contact-layout">
      <div class="contact-locations">
        <div class="eyebrow">${t.eyebrow}</div>
        ${t.items.map(e=>i`
          <div class="address-block">
            <h2>${e.name}</h2>
            <p>${e.address}</p>
          </div>
        `)}
      </div>

      <aside class="contact-recruit">
        <div class="eyebrow">${n.eyebrow}</div>
        <h2>${n.title}</h2>
        <p>${n.text}</p>
        <a class="contact-email-link" href="mailto:${n.email}">${n.email} <span aria-hidden="true">↗</span></a>
      </aside>
    </section>
  `}var R={banner:{title:`Clinical Trials`,intro:`Learn about our team’s current research studies to improve care for nerve injuries and see if you are eligible to participate.`},studies:[{title:`PLANeT Study`,principalInvestigator:`Yusha Katie Liu, MD, PhD`,description:[`The PLANeT (Prospective Longitudinal Assessment of Nerve Trauma) Study is a multicenter prospective cohort study for patients with traumatic brachial plexus injuries who undergo surgery. The goal is to identify the best outcome measures to use for patients with brachial plexus injuries that include a comprehensive patient perspective on function, pain, and quality of life.`,`If you participate in this study, we will complete surveys with you at your preoperative clinic visit, and then again at several time points after surgery. These surveys are regarding your ability to perform certain activities, any pain you experience, how you cope with your injury, and how your injury has affected your life.`],art:`axon`,imageAlt:`Conceptual nerve repair diagram`,caption:`Conceptual illustration · replace with an approved figure`},{title:`Mechanisms Underlying Peripheral Nerve Injury and Regeneration`,principalInvestigator:`Yusha Katie Liu, MD, PhD`,description:[`Our primary goal is to gain a deeper understanding of the biology of peripheral nerve injuries. To achieve this, we collect small samples of peripheral nerve and/or mixed nerve/muscle tissue during surgery. This is tissue that would typically be discarded, so we are utilizing something that would otherwise go to waste. We take this tissue into the lab to study further.`,`We aim to learn more about what happens to nerves when they are damaged, like how nerves break down, how they repair themselves, and how certain conditions like painful neuromas occur. By understanding these processes better, we can develop new treatments to help patients with nerve injuries. This study will provide valuable insights into the progression of nerve injury and recovery.`],sourceUrl:`https://uwsurgery.org/wp-content/uploads/2024/12/surgsynopsis_fall_2024_rfs_final.pdf`,art:`vascular`,imageAlt:`Conceptual illustration of nerve injury outcomes`,caption:`Conceptual illustration · replace with an approved figure`},{title:`Utility of Rehabilitation Psychology in Peripheral Nerve Injury Care`,principalInvestigator:`Jeffrey Friedrich, MD`,description:[`Nerve injuries have huge impacts on people’s lives, their work, finances, and relationships. In our clinic, we seek to provide comprehensive care to the whole person and include rehabilitation psychologists as a part of our multidisciplinary team. We are conducting a study to understand the role of rehabilitation psychology in our peripheral nerve clinic. Patients who have had a nerve injury will be asked to evaluate their interactions with the rehabilitation psychologists in the clinic.`,`If you decide to be in this study, we will ask you to fill out a short survey with your thoughts about the role of rehabilitation psychologists in our clinic. The survey will take you about 5 minutes to complete.`],sourceUrl:`https://uwsurgery.org/wp-content/uploads/2024/02/surgsynopsis-wtr-2024-final-rfs.pdf`,art:`nmj`,imageAlt:`Conceptual illustration of sensory nerve pathways`,caption:`Conceptual illustration · replace with an approved figure`},{title:`Neuraptive Phase III`,principalInvestigator:`Yusha Katie Liu, MD, PhD`,description:[`NTX-001 is a single use surgical product used with standard nerve repair in patients between 18 and 80 years old. It is designed to speed nerve recovery, which is often slow and incomplete, sometimes leading to long-term motor or sensory loss. By reconnecting severed nerves (PEG fusion), NTX-001 may reduce nerve degeneration and muscle atrophy, shorten recovery time, and improve return of function.`,`What happens to me if I agree to take part in this research?`,`The NTX-001 surgical product contains three (3) solutions that are applied in consecutive order and timed steps to your severed nerve during the surgical repair. You will be randomly (like flipping a coin) entered into either the NTX-001 or Standard of Care group.`,`Other procedures include collection of your vital signs and medical history, a physical exam, blood tests, a nerve stimulation test, electromyography, nerve conduction and sensory tests, muscle and sensory assessments, and questionnaires are conducted during the course of a 12-month period post operatively.`],image:`images/research/clinical-neuraptive.png`,imageAlt:`Neuraptive Phase III`},{title:`Neuraptive Expanded Access`,principalInvestigator:`Yusha Katie Liu, MD, PhD`,description:[`The proposed use of NTX-001 for transections of upper extremity and facial peripheral nerves, acutely or planned. For this expanded access program, there is a case-by-case internal review process conducted by Neuraptive after the respective investigator provides a prospective case narrative for enrollment consideration. Allowed Sunderland Classifications are IV degree (Seddon’s Class II) and V degree (Seddon’s Class III). If the case is approved, the investigator can move forward.`,`If you decide to take part in this research study, the general procedures include applying an investigational solution to the two ends of the nerve that’s being surgically repaired followed by standard of care follow-up visits. There are currently no known side effects related to the use of NTX-001.`],image:`images/research/clinical-neuraptive.png`,imageAlt:`Neuraptive Expanded Access`},{title:`FASTR-TEN`,principalInvestigator:`Yusha Katie Liu, MD, PhD`,description:[`The purpose of this research is to evaluate the effects of a brief period of electrical stimulation, done during the surgery, to promote recovery and improve arm function following surgical treatment of nerve injury using the investigational Checkpoint BEST System.`,`If you agree to participate in this research study, you will receive current standard of surgical care for your nerve injury but will also be randomly chosen to either receive electrical nerve stimulation after repair or no electrical stimulation. The surgeon will know which treatment group you are in, but neither you nor the study personnel performing the follow-up tests will know if you received the electrical stimulation or not. If you decide to participate in this study, you will have up to 8 required study visits over a time period of approximately 9 months.  These study visits will require you to visit the clinic.  Each visit to the clinic will last about 1 hour.`],art:`axon`},{title:`Human Lipoaspirate for Regenerative Medicine`,principalInvestigator:`Yusha Katie Liu, MD, PhD`,description:[`Adipose tissue (fat cells) have been shown some promise in their ability to speed up the healing of other types of cells and tissues. If we can develop this into new treatments to aid in healing, patients who have sustained traumatic injuries could benefit.`,`If you agree to be in this study, we will ask you to allow us to collect any biological material, including cells and fluid, that was obtained through liposuction that will not be used in your surgery. This material would otherwise be thrown away. From some of the discarded cells that we collect, we would like to grow additional cells to help us further understand how these cells can help repair other damaged tissue in the future. This is called creating cell lines and these cells may grow in the lab indefinitely.`],art:`axon`},{title:`Cutaneous Thermography for Diagnosis of Nerve Injury and Recovery`,principalInvestigator:`Yusha Katie Liu, MD, PhD`,description:[`This study utilizes the FLIR ONE Series Thermal Imaging Camera to capture an infrared (IR) thermographic image of a limb affected by a peripheral nerve injury due to any cause, such as compression, trauma, and iatrogenic. IR imaging is a relatively quick, low-cost, no-contact method of objectively evaluating thermal differences present in a body part affected by peripheral neuropathy. We are investigating the utility of thermal imaging in diagnosing peripheral nerve injury and recovery.`,`If you agree to participate in this research study, a physician or research coordinator will use the FLIR ONE camera to scan your limb during your clinic visit at Harborview Medical Center. Using the camera will only add about 10 minutes to your clinic visit. We will take images again when you have scheduled clinic visits up to 1 year after your first FLIR imaging session. The investigators will analyze the photos to monitor changes in skin temperature, which may indicate healing of the affected nerve. We will collect information from your medical records such as the type of injury you had, history of other injuries, demographic information, medical history, and the results of other nerve tests you’ve had.`],image:`images/research/clinical-thermography.jpg`,imageAlt:`Cutaneous Thermography for Diagnosis of Nerve Injury and Recovery`}],collaborators:{intro:`Researchers and partners contributing to our clinical research.`,items:[]}},z={banner:{title:`Basic Science`,intro:`Overview of basic science research`},studies:[{title:`Microvascular patches for improving axonal regeneration`,description:`With our collaborator, Dr. Samuel Rayner, we are working to improve axonal regeneration after peripheral nerve injury. Microvascular patches made of collagen are lined with human endothelial cells and implanted into rats post peripheral nerve injury to promote the growth of blood vessels. We hypothesize that our novel bioengineered patch will provide a supportive local microenvironment to enhance angiogenesis and axonal regeneration.`,image:`images/research/basic-microvascular-patches.jpg`,imageAlt:`Illustrative visualization of branching peripheral nerve fibers`},{title:`Exosomes and neurotrophic factors`,description:`Investigating exosomes and neurotrophic factors provides important insight into how cells communicate and support neural growth, survival, and repair. Exosomes act as nanoscale vesicles that transport proteins, lipids, and RNA between cells, influencing processes such as inflammation, regeneration, and synaptic plasticity. Neurotrophic factors play a central role in promoting neuron survival, differentiation, and axonal growth. Together, investigating these components helps researchers better understand the molecular mechanisms underlying neural repair and identify potential therapeutic targets for enhancing recovery after nerve injury or neurodegenerative disease.`,image:`images/research/basic-exosomes.jpg`,imageAlt:`Conceptual diagram of a neuromuscular junction`},{title:`Denervated human tissue`,description:`Studying human tissue that has been denervated provides critical insight into how the loss of nerve supply alters structure and function at the cellular and molecular levels. Denervation leads to progressive changes such as muscle atrophy, altered gene expression, and impaired regenerative capacity, making it an important model for understanding neuromuscular disorders and injury. By examining these tissues, we hope to identify pathways involved in degeneration and recovery, evaluate the effectiveness of therapeutic interventions, and develop strategies to promote reinnervation and functional restoration.`,image:`images/research/basic-denervated-tissue.jpg`,imageAlt:`Conceptual nerve and vascular network illustration`}],collaborators:{intro:`Scientific partners working with us on fundamental questions of nerve and muscle regeneration.`,items:[]}},B={banner:{title:`Translational Research`,intro:`Connecting discoveries in nerve biology to new approaches for repair and rehabilitation.`},studies:[{title:`EMG-driven rehabilitation and therapeutic gaming`,subtitle:`Translating residual muscle signals into engaging rehabilitation`,status:`Research and development · not presented as an active clinical trial`,description:`Dr. Liu and collaborators developed a wireless surface electromyography (EMG) system linked to a smartphone game. It uses muscle activity to control a rehabilitation task and may help patients practice motor relearning after peripheral nerve or tendon transfer surgery.`,questions:[`Can weak muscle signals support active task-based rehabilitation?`,`How might interactive feedback improve motor relearning?`],methods:`UW Department of Surgery research profile; verify study stage and availability before publication.`,sourceUrl:`https://uwsurgery.org/wp-content/uploads/2024/02/surgsynopsis-wtr-2024-final-rfs.pdf`,art:`nmj`,imageAlt:`Conceptual EMG-driven rehabilitation illustration`,caption:`Conceptual illustration · replace with an approved project image`},{title:`Vascularized patches for peripheral nerve repair`,subtitle:`Tissue engineering and the nerve microenvironment`,status:`Collaborative translational research · development status to confirm`,description:`A collaborative line of research at UW investigates patterned microvascular patches intended to encourage angiogenesis in nerve surgery. This translational approach explores whether engineering the local vascular environment may support nerve regeneration.`,questions:[`How can engineered microvasculature support injured nerves?`,`Can localized angiogenesis be incorporated into surgical repair strategies?`],methods:`Collaborative work listed by the UW Rayner Lab with Katie Liu and Sean Yuan.`,sourceUrl:`https://sites.uw.edu/raynerlab/`,art:`vascular`,imageAlt:`Conceptual diagram of vascularization and peripheral nerves`,caption:`Conceptual illustration · replace with an approved project image`}],collaborators:{intro:`Partners helping translate discoveries into new approaches for peripheral nerve repair.`,items:[]}};function V(e,{onNavigate:t}={}){let n=()=>{let n=location.hash.slice(1).trim().toLowerCase(),r=e.includes(n)?n:`home`;document.querySelectorAll(`.page`).forEach(e=>{e.classList.toggle(`active`,e.id===`page-${r}`)}),document.querySelectorAll(`.nav-link, .nav-submenu a`).forEach(e=>{let t=e.dataset.page===r;e.classList.toggle(`active`,t),t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)}),t?.(r),window.scrollTo({top:0,behavior:`instant`})};window.addEventListener(`hashchange`,n),n()}var H=document.getElementById(`mobile-toggle`),U=document.getElementById(`main-nav`),W=document.getElementById(`research-menu`),G=document.getElementById(`research-dropdown-toggle`);function K(e){W.classList.toggle(`open`,e),G.setAttribute(`aria-expanded`,String(e))}function q(e){U.classList.toggle(`open`,e),H.setAttribute(`aria-expanded`,String(e))}function J(){H.addEventListener(`click`,()=>{q(!U.classList.contains(`open`))}),G.addEventListener(`click`,e=>{e.preventDefault(),K(!W.classList.contains(`open`))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&W.classList.contains(`open`)&&(G.focus(),K(!1))}),document.addEventListener(`click`,e=>{e.target.closest(`#research-menu`)||K(!1)})}function Y(e){W.classList.toggle(`current`,e===`research`||e.startsWith(`research-`)),K(!1),q(!1)}var X={home:c,research:d,"research-clinical":()=>C(R),"research-basic":()=>C(z),"research-translational":()=>C(B),people:j,publications:N,news:F,contact:L},Z=document.getElementById(`site-content`);for(let[e,t]of Object.entries(X)){let n=document.createElement(`div`);n.className=`page`,n.id=`page-${e}`,n.innerHTML=String(t()),Z.append(n)}J(),V(Object.keys(X),{onNavigate:Y});