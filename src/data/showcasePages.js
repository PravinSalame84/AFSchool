import { campusImages, sharedImages } from '../assets/images'

export const showcaseCategoryPages = {
  curriculum: {
    path: '/the-right-curriculum',
    crumb: 'The Right Curriculum',
    eyebrow: 'Learning Pathways',
    title: 'A learning journey that blends rigour, creativity and readiness for the future',
    subtitle:
      'Air Force School brings academic depth together with technology, creativity, inquiry and guided exploration so children learn with confidence, curiosity and purpose.',
    image: sharedImages.teacherImageThree,
    intro:
      'This curriculum cluster is designed to help families explore how classroom teaching, creativity, technology and hands-on discovery work together across the school experience.',
    cards: [
      {
        title: 'Digital Learning',
        description: 'Smart classroom habits, guided digital tools and responsible technology use in everyday learning.',
        to: '/digital-learning',
        image: campusImages.activityTwo,
      },
      {
        title: 'Innovation Lab',
        description: 'Prototype thinking, STEM exploration and guided problem-solving through structured activity cycles.',
        to: '/innovation-lab',
        image: campusImages.chemistryLab,
      },
      {
        title: 'Innovative Academic Programs',
        description: 'Academic support models that build clarity, confidence and consistency beyond textbook completion.',
        to: '/innovative-academic-programs',
        image: sharedImages.teacherImageOne,
      },
      {
        title: 'Art Curriculum',
        description: 'Visual expression, observation and craft-based thinking integrated into holistic child development.',
        to: '/art-curriculum',
        image: campusImages.artRoom,
      },
      {
        title: 'Thematic Learning Program',
        description: 'Cross-disciplinary learning that helps children connect ideas instead of memorising them in isolation.',
        to: '/thematic-learning-program',
        image: sharedImages.teacherImageSix,
      },
      {
        title: 'Air Force Innovation Centre',
        description: 'A focused space for experimentation, presentation, student-led ideas and applied learning experiences.',
        to: '/airforce-innovation-center',
        image: sharedImages.teacherImageFour,
      },
    ],
  },
  environment: {
    path: '/the-right-environment',
    crumb: 'The Right Environment',
    eyebrow: 'Campus Experience',
    title: 'A school environment that helps children feel secure, engaged and ready to grow',
    subtitle:
      'A meaningful school environment is shaped by safety, relationships, purposeful spaces and the daily rhythm that helps children do their best work.',
    image: sharedImages.teacherImageFour,
    intro:
      'These pages highlight how Air Force School shapes the wider student experience through faculty culture, learning spaces, life skills and a thoughtful school approach.',
    cards: [
      {
        title: 'Our Labs',
        description: 'Purposeful spaces for science, mathematics, computers, creativity and practical observation.',
        to: '/our-labs',
        image: campusImages.chemistryLab,
      },
      {
        title: 'The Right Approach',
        description: 'Clear routines, warm mentoring, parent partnership and steady academic support across stages.',
        to: '/the-right-approach',
        image: sharedImages.teacherImageSeven,
      },
      {
        title: 'The Right Skills',
        description: 'Sports, culture, communication and leadership experiences that extend learning beyond the timetable.',
        to: '/the-right-skills',
        image: campusImages.playground,
      },
      {
        title: 'The Right Faculty',
        description: 'Educators who combine discipline, care, pedagogy and continuous professional growth.',
        to: '/the-right-faculty',
        image: sharedImages.teacherImageTwo,
      },
    ],
  },
}

