var Mei = (function (name) {return name;}(Mei || {}));

/*
on load 
songlist.show
songlist.bootstrap
songdisplay.hide

song.onclick
songlist.hide
songdisplay.show
backarrow.show
backarrow.bootstrap

backarrow.onclick
songlist.show
songlist.bootstrap
songdisplay.hide

*/
Mei.Songs = (function () {
    // var bbb = function(id) {
    //  // // console.log("fired!");
    //  var elementPos = store.map(function(x) {return x.id; }).indexOf(id);
    //  // // console.log("element position is ", elementPos);
    //  var song = store[elementPos];

    //  var sname = song.name;
    //  var slyrics = song.lyrics;

    //  // // console.log(sname, " : ", slyrics);
    // };
    // =============================================
    var template = { 
        "id": "xxx",  
        "orig": "en",
        "name": "xxx", 
        "lyrics": [
            {
                "lang": "xx",
                "verses": [
                    [
                        ""
                    ]
                ],
                "choruses": [
                    [
                        ""
                    ]
                ]
                ,
                "bridges": [
                    [
                        ""
                    ]
                ]
            },
            {
                "lang": "xxx",
                "verses": [
                    [
                        ""
                    ]
                ],
                "choruses": [
                    [
                        ""
                    ]
                ]
                ,
                "bridges": [
                    [
                        ""
                    ]
                ]
            }
        ]
    }
    ;
    // =============================================

    var store = [
        { 
            "id": "our-god",  
            "name": "Our God", 
            "orig": "en",
            "lyrics": [
                {
                    "lang": "en",
                    "verses": [
                        [
                            "Water You turned into wine",
                            "Opened the eyes of the blind",
                            "There's no one like You",
                            "None like You",
                        ],
                        [
                            "Into the darkness You shine",
                            "Out of the ashes we rise",
                            "There's no one like You",
                            "None like You",
                        ]
                    ],
                    "choruses": [
                        [
                            "Our God is greater,",
                            "Our God is stronger",
                            "God You are higher than any other",
                            "Our God is Healer,",
                            "Awesome in power",
                            "Our God, Our God"
                        ]
                    ]
                    ,
                    "bridges": [
                        [
                            "And if our God is for us,",
                            "then who could ever stop us.",
                            "And if our God is with us,",
                            "then what could stand against.",
                        ]
                    ]
                },
                {
                    "lang": "ru",
                    "verses": [
                        [
                            "Воду Ты сделал вином",
                            "Кто слеп, увидел Твой свет",
                            "Ведь нет другого,",
                            "только Ты!",
                        ],
                        [
                            "Светом рассеял Ты тьму",
                            "Слабых поднял из пыли",
                            "Ведь нет другого,",
                            "только Ты!",
                        ]
                    ],
                    "choruses": [
                        [
                            "Наш Бог Великий,",
                            "Наш Бог Всесильный",
                            "Всех превосходнее в целом мире!",
                            "Наш Бог Целитель,",
                            "Чудный Спаситель",
                            "Наш Бог! Наш Бог!"
                        ]
                    ]
                    ,
                    "bridges": [
                        [
                            "Кто может победить нас,",
                            "Когда Господь живёт в нас",
                            "И если Бог за нас,",
                            "Никто не победит",
                        ]
                    ]
                }
            ]
        },
        { 
            "id": "you-are-worthy",  
            "orig": "en",
            "name": "You are worthy", 
            "lyrics": [
                {
                    "lang": "en",
                    "verses": [
                        [
                            "Any crown I've ever worn I lay it down",
                            "Any praise I've ever gained",
                            "I give it all to You",
                            "For there's nothing in this world",
                            "that can compare",
                            "For You alone are worthy (x2)"
                        ],
                        [
                            "You are near to all who call upon Your name",
                            "Ever givin', ever loving You remain the same",
                            "For You open up Your hand And satisfy",
                            "give You all the glory",
                            "give You all the glory!"
                        ]
                    ],
                    "choruses": [
                        [
                            "You are worthy, oh Lord, of all honour",
                            "You are worthy to receive all praise",
                            "In Your presence I live",
                            "And with all I have to give",
                            "I will worship You"
                        ]
                    ],
                    "bridges": [
                        [
                            "I will worship You",
                            "Honour You",
                            "Glorify Your holy name",
                            "(x2)",
                        ]
                    ]
                },
                {
                    "lang": "ru",
                    "verses": [
                        [
                            "Все награды и венцы свои отдам",
                            "Все заслуги и хвалу кладу я",
                            "пред Тобой",
                            "Ведь подобного Тебе не видел мир.",
                            "Лишь Ты Один достоин.",
                            "Ты Один достоин."
                        ],
                        [
                            "Близок Ты ко всем, кто Имя Твоё чтит",
                            "Вечно щедрый, вечно любящий,",
                            "всё Тот же Ты.",
                            "И за то, что жизнь мою насытил Ты",
                            "Воздам Тебе всю славу (x2)"
                        ]
                    ],
                    "choruses": [
                        [
                            "Ты достоин, о, Бог, высшей славы.",
                            "Ты достоин, Бог, принять всю честь.",
                            "Я живу для Тебя",
                            "И всем, что есть внутри меня ",
                            "Поклоняюсь я."
                        ]
                    ],
                    "bridges": [
                        [
                            "Поклоняюсь я. ",
                            "Чту Тебя,",
                            "Славлю я Тебя,",
                            "Мой Бог",
                            "(x2)"
                        ]
                    ]
                }
            ]
        },
        { 
            "id": "v-glubine-tvoih-sinih-glaz",
            "orig": "ru",  
            "name": "В глубине твоих синих глаз", 
            "lyrics": [
                {
                    "lang": "ru",
                    "verses": [
                        [
                            "В глубине Твоих синих глаз",
                            "В ритме Сердца Того,",
                            "Кто есть Жизнь",
                            "Утонуть хочу.",
                            "Раствориться хочу. (x2)"
                        ],
                        [
                            "В тихом веянии и в шуме дождя",
                            "В объятиях Того,",
                            "Кто – Любовь",
                            "Затеряться хочу.",
                            "Ой, хочу. (x2)"
                        ],
                        [
                            "В нежном голосе и в запахе трав",
                            "В аромате цветов – узкий путь",
                            "Я идти хочу.",
                            "Я хочу не уснуть. (x2)"
                        ],
                        [
                            "В тесноте, только не без Тебя",
                            "В стуке молота и в жаре огня",
                            "Я согреться хочу.",
                            "Ой, хочу. (x2)"
                        ]
                    ],
                    "choruses": [
                        [
                            "А я к Тебе иду,",
                            "Твоей Милостью прощённый",
                            "А я к Тебе стремлюсь,",
                            "Благодатью спасён",
                            "А я к Тебе бегу.",
                            "Твоей Раной исцелённый"
                        ],
                        [
                            "Я Тобой захвачен в Плен",
                            "В моём сердце сотни стрел",
                            "Твоей Любви."
                        ]
                    ]
                }
            ]
        },
        { 
            "id": "scandal-of-grace",
            "orig": "en",  
            "name": "Scandal of Grace", 
            "lyrics": [
                {
                    "lang": "ru",
                    "verses": [
                        [
                            "Как постичь Благодать,",
                            "Что смогла за меня смерть принять?",
                            "Безвинной осуждена,",
                            "Мой грех смыла Кровью Она"
                        ],
                        [
                            "Любовь Твою не обьяснить.",
                            "Ты смерть приняла, чтобы мне жить.",
                            "Христа Благодать, тебя не понять",
                            "Ты - непостижима."
                        ],
                        [
                            "Смерть, где жало твоё?",
                            "Мертво, как распятый мой грех!",
                            "И Крест - жертва за всех-",
                            "Учит Милости. Сердце  поёт." 
                        ],
                        [
                            "В день скорби Тебя дай призвать,",
                            "И Силу мне даст Благодать.",
                            "Христа Благодать, тебя не понять" ,
                            "Ты - непостижима"
                        ]
                    ],
                    "choruses": [
                        [
                            "О, всё отдам я," ,
                            "чтобы подобным Тебе стать",
                            "Иисус, так жажду Тебя знать.",
                            "Сердце навеки с Тобой."
                        ]
                    ],
                    "bridges": [
                        [
                            "Ведь это всё сделал Иисус мой!",
                            "Ведь всё сделал Иисус мой!",
                            "Любовь Себя отдала",
                            "Чтобы Жизнь мне дать"
                        ]
                    ]
                },
                {
                    "lang": "en",
                    "verses": [
                        [
                            "Grace, what have you done?",
                            "Murdered for me on that cross",
                            "Accused in absence of wrong",
                            "My sin washed away in Your blood"
                        ],
                        [
                            "Too much to make sense of it all",
                            "I know that Your love breaks my fall",
                            "The scandal of grace, You died in my place",
                            "So my soul will live"
                        ],
                        [
                            "Death, where is your sting?",
                            "Your power is as dead as my sin",
                            "The Cross has taught me to live",
                            "And mercy, my heart now to sing"
                        ],
                        [
                            "The day and its troubles shall come",
                            "I know that Your strength is enough",
                            "The scandal of grace, You died in my place",
                            "So my soul will live"
                        ]
                    ],
                    "choruses": [
                        [
                            "Oh to be like You",
                            "Give all I have just to know You",
                            "Jesus there's no one beside You",
                            "Forever the Hope in my heart"
                        ]
                    ],
                    "bridges": [
                        [
                            "And it's all because of You, Jesus",
                            "It's all because of You, Jesus",
                            "It's all because of Your love",
                            "That my soul will live"
                        ]
                    ]
                }
            ]
        },
        { 
            "id": "staryj-krest",  
            "orig": "ru",
            "name": "Старый крест (На далёком холме)", 
            "lyrics": [
                {
                    "lang": "ru",
                    "verses": [
                        [
                            "На далеком холме, средь деревьев и скал",
                            "Сквозь седые века старый крест простоял.",
                            "Миллионы людей  у подножья креста",
                            "Свое счастье нашли, там однажды был я."
                        ],
                        [
                            "Между небом святым и греховной землей",
                            "Пропасть злая лежит, разделяя собой.",
                            "Хочешь верь, хочешь нет, слушай слово Творца.",
                            "Крест - единственный мост от земли в небеса."
                        ],
                        [
                            "Иисус дорогой, у подножья креста",
                            "На далеком холме я увидел Тебя:",
                            "На пронзенных руках не застывшая кровь,",
                            "А в прекрасных глазах Божья к людям любовь."
                        ]
                    ],
                    "choruses": [
                        [
                            "Старый крест, старый крест,",
                            "Неброский, но лишь в нём",
                            "Сила есть, сила есть, сегодня может он",
                            "Исцелять разбитые, больные сердца,",
                            "Каждому пришедшему открыть небеса."
                        ]
                    ]
                }
            ]
        },
        { 
            "id": "ja-poznal-chto-velik-gospod",
            "orig": "ru",  
            "name": "Я познал, что велик Господь", 
            "lyrics": [
                {
                    "lang": "ru",
                    "verses": [
                        [
                            "Я познал, что велик Господь",
                            "Он превыше других богов,",
                            "Он творит всё что хочет",
                            "На небе и на земле."
                        ],
                        [
                            "Облака поднимает,",
                            "В шумном месте грохочет,",
                            "При дожде творит молнии,",
                            "Его слава везде."
                        ]
                    ],
                    "choruses": [
                        [
                            "Хвалите имя Господа", 
                            "в доме Бога нашего",
                            "Пойте Имени Его",
                            "Ибо это сладостно.",
                            "Аллилуйя, аллилуйя, Иисус!"
                        ]
                    ]
                    ,
                    "bridges": [
                        [
                            "Иисус - Господь над всей землей!",
                            "Иисус воскрес, и Он живой!"
                        ]
                    ]
                }
            ]
        },
        { 
            "id": "iisus-zhivoj",
            "orig": "ru",  
            "name": "Иисус живой (Короп)", 
            "lyrics": [
                {
                    "lang": "ru",
                    "verses": [
                        [
                            "Кто-то хвалится машиной,", 
                            "у кого-то поезда.",
                            "Кто-то тратит миллионы,", 
                            "покупая острова."
                        ],
                        [   
                            "Но меня давно не греет",
                            "вся мирская суета,",
                            "Потому что в моем сердце",
                            "есть Жемчужина одна."
                        ],
                        [
                            "Этот праздник в моем сердце -",
                            "Этот праздник без конца.",
                            "И его не остановишь,",
                            "Ведь этот праздник - без конца"
                        ],
                        [
                            "Радость льётся в мое сердце,",
                            "Радость льётся через край.",
                            "И если хочешь эту радость",
                            "Ты в свое сердце принимай."
                        ]
                    ],
                    "choruses": [
                        [
                            "Иисус живой (3р)",
                            "Навеки в завете со мной!",
                            "Иисус живой (3р)",
                            "в завете со мной!"
                        ]
                    ]
                }
            ]
        },
        { 
            "id": "jesus-thank-you",
            "orig": "en",  
            "name": "Иисус, Спасибо!", 
            "lyrics": [
                {
                    "lang": "ru",
                    "verses": [
                        [
                            "Ты на земле поставил",
                            "Свой тяжелый крест",
                            "На нем Ты пролил Кровь Свою",
                            "Чтоб я с Тобой, мой Агнец, умер и воскрес",
                            "Чтоб я с Тобой навеки был в раю"
                        ],
                        [
                            "Не хватит жизни, чтоб постигнуть до конца",
                            "Великую любовь Твою",
                            "В смиреньи отдаем Тебе свои сердца",
                            "Как Ты отдал жизнь Свою" 
                        ]
                    ],
                    "choruses": [
                        [
                            "Мой грех омыла Твоя Кровь",
                            "Иисус, спасибо!",
                            "Крестом доказана Отца любовь",
                            "Иисус, спасибо!",
                            "Ты Своего врага за стол Свой посадил",
                            "Иисус, спасибо!"
                        ]
                    ]
                    ,
                    "bridges": [
                        [
                            "И моя душа",
                            "Жить будет для Тебя"
                        ]
                    ]
                }
            ]
        },
        { 
            "id": "poj-alliluja-korop",  
            "orig": "ru",
            "name": "Пой аллилуйя (Короп)", 
            "lyrics": [
                {
                    "lang": "ru",
                    "verses": [
                        [
                            "Муж скробей, изведавший болезни,",
                            "Он был презираем, и унижен.",
                            "Наказанье мира на Нём было,",
                            "Ранами Его мы исцелились.",
                        ],
                        [
                            "Принял Он страданья добровольно,",
                            "Как овца был веден на закланье",
                            "Пред стригущими Он был безгласен,",
                            "Не было в Нём вида, ни величья"
                        ],
                        [
                            "Преклонится всякое колено",
                            "Перед Святым Именем Господним",
                            "Перед Агнцем Божьим на закланьи",
                            "Умершим за наши преступленья."
                        ],
                        [
                            "Он - в одежде, обагренной кровью",
                            "Его Имя - Слово Божье!",
                            "Царь Царей, сидящий на Престоле",
                            "Он грядёт! Он – Первый и Последний!"
                        ]
                    ],
                    "choruses": [
                        [
                            "Пой Аллилуйя!",
                            "Пой Аллилуйя!",
                            "Пой Аллилуйя Господу!"
                        ]
                    ]
                }
            ]
        },
        { 
            "id": "worthy-is-the-lamb",  
            "orig": "en",
            "name": "Worthy is the Lamb", 
            "lyrics": [
                {
                    "lang": "en",
                    "verses": [
                        [
                            "Thank you for the cross Lord",
                            "Thank you for the price You paid",
                            "Bearing all my sin and shame",
                            "In love You came and gave amazing grace"
                        ],
                        [
                            "Thank you for this love Lord",
                            "Thank you for the nail pierced hands",
                            "Washed me in Your cleansing flow",
                            "Now all I know Your forgiveness and embrace"
                        ]
                    ],
                    "choruses": [
                        [
                            "Worthy is the Lamb",
                            "Seated on the throne",
                            "Crown You now with many crowns",
                            "You reign victorious",
                        ],
                        [
                            "High and lifted up",
                            "Jesus, Son of God",
                            "The Darling of Heaven crucified",
                            "Worthy is the Lamb",
                            "Worthy is the Lamb"
                        ]
                    ]
                    ,
                    "bridges": [
                        [
                            "Worthy is the Lamb",
                            "Worthy is the Lamb"
                        ]
                    ]
                },
                {
                    "lang": "ru",
                    "verses": [
                        [
                            "Мой Господь спасибо",
                            "За меня Ты жизнь отдал",
                            "Все грехи на крест забрал",
                            "Любовь мне дал",
                            "Излил всю благодать"
                        ],
                        [
                            "За любовь спасибо",
                            "За раны на Твоих руках",
                            "Тобой омыта жизнь моя и знаю я",
                            "Ты навсегда простил меня"
                        ]
                    ],
                    "choruses": [
                        [
                            "Агнец в небесах",
                            "Вознесен на трон",
                            "Коронован на века",
                            "В победе правит Он"
                        ],
                        [
                            "Принял всю хвалу",
                            "Божий Сын Иисус",
                            "Подарок небесный был распят",
                            "Агнец в небесах",
                            "Агнец в небесах"
                        ]
                    ]
                    ,
                    "bridges": [
                        [
                            "Агнец в небесах",
                            "Агнец в небесах"
                        ]
                    ]
                }
            ]
        },
        { 
            "id": "forever-kari-jobe",  
            "orig": "en",
            "name": "Forever (Kari Jobe)", 
            "lyrics": [
                {
                    "lang": "en",
                    "verses": [
                        [
                            "The moon and stars they wept",
                            "The morning sun was dead",
                            "The Savior of the world was fallen",
                            "His body on the cross",
                            "His blood poured out for us",
                            "The weight of every curse upon Him"
                        ],
                        [
                            "One final breath He gave",
                            "As Heaven looked away",
                            "The Son of God was laid in darkness",
                            "A battle in the grave",
                            "The war on death was waged",
                            "The power of hell forever broken"
                        ],
                        [   
                            "The ground began to shake",
                            "The stone was rolled away",
                            "His perfect Love could not be overcome",
                            "Now death, where is your sting?",
                            "Our resurrected King has rendered you defeated"
                        ]
                    ],
                    "choruses": [
                        [
                            "Forever, He is glorified",
                            "Forever, He is lifted high",
                            "Forever, He is risen",
                            "He is alive",
                            "He is alive"
                        ]
                    ]
                    ,
                    "bridges": [
                        [
                            "We sing Hallelijah (x3)",
                            "The Lord has overcome!"
                        ]
                    ]
                }
            ]
        }
    ];

    // var lang = function(x) {
    //     if (x == 0) return "en";
    //     else return "ru" 
    // };

    // pick the song from the store
    var getSong = function(id) {
        // get the position of element with the passed in id attribute 
        var elementPos = store.map(function(x) {return x.id; }).indexOf(id);
        // // console.log("********** element position: " + elementPos);
        var song = store[elementPos];
        //// console.log("********** getSong()");
        return song;
    };

    // empty the display remove all children of tabContents
    var removePreviousSong = function() {
        var tabContents = document.getElementById("tabContents"); // get #tabConents
        while (tabContents.firstChild) {
            tabContents.removeChild(tabContents.firstChild);
        }
        console.log("********** removePreviousSong()");
    };

    var removePreviousTabs = function() {

        // empty the arrays so the content doesn't accumulate elements from previous runs
        contentDivs = [];
        tabLinks = [];

        var tabs = document.getElementById("tabs");
        while (tabs.firstChild) {
            tabs.removeChild(tabs.firstChild);
        }
        console.log("********** removePreviousTabs()");
    };

    var removePreviousList = function() {
        var list = document.getElementById("song-name-list");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        toggleBackArrow("on");
        console.log("********** removePreviousList()");
    };

    var bootstrapSongList = function(){
        console.log("********** bootstrapSongList() start");

        var list = document.getElementById("song-name-list");
        var songs = list.getElementsByTagName('div');
        // http://2cor214.blogspot.ca/2010/08/passing-arguments-to-event-handler-in.html
        for (var l = 0; l < songs.length; l++) {
            // var song_id = songs[l].id.replace('s', '');
            var song_id = songs[l].id;
            // // console.log("********** song_id: " + song_id);

            songs[l].addEventListener("click", (function(song_id) {
                return function() {
                    // // console.log("********** fired! with song id: " + song_id);
                    var song = getSong(song_id); // int id
                    // // console.log("********** extracted song ID: " + song.id);
                    createSongPage(song);
                }   
            })(song_id));
        }
        console.log("********** bootstrapSongList() complete");
    };

    var createTab = function(id) {
        var tabs = document.getElementById("tabs");
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#"+id;
        a.innerHTML = id;
        li.appendChild(a);
        tabs.appendChild(li);
        //// console.log("********** createTab()");
    };

    var hideSongList = function() {
        var list = document.getElementById("song-name-list");
        list.style = "display: none";
        console.log("********** hideSongList()");
    };

    var toggleBackArrow = function(val) {
        var back_arrow = document.getElementById("back-arrow");
        if (val == "off") {
            back_arrow.style = "display: none";
            console.log("******* toggleBackArrow() off");
        }
        else if (val == "on") {
            back_arrow.style = "display: inline-block";
            back_arrow.onclick = showSongList;
            console.log("******* toggleBackArrow() on");
        }
        else {
            console.log("toggleBackArrow error");
        }
    };

    var removePreviousSongPage = function() {
        toggleBackArrow("off");
        removePreviousTabs();
        removePreviousSong();
        
    }

    var showSongList = function() {
        console.log("********** showSongList() start");
        removePreviousList();
        removePreviousSongPage();

        // Step #: hide the song display
        var display = document.getElementById("display");
        display.style = "display: none";

        // Step #: show the song list container
        var list = document.getElementById("song-name-list");
        list.style = "display: block";

        // Step #: fill the song list ontainer with song items
        var s = 0;
        // // console.log("********** available songs: ");
        while (s < store.length) {
            // // console.log((s+1) + ") " + store[s].name);
            var song = document.createElement("div");
            song.innerHTML = store[s].name;
            // TODO:
            // song.id = store[s].orig +"-"+ store[s].id; 
            song.id = store[s].id;
            list.appendChild(song);
            s++;
        }

        // Step #: bootstrap the song items in the song list container
        bootstrapSongList();

        console.log("********** showSongList() complete");
    };


    var showSongDisplay = function() {
        console.log("********** showSongDisplay() start");

        

        removePreviousList();

        // var list = document.getElementById("song-name-list");
        // list.style = "display: none";

        var display = document.getElementById("display");
        display.style = "display: block";
        
        
        console.log("********** showSongDisplay() complete");
    };

    // print all the song parts (verses, choruses and bridges in each language)
    var createSongPage = function(song) {
        // console.log("******* createSongPage() ***********************************************************************");
        removePreviousTabs();
        removePreviousSong();
        hideSongList();
        showSongDisplay();
        var tabContents = document.getElementById("tabContents");

        // // console.log("********** Selected song.id: " + song.id);
        // console.log("************** Selected song.name: " + song.name);
        //// console.log("************** # of versions: " + song.lyrics.length);

        //***************************
        //********* LANGUAGES *******
        //***************************

        var l = 0;
        while (song.lyrics.length !=0 
        && l < song.lyrics.length) { // for each of the languages
            // // console.log("********** version "+ (l+1) +" has " + song.lyrics[l].verses.length + " verses");
            
            //***************************
            //********* VERSES **********
            //***************************

            if ( !(song.lyrics[l].choruses === undefined)) {

                for (var v = 0; v < song.lyrics[l].verses.length; v++) {

                    var tabContent = document.createElement("div"); // create a div inside #tabContents
                    tabContent.className = "tabContent"; // give the div class="tabContent"
                    var id = song.lyrics[l].lang +"-verse"+(v+1); // the ID of the song-part
                    tabContent.id = id;

                    createTab(id);
                    
                    // tabContent.innerHTML = "a tabContent";

                    
                    // // console.log("************** verse " + (v+1) +" has " + song.lyrics[l].verses[v].length + " lines");
                    for (var k = 0; k < song.lyrics[l].verses[v].length; k++) {
                        // // // console.log(song.lyrics[l].verses[v][k]);

                        var line = document.createElement("div");
                        line.innerHTML = song.lyrics[l].verses[v][k];
                        tabContent.appendChild(line);
                    };
                    tabContents.appendChild(tabContent);
                };
            }
            else
            {
                // // console.log("no verses");
            }
            //***************************
            //********* CHORUSES ********
            //***************************
            if ( !(song.lyrics[l].choruses === undefined)) {

                // // console.log("********** version "+ (l+1) +" has " + song.lyrics[l].choruses.length + " choruses");
                for (var c = 0; c < song.lyrics[l].choruses.length; c++) {
                    

                    var tabContent = document.createElement("div"); // create a div inside #tabContents
                    tabContent.className = "tabContent"; // give the div class="tabContent"
                    var id = song.lyrics[l].lang + "-chorus"+(c+1);
                    tabContent.id = id;
                    createTab(id);

                    // // console.log("************** chorus " + (c+1) +" has " + song.lyrics[l].choruses[c].length + " lines");
                    for (var k = 0; k < song.lyrics[l].choruses[c].length; k++) {

                        // // // console.log(song.lyrics[l].choruses[c][k]);
                        var line = document.createElement("div");
                        line.innerHTML = song.lyrics[l].choruses[c][k];
                        tabContent.appendChild(line);

                    };
                    tabContents.appendChild(tabContent);
                };
            }
            else {
                // // console.log("no choruses");
            }
            //***************************
            //********* BRIDGES *********
            //***************************
            
            if ( !(song.lyrics[l].bridges === undefined)) {
                // // console.log("********** version "+ (l+1) +" has " + song.lyrics[l].bridges.length + " bridges");


                // // console.log("at least 1 bridge");
                var b = 0;
                while( b < song.lyrics[l].bridges.length ) {
                    var tabContent = document.createElement("div"); // create a div inside #tabContents
                    tabContent.className = "tabContent"; // give the div class="tabContent"
                    tabContent.id="bridge"+l;
                    var id = song.lyrics[l].lang + "-bridge"+(b+1);
                    tabContent.id = id;
                    createTab(id);
                    // // console.log("************** bridge " + (b+1) +" has " + song.lyrics[l].bridges[b].length + " lines");
                    for (var k = 0; k < song.lyrics[l].bridges[b].length; k++) {
                        // // // console.log(song.lyrics[l].bridges[b][k]);
                        var line = document.createElement("div");
                        line.innerHTML = song.lyrics[l].bridges[b][k];
                        tabContent.appendChild(line);
                    };
                    tabContents.appendChild(tabContent);
                    b++;
                };
            }
            else{
                // // console.log("no bridges");
            }
        
            l++;
        }

        // now that all the tabs are in place, bootstrap all the tabs
        initTabs();
        console.log("******* created the song page");
    }; // end createSongPage
    


    var init = function() {
        console.log("******* init() start");   

        // // console.log("********** document loaded successfully");
        // var name = document.getElementById("name");
        // // // console.log("********** the name: " + name.innerHTML);
        // name.addEventListener('click', function() { 
        //     alert("********** name is: " + name.innerHTML);
        // }, false);

        showSongList();

        //var tabContents = document.getElementById("tabContents"); // get #tabConents
        // // console.log("********** tabContents: " + tabContents.innerHTML);
        //var tabs = document.getElementById("tabs");

        //bootstrapSongList();
        console.log("******* init() complete");   
    };



    //===========================
    var tabLinks = new Array(); // to hold the tab link elements
    var contentDivs = new Array(); // to hold the content divs:
    // console.log("970 contentDivs.length: " + contentDivs.length); 
    var showTab = function (e) {
        // A 'selected element' is the element whose ID is in the URL (e.g. #lexus)
        // Extract the ID of the selected element from the clicked link's href="..." attribute and store it in selectedId.
        var selectedId = getHash( this.getAttribute('href') );

        //// console.log("selected part: " + selectedId);
        //// // console.log("key pressed: " + event.key);
        
        //var key = e.keyCode();
        //// // console.log("key: " + key);
        // Highlight the selected tab, and dim all others.
        // Also show the selected content div, and hide all others.
        // loop through all the IDs
        for ( var id in contentDivs ) {
            // For the selected ID
            if ( id == selectedId ) {
                // highlight the corresponding tab, add the 'selected' class to the elt with the selected ID
                tabLinks[id].className = 'selected';
                // show the content <div>, i.e. do: class="tabContent"
                contentDivs[id].className = 'tabContent';
                // console.log("991 contentDivs.length: " + contentDivs.length);
            } // for all other IDs it dims the tab and hides the content div.
            else {
                tabLinks[id].className = '';
                // i.e. do: i.e. do: class="tabContent hide"
                contentDivs[id].className = 'tabContent hide';
                // console.log("996 contentDivs.length: " + contentDivs.length);
            }
        }

        // console.log("********** showTab()");


        // Stop the browser following the link
        // to prevent the browser from following the clicked link and adding the link to the browser history.
        return false;
    };

    // a helper function
    // retrieves the first child of a given element that has a given tag name.
    // returns the first child of a specified element that matches a specified tag name
    // retrieve the a (link) element inside each list item in the tabs list.
    var getFirstChildWithTagName = function ( element, tagName ) {
        // loop through the child nodes of element
        for ( var i = 0; i < element.childNodes.length; i++ ) {
            // until/when you find a node that matches tagName.
            if ( element.childNodes[i].nodeName == tagName )
                // return the node.
                return element.childNodes[i];
        }
    };

    // a helper function
    // takes a URL and returns the part of the URL that appears after the hash (#) symbol.
    // returns the portion of a URL after any hash symbol
    var getHash = function ( url ) {
        var hashPos = url.lastIndexOf ( '#' );
        return url.substring( hashPos + 1 );
    };

    // to sets up the tabs
    var initTabs = function () {
        // console.log("began initTabs()");
        // IG.Log.debug("in tabs.js init()");
        // // console.log("in tabs.js init()");
        // Grab the tab links and content divs from the page
        var tabListItems = document.getElementById('tabs').childNodes;
        // loop through all the <li> elements in the tab`s unordered list.
        console.log("******* tabListItems.length: " + tabListItems.length + " song element tabs");
        for ( var i = 0; i < tabListItems.length; i++ ) {
            
            //The link element is then stored by ID in the tabLinks array, 
            // and the content div is stored by ID in the contentDivs array.

            // For each li element,
            if ( tabListItems[i].nodeName == "LI" ) {
                //// console.log("tabListItems["+ i+"].nodeName: " + tabListItems[i].nodeName );
                // retrieve the <a> link element inside (calling the getFirstChildWithTagName() helper function to )
                var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
                // extract the part of the link's URL after the hash; this is the ID of the corresponding content <div>
                var id = getHash( tabLink.getAttribute('href') );
                // // console.log("href: " + id);
                // store the <a> by ID in the 'tabLinks' array
                tabLinks[id] = tabLink;
                // console.log("tabLinks["+id+"]: " + tabLinks[id]);
                // store the content <div> by ID in the 'contentDivs' array.
                contentDivs[id] = document.getElementById( id );
            }
            else {
                // console.log(">>>>> node name: " + tabListItems[i].nodeName);
            }
        };
        console.log("******* A contentDivs.length: " + contentDivs.length); 
        // Assign onclick events to the tab links, and
        // highlight the first tab
        // console.log("******* tabLinks.length: " + tabLinks.length);
        var on = 0; // ordinal number
        var tabLinksCycles = "";


        for ( var id in tabLinks ) {
            // assign showTab() to each tab link (an onclick event handler function)
            tabLinks[id].onclick = showTab;
            
            tabLinks[id].onfocus = function() {
                this.blur()
            };
            // set tab 1 CSS class to 'selected' (highlight it)
            if ( on == 0 ){
                tabLinks[id].className = 'selected';
            }
                
            on++;
            tabLinksCycles = on;
        };
        console.log("******* tabLinksCycles: " + tabLinksCycles);
        // tabLinks = []; // empty the array so it doesn't accumulate elements from previous runs

        // console.log("L contentDivs.length: " + contentDivs.length); 
        var x = 0;
        var contentDivCycles = "";
        for (var id in contentDivs ) {
            // console.log("******* x: " + x);
            contentDivs[id].className = 'tabContent';
            x++;
            contentDivCycles = x;
        }
        console.log("******* contentDivCycles: " + contentDivCycles);

        var i = 0; 
        //console.log("******** i: " + i);
        // set each div's CSS class (except the first one) to 'tabContent hide'.
        // i.e. hide all content divs except the first one
        // console.log("******** E contentDivs.length: " + contentDivs.length);
        // console.log("I contentDivs[0].className: " + contentDivs[0].className);
        for ( var id in contentDivs ) {
            // console.log("******* M i: " +i);
            //// console.log("J contentDivs.length: " + contentDivs.length);
            //// console.log("H contentDivs[" + i + "].className: " + contentDivs[id].className);
            //// console.log("K i: " + i);
            if ( i != 0 ) {
                // console.log("******* G contentDivs[" + i + "].className: " + contentDivs[id].className);
                contentDivs[id].className = 'tabContent hide';
                //// console.log(contentDivs[id]);
            } 
            else {
                console.log("******* P contentDivs["+i+"].id=" + contentDivs[id].id  + " className=" + contentDivs[id].className    + ": " + contentDivs[id].firstChild.innerHTML);    
            }
            // console.log("******* F contentDivs["+i+"].id=" + contentDivs[id].id  + " className=" + contentDivs[id].className    + ": " + contentDivs[id].firstChild.innerHTML);    
            //// console.log("1100 contentDivs.length: " + contentDivs.length);
            i++;
        };
        // contentDivs = []; // 
        // console.log("********** initTabs()");
    };
    //===========================

    return {
        init : init
    }
})();

window.onload = function() {
    // Mai.Store.init();
    Mei.Songs.init();
};