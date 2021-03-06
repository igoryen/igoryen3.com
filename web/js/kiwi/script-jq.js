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
        var songs = list.getElementsByTagName('li');
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

        $("li").hover(
            function(){
                $(this).addClass("highlighted");
            },
            function(){
                $(this).removeClass("highlighted");
            }
        );
        console.log("********** bootstrapSongList() complete");
    };

    // var localizeId = function(id) {
    //     var string ="";
    //     console.log("id: " + id);
    //     // console.log(id.indexOf("ru") > -1);
    //     switch(id) {
    //         case id.indexOf("ru-verse") > -1:
    //             var retval = "Куплет ";
    //             // console.log("verse!");
    //             return retval;
    //             // break;
    //         // case id.indexOf("ru-chorus") > -1:
    //         //     string = "Припев " + id.slice(-1);
    //         //     break;
    //         // case id.indexOf("ru-bridge") > -1:
    //         //     string = "Мост " + id.slice(-1);
    //         //     break;
    //         // case id.indexOf("en-verse") > -1:
    //         //     string = "Verse " + id.slice(-1);
    //         //     break;
    //         // case id.indexOf("en-chorus") > -1:
    //         //     string = "Chorus " + id.slice(-1);
    //         //     break;
    //         // case id.indexOf("en-bridge") > -1:
    //         //     string = "Bridge " + id.slice(-1);
    //         //     break;
    //     }
    //     //console.log("string: " + string);
    //     //return string;
    // };

    var createTab = function(id) {
        // var tabs = document.getElementById("tabs");
        var $tabs = $("#tabs");
        // var ul = document.createElement("ol");
        var $ul = $("<ol></ol>");
        // var li = document.createElement("li");
        var $li = $("<li></li>");
        // var a = document.createElement("a");


        var $a = $("<a>"+ id.replace("-", " ") +"</a>")
        // var $a = $("<a>"+ localizeId(id)+"</a>");

        // a.href = "#"+id;
        $a.attr("href", "#"+id );
        // a.innerHTML = id;
        // li.appendChild(a);
        $li.append($a);
        // tabs.appendChild(li);
        $tabs.append($li);
        //// console.log("********** createTab()");
    };

    // var hideSongList = function() {
    //     // var list = document.getElementById("song-name-list");
    //     // list.style = "display: none";
    //     // console.log("********** hideSongList()");
    // };

    var toggleBackArrow = function(val) {
        var back_arrow = document.getElementById("back-arrow");
        if (val == "off") {
            // back_arrow.style = "display: none";
            // console.log("******* toggleBackArrow() off");
        }
        else if (val == "on") {
            // back_arrow.style = "display: inline-block";
            $("#back-arrow").fadeIn("fast");
            back_arrow.onclick = showSongList;
            console.log("******* toggleBackArrow() on");
        }
        else {
            console.log("toggleBackArrow error");
        }
    };

    var removePreviousSongPage = function() {
        // toggleBackArrow("off");
        $("#back-arrow").fadeOut("fast");
        removePreviousTabs();
        removePreviousSong();
        
    }

    var showSongList = function() {
        console.log("********** showSongList() start");
        removePreviousList();
        removePreviousSongPage();

        // Step #: hide the song display
        // var display = document.getElementById("display");
        // display.style = "display: none";
        

        // Step #: show the song list container
        // var list = document.getElementById("song-name-list");
        var $list = $("#song-name-list");
        // list.style = "display: block";
        

        // Step #: fill the song list ontainer with song items
        //var ol = document.createElement("ol");
        var ol = $("<ol></ol>")
        var s = 0;
        // // console.log("********** available songs: ");
        while (s < store.length) {
            // // console.log((s+1) + ") " + store[s].name);
            // var song = document.createElement("li");
            var song = $("<li>"+store[s].name+"</li>");
            // song.innerHTML = store[s].name;
            // TODO:
            // song.id = store[s].orig +"-"+ store[s].id; 
            // song.id = store[s].id;
            song.attr("id", store[s].id);
            // ol.appendChild(song);
            ol.append(song);
            s++;
        }
        // list.appendChild(ol);

        // sort the <ol> ------------------
        // http://stackoverflow.com/questions/1134976/how-may-i-sort-a-list-alphabetically-using-jquery
        var listitems = ol.children('li').get();
        listitems.sort(function(a, b) {
           return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
        })
        $.each(listitems, function(idx, itm) { 
            ol.append(itm); 
        });
        //=================================

        $list.append(ol);
        $("#display").fadeOut("fast");
        $list.fadeIn("fast");

        // Step #: bootstrap the song items in the song list container
        bootstrapSongList();

        console.log("********** showSongList() complete");
    };


    var showSongDisplay = function() {
        console.log("********** showSongDisplay() start");

        

        removePreviousList();

        // var list = document.getElementById("song-name-list");
        // list.style = "display: none";

        // var display = document.getElementById("display");
        // display.style = "display: block";
        $("#display").fadeIn("fast");
        
        
        console.log("********** showSongDisplay() complete");
    };

    // print all the song parts (verses, choruses and bridges in each language)
    var createSongPage = function(song) {
        // console.log("******* createSongPage() ***********************************************************************");
        removePreviousTabs();
        removePreviousSong();
        $("song-name-list").fadeOut("fast");
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
                console.log("no verses");
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
                console.log("no choruses");
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
                console.log("no bridges");
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


// =============================================
var template = 
{ 
    "id": "xxx",  
    "orig": "en",
    "name": "xxx", 
    "lyrics": [
        {
            "lang": "en",
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
            "lang": "ru",
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
        "id": "amazing-grace",  
        "orig": "en",
        "name": "Amazing Grace (John Newton 1779)", 
        "lyrics": [
            {
                "lang": "en",
                "verses": [
                    [
                        "Amazing grace! How sweet the sound",
                        "That saved a wretch like me!",
                        "I once was lost, but now am found;",
                        "Was blind, but now I see."
                    ],
                    [
                        "’Twas grace that taught my heart to fear,",
                        "And grace my fears relieved;",
                        "How precious did that grace appear",
                        "The hour I first believed."
                    ],
                    [
                        "Through many dangers, toils and snares,",
                        "I have already come;",
                        "’Tis grace hath brought me safe thus far,",
                        "And grace will lead me home."
                    ],
                    [
                        "The Lord has promised good to me,",
                        "His Word my hope secures;",
                        "He will my Shield and Portion be,",
                        "As long as life endures."
                    ],
                    [
                        "Yea, when this flesh and heart shall fail,",
                        "And mortal life shall cease,",
                        "I shall possess, within the veil,",
                        "A life of joy and peace."
                    ],
                    [
                        "The earth shall soon dissolve like snow,",
                        "The sun forbear to shine;",
                        "But God, who called me here below,",
                        "Will be forever mine."
                    ],
                    [
                        "When we’ve been there ten thousand years,",
                        "Bright shining as the sun,",
                        "We’ve no less days to sing God’s praise",
                        "Than when we’d first begun."
                    ]
                ]
                ,"choruses": [
                    [
                        ""
                    ]
                    
                ]
            },
            {
                "lang": "ru",
                "verses": [
                    [
                        "О, благодать! Спасен Тобой",
                        "Я из пучины бед;",
                        "Был мертв и чудом стал живой,",
                        "Был слеп и вижу свет."
                    ],
                    [
                        "Сперва внушила сердцу страх,",
                        "Затем - дала покой.",
                        "Я скорбь души излил в слезах,",
                        "Твой мир течет рекой."
                    ],
                    [
                        "Прошел немало я скорбей,",
                        "Невзгод и черных дней,",
                        "Но ты всегда была со мной",
                        "Ведёшь меня домой."
                    ],
                    [
                        "Словам господним верю я,",
                        "Моя вся крепость в них:",
                        "Он - верный щит, Он - часть моя",
                        "Во всех путях моих."
                    ],
                    [
                        "Когда же плоть моя умрет,",
                        "Придет борьбе конец,",
                        "Меня в небесном доме ждет",
                        "И радость, и венец."
                    ],
                    [
                        "Пройдут десятки тысяч лет,",
                        "Забудем смерти тень,",
                        "А Богу также будем петь,",
                        "Как в самый первый день."
                    ]
                ]
                
                ,"choruses": [
                    [
                        ""
                    ]
                ]
            }
        ]
    },
    { 
        "id": "no-longer-slaves",  
        "orig": "en",
        "name": "No Longer Slaves", 
        "lyrics": [
            {
                "lang": "en",
                "verses": [
                    [
                        "You unravel me, with a melody",
                        "You surround me with a song",
                        "Of deliverance from my enemies",
                        "Till all my fears are gone"
                    ],
                    [
                        "From my mothers womb",
                        "You have chosen me",
                        "Love has called my name",
                        "I've been born again" ,
                        "into your family",
                        "Your blood flows through my veins"
                    ]
                ],
                "choruses": [
                    [
                        "I'm no longer a slave to fear",
                        "I am a child of God",
                        "x2"
                    ]
                ]
                ,
                "bridges": [
                    [
                        "You split the sea so I could walk",
                        "right through it",
                        "All my fears were drowned" ,
                        "in perfect love",
                        "You rescued me so I could",
                        "stand and sing:",
                        "\"I am child of God!\""
                    ]
                ]
            },
            {
                "lang": "ru",
                "verses": [
                    [
                        "-"
                    ]
                ],
                "choruses": [
                    [
                        "Я не раб греха и страха",
                        "Я - Божье дитя"
                    ]
                ]
                ,
                "bridges": [
                    [
                        "Ты море разделил, чтоб я прошёл",
                        "Мой страх любовью поглащён ",
                        "Ты спас меня и в сердце написал:",
                        "\"Я - Божье дитя\""
                    ]
                ]
            }
        ]
    },
    { 
        "id": "my-hope-is-built",  
        "orig": "en",
        "name": "My Hope is built on nothing less", 
        "lyrics": [
            {
                "lang": "en",
                "verses": [
                    [
                        "My hope is built on nothing less",
                        "Than Jesus' Blood and Righteousness",
                        "I dare not trust the sweetest frame",
                        "But wholly trust in Jesus' name"
                    ],
                    [
                        "When darkness seems to hide His face",
                        "I rest on His unchanging grace",
                        "In every high and stormy gale",
                        "My anchor holds within the veil"
                    ],
                    [
                        "When He shall come with trumpet sound",
                        "Oh may I then in Him be found",
                        "Dressed in His righteousness alone",
                        "Faultless, stand before the throne"
                    ]
                ],
                "choruses": [
                    [
                        "Christ alone, Cornerstone",
                        "Weak made strong in the",
                        "Savior's love",
                        "Through the storm",
                        "He is Lord",
                        "Lord of all"
                    ]
                ]
            },
            {
                "lang": "ru",
                "verses": [
                    [
                        "Надежду мне дает всегда",
                        "Иисуса кровь и праведность.",
                        "На Нем стоит вся жизнь моя,",
                        "Лишь на Христа надеюсь я."
                    ],
                    [
                        "И если вдруг сокрыла тьма",
                        "Лицо Cпасителя Христа",
                        "Лишь в милость Божью верю я",
                        "Он-якорь мой средь бури зла"
                    ],
                    [
                        "Под звуки труб Христос грядёт",
                        "Пред Ним спасённый предстаёт,",
                        "Облекшись в праведностьХриста;",
                        "Таким пред Ним предстану я."
                    ]
                ],
                "choruses": [
                    [
                        "Ты - Христос, моя Скала",
                        "Слабый сильным",
                        "Cтал в любви Христа",
                        "И сквозь шторм Ты - Господь,",
                        "Господь всего!"
                    ]
                ]
            }
        ]
    },
    { 
        "id": "bless-the-lord",  
        "orig": "en",
        "name": "Bless the Lord (Matt Redman)", 
        "lyrics": [
            {
                "lang": "en",
                "verses": [
                    [
                        "The sun comes up, It's a new day dawning;",
                        "It's time to sing Your song again.",
                        "Whatever may pass,",
                        "and whatever lies before me,",
                        "Let me be singing when the evening comes."
                    ],
                    [
                        "You're rich in Love and You're slow to anger",
                        "Your name is great, And Your heart is kind.",
                        "For all Your goodness,",
                        "I will keep on singing;",
                        "Ten thousand reasons",
                        "For my heart to find."
                    ],
                    [   
                        "And on that day when my strength is failing,",
                        "The end draws near, and my time has come;",
                        "Still my soul will sing ",
                        "Your praise unending:",
                        "Ten thousand years and",
                        "Then forevermore!"
                    ]
                ],
                "choruses": [
                    [
                        "Bless the Lord, O my soul,",
                        "O my soul,",
                        "Worship His Holy name.",
                        "Sing like never before,",
                        "O my soul.",
                        "I'll worship Your Holy name."
                    ]
                ]
            },
            {
                "lang": "ru",
                "verses": [
                    [
                        "Встает заря, наступает утро,",
                        "Пришла пора хвалу воздать,",
                        "Бывает сложно, но вновь я буду",
                        "И на закате Бога прославлять!",
                    ],
                    [
                        "Ты справедлив и даешь мне милость,",
                        "Твоя любовь так велика!",
                        "За все дары Тебя хочу прославить,",
                        "Их сотни тысяч в жизни вижу я."
                    ],
                    [
                        "В тот день, когда иссякнет сила,",
                        "Настанет час встретить мне Христа,",
                        "Душа моя Его будет славить,",
                        "Десятки тысяч лет и навсегда."
                    ]

                ],
                "choruses": [
                    [
                        "Славь, душа, Господа,",
                        "Cлавь, душа,",
                        "Имя святое Его.",
                        "Пой Ему, как никогда,",
                        "Пой, душа,",
                        "Благослови Господа."
                    ]
                ]
            }
        ]
    },
    { 
        "id": "slava-tebe-spasitel",  
        "orig": "en",
        "name": "Слава Тебе Спаситель", 
        "lyrics": [
            {
                "lang": "en",
                "verses": [
                    [
                        "Слава Тебе Спаситель,",
                        "Слава наш Искупитель" ,
                        "Вся земля полна славы Твоей",
                        "Слава Тебе Мессия ",
                        "Иисус из Израиля",
                        "Освободил от Греха и скорбей "
                    ],
                    [
                        "Ты дал в сердца нам радость ",
                        "Плодов от Духа сладость",
                        "Вином любви наполнил нас до краёв",
                        "Благодарим Тебя за Божью любовь",
                        "И будем Тебя славить вновь и вновь"
                    ],
                    [
                        "Иисус - Мессия, Славный мой",
                        "ты наш Папа неземной",
                        "Ты - Господь, Ты - Мошиях от века",
                        "Ты нас всех спас и оправдал",
                        "Наши немощи забрал, освятил",
                        "В Твоём Новом Завете"
                    ]
                ],
                "choruses": [
                    [
                        "Ты дал сердцам прозрение" ,
                        "Надежду и спасенье",
                        "Направил стопы на пути Твои",
                        "Тебя мы славим до краёв земли",
                        "От нас благодарение прими"
                    ],
                    [
                        "Ты славный Бог живой",
                        "Ты - пастырь добрый мой",
                        "И ты ведёшь нас за Собой, Иисус",
                        "Мы воздаём Тебе хвалу, Иисус",
                        "И славим вместе Жертву мы Твою"
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
    },
    { 
        "id": "velikij-bog-izrailev",  
        "orig": "ru",
        "name": "Великий Бог Израилев", 
        "lyrics": [
            {
                "lang": "ru",
                "verses": [
                    [
                        "И возгремит Господь гласом славы Своей,",
                        "И среди ночи песнь обретешь.",
                        "Взойди со свирелью на гору Его,",
                        "И славу Его там найдешь. "
                    ],
                    [
                        "Слепые глаза увидят свет в ночи,",
                        "Глухой услышит музыки звук,",
                        "Хромые запляшут, как царь Давид,",
                        "Немые уста запоют."
                    ]
                ],
                "choruses": [
                    [
                        "Великий Бог Израилев!",
                        "Великий Бог Израилев!",
                        "Голос Его слышен в силе Его слов.",
                        "Великий Бог Израилев! "
                    ]
                ]
            }
        ]
    },
    { 
        "id": "israel-israel-israel",  
        "orig": "ru",
        "name": "Израиль Израиль Израиль", 
        "lyrics": [
            {
                "lang": "ru",
                "verses": [
                    [
                        "Израиль, Израиль, Израиль",
                        "Бог так любит тебя! (3 раза)"
                    ]
                ],
                "choruses": [
                    [
                        "Скоро твой придет Спаситель",
                        "Даст шалом, шалом, шалом",
                        "От грехов всех искупитель",
                        "Даст шалом, шалом, шалом"
                    ]
                ]
            }
        ]
    },
    { 
        "id": "sing-sing-sing",  
        "orig": "en",
        "name": "Sing Sing Sing", 
        "lyrics": [
            {
                "lang": "en",
                "verses": [
                    [
                        "What’s not to love about You",
                        "Heaven and earth adore You",
                        "Kings and kingdoms bow down",
                        "Son of God, You are the One",
                        "You are the One we’re living for"
                    ],
                    [
                        "You are the love that frees us",
                        "You are the light that leads us",
                        "Like a fire burning",
                        "Son of God, You are the One",
                        "You are the One, we’re living for"
                    ]
                ],
                "choruses": [
                    [
                        "Sing, sing, sing",
                        "And make music with the heavens",
                        "We will sing, sing, sing",
                        "Grateful that You hear us",
                        "When we shout Your praise",
                        "Lift high the name of Jesus"
                    ]
                ]
            },
            {
                "lang": "ru",
                "verses": [
                    [
                        "Великий и Прекрасный",
                        "Народы все и царства",
                        "Перед Тобой склонятся, Божий Сын",
                        "Лишь для Тебя, лишь для Тебя",
                        "Вся жизнь моя"
                    ],
                    [
                        "Ты нас освобождаешь",
                        "С любовью направляешь",
                        "Огонь в нас зажигаешь, Божий Сын!",
                        "Лишь для Тебя, лишь для Тебя",
                        "Вся жизнь моя"
                    ]
                ],
                "choruses": [
                    [
                        "Петь, петь, петь",
                        "С благодарными сердцами",
                        "Будем петь, петь, петь",
                        "Вместе с небесами",
                        "Воспевать хвалу",
                        "И славить имя Иисуса!"
                    ]
                ]
            }
        ]
    },
    { 
        "id": "vot-bog-spasenie-mojo",  
        "orig": "en",
        "name": "Вот Бог спасение мое", 
        "lyrics": [
            {
                "lang": "ru",
                "verses": [
                    [
                        "Вот Бог – спасение мое",
                        "Не боюсь, уповаю на Него",
                        "О, Господь, Мой Бог",
                        "Моя сила и песнь",
                        "Он был мне во спасение"
                    ]
                ],
                "choruses": [
                    [
                        "И в радости будем черпать",
                        "Источник воды не иссякнет",
                        "О, Господь, мой Бог",
                        "Моя сила и песнь",
                        "Он был мне во спасение"
                    ]
                ]
            }
        ]
    },
    { 
        "id": "kadosh",  
        "orig": "en",
        "name": "Kadosh", 
        "lyrics": [
            {
                "lang": "ru",
                "verses": [
                    [
                        "Кадош, Кадош, Кадош",
                        "Aдонай, Элохим, Цeваоф",
                        "Кадош, Кадош, Кадош",
                        "Aдонай, Элохим, Цeваоф"
                    ],
                    [
                        "Святый, Святый, Святый",
                        "Мой Бог, ",
                        "Мой Царь, ",
                        "Бог Святой"
                    ]
                ],
                "choruses": [
                    [
                        "Он был," ,
                        "Он есть и" ,
                        "Он снова грядёт!"
                    ]
                ]
            }
        ]
    },
    { 
        "id": "baruch-adonai",  
        "orig": "en",
        "name": "Baruch Adonai Elohim Israel", 
        "lyrics": [
            {
                "lang": "en",
                "verses": [
                    [
                        "Baruch Adonai",
                        "Elohim Yisrael Adonai",
                        "Blessed is the Lord",
                        "x2"
                    ],
                    [
                        "Min ha-olam, vad ha-olam",
                        "Praise His name forever and again",
                        "Min ha-olam, vad ha-olam",
                        "Blessed is the Lord", 
                        "The God of Israel"
                    ]
                ],
                "choruses": [
                    [
                        "So let the nations sing and Praise Him",
                        "And Israel will say, Amen!",
                        "Sing all you nations, Hallelu-Yah",
                        "And Israel will say amen",
                        "And Israel will say..."
                    ]
                ]
            },
            {
                "lang": "ru",
                "verses": [
                    [
                        "Барух  Адонай  Элохим  Израиль",
                        "Адонай, Бог благословен ",
                        "Барух  Адонай  Элохим  Израиль",
                        "Адонай,  Бог  благословен"
                    ],
                    [
                        "Мин ха-олам вад ха-олам",
                        "Прославляй ",
                        "Великого  Творца",
                        "Мин  ха-олам вад ха-олам",
                        "Вновь благослови ",
                        "Небесного Отца"
                    ]
                ],
                "choruses": [
                    [
                        "И вознесут Тебя народы",
                        "И воспоют хвалу, Аминь!",
                        "И преклониться все творенье",
                        "Воздаст всю честь Царю царей",
                        "Воздаст всю честь Царю царей"
                    ]
                ]
            }
        ]
    },
    { 
        "id": "ja-budu-vospevat-tvoju-silu",  
        "orig": "en",
        "name": "Я буду воспевать твою силу", 
        "lyrics": [
            {
                "lang": "ru",
                "verses": [
                    [
                        "Я буду воспевать Твою силу,",
                        "Провозглашать милость Твою,",
                        "Ты был мне защитой, убежищем всегда,",
                        "Господь Мессия Иешуа."
                    ],
                    [
                        "Господь Мессия, сила моя,",
                        "Тебя буду воспевать я,",
                        "Ты Бог, заступник мой,",
                        "Бог, милующий меня,",
                        "Господь Мессия Иешуа."
                    ]
                ],
                "choruses": [
                    [
                        "Пойте Богу, воспевайте Господа,",
                        "Грядущего на небесах небес!",
                        "Он даёт гласу Своему глас силы,",
                        "Величие Мессии над Израилем!",
                        "Велик Господь во святилище Своём!",  
                        "Бог Израилев, Он даёт нам силу",
                        "И спасение народу Своему!"
                    ]
                ]
                ,
                "bridges": [
                    [
                        "На на-на на",
                        "на-на на-на на-на-на,"
                    ]
                ]
            }
        ]
    }
    ,
    { 
        "id": "hosanna-in-the-highest",  
        "orig": "en",
        "name": "Hosanna in the Highest", 
        "lyrics": [
            {
                "lang": "en",
                "verses": [
                    [
                        "I see the King of Glory",
                        "coming on the clouds with Fire",
                        "the whole earth shakes (x2)",
                        "I see His Love and Mercy",
                        "washing over all our sin",
                        "the people sing (x2)"
                    ],
                    [
                        "I see a generation",
                        "Rising up to take their place",
                        "with selfless faith (x2)",
                        "I see a near revival",
                        "Stirring as we pray and seek",
                        "we're on our knees (x2)"
                    ]
                ],
                "choruses": [
                    [
                        "Hosanna! Hosanna!",
                        "Hosanna in the highest!",
                        "Hosanna! Hosanna!",
                        "Hosanna in the highest!"
                    ]
                ]
                ,
                "bridges": [
                    [
                        "Heal my heart and make it clean",
                        "Open up my eyes to the Things Unseen",
                        "show me how to Love",
                        "like You have Loved me"
                    ],
                    [
                        "Break my heart for what breaks Yours",
                        "everything i am",
                        "for Your Kingdom's cause",
                        "as I walk from earth into Eternity"
                    ]
                ]
            },
            {
                "lang": "ru",
                "verses": [
                    [
                        "Я вижу, как Царь Славы в",
                        "облаках идёт с огнём ",
                        "Трепещет всё (x2)",
                        "Я вижу, как Любовью",
                        "Все грехи омоет Он ",
                        "Земля поёт (x2)"
                    ],
                    [
                        "Я вижу поколение,",
                        "С верой искренней встаёт, ",
                        "Занять свой пост (x2)",
                        "Я вижу, как с молитвой,",
                        "Пробужденье к нам придёт," ,
                        "Склонимся вновь (x2)"
                    ]
                ],
                "choruses": [
                    [
                        "Осанна, Осанна,",
                        "Осанна Богу в вышних ",
                        "Осанна, Осанна,",
                        "Осанна Богу в вышних"
                    ]
                ]
                ,
                "bridges": [
                    [
                        "Сердце исцели, омой, ",
                        "B Мир Невидимый",
                        "Мне глаза открой" ,
                        "Научи Любить",
                        "Как Ты всех Любишь ",
                    ],
                    [
                        "Сделай Боль Свою моей, ",
                        "Царствию отдам всё,",
                        "Что есть во мне ",
                        "Так пройду свой путь земной",
                        "Я к Вечности."
                    ]
                ]
            }
        ]
    },
    { 
        "id": "davayte-pridem-k-gospodu",  
        "orig": "ru",
        "name": "Давайте придём к Господу", 
        "lyrics": [
            {
                "lang": "ru",
                "verses": [
                    [
                        "Давайте придём к Господу, ",
                        "Ибо Он призвал нас к Себе ",
                        "Влюбляйтесь в Него, ",
                        "Он сказал:" ,
                        "Ты - невеста Моя навсегда, ",
                        "Я - Твой, а ты - Моя"
                    ],
                    [
                        "Меня Ты зовёшь за Собой,", 
                        "Ты ревнуешь о сердце моём ",
                        "Ради Тебя оставлю я всё, ",
                        "Ты сказал: «Оставь дом отца своего, ",
                        "Возлюби Меня больше всего"
                    ]

                ],
                "choruses": [
                    [
                        "Вот моё обещание," ,
                        "молитва моя, от всего сердца, всем, ",
                        "Я буду любить Тебя, ",
                        "Буду любить Тебя"
                    ],
                    [
                        "Всем моим сердцем, душой и умом" ,
                        "Я восхищаюсь Тобой ",
                        "Я буду любить Тебя, ",
                        "Буду любить Тебя"
                    ]
                ]
                ,
                "bridges": [
                    [
                        "Иисус, я твой и навеки",
                        "Ничего больше не хочу",
                        "Только быть с Тобой"
                    ],
                    [
                        "Только быть с Тобой, ",
                        "Только быть с Тобой",
                        "Только быть с Тобой",
                        "Только быть с Тобой"
                    ]
                ]
            }
        ]
    },
    { 
        "id": "one-thing-remains",  
        "orig": "en",
        "name": "One thing remains", 
        "lyrics": [
            {
                "lang": "en",
                "verses": [
                    [
                        "Higher than the mountains that I face",
                        "Stronger than the power of the grave",
                        "Constant in the trial and the change",
                        "One thing… Remains"
                    ],
                    [
                        "On and on and on and on it goes",
                        "It overwhelms and satisfies my soul",
                        "And I never, ever, have to be afraid",
                        "One thing remains"
                    ]
                ],
                "choruses": [
                    [
                        "Your love never fails,",
                        "Never gives up",
                        "Never runs out on me"
                    ]
                ]
                ,
                "bridges": [
                    [
                        "In death, In life, I’m confident and",
                        "Covered by the Power of",
                        "Your Great Love",
                        "My debt is paid, there’s nothing",
                        "That can separate my heart from",
                        "Your Great Love"
                    ]
                ]
            },
            {
                "lang": "ru",
                "verses": [
                    [
                        
                        "Выше всяких гор, что впереди",
                        "Сильнее силы смерти,",
                        "Власти тьмы",
                        "Скала, среди бушующих морей",
                        "Твоя любовь сильней"
                    ],
                    [
                        "Вновь и вновь и вновь",
                        "И вновь она",
                        "Прольется с неба,",
                        "Напоит меня",
                        "Больше нечего теперь",
                        "Бояться мне",
                        "Твоя любовь сильней"
                    ]
                ],
                "choruses": [
                    [
                        "Твоя любовь будет всегда",
                        "Наполнять меня"
                    ]
                ]
                ,
                "bridges": [
                    [
                        "И я всегда уверен и наполнен Силою",
                        "Твоей Любви",
                        "Мой грех прощен,",
                        "И ничто не может отделить меня от",
                        "Твоей Любви"
                    ]
                ]
            }
        ]
    },
    { 
        "id": "vse-usta-proslavlyayte-xrista",  
        "orig": "ru",
        "name": "Все уста прославляйте Христа", 
        "lyrics": [
            {
                "lang": "ru",
                "verses": [
                    [
                        "Все уста," ,
                        "Прославляйте Христа",
                        "Пой Аллилуйя",
                        "Славь Отца, ищи Его лица",
                        "Пой Аллилуйя"
                    ],
                    [
                        "Каждый народ ",
                        "И всякий язык",
                        "Пой Аллилуйя",
                        "Всей душой",
                        "Всем сердцем своим",
                        "Пой Аллилуйя"
                    ],
                    [
                        "Потому что наш Бог –",
                        "Праведный Царь",
                        "Пой Аллилуйя",
                        "И Он царствует",
                        "Сидя на небесах",
                        "Пой Аллилуйя"
                    ],
                    [
                        "Он спасает нас",
                        "Сильной правой рукой",
                        "Пой Аллилуйя",
                        "Наполняет жизнь ",
                        "Любовью с небес",
                        "Пой Аллилуйя"
                    ],
                    [
                        "Если молод или стар",
                        "Богат или нищ",
                        "Пой Аллилуйя",
                        "Мал или велик",
                        "Открой уста",
                        "Пой Аллилуйя"
                    ]
                ],
                "choruses": [
                    [
                        "-"
                    ]
                ]
                ,
                "bridges": [
                    [
                        "-"
                    ]
                ]
            }
        ]
    },
    { 
        "id": "be-lifted-high",  
        "orig": "en",
        "name": "Be Lifted High", 
        "lyrics": [
            {
                "lang": "en",
                "verses": [
                    [
                        "You're the King of all the ages",
                        "You're the Author of Salvation",
                        "You're the reason why we're singing",
                        "for Your Glory"
                    ],
                    [
                        "Lord, release the sound of Heaven",
                        "Let it rise in every nation",
                        "We will join the anthem",
                        "singing"
                    ],
                    [
                        "You're the Everlasting Father",
                        "You're the All-consuming Fire",
                        "You're the Reason why we're living",
                        "for Your Glory"
                    ],
                    [
                        "We will be the generation",
                        "Calling down the Reign of Heaven",
                        "We will join the anthem",
                        "singing"
                    ]
                ],
                "choruses": [
                    [
                        "Be lifted high",
                        "Be lifted high",
                        "For Your glory, be lifted high"
                    ]
                ]
                ,
                "bridges": [
                    [
                        "Be lifted high",
                        "Be lifted high",
                        "higher and higher, Lord",
                        "(x2)"
                    ]
                ]
            },
            {
                "lang": "ru",
                "verses": [
                    [
                        "a"
                    ]
                ],
                "choruses": [
                    [
                        "a"
                    ]
                ]
                ,
                "bridges": [
                    [
                        "a"
                    ]
                ]
            }
        ]
    }
    ,
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
            },
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
                        "Хочешь верь, хочешь нет,",
                        "слушай слово Творца.",
                        "Крест - единственный мост",
                        "от земли в небеса."
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
            },
            {
                "lang": "ru",
                "verses": [
                    [
                        "Всё плачет в небесах," ,
                        "И солнца свет угас",
                        "Спаситель мира на распятии.",
                        "Испил и боль, и страх, ",
                        "И кровь пролил за нас,",
                        "Понёс весь тяжкий ",
                        "груз проклятья."
                    ],
                    [
                        "Последний вздох издал,",
                        "И Бог Отец молчал,",
                        "Отправив Сына в недра ада.",
                        "Объявлена война, ",
                        "смерть повержена.",
                        "Так где же, смерть," ,
                        "твоя победа?"

                    ],
                    [   
                        "Поколебалась твердь," ,
                        "Где жало твоё, смерть?",
                        "Любовь Христа сильнее ада.",
                        "Воскресший Царь восстал ",
                        "И смертью смерть попрал.",
                        "Победу дал в награду."

                    ]
                ],
                "choruses": [
                    [
                        "Навеки Он превознесён,",
                        "Навеки в славу облaчён ",
                        "Воскрес над всей землёй,",
                        "И Он живой, и Он живой."
                    ]
                ]
                ,
                "bridges": [
                    [
                        "Пойте Аллилуйя (3x)",
                        "агнец победил.",
                        "Пойте Аллилуйя (3x)",
                        "нас освободил."
                    ]
                ]
            }
        ]
    }
];