export const showcasePages = {
  'digital-learning': {
    crumb: 'Digital Learning',
    eyebrow: 'The Right Curriculum',
    title: 'Digital learning that makes classroom understanding clearer and more engaging',
    subtitle:
      'Technology is used here to enrich explanation, revision and interaction while keeping teaching, conversation and concept-building at the heart of every lesson.',
    image: sharedImages.teacherImageThree,
    category: 'curriculum',
    highlights: ['Smart classroom support', 'Age-appropriate digital habits', 'Visual and interactive teaching'],
    sections: [
      {
        kicker: 'Why it matters',
        title: 'Technology is used to strengthen explanation, revision and participation',
        body:
          'Digital learning at Air Force School is designed to make abstract concepts easier to understand. Teachers use visual explanation, structured presentations, guided reinforcement and classroom interactions so children can absorb ideas more confidently.',
        image: campusImages.activityTwo,
        points: ['Concept visualisation through smart boards', 'Guided use of digital learning aids', 'Clearer revision and recap support'],
      },
      {
        kicker: 'Student experience',
        title: 'Children build responsible digital confidence step by step',
        body:
          'Students are introduced to age-appropriate digital practices that encourage curiosity, careful listening and independent effort. The focus stays on learning behaviour, not passive screen time.',
        image: sharedImages.teacherImageSix,
        points: ['Presentation-rich classroom sessions', 'Research readiness for older learners', 'Digital citizenship and safe use habits'],
      },
      {
        kicker: 'What families notice',
        title: 'Learning becomes more visible at home and easier to discuss',
        body:
          'When a concept has been seen, heard and practised in multiple ways, children often explain it better at home. Parents notice stronger recall, more specific classroom conversations and better revision readiness.',
        image: sharedImages.teacherImageSeven,
        points: ['Better concept recall', 'Improved engagement during revision', 'Stronger parent-child academic conversations'],
      },
    ],
    outcomes: ['Interactive explanation', 'Stronger revision', 'Practical digital readiness'],
  },
  'innovation-lab': {
    crumb: 'Innovation Lab',
    eyebrow: 'The Right Curriculum',
    title: 'An innovation lab where curiosity turns into ideas, testing and discovery',
    subtitle:
      'Students are encouraged to investigate, build, question and improve in a space designed for hands-on exploration and practical learning.',
    image: campusImages.chemistryLab,
    category: 'curriculum',
    highlights: ['Hands-on STEM tasks', 'Prototype thinking', 'Collaborative discovery'],
    sections: [
      {
        kicker: 'Hands-on learning',
        title: 'Children learn by trying, observing and refining',
        body:
          'The innovation lab encourages children to move beyond passive listening. They investigate simple challenges, work with models or materials, and understand that good ideas often become stronger through testing and iteration.',
        image: campusImages.chemistryLab,
        points: ['Activity-based STEM exposure', 'Observation-led learning cycles', 'Problem-solving with materials and models'],
      },
      {
        kicker: 'Mindset development',
        title: 'The lab helps students become more confident thinkers',
        body:
          'Students are encouraged to explain their thinking, work in small teams and respond constructively when something does not work the first time. That process builds resilience as much as it builds technical understanding.',
        image: sharedImages.teacherImageFour,
        points: ['Confidence in presenting ideas', 'Team-based exploration', 'Trial, error and improvement habits'],
      },
      {
        kicker: 'Beyond the room',
        title: 'Innovation thinking supports classroom subjects too',
        body:
          'The habits developed in a lab setting often strengthen mathematics, science and communication. Students become more willing to ask questions, compare methods and connect theory with everyday application.',
        image: sharedImages.teacherImageOne,
        points: ['Better connections to science concepts', 'Applied reasoning in mathematics', 'Clearer explanation of process and outcomes'],
      },
    ],
    outcomes: ['Inquiry mindset', 'Prototype confidence', 'Applied reasoning'],
  },
  'innovative-academic-programs': {
    crumb: 'Innovative Academic Programs',
    eyebrow: 'The Right Curriculum',
    title: 'Academic programs designed to strengthen progress, confidence and consistency',
    subtitle:
      'Strong learning outcomes are built when structure, support, revision and enrichment work together in a clear and thoughtful way.',
    image: sharedImages.teacherImageOne,
    category: 'curriculum',
    highlights: ['Concept reinforcement', 'Remedial and enrichment balance', 'Assessment-aware teaching'],
    sections: [
      {
        kicker: 'Academic design',
        title: 'Teaching plans are shaped around clarity, pace and reinforcement',
        body:
          'At Air Force School, academic planning is not limited to syllabus completion. Teachers focus on concept sequencing, recap, checkpoint understanding and targeted support so students stay with the learning journey instead of falling behind silently.',
        image: sharedImages.teacherImageOne,
        points: ['Structured concept progression', 'Teacher-led reinforcement cycles', 'Built-in recap and feedback'],
      },
      {
        kicker: 'Student support',
        title: 'Different learners are supported in different ways',
        body:
          'Some children need challenge, while others need reassurance and repeated explanation. Innovative programs include revision support, focused worksheets, practice routines and encouragement that respects different learning speeds.',
        image: sharedImages.teacherImageFive,
        points: ['Remedial support where needed', 'Practice pathways for mastery', 'Encouragement for self-paced growth'],
      },
      {
        kicker: 'Long-term value',
        title: 'The aim is confidence with understanding, not short-term memorisation',
        body:
          'Children benefit most when they understand why a method works and when to use it. A thoughtful academic program helps them build dependable habits that carry into higher classes and assessments.',
        image: sharedImages.teacherImageSix,
        points: ['Stronger exam readiness', 'Clearer foundational understanding', 'Healthier academic confidence'],
      },
    ],
    outcomes: ['Steady academic growth', 'Personalised support', 'Better learning habits'],
  },
  'art-curriculum': {
    crumb: 'Art Curriculum',
    eyebrow: 'The Right Curriculum',
    title: 'An art journey that nurtures creativity, observation and self-expression',
    subtitle:
      'Art is valued as an essential part of child development, helping students observe closely, create confidently and take pride in expression.',
    image: campusImages.artRoom,
    category: 'curriculum',
    highlights: ['Creative confidence', 'Craft and display work', 'Visual expression'],
    sections: [
      {
        kicker: 'Creative foundations',
        title: 'Children are encouraged to observe before they create',
        body:
          'Art sessions help students notice colour, form, space and detail. They learn that creativity is not random output but a thoughtful way of seeing, interpreting and presenting the world around them.',
        image: campusImages.artRoom,
        points: ['Drawing and colouring practice', 'Observation-based activities', 'Confidence through making and displaying'],
      },
      {
        kicker: 'Beyond aesthetics',
        title: 'Art also strengthens patience, focus and independent thought',
        body:
          'When students work through a craft task or visual composition, they practise sequencing, persistence and decision-making. These are valuable learning behaviours that influence work across subjects.',
        image: campusImages.activityOne,
        points: ['Task completion habits', 'Fine motor practice', 'Independent visual decision-making'],
      },
      {
        kicker: 'School culture',
        title: 'Displays, events and projects make creativity visible across campus',
        body:
          'The school environment becomes more vibrant when student work is seen and celebrated. Art supports exhibitions, theme days, assemblies and integrated projects that make children feel proud of their contribution.',
        image: campusImages.activityTwo,
        points: ['Project and display integration', 'Event-based creative participation', 'Student pride through visibility'],
      },
    ],
    outcomes: ['Creative thinking', 'Patience and focus', 'Visible student expression'],
  },
  'thematic-learning-program': {
    crumb: 'Thematic Learning Program',
    eyebrow: 'The Right Curriculum',
    title: 'Thematic learning that helps children see how ideas connect',
    subtitle:
      'Children learn more meaningfully when language, science, art and everyday observation are connected through themes they can understand and remember.',
    image: sharedImages.teacherImageSix,
    category: 'curriculum',
    highlights: ['Cross-subject connections', 'Age-appropriate inquiry', 'Meaningful classroom context'],
    sections: [
      {
        kicker: 'Connected learning',
        title: 'Themes make classroom experiences more memorable and coherent',
        body:
          'A thematic approach helps children relate one idea to another. A single classroom theme can support vocabulary, observation, project work and discussion, making learning feel purposeful rather than fragmented.',
        image: sharedImages.teacherImageSix,
        points: ['Better continuity across lessons', 'Clearer classroom context', 'Improved recall through connection'],
      },
      {
        kicker: 'For younger learners',
        title: 'Themes are especially powerful in early and primary years',
        body:
          'Children in the foundational years respond strongly to stories, visuals, routines and repeated patterns. Thematic learning creates familiar anchors that help them engage with confidence and joy.',
        image: sharedImages.teacherImageThree,
        points: ['Story and activity integration', 'Familiar learning anchors', 'Confidence in participation'],
      },
      {
        kicker: 'For teachers and parents',
        title: 'It also makes learning easier to communicate and extend',
        body:
          'When topics are organised around meaningful themes, teachers can integrate activities more naturally and parents can understand what their child is exploring more clearly at home.',
        image: sharedImages.teacherImageFive,
        points: ['Clearer lesson linkage', 'More meaningful home conversations', 'Integrated project opportunities'],
      },
    ],
    outcomes: ['Better concept linkage', 'Higher engagement', 'Memorable classroom experiences'],
  },
  'airforce-innovation-center': {
    crumb: 'Air Force Innovation Centre',
    eyebrow: 'The Right Curriculum',
    title: 'An innovation centre that gives student ideas room to grow',
    subtitle:
      'This space reflects a school culture where students are encouraged to explore, present, improve and take ownership of meaningful work.',
    image: sharedImages.teacherImageFour,
    category: 'curriculum',
    highlights: ['Student-led exploration', 'Presentation culture', 'Applied project mindset'],
    sections: [
      {
        kicker: 'Purpose',
        title: 'The centre gives promising ideas a dedicated space to grow',
        body:
          'An innovation centre becomes valuable when it serves as more than a room. It becomes a shared culture of exploration where students can test thinking, display work and take classroom ideas further.',
        image: sharedImages.teacherImageFour,
        points: ['Dedicated innovation identity', 'Scope for project display', 'Encouragement for student initiative'],
      },
      {
        kicker: 'Student development',
        title: 'Children learn to explain, refine and take responsibility for their work',
        body:
          'When students present a model, a process or an idea, they learn ownership. They understand how to describe their effort, respond to feedback and keep improving with discipline.',
        image: sharedImages.teacherImageTwo,
        points: ['Presentation readiness', 'Constructive feedback culture', 'Ownership of learning outcomes'],
      },
      {
        kicker: 'School-wide impact',
        title: 'The centre can energise classrooms beyond innovation activities',
        body:
          'Its influence extends into assemblies, exhibitions, club work and interdisciplinary projects. It shows students that thoughtful effort, creativity and curiosity are recognised and valued across the campus.',
        image: sharedImages.teacherImageOne,
        points: ['Supports exhibitions and events', 'Links with clubs and projects', 'Builds a culture of initiative'],
      },
    ],
    outcomes: ['Ownership and initiative', 'Project presentation', 'Idea-to-action culture'],
  },
  'the-right-faculty': {
    crumb: 'The Right Faculty',
    eyebrow: 'People & Pedagogy',
    title: 'Faculty who bring together care, discipline and thoughtful teaching',
    subtitle:
      'Families place their trust in teachers who are steady, skilled and genuinely committed to each child’s progress. That consistency shapes the whole school experience.',
    image: sharedImages.teacherImageTwo,
    category: 'environment',
    highlights: ['Experienced mentors', 'Value-based guidance', 'Continuous teacher growth'],
    sections: [
      {
        kicker: 'Teacher role',
        title: 'Faculty members are educators, guides and role models',
        body:
          'At Air Force School, the teacher’s role goes beyond delivering subject matter. Teachers shape classroom discipline, student confidence, learning attitudes and the emotional tone of daily school life.',
        image: sharedImages.teacherImageTwo,
        points: ['Consistent classroom guidance', 'Respectful and firm mentoring', 'Attention to student confidence'],
      },
      {
        kicker: 'Professional culture',
        title: 'Strong teaching grows through reflection and regular improvement',
        body:
          'A healthy faculty culture includes planning, collaboration, PTM engagement and readiness to adapt instruction for different learners. Professional growth keeps teaching purposeful and current.',
        image: sharedImages.teacherImageSeven,
        points: ['Lesson planning and collaboration', 'Parent partnership through PTMs', 'Improvement-oriented teaching practice'],
      },
      {
        kicker: 'What students feel',
        title: 'Children thrive when adults are dependable and encouraging',
        body:
          'The best faculty environment helps children feel seen, corrected fairly and supported steadily. That balance creates trust, which in turn strengthens participation and academic effort.',
        image: sharedImages.teacherImageOne,
        points: ['Approachable adult support', 'Fair correction and structure', 'Higher student participation'],
      },
    ],
    outcomes: ['Mentorship-led growth', 'Academic consistency', 'Student trust and confidence'],
  },
  'our-labs': {
    crumb: 'Our Labs',
    eyebrow: 'The Right Environment',
    title: 'Labs and learning spaces that make classroom ideas come alive',
    subtitle:
      'Specialised learning spaces help students observe, experiment, solve and create in ways that deepen understanding beyond textbooks alone.',
    image: campusImages.chemistryLab,
    category: 'environment',
    highlights: ['Science and computer readiness', 'Guided practical exposure', 'Dedicated learning spaces'],
    sections: [
      {
        kicker: 'Science lab',
        title: 'Observation and experimentation strengthen conceptual understanding',
        body:
          'A well-maintained science lab supports careful demonstrations, supervised practical sessions and stronger conceptual learning. Students move from hearing a principle to seeing it in action.',
        image: campusImages.chemistryLab,
        points: ['Modern science lab setup', 'Teacher-guided practical support', 'Stronger concept retention through observation'],
      },
      {
        kicker: 'Computer and activity spaces',
        title: 'Dedicated rooms improve focus and learning intent',
        body:
          'When students step into a room built for a specific mode of learning, the experience changes. Computer use, music practice, art activity or project-based work all become more focused and engaging.',
        image: campusImages.teacherMusic,
        points: ['Purposeful room-based learning', 'Clearer focus during activity periods', 'Better use of specialised resources'],
      },
      {
        kicker: 'Mathematics and exploration',
        title: 'Hands-on tools help abstract subjects feel accessible',
        body:
          'Whether through manipulatives, diagrams, measurement tasks or classroom displays, students learn more confidently when mathematical and logical ideas can be touched, tested and discussed.',
        image: campusImages.activityOne,
        points: ['Activity-based mathematics support', 'Visual and tactile learning aids', 'Confidence in problem-solving'],
      },
    ],
    outcomes: ['Practical understanding', 'Higher engagement', 'Stronger classroom application'],
  },
  'the-right-approach': {
    crumb: 'The Right Approach',
    eyebrow: 'The Right Environment',
    title: 'A school approach built on guidance, consistency and partnership',
    subtitle:
      'A strong school approach brings together academic expectations, warmth, communication and a clear understanding of how children grow at each stage.',
    image: sharedImages.teacherImageSeven,
    category: 'environment',
    highlights: ['Child-centred structure', 'Parent partnership', 'Holistic development'],
    sections: [
      {
        kicker: 'Everyday rhythm',
        title: 'Children do best when routines are clear and expectations are steady',
        body:
          'The school approach values consistency in attendance, preparation, conduct and participation. Predictable systems help children feel secure enough to focus on learning and growth.',
        image: sharedImages.teacherImageSeven,
        points: ['Steady classroom routines', 'Clear behavioural expectations', 'Supportive discipline and accountability'],
      },
      {
        kicker: 'Academic balance',
        title: 'Performance is built through support, not pressure alone',
        body:
          'Teachers and parents work best when they share information early, notice learning gaps and celebrate progress thoughtfully. A balanced approach reduces anxiety while still maintaining standards.',
        image: sharedImages.teacherImageFive,
        points: ['Regular parent-teacher communication', 'Early support for learning gaps', 'Healthy expectations with encouragement'],
      },
      {
        kicker: 'Whole-child growth',
        title: 'Character, expression and confidence matter alongside marks',
        body:
          'The right approach recognises that students are developing as people, not just test-takers. Assemblies, clubs, leadership roles and cultural participation support that broader journey.',
        image: campusImages.activityTwo,
        points: ['Holistic development opportunities', 'Stage confidence and expression', 'Leadership and responsibility habits'],
      },
    ],
    outcomes: ['Stronger school-home alignment', 'Less fragmented learning', 'Balanced child development'],
  },
  'the-right-skills': {
    crumb: 'The Right Skills',
    eyebrow: 'The Right Environment',
    title: 'Skills that prepare children for participation, leadership and life beyond the classroom',
    subtitle:
      'School should help children grow in more ways than academics alone by building communication, collaboration, leadership and self-confidence.',
    image: campusImages.playground,
    category: 'environment',
    highlights: ['Sports and cultural confidence', 'Leadership opportunities', 'Communication and teamwork'],
    sections: [
      {
        kicker: 'Sports and movement',
        title: 'Physical activity teaches far more than fitness',
        body:
          'Games, PT, yoga and sports participation help students build stamina, discipline and team spirit. Children learn focus, fair play and self-control through regular movement and shared effort.',
        image: campusImages.playground,
        points: ['PT, yoga and recreation', 'Team spirit and resilience', 'Healthy habits and stamina'],
      },
      {
        kicker: 'Cultural and expressive skills',
        title: 'Performance opportunities build confidence that stays with children',
        body:
          'Dance, music, theatre, assemblies and celebrations provide natural occasions for expression. Students learn how to speak, perform and contribute in front of others with increasing assurance.',
        image: campusImages.teacherMusic,
        points: ['Dance, music and stage participation', 'Confidence in public expression', 'Creative identity and presence'],
      },
      {
        kicker: 'Leadership and responsibility',
        title: 'Students learn to take initiative when given real roles',
        body:
          'Councils, house systems, event participation and collaborative class roles help students practise leadership in age-appropriate ways. Responsibility becomes a lived habit, not a slogan.',
        image: campusImages.activityOne,
        points: ['Student roles and participation', 'Responsibility through events', 'Communication and teamwork in action'],
      },
    ],
    outcomes: ['Confidence in action', 'Leadership habits', 'Well-rounded personality growth'],
  },
  'scholarship-program': {
    crumb: 'Scholarship Program',
    eyebrow: 'Admissions Support',
    title: 'Scholarship support that recognises effort and encourages continuity in learning',
    subtitle:
      'Meaningful scholarship support can help deserving students continue their education with confidence while encouraging effort and aspiration.',
    image: sharedImages.teacherImageFive,
    category: 'environment',
    highlights: ['Merit encouragement', 'Support for continuity', 'Transparent guidance'],
    sections: [
      {
        kicker: 'Who it helps',
        title: 'Scholarship support recognises effort and reduces barriers where possible',
        body:
          'Scholarship-oriented support is most meaningful when it values both performance and need. It can encourage students to stay committed while giving families clearer pathways to continue schooling with dignity.',
        image: sharedImages.teacherImageFive,
        points: ['Encouragement for strong performers', 'Supportive option for deserving families', 'Confidence in continuing education'],
      },
      {
        kicker: 'School role',
        title: 'Guidance should be practical, timely and easy to understand',
        body:
          'Families benefit when scholarship information is shared clearly, with expectations, timelines and documentation explained in simple terms. That reduces confusion during important academic decisions.',
        image: sharedImages.teacherImageSeven,
        points: ['Clear eligibility guidance', 'Document readiness support', 'Timely communication from the school office'],
      },
      {
        kicker: 'Student value',
        title: 'Scholarship programs can motivate disciplined and purposeful effort',
        body:
          'When students know their work can open meaningful opportunities, they often develop stronger habits of consistency, responsibility and academic focus over time.',
        image: sharedImages.teacherImageOne,
        points: ['Motivation for sustained effort', 'Recognition of academic discipline', 'Aspirational support for future readiness'],
      },
    ],
    outcomes: ['Recognition for effort', 'Family support clarity', 'Motivation for continued excellence'],
  },
}

export const showcaseNavigationLinks = [
  { label: 'The Right Curriculum', to: '/the-right-curriculum' },
  { label: 'The Right Faculty', to: '/the-right-faculty' },
  { label: 'The Right Environment', to: '/the-right-environment' },
  { label: 'Scholarship Program', to: '/scholarship-program' },
]

export const showcaseRelatedLinks = [
  { label: 'The Right Curriculum', to: '/the-right-curriculum' },
  { label: 'Digital Learning', to: '/digital-learning' },
  { label: 'Innovation Lab', to: '/innovation-lab' },
  { label: 'Innovative Academic Programs', to: '/innovative-academic-programs' },
  { label: 'Art Curriculum', to: '/art-curriculum' },
  { label: 'Thematic Learning Program', to: '/thematic-learning-program' },
  { label: 'Air Force Innovation Centre', to: '/airforce-innovation-center' },
  { label: 'The Right Faculty', to: '/the-right-faculty' },
  { label: 'The Right Environment', to: '/the-right-environment' },
  { label: 'Our Labs', to: '/our-labs' },
  { label: 'The Right Approach', to: '/the-right-approach' },
  { label: 'The Right Skills', to: '/the-right-skills' },
  { label: 'Scholarship Program', to: '/scholarship-program' },
]
