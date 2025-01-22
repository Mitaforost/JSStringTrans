const mockData = {
    philosophy: {
        title: 'Philosophy',
        lessons: [
            {
                id: LESSONS_ID.PHILOSOPHY_ABOUT_CYNICISM,
                title: 'About Cynicism',
                theme: 'philosophy',
                subTheme: 'Cynicism',
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/cynicism/DALLE2024-03-1415.26.02-CreatealowpolystyleimageofamanreclininginanancientGreekfashion.Heiswearingabrightorangetogaandhasablackbeardwithaflowert-ezgif.com-webp-to-png-converter.png',
                bgPosition: 30,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 145,
                        description:
                            'Cynicism started as an ancient Greek philosophy that\'s more like what we see in hippies, people who choose to live off things others throw away (freegans), environmental activists, and artists who do public performances. It\'s not really about what we think of as being "cynical" today.',
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'The Two Sides of "Cynical"',
                                },
                                {
                                    type: 'text',
                                    text: 'The term "cynic" came from ancient Greece and we still use it in English today. However, the way we use it has changed a lot',
                                },
                            ],
                            2: [
                                {
                                    type: 'question',
                                    text: 'Who would you call a "cynic"?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'cynic_question_1',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: "Someone who doesn't like anything much.",
                                        },
                                        {
                                            answerDescription:
                                                'This is the common way we use "cynic" now. But, the original Cynicism philosophy is different!',
                                            label:
                                                "Someone who believes people are mostly looking out for themselves and aren't genuine.",
                                        },
                                        {
                                            answerDescription: '',
                                            label: "Someone who's often in a grumpy mood.",
                                        },
                                    ],
                                    correctAnswer:
                                        "Someone who believes people are mostly looking out for themselves and aren't genuine.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/DALLE2024-03-1415.16.58-Createanimageinlowpolystylefeaturingtwocharacters_oneisanancientGreekmanwearingatraditionaltogawithalaurelwreathinhishair-ezgif.com-webp-to-png-converter.png',
                                },
                            ],
                            3: [
                                {
                                    type: 'text',
                                    text: 'The modern idea of being "cynical" sort of touches on what the ancient Greek Cynics were about, but they really had a lot more in common with things we know today:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {type: 'bold', text: 'Hippies: '},
                                        {
                                            type: 'text',
                                            text: 'Like hippies, the ancient Cynics didn’t follow mainstream society and didn’t care for what it offered.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {type: 'bold', text: 'Freegans: '},
                                        {
                                            type: 'text',
                                            text: 'They were like people today who don’t believe in paying for food and clothes, trying to get these things for free because they thought it wasn’t necessary to buy them.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {type: 'bold', text: 'Eco-activists: '},
                                        {
                                            type: 'text',
                                            text: 'The Cynics cared about nature and tried to live in a way that was in sync with it.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {type: 'bold', text: 'Performance artists: '},
                                        {
                                            type: 'text',
                                            text: 'They used their actions to show their beliefs and challenge what people thought was normal.',
                                        },
                                    ],
                                },
                            ],
                            4: [
                                {
                                    type: 'subtitle',
                                    text: 'Getting into Cynicism',
                                },
                                {
                                    type: 'text',
                                    text: "We're going to dive into what \"cynic\" really meant and learn about Cynicism, an ancient Greek philosophy from the 3rd century BCE to the 1st century CE. It's all about living a simple life close to nature, stepping away from society's expectations and material things to find true freedom. Cynics didn't just think or talk about life’s big questions – they lived out their answers every day. How did they manage it? In some pretty shocking ways:",
                                },
                            ],
                            5: [
                                {
                                    type: 'textWithStyles',
                                    texts: [{type: 'marker', text: 'Hurling chickens at individuals'}],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/DALLE2024-03-1415.35.55-Createalowpolystylebannerthatfeaturesahenwithwhitefeathersanddistinctredfacialfeaturesincludingitscombandwattle.Thehenispla-ezgif.com-webp-to-png-converter.png',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [{type: 'marker', text: 'Peeing in public places'}],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/DALLE2024-03-1415.42.28-Createanimageinthelowpolystyleofadoginthemidstofaverycharacteristicdogbehaviorliftingitslegtopee.Thedoghasacolorfulgeom-ezgif.com-webp-to-png-converter.png',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Teasing those who thought they were virtuous',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/DALLE2024-03-1415.52.20-Createanimageinlowpolystylethatdepictsanancientmanwithanexaggeratedexpressionofmockery.Hehasastylizedbeardandiswearingtradit-ezgif.com-webp-to-png-converter.png',
                                },
                                {
                                    type: 'text',
                                    text: "This might seem more like madness than philosophy, but there's more to the story that needs explaining.",
                                },
                            ],
                            6: [
                                {
                                    type: 'subtitle',
                                    text: 'How Cynicism was created',
                                },
                                {
                                    type: 'text',
                                    text: 'Cynicism began in the 4th century BCE in Athens, Greece, a place buzzing with philosophical ideas, thanks in part to Socrates.',
                                },
                                {
                                    type: 'image',
                                    hint: '(Socrates. Circa 470 - 399 BCE)',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/Socrates_Louvre-removebg-preview.png',
                                },
                            ],
                            7: [
                                {
                                    type: 'question',
                                    text: 'Who is Socrates?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'cynic_question_2',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: "He's the first philosopher who dug into ethics.",
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'A major player in ancient philosophy.',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'The man who had to end his own life with poison.',
                                        },
                                        {
                                            answerDescription: 'Socrates is the answer',
                                            label: 'All of the above are true',
                                        },
                                    ],
                                    correctAnswer: 'All of the above are true',
                                },
                            ],
                            8: [
                                {
                                    type: 'text',
                                    text: "Socrates had a big impact, encouraging his followers to come up with their own philosophical ideas. Cynicism, for example, got its start from Socrates's student, Antisthenes.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/640px-Antisthenes_BM_1838-removebg-preview.png',
                                    hint: '(Antisthenes. Circa 445 - 365 BCE)',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "Antisthenes thought that to truly be good, as Socrates suggested, people needed to live simply and not pamper themselves too much. That's why he's sometimes called the first Cynic. Then came",
                                        },
                                        {type: 'bold', text: ' Diogenes '},
                                        {
                                            type: 'text',
                                            text: 'of Sinope, another student of Antisthenes, who really took the idea of living without comforts to heart.',
                                        },
                                    ],
                                },
                            ],
                            9: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/640px-Diogenis_Laertii_De_Vitis__1627__-_Zenon_of_Elea_or_Zenon_of_Citium-removebg-preview.png',
                                    hint: '(Diogenes. Circa 412 - 323 BCE)',
                                },
                                {
                                    type: 'text',
                                    text: "Diogenes believed people clutter their lives with things they don't need, which only hold them back and make them dishonest. So, he chose to live in a barrel on the streets of Athens, without money, a job, a family, social ties, or any property.",
                                },
                            ],
                            10: [
                                {
                                    type: 'text',
                                    text: 'In summary, the foundation of Cynicism can be outlined as follows:',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/Screenshot%20at%20Mar%2015%2009-56-45.png',
                                    height: 490,
                                },
                            ],
                            11: [
                                {
                                    type: 'subtitle',
                                    text: 'Why is it Called "Cynicism"?',
                                },
                                {
                                    type: 'text',
                                    text: 'Diogenes, who is considered the founder and key figure of Cynicism, was the first to be called a "Cynic." This title comes from the ancient Greek word "kunikós," meaning "like a dog."',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/DALLE2024-03-1509.59.42-Createalowpolystyleimageofadachshunddog.Thedogshouldhavethebreedscharacteristiclongbodyandshortlegswithasmoothcoatthathas-ezgif.com-webp-to-png-converter.png',
                                },
                            ],
                            12: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Originally, the title was related to the location in Athens where Antisthenes taught his students. In Athens, there was a place called the',
                                        },
                                        {type: 'bold', text: ' Cynosarges gymnasium'},
                                        {
                                            type: 'text',
                                            text: ', known as "the place for the white dog," where the Cynics gathered. Look at the simplified map of Athens, displaying important public places:',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/DALLE2024-03-1511.00.55-DesignaverticallowpolystyleimagethatrepresentsasimplifiedmapofancientAthens.IncludeiconicstructuressuchastheAcropoliswiththePa-ezgif.com-webp-to-png-converter.png',
                                    height: 415,
                                },
                            ],
                            13: [
                                {
                                    type: 'text',
                                    text: 'However, it\'s worth noting that the term "doglike" also aptly describes the Cynics\' way of life. In fact, the Cynics had more in common with dogs than with the average Greeks in terms of their lifestyle and behavior!',
                                },
                                {
                                    type: 'text',
                                    text: 'Press the "Check" button to discover the similarities.',
                                },
                                {
                                    type: 'imagesTap',
                                    imagesTheme: {
                                        light: {
                                            images: [
                                                {
                                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/cynicism/Group%2010.png',
                                                    height: 298,
                                                },
                                                {
                                                    height: 298,
                                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/cynicism/Group%2011.png',
                                                },
                                            ],
                                        },
                                        dark: {
                                            images: [
                                                {
                                                    height: 298,
                                                    imageUrl:
                                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/Group%2010241.png',
                                                },
                                                {
                                                    height: 298,
                                                    imageUrl:
                                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/Group%2010243.png',
                                                },
                                            ],
                                        },
                                    },
                                    textButton: 'Check',
                                    textButtonLastImage: 'Hide',
                                },
                            ],
                            14: [
                                {
                                    type: 'text',
                                    text: "It's not surprising that the Cynics didn't leave behind any written materials and weren't focused on preserving their teachings for the future. Their ideas were mainly spread through stories and the writings of philosophers who came after them.",
                                },
                                {
                                    type: 'text',
                                    text: 'Still, these spoken stories helped shape Stoicism, a later philosophy that combines the Cynic emphasis on living simply and independently with its own principles.',
                                },
                            ],
                            15: [
                                {
                                    type: 'subtitle',
                                    text: 'Key Points to Remember:',
                                },
                                {
                                    type: 'text',
                                    text: 'Cynicism promotes living a simple and self-reliant life, stepping away from societal expectations and material possessions to embrace a more natural existence.',
                                },
                                {
                                    type: 'text',
                                    text: 'Cynicism originated in 4th century BCE Athens, inspired by Antisthenes, a student of Socrates.',
                                },
                                {
                                    type: 'text',
                                    text: 'Diogenes of Sinope is a significant figure in Cynicism.',
                                },
                                {
                                    type: 'text',
                                    text: 'The term "Cynicism" comes from the Greek word "kunikós," which means "like a dog."',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/DALLE2024-03-1511.20.30-CreatealowpolystyleimageofalazyancientGreekmanloungingwithhisdog.Themanisrecliningcomfortablywithatogadrapedoverhisbodya-ezgif.com-webp-to-png-converter.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.PHILOSOPHY_PHILOSOPHER_BALLER,
                title: 'The philosopher in a barrel',
                theme: 'philosophy',
                subTheme: 'Cynicism',
                imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_1_new.png',
                resizeMode: 'contain',
                bgPosition: 150,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 145,
                        description:
                            "In this lesson, we're going to learn about Diogenes. He was a famous thinker who lived a life full of jokes, surprises, and tough times that led him to believe in a simple way of living called Cynicism.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'Who is he?',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_2.png',
                                    height: 300,
                                },
                                {
                                    type: 'text',
                                    text: 'Diogenes of Sinope was not only one of the founders of Cynicism but also a person who lived out its principles completely.',
                                },
                            ],
                            2: [
                                {
                                    type: 'text',
                                    text: "He didn't write any books or texts to record his thoughts for future generations because of his way of life. However, we have many stories about him that were passed down orally. In this lesson, we will explore his life's most well-known episodes and key ideas.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_3.png',
                                },
                            ],
                            3: [
                                {
                                    type: 'subtitle',
                                    text: 'A sudden surprise',
                                },
                                {
                                    type: 'text',
                                    text: 'Diogenes was born in Sinope, a Greek colony that is now part of modern-day Turkey',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_4.png',
                                    height: 255,
                                },
                            ],
                            4: [
                                {
                                    type: 'text',
                                    text: 'His father was a banker, and Diogenes likely worked in the family business. However, things turned bad when a scandal broke out, accusing his father of being involved in currency fraud.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_5.png',
                                },
                            ],
                            5: [
                                {
                                    type: 'text',
                                    text: 'Whether the accusations were true or not, the damage to their reputation was immediate and severe.',
                                },
                                {
                                    type: 'text',
                                    text: 'Diogenes and his father were exiled from the city, losing their citizenship and all their possessions. At this point, Diogenes arrived in Athens to start over.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_6.png',
                                    height: 255,
                                },
                            ],
                            6: [
                                {
                                    type: 'text',
                                    text: "Legend has it that Diogenes tried to find a place to live but couldn't. So, he put everything he owned into a giant wine barrel and used it as his home, moving it to different locations in the center of Athens.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_7.png',
                                },
                            ],
                            7: [
                                {
                                    type: 'subtitle',
                                    text: 'The path to philosophy',
                                },
                                {
                                    type: 'text',
                                    text: 'Rather than being discouraged by his difficult circumstances, Diogenes saw Athens as a hub of philosophy and wanted to explore it.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'He became interested in the ideas of a philosopher named ',
                                        },
                                        {type: 'bold', text: 'Antisthenes'},
                                        {
                                            type: 'text',
                                            text: ', who taught that self-discipline and denying bodily needs were key to a happy and virtuous life. Inspired by these ideas, Diogenes decided to become a follower of Antisthenes.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_8.png',
                                },
                            ],
                            8: [
                                {
                                    type: 'text',
                                    text: "But Antisthenes didn't want to teach Diogenes. He turned him away and even used his walking stick to make him leave.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_9.png',
                                },
                            ],
                            9: [
                                {
                                    type: 'question',
                                    text: 'Can you guess how Diogenes responded to this action?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'philosopher_barrel_question_1',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label:
                                                'Strike, for you will find no wood hard enough to keep me away from you!',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'I see your actions differ from your ideas.',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'He simply barked.',
                                        },
                                    ],
                                    correctAnswer:
                                        'Strike, for you will find no wood hard enough to keep me away from you!',
                                },
                            ],
                            10: [
                                {
                                    type: 'text',
                                    text: "Antisthenes began sharing his thoughts with Diogenes. But Diogenes saw that Antisthenes wasn't really living by those ideas. He talked about giving up comforts, yet he still had a house, ate good food, and lived like everyone else. Diogenes, on the other hand, didn't own anything, wasn't part of any community, and had no special privileges.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_10.png',
                                },
                                {
                                    type: 'text',
                                    text: "Diogenes chose to truly follow Antisthenes' teachings, to live them out, and to show others through his actions. That's how he started the way of thinking called Cynicism.",
                                },
                            ],
                            11: [
                                {
                                    type: 'subtitle',
                                    text: 'The spotlight is on the Cynic',
                                },
                                {
                                    type: 'text',
                                    text: 'Diogenes gained recognition beyond just Athens. Through his everyday actions and playful tricks, he prompted people to reflect on their flaws.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_11.png',
                                },
                            ],
                            12: [
                                {
                                    type: 'subtitle',
                                    text: 'People talk about me, saying that I...',
                                },
                                {
                                    type: 'text',
                                    text: '•  Made a barrel my home to be closer to nature.',
                                },
                                {
                                    type: 'text',
                                    text: '•  Asked for food to welcome whatever came my way in life.',
                                },
                                {
                                    type: 'text',
                                    text: "•  Did things like eating in public places where it wasn't polite, and didn't hide my natural bodily functions, to prove that we shouldn't feel embarrassed about them.",
                                },
                                {
                                    type: 'text',
                                    text: '•  Saw myself as belonging to the whole world, not just one place, and treated everyone the same, no matter who they were.',
                                },
                            ],
                            13: [
                                {
                                    type: 'text',
                                    text: "Diogenes didn't just make the regular folks in Athens think twice; he also got the big thinkers, the philosophers, to notice him. They saw that he wasn't just some wild homeless guy – he was a real philosopher with important ideas.",
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Especially ',
                                        },
                                        {type: 'bold', text: 'Plato'},
                                        {
                                            type: 'text',
                                            text: ', who once called Diogenes "a Socrates gone mad.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    hint: '(Plato (420s - 340s BCE) was an ancient Greek philosopher, student of Socrates, and founder of the Academy in Athens.)',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_12.png',
                                },
                            ],
                            14: [
                                {
                                    type: 'text',
                                    text: 'Plato and Diogenes were two thinkers who lived in Athens at the same time but thought very differently. Plato is known for his big ideas about perfect things that we can\'t see or touch, and he wrote about how he thought a great society should work in his book "The Republic."',
                                },
                                {
                                    type: 'text',
                                    text: 'Diogenes, though, liked to keep things real and simple. He thought it was important to be free and to make the most of every moment.',
                                },
                            ],
                            15: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_13.png',
                                },
                                {
                                    type: 'text',
                                    text: "Plato and Diogenes both had groups of people who liked their ideas. Plato's followers would meet up in a special school, dressed in fancy clothes, and talk about how to make the world perfect. Diogenes' followers, though, liked to live simply and freely, without worrying about rules or jobs.",
                                },
                            ],
                            16: [
                                {
                                    type: 'subtitle',
                                    text: 'The gentle wind-down',
                                },
                                {
                                    type: 'text',
                                    text: "The story goes that Diogenes was caught by pirates and brought to Crete to be sold. There's a famous conversation that supposedly happened there that shaped his life as a philosopher:",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_14.png',
                                },
                            ],
                            17: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'By acting so boldly, Diogenes ended up being taken in by a rich guy named ',
                                        },
                                        {type: 'bold', text: 'Xeniades'},
                                        {
                                            type: 'text',
                                            text: ". He was brought to Corinth and given the job of teaching Xeniades' kids and looking after the house.",
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "Even though Diogenes was known for breaking the rules and surprising people, he settled in well. He helped raise the kids and made sure they were well-trained. The kids liked him, even though he always talked about living simply and being tough. When he had the chance to leave, Diogenes chose to stay, becoming almost like part of Xeniades' family until he passed away.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_15.png',
                                },
                            ],
                            18: [
                                {
                                    type: 'question',
                                    text: 'Can you guess how Diogenes died?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'philosopher_barrel_question_2',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'Falling ill after consuming raw octopus.',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Suffering from an infected dog bite.',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Expiring after holding his breath until the end.',
                                        },
                                        {
                                            answerDescription:
                                                'The real story of how Diogenes died is a mystery, but these three tales are often told as possibilities.',
                                            label: 'All variants could be true.',
                                        },
                                    ],
                                    correctAnswer: 'All variants could be true.',
                                },
                            ],
                            19: [
                                {
                                    type: 'text',
                                    text: "Sometimes, Xeniades joked that it felt like Diogenes was the one in charge, not him. Diogenes said that he was like a doctor or a ship's captain, showing that his help was really important, even though he was supposed to be a servant.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_16.png',
                                },
                            ],
                            20: [
                                {
                                    type: 'subtitle',
                                    highlights: 'underline',
                                    text: 'Key Points:',
                                },
                                {
                                    type: 'text',
                                    text: '• Diogenes, a major thinker of Cynicism, resided in Athens during the 4th-3rd century BCE.',
                                },
                                {
                                    type: 'text',
                                    text: '• He turned away from possessions, citizenship, rights, and social conventions, a stark difference from Plato and his peers.',
                                },
                                {
                                    type: 'text',
                                    text: '• Diogenes strived to align his life with nature and sought genuine happiness in the present moment.',
                                },
                                {
                                    type: 'text',
                                    text: '• Initially sold into slavery, Diogenes transitioned into a teacher and discovered inner tranquility.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/barrel/Cynicism_L2_17.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.PHILOSOPHY_UNLEASHED_EXISTENCE,
                title: 'The unleashed existence',
                theme: 'philosophy',
                subTheme: 'Cynicism',
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_1.png',
                bgPosition: 70,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 145,
                        description:
                            "Cynicism is named after the Greek word for 'doglike.' But does following this way of thinking mean you live freely, without any ties? We'll look into what Cynicism means in this lesson.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'text',
                                    text: 'When asked why he was nicknamed a Dog, Diogenes might have replied with something like this:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'italic',
                                            text: 'Complete the sentence to learn what Diogenes said in response:',
                                        },
                                    ],
                                },
                                {
                                    type: 'autocomplete',
                                    sentence: [
                                        {text: 'Because I', type: 'static'},
                                        {text: '', type: 'input', correct: 'fawn on', index: 0},
                                        {text: 'those who give, I', type: 'static'},
                                        {text: '', type: 'input', correct: 'bark at', index: 1},
                                        {text: "those who don't, and I", type: 'static'},
                                        {text: '', type: 'input', correct: 'bite', index: 2},
                                        {text: 'scoundrels.', type: 'static'},
                                    ],
                                    options: ['fawn on', 'bark at', 'bite'],
                                },
                            ],
                            2: [
                                {
                                    type: 'text',
                                    text: 'In this tale, Diogenes appeared to accept comparisons to household pets and found value in ordinary things. Yet, unlike dogs, Cynics adhered to philosophical principles and concepts',
                                },
                                {
                                    type: 'text',
                                    text: 'The core principles of Cynicism were never formally documented or declared. Similar to Jesus or Buddha, Diogenes conveyed his beliefs through actions rather than words.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_2.png',
                                },
                                {
                                    type: 'text',
                                    text: "In this lesson, we'll explore the fundamental principles of living like a Cynic through real-life stories passed down through word of mouth. Let the Cynics show you how it's done!",
                                },
                            ],
                            3: [
                                {
                                    type: 'subtitle',
                                    text: 'Accepting nature',
                                },
                                {
                                    type: 'text',
                                    text: 'To start off, being a Cynic means embracing the way things naturally are. They thought that every living being already possessed all they required, and humans were no different.',
                                },
                                {
                                    type: 'text',
                                    text: 'So, basic food is sufficient for satisfaction, a cave offers ample shelter from the rain, and observing the world around you provides enough wisdom to lead a virtuous life and find happiness.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_3.png',
                                },
                            ],
                            4: [
                                {
                                    type: 'text',
                                    text: 'It seems like an interesting lesson and a really good way of thinking. But just wait until you find out how the Cynics actually shared these ideas with others.',
                                },
                                {
                                    type: 'text',
                                    text: "You might have heard that Diogenes made his home in a barrel on the streets of Athens, which already brings him close to nature. He strongly believed that bodily needs are natural and shouldn't be a cause for embarrassment.",
                                },
                            ],
                            5: [
                                {
                                    type: 'text',
                                    text: 'Diogenes gained notoriety for his unconventional behaviors like relieving himself in theaters, urinating on people who annoyed him, satisfying his sexual urges by masturbating in public, all without feeling any shame. He might not be the ideal role model, but there are still lessons to be learned from his action.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_4.png',
                                },
                            ],
                            6: [
                                {
                                    type: 'text',
                                    text: 'Diogenes boldly acted out to highlight how social norms and structures can disconnect us from our bodies and their basic needs. He believed that fundamentally, we are our bodies.',
                                },
                                {
                                    type: 'text',
                                    text: 'Interestingly, modern society shares this idea by promoting acceptance of natural aging and embracing diverse body types.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_5.png',
                                },
                            ],
                            7: [
                                {
                                    type: 'subtitle',
                                    text: 'Less is more',
                                },
                                {
                                    type: 'text',
                                    text: "Another consequence of moving away from nature and advancing civilization is the constant pursuit of more. We feel the need to possess, to alter our surroundings for comfort, to chase pleasures, and consequently, we're left unsatisfied with what we have.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_6.png',
                                },
                            ],
                            8: [
                                {
                                    type: 'text',
                                    text: "In contrast, dogs find contentment in the simplest of things. They're not concerned about where to sleep, aren't bothered by harsh weather, and relish any food they come across. Diogenes thus taught his followers that a true Cynic doesn't require possessions or luxuries.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_7.png',
                                },
                            ],
                            9: [
                                {
                                    type: 'text',
                                    text: "To illustrate this notion, consider a moment from Diogenes's life: he owned only a few items, one of which was a wooden bowl he used for drinking water. Once, he observed a boy drinking water from his cupped hands.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_8.png',
                                },
                            ],
                            10: [
                                {
                                    type: 'question',
                                    text: 'Can you guess what was Diogenes’s reaction?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'philosopher_unleashed_existence_1',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'He smashed the bowl',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'He walked away',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'He gave his bowl to a boy',
                                        },
                                    ],
                                    correctAnswer: 'He smashed the bowl',
                                },
                            ],
                            11: [
                                {
                                    type: 'text',
                                    text: 'Does the notion of possessing only what\'s necessary still hold weight today? Absolutely. While Cynics took this concept to the extreme, today we promote recycling and upcycling. Therefore, there\'s value in learning this lesson from the "dogs."',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_9.png',
                                },
                            ],
                            12: [
                                {
                                    type: 'subtitle',
                                    text: 'Questioning the norms',
                                },
                                {
                                    type: 'text',
                                    text: "Cynics were famous for consistently questioning societal norms and regulations. The earlier examples can also serve as illustrations, but let's take a broader look.",
                                },
                                {
                                    type: 'text',
                                    text: 'Cynicism emerged in 4th-century BCE Athens, Greece. In a society where only adult male citizens, constituting merely 10-12% of the population, held the right to vote, attend theater, or receive an education.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_10.png',
                                    height: 350,
                                },
                            ],
                            13: [
                                {
                                    type: 'text',
                                    text: 'Despite residing in Athens without citizenship, lacking rights or duties, Diogenes gained widespread recognition throughout the ancient world. He did not influence generations of future philosophers and remained a subject of discussion for two millennia.',
                                },
                                {
                                    type: 'text',
                                    text: 'Did Diogenes subvert the system that dictates adherence to rules in order to impact the world around him? Indeed, he did.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Another remarkable instance of Cynics challenging conventions involves two followers of Diogenes - ',
                                        },
                                        {type: 'bold', text: 'Hipparchia of Maroneia '},
                                        {
                                            type: 'text',
                                            text: 'and ',
                                        },
                                        {type: 'bold', text: 'Crates of Thebes'},
                                        {
                                            type: 'text',
                                            text: '.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_11.png',
                                },
                            ],
                            14: [
                                {
                                    type: 'text',
                                    text: 'They terminated their relationship "dog-coupling" (cynogamy), lived on Athens\' streets, and abandoned their former lives to embodied Cynicism\'s principles.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_12.png',
                                },
                            ],
                            15: [
                                {
                                    type: 'text',
                                    text: 'Crucially, they defied Athenian society by showcasing that gender equality is attainable. Hipparchia dressed as a man and lived on equal terms with her husband, sharing the same philosophy.',
                                },
                                {
                                    type: 'text',
                                    text: 'Another win for the Cynics! They championed equality and feminism long before these ideas gained widespread acceptance.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_13.png',
                                },
                            ],
                            16: [
                                {
                                    type: 'subtitle',
                                    text: 'Here and now',
                                },
                                {
                                    type: 'text',
                                    text: 'If we try to identify one main goal in the lives of Cynics, it would undeniably be self-sufficiency. Essentially, all the earlier points lead to this central idea:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'underlined',
                                            text: 'Nature',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'By respecting nature, we find that we need nothing more than what nature naturally provides.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'underlined',
                                            text: 'Contentment',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Discovering contentment when our basic needs are fulfilled removes the desire for excess.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'underlined',
                                            text: 'Rebellion',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "Questioning societal norms and regulations frees us from the pressure to conform to others' standards and enables us to pursue our own unique path.",
                                },
                            ],
                            17: [
                                {
                                    type: 'text',
                                    text: 'Cynics adopted a lifestyle as if there were no tomorrow, and this mindset helped them achieve self-sufficiency. Much like dogs, they expected nothing and welcomed everything by focusing on the present moment.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_14.png',
                                    height: 295,
                                },
                            ],
                            18: [
                                {
                                    type: 'text',
                                    text: "Diogenes's life perfectly illustrates this concept. Many times, he lost everything and had to start over. Yet, he welcomed each challenge because he never planned his life; thus, he was never disappointed by any event.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_15.png',
                                },
                                {
                                    type: 'text',
                                    text: 'An individual who can maintain happiness, unaffected by societal pressures, life events, or the natural order, embodies a true Cynic.',
                                },
                            ],
                            19: [
                                {
                                    type: 'subtitle',
                                    highlights: 'underline',
                                    text: 'Key points to remember:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Cynics respect nature and embrace all natural physical needs without shame.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'They find contentment with only the most essential things because they have everything they need from nature.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Cynics challenge societal rules and norms to demonstrate that following them is unnecessary.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: "According to Cynics, achieving self-sufficiency by living in the present moment is life's primary purpose.",
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/unleashed_existence/Cynicism_L3_16.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.PHILOSOPHY_DIOGENES_EPISODES,
                title: 'Diogenes: 5 funny episodes',
                theme: 'philosophy',
                subTheme: 'Cynicism',
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_1_new.png',
                resizeMode: 'contain',
                bgPosition: 150,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 145,
                        description:
                            "Prepare to delve into the teachings of Cynicism, finding humor and insight in the remarkable tales from Diogenes's life.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "In this lesson, you'll delve into five life experiences of ",
                                        },
                                        {type: 'bold', text: 'Diogenes'},
                                        {
                                            type: 'text',
                                            text: ', the founder and prominent figure of Cynicism.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_2.png',
                                },
                            ],
                            2: [
                                {
                                    type: 'text',
                                    text: 'These tales have been passed down through history as parables, celebrated for their wit and wisdom. Each one offers insights from a philosophical tradition that may have faded but still holds relevance.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "Let's begin with the first story, featuring Diogenes's encounter with ",
                                        },
                                        {type: 'bold', text: 'Alexander the Great'},
                                        {
                                            type: 'text',
                                            text: '.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_3.png',
                                    hint: '(Alexander the Great (356—323 BCE), also known as Alexander III of Macedon, ruled over the ancient Greek kingdom of Macedon and was a renowned military leader)',
                                },
                            ],
                            3: [
                                {
                                    type: 'text',
                                    text: "According to the ancient historian Plutarch, the two crossed paths in the city of Corinth. Intrigued by Diogenes's fame, Alexander sought him out.",
                                },
                                {
                                    type: 'text',
                                    text: 'He discovered Diogenes basking in the sunlight. To express his genuine admiration, Alexander inquired if there was anything he could do for the famed philosopher.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_4.png',
                                },
                            ],
                            4: [
                                {
                                    type: 'question',
                                    text: 'Can you guess what Diogenes answered?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'philosopher_diogenes_funny_episodes_1',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'Yes, stand a little out of my sun.',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Indeed, I require a house rather than a jar.',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Apologies, who are you?',
                                        },
                                    ],
                                    correctAnswer: 'Yes, stand a little out of my sun.',
                                },
                            ],
                            5: [
                                {
                                    type: 'text',
                                    text: 'Impressed by the answer, Alexander replied: "If I were not Alexander, I wish I were Diogenes." Diogenes replied:',
                                },
                                {
                                    type: 'text',
                                    text: "If I weren't Diogenes, I would wish to be:_____.",
                                },
                                {
                                    type: 'question',
                                    text: 'Which word is missing?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'philosopher_diogenes_funny_episodes_2',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'Alexander',
                                        },
                                        {
                                            answerDescription: 'No alternatives needed',
                                            label: 'Diogenes too',
                                        },
                                    ],
                                    correctAnswer: 'Diogenes too',
                                },
                            ],
                            6: [
                                {
                                    type: 'text',
                                    text: 'Diogenes demonstrated that he truly lived by his philosophy. Refusing to request anything from Alexander, he revealed his contentment with life and his equal treatment of all individuals, regardless of their status, be it king or commoner.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_5.png',
                                },
                            ],
                            7: [
                                {
                                    type: 'text',
                                    text: 'The next story is about a time when Diogenes went to a crowded market in Athens during the day',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_6.png',
                                },
                                {
                                    type: 'question',
                                    text: 'Guess what he was holding?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'philosopher_diogenes_funny_episodes_3',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'His hat',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'A pear',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'A lantern',
                                        },
                                    ],
                                    correctAnswer: 'A lantern',
                                },
                            ],
                            8: [
                                {
                                    type: 'text',
                                    text: "Diogenes walked up to people he didn't know and said:",
                                },
                                {
                                    type: 'text',
                                    text: "I'm looking for_____.\n" + "I haven't found any.\n",
                                },
                                {
                                    type: 'question',
                                    text: 'Which word is missing?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'philosopher_diogenes_funny_episodes_4',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'the Moon',
                                        },
                                        {
                                            answerDescription: "I'm looking for an honest man. I haven't found any.",
                                            label: 'an honest man',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'food',
                                        },
                                    ],
                                    correctAnswer: 'an honest man',
                                },
                            ],
                            9: [
                                {
                                    type: 'text',
                                    text: 'He was simply saying that it looked like all the people he met at the market had forgotten how to be real people.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_7.png',
                                },
                            ],
                            10: [
                                {
                                    type: 'text',
                                    text: 'A man once told Diogenes:',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_8.png',
                                    height: 420,
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {type: 'bold', text: 'The Pythian Games '},
                                        {
                                            type: 'text',
                                            text: 'were old sports and music contests in Greece. They were done to honor the god Apollo and were especially famous in Delphi.',
                                        },
                                    ],
                                },
                            ],
                            11: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'italic',
                                            text: 'Complete the phrase to find out Diogenes’s answer:',
                                        },
                                    ],
                                },
                                {
                                    type: 'autocomplete',
                                    sentence: [
                                        {text: 'I', type: 'static'},
                                        {text: '', type: 'input', correct: 'conquer men', index: 0},
                                        {newLine: true},
                                        {text: 'but you only', type: 'static'},
                                        {text: '', type: 'input', correct: 'conquer slaves', index: 1},
                                    ],
                                    options: ['conquer slaves', 'conquer men'],
                                },
                            ],
                            12: [
                                {
                                    type: 'text',
                                    text: 'Diogenes meant that changing the way people think is way more important than just beating them in a fight.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_9.png',
                                },
                                {
                                    type: 'text',
                                    text: 'One day, Diogenes was playfully walking backwards through the colonnade and kept running into people. When they giggled at him, he asked them a question to explain why he was doing it.',
                                },
                            ],
                            13: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'italic',
                                            text: "Complete the phrase to find out Diogenes's question:",
                                        },
                                    ],
                                },
                                {
                                    type: 'autocomplete',
                                    sentence: [
                                        {text: "Aren't you", type: 'static'},
                                        {text: '', type: 'input', correct: 'ashamed', index: 0},
                                        {text: 'you who ', type: 'static'},
                                        {text: 'walk backward along the whole part ', type: 'static'},
                                        {text: 'of existence and', type: 'static'},
                                        {text: '', type: 'input', correct: 'blame me', index: 1},
                                        {text: 'for ', type: 'static'},
                                        {text: 'walking backward along the path of ', type: 'static'},
                                        {text: 'the promenade?', type: 'static'},
                                    ],
                                    options: ['blame me', 'ashamed'],
                                },
                            ],
                            14: [
                                {
                                    type: 'text',
                                    text: "By doing this, Diogenes made the people of Athens think about what's coming next and told them to start living more like the natural world wants us to.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_10.png',
                                },
                            ],
                            15: [
                                {
                                    type: 'text',
                                    text: 'One time, the well-known philosopher Plato was trying to find the best way to describe a human. He and his students decided on the phrase "featherless biped."',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_11.png',
                                },
                            ],
                            16: [
                                {
                                    type: 'text',
                                    text: "Diogenes thought he should be the one to test Plato. So he came to Plato's school with a chicken that had no feathers and and said:",
                                },
                                {
                                    type: 'text',
                                    text: "Behold! I've brought you_____!",
                                },
                                {
                                    type: 'question',
                                    text: 'Which word is missing?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'philosopher_diogenes_funny_episodes_5',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'the food',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'a plucked chicken',
                                        },
                                        {
                                            answerDescription: "Behold! I've brought you a man!",
                                            label: 'a man',
                                        },
                                    ],
                                    correctAnswer: 'a man',
                                },
                            ],
                            17: [
                                {
                                    type: 'text',
                                    text: 'Diogenes showed that people are a lot more than just "featherless bipeds."',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_12.png',
                                },
                            ],
                            18: [
                                {
                                    type: 'subtitle',
                                    highlights: 'underline',
                                    text: 'Things to keep in mind:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Alexander the Great met Diogenes, who asked him to move out of his sunlight.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: "Diogenes carried a lantern during the day, symbolizing humanity's loss of essence.",
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Diogenes remarked, "I conquer men, but you only conquer slaves," emphasizing the significance of influencing minds.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'By walking backward through the colonnade, Diogenes prompted people to reflect on their departure from nature.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: "Diogenes challenged Plato's notion of humanity by presenting him with a plucked chicken.",
                                        },
                                    ],
                                },
                            ],
                            19: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/cynicism/diogenes_funny_episodes/Cynicism_L4_13.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.PHILOSOPHY_CYNICISM_QUIZ,
                title: 'Philosophical Woofs: Cynicism',
                theme: 'philosophy',
                subTheme: 'Cynicism',
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/philosophy/cynicism_quiz/Cynicism_L5_1_new.png',
                resizeMode: 'contain',
                bgPosition: 150,
                content: [
                    {
                        type: 'pre-quiz',
                        time: '5 min',
                        students: 145,
                        description:
                            'Take this quiz to see how much you know about the philosophy of Cynicism and feel motivated to challenge the norms!',
                    },
                    {
                        type: 'quiz',
                        pages: {
                            1: [
                                {
                                    type: 'question',
                                    text: 'Has the meaning of the word "cynic" changed over time?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'cynic_quiz_question_1',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: "No, it's the same.",
                                        },
                                        {
                                            answerDescription:
                                                'Long ago, a Cynic was someone who followed the philosophy of Cynicism.',
                                            label: 'Yes',
                                        },
                                    ],
                                    correctAnswer: 'Yes',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/philosophy/cynicism_quiz/Cynicism_L5_2.png',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/philosophy/cynicism_quiz/Cynicism_L5_3.png',
                                },
                            ],
                            2: [
                                {
                                    type: 'question',
                                    text: 'Who started Cynicism?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'cynic_quiz_question_2',
                                    answers: [
                                        {
                                            answerDescription:
                                                "He's also known as Diogenes the Cynic or Diogenes of Sinope.",
                                            label: 'Diogenes',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Socrates',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Antisthenes',
                                        },
                                    ],
                                    correctAnswer: 'Diogenes',
                                },
                                {
                                    type: 'text',
                                    text: 'Diogenes had no home or rights and lived in a big barrel. Yet, he became a well-known thinker and a hero to many.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/philosophy/cynicism_quiz/Cynicism_L5_4new.png',
                                },
                            ],
                            3: [
                                {
                                    type: 'question',
                                    text: 'What does the word Cynicism mean?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'cynic_quiz_question_3',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'Being shameless',
                                        },
                                        {
                                            answerDescription:
                                                'This comes from the Greek word "kunikos," which means "like a dog."',
                                            label: 'Being like a dog',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Nothing',
                                        },
                                    ],
                                    correctAnswer: 'Being like a dog',
                                },
                                {
                                    type: 'text',
                                    text: "Cynics liked how simple and honest dogs are, and they didn't care about fancy manners.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/philosophy/cynicism_quiz/Cynicism_L5_5new.png',
                                },
                            ],
                            4: [
                                {
                                    type: 'question',
                                    text: "What was Diogenes' most famous way to protest?",
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'cynic_quiz_question_4',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'Writing bold essays',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Giving speeches',
                                        },
                                        {
                                            answerDescription:
                                                'He did surprising things to make people think about what society values.',
                                            label: 'Doing shocking things',
                                        },
                                    ],
                                    correctAnswer: 'Doing shocking things',
                                },
                                {
                                    type: 'text',
                                    text: 'Diogenes really knew how to make a statement with his actions!',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/philosophy/cynicism_quiz/Cynicism_L5_6.png',
                                },
                            ],
                            5: [
                                {
                                    type: 'question',
                                    text: 'What did Diogenes tell Alexander the Great?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'cynic_quiz_question_5',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'Who are you?',
                                        },
                                        {
                                            answerDescription:
                                                'This shows that Cynics value being able to take care of themselves and not needing powerful people.',
                                            label: 'Move out of my sunlight!',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'I can show you how to live.',
                                        },
                                    ],
                                    correctAnswer: 'Move out of my sunlight!',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/philosophy/cynicism_quiz/Cynicism_L5_7.png',
                                },
                            ],
                            6: [
                                {
                                    type: 'question',
                                    text: "What's the main idea of Cynicism?",
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'cynic_quiz_question_6',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'Gathering wealth',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Changing how people think',
                                        },
                                        {
                                            answerDescription:
                                                'Cynics thought you could be happy by living in the moment, in tune with nature, and not needing much.',
                                            label: 'Living simply',
                                        },
                                    ],
                                    correctAnswer: 'Living simply',
                                },
                                {
                                    type: 'text',
                                    text: "This is what a true Cynic's life is all about:",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/philosophy/cynicism_quiz/Cynicism_L5_8.png',
                                },
                            ],
                            7: [
                                {
                                    type: 'question',
                                    text: "Why did Diogenes bring a chicken to Plato's school?",
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'cynic_quiz_question_7',
                                    answers: [
                                        {
                                            answerDescription:
                                                'Plato said humans are "featherless bipeds," so Diogenes brought a chicken without feathers to prove him wrong.',
                                            label: "To question Plato's idea of what a human is",
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Just for laughs',
                                        },
                                        {
                                            answerDescription:
                                                'Cynics thought you could be happy by living in the moment, in tune with nature, and not needing much.',
                                            label: 'Out of respect',
                                        },
                                    ],
                                    correctAnswer: "To question Plato's idea of what a human is",
                                },
                                {
                                    type: 'text',
                                    text: "That's a straightforward way to talk about philosophy!",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/philosophy/cynicism_quiz/Cynicism_L5_9.png',
                                },
                            ],
                            8: [
                                {
                                    type: 'text',
                                    text:
                                        'Great job!\n' +
                                        'Now you see that even a strange joke can mean something deep if a Cynic does it.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/philosophy/cynicism_quiz/Cynicism_L5_10.png',
                                },
                            ],
                        },
                    },
                ],
            },
        ],
    },
    history: {
        title: 'History',
        lessons: [
            {
                id: LESSONS_ID.HISTORY_BEGINNINGS_ROME,
                title: 'Beginnings of Rome',
                theme: 'history',
                subTheme: 'Roman Empire',
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/beginnings-rome/DALLE2024-03-1212.16.05-CreateaclearandsimpleimageofaRomanEmpiremaparound100CEintheLowPolystylebasedontheattachedfilebutwithoutanygeographicalnam-ezgif.com-webp-to-png-converter.png',
                bgPosition: 30,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 145,
                        description:
                            "Originally a simple settlement, Rome eventually transformed into the heart of the Roman Empire. What led to this transformation? The story of Rome is rich with mythical tales, heroic figures, and significant shifts in governance. Let's dive into this fascinating history!",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'The Myth of the She-wolf and Two Boys',
                                },
                                {
                                    type: 'text',
                                    text: 'Numerous accounts exist regarding the founding of Rome and its eventual rise to empire status.',
                                },
                                {
                                    type: 'text',
                                    text: "Let's explore the most enchanting of these tales.",
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Picture a setting filled with forests, hills, a river, and two twin boys, ',
                                        },
                                        {type: 'bold', text: 'Romulus '},
                                        {
                                            type: 'text',
                                            text: 'and ',
                                        },
                                        {type: 'bold', text: 'Remus'},
                                        {
                                            type: 'text',
                                            text: '.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'According to the myth, they were the offspring of Mars, the god of war. Viewing them as potential threats, their grandfather commanded their execution. However, they did not meet their end. Instead, a she-wolf became their caretaker and nurtured them.',
                                },
                            ],
                            2: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/beginnings-rome/640px-Wenceslas_Hollar_-_Romulus_and_Remus,_after_Giulio_Romano.png',
                                    hint: '(Wenceslaus Hollar, after Giulio Romano. Romulus and Remus, 1652)',

                                    height: 245,
                                },
                                {
                                    type: 'text',
                                    text: 'Following a series of events, the twins chose to establish a city in the very place where they had been spared by fate.',
                                },
                            ],
                            3: [
                                {
                                    type: 'question',
                                    text: 'Do you know after whom Rome was named?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_question_1',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'The she-wolf',
                                        },
                                        {
                                            answerDescription: "You’re right! The city's name came from Romulus.",
                                            label: 'Romulus',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Remus',
                                        },
                                    ],
                                    correctAnswer: 'Romulus',
                                },
                            ],
                            4: [
                                {
                                    type: 'text',
                                    text: "The brothers couldn't agree on which of the seven hills to choose for their city. Because of this disagreement, Romulus ended up killing Remus and then named himself Rome's first king, founding the city on Palatine Hill",
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'The old Roman historian Livy notes that Remus died and Rome was founded on ',
                                        },
                                        {type: 'bold', text: 'April 21st, 753 BCE'},
                                        {
                                            type: 'text',
                                            text: '.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/beginnings-rome/DALLE2024-03-1215.33.04-CreateanimageintheLowPolystyledepictingaresidentoftheRomanEmpirestandingbesideacolumn.Theindividualshouldbedressedinperiod-ap-ezgif.com-webp-to-png-converter.png',
                                },
                            ],
                            5: [
                                {
                                    type: 'subtitle',
                                    text: 'Kingdom, republic, empire',
                                },
                                {
                                    type: 'text',
                                    text: 'Following Romulus, Rome was ruled by six more kings. This time, known as the era of Kings, marks the first chapter in Roman history.',
                                },
                                {
                                    type: 'question',
                                    text: 'Can you guess how the kings were appointed?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_question_2',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'They passed the crown down from father to son.',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'The god Mars picked who he liked best.',
                                        },
                                        {
                                            answerDescription:
                                                "The Senate, which acted as the government's council, was made up of wealthy elderly men who wielded the majority of the state's power, including the authority to appoint kings",
                                            label: 'Apart from Romulus, each king was elected by the Senate.',
                                        },
                                    ],
                                    correctAnswer: 'Apart from Romulus, each king was elected by the Senate.',
                                },
                            ],
                            6: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Historians from ancient times praised five of the kings as fair leaders, but they labeled the final king, ',
                                        },
                                        {type: 'bold', text: 'Lucius Tarquinius Superbus'},
                                        {
                                            type: 'text',
                                            text: ', as a cruel tyrant. His heavy-handed governance led to a public uprising. This rebellion resulted in the end of the monarchy and the creation of the Roman Republic. Quickly, it expanded from a single city to become a dominant force around the Mediterranean.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Over the next 500 years, the region expanded, stretching from the North Sea down through what is now France and Germany, from Spain in the west to Greece, Syria, and North Africa in the east.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'However, the republic soon faced a crisis. As the territory grew, the rich and powerful gained more wealth, while the poor became poorer. Attempts by some leaders to reform the political and military systems only made things worse, leading to frequent civil wars. One of the final leaders of the Roman Republic was ',
                                        },
                                        {type: 'bold', text: 'Julius Caesar'},
                                        {
                                            type: 'text',
                                            text: ', who, interestingly, was never an emperor but held the title of "Dictator."',
                                        },
                                    ],
                                },
                            ],
                            7: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/beginnings-rome/Julius_Caesar_MET_ES7940.png',
                                    hint: '(Julius Caesar, by Andrea Ferrucci, 1514)',
                                    height: 376,
                                },
                                {
                                    type: 'text',
                                    text: "Following the murder of Julius Caesar, his nephew Gaius Octavian Thurinus rose to power as Rome's first emperor and adopted the name Augustus Caesar.",
                                },
                            ],
                            8: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/beginnings-rome/DALLE2024-03-1309.40.52-CreateanimageofanancientRomancolumnintheLowPolystylesetagainstalightbackground.Thecolumnshouldbedesignedwithgeometricshapest-ezgif.com-added-text%20(3).png',
                                },
                            ],
                            9: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/beginnings-rome/DALLE2024-03-1309.40.52-CreateanimageofanancientRomancolumnintheLowPolystylesetagainstalightbackground.Thecolumnshouldbedesignedwithgeometricshapest-ezgif.com-added-text%20(4).png',
                                },
                            ],
                            10: [
                                {
                                    type: 'subtitle',
                                    text: 'What exactly is an empire?',
                                },
                                {
                                    type: 'text',
                                    text: "Now, let's talk about the empire!",
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {type: 'bold', text: 'An empire '},
                                        {
                                            type: 'text',
                                            text: 'refers to a large political entity that rules over various nations and vast lands under one dominant ruler.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'This era in Roman history was marked by economic growth, military achievements, and territorial expansion, with the empire spanning three continents, from Britain and Spain in the west to Egypt and the Middle East in the east.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/beginnings-rome/640px-Roman_Empire_117AD.png',
                                    hint: '(The Roman Empire, 117 BCE)',
                                    height: 205,
                                },
                            ],
                            11: [
                                {
                                    type: 'subtitle',
                                    text: 'The population of the Roman Empire',
                                },
                                {
                                    type: 'text',
                                    text: 'In 133 BC, Rome was the first European city to achieve a population of one million inhabitants.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/beginnings-rome/conversation.png',
                                },
                            ],
                            12: [
                                {
                                    type: 'text',
                                    text: "The empire's population saw a huge increase and reached 130 million people.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/beginnings-rome/Apr%2008%2015-28-41.png',
                                    height: 185,
                                },
                                {
                                    type: 'text',
                                    text: "But who were the 130 million individuals residing in the empire? We'll explore this currently.",
                                },
                            ],
                            13: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'In Roman society, there were mainly two classes: the ',
                                        },
                                        {type: 'bold', text: 'patricians '},
                                        {type: 'text', text: 'and the '},
                                        {type: 'bold', text: 'plebeians'},
                                        {type: 'text', text: '.'},
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/beginnings-rome/DALLE2024-03-1214.21.39-CreateanimageintheLowPolystylebasedontheattachedreferencedepictingtwoPatriciansandtwoPlebeiansofAncientRome.Eachcharactershou-ezgif.com-added-text%20(2).png',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {type: 'bold', text: 'Patricians '},
                                        {
                                            type: 'text',
                                            text: 'were recognized as full citizens who had the right to participate in politics, with the senior members sitting in the Senate.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {type: 'bold', text: 'The Senate '},
                                        {
                                            type: 'text',
                                            text: "functioned as the main governing body for the entire duration of Rome's history.",
                                        },
                                    ],
                                },
                            ],
                            14: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {type: 'bold', text: 'Plebeians'},
                                        {
                                            type: 'text',
                                            text: ', on the other hand, were free individuals but lacked any political rights. They formed the bulk of the population and were generally very poor.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {type: 'text', text: 'In Rome, '},
                                        {type: 'bold', text: 'enslaved '},
                                        {
                                            type: 'text',
                                            text: 'individuals were regarded as belongings. Ways a person could end up enslaved included:',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [{type: 'marker', text: 'being born into it'}],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [{type: 'marker', text: 'sold by their family'}],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [{type: 'marker', text: 'captured by slave traders'}],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: "falling into debt they couldn't repay",
                                        },
                                    ],
                                },
                            ],
                            15: [
                                {
                                    type: 'text',
                                    text: 'Among the enslaved, many were highly educated, particularly those from Greece. These individuals often served as caregivers or educators for the children of wealthy patricians.',
                                },
                                {
                                    type: 'text',
                                    text: "What about women's status? As was typical in ancient societies, women did not have rights equal to those of men.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/beginnings-rome/DALLE2024-03-1212.16.20-CreateanimageofwomenintheRomanEmpiredepictedintheLowPolystyle.ThewomenshouldbewearingtraditionalRomanattiresuchasstolaswit-ezgif.com-webp-to-png-converter.png',
                                },
                            ],
                            16: [
                                {
                                    type: 'subtitle',
                                    highlights: 'underline',
                                    text: 'Things to keep in mind:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Rome was founded and governed by the mythical figure Romulus.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Rome experienced different forms of governance: a kingdom from 753 to 509 BCE, a republic from 509 to 31 BCE, and an empire from 31 BCE to 476 CE.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The empire spanned three continents, reaching from Britain and Spain in the west to Egypt and the Middle East in the east.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The Roman Empire contained more than 25% of the global population at its height.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/beginnings-rome/DALLE2024-03-1214.58.05-CreateanimageintheLowPolystylethatsymbolicallyrepresentsthebeginningoftheRomanEmpire.Theimageshouldincludeiconicelementssuchas-ezgif.com-webp-to-png-converter.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.HISTORY_ROMAN_BUILDERS,
                title: 'Roman Builders',
                theme: 'history',
                subTheme: 'Roman Empire',
                imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/history/roman_builders/Roman_L2_1_new.png',
                resizeMode: 'contain',
                bgPosition: 150,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 145,
                        description:
                            "Countless roads, vast amounts of building materials, and majestic monuments have survived, reflecting the grandeur of the Roman Empire even after thousands of years. Let's delve into the Roman enthusiasm for building.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'text',
                                    text: 'Engineering in Ancient Rome',
                                },
                                {
                                    type: 'text',
                                    text:
                                        '“I found Rome a city of bricks and left it a city of marble.”\n' +
                                        '- Augustus the Emperor\n',
                                },
                                {
                                    type: 'text',
                                    text: 'The Romans put significant effort into engineering, grasping the laws of physics and harnessing nature. They created inventions to enhance their lifestyle.',
                                },
                                {
                                    type: 'text',
                                    text: 'Just as we rely on a steady water supply today, so did the Romans 2,000 years ago. Rome itself was sustained by a network of around 400 miles of aqueducts.',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'An aqueduct',
                                        },
                                        {
                                            type: 'text',
                                            text: ', derived from the Latin words "aqua" (water) and "ducere" (to lead), channels a water stream and keeps drinking water free from human contamination.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/roman_builders/Roman_L2_2.png',
                                    height: 126,
                                },
                            ],
                            2: [
                                {
                                    type: 'text',
                                    text: 'Roman baths were popular spots for gathering, socializing, exchanging gossip, and, of course, bathing. The Romans loved their spas!',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/roman_builders/Roman_L2_3.png',
                                    hint: '( Lawrence Alma-Tadema. The Baths at Caracalla. 1899)',
                                    height: 515,
                                },
                            ],
                            3: [
                                {
                                    type: 'subtitle',
                                    text: 'The Monuments',
                                },
                                {
                                    type: 'text',
                                    text: 'The Romans were exceptional innovators, adapting known Greek techniques and materials while creating many new architectural structures. Some of these Roman monuments have withstood the test of time.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'In the heart of Rome, the largest amphitheater in the world — ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'the Colosseum ',
                                        },
                                        {
                                            type: 'text',
                                            text: '— remains magnificently preserved.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/roman_builders/Roman_L2_4.png',
                                    hint: '(Photo by Kevin Brintnall, Roman Colosseum)',
                                    height: 254,
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'An amphitheater is a large, circular building with tiered rows of seats surrounding an open space.',
                                        },
                                    ],
                                },
                            ],
                            4: [
                                {
                                    type: 'text',
                                    text: "It's famous for hosting gladiator games and animal hunts. But can you believe the Romans sometimes filled the Colosseum with water to stage naval battles inside?!",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/roman_builders/Roman_L2_5.png',
                                    hint: '(Ulpiano Checa. Naval battle between Romans. 1894)',
                                    height: 237,
                                },
                            ],
                            5: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Another notable structure is ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'the Tower of Hercules',
                                        },
                                        {
                                            type: 'text',
                                            text: ', situated near La Coruña harbor in Spain. According to legend, this tower was built by the Greek hero Hercules after he defeated the giant tyrant Geryon.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/roman_builders/Roman_L2_6.png',
                                    hint: '(The Tower of Hercules)',
                                    height: 450,
                                },
                                {
                                    type: 'text',
                                    text: 'The Tower served as a lighthouse and played a crucial role in maritime navigation. Remarkably, it is still in use today!',
                                },
                            ],
                            6: [
                                {
                                    type: 'subtitle',
                                    text: 'All roads lead to Rome',
                                },
                                {
                                    type: 'text',
                                    text: "The Roman Empire's remarkable creation was a vast network of roads spanning across the empire.",
                                },
                                {
                                    type: 'question',
                                    text: 'Are you familiar with the phrase “All roads lead to Rome”?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_roman_builders_question_1',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'The capital city holds the utmost importance',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Rome is the ultimate travel destination',
                                        },
                                        {
                                            answerDescription:
                                                'The extensive road network ensured that every road, even those in the most distant regions of the empire, ultimately led to Rome.',
                                            label: 'Various paths can guide you to the same objective or destination',
                                        },
                                    ],
                                    correctAnswer: 'Various paths can guide you to the same objective or destination',
                                },
                            ],
                            7: [
                                {
                                    type: 'text',
                                    text: 'The extensive road construction initiative had three primary purposes: facilitating trade, supporting military endeavors, and enabling effective governance.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/roman_builders/Roman_L2_7.png',
                                    height: 152,
                                },
                                {
                                    type: 'subtitle',
                                    text: 'Trade',
                                },
                                {
                                    type: 'text',
                                    text: 'The empire established trade links with India, China, and various regions across Europe. This stable trade facilitated a consistent influx of taxes to the empire.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/roman_builders/Roman_L2_8.png',
                                    height: 202,
                                },
                            ],
                            8: [
                                {
                                    type: 'subtitle',
                                    text: 'Warfare',
                                },
                                {
                                    type: 'text',
                                    text: 'The Romans expanded their empire through conquest of nations and territories, and the army played a crucial role in maintaining cohesion. Consequently, the Roman army was the primary and most frequent user of the roads, with Roman legionaries heavily involved in their construction.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/roman_builders/Roman_L2_9.png',
                                    height: 210,
                                },
                            ],
                            9: [
                                {
                                    type: 'subtitle',
                                    text: 'Governance',
                                },
                                {
                                    type: 'text',
                                    text: "Given the vast expanse of the empire, it was essential to swiftly disseminate the emperor's orders across all regions for efficient governance.",
                                },
                                {
                                    type: 'text',
                                    text: 'Ordinary Romans also utilized roads for personal purposes, such as traveling to health resorts or pursuing education abroad. They enjoyed visiting notable landmarks, observing curiosities, and embarking on religious pilgrimages.',
                                },
                                {
                                    type: 'text',
                                    text: 'Additionally, the Roman Empire boasted a postal service. This meant that, for instance, an average citizen like Heraclides could correspond with his brother by writing a letter.',
                                },
                                {
                                    type: 'text',
                                    text: 'When constructing roads, the Romans adhered to two principles:',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/roman_builders/Roman_L2_10.png',
                                    height: 134,
                                },
                            ],
                            10: [
                                {
                                    type: 'text',
                                    text: 'If there were no alternative routes to circumvent obstacles such as rivers or mountains, Roman engineers constructed bridges over them or dug tunnels through them.',
                                },
                                {
                                    type: 'text',
                                    text: 'The roads themselves featured a slightly curved surface.',
                                },
                                {
                                    type: 'question',
                                    text: 'Any guesses as to why?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_roman_builders_question_2',
                                    answers: [
                                        {
                                            answerDescription:
                                                'Yes, that smart design of slightly curved roads helped keep them dry and free of puddles.',
                                            label: 'To let rainwater drain off the sides of the road.',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'To control speed.',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Same problems, different times.',
                                        },
                                    ],
                                    correctAnswer: 'To let rainwater drain off the sides of the road.',
                                },
                            ],
                            11: [
                                {
                                    type: 'text',
                                    text: 'The construction typically began from two points that met in the middle. To make the roads durable, builders used several layers:',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/roman_builders/Roman_L2_11.png',
                                    height: 371,
                                },
                            ],
                            12: [
                                {
                                    type: 'question',
                                    text: 'Can you guess how long this road-building technique was used?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_roman_builders_question_3',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'Until the 10th century',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Until the 15th century',
                                        },
                                        {
                                            answerDescription:
                                                'It was only with the invention of asphalt that the durable Roman method changed.',
                                            label: 'Until the late 19th century',
                                        },
                                    ],
                                    correctAnswer: 'Until the late 19th century',
                                },
                            ],
                            13: [
                                {
                                    type: 'subtitle',
                                    text: 'Key Points to Remember:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Greek legacy inspired Roman architecture and engineering.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Ancient Romans supplied water to their homes and baths and harnessed natural forces for agriculture.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The Roman Colosseum is the largest amphitheater of the ancient world, accommodating over 50,000 people.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: "Roads were vital for the empire's communication and trade. Roman road-building technology was used until the 19th century.",
                                        },
                                    ],
                                },
                            ],
                            14: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/roman_builders/Roman_L2_12.png',
                                    height: 385,
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.HISTORY_PIONEERS_MILITARY_ORGANIZATION,
                title: 'The Legions: Pioneers of Military Organization',
                theme: 'history',
                subTheme: 'Roman Empire',
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_1_new.png',
                resizeMode: 'contain',
                bgPosition: 140,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 145,
                        description:
                            "The Roman army was the foundation of the empire's centuries-long supremacy. Let's explore the daily life and duties of a legionnaire to see how the first systematically organized military achieved its success.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'Military Organization',
                                },
                                {
                                    type: 'text',
                                    text:
                                        'Few men are born brave. Many become so through training and force of discipline.\n' +
                                        '- Vegetius, Roman Writer',
                                },
                                {
                                    type: 'text',
                                    text: 'Rome began organizing its military during the kingdom period (753 — 509 BCE), and it continued to thrive even after the fall of the empire in 476 CE. This means the history of the Roman army spans around 2,200 years!',
                                },
                                {
                                    type: 'text',
                                    text: 'The number and size of the military units changed over time. Typically, it consisted of groups called "legions," with each legion having between 3,000 and 6,000 men.',
                                },
                                {
                                    type: 'carousel',
                                    resizeMode: 'contain',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_2(1).png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_2(2).png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_2(3).png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_2(4).png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_2(5).png',
                                    ],
                                },
                            ],
                            2: [
                                {
                                    type: 'text',
                                    text: 'During the empire period, it became customary for a legion to consist of 10 cohorts.',
                                },
                                {
                                    type: 'text',
                                    text: 'At its peak, the Roman army could mobilize around 150,000 soldiers, with auxiliary units matching that number supporting the legions.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_3.png',
                                    height: 245,
                                },
                                {
                                    type: 'text',
                                    text: 'Despite its large size, the Roman army was highly organized and efficiently managed. Its success in battles came from skilled commanders, innovative tactics and engineering, constant improvements, and even organized medical assistance.',
                                },
                                {
                                    type: 'text',
                                    text: 'Only men could serve in the army; women, enslaved people, and criminals were prohibited from enlisting.',
                                },
                            ],
                            3: [
                                {
                                    type: 'question',
                                    text: 'What would happen if an enslaved person tried to enlist in the Roman army?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_pioneers_military_organization_1',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'He would need to show his skills in cooking, sewing, or crafting',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'He would be ignored',
                                        },
                                        {
                                            answerDescription: 'Harsh! Ancient times were brutal.',
                                            label: 'He would face execution',
                                        },
                                    ],
                                    correctAnswer: 'He would face execution',
                                },
                            ],
                            4: [
                                {
                                    type: 'text',
                                    text: 'Some enslaved individuals in the Roman state attempted to volunteer for the Roman army. If they managed to avoid detection, they could serve successfully.',
                                },
                                {
                                    type: 'text',
                                    text: 'Military service was highly appealing to the poor because it offered excellent, steady wages, food, clothing, and the benefits of war campaigns. If a soldier survived his long service, he would receive a piece of land upon retirement.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_4.png',
                                    height: 358,
                                },
                                {
                                    type: 'text',
                                    text: "However, the journey to retirement was tough, with rigorous training and often harsh living conditions. Let's delve deeper into this in the next part of the lesson!",
                                },
                            ],
                            5: [
                                {
                                    type: 'subtitle',
                                    text: 'How to Become a Legionnaire',
                                },
                                {
                                    type: 'text',
                                    text: 'Before becoming a Roman soldier, a recruit had to pass an examination and undergo four months of training. Due to high standards and strict requirements, some volunteers had to apply multiple times.\n',
                                },
                            ],
                            6: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Claudius Terentianus',
                                        },
                                        {
                                            type: 'text',
                                            text: ', for example, had several failed attempts to join the Roman navy. His letters to his father provide valuable insights into the lives of Roman recruits. Here’s what he wrote:',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_5.png',
                                    height: 408,
                                },
                            ],
                            7: [
                                {
                                    type: 'text',
                                    text: 'Though compulsory military service was unpopular, it was possible to volunteer. Even so, the number of soldiers was insufficient for the needs of a constantly expanding empire. Therefore, men from other nations who did not have Roman citizenship were also allowed to join the army.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_6.JPG',
                                },
                            ],
                            8: [
                                {
                                    type: 'question',
                                    text: 'What would happen if a volunteer without Roman citizenship tried to enlist?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_pioneers_military_organization_2',
                                    answers: [
                                        {
                                            answerDescription:
                                                'These soldiers received lower wages, but on retirement, they and their families were usually granted Roman citizenship.',
                                            label: 'He served in the auxiliary military units.',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'The volunteer would have to request permission from the emperor.',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'No Roman citizenship, no gain!',
                                        },
                                    ],
                                    correctAnswer: 'He served in the auxiliary military units.',
                                },
                            ],
                            9: [
                                {
                                    type: 'subtitle',
                                    text: 'A well-trained fighting force',
                                },
                                {
                                    type: 'text',
                                    text: 'Not everyone could become a Roman soldier. Volunteers had to meet several criteria, as outlined below:',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_7.png',
                                    height: 441,
                                },
                            ],
                            10: [
                                {
                                    type: 'text',
                                    text: 'Recruits then had to go through a rigorous four-month training period. All day, new recruits ran long distances in full gear, engaged in one-on-one battles, and practiced unit combat formations and maneuvers. Officers were strict, often carrying a cane to beat subordinates for even the smallest mistake.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_8.png',
                                    height: 250,
                                },
                                {
                                    type: 'text',
                                    text: 'After a march, soldiers had to set up camp and do it all again the next day.',
                                },
                            ],
                            11: [
                                {
                                    type: 'text',
                                    text: 'Their clothing and armor alone weighed about 20 kilograms. Swipe to see its components!',
                                },
                                {
                                    type: 'carousel',
                                    resizeMode: 'cover',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_9(1).png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_9(2).png',
                                    ],
                                },
                            ],
                            12: [
                                {
                                    type: 'text',
                                    text: 'Soldiers used short swords, long spears, daggers, and large shields curved to fit their bodies. Completing the training successfully was celebrated with a grand ceremony.',
                                },
                                {
                                    type: 'text',
                                    text: 'In the Roman military, a well-organized system for providing armor and gear ensured the efficiency of each soldier and, consequently, the whole group.',
                                },
                                {
                                    type: 'text',
                                    text: "Following this, soldiers didn't spend all their time in battles. Their daily tasks were quite diverse. Some of these included:",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_10.png',
                                    height: 107,
                                },
                                {
                                    type: 'text',
                                    text: "Certainly, with such a packed schedule, there must have been moments of joy and satisfaction in the life of a Roman soldier. We'll explore this further in the upcoming section.",
                                },
                            ],
                            13: [
                                {
                                    type: 'subtitle',
                                    text: 'The life in-between',
                                },
                                {
                                    type: 'subtitle',
                                    text: 'Marriage',
                                },
                                {
                                    type: 'text',
                                    text: "Roman soldiers enjoyed socializing with comrades, friends, and even their families. Although formal marriage was not permitted for ordinary legionaries, many didn't conceal their family life, which was neither sanctioned nor penalized by the law.\n",
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Roman soldiers were exempted from certain civic duties, such as taxation, and were not subject to civilian laws.',
                                        },
                                    ],
                                },
                                {
                                    type: 'subtitle',
                                    text: 'Services',
                                },
                                {
                                    type: 'text',
                                    text: 'Within the confines of their camps, soldiers were warmly received by merchants, artisans, and even prostitutes. Some camps even had large amphitheaters for entertainment during leisure hours.',
                                },
                                {
                                    type: 'text',
                                    text: 'Additionally, bathing facilities were essential for both cleanliness and relaxation, providing soldiers with a chance to unwind and bond after a day of training.',
                                },
                                {
                                    type: 'text',
                                    text: "These perks attracted new recruits, ensuring a constant influx of fresh soldiers and maintaining the army's readiness for further expansion.",
                                },
                            ],
                            14: [
                                {
                                    type: 'text',
                                    text: 'Upon completing their service, both legionnaires and auxiliary soldiers or sailors were granted a pair of small folding bronze tablets known as diplomas.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_11.png',
                                    hint: '(Roman Military Diploma, ca. A.D. 149)',
                                },
                                {
                                    type: 'text',
                                    text: 'Originally, the term of service was set at 16 years, which was later extended to 25 years.',
                                },
                                {
                                    type: 'text',
                                    text: 'Retiring Roman veterans and former comrades typically received land in the area and established a settlement known as a colonia.',
                                },
                            ],
                            15: [
                                {
                                    type: 'subtitle',
                                    text: 'Key Points to Remember:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The Roman army, in combination with auxiliary units, could amass a force of around 300,000 soldiers.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Only free-born men meeting specific criteria, including height, health, physique, and basic literacy, were eligible to enlist in the army.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Military service was sought after by the lower classes as it promised improved social standing, a steady income, and additional benefits during service.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The standard term of military service could last up to 25 years.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'While Roman soldiers were officially prohibited from marrying during their service, many of them still formed families.',
                                        },
                                    ],
                                },
                            ],
                            16: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/pioneers_military_organization/Roman_L3_12.png',
                                    height: 347,
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.HISTORY_FALL_ROMAN_EMPIRE,
                title: 'What led to the fall of the Roman Empire',
                theme: 'history',
                subTheme: 'Roman Empire',
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_1_new.png',
                resizeMode: 'contain',
                bgPosition: 150,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 145,
                        description:
                            'The rise and fall of the Roman Empire — was it inevitable, or could it have been avoided? Join us to explore these dramatic events and their lasting impact!',
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'The golden age',
                                },
                                {
                                    type: 'text',
                                    text: '“The play is over.”\n' + '- Augustus the Emperor\n',
                                },
                                {
                                    type: 'text',
                                    text: 'During Rome\'s golden age, known as Pax Romana or "Roman peace," the first Roman Emperor, Gaius Julius Caesar Augustus (27 BCE — 14 CE), consolidated the empire and resolved various internal and external conflicts.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_2.png',
                                    height: 222,
                                },
                            ],
                            2: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "During Rome's golden age, known as ",
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Pax Romana ',
                                        },
                                        {
                                            type: 'text',
                                            text: 'or "Roman peace," the first Roman Emperor, ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Gaius Julius Caesar Augustus ',
                                        },
                                        {
                                            type: 'text',
                                            text: '(27 BCE — 14 CE), consolidated the empire and resolved various internal and external conflicts.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Here, take a look at the Altar of Augustan Peace in Rome, symbolizing the tranquility and prosperity of that era:',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_3.png',
                                    hint: '(Altar of Augustan Peace, Rome, 18 to 9 BC)',
                                    height: 212,
                                },
                            ],
                            3: [
                                {
                                    type: 'text',
                                    text: "However, Pax Romana didn't mean the absence of war. On the contrary, the Roman Empire expanded by conquering vast territories across Europe, Africa, and Asia. The conquered peoples, especially the elites, began adopting Latin and Roman culture.",
                                },
                                {
                                    type: 'text',
                                    text: "Everything seemed perfect for the Roman Empire. But then — suddenly! — the fall of Rome occurred. Let's explore the reasons in the following sections of the lesson.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_4.png',
                                },
                            ],
                            4: [
                                {
                                    type: 'subtitle',
                                    text: 'A Giant with Feet of Clay',
                                },
                                {
                                    type: 'text',
                                    text: 'At its height, the Roman Empire was vast, extending from Spain to the Middle East, making it extremely challenging to govern.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'In 285 CE, Emperor ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Diocletian ',
                                        },
                                        {
                                            type: 'text',
                                            text: '(284 — 305 CE) decided to split the empire into two parts, appointing one of his officers, ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Maximian ',
                                        },
                                        {
                                            type: 'text',
                                            text: '(286 — 305 CE), as co-emperor. This division resulted in the creation of the Eastern and Western Roman Empires.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_5.png',
                                    height: 163,
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'The Eastern Roman Empire later became known as the Byzantine Empire.',
                                        },
                                    ],
                                },
                            ],
                            5: [
                                {
                                    type: 'question',
                                    text: 'Do you know the capital of the Eastern Empire?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_fall_roman_empire_1',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'Rome',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Ravenna',
                                        },
                                        {
                                            answerDescription:
                                                'This city has gone by many names! It was known as Byzantium in Ancient Greece, called Constantinople during the Roman Empire, and today we refer to it as Istanbul',
                                            label: 'Constantinople',
                                        },
                                    ],
                                    correctAnswer: 'Constantinople',
                                },
                            ],
                            6: [
                                {
                                    type: 'text',
                                    text: 'Tensions rose between the Eastern and Western Empires due to their conflicting interests. They fought over resources, money, and military strength.',
                                },
                                {
                                    type: 'text',
                                    text: 'Different circumstances led to the Eastern Empire thriving while the Western Empire struggled with civil unrest and economic problems.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_6.png',
                                    height: 163,
                                },
                            ],
                            7: [
                                {
                                    type: 'subtitle',
                                    text: 'Something is rotten in the state of Rome',
                                },
                                {
                                    type: 'text',
                                    text: 'As the empire grew, its demands also increased:',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_7.png',
                                    height: 167,
                                },
                                {
                                    type: 'text',
                                    text: "Initially, conquered territories met these needs, but this couldn't sustain indefinitely. The influx of enslaved and unemployed people overwhelmed the state, increasing the need for public assistance.",
                                },
                            ],
                            8: [
                                {
                                    type: 'question',
                                    text: 'Which phrase usually describes the selfish demands to satisfy basic needs?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_fall_roman_empire_2',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'Panem et vinum',
                                        },
                                        {
                                            answerDescription: 'This phrase means “Bread and circuses” in Latin.',
                                            label: 'Panem et circenses',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Panem et pecunia',
                                        },
                                    ],
                                    correctAnswer: 'Panem et circenses',
                                },
                            ],
                            9: [
                                {
                                    type: 'text',
                                    text: 'The expression "the fish rots from the head" aptly illustrates how emperors and political elites were a major cause of instability.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'An emblematic instance is ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Emperor Honorius ',
                                        },
                                        {
                                            type: 'text',
                                            text: '(384 — 423 CE), who notoriously displayed more care for his cherished chicken, fittingly named Rome, than for his imperial responsibilities, as recounted in anecdotes from ancient texts.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_8.png',
                                },
                            ],
                            10: [
                                {
                                    type: 'text',
                                    text: 'Even among their closest political circles, emperors fell out of favor.',
                                },
                                {
                                    type: 'text',
                                    text: 'In the final century of the Western Roman Empire, numerous emperors met their demise through assassination. Their own guards were the ones who killed them. Being a Roman emperor became an exceedingly perilous occupation.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_9.png',
                                },
                            ],
                            11: [
                                {
                                    type: 'subtitle',
                                    text: 'All quiet on the western front… or not?',
                                },
                                {
                                    type: 'text',
                                    text: "The Western Roman Empire faced considerable pressure from the tribes of Goths and Vandals from the North. Rome grappled with their onslaughts from the 3rd to the 5th century CE. Regrettably, amidst political turmoil and corruption, technological progress stalled, and Rome's military might diminished.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_10.png',
                                    height: 300,
                                },
                                {
                                    type: 'text',
                                    text: 'Barbarian tribes such as the Goths and Vandals from the North, and subsequently the Huns, frequently caused destruction and looted Rome, the emblematic center of the Roman Empire.',
                                },
                            ],
                            12: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_11.png',
                                    hint: '(Joseph-Noël Sylvestre. The Sack of Rome in 410 by the Vandals. 1890',
                                    height: 600,
                                },
                            ],
                            13: [
                                {
                                    type: 'text',
                                    text: 'In 476 CE, Odoacer, a barbarian leader, compelled the Western Roman emperor Romulus Augustus to step down, marking the conclusion of the illustrious Western Roman Empire.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_12.png',
                                },
                            ],
                            14: [
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Following this, various barbarian kingdoms emerged, established by Germanic tribes such as the Franks in what is now France and Germany, the Vandals in Northern Africa, the Ostrogoths in Italy, and the Visigoths in Spain, evolving into formidable states.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "However, contrary to expectations, the Roman Empire didn't vanish entirely. The Eastern Empire, referred to as the Byzantine Empire, persisted until its eventual demise in 1453",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_13.JPG',
                                    height: 272,
                                },
                                {
                                    type: 'text',
                                    text: 'Thankfully, the rich heritage of the Roman Empire endures through its magnificent architecture and artworks. Regrettably, humanity has yet to fully heed the lessons from the historical collapse of empires, as similar ideologies continue to garner support.',
                                },
                            ],
                            15: [
                                {
                                    type: 'subtitle',
                                    text: 'Key Points to Remember:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The first Roman Emperor was Gaius Julius Caesar Augustus, also known as Octavian.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Pax Romana denotes a period in Roman history marked by peace, stability, and expansion.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: "Emperor Diocletian's division of the empire into halves aimed to enhance governance efficiency, resulting in the establishment of the Western and Eastern Roman Empire.",
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: "The Western Roman Empire's decline stemmed from factors such as political turmoil, corruption, reliance on slave labor, economic downturns, and invasions by barbarian tribes, culminating in its downfall in 476 CE.",
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The Eastern Roman Empire, or Byzantine Empire, persisted until 1453.',
                                        },
                                    ],
                                },
                            ],
                            16: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L4_14.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.HISTORY_ABOUT_ROMAN_EMPIRE_QUIZ,
                title: 'Roman Empire Quiz: Test Your Knowledge!',
                theme: 'history',
                subTheme: 'Roman Empire',
                imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L5_1.png',
                resizeMode: 'contain',
                bgPosition: 150,
                content: [
                    {
                        type: 'pre-quiz',
                        time: '5 min',
                        students: 100,
                        description:
                            'Challenge yourself with this quiz to gauge your understanding of the political significance, remarkable innovations, and captivating military prowess of the Roman Empire. Prepare to delve into its rich history and learn something new!',
                    },
                    {
                        type: 'quiz',
                        pages: {
                            1: [
                                {
                                    type: 'question',
                                    text: 'Who was the legendary founder of Rome and its first king?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_roma_empire_quiz_1',
                                    answers: [
                                        {
                                            label: 'Romulus',
                                            answerDescription: '',
                                        },
                                        {
                                            label: "Romulus killed his brother Remus and became Rome's first king",
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Remus',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'A she-wolf',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'Romulus',
                                },
                                {
                                    type: 'text',
                                    text: 'Archeological research has uncovered a settlement dating back to around the 8th century BCE, which is believed to have been associated with King Romulus. However, the myth about a she-wolf remains just that—a myth, with no evidence to support it.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L5_2.png',
                                },
                            ],
                            2: [
                                {
                                    type: 'question',
                                    text: 'Before transitioning into an empire, the Roman government was:',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_roma_empire_quiz_2',
                                    answers: [
                                        {
                                            label: 'Republic, then Kingdom',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'United States of Roman lands',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Kingdom, then Republic',
                                            answerDescription:
                                                'Romans were quite picky about their form of state governance, huh?',
                                        },
                                    ],
                                    correctAnswer: 'Kingdom, then Republic',
                                },
                                {
                                    type: 'text',
                                    text: "Here's a visual aid to help you remember the main points.",
                                },
                                {
                                    type: 'carousel',
                                    resizeMode: 'contain',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L5_3-1.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L5_3-2.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L5_3-3.png',
                                    ],
                                },
                            ],
                            3: [
                                {
                                    type: 'question',
                                    text: 'Why were aqueducts essential in Roman cities?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_roma_empire_quiz_3',
                                    answers: [
                                        {
                                            label: 'Functioned as public sanitation systems',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Served as delivery routes for mail',
                                            answerDescription: '',
                                        },
                                        {
                                            label:
                                                'Supplied urban areas with fresh water for drinking, bathing, and decorative fountains',
                                            answerDescription:
                                                'The ancient Romans had a penchant for embracing civilization.',
                                        },
                                    ],
                                    correctAnswer:
                                        'Supplied urban areas with fresh water for drinking, bathing, and decorative fountains',
                                },
                                {
                                    type: 'text',
                                    text: "That's the functionality of aqueducts!",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L5_4.png',
                                    height: 126,
                                },
                            ],
                            4: [
                                {
                                    type: 'question',
                                    text: 'Some Roman roads endure today because:',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_roma_empire_quiz_4',
                                    answers: [
                                        {
                                            label: 'They were constructed with a minimum of five layers',
                                            answerDescription:
                                                'The methods employed in building Roman roads involved thorough groundwork, intricate materials, and consistent upkeep afterward',
                                        },
                                        {
                                            label: 'Aliens constructed them',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Only rulers had authorization to utilize them',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'They were constructed with a minimum of five layers',
                                },
                                {
                                    type: 'text',
                                    text: 'Five layers, no jokes!',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L5_5.png',
                                    height: 372,
                                },
                            ],
                            5: [
                                {
                                    type: 'question',
                                    text: 'What contributed to making Roman legionaries the most formidable and unbeatable soldiers of their era?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_roma_empire_quiz_5',
                                    answers: [
                                        {
                                            label: 'Maintaining celibacy for a quarter-century',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Consistent training and adjusting to sophisticated strategies',
                                            answerDescription:
                                                'The supremacy of their army in that period stemmed from intelligence as well as strength',
                                        },
                                        {
                                            label: 'Abstaining from bathing throughout their service',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'Consistent training and adjusting to sophisticated strategies',
                                },
                                {
                                    type: 'text',
                                    text: 'Fun fact: In Roman military encampments, numerous individuals utilized communal latrines, amounting to several thousand users. One can only imagine the resulting odor! Perhaps it could have even been utilized as a form of biological warfare against unfortunate adversaries of Rome!',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L5_6.png',
                                },
                            ],
                            6: [
                                {
                                    type: 'question',
                                    text: 'What is the term used to describe the time when the Roman state reached its peak, often referred to as its Golden Age?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_roma_empire_quiz_6',
                                    answers: [
                                        {
                                            label: "Julius Caesar's Dictatorship",
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'The Period of Dual Capitals',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Pax Romana or Roman peace',
                                            answerDescription:
                                                'During this era, despite its name, the Roman Empire witnessed significant expansion, with the Roman legions leading the charge with their military prowess',
                                        },
                                    ],
                                    correctAnswer: 'Pax Romana or Roman peace',
                                },
                                {
                                    type: 'text',
                                    text: 'Rome certainly stood out as the most remarkable state of its era!',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L5_7.png',
                                    height: 247,
                                },
                            ],
                            7: [
                                {
                                    type: 'question',
                                    text: 'What factors mainly led to the decline of the Western Roman Empire?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_roma_empire_quiz_7',
                                    answers: [
                                        {
                                            label: 'Misfortune strikes',
                                            answerDescription: '',
                                        },
                                        {
                                            label:
                                                'Political unrest, ineffective governance, economic turmoil, attacks by barbarian tribes',
                                            answerDescription:
                                                'The Roman Empire collapsed due to internal vulnerabilities and external threats.The Roman Empire collapsed due to internal vulnerabilities and external threats.',
                                        },
                                        {
                                            label: 'Citizens of the empire asserted their autonomy and sovereignty',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer:
                                        'Political unrest, ineffective governance, economic turmoil, attacks by barbarian tribes',
                                },
                                {
                                    type: 'text',
                                    text: 'Indeed, the rise and fall of empires is a recurring pattern throughout history.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L5_8.png',
                                },
                            ],
                            8: [
                                {
                                    type: 'question',
                                    text: 'After the fall of Rome, the territories of the former Western Roman Empire came under the control of:',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'history_roma_empire_quiz_8',
                                    answers: [
                                        {
                                            label: 'Byzantine Empire',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Eastern Roman Empire',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Barbarian kingdoms established by German tribes',
                                            answerDescription:
                                                'The Romans referred to those tribes as barbarians, signifying their perception of them as uncivilized',
                                        },
                                    ],
                                    correctAnswer: 'Barbarian kingdoms established by German tribes',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L5_9.png',
                                },
                            ],
                            9: [
                                {
                                    type: 'subtitle',
                                    text: 'Ta-da!',
                                },
                                {
                                    type: 'text',
                                    text: 'Now you have ample knowledge to reflect on the Roman Empire effectively!',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/history/fall_roman_empire/Roman_L5_10.png',
                                    height: 300,
                                },
                            ],
                        },
                    },
                ],
            },
        ],
    },
    art: {
        title: 'Art',
        lessons: [
            {
                id: LESSONS_ID.ART_MUSEUM_TRIP,
                theme: 'art',
                subTheme: 'Introduction',
                title: 'A museum trip',
                imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/museum_new.png',
                resizeMode: 'contain',
                bgPosition: 150,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 653,
                        description:
                            "Ever wonder why things like golden toilets and blank canvases are called art and put in museums? Let's dive into what art is by imagining we're going through a museum.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'text',
                                    text: "Imagine it's a sunny day, you're on vacation, and you want to see something inspiring. Why not visit a museum? You see a big, old building in front of you, ready to check out some paintings.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/museumlowpoly-ezgif.com-webp-to-jpg-converter.png',
                                    height: 275,
                                },
                            ],
                            2: [
                                {
                                    type: 'text',
                                    text: 'You enter a quiet room with soft lighting, seeing things like old pistols from the 1500s under glass.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        "https://d33llhlxn8rt1z.cloudfront.net/museum-trip/640px-Wheellock_pistol_or_'Puffer'.png",
                                    hint: '(Wheellock Pistol, circa 1580)',
                                    width: 250,
                                    height: 100,
                                },
                                {
                                    type: 'text',
                                    text: 'Think for a moment. Are items like pistols and chairs art too?',
                                },
                                {
                                    type: 'question',
                                    text: 'Is this an art exhibition?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'museum_trip_question_1',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'No, seems more like an antique shop.',
                                        },
                                        {
                                            answerDescription: 'Keep reading to find out why.',
                                            label: 'Yes!',
                                        },
                                    ],
                                    correctAnswer: 'Yes!',
                                },
                            ],
                            3: [
                                {
                                    type: 'text',
                                    text: "Before the 16th century, people thought of art as any kind of skill or knowledge, and they didn't see a difference between it and things like crafts or sciences. Because of this, fancy guns were considered as artistic as paintings. Also, important and religious items from the time before Christianity, like a statue of a goddess of fertility or a tiny jar, were included in what they considered art.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/Chalcolithic_Limestone_Fertility_Goddess__Cyprus__3000-2500_BC__10465199194_-removebg-preview.png',
                                    hint: '(Chalcolithic Limestone Fertility Goddess. Cyprus, 3000-2500 BCE)',
                                },
                            ],
                            4: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/Amphoriskos_oil_flask_National_Museum_in_Warsaw_142403_MNW.png',
                                    hint: '(Unsigned amphoriskos. Cyprus, 1050-750 BCE)',
                                    height: 385,
                                },
                                {
                                    type: 'text',
                                    text: "Let's go to the next room and see what's there.",
                                },
                            ],
                            5: [
                                {
                                    type: 'text',
                                    text: "Now we're in a big room filled with framed paintings and sculptures on stands. Every artwork looks very real, showing every little detail. It's clear, that this is art. Take a moment to take it all in.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/La_nascita_di_Venere_(Botticelli).png',
                                    hint: '(Sandro Botticelli. The Birth of Venus, 1486)',
                                    height: 215,
                                },
                            ],
                            6: [
                                {
                                    type: 'text',
                                    text: "How did we go from valuing useful and sacred items to this type of art? In the 16th century, the creation of the Florence Academy of the Arts of Drawing changed things. It moved art from being about crafts to focusing on the ideas and beauty behind it. This made it easier to tell apart fine arts like painting and sculpture from art used in decorations. Back then, people were clear about what was considered art. There's no questioning this sculpture, is there?",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/Joseph_Chinard_-_Centaure.png',
                                    hint: '(Joseph Chinard. Centaure, 1789)',
                                    width: 250,
                                    height: 335,
                                },
                            ],
                            7: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'This kind of art, which was realistic and pretty, was unique until the mid-1800s. Then, some bold young artists started to challenge the old art schools. They stopped using old methods and began making new, experimental art known as ',
                                        },
                                        {type: 'bold', text: 'Impressionism'},
                                        {
                                            type: 'text',
                                            text: '.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/640px-Claude_Monet_-_Seerosen.png',
                                    hint: '(Claude Monet. Water-Lilies, 1915)',
                                    height: 250,
                                },
                            ],
                            8: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "Over time, artists embraced this new direction; the 20th century saw a burst of diverse art styles like expressionism, cubism, and surrealism, all part of what's called ",
                                        },
                                        {type: 'bold', text: 'avant-garde'},
                                        {
                                            type: 'text',
                                            text: " art. You'll find this kind of art in the next room. ",
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "Wow, it's crowded here. It looks like everyone loves the avant-garde; it's fresh and fashionable. ",
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: '"',
                                        },
                                        {type: 'bold', text: 'Avant-garde'},
                                        {
                                            type: 'text',
                                            text: '"',
                                        },
                                        {
                                            type: 'text',
                                            text: ' is a French word first used in the 19th-century arts to talk about groundbreaking works that showed off new styles or topics.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/Van_Gogh_-_Starry_Night_-_Google_Art_Project.png',
                                    hint: '(Van Gogh. Starry Night, 1889)',
                                    height: 265,
                                },
                            ],
                            9: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/Edvard_Munch_-_Vampire_(1895)_-_Google_Art_Project.png',
                                    hint: '(Edward Munch. Vampire, 1895)',
                                    height: 275,
                                },
                            ],
                            10: [
                                {
                                    type: 'text',
                                    text: "How did we get to abstract paintings without clear subjects or objects? Let's go upstairs to see art that makes you think.",
                                },
                                {
                                    type: 'text',
                                    text: "You walk into a room that's full of light and the first thing you notice is a big canvas showing a small white square on top of a bigger one. This is what you see:",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/White_on_White_(Malevich,_1918).png',
                                },
                            ],
                            11: [
                                {
                                    type: 'question',
                                    text: "What's happening here?",
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'museum_trip_question_2',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: "The frame is here, but where's the artwork?",
                                        },
                                        {
                                            answerDescription: 'Yes, we do see the painting.',
                                            label: "It's actually a piece of art.",
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Is it meant for selfies?',
                                        },
                                    ],
                                    correctAnswer: "It's actually a piece of art.",
                                },
                            ],
                            12: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'This is the "',
                                        },
                                        {type: 'bold', text: 'White on White'},
                                        {
                                            type: 'text',
                                            text: '" painting by the famous Polish-Ukrainian artist Kazimir Malevich. It\'s an important artwork that was groundbreaking when it was made. But what makes it so special?',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/White_on_White_(Malevich,_1918).png',
                                    hint: '(Kazimir Malevich. White on White, 1918)',
                                },
                            ],
                            13: [
                                {
                                    type: 'text',
                                    text: "Malevich aimed to liberate art from traditional guidelines. He was inspired by major 20th-century changes like the invention of cameras, paint tubes, geopolitical shifts, fast transportation, and city growth. These developments made people question the main purpose of art since old methods weren't fitting anymore. Artists began to experiment and search for new ways to show their ideas visually. Malevich's artwork acted as a reset, introducing fresh perspectives.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/Malevich,_Kazimir_Severinovich_-_Black_Square.png',
                                    hint: '(Kazimir Malevich. Black Square, 1915)',
                                },
                            ],
                            14: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "Art moved into new areas, bringing in new methods, materials, and themes. This new direction in art's evolution is called ",
                                        },
                                        {type: 'bold', text: 'conceptual art'},
                                        {
                                            type: 'text',
                                            text: '.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {type: 'bold', text: 'Conceptual art'},
                                        {
                                            type: 'text',
                                            text: ", which started in the late 1960s, focuses more on the concept than how it looks, suggesting that the idea behind the art is what truly matters, even if it's not shown visually.",
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'For instance, Lucio Fontana, an Argentine-Italian artist, founded the Spatialism movement and is known for his unique dark slashes that went beyond the flat surface of the canvas.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        "https://d33llhlxn8rt1z.cloudfront.net/museum-trip/640px-Spatial_Concept_'Waiting',_cut_canvas_by_Lucio_Fontana,_Tate_Modern_cropped.png",
                                    hint: '(Lucio Fontana. Waiting, 1960)',
                                    height: 265,
                                },
                            ],
                            15: [
                                {
                                    type: 'text',
                                    text: 'Or take Marina Abramovic, an artist from Serbia who led the way in performance art. She looks into how far the body can go and what the mind can do, often involving the audience in her work, even in her riskiest performances.',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {type: 'bold', text: 'Performance art'},
                                        {
                                            type: 'text',
                                            text: " is a unique kind of visual art that started around the 1910s. It involves live action and doesn't last forever.",
                                        },
                                    ],
                                },
                            ],
                            16: [
                                {
                                    type: 'text',
                                    text: "This type of art moves away from things like paintings and sculptures and often deals with social issues and identity. Conceptual art is like a rebellious teenager, always challenging the rules and trying to find itself. So, if you come across a working toilet made of 18-karat gold in a museum, it's probably an important artwork valued at $6 million!",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/art/DALLE2024-03-1109.43.35-CreateanimageofagoldentoiletintheLowPolystyle.Thetoiletshouldbedepictedwithgeometricshapesandastylizeddigitalappearancechara-ezgif.com-webp-to-png-converter.png',
                                },
                            ],
                            17: [
                                {
                                    type: 'text',
                                    text: 'Your journey is nearly done, and you pick up a brochure from the museum. The first thing you notice is the title — "There\'s no one way to define what art is."',
                                },
                                {
                                    type: 'question',
                                    text: 'Is that correct?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'museum_trip_question_3',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'Relax. The brochure itself is an art piece.',
                                        },
                                        {
                                            answerDescription:
                                                'All the questions before were a bit tricky since everyone has their own view of what art is.',
                                            label: "Yes, it's correct.",
                                        },
                                        {
                                            answerDescription: '',
                                            label: "No, it's not true. The writer just wanted to grab your attention.",
                                        },
                                    ],
                                    correctAnswer: "Yes, it's correct.",
                                },
                            ],
                            18: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "You're allowed to see art in your way. Yet, there are some widely accepted rules for what makes something art today. ",
                                        },
                                        {
                                            type: 'boldUnderlined',
                                            text: 'Something is considered art if it:',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "- Isn't just made to be used Has an idea or concept behind it",
                                },
                                {
                                    type: 'text',
                                    text: '- Has an idea or concept behind it',
                                },
                                {
                                    type: 'text',
                                    text: '- Is considered art by the person who made it',
                                },
                                {
                                    type: 'text',
                                    text: '- Is recognized as art by critics and the art world',
                                },
                            ],
                            19: [
                                {
                                    type: 'text',
                                    text: "Awesome! You've seen the whole museum in one go; that's quite an achievement. We hope you had a fun time!",
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'As usual, you have to go through the gift shop to leave, and you find a cool board game named "',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Becoming an Enthusiast of Art',
                                        },
                                        {
                                            type: 'text',
                                            text: '". Give it a go!',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "Flip the card to see what's on the back.",
                                },
                                {
                                    type: 'flippedImage',
                                    data: [
                                        {
                                            image: 'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/Mask%20group-3.png',
                                            text: 'Start with art you like',
                                        },
                                        {
                                            image: 'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/Mask%20group-6.png',
                                            text: 'Go to more galleries and museums',
                                        },
                                        {
                                            image: 'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/Mask%20group-4.png',
                                            text: 'Do some research',
                                        },
                                        {
                                            image: 'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/Mask%20group-7.png',
                                            text: 'Ask questions',
                                        },
                                        {
                                            image: 'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/Mask%20group.png',
                                            text: 'Feel the art',
                                        },
                                        {
                                            image: 'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/Mask%20group-5.png',
                                            text: 'Read art books',
                                        },
                                    ],
                                },
                            ],
                            20: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'boldUnderlined',
                                            text: 'Things to keep in mind:',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: "Before the 16th century, art was just seen as any kind of skill, and there wasn't a clear line between it, crafts, or sciences.",
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'From the 16th century, art schools in Europe started focusing on the ideas and beauty of art, making a clear distinction between fine arts and decorative arts.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'In the mid-1800s, avant-garde artists started questioning the old art schools and made art that was more about feelings and freedom.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: "Today, it's okay for everyone to have their own opinion about what art is. So, feel free to enjoy art in your own way!",
                                        },
                                    ],
                                },
                            ],
                            21: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/museum-trip/DALLE2024-03-1109.43.25-CreateanimageintheLowPolystylebasedontheattachedimage.Itshoulddepictatornmuseumticketinfrontofamuseumfacade.Theimageshould-ezgif.com-webp-to-png-converter.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.ART_ABOUT_ART_BASICS_2,
                title: 'Why do artworks cost so much?',
                theme: 'art',
                subTheme: 'Art Basics',
                imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L2_1_new.png',
                resizeMode: 'contain',
                bgPosition: 150,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            "Can a high price tag on art signal exceptional quality? And who decides the value of art pieces? Let's uncover these answers by exploring intriguing historical occurrences.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'text',
                                    text: 'In the early 1900s, Claude Monet, the famous impressionist painter, was quite popular. However, some people thought he made too many paintings, which made them less valuable and, consequently, less expensive. This was a problem.',
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L2_2.png',
                                    hint: 'Woman with a Parasol, Claude Monet',
                                    height: 415,
                                },
                                {
                                    type: 'text',
                                    text: 'Paul Durand-Ruel, an art dealer specializing in impressionist works devised a solution. What do you think it was?',
                                },
                            ],
                            2: [
                                {
                                    type: 'question',
                                    text: 'How would you increase the prices for Claude Monet’s artworks?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'art_art_basics_question_21',
                                    answers: [
                                        {
                                            label: 'Improve his advertising',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Limit the availability of his works',
                                            answerDescription:
                                                "The answer was the second option, but with a clever twist.\nFirst, Durand-Ruel announced an exhibition of Monet's paintings in New York. But then he canceled it and said Monet destroyed paintings worth $100,000 because he didn't like them. But how did this change things?",
                                        },
                                    ],
                                    correctAnswer: 'Limit the availability of his works',
                                },
                                {
                                    type: 'text',
                                    text: "In the public's view, Monet was now seen as a true artist rather than just a craftsman. His next genuine exhibition in New York was a huge success.",
                                },
                                {
                                    type: 'text',
                                    text: "As we can see, when it comes to art and money, there can be some tricks and strategies involved. However, there are important factors that determine the value of art. Let's reveal three of them.",
                                },
                            ],
                            3: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'The larger the artwork, the higher the price.\n',
                                        },
                                        {
                                            type: 'text',
                                            text: 'Size is important, especially for emerging young painters. They often find it easier to price their work based on the amount of materials used rather than their fame or reputation.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "There's even a popular formula among young artists for pricing art based on canvas size.",
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Price of an artwork = square inches of the piece * appropriate dollar amount + cost of materials',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'To calculate the square inches, multiply the width by the length of the artwork. But what about determining the "appropriate dollar amount"? This depends on the artist\'s market rate, which is linked to their reputation and popularity.',
                                },
                                {
                                    type: 'text',
                                    text: 'Not all artists follow this exact formula, but the impact of size remains a significant aspect. For instance, consider these two pieces by the French Impressionist Paul Cézanne:',
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L2_3.png',
                                    hint: 'Bouilloire et fruits, Paul Cézanne',
                                    height: 253,
                                },
                            ],
                            4: [
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L2_4.png',
                                    hint: 'Nature morte de pêches et poires, Paul Cézanne',
                                    height: 248,
                                },
                                {
                                    type: 'text',
                                    text: 'The first one is Bouilloire et fruits:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: '19 x 23 inches',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'the price is more than 59 million dollars',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Second is Nature morte de pêches et poires:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: '14 x 18 inches',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'the price is 28 million dollars',
                                        },
                                    ],
                                },

                                {
                                    type: 'text',
                                    text: 'A distinct contrast. What other factors influence the pricing of art?',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Scarcity\n',
                                        },
                                        {
                                            type: 'text',
                                            text: "It plays a crucial role in the value of art. This scarcity can stem from intentional limitations on artworks, as seen in Monet's case at the NY fair, or from an artist no longer being alive.",
                                        },
                                    ],
                                },
                            ],
                            5: [
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Interestingly, artists often become more valuable posthumously.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "It all boils down to the interplay of supply and demand. Limited editions of works by deceased artists like Picasso are highly sought after due to the dwindling availability of their creations. Nonetheless, the demand for a particular artist's work can fluctuate with shifts in popularity and changing tastes over time.",
                                },
                                {
                                    type: 'text',
                                    text: "Additionally, buyers tend to place greater value on artists who are well-known and distinctive, a status that typically evolves gradually, even after the artist's passing.",
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L2_5.png',
                                    hint: 'Red vineyards, Vincent van Gogh',
                                    height: 263,
                                },
                            ],
                            6: [
                                {
                                    type: 'text',
                                    text: 'Vincent van Gogh is a prime example of an artist whose financial success only flourished posthumously. A striking illustration of this is the sale of his powerful landscape painting, The Red Vineyard, which he initially sold for 400 francs (equivalent to £16 at the time).',
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L2_6.png',
                                    hint: 'Portrait of Dr. Gachet, Vincent van Gogh',
                                    height: 411,
                                },
                                {
                                    type: 'text',
                                    text: 'Later, his Portrait of Dr. Gachet became the most expensive painting in the world in 1990, selling for 82.5 million dollars.',
                                },
                                {
                                    type: 'text',
                                    text: "Van Gogh's unique and evolving artistic style continues to capture the public's interest, making his artworks highly sought after.",
                                },
                            ],
                            7: [
                                {
                                    type: 'subtitle',
                                    text: 'Reputation',
                                },
                                {
                                    type: 'text',
                                    text: 'It may be obvious to think about how famous artists and art dealers are seen. But have you ever thought about how important the reputation of the previous owner is?',
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L2_7.png',
                                    hint: 'Alexander the Great and Campaspe in the Studio of Apelles, Giovanni Battista Tiepolo',
                                    height: 263,
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Hermann Goering',
                                        },
                                        {
                                            type: 'text',
                                            text: ', a powerful member of the Nazi Party, was known for stealing art. In World War II, he kept about 1,400 stolen artworks in his house near Berlin, some of which belonged to Jewish families. Today, his collection is valued at around 2.9 billion dollars',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Following the war, a few artworks were given back to their original owners. Some pieces, like ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Alexander the Great',
                                        },
                                        {
                                            type: 'text',
                                            text: ", found their way into museums. Unfortunately, some got lost among art dealers and collectors, making them tough to sell due to buyers avoiding any connection with the previous owner and the artwork's history.",
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'underlined',
                                            text: 'This is why the background of an object, or provenance, is significant.',
                                        },
                                    ],
                                },
                            ],
                            8: [
                                {
                                    type: 'subtitle',
                                    text: 'Things to remember',
                                },
                                {
                                    type: 'text',
                                    text: "Art is not just a commodity; it's a blend of business, expertise, and investment. While there are market dynamics like supply, demand, trends, and marketing at play, there's still a touch of magic in the art and its history.",
                                },
                                {
                                    type: 'text',
                                    text: 'Paul Mellon once reflected on the worth of money when faced with a masterpiece, saying, "What does money worth when you stand in front of such a masterpiece?" This sentiment was evident when he spent $610,000 on Paul Cézanne\'s "The Boy in the Red Vest."',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "So, when you're questioning ",
                                        },
                                        {
                                            type: 'italicUnderlined',
                                            text: 'why art is priced as it is',
                                        },
                                        {
                                            type: 'text',
                                            text: ', consider delving into ',
                                        },
                                        {
                                            type: 'italicUnderlined',
                                            text: 'the story behind that price.',
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.ART_ABOUT_ART_BASICS_3,
                title: 'Is it possible for anyone to make abstract art?',
                theme: 'art',
                subTheme: 'Art Basics',
                resizeMode: 'contain',
                bgPosition: 150,
                imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L3_1.png',
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            "Abstract art might appear random and similar to a child's drawings. However, these pieces can be worth millions and are often displayed in museums. Let's explore the skills required to create such art.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'text',
                                    text: "Let's begin with an exercise. Can you tell which of these works was created by a famous artist and which one was made by a five-year-old child?",
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L3_2.png',
                                    height: 218,
                                },
                                {
                                    type: 'text',
                                    text: "Get ready to challenge your brain even more. Let's identify the original abstract artwork from its imitation below.",
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L3_3.png',
                                    height: 195,
                                },
                                {
                                    type: 'text',
                                    text: 'Alright, keep this in mind to help you find the correct answers later in the lesson!',
                                },
                            ],
                            2: [
                                {
                                    type: 'text',
                                    text: 'As we can see, abstract painting might seem messy, unstructured, and simple to make. However, not every chaotic image qualifies as abstract art. So, what defines abstract art?',
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L3_4.png',
                                    hint: 'Color Study: Squares with Concentric Circles, Wassily Kandinsky',
                                    height: 252,
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'According to ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Wassily Kandinsky',
                                        },
                                        {
                                            type: 'text',
                                            text: ', a pioneer in abstract art:',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "Abstract art consists of paintings or sculptures that don't imitate or try to represent physical objects like houses or dogs.",
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'This movement began in the early 20th century. Its main idea was to create artwork that is purely an imaginary vision, where nothing recognizable from our known world is depicted.',
                                },
                                {
                                    type: 'text',
                                    text: 'We use Instagram to capture real life. So, what special skills or mastery are needed to create abstract art?',
                                },
                            ],
                            3: [
                                {
                                    type: 'subtitle',
                                    text: 'Understanding colors and contrast',
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L3_5.png',
                                    hint: 'Composition II in Red, Blue, and Yellow, Piet Mondrian',
                                },
                                {
                                    type: 'text',
                                    text: 'A specific set of colors can reveal the philosophy behind a work of art.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'For instance, painter ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Piet Mondrian ',
                                        },
                                        {
                                            type: 'text',
                                            text: 'is renowned for using primary colors — red, yellow, and blue. These colors are called primary because all other colors can be made by mixing them.',
                                        },
                                        {
                                            type: 'text',
                                            text: ' He also used contrasting white and black.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Mondrian aimed to depict the fundamental structure of reality. He believed that primary colors and strict lines best represented universal forces. Changing just one color would disrupt the entire dynamic of the piece.',
                                },
                                {
                                    type: 'text',
                                    text: 'What other elements of abstract art should we consider?',
                                },
                            ],
                            4: [
                                {
                                    type: 'subtitle',
                                    text: 'The feeling of the composition',
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L3_6.png',
                                    hint: 'Suprematism, Kazimir Malevich',
                                },
                                {
                                    type: 'text',
                                    text: "Use your imagination — doesn't this painting remind you of confetti scattered on the floor?",
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'This piece is an example of ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Suprematism',
                                        },
                                        {
                                            type: 'text',
                                            text: ' by the notable artist ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Kazimir Malevich',
                                        },
                                        {
                                            type: 'text',
                                            text: '. This type of composition is known as the confetti effect. According to this principle, visual balance is achieved when elements of varying visual interest are evenly spread across the entire picture. However, to avoid monotony and keep the composition engaging, there must be some variety, like the yellow circle in this Suprematism piece.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'The skillful use of composition can create a captivating effect.',
                                },
                            ],
                            5: [
                                {
                                    type: 'subtitle',
                                    text: 'Visual and idea complexity',
                                },
                                {
                                    type: 'text',
                                    text: 'Take a moment to observe this painting. Do you feel like the elements are somehow moving? Or maybe you can even imagine they have sound?',
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L3_7.png',
                                    hint: 'Yellow-Red-Blue, Wassily Kandinsky',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "It's not a spinning planet but a 1925 piece titled ",
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Yellow-Red-Blue',
                                        },
                                        {
                                            type: 'text',
                                            text: ' by ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'Wassily Kandinsky',
                                        },
                                        {
                                            type: 'text',
                                            text: '. This painting features a complex composition with layers of colors and geometric shapes. Together, they create a kinetic balance that feels like it’s in motion.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'The main goal of this work was to visualize the sensations one experiences while listening to music. Kandinsky viewed music as the purest form of abstraction and connected art and music by interpreting colors as specific sounds.',
                                },
                                {
                                    type: 'text',
                                    text: 'Look at his work again - can you hear it?',
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L3_7.png',
                                    hint: 'Yellow-Red-Blue, Wassily Kandinsky',
                                },
                            ],
                            6: [
                                {
                                    type: 'text',
                                    text: "Now, let's try our task again. Can you tell which of these works was created by a famous artist and which one was made by a five-year-old child?",
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L3_2.png',
                                },
                                {
                                    type: 'question',
                                    text: 'Which one would you expect to see in a museum?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'art_art_basics_question_31',
                                    answers: [
                                        {
                                            label: 'The first one, as it reflects the touch of a master.',
                                            answerDescription:
                                                'The first painting is titled Chaos, Nr. 2, created in 1906 by artist Hilma af Klint. The second painting is the playful creation of a talented and humorous 5-year-old boy.',
                                        },
                                        {
                                            label: 'The second one, owing to its perfect symmetry.',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'The first one, as it reflects the touch of a master.',
                                },
                            ],
                            7: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Hilma af Klint',
                                        },
                                        {
                                            type: 'text',
                                            text: ", a Swedish painter, is considered the world's first abstract artist, predating Wassily Kandinsky.",
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'During her lifetime, scientific discoveries such as X-rays and electromagnetic fields were emerging. But how could one comprehend these invisible forces?',
                                },
                                {
                                    type: 'text',
                                    text: 'Klint found her answer through art. In works like Chaos, Nr. 2, she departed from figurative painting and delved into abstract forms, searching for answers.',
                                },
                                {
                                    type: 'text',
                                    text: 'And what about this pair?',
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L3_3.png',
                                },
                                {
                                    type: 'question',
                                    text: 'Which is the original work?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'art_art_basics_question_32',
                                    answers: [
                                        {
                                            label: 'The first one because it is looser',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'The second one because it has perfect symmetry',
                                            answerDescription:
                                                "The original work is Composition with Red and Blue by Piet Mondrian. The work on the left is an AI-generated imitation of Mondrian's style, and it lacks the true artistry. As you can see, composition and symmetry are crucial for Mondrian. Disrupt these elements, and the entire feel of the work is lost.",
                                        },
                                    ],
                                    correctAnswer: 'The second one because it has perfect symmetry',
                                },
                            ],
                            8: [
                                {
                                    type: 'subtitle',
                                    text: 'Things to remember:',
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L3_8.png',
                                    hint: 'Suprematist Composition: Aeroplane Flying. Kazimir Malevich',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Abstract art:',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Does not imitate or represent a physical subject.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'May focus on one element such as a color, form, or shape.',
                                        },
                                        {
                                            type: 'marker',
                                            text: "Reflects the artist's emotions, beliefs, and insights.",
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Contains its own sense of order and coherence.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Creating abstract art involves a long process of research and personal struggles. Even the simplest pieces might take years to complete.',
                                },
                                {
                                    type: 'text',
                                    text: 'And yes, abstract artists can create “real paintings.” For instance, look at these early works by Piet Mondrian.',
                                },
                                {
                                    type: 'image',
                                    imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/art/art_basics/Art_B_L3_9.png',
                                    hint: 'Village Church; Mill of Heeswijk Sun, Piet Mondrian',
                                },
                                {
                                    type: 'text',
                                    text: 'An abstract artist can produce traditionally beautiful works. However, beauty was never the main goal.',
                                },
                            ],
                        },
                    },
                ],
            },
        ],
    },
    math: {
        title: 'Math',
        lessons: [
            {
                id: LESSONS_ID.MATH_FRACTIONS,
                title: 'Fractions',
                theme: 'math',
                subTheme: 'Pre-Algebra',
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/fractions/DALLE2024-03-2116.31.52-Craftanimageofapepperonipizzawithoneslicemissinginalowpolystyle.Thepizzashouldbedividedintoevenslicesexceptforthespacewh-ezgif.com-webp-to-png-converter.png',
                bgPosition: 100,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 653,
                        description:
                            "Understanding fractions is like learning to instinctively know how to deal with parts of a whole. Instead of feeling overwhelmed, you'll learn to navigate fractions effortlessly, like choosing the bigger slice of pizza. Let's break it down and see how it works!",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'text',
                                    text: 'During the mid-1980s, A&W, a fast-food chain based in the United States, launched an advertising campaign to promote their latest burger. They aimed to rival another restaurant by directly comparing their burgers in the ad.',
                                },
                            ],
                            2: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/fractions/Screenshot%20at%20Mar%2021%2009-47-36.png',
                                    height: 170,
                                },
                                {
                                    type: 'question',
                                    text: 'According to this advertisement, which burger is bigger and offers better value?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'fractions_question_1',
                                    answers: [
                                        {
                                            answerDescription:
                                                'Enjoy! The tale of A&W, a US burger chain\'s attempt to increase sales by introducing a burger with a half-pound patty, which ultimately failed, is now a thing of the past. Studies uncovered that many people mistakenly thought a one-third pound patty was smaller than a one-fourth pound patty and were hesitant to "pay more for less".',
                                            label: '1/3',
                                        },
                                        {
                                            answerDescription: '',
                                            label: '1/4',
                                        },
                                    ],
                                    correctAnswer: '1/3',
                                },
                            ],
                            3: [
                                {
                                    type: 'text',
                                    text: `However, it's quite straightforward — one-third of anything is always greater than one-fourth. 
                                    ⅓ > ¼`,
                                },
                                {
                                    type: 'text',
                                    text: `Yet, customers were focusing on the bottom number, the denominator, thus comparing three to four.
                                    3 < 4`,
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'People overlooked the fact that since fractions represent parts of a whole, the ',
                                        },
                                        {type: 'bold', text: 'denominator '},
                                        {
                                            type: 'text',
                                            text: 'shows the number of equal parts in that whole. Therefore, one part of an object divided into three parts will be larger than one part of an object divided into four parts.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "While it's difficult to determine conclusively if the chain's low sales were influenced by the misunderstanding of fractions, such misinterpretations can indeed seem counterintuitive despite their logical basis.",
                                },
                            ],
                            4: [
                                {
                                    type: 'text',
                                    text: "Let's try again to test your intuition.",
                                },
                                {
                                    type: 'question',
                                    text: 'Which fraction is larger?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'fractions_question_2',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: '2/3',
                                        },
                                        {
                                            answerDescription: `2/3 < 3/4 
Cheers for instinctive responses! We could delve into a rigorous mathematical explanation (like 3/4 = 9/12, 2/3 = 8/12, 9/12 > 8/12) and even delve into the concept of the least common multiple (LCM). However, in this lesson, we're aiming to uncover intuitive methods and underlying patterns in fractions. Let's save the discussion on LCM for another time.`,
                                            label: '3/4',
                                        },
                                    ],
                                    correctAnswer: '3/4',
                                },
                            ],
                            5: [
                                {
                                    type: 'subtitle',
                                    highlights: 'underline',
                                    text: 'Fraction Comparison',
                                },
                                {
                                    type: 'text',
                                    text: "Some fractions aren't easily comparable through intuition alone. A conventional approach to address such situations is by placing them on a common denominator. Let's think of the denominator of a fraction as its category. Fractions of different categories can't be directly compared. To make a comparison, we need to ensure both fractions are of the same category, meaning they have the same denominator.",
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'We achieve this by finding a ',
                                        },
                                        {type: 'bold', text: 'common denominator'},
                                        {
                                            type: 'text',
                                            text: '. This involves multiplying both the numerator and denominator of each fraction by the denominator of the other fraction. Once both fractions share the same category, we can then compare them based on their ',
                                        },
                                        {type: 'bold', text: 'numerators'},
                                        {
                                            type: 'text',
                                            text: ', the top figures, which signify the number of equal parts (while denominators indicate how many parts constitute the whole).',
                                        },
                                    ],
                                },
                            ],
                            6: [
                                {
                                    type: 'text',
                                    text: 'To solve the problem with ⅔ and ¾, we multiply each fraction by the denominator of the other:',
                                },
                                {
                                    type: 'text',
                                    text: '2/3 * 4/4=8/12',
                                },
                                {
                                    type: 'text',
                                    text: '3/4 * 3/3=9/12',
                                },
                                {
                                    type: 'text',
                                    text: '8/12 < 9/12, so ⅔ < ¾',
                                },
                            ],
                            7: [
                                {
                                    type: 'text',
                                    text: "We don't usually share burgers, but we often divide up pizzas. Let's delve into fractions and their reasoning using pepperoni slices.",
                                },
                                {
                                    type: 'text',
                                    text: 'Can you spot the larger portions without doing any math?',
                                },
                                {
                                    type: 'imagesTap',
                                    images: [
                                        {
                                            height: 154,
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/fractions/pizza1%20at%20Apr%2008%2015-58-35.png',
                                        },
                                        {
                                            height: 154,
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/fractions/pizza2%20at%20Apr%2008%2015-58-52.png',
                                        },
                                        {
                                            height: 154,
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/fractions/pizza3%20Apr%2008%2015-59-10.png',
                                        },
                                        {
                                            height: 430,
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/fractions/pizza%20finally%20at%20Apr%2008%2016-02-01.png',
                                        },
                                    ],
                                    textButton: 'Continue',
                                },
                            ],
                            8: [
                                {
                                    type: 'text',
                                    text: 'The larger the numbers in fractions, the closer we are to having a whole unit — like a full pizza in this scenario.',
                                },
                                {
                                    type: 'text',
                                    text: 'Based on what we figured out earlier, can we solve the following comparison without needing to find a common denominator?',
                                },
                                {
                                    type: 'question',
                                    text: 'Which one is larger?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'fractions_question_3',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: '997/998',
                                        },
                                        {
                                            answerDescription:
                                                'If we split two units into 998 and 999 parts respectively, one portion of the second unit (1/999) will be smaller than one portion of the first unit (1/998).\n' +
                                                'The fraction 997/998 is missing one part out of 998, whereas 998/999 is missing one part out of 999.\n' +
                                                'Hence, 997/998 is farther away from being a whole unit compared to 998/999, making the latter greater.',
                                            label: '998/999',
                                        },
                                    ],
                                    correctAnswer: '998/999',
                                },
                            ],
                            9: [
                                {
                                    type: 'subtitle',
                                    highlights: 'underline',
                                    text: 'Key Point',
                                },
                                {
                                    type: 'text',
                                    text: "In this lesson, we discovered that fractions extend beyond mere mathematical ideas—they're integral to our daily experiences. Furthermore, grasping their logic empowers us to make informed decisions, even without resorting to complex computations.",
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.MATH_ABOUT_PRE_ALGEBRA_2,
                title: 'Favorite formulas: illustrated visually',
                theme: 'math',
                subTheme: 'Pre-Algebra',
                bgPosition: 50,
                imageUrl: 'https://d33llhlxn8rt1z.cloudfront.net/math/pre-algebra/Math_PA_L2_1.png',
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            "In this lesson, we'll simplify some well-known but often misunderstood formulas by connecting algebra and geometry and visualizing the processes.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'text',
                                    text: 'One of the oldest math shortcuts you might recall is called the difference of squares:',
                                },
                                {
                                    type: 'text',
                                    text: '(a-b)(a+b) = a² - b²',
                                },
                                {
                                    type: 'text',
                                    text: 'However, many people struggle to grasp the concept behind it.',
                                },
                                {
                                    type: 'text',
                                    text: "Let's start by examining it using the algebraic brute force method.",
                                },
                            ],
                            2: [
                                {
                                    type: 'text',
                                    text: '(a-b)(a+b) = a² - b²',
                                },
                                {
                                    type: 'text',
                                    text: 'To solve it correctly, we first need to remember the rules for expanding parentheses.',
                                },
                                {
                                    type: 'text',
                                    text: 'This means multiplying each term by every other term individually.',
                                },
                                {
                                    type: 'text',
                                    text: 'The steps are:',
                                },
                                {
                                    type: 'text',
                                    text: '(a-b)(a+b) = aa + ab - ba - bb = a² + ab - ab - b²',
                                },
                                {
                                    type: 'text',
                                    text: 'The core of the formula involves self-canceling elements:',
                                },
                                {
                                    type: 'text',
                                    text: '+ ab - ab',
                                },
                                {
                                    type: 'text',
                                    text: 'What remains is exactly what we were looking for:',
                                },
                                {
                                    type: 'text',
                                    text: '(a-b)(a+b) = a² - b²',
                                },
                            ],
                            3: [
                                {
                                    type: 'text',
                                    text: 'a² - b²',
                                },
                                {
                                    type: 'text',
                                    text: 'What’s more intriguing is that this formula has a clear geometrical interpretation.',
                                },
                                {
                                    type: 'text',
                                    text: 'So, what is the difference of squares?',
                                },
                                {
                                    type: 'text',
                                    text: "It's the difference between the areas of two shapes—in this case, squares. We can easily visualize it as one square being cut out from another square.",
                                },
                                {
                                    type: 'carousel',
                                    resizeMode: 'contain',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/pre-algebra/Math_PA_L2_2.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/pre-algebra/Math_PA_L2_3.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/pre-algebra/Math_PA_L2_4.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/pre-algebra/Math_PA_L2_5.png',
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'By remembering the meaning of the squares, we can transform abstract concepts into real and familiar shapes.',
                                },
                            ],
                            4: [
                                {
                                    type: 'text',
                                    text: 'a² - b² vs (a+b)²',
                                },
                                {
                                    type: 'text',
                                    text: 'The "difference of squares" formula is frequently confused with another classic school formula: "square of the sum."',
                                },
                                {
                                    type: 'text',
                                    text: 'Difference of squares:',
                                },
                                {
                                    type: 'text',
                                    text: '(a-b)(a+b) = a² - b²',
                                },
                                {
                                    type: 'text',
                                    text: 'Square of the sum:',
                                },
                                {
                                    type: 'text',
                                    text: '(a+b)² = a² + 2ab + b²',
                                },
                            ],
                            5: [
                                {
                                    type: 'text',
                                    text: 'Once more, to comprehend the meaning behind (a+b)², we can approach it algebraically through brute force.',
                                },
                                {
                                    type: 'text',
                                    text: 'The rules for expanding the parentheses remain unchanged:',
                                },
                                {
                                    type: 'text',
                                    text: '(a+b)² = (a+b)(a+b) =\na² + ab + ba + b² = a² + 2ab + b²',
                                },
                            ],
                            6: [
                                {
                                    type: 'text',
                                    text: 'Once more, (a+b)² also possesses a beautiful geometric interpretation.',
                                },
                                {
                                    type: 'text',
                                    text: 'So, what does the square of the sum represent?',
                                },
                                {
                                    type: 'text',
                                    text: 'a² + 2ab + b²',
                                },
                                {
                                    type: 'carousel',
                                    resizeMode: 'contain',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/pre-algebra/Math_PA_L2_6.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/pre-algebra/Math_PA_L2_7.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/pre-algebra/Math_PA_L2_8.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/pre-algebra/Math_PA_L2_9.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/pre-algebra/Math_PA_L2_10.png',
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Fortunately, squares are shapes we can easily and swiftly sketch ourselves for quick and rough visualization.',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Multiplying two numbers is essentially constructing a rectangle with sides equal to our numbers.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "Raising a number to the power of two isn’t more mysterious; it's just a particular instance of the same principle: we're constructing a square, which is itself a special case of a rectangle.",
                                },
                            ],
                            7: [
                                {
                                    type: 'text',
                                    text: "The technique of representing the product of multiplying two numbers as a rectangle forms the foundation for numerous mathematical shortcuts and even more potent life hacks. These methods enable us to mentally calculate things like 97*98 or 65² within seconds. We'll delve into these hacks in the upcoming lessons.",
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.MATH_ABOUT_BASIC_MATH_OPERATIONS_1,
                title: 'The equals sign',
                theme: 'math',
                subTheme: 'Basic Math Operations',
                bgPosition: 50,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_1.png',
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            "The equals sign is the most frequently used symbol in mathematics. We include it in nearly every expression, yet we often overlook its importance. However, we can't function without it!\nIn this lesson, we will uncover the mysteries of the equals sign.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'A step into history',
                                },
                                {
                                    type: 'text',
                                    text: 'In the 16th century, a Welsh mathematician named Robert Recorde grew weary of writing "is equal to" repeatedly in his work. To simplify, he introduced a single symbol: “=” — the equals sign we use today.',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'The equals sign (=)',
                                        },
                                        {
                                            type: 'text',
                                            text: ' is a mathematical symbol representing equality. It is placed between two equal expressions, equations, or numbers.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_2.png',
                                },
                                {
                                    type: 'text',
                                    text: "However, the equals sign didn't always look like it does now.",
                                },
                            ],
                            2: [
                                {
                                    type: 'question',
                                    text: 'What did mathematicians use before two horizontal lines?',
                                },
                                {
                                    type: 'answersButton',
                                    questionId: 'math_basics_math_question_0',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: 'star',
                                            svgLabel: `<svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='23'
                          viewBox='0 0 24 23'
                          fill='none'>
                          <path
                            d='M12 4L14.0206 10.2188H20.5595L15.2694 14.0623L17.2901 20.2812L12 16.4377L6.70993 20.2812L8.73056 14.0623L3.44049 10.2188H9.97937L12 4Z'
                            stroke='{strokeColor}'
                            stroke-width='2'
                          />
                        </svg>`,
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'vertical equals',
                                            svgLabel: `<svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='9'
                          height='18'
                          viewBox='0 0 9 18'
                          fill='none'>
                          <path d='M1 0V17.5' stroke='{strokeColor}' stroke-width='2' />
                          <path d='M8 0V17.5' stroke='{strokeColor}' stroke-width='2' />
                        </svg>`,
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Q',
                                            svgLabel: `<svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='15'
                          height='16'
                          viewBox='0 0 15 16'
                          fill='none'>
                          <path
                            d='M7.174 13.17C6.24467 13.17 5.389 13.017 4.607 12.711C3.825 12.405 3.145 11.98 2.567 11.436C1.989 10.8807 1.54133 10.2347 1.224 9.498C0.906667 8.75 0.748 7.934 0.748 7.05C0.748 6.166 0.906667 5.35567 1.224 4.619C1.54133 3.871 1.989 3.225 2.567 2.681C3.145 2.12567 3.825 1.695 4.607 1.389C5.389 1.083 6.239 0.929999 7.157 0.929999C8.08633 0.929999 8.93633 1.083 9.707 1.389C10.489 1.695 11.169 2.12 11.747 2.664C12.325 3.208 12.7727 3.854 13.09 4.602C13.4073 5.35 13.566 6.166 13.566 7.05C13.566 7.934 13.4073 8.75 13.09 9.498C12.7727 10.246 12.325 10.892 11.747 11.436C11.169 11.98 10.489 12.405 9.707 12.711C8.93633 13.017 8.092 13.17 7.174 13.17ZM11.05 15.601C10.6307 15.601 10.2227 15.55 9.826 15.448C9.44067 15.3573 9.05533 15.1987 8.67 14.972C8.296 14.7567 7.905 14.4677 7.497 14.105C7.089 13.7537 6.64133 13.3173 6.154 12.796L8.5 12.184C8.81733 12.6033 9.11767 12.9377 9.401 13.187C9.69567 13.4477 9.979 13.6347 10.251 13.748C10.523 13.8613 10.8063 13.918 11.101 13.918C11.883 13.918 12.563 13.6007 13.141 12.966L14.161 14.19C13.3677 15.1307 12.3307 15.601 11.05 15.601ZM7.157 11.232C7.75767 11.232 8.313 11.13 8.823 10.926C9.333 10.722 9.775 10.433 10.149 10.059C10.523 9.67367 10.812 9.226 11.016 8.716C11.2313 8.206 11.339 7.65067 11.339 7.05C11.339 6.438 11.2313 5.88267 11.016 5.384C10.812 4.874 10.523 4.432 10.149 4.058C9.775 3.67267 9.333 3.378 8.823 3.174C8.313 2.97 7.75767 2.868 7.157 2.868C6.55633 2.868 6.001 2.97 5.491 3.174C4.981 3.378 4.539 3.67267 4.165 4.058C3.791 4.432 3.49633 4.874 3.281 5.384C3.077 5.88267 2.975 6.438 2.975 7.05C2.975 7.65067 3.077 8.206 3.281 8.716C3.49633 9.226 3.791 9.67367 4.165 10.059C4.539 10.433 4.981 10.722 5.491 10.926C6.001 11.13 6.55633 11.232 7.157 11.232Z'
                            fill='{fillColor}'
                          />
                        </svg>`,
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'not equals',
                                            svgLabel: ` <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='21'
                          height='21'
                          viewBox='0 0 21 21'
                          fill='none'>
                          <path d='M19.25 7.25L1.75 7.25' stroke='{strokeColor}' stroke-width='2' />
                          <path
                            d='M19.25 14.25L1.75 14.25'
                            stroke='{strokeColor}'
                            stroke-width='2'
                          />
                          <path
                            d='M19.4373 1L1.00014 19.4372'
                            stroke='{strokeColor}'
                            stroke-width='2'
                          />
                        </svg>`,
                                        },
                                    ],
                                    correctAnswer: 'vertical equals',
                                },
                                {
                                    type: 'text',
                                    text: 'Originally, vertical lines were more commonly used than horizontal ones. Mathematicians also utilized æ (or œ) from the Latin word aequalis.',
                                },
                                {
                                    type: 'text',
                                    text: 'Imagine if we used stars instead of equal signs in equations! Math would be a cosmic performance.',
                                },
                            ],
                            3: [
                                {
                                    type: 'subtitle',
                                    text: 'Guidelines for using the equals sign',
                                },
                                {
                                    type: 'text',
                                    text: 'The equals sign is used to show equality between two entities. Though it seems straightforward, there are three important steps to keep in mind:',
                                },
                                {
                                    type: 'text',
                                    text: '1. Ensure that the items being compared are in the same category. Comparing ice creams to rulers, for instance, would be quite difficult.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_3.png',
                                },
                                {
                                    type: 'text',
                                    text: '2. The order of the parts around the equals sign can be reversed, and the expression will still be correct.',
                                },
                                {
                                    type: 'carousel',
                                    resizeMode: 'contain',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_4.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_5.png',
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'When you know that two expressions, numbers, or variables are not equal, you should use the "not equal" sign, written as ≠, between them.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_6.png',
                                },
                            ],
                            4: [
                                {
                                    type: 'subtitle',
                                    text: "Applying what we've learned",
                                },
                                {
                                    type: 'text',
                                    text: "Now, let's determine where it's suitable to use the \"=\" sign and where it isn't.",
                                },
                                {
                                    type: 'carouselWithAnswer',
                                    questionId: 'math_basics_math_slider_0',
                                    resizeMode: 'contain',
                                    slides: [
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_7.png',
                                            answers: [
                                                {text: '=', isCorrect: true},
                                                {text: '≠', isCorrect: false},
                                            ],
                                            questionId: 'slider_1',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_8.png',
                                            answers: [
                                                {text: '=', isCorrect: false},
                                                {text: '≠', isCorrect: true},
                                            ],
                                            questionId: 'slider_2',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_9.png',
                                            answers: [
                                                {text: '=', isCorrect: false},
                                                {text: '≠', isCorrect: true},
                                            ],
                                            questionId: 'slider_3',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_10.png',
                                        },
                                    ],
                                },
                            ],
                            5: [
                                {
                                    type: 'text',
                                    text: 'We can compare not only numbers and variables (x) but also other countable things.',
                                },
                                {
                                    type: 'text',
                                    text: 'Sound simple? Then check out the following task with these figures.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_11.png',
                                },
                                {
                                    type: 'question',
                                    text: 'Can we replace the question mark with the equals sign in this situation?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_1',
                                    answers: [
                                        {
                                            label: 'Yes, but we need to specify',
                                            answerDescription:
                                                'First, we need to identify what aspect of these figures we are comparing.',
                                        },
                                        {
                                            label: 'I’m uncertain',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'The figures are not the same!',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'Yes, but we need to specify',
                                },
                                {
                                    type: 'text',
                                    text: "Keep in mind that we can’t compare elements from different categories. So, let's identify any characteristics of our figures that are comparable.",
                                },
                            ],
                            6: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_12.png',
                                },
                                {
                                    type: 'text',
                                    text: "Comparing their shapes or colors wouldn't warrant an equals sign. However, we can compare the number of objects on each side. In this case, we can use an equals sign.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_13.png',
                                },
                            ],
                            7: [
                                {
                                    type: 'text',
                                    text: 'In math, it’s not always easy to tell if elements are the same. Look at these fractions:',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_14.png',
                                },
                                {
                                    type: 'question',
                                    text: 'Are they equal?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_2',
                                    answers: [
                                        {
                                            label: 'No! They’re different',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'I’m not sure',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Yes, they are',
                                            answerDescription:
                                                'At first glance, these fractions seem different, but they are actually equal. Here’s the reason.',
                                        },
                                    ],
                                    correctAnswer: 'Yes, they are',
                                },
                                {
                                    type: 'text',
                                    text: "We have two odd numbers on the left and two even numbers on the right, so it seems unlikely these fractions are equal. However, 91/13 = 7 and 14/2 = 7. That's why you must first simplify the fractions before making a decision. But that's a topic for another lesson…",
                                },
                            ],
                            8: [
                                {
                                    type: 'text',
                                    text: "It's crucial to be careful when using the equals sign. The expressions might appear the same initially, but once you start rephrasing one of them, they can turn out to be different.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_15.png',
                                },
                                {
                                    type: 'question',
                                    text: 'Are these expressions the same?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_3',
                                    answers: [
                                        {
                                            label: 'Different',
                                            answerDescription:
                                                'Even though these two expressions might seem similar at first glance, they are different: 1/(2+2) = 1/4, whereas 1/2 + 1/2 = 1.',
                                        },
                                        {
                                            label: 'Equal',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'Different',
                                },
                                {
                                    type: 'text',
                                    text: 'Well done on mastering the equals sign, just like Robert Recorde! High-five!',
                                },
                            ],
                            9: [
                                {
                                    type: 'subtitle',
                                    text: 'Key Things:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: "The equals sign wasn't always around; it was introduced by Welsh mathematician Robert Recorde.",
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Represented by two identical horizontal lines, the equals sign signifies equality between two expressions.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The "equals" sign should only connect two identical entities.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The order of the elements around the equals sign can be interchanged without changing the validity of the equation.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Before using the equals sign, ensure that the entities being compared belong to the same category.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L1_17.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.MATH_ABOUT_BASIC_MATH_OPERATIONS_2,
                title: 'Addition',
                theme: 'math',
                subTheme: 'Basic Math Operations',
                bgPosition: 50,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L2_1.png',

                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            "Let's explore the familiar process of addition and uncover some new techniques in this lesson.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'A step into history',
                                },
                                {
                                    type: 'text',
                                    text: 'The plus sign has undergone some interesting changes over time.',
                                },
                                {
                                    type: 'text',
                                    text: 'For example, in ancient Egypt, it was represented by a hieroglyph of a pair of legs walking to the right.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'In the early 15th century, Europeans employed the letter "P" with an overline, ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'p̄',
                                        },
                                        {
                                            type: 'text',
                                            text: ', to signify addition. They also utilized ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'et',
                                        },
                                        {
                                            type: 'text',
                                            text: ', the Latin word for "and," as well as & as a symbol for et. Eventually, the simplified form, ',
                                        },
                                        {
                                            type: 'bold',
                                            text: '+',
                                        },
                                        {
                                            type: 'text',
                                            text: ', emerged.',
                                        },
                                    ],
                                },
                                {
                                    type: 'carousel',
                                    resizeMode: 'contain',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L2_2.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L2_3.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L2_4.png',
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'The plus sign "+"',
                                        },
                                        {
                                            type: 'text',
                                            text: ' symbolizes positivity and the operation of addition in mathematics.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'The values being added are referred to as ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'summands ',
                                        },
                                        {
                                            type: 'text',
                                            text: 'or ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'addends',
                                        },
                                        {
                                            type: 'text',
                                            text: ', and the outcome of addition is termed the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'sum.',
                                        },
                                    ],
                                },
                            ],
                            2: [
                                {
                                    type: 'subtitle',
                                    text: "Let's review the guidelines for addition:",
                                },
                                {
                                    type: 'text',
                                    text: "How do we deal with addition? It's pretty straightforward because the plus sign is a friendly operator. But before we dive in, let's go over some guidelines.",
                                },
                                {
                                    type: 'question',
                                    text: 'Where is the appropriate place to position a plus sign?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_21',
                                    answers: [
                                        {
                                            label: 'Preceding numbers',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Following numbers',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Between numbers',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'All of the above',
                                            answerDescription: "Let's explore the flexibility of the plus sign further.",
                                        },
                                    ],
                                    correctAnswer: 'All of the above',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: '1. Utilize it for its primary purpose – in addition, position it ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'between the numbers',
                                        },
                                        {
                                            type: 'text',
                                            text: ' you wish to sum:',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: '73 + 24 = 97',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: '2. Employ a plus sign ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'preceding a number',
                                        },
                                        {
                                            type: 'text',
                                            text: ' to highlight its ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'positivity ',
                                        },
                                        {
                                            type: 'text',
                                            text: ' – as seen in forecasts:',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "Today's temperature in New York is +9 degrees.",
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: '3. Employ a plus sign ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'following a number',
                                        },
                                        {
                                            type: 'text',
                                            text: ' to indicate that variables can be from that value onwards:',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Expected attendance at my conference today: 30+.',
                                },
                            ],
                            3: [
                                {
                                    type: 'subtitle',
                                    text: 'Practice',
                                },
                                {
                                    type: 'text',
                                    text: 'Column addition method',
                                },
                                {
                                    type: 'text',
                                    text: "Column addition, a widely-used method, involves aligning numbers vertically and adding them digit by digit. Let's refresh our memory on how to perform this method.",
                                },
                                {
                                    type: 'question',
                                    text: 'What’s the sum for 456 + 987?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_22',
                                    answers: [
                                        {
                                            label: '1134',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '1345',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '1443',
                                            answerDescription: 'It’s the correct answer!',
                                        },
                                        {
                                            label: 'I don’t like column addition!',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '1443',
                                },
                            ],
                            4: [
                                {
                                    type: 'subtitle',
                                    text: 'Breaking numbers into units method',
                                },
                                {
                                    type: 'text',
                                    text: "This approach to rapid addition comes in handy when you lack paper. Let's apply it to summing up 456 and 987:",
                                },
                                {
                                    type: 'text',
                                    text: '1. Divide the numbers into individual digits:',
                                },
                                {
                                    type: 'text',
                                    text: '- 456 = 400 + 50 + 6\n- 987 = 900 + 80 + 7',
                                },
                                {
                                    type: 'text',
                                    text: '2. Combine ones with ones, tens with tens, and hundreds with hundreds:',
                                },
                                {
                                    type: 'text',
                                    text: '- 400 + 900 = 1300\n- 50 + 80 = 130\n- 6 + 7 = 13',
                                },
                                {
                                    type: 'text',
                                    text: '3. Finally, add all the results together:',
                                },
                                {
                                    type: 'text',
                                    text: '- 1300 + 130 + 13 = 1443',
                                },
                                {
                                    type: 'question',
                                    text: 'Now attempt to add 876 and 149 utilizing the same technique:',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_23',
                                    answers: [
                                        {
                                            label: '1325',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '935',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '1125',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '1025',
                                            answerDescription: 'It’s the correct answer',
                                        },
                                    ],
                                    correctAnswer: '1025',
                                },
                            ],
                            5: [
                                {
                                    type: 'subtitle',
                                    text: 'Rounding numbers up addition technique',
                                },
                                {
                                    type: 'text',
                                    text: "Here's another handy trick for adding numbers that are close to 10, 100, 1000, and so on.",
                                },
                                {
                                    type: 'text',
                                    text: "Let's say you're calculating the total cost of items you plan to buy at the supermarket:",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L2_5.png',
                                },
                                {
                                    type: 'text',
                                    text: 'The column addition and breaking numbers into tens methods might not give you a quick solution.',
                                },
                                {
                                    type: 'text',
                                    text: "Round each number to the nearest larger one and keep track of how many you've added:",
                                },
                                {
                                    type: 'text',
                                    text: '8 → 10\n19 → 20\n89 → 90',
                                },
                                {
                                    type: 'text',
                                    text: 'Add up the rounded numbers:',
                                },
                                {
                                    type: 'text',
                                    text: '10 + 20 + 90  = 120',
                                },
                                {
                                    type: 'text',
                                    text: 'Subtract the extras you added:',
                                },
                                {
                                    type: 'text',
                                    text: '120 - 2 - 1 - 1 = 116',
                                },
                                {
                                    type: 'question',
                                    text: 'Now, attempt to add 119, 9, and 39 together using the same method:',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_24',
                                    answers: [
                                        {
                                            label: '153',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '137',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '167',
                                            answerDescription: 'It’s the correct answer',
                                        },
                                        {
                                            label: '147',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '167',
                                },
                            ],
                            6: [
                                {
                                    type: 'subtitle',
                                    text: 'Key Things:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The plus sign can be used before, between, and after numbers.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The numbers being added are called summands or addends, and their result is called a sum.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'When performing addition without paper, breaking numbers into hundreds, tens, and ones can simplify the process.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'For numbers close to powers of ten, like 10, 100, 1000, etc., rounding the numbers first, then adding them and subtracting what was rounded, can be a quicker method.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L2_6.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.MATH_ABOUT_BASIC_MATH_OPERATIONS_3,
                title: 'Subtraction',
                theme: 'math',
                subTheme: 'Basic Math Operations',
                bgPosition: 50,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L3_1.png',
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            "Even though the minus sign often represents negative ideas, it definitely plays a crucial role. Let's dive into the world of subtraction and learn some handy tricks.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'A step into history',
                                },
                                {
                                    type: 'text',
                                    text: 'The Egyptians used a hieroglyphic sign for subtraction that looked like a pair of legs walking to the left.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Europeans adopted the letter M with an overline, ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'm̄',
                                        },
                                        {
                                            type: 'text',
                                            text: ', to represent meno (less) in Latin, meaning minus.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Throughout history, various symbols like "÷", two ".." dots, and three "..." dots were also used for subtraction.',
                                },
                                {
                                    type: 'text',
                                    text: 'Eventually, the minus sign evolved into its current simple form, a short horizontal line segment.',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'The minus sign “-”',
                                        },
                                        {
                                            type: 'text',
                                            text: ' is a mathematical symbol that denotes a ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'negative',
                                        },
                                        {
                                            type: 'text',
                                            text: ' value or subtraction. The result of subtraction is called the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'difference.',
                                        },
                                    ],
                                },
                            ],
                            2: [
                                {
                                    type: 'subtitle',
                                    text: 'Rules for working with subtraction',
                                },
                                {
                                    type: 'text',
                                    text: 'Unlike addition, where the sum remains the same if you switch the numbers, subtraction has strict rules, and each number has a specific role:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Minuend',
                                        },
                                        {
                                            type: 'text',
                                            text: ' — the first number from which you subtract.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Subtrahend',
                                        },
                                        {
                                            type: 'text',
                                            text: ' — the number that is subtracted from the minuend. There can be multiple subtrahends in the subtraction process.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Difference',
                                        },
                                        {
                                            type: 'text',
                                            text: ' — the result of the subtraction.',
                                        },
                                    ],
                                },
                                {
                                    type: 'question',
                                    text: 'So, where can we appropriately place a minus sign?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_31',
                                    answers: [
                                        {
                                            label: 'In front of the number',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'After numbers',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Between numbers',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Both in front of and between numbers',
                                            answerDescription:
                                                'We can place a minus sign both in front of numbers and between them.',
                                        },
                                    ],
                                    correctAnswer: 'Both in front of and between numbers',
                                },
                            ],
                            3: [
                                {
                                    type: 'text',
                                    text: 'How to work with a minus sign? Here are some tips to keep in mind.',
                                },
                                {
                                    type: 'text',
                                    text: '1. Use it as intended — for subtraction, place it between the numbers you want to subtract:',
                                },
                                {
                                    type: 'text',
                                    text: '789 - 345 = 444',
                                },
                                {
                                    type: 'text',
                                    text: '2. You can put a minus sign before a number to indicate it’s negative — for example, in a weather report:',
                                },
                                {
                                    type: 'text',
                                    text: 'It is -10 degrees in Madrid today.',
                                },
                                {
                                    type: 'text',
                                    text: '3. Subtracting a negative number is the same as adding the corresponding positive number:',
                                },
                                {
                                    type: 'text',
                                    text: '600 - (-200) = 600 + 200 = 800',
                                },
                                {
                                    type: 'text',
                                    text: '4. Adding a negative number is the same as subtracting the corresponding positive number:',
                                },
                                {
                                    type: 'text',
                                    text: '900 + (-150) = 900 - 150 = 750',
                                },
                                {
                                    type: 'text',
                                    text: '5. If the subtrahend is larger than the minuend, you can switch them and then add a minus before the result:',
                                },
                                {
                                    type: 'text',
                                    text: '300 - 750 = -450, which is the same as - (750 - 300) = -450',
                                },
                            ],
                            4: [
                                {
                                    type: 'subtitle',
                                    text: 'Practice',
                                },
                                {
                                    type: 'text',
                                    text: 'Right to Left Column Method',
                                },
                                {
                                    type: 'text',
                                    text: 'We all learned the column subtraction method in school. This involves writing numbers one above the other and subtracting from right to left: first, we subtract units, then tens, then hundreds, and so on.',
                                },
                                {
                                    type: 'text',
                                    text: 'Let’s review how to do this.',
                                },
                                {
                                    type: 'question',
                                    text: 'What is the result of 936 - 284?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_32',
                                    answers: [
                                        {
                                            label: '652',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '722',
                                            answerDescription:
                                                "722 is correct! But column subtraction isn't the only method. Let’s explore more.",
                                        },
                                        {
                                            label: '815',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '192',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '722',
                                },
                            ],
                            5: [
                                {
                                    type: 'subtitle',
                                    text: 'Left to right subtraction method',
                                },
                                {
                                    type: 'text',
                                    text: "This subtraction technique is useful when you don't have paper handy.",
                                },
                                {
                                    type: 'text',
                                    text: 'Here’s a quicker way to subtract 284 from 939:',
                                },
                                {
                                    type: 'text',
                                    text: '1. Subtract the hundreds from the minuend first:',
                                },
                                {
                                    type: 'text',
                                    text: '939 - 200 = 739',
                                },
                                {
                                    type: 'text',
                                    text: '2. Next, subtract the tens:',
                                },
                                {
                                    type: 'text',
                                    text: '739 - 80 = 659',
                                },
                                {
                                    type: 'text',
                                    text: '3. Finally, subtract the units:',
                                },
                                {
                                    type: 'text',
                                    text: '659 - 4 = 655',
                                },
                                {
                                    type: 'question',
                                    text: 'Now try to subtract 684 from 321 using the same method:',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_33',
                                    answers: [
                                        {
                                            label: '363',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '-363',
                                            answerDescription: '-363 is the correct answer.',
                                        },
                                        {
                                            label: '357',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '-357',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '-363',
                                },
                            ],
                            6: [
                                {
                                    type: 'subtitle',
                                    text: 'Rounding Numbers Up Method',
                                },
                                {
                                    type: 'text',
                                    text: 'Another neat trick for subtraction is useful when your subtrahends are close to 10, 100, 1000, and so on.',
                                },
                                {
                                    type: 'text',
                                    text: 'Imagine you need to find the cost of a phone charger you bought today: you know the total and remember the prices of all the other items except this one.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L3_2.png',
                                },
                                {
                                    type: 'question',
                                    text: 'How much does the charger cost?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_34',
                                    answers: [
                                        {
                                            label: '$47',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '$63',
                                            answerDescription: 'It’s the correct answer',
                                        },
                                        {
                                            label: '$73',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '$53',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '$63',
                                },
                            ],
                            7: [
                                {
                                    type: 'text',
                                    text: 'In this case, the column subtraction method won’t give you a quick answer. But here’s what will:',
                                },
                                {
                                    type: 'text',
                                    text: '1. Round each number up and note how much you added:',
                                },
                                {
                                    type: 'text',
                                    text: '- 9 becomes 10, add 1\n- 19 becomes 20, add 1\n- 39 becomes 40, add 1',
                                },
                                {
                                    type: 'text',
                                    text: '2. Subtract the rounded numbers from the total:',
                                },
                                {
                                    type: 'text',
                                    text: '- 130 - 10 - 20 - 40 = 60',
                                },
                                {
                                    type: 'text',
                                    text: '3. Add back the amounts you added when rounding:',
                                },
                                {
                                    type: 'text',
                                    text: '- 60 + 1 + 1 + 1 = 63',
                                },
                                {
                                    type: 'question',
                                    text: 'Now you try to subtract 23 and 7 from 60:',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_35',
                                    answers: [
                                        {
                                            label: '30',
                                            answerDescription: '30 is the correct answer.',
                                        },
                                        {
                                            label: '40',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '50',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '70',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '30',
                                },
                            ],
                            8: [
                                {
                                    type: 'subtitle',
                                    text: 'Key points:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'We can use the minus sign before and between numbers.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The parts of subtraction are called minuend, subtrahend, and difference.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Subtracting a negative number is the same as adding the positive version of that number.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: "For subtracting numbers near powers of ten (10, 100, 1000, etc.), it's quickest to subtract the rounded numbers and then add back what was added during rounding.",
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L3_3.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.MATH_ABOUT_BASIC_MATH_OPERATIONS_4,
                title: 'Multiplication',
                theme: 'math',
                subTheme: 'Basic Math Operations',
                bgPosition: 50,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L4_1.png',
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            "Good old multiplication. In this lesson, we'll revisit the history of this well-known math symbol and discover tricks and tips to calculate quickly and efficiently.\n\nLet's get started!",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'A step into history',
                                },
                                {
                                    type: 'text',
                                    text: 'The history of the multiplication sign has seen various iterations over time.',
                                },
                                {
                                    type: 'text',
                                    text: 'In an Indian manuscript from the 8th-10th century, multiplication was denoted by placing numbers next to each other.',
                                },
                                {
                                    type: 'text',
                                    text: 'In 1618, an anonymous work introduced the symbol "×" for multiplication.',
                                },
                                {
                                    type: 'text',
                                    text: 'In 1698, German mathematician Gottfried Leibniz suggested using a dot (•) as a multiplication sign, considering the × sign too similar to the letter X.',
                                },
                                {
                                    type: 'text',
                                    text: 'Today, we have the freedom to use one of three common symbols for multiplication: ×, •, or *.',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'The cross symbol "×" or midline dot "•"',
                                        },
                                        {
                                            type: 'text',
                                            text: ' represents multiplication in mathematics. The result of multiplication is known as the product, with the elements referred to as ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'multipliers, multiplicands,',
                                        },
                                        {
                                            type: 'text',
                                            text: ' or ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'factors.',
                                        },
                                    ],
                                },
                            ],
                            2: [
                                {
                                    type: 'subtitle',
                                    text: 'Rules for multiplication:',
                                },
                                {
                                    type: 'text',
                                    text: '1. Similar to addition, multiplication is commutative, allowing you to interchange the places of the factors without altering the result:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L4_2.png',
                                        },

                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L4_2-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: '2. Multiplying two whole numbers can be seen as repeated addition.',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L4_3.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L4_3-1.png',
                                        },
                                    },
                                },
                            ],
                            3: [
                                {
                                    type: 'text',
                                    text: '3. When dealing with the multiplication of positive and negative numbers, remember these rules:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: '- When multiplying two numbers of the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'same',
                                        },
                                        {
                                            type: 'text',
                                            text: ' sign (both positive or both negative), the product is ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'positive.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: '- When multiplying two numbers of ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'different',
                                        },
                                        {
                                            type: 'text',
                                            text: ' signs (one positive and one negative), the product is ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'negative.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "Here's a visual representation to help understand these rules:",
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L4_4.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L4_4-1.png',
                                        },
                                    },
                                },
                            ],
                            4: [
                                {
                                    type: 'subtitle',
                                    text: 'Practice',
                                },
                                {
                                    type: 'text',
                                    text: "Let's examine a multiplication procedure and four strategies to enhance its efficiency.",
                                },
                                {
                                    type: 'text',
                                    text: 'Long multiplication technique',
                                },
                                {
                                    type: 'text',
                                    text: 'The prevalent long multiplication technique, familiar to most from school, is applicable across various fundamental mathematical operations.',
                                },
                                {
                                    type: 'text',
                                    text: 'Attempt to employ the long method to solve the upcoming task.',
                                },
                                {
                                    type: 'question',
                                    text: 'What is the result of multiplying 15 and 18?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_41',
                                    answers: [
                                        {
                                            label: '132',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '176',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '180',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '192',
                                            answerDescription: "It's the correct answer.",
                                        },
                                    ],
                                    correctAnswer: '192',
                                },
                            ],
                            5: [
                                {
                                    type: 'subtitle',
                                    text: 'Breaking numbers into units method',
                                },
                                {
                                    type: 'text',
                                    text: "This technique offers a speedy way to calculate. Let's demonstrate by multiplying 15 by 18.",
                                },
                                {
                                    type: 'text',
                                    text: '1. Break down the multiplicand into its digits:',
                                },
                                {
                                    type: 'text',
                                    text: '15 = 10 + 5',
                                },
                                {
                                    type: 'text',
                                    text: "2. Multiply the multiplier by the multiplicand's tens:",
                                },
                                {
                                    type: 'text',
                                    text: '18 × 10 = 180',
                                },
                                {
                                    type: 'text',
                                    text: "3. Next, multiply the multiplier by the multiplicand's units:",
                                },
                                {
                                    type: 'text',
                                    text: '18 × 5 = 90',
                                },
                                {
                                    type: 'text',
                                    text: '4. Finally, sum the two products:',
                                },
                                {
                                    type: 'text',
                                    text: '180 + 90 = 270',
                                },
                                {
                                    type: 'text',
                                    text: 'Now, give it a shot with the next question using the same method.',
                                },
                                {
                                    type: 'question',
                                    text: 'What’s the result of multiplying 95 by 5?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_42',
                                    answers: [
                                        {
                                            label: '455',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '475',
                                            answerDescription: 'It is the correct response.',
                                        },
                                        {
                                            label: '485',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '263',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '475',
                                },
                            ],
                            6: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "Here's a ",
                                        },
                                        {
                                            type: 'bold',
                                            text: 'trick to multiply a number by 5',
                                        },
                                        {
                                            type: 'text',
                                            text: ' more efficiently:',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: '1. Multiply the number by 10, or add a 0 at the end:',
                                },
                                {
                                    type: 'text',
                                    text: '95 × 10 = 950',
                                },
                                {
                                    type: 'text',
                                    text: '2. Then, divide the result by 2:',
                                },
                                {
                                    type: 'text',
                                    text: '950 / 2 = 475',
                                },
                                {
                                    type: 'text',
                                    text: 'Now, apply this method to find the product of the next question.',
                                },
                                {
                                    type: 'question',
                                    text: 'Now you multiply -64 by -5:',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_43',
                                    answers: [
                                        {
                                            label: '-375',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '-320',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '320',
                                            answerDescription: 'It is the correct response.',
                                        },
                                        {
                                            label: '263',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '320',
                                },
                            ],
                            7: [
                                {
                                    type: 'subtitle',
                                    text: 'Multiplication by 9 trick',
                                },
                                {
                                    type: 'question',
                                    text: "What's the result of multiplying 98 by 9?",
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_44',
                                    answers: [
                                        {
                                            label: '810',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '882',
                                            answerDescription: 'It is the correct answer.',
                                        },
                                        {
                                            label: '900',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '980',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '882',
                                },
                            ],
                            8: [
                                {
                                    type: 'text',
                                    text: 'If you ever need to multiply by 9 instead of the traditional approach, try this handy trick:',
                                },
                                {
                                    type: 'text',
                                    text: '1. Multiply the number by 10:',
                                },
                                {
                                    type: 'text',
                                    text: '98 * 10 = 980',
                                },
                                {
                                    type: 'text',
                                    text: '2. Now subtract the number from the product:',
                                },
                                {
                                    type: 'text',
                                    text: '980 - 98 = 882',
                                },
                                {
                                    type: 'text',
                                    text: 'Find the answer to the next question using the same trick.',
                                },
                                {
                                    type: 'question',
                                    text: "What's the result of multiplying 116 and 9?",
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_45',
                                    answers: [
                                        {
                                            label: '1044',
                                            answerDescription: 'It’s the correct answer.',
                                        },
                                        {
                                            label: '1056',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '1032',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '1040',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '1044',
                                },
                            ],
                            9: [
                                {
                                    type: 'subtitle',
                                    text: 'Key points:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Multiplication can be represented using symbols like ×, •, or *.',
                                        },
                                    ],
                                },
                                {
                                    type: 'markerWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'The outcome of a multiplication operation is termed the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'product',
                                        },
                                        {
                                            type: 'text',
                                            text: ', with the numbers involved being referred to as the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'multipliers',
                                        },
                                        {
                                            type: 'text',
                                            text: ' and ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'multiplicands',
                                        },
                                        {
                                            type: 'text',
                                            text: ' or factors.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The sequence of the numbers being multiplied can be interchanged without altering the product.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L4_5.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.MATH_ABOUT_BASIC_MATH_OPERATIONS_5,
                title: 'Division',
                theme: 'math',
                subTheme: 'Basic Math Operations',
                bgPosition: 50,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L5_1.png',
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            "Are there faster methods for division than what we learned in school? Can a division result be larger than the numbers involved?\nLet's uncover the answers in this lesson.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'A step into history',
                                },
                                {
                                    type: 'text',
                                    text: 'The symbol for division has evolved through many forms since the 15th century.',
                                },
                                {
                                    type: 'text',
                                    text: 'Mathematicians worldwide have used various symbols for division: from a)b, to the obelus (÷), a colon (:), and finally the slash (/) or fraction bar.',
                                },
                                {
                                    type: 'text',
                                    text: 'Today, all these forms are accepted for division.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'The slash',
                                        },
                                        {
                                            type: 'text',
                                            text: ' or solidus (/), the colon (:), and the horizontal bar in fractions are symbols that represent division.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'The result of division is called a ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'fraction, quotient',
                                        },
                                        {
                                            type: 'text',
                                            text: ', or ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'ratio',
                                        },
                                        {
                                            type: 'text',
                                            text: '; the parts are called the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'dividend',
                                        },
                                        {
                                            type: 'text',
                                            text: ' and ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'divisor',
                                        },
                                        {
                                            type: 'text',
                                            text: ', or ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'numerator',
                                        },
                                        {
                                            type: 'text',
                                            text: ' and ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'denominator.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'When dividing, we determine how many times the divisor fits into the dividend.',
                                },
                            ],
                            2: [
                                {
                                    type: 'subtitle',
                                    text: 'Rules for working with division',
                                },
                                {
                                    type: 'text',
                                    text: 'What are the key rules of division?',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: '1. Unlike addition and multiplication, ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'division is not commutative',
                                        },
                                        {
                                            type: 'text',
                                            text: ', meaning:',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'a / b is not always equal to b / a.',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Geek tip:\n',
                                        },
                                        {
                                            type: 'text',
                                            text: 'The results of a/b and b/a are reciprocals, meaning their product is 1.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: '2. When dividing more than two numbers, proceed from left to right:',
                                },
                                {
                                    type: 'text',
                                    text: 'a / b / c = (a / b) / c and is not the same as a / (b / c).',
                                },
                                {
                                    type: 'text',
                                    text: '3. Division of two whole numbers can be seen as repeated subtraction:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L5_2.png',
                                        },

                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L5_2-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: 'In this case, the quotient will be equal to c.',
                                },
                            ],
                            3: [
                                {
                                    type: 'text',
                                    text: '4. Division is right-distributive, meaning you can split the fraction into two parts like this:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L5_3.png',
                                        },

                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L5_3-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: '5. Division is not left-distributive, so the rule mentioned in point 4 does not apply to the divisor:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L5_4.png',
                                        },

                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L5_4-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: '6. When dividing positive and negative numbers, follow the same rule as for multiplication:',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L5_5.png',
                                },
                            ],
                            4: [
                                {
                                    type: 'subtitle',
                                    text: 'Practice',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Long Division Method',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Unlike the column multiplication method, where we move from right to left, division works backward — from left to right, dividing digit by digit.',
                                },
                                {
                                    type: 'text',
                                    text: 'Give the long division method a try for solving the following problem.',
                                },
                                {
                                    type: 'question',
                                    text: 'What is the quotient of 188 divided by 4?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_51',
                                    answers: [
                                        {
                                            label: '44',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '46',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '47',
                                            answerDescription: 'It’s the correct answer',
                                        },
                                        {
                                            label: '48',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '47',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Breaking Numbers into Fractions Method',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'This trick helps you calculate quickly and easily.',
                                },
                                {
                                    type: 'text',
                                    text: "Let's see how we could compute the previous example faster.",
                                },
                                {
                                    type: 'text',
                                    text: '1. Express the divisor — in our case, it’s 4 — as the product of smaller factors:',
                                },
                                {
                                    type: 'text',
                                    text: '4 = 2 * 2',
                                },
                                {
                                    type: 'text',
                                    text: '2. Divide the dividend by these new divisors:',
                                },
                                {
                                    type: 'text',
                                    text: '188 / 2 = 94\n94 / 2 = 47',
                                },
                                {
                                    type: 'text',
                                    text: 'So, 47 is your answer.',
                                },
                                {
                                    type: 'text',
                                    text: 'If your divisor is a prime number — which means it can’t be expressed as a product of smaller factors, except 1 and itself — this trick won’t work.',
                                },
                            ],
                            5: [
                                {
                                    type: 'question',
                                    text: 'What is the quotient of 243 divided by 81?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_52',
                                    answers: [
                                        {
                                            label: '3',
                                            answerDescription: 'It’s the correct answer',
                                        },
                                        {
                                            label: '8',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '7',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '6',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '3',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Division by 5 trick',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "If you're looking to divide a number by 5, here's a nifty trick to make it easier:",
                                },
                                {
                                    type: 'text',
                                    text: '1. Begin by dividing the number by 10, essentially shifting the decimal point one place to the left:',
                                },
                                {
                                    type: 'text',
                                    text: '95 / 10 = 9.5',
                                },
                                {
                                    type: 'text',
                                    text: '2. Next, simply multiply this fraction by 2:',
                                },
                                {
                                    type: 'text',
                                    text: '9.5 * 2 = 19',
                                },
                            ],
                            6: [
                                {
                                    type: 'question',
                                    text: 'What is the quotient of -265 divided by -5?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_53',
                                    answers: [
                                        {
                                            label: '53',
                                            answerDescription: 'It’s the correct answer',
                                        },
                                        {
                                            label: '-53',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '51',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '-51',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '53',
                                },
                            ],
                            7: [
                                {
                                    type: 'subtitle',
                                    text: 'Key points:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Division is represented using symbols like the slash (/), colon (:), or a horizontal bar in fractions.',
                                        },
                                    ],
                                },
                                {
                                    type: 'markerWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'The outcome of division is termed as a ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'fraction, quotient',
                                        },
                                        {
                                            type: 'text',
                                            text: ', or ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'ratio.',
                                        },
                                        {
                                            type: 'text',
                                            text: ' The numbers involved are identified as the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'dividend',
                                        },
                                        {
                                            type: 'text',
                                            text: ' and ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'divisor',
                                        },
                                        {
                                            type: 'text',
                                            text: ', or numerator and ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'denominator.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Swapping the dividend and divisor will alter the resulting fraction.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Simplifying numbers into smaller factors can make division easier, allowing for a step-by-step approach to dividing the dividend.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: "When dividing by 5, it's helpful to first divide by 10 and then double the result.",
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L5_6.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.MATH_ABOUT_BASIC_MATH_OPERATIONS_6,
                title: 'Exponentiation',
                theme: 'math',
                subTheme: 'Basic Math Operations',
                bgPosition: 50,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L6_1.png',
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            "Exponents are a core mathematical concept and an exciting topic to delve into.\nBy the end of this lesson, you'll have a solid understanding of exponents and the confidence to use them effectively.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'A Step into History',
                                },
                                {
                                    type: 'text',
                                    text: 'Exponents have been a part of mathematics for a long time.',
                                },
                                {
                                    type: 'text',
                                    text: "Euclid was the first to use the term 'power' to describe how many times a number must be multiplied by itself.",
                                },
                                {
                                    type: 'text',
                                    text: "In 1544, mathematician Michael Stifel introduced exponents, and Robert Recorde used the terms 'squared' and 'cubed.'",
                                },
                                {
                                    type: 'text',
                                    text: 'Nicolas Chuquet suggested exponential notation, which René Descartes later popularized.',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Exponentiation',
                                        },
                                        {
                                            type: 'text',
                                            text: ' is a mathematical operation that involves repeated multiplication of a number by itself.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'It is written as ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'bⁿ',
                                        },
                                        {
                                            type: 'text',
                                            text: ', where b is the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'base',
                                        },
                                        {
                                            type: 'text',
                                            text: ' and n is the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'exponent, power',
                                        },
                                        {
                                            type: 'text',
                                            text: ', or ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'index',
                                        },
                                        {
                                            type: 'text',
                                            text: '. The result of exponentiation is called the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'product',
                                        },
                                        {
                                            type: 'text',
                                            text: ', though it can also be referred to as ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'power*',
                                        },
                                        {
                                            type: 'text',
                                            text: ', which can be confusing.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: '*In this lesson, we’ll use the word “power” for n, the word “product” for the result, and the word “exponent” for the form bⁿ.',
                                },
                                {
                                    type: 'text',
                                    text: 'When n is a positive integer, exponentiation involves multiplying the base repeatedly:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L6_2.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L6_2-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: 'The exponent bⁿ is pronounced as “b raised to the power of n," "the nth power of b," or "b to the nth power."',
                                },
                            ],
                            2: [
                                {
                                    type: 'subtitle',
                                    text: 'Rules for working with exponentiation:',
                                },
                                {
                                    type: 'text',
                                    text: '1. Any number raised to the power of 0 equals 1:',
                                },
                                {
                                    type: 'text',
                                    text: '0⁰ = 1   3⁰ = 1   100⁰ = 1 etc.',
                                },
                                {
                                    type: 'text',
                                    text: 'Yes, even zero raised to the power of zero is 1.',
                                },
                                {
                                    type: 'text',
                                    text: '2. Any number raised to the power of 1 is equal to itself.',
                                },
                                {
                                    type: 'text',
                                    text: '0¹ = 0   -1¹ = -1   100¹ = 100 etc.',
                                },
                                {
                                    type: 'text',
                                    text: '3. When multiplying exponents with the same base, add the powers to get the result:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'p',
                                        },
                                        {
                                            type: 'exponentText',
                                            text: 'm',
                                        },
                                        {
                                            type: 'text',
                                            text: ' × p',
                                        },
                                        {
                                            type: 'exponentText',
                                            text: 'q',
                                        },
                                        {
                                            type: 'text',
                                            text: ' = p',
                                        },
                                        {
                                            type: 'exponentText',
                                            text: '(m+q)',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: '4. When dividing exponents with the same base, subtract the powers to get the result:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'p',
                                        },
                                        {
                                            type: 'exponentText',
                                            text: 'm',
                                        },
                                        {
                                            type: 'text',
                                            text: ' / p',
                                        },
                                        {
                                            type: 'exponentText',
                                            text: 'q',
                                        },
                                        {
                                            type: 'text',
                                            text: ' = p',
                                        },
                                        {
                                            type: 'exponentText',
                                            text: '(m-q)',
                                        },
                                    ],
                                },
                            ],
                            3: [
                                {
                                    type: 'text',
                                    text: '5. When dealing with powers and different bases, remember these rules:',
                                },
                                {
                                    type: 'text',
                                    text: 'If the power is even, the result is always positive.',
                                },
                                {
                                    type: 'text',
                                    text: 'If the power is odd, the result will have the same sign as the base.',
                                },
                                {
                                    type: 'text',
                                    text: "Here's a visualization:",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L6_3.png',
                                },
                            ],
                            4: [
                                {
                                    type: 'subtitle',
                                    text: 'Practice',
                                },
                                {
                                    type: 'text',
                                    text: 'Apply the rules to answer these questions:',
                                },
                                {
                                    type: 'question',
                                    text: 'Select the correct expression for the exponent 3⁵:',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_61',
                                    answers: [
                                        {
                                            label: '5 × 3',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '5 × 5 × 5',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '3 × 3 × 3 × 3 × 3',
                                            answerDescription:
                                                '3 to the power of 5 indicates multiplying 3 by itself 5 times.',
                                        },
                                        {
                                            label: 'All of the above',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '3 × 3 × 3 × 3 × 3',
                                },
                                {
                                    type: 'question',
                                    text: 'What is the product of 6² + 2⁶?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_62',
                                    answers: [
                                        {
                                            label: '120',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '100',
                                            answerDescription:
                                                '100 is the correct answer. 6 × 6 = 36, 2 × 2 × 2 × 2 × 2 × 2 = 64, 36 + 64 = 100',
                                        },
                                        {
                                            label: '82',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '72',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '100',
                                },
                            ],
                            5: [
                                {
                                    type: 'question',
                                    text: 'What is the answer to the equation 6³ - 4³?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_63',
                                    answers: [
                                        {
                                            label: '56',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '152',
                                            answerDescription:
                                                '152 is the correct answer. 6³ is 216 and 4³ is 64 -> 216 - 64 = 152',
                                        },
                                        {
                                            label: '108',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '112',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '152',
                                },
                                {
                                    type: 'question',
                                    text: 'What does 6⁽⁻²⁾ equal?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_64',
                                    answers: [
                                        {
                                            label: 'The power can’t be negative!',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '6 × (-2)',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '(6 × 1) / -2',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '1/36',
                                            answerDescription:
                                                'The power can be negative, and 1/36 is the correct answer because we can rewrite the expression as 6⁽⁰⁻²⁾ = 6⁰ / 6² = 1 / 36.',
                                        },
                                    ],
                                    correctAnswer: '1/36',
                                },
                            ],
                            6: [
                                {
                                    type: 'subtitle',
                                    text: 'Key points:',
                                },
                                {
                                    type: 'markerWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Exponentiation',
                                        },
                                        {
                                            type: 'text',
                                            text: ' is the process of multiplying a number by itself repeatedly.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Exponents are represented as bⁿ, where b is the base and n is the power.',
                                        },
                                    ],
                                },
                                {
                                    type: 'markerWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'The result of exponentiation is called the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'product',
                                        },
                                        {
                                            type: 'text',
                                            text: ', with the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'base',
                                        },
                                        {
                                            type: 'text',
                                            text: ' and ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'power',
                                        },
                                        {
                                            type: 'text',
                                            text: ' or ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'index',
                                        },
                                        {
                                            type: 'text',
                                            text: 'being the elements involved.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Switching the base and power alters the product.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L6_4.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.MATH_ABOUT_BASIC_MATH_OPERATIONS_7,
                title: 'Roots',
                theme: 'math',
                subTheme: 'Basic Math Operations',
                resizeMode: 'contain',
                bgPosition: 140,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_1_new.png',
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            'Roots serve as the reverse process of exponentiation, allowing us to determine the original number that was raised to a certain power. \n\nMaster this topic to grasp the concept of roots and discover strategies to compute them swiftly.',
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'A step into history',
                                },
                                {
                                    type: 'text',
                                    text: 'The idea of roots has changed over time.',
                                },
                                {
                                    type: 'text',
                                    text: 'A long time ago, around 1800 BC, the Babylonians came up with the idea of square roots.',
                                },
                                {
                                    type: 'text',
                                    text: "Later, Europeans used the word 'radix' for roots, which is why we say 'radical' for root symbols now.",
                                },
                                {
                                    type: 'text',
                                    text: 'In the 1450s, a German mathematician named Regiomontanus used the letter R to mean square roots.',
                                },
                                {
                                    type: 'text',
                                    text: "Then, in 1525, another German mathematician, Christoph Rudolff, was the first to print the '√' symbol for square roots, but it didn't have the line over it yet.",
                                },
                                {
                                    type: 'text',
                                    text: 'Finally, in 1637, René Descartes added the line on top that we see in the square root symbol today.',
                                },
                            ],
                            2: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'An n-th',
                                        },
                                        {
                                            type: 'text',
                                            text: ' root of a number b is a number x that, when multiplied by itself n times, equals b.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_2.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_2-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Roots can be represented in the following way: the number n is known as ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'the root’s index*',
                                        },
                                        {
                                            type: 'text',
                                            text: ', the symbol √ is referred to as ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'the radical',
                                        },
                                        {
                                            type: 'text',
                                            text: ', and b is the value under the radical, called ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'the radicand',
                                        },
                                        {
                                            type: 'text',
                                            text: '. Essentially, roots perform the reverse function of raising a number to a power.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_3.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_3-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: 'The term "square root" implies that the index n is equal to 2; similarly, "cube root" indicates that n is 3.',
                                },
                                {
                                    type: 'text',
                                    text: "In our discussion today, we'll focus solely on roots with positive indices, although in general, indices can be any number.",
                                },
                            ],
                            3: [
                                {
                                    type: 'subtitle',
                                    text: 'Key guidelines for working with roots',
                                },
                                {
                                    type: 'text',
                                    text: 'When handling roots, keep in mind the following key guidelines:',
                                },
                                {
                                    type: 'text',
                                    text: '1. We can rewrite the roots like this:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_4.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_4-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: 'This highlights the relationship between exponents and roots.',
                                },
                                {
                                    type: 'text',
                                    text: 'Therefore, we can deduce that the square root of x is equivalent to x raised to the power of  ½.',
                                },
                                {
                                    type: 'text',
                                    text: '2. If b is a positive real number and n is a positive integer, then there exists a unique positive real number x which satisfies the equation:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_2.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_2-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: '3. A negative radicand will have a real root only if the index of the root is an odd number:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_6.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_6-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: 'Because (- 3) × (- 3) × (- 3) =  -27.',
                                },
                            ],
                            4: [
                                {
                                    type: 'text',
                                    text: '4. When multiplying roots that share the same index, you can streamline the process as follows:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_7.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_7-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: '5. When dividing roots that have the same index, you can make the equation simpler by doing this:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_8.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_8-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: '6. To calculate the root of a root, simply multiply the indices of the roots involved:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_9.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_9-1.png',
                                        },
                                    },
                                },
                            ],
                            5: [
                                {
                                    type: 'subtitle',
                                    text: 'Practice',
                                },
                                {
                                    type: 'text',
                                    text: "It's the moment to apply theoretical knowledge into practical use.",
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_10.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_10-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'question',
                                    text: "What's an answer to the equation above?",
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_71',
                                    answers: [
                                        {
                                            label: '2',
                                            answerDescription: '2 is the correct answer. Because 2 × 2 × 2 × 2 = 16.',
                                        },
                                        {
                                            label: '4',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '64',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '166',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '2',
                                },
                            ],
                            6: [
                                {
                                    type: 'text',
                                    text: "Now, let's tackle the second question, which is a little more challenging:",
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_11.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_11-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'question',
                                    text: "What's an answer to the equation above?",
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_72',
                                    answers: [
                                        {
                                            label: '25',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '15',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '5',
                                            answerDescription: '5 is the correct answer. Because 5 × 5 × 5 = 125.',
                                        },
                                        {
                                            label: '0',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '5',
                                },
                            ],
                            7: [
                                {
                                    type: 'text',
                                    text: "Finally, let's look at the last example:",
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_12.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_12-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'question',
                                    text: 'What is the correct answer?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_73',
                                    answers: [
                                        {
                                            label: '64',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '8',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '4',
                                            answerDescription: [
                                                {type: 'text', text: '4 is the correct answer. Because 2'},
                                                {type: 'exponentText', text: '(4/2)'},
                                                {type: 'text', text: ' = 4.'},
                                            ],
                                        },
                                        {
                                            label: '2',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '4',
                                },
                            ],
                            8: [
                                {
                                    type: 'subtitle',
                                    text: 'Key points to keep in mind:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The symbol √is used to denote roots.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Roots are the inverse operation of exponents.',
                                        },
                                    ],
                                },
                                {
                                    type: 'markerWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'The parts of a root are known as the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'index, radical',
                                        },
                                        {
                                            type: 'text',
                                            text: ', and ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'radicand.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'The outcome of a root is a number x, which, when elevated to the power of the index, will yield the radicand.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Elevating a number to the power of ½ is equivalent to finding its square root.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L7_13.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.MATH_ABOUT_BASIC_MATH_OPERATIONS_QUIZ,
                title: 'Learning PEMDAS for operation order',
                theme: 'math',
                subTheme: 'Basic Math Operations',
                bgPosition: 50,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L8_1.png',
                content: [
                    {
                        type: 'pre-quiz',
                        time: '5 min',
                        students: 100,
                        description:
                            "Which comes first, the egg or the chicken? Or in math, do we divide before we add? Once you've brushed up on the basic math operations, it's time to tackle them all together. With the well-known PEMDAS technique, you'll definitely get it right.",
                    },
                    {
                        type: 'quiz',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'A step into history',
                                },
                                {
                                    type: 'text',
                                    text: 'Even though we\'ve been doing basic math like adding and multiplying for a really long time, the rules about which one to do first haven\'t been around for that long. People started talking about the "order of operations" and using it in schools around the 1800s. The shortcut "PEMDAS" probably came about in the 1900s.',
                                },
                                {
                                    type: 'text',
                                    text: "So, what's PEMDAS all about? It's a set of rules that tells us the order to solve different parts of a math problem so that everyone gets the same answer. It stands for Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).",
                                },
                                {
                                    type: 'text',
                                    text: 'This way, when you have a bunch of different operations in one math problem, you know exactly what to do first, second, and so on.',
                                },
                            ],
                            2: [
                                {
                                    type: 'subtitle',
                                    text: 'Key guidelines for working with operations order',
                                },
                                {
                                    type: 'text',
                                    text: "It's really straightforward and doesn't take much work:",
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'markerWithNumber',
                                            text: 'Solve everything inside the brackets.',
                                        },
                                        {
                                            type: 'markerWithNumber',
                                            text: 'Work out any powers or roots (you can change roots into powers to make it easier).',
                                        },
                                        {
                                            type: 'markerWithNumber',
                                            text: 'Do any multiplying or dividing, going from left to right in the equation.',
                                        },
                                        {
                                            type: 'markerWithNumber',
                                            text: 'Handle any adding or subtracting, also from left to right.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "Just follow these steps in order, and you'll be able to tackle math problems with multiple operations easily!",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L8_2.png',
                                },
                            ],
                            3: [
                                {
                                    type: 'subtitle',
                                    text: 'Practice',
                                },
                                {
                                    type: 'text',
                                    text: "Let's see how to use PEMDAS in an equation:",
                                },
                                {
                                    type: 'text',
                                    text: '(7 + 5)/2 × 2³ - 8/(10 - 6) =',
                                },
                                {
                                    type: 'text',
                                    text: 'Parenthesis: (7 + 5); (10 - 6)',
                                },
                                {
                                    type: 'text',
                                    text: '= 12/2 × 2³ - 8/4 =',
                                },
                                {
                                    type: 'text',
                                    text: 'Exponents: 2³',
                                },
                                {
                                    type: 'text',
                                    text: '- 12/2 × 8 - 8/4',
                                },
                                {
                                    type: 'text',
                                    text: 'Multiplication/Division left to right: 12/2',
                                },
                                {
                                    type: 'text',
                                    text: '= 6 × 8 - 8/4 =',
                                },
                                {
                                    type: 'text',
                                    text: 'Multiplication/ Division left to right: 6 × 8; 8/4',
                                },
                                {
                                    type: 'text',
                                    text: '= 48 - 2 =',
                                },
                                {
                                    type: 'text',
                                    text: 'Addition and Subtraction left to right: 48 - 2',
                                },
                                {
                                    type: 'text',
                                    text: '= 46',
                                },
                                {
                                    type: 'text',
                                    text: "Now let's solve some equations and start with a simple one.",
                                },
                            ],
                            4: [
                                {
                                    type: 'question',
                                    text: 'What is the answer to 2 × (2 + 2) - 3 × 2 = ?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_quiz_1',
                                    answers: [
                                        {
                                            label: '0',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '2',
                                            answerDescription:
                                                '2 is the correct answer. Because 2 + 2 = 4, 4 × 2 = 8, 3 × 2 = 6, 8 - 6 = 2',
                                        },
                                        {
                                            label: '6',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '12',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '2',
                                },
                                {
                                    type: 'text',
                                    text: 'Continue exercising your mental faculties!',
                                },
                            ],
                            5: [
                                {
                                    type: 'question',
                                    text: 'Find an answer to (24 / 3 - 7)/1 + 2 =',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_quiz_2',
                                    answers: [
                                        {
                                            label: '-3',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '2',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '3',
                                            answerDescription:
                                                '3 is the correct answer. 24/3 = 8, 8 - 7 = 1, 1/1 = 1, 1 + 2 = 3',
                                        },
                                        {
                                            label: '9',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '3',
                                },
                                {
                                    type: 'text',
                                    text: 'This time without parenthesis.',
                                },
                            ],
                            6: [
                                {
                                    type: 'question',
                                    text: 'Solve the next equation: 5² - 1 + 10² =',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_quiz_3',
                                    answers: [
                                        {
                                            label: '95',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '124',
                                            answerDescription:
                                                '124 is the correct answer. 5² = 25, 10² = 100, 25 - 1 + 100 = 124',
                                        },
                                        {
                                            label: '225',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '1215',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '124',
                                },
                                {
                                    type: 'text',
                                    text: "Let's work through another math problem to further sharpen our skills.",
                                },
                            ],
                            7: [
                                {
                                    type: 'question',
                                    text: 'What is the answer to 8/4 × (2 + 2) = ?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_quiz_4',
                                    answers: [
                                        {
                                            label: '0.5',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '2',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '8',
                                            answerDescription: '8 is the correct answer. 8/4 = 2, 2 + 2 = 4, 2 × 4 = 8',
                                        },
                                        {
                                            label: '16',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '8',
                                },
                                {
                                    type: 'text',
                                    text: 'And the most challenging one.',
                                },
                            ],
                            8: [
                                {
                                    type: 'question',
                                    text: 'Find an answer to -5 / (20 / 2² × 5 / 5) × 8 - (-5) = ?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'math_basics_math_question_quiz_5',
                                    answers: [
                                        {
                                            label: '-3',
                                            answerDescription:
                                                '- 3 is the correct answer. 2² = 4,20 / 4 = 5,5 x 5 = 25, 25/5 = 5, -5/5 = -1, -1 × 8 = -8, -8 - (-5) = -3',
                                        },
                                        {
                                            label: '-12',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '3.125',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '6.125',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '-3',
                                },
                                {
                                    type: 'text',
                                    text: 'Great job completing this series of math problems! Using the PEMDAS method will ensure accurate results in every calculation.',
                                },
                            ],
                            9: [
                                {
                                    type: 'subtitle',
                                    text: 'Key points:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'PEMDAS stands for the sequence to follow when solving math problems.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'First, tackle any calculations inside parentheses.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Second, handle exponents and roots (convert roots to exponents for easier calculation).',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Third, carry out multiplication and division, moving left to right.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Finally, perform addition and subtraction, also from left to right.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/math/basic_math_operations/Math_B_L8_3.png',
                                },
                            ],
                        },
                    },
                ],
            },
        ],
    },
    finance: {
        title: 'Personal Finance',
        lessons: [
            {
                id: LESSONS_ID.FINANCE_SALES_MANIPULATION,
                title: 'Sales Manipulation',
                theme: 'finance',
                subTheme: 'First Steps in Finance',
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/DALLE2024-03-1316.30.17-Createanimageofaclothingrackwithvariousshirtshangingneatlyinarow.Inthecenterabrightredshirtstandsoutwithalargeyellowdisco-ezgif.com-webp-to-png-converter.png',
                bgPosition: 100,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 145,
                        description:
                            'Do you end up spending more because of sales?\n' +
                            "Let's learn how to shop smart!\n",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'The psychology of sales',
                                },
                                {
                                    type: 'text',
                                    text: 'Ever bought a book on sale and never read it, or a sweater for half the price that you never wore?',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/DALLE2024-03-1409.15.50-Illustratealowpolystyleimagedepictingasetofclothesonhangersagainstaminimalistbackground.Theclothesamixofshirtspantsandadr-ezgif.com-webp-to-png-converter.png',
                                },
                                {
                                    type: 'text',
                                    text: "If that sounds familiar, you've seen how stores make you want to buy more. In this lesson, we're going to learn how to beat their tricks!",
                                },
                            ],
                            2: [
                                {
                                    type: 'text',
                                    text: 'First, we need to understand why sales make us want to buy things.',
                                },
                                {
                                    type: 'text',
                                    text: 'We love discounts because they:',
                                },
                                {
                                    type: 'flippedImage',
                                    width: 100,
                                    height: 130,
                                    data: [
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/tag1%20at%20Apr%2008%2015-51-16.png',
                                            text: 'create a sense of happiness by releasing oxytocin',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/tag2%20at%20Apr%2008%2015-52-49.png',
                                            text: 'generate excitement',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/tag3%20at%20Apr%2008%2015-52-06.png',
                                            text: 'make the customer feel smarter because they saved money',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "Let's explore how brands attempt to get us to spend more.",
                                },
                            ],
                            3: [
                                {
                                    type: 'subtitle',
                                    text: 'Four tricks of the retailers',
                                },
                                {
                                    type: 'text',
                                    text: "1. To escape the continuous loop of falling for shopping schemes, it's crucial to be mindful of the clever strategies brands use!",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/DALLE2024-03-1410.27.31-Createalowpolystyleimageoftwoidenticalteddybearssittingnexttoeachother.Theteddybearsshouldbedesignedwithgeometricshapesusing-ezgif.com-webp-to-png-converter.png',
                                },
                            ],
                            4: [
                                {
                                    type: 'text',
                                    text: '2. Urgency illusion: By promoting short-term deals, brands spur customers into making quick, often ill-considered purchases.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/DALLE2024-03-1413.12.32-Createalowpolystyleimagebasedonthepreviousdesignofatimernearasaletagbutthistimeremoveanytextfromthesaletag.Theimageshou-ezgif.com-webp-to-png-converter.png',
                                },
                            ],
                            5: [
                                {
                                    type: 'text',
                                    text: "3. Two-for-one deals: Such promotions can tempt you into purchasing unnecessary items with the allure of receiving something 'free.'",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/DALLE2024-03-1410.42.05-Designalowpolystyleimageofaburgerfocusingoncapturingtheessenceofadeliciousburgerwithgeometricshapes.Theburgershouldincludela-ezgif.com-webp-to-png-converter.png',
                                },
                            ],
                            6: [
                                {
                                    type: 'text',
                                    text: '4. Price inflation strategy: Retailers may increase prices just before a sale to make the eventual discount seem more attractive than it really is.',
                                },
                                {
                                    type: 'imagesGrid',
                                    imagesUrl: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/Sun%20at%20Apr%2008%2015-41-56.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/Mon%20at%20Apr%2008%2015-42-17.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/Tue%20Apr%2008%2015-41-05.png',
                                    ],
                                    width: 105,
                                    height: 105,
                                },
                                {
                                    type: 'text',
                                    text: "Having uncovered the most common strategies brands employ to encourage extra spending — it's time to learn how to sidestep these traps.",
                                },
                            ],
                            7: [
                                {
                                    type: 'subtitle',
                                    text: 'Some practice for smart shopping',
                                },
                                {
                                    type: 'text',
                                    text: 'This is a typical scenario you might encounter while shopping.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/T-shirt%20Apr%2008%2015-40-08.png',
                                    height: 340,
                                },
                            ],
                            8: [
                                {
                                    type: 'question',
                                    text: 'Is this T-shirt a better buy with $30 or 30% off?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_question_1',
                                    answers: [
                                        {
                                            answerDescription: '',
                                            label: '30% off',
                                        },
                                        {
                                            answerDescription: '!',
                                            label: '$30 off',
                                        },
                                        {
                                            answerDescription: '',
                                            label: 'Equal',
                                        },
                                    ],
                                    correctAnswer: '$30 off',
                                },
                            ],
                            9: [
                                {
                                    type: 'text',
                                    text: 'Final T-shirt price calculation:',
                                },
                                {
                                    type: 'subtitle',
                                    text: '30% off',
                                },
                                {
                                    type: 'text',
                                    text: '$70/100 * 30 = $21',
                                },
                                {
                                    type: 'text',
                                    text: '$70 - $21=$49',
                                },
                                {
                                    type: 'subtitle',
                                    text: '$30 off',
                                },
                                {
                                    type: 'text',
                                    text: '$70 - $30 = $40',
                                },
                                {
                                    type: 'text',
                                    text: 'As we see, the final price of the T-shirt with $30 off is less than with 30% off.',
                                },
                            ],
                            10: [
                                {
                                    type: 'text',
                                    text: "Excited for another challenge? Let's dive in!",
                                },
                                {
                                    type: 'text',
                                    text: 'Your nearby shop has a special on $10 mugs: purchase one and get the second one for half price.',
                                },
                                {
                                    type: 'question',
                                    text: "What's the total discount when you buy two mugs?",
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_question_2',
                                    answers: [
                                        {label: '100%'},
                                        {label: '50%'},
                                        {
                                            answerDescription:
                                                'The original cost for two mugs is $20, but with the deal, it drops to $15. Thus, the overall discount is $5, amounting to a 25% reduction from the initial price.',
                                            label: '25%',
                                        },
                                        {label: '15%'},
                                    ],
                                    correctAnswer: '25%',
                                },
                            ],
                            11: [
                                {
                                    type: 'subtitle',
                                    text: 'Seven key strategies to shop smart',
                                },
                                {
                                    type: 'text',
                                    text: '1. Verify the original price before the discount when you can.',
                                },
                                {
                                    type: 'text',
                                    text: '2. Convert discount percentages to dollar amounts (or vice versa) to better assess the deal.',
                                },
                                {
                                    type: 'text',
                                    text: "3. Check the item's price elsewhere to ensure the discount is real.",
                                },
                                {
                                    type: 'text',
                                    text: "4. Consider whether you'd purchase the item without a discount.",
                                },
                                {
                                    type: 'text',
                                    text: '5. Make a shopping list to stick to your needs.',
                                },
                                {
                                    type: 'text',
                                    text: '6. Set a budget to prevent spontaneous buying.',
                                },
                                {
                                    type: 'text',
                                    text: '7. Ignore the urgency of "limited-time" deals to make a thoughtful choice.',
                                },
                                {
                                    type: 'text',
                                    text: 'Snap a photo of these strategies and use them on your next shopping trip for wiser spending!',
                                },
                            ],
                            12: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/sales-manipulation/DALLE2024-03-1412.33.42-Createalowpolystyleimageofabankcardwithoutdisplayingthecardholdersname.Thecardshouldfeaturegeometricshapesandavibrantcolorsc-ezgif.com-webp-to-png-converter.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.PERSONAL_FINANCE_ABOUT_FIRST_STEPS_2,
                title: 'Exponential growth',
                theme: 'finance',
                subTheme: 'First Steps in Finance',
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_1_new.png',
                resizeMode: 'contain',
                bgPosition: 150,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            "In this lesson, you'll explore the powerful impact of exponential growth — a process that leads to significant changes in a short time — and understand why this concept is highly valued by investors.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'text',
                                    text: "To grasp exponential growth better, let's travel back to ancient India where it was first illustrated.",
                                },
                                {
                                    type: 'text',
                                    text: "An old legend tells of the chess game's inventor who asked for a modest reward: some rice.",
                                },
                                {
                                    type: 'text',
                                    text: 'He requested the king to place one grain of rice on the first chessboard square, double it to two grains on the second square, double again to four grains on the third square, then eight grains on the fourth square, continuing this pattern across all 64 squares on the chessboard.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_2.png',
                                },
                            ],
                            2: [
                                {
                                    type: 'question',
                                    text: 'Can you determine the number of grains on the last square?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_first_steps_21',
                                    answers: [
                                        {
                                            label: '64*2',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '2⁶³',
                                            answerDescription:
                                                'The numbers double with each square, starting from the second one. So, the amount of rice on the final square would be 1 * 2 * 2 * 2 * ... * 2 * 2 * 2. This is 2 multiplied by itself 63 times, or 2⁶³.',
                                        },
                                        {
                                            label: '2⁶⁴',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '64²',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '2⁶³',
                                },
                                {
                                    type: 'text',
                                    text: "Things escalated rapidly. The king soon realized that the numbers, doubling each time, resulted in enormous amounts of rice. Ultimately, the king couldn't pay the debt—there wasn't enough rice in his entire kingdom.",
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: '2',
                                        },
                                        {
                                            type: 'exponentText',
                                            text: '63',
                                        },
                                        {
                                            type: 'text',
                                            text: ' = 9,223,372,036,854,775,808',
                                        },
                                    ],
                                },
                            ],
                            3: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_3.png',
                                },
                                {
                                    type: 'text',
                                    text: 'The amount of rice on the last square alone exceeds the total amount of rice humanity has produced from the time of the legend to the present day. The entire chessboard would have contained nearly twice as much rice.',
                                },
                                {
                                    type: 'text',
                                    text: 'This is an example of exponential growth—an immensely powerful source of hidden asymmetries in our world.',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Exponential growth',
                                        },
                                        {
                                            type: 'text',
                                            text: ' occurs when the rate of increase is proportional to the current value of the quantity.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'The key to this effect is that each new step is based on the previous step, not the first one.',
                                },
                            ],
                            4: [
                                {
                                    type: 'text',
                                    text: 'As a result, the numbers grow faster and faster, seemingly feeding on themselves.',
                                },
                                {
                                    type: 'text',
                                    text: "Mathematically, here's what is happening on the chessboard:",
                                },
                                {
                                    type: 'slider',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_4.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_5.png',
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'The same concept of growth is present in modern investments. Just as the amount of grain on each square is based on the previous square, investments involve reinvesting yesterday’s earnings so that money is continuously generating more money.',
                                },
                            ],
                            5: [
                                {
                                    type: 'text',
                                    text: 'Let’s update the legend:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Initial amount:',
                                        },
                                        {
                                            type: 'text',
                                            text: ' Let’s equate 1 grain to a $1 investment, also known as the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'principal.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "Interest rate: Mathematically, the doubling from the chess legend represents a 100% interest rate. However, in reality, it's impractical to work with such high rates (except for scammers, so beware!). Let’s adjust it to a more reasonable range of 5% to 15%.",
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Time periods:',
                                        },
                                        {
                                            type: 'text',
                                            text: ' The number of squares from the legend corresponds to years or months when discussing investments.',
                                        },
                                    ],
                                },
                            ],
                            6: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Initial sum, interest rate, time periods\n',
                                        },
                                        {
                                            type: 'text',
                                            text: 'Let’s explore how each of them influences our exponential growth.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Let’s begin with the ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'initial sum',
                                        },
                                        {
                                            type: 'text',
                                            text: ' — a tangible and quantifiable aspect. What happens if we decide to be more daring and invest not $1, but $2?',
                                        },
                                    ],
                                },
                                {
                                    type: 'slider',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_4.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_5.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_8.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_9.png',
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Surprisingly, increasing the initial sum doesn’t drastically alter the outcome. While we may advance a bit in time, the overall growth trajectory remains largely unchanged.',
                                },
                            ],
                            7: [
                                {
                                    type: 'question',
                                    text: 'If we increase the initial investment to $64, how many days would it take us to reach this amount?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_first_steps_22',
                                    answers: [
                                        {
                                            label: '64',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '32',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '2',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '7',
                                            answerDescription:
                                                'We would reach the $64 mark as early as the 7th day with a 2x growth rate, starting from a $1 investment.',
                                        },
                                    ],
                                    correctAnswer: '7',
                                },
                            ],
                            8: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Interest rate:',
                                        },
                                        {
                                            type: 'text',
                                            text: " indicates the amount we are adding to the previous sum—whether it's a chess square, day, or year.",
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Now, let’s observe how our growth pattern shifts when adjusting between a more practical 5% and 15% interest rate.',
                                },
                                {
                                    type: 'slider',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_10.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_11.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_12.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_13.png',
                                    ],
                                },
                            ],
                            9: [
                                {
                                    type: 'question',
                                    text: 'What do you think has a greater impact on your wealth: increasing the initial sum or adjusting the interest rate?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_first_steps_23',
                                    answers: [
                                        {
                                            label: 'Sum',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Interest',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'It varies',
                                            answerDescription:
                                                'The overall effect depends on time: in the short term, having a higher initial sum is more beneficial, but the impact of a higher interest rate will dominate in the long run.',
                                        },
                                    ],
                                    correctAnswer: 'It varies',
                                },
                            ],
                            10: [
                                {
                                    type: 'text',
                                    text: 'And lastly, time periods:\nLet’s observe how our investments evolve over time.',
                                },
                                {
                                    type: 'slider',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_14.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_15.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_16.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L2_17.png',
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Increasing the number of periods doesn’t alter our exponential curve, but it does showcase its full potential.',
                                },
                            ],
                            11: [
                                {
                                    type: 'text',
                                    text: "Today, you've explored exponential growth — a potent phenomenon where the rate of change of a quantity depends on the quantity itself.",
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Exponential growth',
                                        },
                                        {
                                            type: 'text',
                                            text: ' occurs when the rate of increase is proportional to the current value of the quantity.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "In the upcoming lessons, we'll delve into simple tools for calculating these changes.",
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.PERSONAL_FINANCE_ABOUT_FIRST_STEPS_3,
                title: 'Compounding & Discounting',
                theme: 'finance',
                subTheme: 'First Steps in Finance',
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L3_1_new.png',
                resizeMode: 'contain',
                bgPosition: 150,
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            "In this lesson, you will get to know two popular yet often misunderstood concepts in the modern financial world and learn how to quickly assess the value of your potential investments. Let's begin!",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'text',
                                    text: "You've probably heard that money loses value over time.",
                                },
                                {
                                    type: 'text',
                                    text: 'Conversely, there’s always the advice to “invest now to grow your money!”',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'It simply involves understanding three key variables: ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'interest, time, and money.',
                                        },
                                    ],
                                },
                            ],
                            2: [
                                {
                                    type: 'subtitle',
                                    text: 'Interest, time, and money.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Interest: ',
                                        },
                                        {
                                            type: 'text',
                                            text: 'Usually expressed as a percentage, it can represent a real-life interest rate on a savings account or an inflation rate, for example.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "We'll denote it as",
                                        },
                                        {
                                            type: 'italic',
                                            text: ' i.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'italic',
                                            text: 'interest = i',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Time: ',
                                        },
                                        {
                                            type: 'text',
                                            text: 'The number of periods, typically in years or months. To avoid confusion with different units (years, months, days), mathematicians use a universal notation: ',
                                        },
                                        {
                                            type: 'italicUnderlined',
                                            text: 'n',
                                        },
                                        {
                                            type: 'text',
                                            text: '.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'italic',
                                            text: 'number of periods=n',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Money:',
                                        },
                                        {
                                            type: 'text',
                                            text: ' This refers to the sum, principal, or value.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'We might know our current amount of money and want to determine how much it could grow in the future.',
                                },
                                {
                                    type: 'text',
                                    text: 'Or we might have a future sum in mind and want to understand its value in today’s terms.',
                                },
                                {
                                    type: 'text',
                                    text: 'In both cases, we know one value and need to find the other. That’s where math comes in to help.',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'italic',
                                            text: 'Future value = FV\nPresent value = PV',
                                        },
                                    ],
                                },
                            ],
                            3: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'italic',
                                            text: 'interest = i',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'italic',
                                            text: 'number of periods = n',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'italic',
                                            text: 'Future value = FV',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'italic',
                                            text: 'Present value = PV',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Interest and the number of periods form the foundation for all financial calculations:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'italic',
                                            text: '(1+i)',
                                        },
                                        {
                                            type: 'exponentTextItalic',
                                            text: ' n',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'These factors illustrate how anything changes over time.',
                                },
                                {
                                    type: 'text',
                                    text: 'When we look from the Present into the Future — such as when deciding where to invest our current money and calculating its Future value — we use the following approach:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L3_2.png',
                                        },

                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L3_2-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: 'or, simply:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'italic',
                                            text: 'FV=PV(1+i)',
                                        },
                                        {
                                            type: 'exponentTextItalic',
                                            text: ' n',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'This process is called ',
                                        },
                                        {
                                            type: 'italicUnderlined',
                                            text: 'compounding.',
                                        },
                                    ],
                                },
                            ],
                            4: [
                                {
                                    type: 'text',
                                    text: 'You have a spare $20,000 and are considering putting it in a savings account at a reliable bank with a modest, but secure, 5% interest rate for 40 years.',
                                },
                                {
                                    type: 'question',
                                    text: 'How much will this grow into by the time you retire?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_first_steps_11',
                                    answers: [
                                        {
                                            label: '$140,800',
                                            answerDescription:
                                                'FV = PV(1+i)ⁿ = 20000 * (1+0.05)⁴⁰ = 20000 * 7.039 = 140799.77',
                                        },
                                        {
                                            label: '$124,000',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '$60,000',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '$100,000',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: '$140,800',
                                },
                            ],
                            5: [
                                {
                                    type: 'text',
                                    text: 'If we’re looking from the Future into the Present—say, someone promises to pay us a certain amount of money in the future and we need to determine its present value—we adjust the formula to:',
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L3_3.png',
                                        },

                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/first_steps/Finance_FS_L3_3-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'This process is called ',
                                        },
                                        {
                                            type: 'italicUnderlined',
                                            text: 'discounting.',
                                        },
                                    ],
                                },
                            ],
                            6: [
                                {
                                    type: 'text',
                                    text: "A bank offers you a two-year savings account with a 10% interest rate. You'd like to have $10,000 at the end of the term.",
                                },
                                {
                                    type: 'question',
                                    text: 'How much money do you need to deposit now to achieve the desired amount?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_first_steps_12',
                                    answers: [
                                        {
                                            label: '$8,000',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '$9,090',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '$9,000',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '$8,264',
                                            answerDescription:
                                                'Present Value = Future Value / (1+i)ⁿ = 10000 / (1+0.1)² = 10000 / 1.21 = 8264',
                                        },
                                    ],
                                    correctAnswer: '$8,264',
                                },
                            ],
                            7: [
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Both ',
                                        },
                                        {
                                            type: 'italicUnderlined',
                                            text: 'compounding',
                                        },
                                        {
                                            type: 'text',
                                            text: ' and ',
                                        },
                                        {
                                            type: 'italicUnderlined',
                                            text: 'discounting',
                                        },
                                        {
                                            type: 'text',
                                            text: ' are integral parts of the same concept but with opposing directions.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'With discounting, we calculate the Present Value when we know the Future Value.',
                                },
                                {
                                    type: 'text',
                                    text: 'With compounding, we calculate the Future Value when we know the Present Value.',
                                },
                                {
                                    type: 'text',
                                    text: "In the upcoming lessons, we'll explore real-world applications of compounding and discounting tools and delve into more advanced financial calculation methods.",
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.PERSONAL_FINANCE_ABOUT_TAXES_BASICS_1,
                title: 'Tax Systems: A Simple Comparison',
                theme: 'finance',
                subTheme: 'Taxes Basics',
                resizeMode: 'contain',
                bgPosition: 150,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_1_new.png',
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            'In this lesson, we will explore more about taxes, beginning with the different kinds and looking at how they are used in two major countries — the US and the UK.',
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'text',
                                    text: 'The field of taxes is like an exciting rollercoaster, with every country presenting unique challenges and differences.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_2.png',
                                },
                                {
                                    type: 'text',
                                    text: "Get ready and join us on the tax journey — it's a key part of the adventure of life!",
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'There are three basic types of taxes: those on your ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'income',
                                        },
                                        {
                                            type: 'text',
                                            text: ', your ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'property',
                                        },
                                        {
                                            type: 'text',
                                            text: ', and your ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'purchases.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Each type is charged at different times:',
                                },
                                {
                                    type: 'imagesGrid',
                                    imagesUrl: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_3.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_4.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_5.png',
                                    ],
                                    width: 105,
                                    height: 105,
                                },
                                {
                                    type: 'text',
                                    text: "We'll look closely at every type.",
                                },
                            ],
                            2: [
                                {
                                    type: 'subtitle',
                                    text: 'Income tax',
                                },
                                {
                                    type: 'text',
                                    text: 'The first type to break down:',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Income Tax',
                                        },
                                        {
                                            type: 'text',
                                            text: ' is a charge set by the government on the money made by a person or a business.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    withoutBorderRadius: true,
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_6-light.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_6_dark.png',
                                        },
                                    },
                                },
                                {
                                    type: 'image',
                                    withoutBorderRadius: true,
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_6-1light.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_6-1dark.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: 'In the UK, everyone paying taxes is grouped into categories, called "bands," depending on how much money they make. Each group pays taxes at a specific rate.',
                                },
                                {
                                    type: 'text',
                                    text: 'The key distinction between the tax systems of the US and the UK is that in the UK, taxes are determined based on your earnings after deducting a personal allowance of £12,570. If your income is this amount or lower, you owe no taxes.',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'If you make more than 100,000 pounds a year, your allowance starts to go down, dropping by one pound for every two pounds you earn above this amount, until it gets to zero. ',
                                        },
                                    ],
                                },
                            ],
                            3: [
                                {
                                    type: 'text',
                                    text: 'To simplify understanding this subject, please refer to the charts below which show the tax categories for 2023 and their corresponding tax percentages.',
                                },
                                {
                                    type: 'markerWithImage',
                                    textMode: true,
                                    data: [
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_4-1.png',
                                            text: '—  your annual salary, $2000',
                                        },
                                    ],
                                },
                                {
                                    type: 'imagesTap',
                                    imagesTheme: {
                                        light: {
                                            images: [
                                                {
                                                    imageUrl:
                                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_7light.png',
                                                },
                                                {
                                                    imageUrl:
                                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_8light.png',
                                                },
                                            ],
                                        },
                                        dark: {
                                            images: [
                                                {
                                                    imageUrl:
                                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_7dark.png',
                                                },
                                                {
                                                    imageUrl:
                                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_8dark.png',
                                                },
                                            ],
                                        },
                                    },
                                    textButton: 'Switch to UK',
                                    textButtonLastImage: 'Switch to USA',
                                },
                                {
                                    type: 'text',
                                    text: 'To clear up a common misunderstanding about all these tax rates:',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_9.png',
                                },
                            ],
                            4: [
                                {
                                    type: 'subtitle',
                                    text: 'Value-Added Tax',
                                },
                                {
                                    type: 'text',
                                    text: "It's a good idea to talk about VAT by looking at the two big economies separately because mixing them up can be confusing. First, let's explain what VAT means.",
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Value Added Tax (VAT)',
                                        },
                                        {
                                            type: 'text',
                                            text: ' is a wide-ranging tax on goods and services. It is charged based on how much the value of a product or service goes up when it is used or consumed.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: "This tax is straightforward — you pay based on the profit you expect to make (added value). In the United States, it's known as Sales Tax, and the amount changes depending on the state.",
                                },
                                {
                                    type: 'text',
                                    text: "In the United States, it's known as Sales Tax, and the amount changes depending on the state.",
                                },
                                {
                                    type: 'subtitle',
                                    text: 'US Sales Tax rates',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_10.png',
                                },
                                {
                                    type: 'text',
                                    text: "Extra tip: Sales tax can be tricky because it's usually not shown in the initial price, but it is added on when you pay.",
                                },
                            ],
                            5: [
                                {
                                    type: 'subtitle',
                                    text: "Here's what's going on in the UK:",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_11.png',
                                },
                                {
                                    type: 'text',
                                    text: 'Extra tip: The price you see already includes the VAT, so there are no extra charges.',
                                },
                                {
                                    type: 'text',
                                    text: "Yes, it's a bit tricky. Let's see what you've understood up to now.",
                                },
                            ],
                            6: [
                                {
                                    type: 'question',
                                    text: 'How is VAT usually gathered?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_taxes_basic_1',
                                    answers: [
                                        {
                                            label: 'Solely from companies',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'During different steps of making and selling products',
                                            answerDescription:
                                                '(VAT is generally gathered at several points from making to selling, from the producer to the store, before it gets to the final buyer)',
                                        },
                                        {
                                            label: 'Only from buyers',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'During different steps of making and selling products',
                                },
                                {
                                    type: 'text',
                                    text: "Let's switch to our next topic - Property Tax!",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_12.png',
                                },
                            ],
                            7: [
                                {
                                    type: 'subtitle',
                                    text: 'Property Tax',
                                },
                                {
                                    type: 'text',
                                    text: "The name is quite clear on its own. However, let's first see how good your instincts are:",
                                },
                                {
                                    type: 'answersRadio',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_13.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_14.png',
                                    ],
                                    textQuestion: 'What is the main goal of Property Tax?',
                                    questionId: 'personal_finance_taxes_basic_2',
                                    answers: [
                                        {
                                            label: 'To support national defense',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'To pay for community services',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'To boost spending by consumers',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'To pay for community services',
                                },
                            ],
                            8: [
                                {
                                    type: 'text',
                                    text: 'Here is a simple explanation:',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Property tax is a tax that you have to pay based on the worth of real estate, which includes land, houses, and business properties. ',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'In the US, the amount of property tax depends on the area and the appraised value of a house. This tax pays for things like schools and public safety, and homeowners pay it every year.',
                                },
                                {
                                    type: 'text',
                                    text: 'In the UK, a similar tax called Council Tax is charged, which also depends on the value of the home and varies by location.',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "While we've looked at two big economies, remember that their rules might not match your local laws. Make sure to do more research yourself! ",
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_15.png',
                                },
                            ],
                            9: [
                                {
                                    type: 'subtitle',
                                    text: 'Key Points to Note',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'There are three basic types of taxes: those on your income, your possessions, and your purchases.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Income Tax is charged on the money you make, with people earning more paying a higher rate.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'VAT is a broad tax that applies to the increased value of goods and services. Property Tax is charged based on the worth of property and mainly supports local community services.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L1_16.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.PERSONAL_FINANCE_ABOUT_TAXES_BASICS_2,
                title: 'Key Tax Types to Understand',
                theme: 'finance',
                subTheme: 'Taxes Basics',
                resizeMode: 'contain',
                bgPosition: 150,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_1_new.png',
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            'Which tax system is the fairest? And which one is the most popular? This lesson will cover three major tax systems, discuss their benefits and drawbacks, and look at examples of countries that implement them.',
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'text',
                                    text: 'Taxation is more than a concept; it plays a crucial role in shaping economies and affects how people live.',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Each country has its own group of taxes that create its tax system.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_2.png',
                                },
                                {
                                    type: 'text',
                                    text: 'Some nations favor a single type of tax, whereas others use a mix of taxes. However, we need to explore further to grasp the connection between taxes, government revenue, economic balance, and fairness in society.',
                                },
                                {
                                    type: 'text',
                                    text: 'In this lesson, we will concentrate on three major tax systems.',
                                },
                                {
                                    type: 'text',
                                    text: "Let's introduce our main players:",
                                },
                                {
                                    type: 'imagesGrid',
                                    imagesUrl: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_3.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_4.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_5.png',
                                    ],
                                    width: 93,
                                    height: 121,
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_6.png',
                                },
                                {
                                    type: 'text',
                                    text: "Alright, let's get into the specifics now!",
                                },
                            ],
                            2: [
                                {
                                    type: 'subtitle',
                                    text: 'Regressive Tax System',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "Let's picture a magical land where tax policies are like characters in a story. Regressive taxes are similar to a bad guy, the Sheriff of Nottingham — ",
                                        },
                                        {
                                            type: 'bold',
                                            text: 'they take more money proportionally from people who earn less.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_7.png',
                                },
                                {
                                    type: 'text',
                                    text: 'This means that if you make less money, you end up paying a larger part of your income in taxes. This kind of tax system is usually seen with Sales Tax, Excise Tax, and sometimes Property Tax.',
                                },
                                {
                                    type: 'text',
                                    text: "Here's what you should understand about the Regressive Tax System:",
                                },
                                {
                                    type: 'textWithImage',
                                    texts: [
                                        {type: 'title', text: 'Ease:'},
                                        {
                                            type: 'description',
                                            text: 'Easy to handle since it typically involves a constant percentage of the cost.',
                                        },
                                        {type: 'title', text: 'Expenditure management:'},
                                        {
                                            type: 'description',
                                            text: 'Helps curb excessive spending on luxury goods.',
                                        },
                                    ],
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_8.png',
                                },
                                {
                                    type: 'textWithImage',
                                    texts: [
                                        {type: 'title', text: 'Disparity:'},
                                        {
                                            type: 'description',
                                            text: 'May make things tougher for people with less money.',
                                        },
                                        {type: 'title', text: 'Backward Impact:'},
                                        {
                                            type: 'description',
                                            text: 'Essential items such as food and utilities are taxed, which hits those earning less harder.',
                                        },
                                    ],
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_9.png',
                                },
                                {
                                    type: 'textWithImage',
                                    texts: [
                                        {type: 'title', text: 'The United States:'},
                                        {
                                            type: 'description',
                                            text: 'Several states in the USA depend a lot on regressive sales tax.',
                                        },
                                        {
                                            type: 'description',
                                            text: 'Many developing countries, such as Brazil, India, and Indonesia, use regressive taxes to raise money and reduce spending on complicated systems.',
                                        },
                                    ],
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_10.png',
                                },
                            ],
                            3: [
                                {
                                    type: 'question',
                                    text: 'What are the downsides of a regressive tax system besides affecting overall revenue?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_taxes_basic_3',
                                    answers: [
                                        {
                                            label: 'Motivating wealthier people to reduce their income.',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Excessive spending on reducing social dangers.',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Leading to greater social inequality.',
                                            answerDescription:
                                                '(This type of tax system can increase social inequities because it impacts lower-income individuals more, which could cause upset and unhappiness among the population.)',
                                        },
                                    ],
                                    correctAnswer: 'Leading to greater social inequality.',
                                },
                            ],
                            4: [
                                {
                                    type: 'subtitle',
                                    text: 'Proportional Tax System',
                                },
                                {
                                    type: 'text',
                                    text: 'As we navigate the narrative of taxes, we encounter the proportional tax system, also known as the ideal middle ground like Goldilocks. Taxes are ancient. Commonly called "flat taxes," they used to be the top choice because they apply a uniform percentage to everyone\'s income, regardless of the amount.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_11.png',
                                },
                                {
                                    type: 'text',
                                    text: "Here's what you should understand about the Proportional Tax System:",
                                },
                                {
                                    type: 'textWithImage',
                                    texts: [
                                        {type: 'title', text: 'Simplicity:'},
                                        {
                                            type: 'description',
                                            text: 'Straightforward and easy to manage.',
                                        },
                                        {type: 'title', text: 'Equality:'},
                                        {
                                            type: 'description',
                                            text: 'All individuals contribute the same portion of their earnings.',
                                        },
                                    ],
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_8.png',
                                },
                                {
                                    type: 'textWithImage',
                                    texts: [
                                        {type: 'title', text: 'Heavy Load Despite Equal Rate:'},
                                        {
                                            type: 'description',
                                            text: 'Even though everyone pays the same percentage, it can be tougher on people with less money.',
                                        },
                                    ],
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_9.png',
                                },
                                {
                                    type: 'textWithImage',
                                    texts: [
                                        {
                                            type: 'description',
                                            text: 'A few Eastern European nations such as Ukraine and Lithuania use a single tax rate on all income.',
                                        },
                                    ],
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_10.png',
                                },
                            ],
                            5: [
                                {
                                    type: 'question',
                                    text: 'Why do only a few advanced nations use a flat tax rate, even though it represents fairness?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_taxes_basic_4',
                                    answers: [
                                        {
                                            label: 'The flat tax rate is currently not widely used.',
                                            answerDescription: '',
                                        },
                                        {
                                            label:
                                                'It can lead to an excessive amount of foreign investment in the economy.',
                                            answerDescription: '',
                                        },
                                        {
                                            label:
                                                'It might not generate sufficient funds for crucial government services.',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer:
                                        'It might not generate sufficient funds for crucial government services.',
                                },
                            ],
                            6: [
                                {
                                    type: 'subtitle',
                                    text: "Let's explore the reasons",
                                },
                                {
                                    type: 'text',
                                    text: 'Today’s countries need significant funds, often sourced from a flat tax system.',
                                },
                                {
                                    type: 'text',
                                    text: 'This connects to problems such as the uneven financial strain on people with lower incomes, along with political and social elements. Moreover, such a tax model often ends up unfairly affecting poorer individuals.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_12.png',
                                },
                            ],
                            7: [
                                {
                                    type: 'subtitle',
                                    text: 'Progressive Taxes',
                                },
                                {
                                    type: 'text',
                                    text: "Continuing our magical story about taxes, we shouldn't forget Robin Hood, the champion of the people. Next, let's explore the Progressive Tax System. ",
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Just like the fabled hero, ',
                                        },
                                        {
                                            type: 'bold',
                                            text: 'this method takes more money in taxes from those who have more money.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_13.png',
                                },
                                {
                                    type: 'text',
                                    text: 'This approach is commonly tied to Income Tax, meaning that the more money you make, the more you will be taxed. ',
                                },
                                {
                                    type: 'text',
                                    text: 'Here are the key points to understand about the Progressive Tax System:',
                                },
                                {
                                    type: 'textWithImage',
                                    texts: [
                                        {type: 'title', text: 'Equality'},
                                        {
                                            type: 'description',
                                            text: 'Aids in wealth distribution by imposing greater taxes on those who earn more.',
                                        },
                                        {type: 'title', text: 'Welfare services'},
                                        {
                                            type: 'description',
                                            text: 'Fund crucial community services such as medical care, schools, and social support.',
                                        },
                                    ],
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_8.png',
                                },
                                {
                                    type: 'textWithImage',
                                    texts: [
                                        {type: 'title', text: 'Complication'},
                                        {
                                            type: 'description',
                                            text: 'Can be complicated and hard to manage.',
                                        },
                                        {type: 'title', text: 'Potential Deterrence'},
                                        {
                                            type: 'description',
                                            text: 'Wealthy individuals might be deterred from making more money due to higher tax rates.',
                                        },
                                    ],
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_9.png',
                                },
                                {
                                    type: 'textWithImage',
                                    texts: [
                                        {
                                            type: 'description',
                                            text: 'Countries like Sweden, Denmark, and Norway use a progressive tax system where the money collected helps pay for extensive social services.',
                                        },
                                        {
                                            type: 'description',
                                            text: 'In the United States, the more money you make, the higher the percentage you pay in taxes, which is also a form of progressive taxation.',
                                        },
                                    ],
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_10.png',
                                },
                                {
                                    type: 'text',
                                    text: 'Picture yourself living a luxurious life with a yearly income of one million US dollars (yay!).',
                                },
                            ],
                            8: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_14.png',
                                },
                                {
                                    type: 'question',
                                    text: 'Which tax system is best for saving money?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_taxes_basic_5',
                                    answers: [
                                        {
                                            label: "Visit Robin Hood's party for progressive taxes.",
                                            answerDescription: '',
                                        },
                                        {
                                            label: "Go to Goldilocks' event for flat-rate taxes.",
                                            answerDescription: '',
                                        },
                                        {
                                            label: "Stop by the Sheriff of Nottingham's gathering for regressive taxes.",
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: "Visit Robin Hood's party for progressive taxes.",
                                },
                            ],
                            9: [
                                {
                                    type: 'subtitle',
                                    text: 'Things to remember',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'There are three types of tax systems: regressive, proportional, and progressive, each affecting people differently.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'In a regressive tax system, people who earn less pay a higher proportion of their income, which can increase income inequality.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'A flat tax system levies the same rate on everyone, which is straightforward but can be tough on those earning less.',
                                        },
                                        {
                                            type: 'marker',
                                            text: "A progressive tax system imposes higher rates on wealthier individuals to lessen inequality, though it's not without its shortcomings and complications.",
                                        },
                                    ],
                                },
                                {
                                    type: 'imagesGridPreviewer',
                                    imagesGrid: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_16.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_17.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_18.png',
                                    ],
                                    imagesPreview: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_15.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_13.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_11.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L2_7.png',
                                    ],
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.PERSONAL_FINANCE_ABOUT_TAXES_BASICS_3,
                title: 'Three Easy Tax Tips',
                theme: 'finance',
                subTheme: 'Taxes Basics',
                resizeMode: 'contain',
                bgPosition: 150,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_1_new.png',
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            'The word "taxes" might make you nervous.\n\nHowever, don\'t worry, we\'re going to make understanding taxes much easier and clearer.',
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'Tip #1: Be aware of and keep a record of your tax information.',
                                },
                                {
                                    type: 'text',
                                    text: "Before we start doing any math, we need to realize that taxes don't work the same way for everyone.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_2.png',
                                    width: 206,
                                },
                                {
                                    type: 'subtitle',
                                    text: 'So:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Learn about the tax rules where you live because they can vary by place.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Familiarize yourself with common tax terms to prevent mistakes.',
                                        },
                                        {
                                            type: 'marker',
                                            text: "Figure out what kinds of taxes you owe and how they're figured out.",
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Always document your expenses, like what you buy and other costs. These details are essential for figuring out your taxes.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Keep track of your finances using anything from online banking, to spreadsheets, to simple notebooks.',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Here are some common kinds of taxes you may have to pay.',
                                },
                                {
                                    type: 'carousel',
                                    resizeMode: 'contain',
                                    width: 337,
                                    height: 182,
                                    bottomButtonMode: true,
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_3.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_4.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_5.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_6.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_7.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_8.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_9.png',
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'We advise you to see a tax professional to help you with your specific financial needs.',
                                },
                            ],
                            2: [
                                {
                                    type: 'subtitle',
                                    text: 'Tip #2: Get Close to Tax Breaks and Discounts',
                                },
                                {
                                    type: 'text',
                                    text: "Have you ever thought about what deductions are and how to figure them out? It's easier than you might think. Basically, not all the money you make and spend is subject to taxes.",
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Tax deductions are costs that either people or companies can deduct from their overall earnings to lower the amount of tax they need to pay.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'There are two primary kinds of deductions:',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_10-11.png',
                                    width: 250,
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Standard Deduction:',
                                        },
                                        {
                                            type: 'text',
                                            text: " Many people use this because it changes based on whether you're single, married, etc. It's easy to use, especially if you don't have many individual deductions.\n",
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Itemized Deduction:',
                                        },
                                        {
                                            type: 'text',
                                            text: ' These involve taking off certain costs from your taxable pay, such as interest on your home loan, medical expenses, donations to charity, and costs related to property business.',
                                        },
                                    ],
                                },
                            ],
                            3: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_13.png',
                                    width: 90,
                                },
                                {
                                    type: 'question',
                                    text: 'Which of the choices below should qualify for a tax deduction?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_taxes_basic_6',
                                    answers: [
                                        {
                                            label: 'Costs of a leisure trip to Hawaii',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Payments for health insurance',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Golf club membership dues',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'Payments for health insurance',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_14.png',
                                },
                            ],
                            4: [
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'A tax credit lets taxpayers reduce the amount of money they owe in taxes by directly subtracting the credit from their total tax bill.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Tax credits are popular in many advanced nations and they cover areas such as:',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Child Tax Credit, which helps parents manage the expenses of raising children.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Education Tax Credit, aimed at reducing the costs of education for students and their parents.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Charitable Contribution Credits, which encourage people to give money to charitable groups.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: 'Tap for deduction and credit navigation tips',
                                        },
                                    ],
                                },
                                {
                                    type: 'flippedImage',
                                    width: 160,
                                    height: 160,
                                    bgColor: '#C6EAFF',
                                    colorText: '#002A42',
                                    data: [
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_15.png',
                                            text: 'Learn about the basic tax deductions and credits that fit your financial circumstances',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_16.png',
                                            text: 'Look online for tax credits or deductions that apply to your situation',
                                        },
                                    ],
                                },
                            ],
                            5: [
                                {
                                    type: 'subtitle',
                                    text: 'Tip 3: Always meet your deadlines',
                                },
                                {
                                    type: 'text',
                                    text: "Handling your taxes is similar to following traffic signals — skipping them doesn't harm you physically, but it does put your financial health at risk.",
                                },
                                {
                                    type: 'text',
                                    text: 'Looking for a hint? Click on a coin to learn about when taxes are due.',
                                },
                                {
                                    type: 'imagesPreviewer',
                                    image: {
                                        imageUrl:
                                            'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_17.png',
                                        width: 162,
                                    },
                                    preview: {
                                        imageUrl:
                                            'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_18.png',
                                    },
                                },
                            ],
                            6: [
                                {
                                    type: 'subtitle',
                                    text: 'Important Points',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Learn about the tax laws in your area thoroughly.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Use any available tools and resources to assist you with tax preparation.',
                                        },
                                        {
                                            type: 'marker',
                                            text: "Don't hesitate to get advice from experts. Experienced tax professionals can offer valuable guidance and clarify things for you.",
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Remember to set deadlines, adhere to rules, and make wise decisions.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L3_19.png',
                                    width: 150,
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.PERSONAL_FINANCE_ABOUT_TAXES_BASICS_QUIZ,
                title: 'Work on these tax problems',
                theme: 'finance',
                subTheme: 'Taxes Basics',
                resizeMode: 'contain',
                bgPosition: 150,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L4_1_new.png',
                content: [
                    {
                        type: 'pre-quiz',
                        time: '5 min',
                        students: 100,
                        description:
                            'Try out what you know about taxes, their different forms, and how they work, and become an expert on taxes yourself!',
                    },
                    {
                        type: 'quiz',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'Task №1',
                                },
                                {
                                    type: 'text',
                                    text: 'Hello and welcome to our tax challenge!',
                                },
                                {
                                    type: 'text',
                                    text: "We'll kick off with an initial task to check your understanding.",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L4_2.png',
                                },
                            ],
                            2: [
                                {
                                    type: 'question',
                                    text: 'What are taxes?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_taxes_basic_quiz_1',
                                    answers: [
                                        {
                                            label: 'A way to invest money',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Optional donations to the government',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Required payments to support government operations and services',
                                            answerDescription:
                                                'Taxes are charges that the government requires individuals to pay to help the country operate properly. They are obligatory.',
                                        },
                                        {
                                            label: 'Price reductions on items you buy',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'Required payments to support government operations and services',
                                },
                            ],
                            3: [
                                {
                                    type: 'subtitle',
                                    text: 'Task №2',
                                },
                                {
                                    type: 'text',
                                    text: 'Pay attention to this description:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: '“This amount reflects what’s left of your income after paying all expenses, deductions, and taxes.”',
                                        },
                                    ],
                                },
                                {
                                    type: 'question',
                                    text: 'What are we talking about?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_taxes_basic_quiz_2',
                                    answers: [
                                        {
                                            label: 'Unearned Income',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Net income',
                                            answerDescription:
                                                'In finance, the "Net" usually refers to the final profit amount. This means that Net Income is the amount of money earned after all costs, deductions, and taxes have been subtracted.',
                                        },
                                        {
                                            label: 'Passive Income',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Gross income',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'Net income',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L4_3.png',
                                },
                            ],
                            4: [
                                {
                                    type: 'subtitle',
                                    text: 'Task №3',
                                },
                                {
                                    type: 'text',
                                    text: "The next tax question will be a bit harder. Let's keep up the energy!",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L4_4.png',
                                },
                                {
                                    type: 'question',
                                    text: 'Which option best explains Sales Tax (or Value-Added Tax)?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_taxes_basic_quiz_3',
                                    answers: [
                                        {
                                            label: "It's only applied to the profits companies make",
                                            answerDescription: '',
                                        },
                                        {
                                            label:
                                                'It represents the entire cost of a product or service that accumulates at every step of production',
                                            answerDescription:
                                                'At each stage of the supply chain, companies apply a tax depending on the value they add to the product. This tax is not only paid by consumers, but it is also applied to almost every item meant for sale to make a profit.',
                                        },
                                        {
                                            label: 'It’s a one-time levy paid by customers when they buy items',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer:
                                        'It represents the entire cost of a product or service that accumulates at every step of production',
                                },
                            ],
                            5: [
                                {
                                    type: 'subtitle',
                                    text: 'Task №4',
                                },
                                {
                                    type: 'text',
                                    text: 'The next tax problem promises to be even more interesting. Are you ready to take it on?',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L4_5.png',
                                },
                                {
                                    type: 'question',
                                    text: 'What are the three main types of tax systems used globally?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_taxes_basic_quiz_4',
                                    answers: [
                                        {
                                            label: 'Growth, Shrinking, Stable',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Regressive, Progressive, Proportional',
                                            answerDescription:
                                                'They describe how tax rates can change. Regressive for decreasing rates, Progressive for increasing rates, and Proportional for consistent rates.',
                                        },
                                        {
                                            label: 'Defensive, Aggressive, Possessive',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'Regressive, Progressive, Proportional',
                                },
                            ],
                            6: [
                                {
                                    type: 'subtitle',
                                    text: 'Task №5',
                                },
                                {
                                    type: 'text',
                                    text: 'The Progressive Tax System appears to be the most equitable method, however, nothing in life is flawless.',
                                },
                                {
                                    type: 'answersRadio',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L4_6.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L4_7.png',
                                    ],
                                    textQuestion: 'What are the potential disadvantages of a Progressive Tax System?',
                                    questionId: 'personal_finance_taxes_basic_quiz_5',
                                    answers: [
                                        {
                                            label: 'It can be difficult to set up and keep running',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'People who earn a lot might not want to increase their earnings',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'People who earn less might need to pay more',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer: 'People who earn a lot might not want to increase their earnings',
                                },
                            ],
                            7: [
                                {
                                    type: 'text',
                                    text: 'This method suggests that the more money you make, the more taxes you pay.',
                                },
                                {
                                    type: 'text',
                                    text: 'High earners might feel discouraged from earning more because they have to pay higher taxes.',
                                },
                                {
                                    type: 'text',
                                    text: 'This negative effect could be harmful because the Progressive Tax System normally helps pay for important public services in a more generous and fair way.',
                                },
                                {
                                    type: 'flippedImage',
                                    data: [
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L4_8.png',
                                            text: 'Health service',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L4_9.png',
                                            text: 'Social security',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L4_10.png',
                                            text: 'Education',
                                        },
                                    ],
                                },
                            ],
                            8: [
                                {
                                    type: 'subtitle',
                                    text: 'Congrats!',
                                },
                                {
                                    type: 'text',
                                    text: "You've successfully completed the Tax Quiz!",
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L4_11.png',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                id: LESSONS_ID.PERSONAL_FINANCE_ABOUT_TAXES_BASICS_5,
                title: 'What is the use of paying taxes?',
                theme: 'finance',
                subTheme: 'Taxes Basics',
                bgPosition: 50,
                imageUrl:
                    'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_1.png',
                content: [
                    {
                        type: 'pre-lesson',
                        time: '5 min',
                        students: 100,
                        description:
                            "We have mixed feelings about them, but they are essential. It's time to explore the fundamentals of taxes. With our guidance, you can increase your understanding of this subject and learn useful methods to apply this knowledge.",
                    },
                    {
                        type: 'lessons',
                        pages: {
                            1: [
                                {
                                    type: 'subtitle',
                                    text: 'A Short Overview of Taxation History',
                                },
                                {
                                    type: 'text',
                                    text: "For many of us, taxes are something we know about and handle regularly. Therefore, it's important to know some basics about them.",
                                },
                                {
                                    type: 'text',
                                    text: 'This guy might be able to explain:',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_2.png',
                                    width: 250,
                                },
                                {
                                    type: 'text',
                                    text: 'This guy was certainly aware of something important.',
                                },
                                {
                                    type: 'text',
                                    text: 'Records show that taxes have been around for thousands of years. The earliest sign of a tax system was seen in Ancient Egypt during the Old Kingdom period around 3000 BCE.',
                                },
                            ],
                            2: [
                                {
                                    type: 'text',
                                    text: 'At that time, the Pharaoh would travel around the nation every two years, gathering a share of the crops as a form of grain tax.',
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_3.png',
                                },
                                {
                                    type: 'markerWithImage',
                                    lineColors: ['#F3CD36', '#FD8600'],
                                    data: [
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_4-1.png',
                                            text: 'Taxes have been around in Europe since 100 years before the year 1.',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_4-1.png',
                                            text: 'Julius Caesar set a tax of 1% on every purchase within the Roman Empire.',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_4-1.png',
                                            text: 'In the U.S., the constitution was amended in 1913 to include Federal Income Tax.',
                                        },
                                    ],
                                },
                            ],
                            3: [
                                {
                                    type: 'subtitle',
                                    text: 'How taxes impact our daily lives',
                                },
                                {
                                    type: 'text',
                                    text: "History has had many different terms for taxes, like tithes, levies, and duties, but these names have changed over time. Even though much has evolved in today's world, the basic idea of taxes has stayed the same.",
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: "Taxes are charges that the government places on citizens to help pay for the nation's needs.",
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_5.png',
                                    width: 170,
                                },
                            ],
                            4: [
                                {
                                    type: 'question',
                                    text: 'Why are taxes important?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_taxes_basic_7',
                                    answers: [
                                        {
                                            label: 'To share money with people who earn less',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'To pay for important services for everyone',
                                            answerDescription:
                                                "The main job of the government is to make sure that the country's basic needs and important activities are taken care of by providing necessary public services.",
                                        },
                                        {
                                            label: 'To make income differences bigger',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'To promote buying things',
                                            answerDescription: 'To promote buying things',
                                        },
                                    ],
                                    correctAnswer: 'To pay for important services for everyone',
                                },
                            ],
                            5: [
                                {
                                    type: 'subtitle',
                                    text: 'Click to discover other main purposes of taxes',
                                },
                                {
                                    type: 'flippedImage',
                                    width: 156,
                                    height: 153,
                                    bgColor: '#FFDF6D',
                                    colorText: '#000000',
                                    borderRadius: 100,
                                    data: [
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_4-1.png',
                                            imageBg:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_6.png',
                                            text: 'Reallocate financial resources',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_4-1.png',
                                            imageBg:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_7.png',
                                            text: 'Fund Public Services and Institutions',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_4-1.png',
                                            imageBg:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_8.png',
                                            text: 'Preserve financial stability',
                                        },
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_4-1.png',
                                            imageBg:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_9.png',
                                            text: 'Fund Nationwide Behavioral Policies',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'Certainly, how the government spends taxpayer money covers a variety of aims unique to each country. But keep in mind:',
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'The primary objective of using taxes is always consistent — to enhance the well-being of the people in that country.',
                                        },
                                    ],
                                },
                            ],
                            6: [
                                {
                                    type: 'subtitle',
                                    text: 'Gross and net income = Total and Take-Home Pay',
                                },
                                {
                                    type: 'text',
                                    text: "Now that we've explained the function of taxes in society, let's discuss other important aspects of taxes — gross and net incomes.",
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Gross income is the total amount of money earned before any deductions and taxes are taken out.',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    footnote: true,
                                    texts: [
                                        {
                                            type: 'text',
                                            text: 'Net income is the amount of money left after all deductions and taxes have been subtracted.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_10.png',
                                    width: 250,
                                },
                                {
                                    type: 'text',
                                    text: 'Understanding these principles is crucial to steer clear of tax issues and to effectively manage your financial resources. Consider, for example, that you make $2,000 a month and have to pay an annual Income Tax of 25%, with no reductions or extra taxes.',
                                },
                            ],
                            7: [
                                {
                                    type: 'question',
                                    text: 'How much money do you make in a year after all deductions (net income)?',
                                },
                                {
                                    type: 'answersRadio',
                                    questionId: 'personal_finance_taxes_basic_8',
                                    answers: [
                                        {
                                            label: '$24,000',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '$22,000',
                                            answerDescription: '',
                                        },
                                        {
                                            label: '$18,000',
                                            answerDescription: "Your income would be exactly $18,000. Let's see why. ",
                                        },
                                    ],
                                    correctAnswer: '$18,000',
                                },
                            ],
                            8: [
                                {
                                    type: 'markerWithImage',
                                    textMode: true,
                                    data: [
                                        {
                                            image:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_4-1.png',
                                            text: '—  your annual salary, $2000',
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    text: 'To count the right answer, start by calculating your gross yearly income:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: '$2, 000 * 12 = $24, 000',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imagesTheme: {
                                        light: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_10-1.png',
                                        },
                                        dark: {
                                            imageUrl:
                                                'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_10-1-1.png',
                                        },
                                    },
                                },
                                {
                                    type: 'text',
                                    text: 'And then the taxation:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: '25% = $6,000',
                                        },
                                    ],
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'bold',
                                            text: '$24, 000 — $6, 000 = $18, 000',
                                        },
                                    ],
                                },
                            ],
                            9: [
                                {
                                    type: 'subtitle',
                                    text: 'Is it possible to not pay taxes?',
                                },
                                {
                                    type: 'text',
                                    text: 'What are your first thoughts on this?',
                                },
                                {
                                    type: 'answersRadio',
                                    images: [
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_11.png',
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_12.png',
                                    ],
                                    width: 170,
                                    textQuestion: 'Is it possible to avoid paying taxes to the government?',
                                    questionId: 'personal_finance_taxes_basic_9',
                                    answers: [
                                        {
                                            label: 'Definitely! Just stash all your cash under your bed.',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'No way! Taxes are relentless — they will always catch up with you.',
                                            answerDescription: '',
                                        },
                                        {
                                            label: 'Yes, you don’t earn enough to owe taxes.',
                                            answerDescription: '',
                                        },
                                    ],
                                    correctAnswer:
                                        'No way! Taxes are relentless — they will always catch up with you.',
                                },
                                {
                                    type: 'text',
                                    text: "Taxes must be paid, and it's illegal to dodge them by methods like tax evasion.",
                                },
                            ],
                            10: [
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_13.png',
                                    width: 250,
                                },
                                {
                                    type: 'text',
                                    text: 'But there are legitimate methods to reduce how much tax you owe by using deductions and credits the tax rules allow.',
                                },
                                {
                                    type: 'text',
                                    text: "We'll cover this in a future lesson, don't worry!",
                                },
                            ],
                            11: [
                                {
                                    type: 'subtitle',
                                    text: 'Key Points to Keep in Mind:',
                                },
                                {
                                    type: 'textWithStyles',
                                    texts: [
                                        {
                                            type: 'marker',
                                            text: 'Taxes have been around since 3000 BCE in ancient Egypt.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Taxes pay for community services, help balance wealth, and keep the economy steady.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Gross income refers to your total earnings; net income is what you keep after taxes and other deductions.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Avoiding taxes on purpose is against the law, though there are legal ways to lower what you owe.',
                                        },
                                        {
                                            type: 'marker',
                                            text: 'Learning about taxes helps you handle your money better and helps support your community.',
                                        },
                                    ],
                                },
                                {
                                    type: 'image',
                                    imageUrl:
                                        'https://d33llhlxn8rt1z.cloudfront.net/personal_finance/taxes_basics/Finance_T_L5_14.png',
                                    width: 250,
                                },
                            ],
                        },
                    },
                ],
            },
        ],
    },
};

