import { campusImages, studentImages } from '../assets/images'

const campusLifeContent = {
  studentGallery: [
    {
      name: 'Mohamed Saad',
      role: 'Secondary Topper',
      caption: 'Recognised as the secondary section topper with an aggregate of 95%, reflecting disciplined academic effort and consistent support.',
      image: studentImages[0],
    },
    {
      name: 'Parth Shendre',
      role: 'Olympiad Qualifier',
      caption: 'Parth qualified for the second level of the International Maths Olympiad, reflecting strong conceptual clarity in mathematics.',
      image: studentImages[1],
    },
    {
      name: 'Dipjyoti & Hitishree',
      role: 'Quiz Winners',
      caption: 'The Class IX duo stood first in the Bharat Ko Jano Quiz (Zonal), bringing distinction in the senior category.',
      image: studentImages[2],
    },
    {
      name: 'Md Saad & Ritika Jangid',
      role: 'Junior Quiz Achievers',
      caption: 'They secured second place in the Bharat Ko Jano Quiz (Zonal) in the junior category through strong knowledge and teamwork.',
      image: studentImages[3],
    },
    {
      name: 'Aradhya Rana',
      role: 'Olympiad Rank Holder',
      caption: 'Aradhya Rana qualified for the second level of the International Maths Olympiad and secured second rank at both zonal and international levels.',
      image: studentImages[4],
    },
    {
      name: 'Anshika Dixit',
      role: 'Mind Wars Topper',
      caption: 'Selected among toppers from 6 lakh students worldwide, Anshika’s performance highlighted strong general awareness and academic confidence.',
      image: studentImages[5],
    },
    {
      name: 'Anvi & Asmi Godbole',
      role: 'Swimming Champions',
      caption: 'The sisters collected multiple medals in butterfly, freestyle and backstroke, including a championship trophy and a gold hat-trick for Anvi.',
      image: studentImages[6],
    },
    {
      name: 'Afnan Ahmed',
      role: 'Karate Gold Medalist',
      caption: 'Afnan earned gold in Kumite and national-level recognition in karate, showing focused training and competitive spirit from Class II onward.',
      image: studentImages[7],
    },
    {
      name: 'Disha, Somya & Niyati',
      role: 'Cultural Prize Winners',
      caption: 'The students brought pride to the school through top positions in solo song and solo dance at an all-India cultural contest.',
      image: studentImages[8],
    },
    {
      name: 'Anshika Sinha',
      role: 'Maths Olympiad Qualifier',
      caption: 'Anshika Sinha of Class IV qualified for the second level of the International Maths Olympiad through steady academic performance.',
      image: studentImages[9],
    },
    {
      name: 'Aryan Hiranwar',
      role: 'Cross Country Winner',
      caption: 'Aryan won first prize in the 400 m race category of the District Cross Country Championship with determination and endurance.',
      image: studentImages[10],
    },
    {
      name: 'Vikram',
      role: 'Computer Wizard',
      caption: 'Vikram of Class VI scored 100% in just four minutes to earn a diploma in C programming from the Atlanta Institute.',
      image: studentImages[11],
    },
    {
      name: 'Rehansh Choudary',
      role: 'Karate Champion',
      caption: 'Rehansh of Class III B won first position in a karate competition conducted by Sadh Natai Karate Academy, Bhopal.',
      image: studentImages[12],
    },
    {
      name: 'Vihan Raut',
      role: 'Drama Participant',
      caption: 'Vihan represented the school at the state-level children’s drama competition in Amaravati, reflecting confidence in performance arts.',
      image: studentImages[13],
    },
    {
      name: 'Zoo Drawing Winners',
      role: 'Creative Achievers',
      caption: 'Students from the school bagged all top three positions in the drawing competition held during World Wild Week celebrations.',
      image: studentImages[14],
    },
    {
      name: 'AIR Broadcast Team',
      role: 'Radio Feature Performers',
      caption: 'A student performance about the Air Force and the school was broadcast on All India Radio and also received a cash prize.',
      image: studentImages[15],
    },
    {
      name: 'Whole-School Participation',
      role: 'Annual Day Pride',
      caption: 'The school recorded 100% participation of children in the annual day event, reflecting inclusive involvement and shared confidence.',
      image: studentImages[16],
    },
  ],

  schoolGallery: [
    {
      title: 'Foundational Classroom Activities',
      caption: 'Early learners build confidence through visual learning, class participation and guided presentation work.',
      image: campusImages.activityOne,
    },
    {
      title: 'Art & Craft Studio',
      caption: 'Colour, sketching, craft work and visual expression help children think, observe and create.',
      image: campusImages.artRoom,
    },
    {
      title: 'Music Room Practice',
      caption: 'Children learn rhythm, listening and stage confidence through guided music sessions.',
      image: campusImages.teacherMusic,
    },
    {
      title: 'Science Lab Infrastructure',
      caption: 'A modern lab setup gives students supervised exposure to practical science and experimentation.',
      image: campusImages.chemistryLab,
    },
    {
      title: 'Outdoor Play & Physical Activity',
      caption: 'Play spaces support movement, coordination, social confidence and healthy recreation.',
      image: campusImages.playground,
    },
    {
      title: 'Interactive Learning Displays',
      caption: 'Hands-on classroom displays make vocabulary, objects and everyday concepts more memorable.',
      image: campusImages.activityTwo,
    },
  ],

  curricularPrograms: [
    {
      title: 'Foundational Classroom Learning',
      highlight: 'Play-way learning and concept building',
      image: campusImages.activityTwo,
      description:
        'The pre-primary and primary sections use guided classroom activities, phonics, visual aids and interactive teaching to build confidence, social awareness and strong foundational skills.',
      points: ['Phonics and visual learning support', 'Interactive worksheets and class participation', 'Age-appropriate communication practice'],
    },
    {
      title: 'Art, Craft & Expression',
      highlight: 'Observation, imagination and display work',
      image: campusImages.artRoom,
      description:
        'Children explore drawing, poster making, classroom displays and project work that strengthen creativity, patience and visual expression.',
      points: ['Sketching and colouring', 'Craft exhibitions', 'Integrated subject projects'],
    },
    {
      title: 'Music, Rhythm & Performance',
      highlight: 'Listening, rhythm and stage confidence',
      image: campusImages.teacherMusic,
      description:
        'Dedicated music sessions and cultural rehearsals give children exposure to instruments, rhythm, patriotic songs and confident stage participation.',
      points: ['Instrument exposure', 'Choir and cultural rehearsal support', 'Confidence through performance'],
    },
    {
      title: 'Practical Science Learning',
      highlight: 'Observation, testing and discovery',
      image: campusImages.chemistryLab,
      description:
        'The secondary section benefits from supervised lab exposure and practical science support that helps students observe, test and understand concepts more clearly.',
      points: ['Integrated modern science lab', 'Demonstrations and guided experimentation', 'Concept reinforcement through observation'],
    },
    {
      title: 'Outdoor Play, PT & Recreation',
      highlight: 'Fitness, movement and teamwork',
      image: campusImages.playground,
      description:
        'Physical activity, PT, yoga, aerobics and open play help students build stamina, coordination, discipline and healthy habits from an early age.',
      points: ['PT, yoga and aerobics sessions', 'Outdoor recreation spaces', 'Healthy competition and teamwork'],
    },
    {
      title: 'Assemblies, Clubs & Celebrations',
      highlight: 'Expression, values and participation',
      image: campusImages.activityOne,
      description:
        'Theme-based assemblies, clubs, national days and cultural celebrations create regular opportunities for expression, leadership and shared school spirit.',
      points: ['House-wise assemblies and special days', 'Eco, Literary, Music and Science clubs', 'Festival and annual day participation'],
    },
  ],

  facilities: [
    {
      title: 'Science Lab & Practical Learning',
      stats: ['Integrated modern science lab', 'Set up as per CBSE norms', 'Supports supervised practical sessions'],
      description:
        'Well-organised lab space supports observation, experimentation and concept reinforcement for middle school learners.',
    },
    {
      title: 'Library & Reading Culture',
      stats: ['200 more books added', 'Reference and subject support', 'Reading habits encouraged daily'],
      description:
        'The library encourages reading habits through story books, reference material, magazines and quiet study support.',
    },
    {
      title: 'Campus Security & Safety',
      stats: ['Safe electrical systems', 'Weekly SOP practice', 'Guarded and supervised campus'],
      description:
        'A practical safety setup includes monitored access, safe infrastructure, regular SOP practice and day-to-day vigilance for students and staff.',
    },
  ],

  infrastructureHighlights: [
    'Large assembly area available with PA system',
    'Adequate cross ventilation, lighting and fans available in classrooms',
    'Newly purchased, accident-free furniture for students',
    'Twelve smart boards serving the requirements of the school',
    'Hexagonal tables added for pre-primary classrooms',
    'Electrical wiring and switch boards are fully safe and serviceable',
    'General hygiene and cleanliness are well maintained across the campus',
    'Indoor play activity area for structured recreation',
    'Synthetic court for sports and physical activities',
    'Music room, art room and counsellor room created from existing infrastructure',
  ],

  waterAndToiletFacilities: [
    'Separate toilets available for staff, boys and girls',
    'Aqua-UV water purification system installed',
    'Washing places available for children',
    'Toilets tiled and modified for small children',
    'Overhead storage tank water available in toilets round the clock',
  ],

  campusSpaces: [
    'Chemistry Lab',
    'Sports Room',
    'Library',
    'Traffic Park',
    'Herbal Garden',
    'Indoor Play Activity Area',
    'Synthetic Court',
    'Music Room',
    'Art & Craft Room',
    'Counsellor Room',
  ],

  leadershipVoices: [
    {
      role: 'Director’s Message',
      name: 'Group Captain A. K. Sharma',
      quote:
        'At Air Force School we believe in holistic, 360-degree education where character, curiosity and competence grow together in every child.',
    },
    {
      role: 'Principal’s Message',
      name: 'Mrs. Shalini Deshpande',
      quote:
        'Our goal is to create disciplined, compassionate and future-ready learners through meaningful academics, strong values and joyful participation.',
    },
    {
      role: 'School Ethos',
      name: 'Air Force School VayuSena Nagar',
      quote:
        'Education brings humbleness. Vidya Dadati Vinayam remains the value-centre from which we shape disciplined, grounded and confident learners.',
    },
    {
      role: 'Annual Report Reflection',
      name: 'School Leadership',
      quote:
        'Our ambition is to transform the boys and girls in blue into young dynamic men and women through academics, character building, activities and service-minded growth.',
    },
  ],

  initiatives: [
    'Go Green drives, sapling planting, Vanmahotsav and a birthday garden that connect children to nature',
    'Anti-plastic, anti-tobacco, Swachhta and anti-crackers campaigns led by students through public awareness',
    'Regular safety drills, medical check-ups, water-bell breaks and awareness talks on road safety, cyber security and health',
    'Eco, Literary, Good Living, Maths and Science, Sports and Music clubs that build teamwork, responsibility and expression',
  ],

  publications: [
    {
      title: 'School Circulars & Notices',
      description: 'Useful updates for families covering events, schedules, reminders and important school communication.',
    },
    {
      title: 'The Knowledge & Student Expression',
      description: 'Creative writing, drawings and student expression featured through the weekly magazine The Knowledge and other campus showcases.',
    },
    {
      title: 'Achievement & Event Highlights',
      description: 'A simple way to share competition wins, educational visits, celebrations and student features that also reach publications like Hitawada.',
    },
  ],

  feedbackSeeds: [
    {
      name: 'Mrs. Kavita Joshi',
      relation: 'Parent of Class IV student',
      rating: 5,
      message:
        'The school balances discipline and warmth beautifully. My child has become more confident in speaking and participating.',
      suggestion: 'Please continue adding more inter-house events and public speaking opportunities.',
    },
    {
      name: 'Mr. Rakesh Patil',
      relation: 'Parent of Class VII student',
      rating: 4,
      message:
        'The teachers are approachable and the school environment feels very safe. Practical activities have made science more interesting.',
      suggestion: 'A slightly larger reading club calendar would be wonderful for older students.',
    },
    {
      name: 'Mrs. Neha Kulkarni',
      relation: 'Parent of LKG student',
      rating: 5,
      message:
        'The foundational wing is caring, structured and child-friendly. We feel informed and supported throughout the year.',
      suggestion: 'More photo updates from classroom celebrations would be appreciated.',
    },
  ],
}

export default campusLifeContent
