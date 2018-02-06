$(function () { 
    // --------------------------DOM Caching-------------------------------------------
    $custom_buttons = $(".selected");    
    $char_menu = $("#filter-faction")
    $char_info = $("#added-info");
    $char_hide = $("#hide-char");
    $table = $("#char-table")

    // --------------------- CUSTOM SELECT ELEMENT ------------------------------------
    $custom_buttons.on("click", function () {

        if ($(this).hasClass("closed")) {

            $(this).removeClass("closed").addClass("opened").next().slideDown(400);

        } else if ($(this).hasClass("opened")) {
            
            $(this).removeClass("opened").addClass("closed").next().slideUp(400);
        }

    });

    $custom_buttons.next().children().on("click", function () {
        $(this)
            .parent().prev().attr("data-value", $(this).text())
            .children("span").text($(this).text());
        $(this).parent().slideUp(400);
        $("html, body").animate({ scrollTop: $char_menu.offset().top}, 400);

        // Line 50 - https://stackoverflow.com/questions/16175929/scroll-to-position-jquery-offset-animationhttps://stackoverflow.com/questions/16175929/scroll-to-position-jquery-offset-animation
        // Couldn't do it by myself, went on stack overflow and modified the code a little
    });
    // --------------------------------------------------------------------------------
    var table_open = false;
    $char_menu.find("li").click(function (element) {

        var choice = $(this).attr("id");
        $char_info.children().remove("tr");

        character[choice].forEach(function (char) {
            var table_row = $("<tr></tr>");
            var name = $("<td></td>").text(char.name);
            var image = $("<img>").attr("src", char.image);
            var description = $("<td></td>").text(char.description);
            table_row.append(name);
            table_row.append(image);
            table_row.append(description);
            $char_info.append(table_row);
        });

        if (!table_open) {
                $table.slideDown(400);
                table_open = true;
            }

    });

    $char_hide.click(function () {
        if (table_open) {
            $table.slideUp(400);
            $char_hide.text("Show Characters");
            table_open = false;
        } else {
            $table.slideDown(400);
            $char_hide.text("Hide Characters");
            table_open = true;
        }
    });

    $("#feedback").click(function () {
        var response = prompt("What do you think of our site?\n Or What more would you like to see?")
        var send_response = confirm("Are you sure you want to send this response?");

        if (send_response) {
            alert("Thank you for your feedback! :D ");
            // Send data to server or something
        }
        return response;
    })

    // --------------------------------------------------------------------------------
    // Sections taken from https://en.wikipedia.org/wiki/List_of_Fullmetal_Alchemist_characters

    var character = {
        protagonist: [
            {
                name: "Edward Elric",
                image: "https://vignette.wikia.nocookie.net/deathbattle/images/1/19/Edward_Elric.png/revision/latest?cb=20150224042353",
                description: "Edward 'Ed' Elric, the 'Fullmetal Alchemist', is the youngest State Alchemist in history, joining the program at the age of 12. He and his younger brother, Alphonse, scour the world in search of the Philosopher's Stone, in the hopes of restoring their bodies. Edward lost his left leg in a futile attempt to revive his mother, Trisha, using Alchemy, and lost his right arm in exchange for attaching Alphonse's soul to a suit of armor. Edward now employs the use of metal prosthetics, known as automail, as replacement limbs. However, as attempting to resurrect a human opens a portal called the Gate of Truth to allow the committer/s to see the Truth, Edward gained great knowledge of the universe as well as the powerful ability to perform transmutations without transmutation circles. Edward is smart, brave and even bold, but also has a prideful tendency to be harsh and arrogant. He harbors a sharp sensitivity to his short height; a recurring gag in both manga and the anime series is for Edward to overly react to people who call him short."
            },
            {
                name: "Alphonse Elric",
                image: "http://vignette1.wikia.nocookie.net/deathbattlefanon/images/e/e0/Alphonse.png/revision/latest?cb=20151117012553",
                description: "Alphonse 'Al' Elric, is Edward's younger brother. Together, both of them scour the country in search of the Philosopher's Stone in the hopes of restoring their bodies. Unlike Ed, who lost one of his legs in the failed attempt to revive the brothers' mother, Al lost his entire body. At the last moment, and at the cost of one of his arms, Ed sealed Al's soul in a giant suit of armor, making Al almost invulnerable."
            },
        ],
        supporting: [
            {
                name: "Winry Rockbell",
                image: "https://vignette.wikia.nocookie.net/p__/images/e/ef/Winry_Rockbell.png/revision/latest?cb=20150326174819&path-prefix=protagonist",
                description: "Winry Rockbell, a childhood friend of Edward and Alphonse Elric, lives in Resembool with her grandmother, Pinako Rockbell, who raised her after the death of her parents during the Ishbal War. Her parents were killed by Scar in a blind rage. Winry is a practicing and gifted automail mechanic, following in her grandmother's footsteps, continually designing and maintaining Edward Elric's automail prosthetics. Winry is often used as an unwitting hostage by the homunculi to ensure the Elrics' subservience to the State. A running gag in the series is that she will violently attack Edward whenever he upsets her in some way, usually whenever he breaks his automail in combat. She and Edward get married in the concluding moments of the manga. In the first anime, her parents were executed by a younger Roy Mustang under Military order. She is voiced by Megumi Toyoguchi and Caitlin Glass in the Japanese and English versions, respectively."
            },
            {
                name: "Izumi Curtis",
                image: "https://www.cosplayisland.co.uk/files/costumes/1593/32631/Izumi_Curtis_36320_1.png",
                description: "Izumi Curtis is the alchemy teacher of the Elric brothers. She agreed to train the brothers to hone their alchemical abilities after their mother died. She expands their training with a regimen of philosophy, martial arts, and living off the land. Her methods are derived from her own alchemy training: she was forced to survive in the northern region surrounding Briggs Fortress for a month (although it turns out she succeeded by stealing supplies from the northern fortress). She thinks of the Elrics as her own sons, and although she severs her student-teacher ties with them after learning of their attempts with human transmutation (and Ed's joining the State Military), she continues to do all she can to help them. She can be quite violent when punishing or sparring with the Elric brothers, so they tend to be deathly afraid of her. Her claim \"I'm a housewife!\" while confronting Greed became one of Arakawa\'s favorite scenes, she will often casually declare herself as one whenever someone asks who she is. This is due to her distaste of the alchemist profession. Izumi and her husband Sig Curtis were expecting a child years before the start of the series; however, their son was stillborn. Izumi tried and failed to revive the child through human transmutation (an act that created Wrath in the first anime). The failed attempt took some of her reproductive organs, resulting in her inability to ever again be pregnant, and to periodically vomit blood as well as leave her weak, the latter much to others\' disgust. Izumi could thereafter perform alchemy without a transmutation circle, because in the failed transmutation she saw the Truth. Izumi attracts the attention of the State Military for having survived the failed human transmutation. As she and her husband travel around Amestris in order to avoid the military, they eventually meet Ed and Al\'s father Van Hohenheim. He rearranges her insides to ease the blood flow, and persuades her to help collaborate in bringing down the State Military. Thereafter, she is never again seen coughing up blood."
            },
            {
                name: "Van Hohenheim",
                image: "https://static.zerochan.net/Van.Hohenheim.full.106422.jpg",
                description: "Van Hohenheim is the father of the Elric brothers with a keen knowledge of alchemy processes. He left them and his wife Trisha several years before the start of the series.It is later revealed that Hohenheim is several centuries old. Originally a slave from the Kingdom of Cselkcess under the designation 'Slave Number 23', Hohenheim was used for an experiment by his master, a well known scientist and alchemist, using his blood to create a shadow-like creature known as Homunculus. In thanks to his birth, Homunculus gave the slave the name Van Hohenheim and taught him how to read, write and perform alchemy. As years went on, Hohenheim's status improved and was soon close to the king. When Homunculus taught King Cselkcess how to obtain immortality, he instead gave it to Hohenheim and himself, sacrificing the citizens from Cselkcess. Possessing half of the Cselkcess citizens inside him, Hohenheim escaped in horror and tried communicating with them by the time he entered the land of Xing. Having played a role in Xing's development though alkahestry, Hohenheim came to Amestris where he met and married Trisha Elric. After discovering that Homunculus (now known as 'Father') was going to sacrifice the inhabitants from Amestris, Hohenheim left his family to travel around the country to leave shards from his Philosopher's Stone. When confronting Father, Hohenheim's plans succeed as he uses the shards to nullify Father's attempt to transmute the people from Amestris. However, after Father's defeat, Hohenheim dies peacefully in front of Trisha's grave, happy that he was able to meet her and have his sons."
            },
            {
                name: "Roy Mustang",
                image: "https://images4.alphacoders.com/231/thumb-1920-231208.png",
                description: "Colonel Roy Mustang, the 'Flame Alchemist', is a State Alchemist and Edward's direct superior. He is promoted to Brigadier General at the end of the series and is a General in the epilogue. He aims towards becoming the next Führer of Amestris, heavily relying on the support of his loyal subordinates to propel him along that path. Mustang would find this path interrupted by the murder of his best friend and confidant, Maes Hughes, afterward, beginning an almost behind-the-scenes investigation into finding the true culprit"
            },
            {
                name: "Riza Hawkeye",
                image: "https://images2.alphacoders.com/231/thumb-1920-231242.png",
                description: "First Lieutenant Riza Hawkeye is Roy Mustang's most trusted and dearest subordinate. She often carries out many of the tasks he is too lazy to do, acts as his personal assistant, and protects him from danger. She holds a strong sense of admiration for him, even willing to put her own life at risk; Roy returns this, and occasionally refers to her as 'My Queen', his chess code name for her. She also doubles as his voice of reason, keeping cool in heated situations, and scolding him when he allows his emotions to get in the way. Riza and Roy seem to share a close relationship as she identifies him as her most precious person. Riza specializes in firearms, particularly sniper rifles, and can hit nearly any target with lethal accuracy. In the series, she adopts a dog named Black Hayate from Kain Fuery that she raises with stern discipline; when Hayate urinates indoors, she fires a number of warning rounds at the wall around the dog to reinforce that doing so is against established protocol. In the form of a tattoo on her back, Riza bears the final notes to her father's work on Flame Alchemy, and his legacy as an alchemist and Mustang's teacher. After seeing what Mustang was capable of during the Ishbal War with such ability, Riza begs Roy to burn the tattoo, fearing the damage future flame alchemists could cause. Riza is reassigned as King Bradley's personal assistant to be used as a hostage when Mustang learns the homunculi control the State. When she discovers that King Bradley's adopted son, Selim, is a homunculus as well, she sends her discovery to Mustang in code as soon as she can. She eventually defects from the military to help Mustang overthrow King Bradley. Arakawa received various questions regarding the future of her relationship with Mustang and commented that, while Hawkeye stays with Mustang, a marriage would not be possible due to military regulations."
            },
            {
                name: "Jean Havoc",
                image: "https://img00.deviantart.net/2268/i/2015/113/4/3/jean_havoc__personaje_de_full_metal_alchemist_b__by_ignacio94-d5mc0ge.jpg",
                description: "Second Lieutenant Jean Havoc is one of Roy Mustang's most trusted subordinates. His chess code name is 'The Knight'. He is usually seen smoking a cigarette, something that Arakawa developed prior to the series' start to help Mustang to create fire to fight homunculus Lust. He was recruited by Mustang for his loyalty and general sincerity, as well as his above average shooting skills. Because working for Mustang requires moving frequently and a complete dedication of time, Havoc has very little free time, and cannot maintain a relationship with a woman for very long. He unknowingly dates Lust, who tries to extract information about Mustang from him. She is unsuccessful, and eventually reveals her true identity to him. In the course of the attempt to kill her, Havoc is severely injured when Lust stabs him through the spinal cord, leaving the lower half of his body completely paralyzed. Havoc is then encouraged to find another way to help their cause and later provides his support by supplying Mustang with whatever supplies they may need from his family's store. In the second anime, he is healed by Marcoh's Philosopher's Stone."
            },
            {
                name: "Maes Hughes",
                image: "https://i.pinimg.com/originals/d2/ec/47/d2ec470f571f6806ca72c3ba13c4a52e.jpg",
                description: "Captain Maes Hughes is an old friend of Roy Mustang. He works in the military's intelligence division, but spends much of his time using the military phone lines to brag to Mustang about his family. After his daughter, Elicia, is born, he fawns about how cute and talented she is and bombards others with pictures of her when he sees them. Despite his over-the-top comical tendencies, Hughes is a valuable ally to Mustang's goal of becoming Führer, supplying whatever classified intelligence that may be beneficial. He has also been shown to be a capable fighter, skilled with throwing knives. His general understanding of others' emotions and desire to help them similarly gains the affection of the Elric brothers and their friend Winry Rockbell, as he always offers advice or hospitality to them when they need it. During one of his attempts to help the Elrics, Hughes learns of the homunculi's control over the country. However, he is shot and killed by Envy, disguised as Hughes' wife, Gracia. This leads Mustang to further investigate the truth for himself, in hopes of finding his friend's killer."
            },
            {
                name: "Alex Louis Armstrong",
                image: "https://static.zerochan.net/Alex.Louis.Armstrong.full.624163.jpg",
                description: "Major Alex Louis Armstrong, the 'Strong Arm Alchemist', is a large and comically emotional State Alchemist who will burst into tears or joyous praise, given the right situation, and embraces others in an effort to console them. Because of his extremely muscular build, this usually causes great personal injury to others. Armstrong is very proud of his strength and of his muscular physique, frequently taking off his shirt so that he can flex to show off. As a final element of his comedic properties, he has the tendency to 'sparkle', a trait apparently shared by the rest of his family; when first appearing in a scene or taking off his shirt, pink stars radiate from his body. Despite his humorous tendencies, Armstrong can be very serious when the situation calls for it. He is not fond of violence and will try to end conflicts peacefully, and will break down and cry if an innocent person is killed. Armstrong comes from a wealthy family of aristocrats who have earned renown in most professions. He has mastered many of his family's talents for himself, and when displaying such a talent, he brags and remarks it to have been 'passed down the Armstrong line for generations.' His alchemical skills also represent a remnant of his family's history; by using a unique kind of cestus, Armstrong can reshape any solid object that he punches."
            },
            {
                name: "Olivier Mira Armstrong",
                image: "http://i246.photobucket.com/albums/gg91/Devonjw91/FullmetalAlchemist/Olivier.jpg",
                description: "Major General Olivier Mira Armstrong is the older sister of Alex Louis Armstrong. She is charged with leading Briggs' Fortress, and protecting the country from the neighboring country of Drachma. Unlike her brother, who is cheerful and rather emotional, Olivier is stoic and distrusts everyone when she first meets them; she has no patience for formalities or idle conversation. She is also, similarly, a firm believer in survival of the fittest. This has earned Olivier a reputation within the military, and in Drachma, as one who should not be crossed, though her subordinates hold her in high regard. Because she readily joins them in hostile situations and disregards the orders of superiors if she disagrees, her subordinates will answer only to her. Despite her cold attitude, she is heavily implied to care greatly for her subordinates and family, and in rare instances shows some emotion before reverting to her usual personality. She always carries a sword at her side, and is proficient enough to be able to defeat her brother in combat."
            }
        ],
        antagonist: [
            {
                name: "Father",
                image: "https://vignette.wikia.nocookie.net/fma/images/8/82/Fullmetal_Alchemist_-_44_-_Large_29.jpg/revision/latest?cb=20110826195601",
                description: "'Father' is the creator of all homunculi using flawed aspects of his personality, and is the series' central antagonist. He was originally known as 'The Dwarf in the Flask' or 'Homunculus', a shadowy, charismatic creature created eight centuries ago in Cselkcess under the commission of its king to obtain infinite knowledge. Confined within a flask where it can thrive, Homunculus formed an attachment to the young slave boy whose blood had been used in his creation, naming the lad Van Hohenheim, educating him and enabling him to rise up the social hierarchy. However, Homunculus grew envious of the human race, jealous of their mutual emotional support for each other whilst he grew lonely, being the only one of his kind. This envy caused Homunculus to lose sight of his own gifts and talents, eventually losing much of his self-confidence, and as he disliked this low self-esteem of his, he filled himself up with hubris. Playing on the vain King's desire to become immortal, Homunculus tricked the king into creating a country-wide transmutation circle for the creation of a Philosopher's Stone, whose necessary ingredient is the souls of several living human beings. Once activated, Homunculus ensured that he and the unaware Hohenheim were in the center, absorbing the souls of the Cselkcesian population between them. During the process, Homunculus used Hohenheim's blood within him to create a humanoid husk body to serve as his mobile vessel before parting ways."
            },
            {
                name: "Pride",
                image: "https://static.tumblr.com/4e7c61b710875739623dd8b603e0cf3c/qma4j4w/lvJp08v5y/tumblr_static_8vw2etmx7bk8gcgg4so480okg_640_v2.jpg",
                description: "Pride, the Arrogant, is the first homunculus created by Father. He was created in Father's true image, and thus appears as a dark blob covered with eyes. He orders his younger 'siblings' to perform their respective tasks. He can destroy or manipulate anything that his shadow comes into contact with, see anything through shadows, possess the bodies of others by repressing their connections to their respective souls, and gain the physical traits of whomever he eats (such as Gluttony's appetite and sense of smell). The presence of his unleashed form gives off an intense, dreadful pressure. His identity is a mystery until during the later half of the series. Taking on a host body in Selim Bradley, the adoptive son of King Bradley, Pride can only exist within a given area: the area surrounding his host body and the underground transmutation circle running throughout Amestris (which he is tasked to guard). He needs a light source in order to be able to use his shadow, and his shadow can similarly be 'killed' if the light becomes too bright or he is surrounded by darkness. Hubristic and boastful, he bears disdain for the human race, enjoys shaming and mocking others, and acts in a guiltless, abhorrent and self-seeking way towards virtually everyone, including most of his fellow Homunculi. He gets angered by any defiance coming from his younger 'siblings'. He thinks in a very biased manner, using excuses to provide justifications for his cruelty. Despite these baleful traits, he has some attachment to his adoptive human mother."
            },
            {
                name: "Envy",
                image: "https://static.comicvine.com/uploads/original/11125/111257299/5025037-3638658093-Fullm.png",
                description: "Envy, the Jealous, is a homunculus who can change into any being at will. When not incognito, Envy prefers the form of a young, androgynous teenager. Because of its ability, Envy usually acts as infiltrator for the other homunculi, often assuming another's identity in order to gain sensitive intel. Envy enjoys violence between humans, having shot an Ishbalan child, sparking the resulting civil war. Envy's natural form resembles that of an enormous leviathan creature, composed of citizens of Cselkcess. After Lust's death, Envy replaces her as the homunculi's messenger. While on a mission to personally capture Dr. Marcoh, all of the souls composing Envy's true form are destroyed in the ensuing battle, reducing it to a tiny parasitic creature that is revealed to be its actual original form."
            },
            {
                name: "Wrath",
                image: "https://img00.deviantart.net/dbbd/i/2010/174/f/d/wrath_alias_king_bradley_by_insanepiece.png",
                description: "Wrath, the Furious, is the true identity of King Bradley, the leader of Amestris's State Military and the leader of Amestris, having the title of Führer. He is the last homunculus to be created by Father as of the start of the series, though unlike the others he was born a human who was later fused with a Philosopher's Stone. Though initially portrayed as a kind ruler, he is later revealed to be a hateful homunculus whose weapon of choice is the sword, which he wields with great proficiency. His deadly swordsmanship is further augmented by the 'Ultimate Eye', a clairvoyant eye that bears the Ouroboros seal, which is usually covered by an eyepatch. The eye gives him the ability to see what the opponent will do next, allowing him to predict the moves of any opponent before they happen, along with being able to see things the normal human eye can not, such as air currents."
            },
            {
                name: "Sloth",
                image: "https://img00.deviantart.net/2f28/i/2010/111/e/5/homunculus___sloth_by_arthuria99.jpg",
                description: "Sloth, the Indolent, is a large, muscular, dim-witted man who believes everything to be pointless and tiresome. Despite his lazy nature, he is very strong physically, and is the fastest of the homunculi. He typically chooses to be indifferent, and is extremely reluctant to care about anyone or anything. He is tasked with digging a gigantic transmutation circle beneath Amestris to be used in turning the country into a Philosopher's Stone. Though he is briefly impeded in this job when he runs into the Elric brothers at Briggs' Fortress, he is allowed to continue his work. After finishing the circle. Sloth serves as Father's bodyguard and fights off Mustang and Olivier's troops when they invade Central. He is eventually killed through the combined efforts of the Armstrong siblings and Izumi and Sig Curtis."
            },
            {
                name: "Greed",
                image: "https://static.comicvine.com/uploads/original/11117/111172374/4055249-greed_ling.png_3.png",
                description: "Greed the Avaricious, the 'Ultimate Shield', is a rogue homunculus who craves money, women, and other worldly possessions above all else. Because of this, he betrays the homunculi, as working to feed Father's greed would deprive Greed of his own greedy desires. He has the ability to rearrange the carbon atoms that coats his entire body in diamond-hard body armor. Greed is introduced when he sends some of his chimera subordinates to capture Alphonse Elric so he can obtain the secret of immortality from him and Edward."
            },
            {
                name: "Gluttony",
                image: "https://i.ytimg.com/vi/Nd0iymft-rU/maxresdefault.jpg",
                description: "Gluttony, the Voracious, typically appears in the company of Lust. He is an obese, simple-minded homunculus whose thoughts rarely stray far from eating. He has powerful jaws and acidic saliva and can and will eat almost anything. He particularly likes eating people, and the only way he can find enjoyment in a battle is if he can eat his opponent afterward. Gluttony is the failed product of Father's attempts to create a Gate of Truth. When activating this imperfect portal, Gluttony's stomach opens up, revealing a bestial counter-version of the Eye of Providence at its center. His ribs spread out to act as a border for the gate and double as large extensible teeth that can consume everything in his corrupt Eye's field of vision in an instant. Anything Gluttony consumes is transported to a stagnant, hellish dimension, which is filled with an endless repugnant sea of blood, and is littered with artifacts from centuries before the start of the series."
            },
            {
                name: "Lust",
                image: "http://cdn.playbuzz.com/cdn/e89d1a99-fef3-4e47-b2ea-0a777952be39/79ca377e-32ce-4e26-b324-c2c5155585a3.jpg",
                description: "Lust, the Lascivious, the 'Ultimate Spear', appears as a shapely woman who acts as envoy for her leader in both iterations, and encourages humans down her desired path. She also serves as the homunculi's primary assassin, killing those who discover their plans, and also those who had served as the homunculi's allies but are considered disposable. She can extend her fingers to great lengths, and these fingers are capable of cutting through most substances on Earth. After leading an effort to capture Barry the Chopper, her plans backfire when Roy Mustang infiltrates the homunculi's secret lair. Mustang repeatedly blasts Lust with flames, ultimately killing her after depleting the power of her Philosopher's Stone."
            },
            {
                name: "Scar",
                image: "https://static.comicvine.com/uploads/original/11112/111128645/5432757-7692853208-40552.jpg",
                description: "Scar, 'the scarred man', is one of the survivors of the Ishbalan Extermination Campaign. Depicted as an Ishbalan warrior priest, Scar was a capable fighter who desperately tried to save whomever he could from the onslaught. However, Kimblee's enhanced alchemical attacks were too much. Scar's brother, who had been researching Amestrian alchemy and Xingese alkahestry (considered heresy by Ishbalans) in an attempt to gain power against the State, gives Scar his right arm in order to save his life."
            }
        ],
    }

});