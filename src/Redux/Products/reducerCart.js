import { 
    ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTITY, EMPTY_CART } from "./type";

    const initialCardData = {
        products:[
            {
                id: 1,
                name: "Grande Guerre Patriotique",
                description: "Alors qu'un pacte de non-agression est signé depuis le 23 août 1939, Hitler surprend Staline et lance l'opération Barbarossa le 22 juin 1941, qui a pour objectif d'envahir l'URSS.\n C'est à 3h 30 du matin, sans aucune déclaration de guerre\n et à la surprise\n générale que cette attaque commence. Appliquant le principe de la guerre éclair, appelé Blitzkrieg par les nazis, l'armée de l'air allemande, suivi au sol par l'armée de terre, survole les terres soviétiques en bombardant à tout va les bases militaires et villages qu'ils croisent. C'est l'attaque aérienne la plus gigantesque de l'histoire. Dès midi, les conséquences sont déjà désastreuses. Des centaines d'avions et d'appareils défensifs sont détruits, sans compter les pertes humaines. L'opération Barbarossa se déroule à merveille. Au nord, Leningrad (St-Pétersbourg) est assiégé pendant près de 900 jours et un million de personne meurent de faim. Au sud, Kiev est encerclé et se sont plus de 650 000 de soldats qui sont capturés. La ville, bombardé, est en ruine totale. Cela fut le plus grand encerclement de l'histoire. En octobre 1941, Hitler, certain de sa proche victoire contre l'URSS, annonce qu'il ne reste 'plus qu'une dernière frappe formidable à donner'. Ce même mois la bataille de Moscou, désigné comme opération Typhon par les nazis, commence. Les allemands sont sur le point de prendre la ville et la situation devient tellement critique que même Staline, au bout du gouffre, est à deux doigts d'abandonner, mais se ressaisi. Car l'hiver arrive. S'enclenche donc une guerre d'usure qui consiste à maintenir ses positions. Et c'est grâce à la mise en place d'une logistique ou toutes les usines sont transformées pour fabriquer des armes, munitions et autre matériel militaire, l'organisation impliqué de toute la population et surtout le courage des soldats soviétiques, qui se sont sacrifiés pour la survie de leurs enfants et la liberté, que les allemands sont vaincus. Ce fut l'un des premiers déclins de l'armée allemande, dépassée par les conditions météorologique très rudes, le manque de ravitaillement et la fougue des soldats soviétiques. Et la prochaine grande bataille marquera un tournant de la guerre, celle de Stalingrad, qui débute le 17 juillet 1942. Comme ce fut le cas à Moscou, une guerre d'usure est en place. Les combats sont menés nuits et jours, dans un décor apocalyptique. Et les soldats soviétiques, acharnés, finissent par encercler les allemands au bout de 6 mois de bataille. Le 1er maréchal nazi capitule, désobéissant aux ordres d'Hitler, et dès lors les troupes allemandes ne feront que reculer. Suit la bataille de Koursk, la plus grande bataille de chars de tous les temps. Le T-34 soviétique, l'AK-47 des chars contre les nouveaux modèles allemands très sophistiqués: les Tiger et les Panther. Une bataille aux proportions épiques: plus de 6000 chars, 2000 avions et 2 millions de soldats se sont affrontés. Le conflit se termine par une victoire soviétique et marque le tournant définitif de l'issue de la guerre. Malgré des pertes considérables du côté de l'armée rouge (le rapport de perte est de 1 côté nazi contre 6 côté soviétique), les allemands perdent l'initiative qu'ils ne reprendront à aucun moment par la suite. L'opération Barbarossa se conclut finalement par un échec. Si la bataille de Stalingrad représente un tournant psychologique de cette guerre, Koursk en signifie le basculement définitif. L'armée rouge avancera ensuite tel un 'rouleau-compresseur' jusqu'aux portes de Berlin. Enfilez votre tenu kaki, chaussez vos bottes en cuir et prenez en main votre SVT-40 et partez à la guerre tel un soldat soviétique pour tuer du Nazi et libérer le monde de sa idéologie. Vous arriverez à Moscou le 1er octobre 1941 pour affronter l'arrivée imminente de la Wehrmacht. Ensuite, si vous survivez, sous les ordres du maréchal Joukov vous aiderez les soldats à gagner les batailles de Stalingrad, de Koursk et opérer lors de la mission Bagration pour ensuite arriver jusqu'à Berlin pour en finir avec ces foutu nazi. L'armée Rouge a connu beaucoup de héros durant cette guerre. Des hommes d'exception comme Zinovi Kolobanov, victorieux lors d'une bataille opposant ses cinq chars contre 22 chars allemands, Semion Nomokonov, surnommé par les allemands le shaman de la Taïga, qui a éliminé près de 368 soldats ennemis en utilisant un fusil simple sans lunette télescopique, ou encore la célèbre Liudmila Pavlitchenko, le meilleur tireur d'élite féminin de l'histoire. A elle seule, elle a éliminé 309 nazis. Serez-vous à la hauteur de ces hommes la?",
                price: 17500,
                duration: "365 jours",
                image1: "https://i.redd.it/5laf8c2ihpkz.jpg",
                image2: "https://pbs.twimg.com/media/EcJj6z3XYAIQXlq.jpg",
                image3: "https://cdni.rbth.com/rbthmedia/images/2018.02/original/5a747f0d15e9f92c46623371.jpg",
                categorie: "Time",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 2,
                name: "L'âge Viking",
                description:
                    "Les Vikings étaient des peuples scandinaves ayant leur propre religion ainsi qu'une culture très riche. Mais la prospérité de ce peuple était fortement limitée par leurs terres: conditions climatiques rudes, faible productivité de leurs sols ainsi que l'isolation géographique. C'est donc la recherche d'une meilleure vie et la gloire qui poussa les scandinaves a explorer, coloniser et piller d'autres terres. Notamment les terres d'Angleterre. C'est à la fin du XVIII° siècle, qu'un groupe de vikings, menés par un certain Ragnar Lothbrok, arrivent sur les côtes anglaises, à bord de leurs robustes Drakkars. Ils y croisent un monastère où ils massacrent les prêtres, en réduisent quelques uns à l'esclavage et pillent les trésors. A leur retour, ils sont accueillis en héros et de plus en plus de navires quittent les côtes scandinaves à la recherche de gloire et célébrité. Ne connaissant rien des hommes du Nord, les anglais croyait que c'est le diable lui-même qui les auraient envoyé. Ils s'avère aussi que leurs croyances respectives n'avaient pas grand choses en commun. Une différence trop marquée pour pouvoir vivre en paix. Nous vous proposons donc de revenir dans le temps des premiers raids vikings en Angleterre et de pouvoir y participer. Partez sous les ordres de Ragnar et combattez les anglais sous le drapeau du corbeau volant, ou bien écrivez votre propre histoire si vous parvenez à trouver un groupe de vikings assez fous pour vous suivre dans vos aventures. Explorez, pillez, colonisez à la gloire d'Odin.",
                price: 7600,
                duration: "30 jours",
                image1: "https://i.pinimg.com/originals/16/df/f6/16dff63650998830a21076aaffb4c0f2.jpg",
                image2: "https://image.sciencenordic.com/1453865.jpg?imageId=1453865&panow=0&panoh=0&panox=0&panoy=0&heightw=0&heighth=0&heightx=0&heighty=0&width=1200&height=630",
                image3: "https://img2.looper.com/img/gallery/the-true-meaning-behind-the-phrase/skol-is-the-friendliest-word-on-vikings-1600377435.jpg",
                categorie: "Time",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 3,
                name: "22.11.63",
                description:
                    "John Fitzgerald Kennedy est né le 29 mai 1917 à Brookline. Il fait partie d'une famille composée de 9 enfants dont il est le second. Dans les années 1940 il fait partie de l'équipage d'un navire patrouilleur pendant la seconde guerre mondiale, ce qui lui permet de recevoir des récompenses militaires. Un film propagande lui est même dédié. Initialement, John ne devait pas un jour devenir président des Etats-Unis, mais après le décès tragique de son frère ainé, Joseph, lors d'une mission aérienne (qui s'est avérée être inutile plus tard), les choses vont changer. C'est donc en 1946 qu'il débute sa carrière politique et le 20 janvier 1961 il élu 35° président des Etats-Unis. Dès son arrivé, beaucoup de choses vont changer. L'homme de la maison blanche se bat sur tous les fronts. Il lutte contre la pauvreté, que ce soit à l'intérieur ou à l'extérieur du pays, notamment en créant les 'Peace Corps'. Il lança un programme d'armements parmi les plus importants en temps de paix et augmente le nombre de bombardiers stratégiques et autres missiles, en doublant au passage l'URSS. En avril 1961, il donne feu vert pour une opération organisé par la CIA afin de renverser le président cubain Fidel Castro. Cela fut un retentissant échec, plus connu sous le nom de la 'Baie des Cochons'. John a assumé sa défaite en public, mais en privé jette la faute sur la CIA qui l'aurait manipulé à leur détriment. C'est d'ailleurs à partir de ce moment la que le président est devenu très méfiant par rapport aux divers services secrets. En mai de la même année, il relève le défi spatial lancé par les Soviétiques et promet que les américains marcheront sur la Lune avant les Soviétiques, il lança donc le projet Apollo. Promesse tenu à titre posthume. En octobre 1962, il découvre que des sites de missiles nucléaires soviétiques en direction des Etats-Unis sont construits à Cuba. Kennedy n'hésite pas et ordonne une quarantaine autour de Cuba afin de bloquer les navires communistes de pouvoir livrer du matériel destiné aux bases des missiles. Au même moment il installe en Turquie le même type de dispositif cette fois pointé vers l'URSS. Des négociation virulentes commencent alors entre JFK et Nikita Khrouchtchev. La troisième guerre mondiale n'était pas loin d'être déclenchée à cet instant la. Cela fut même le moment où la guerre froide a connu son apogée en terme de tensions. Fort heureusement, les deux hommes politiques, conscient de la gravité de la situation et des conséquences qui peuvent en découler, parviennent à régler la situation. Cela fut appelée la 'Crise de Cuba'. Sept mois après ces faits, il prononce un discours sensibilisant sur la course aux armements et de la menace que cela représente sur le monde. Le même mois il fait son discours célèbre à propos du mur de Berlin. Et puis vient ce jour de 22 novembre 1963, où John Fitzgerald Kennedy, à Dallas, à bord de sa Lincoln Continental, devant une foule de personne et aux côtés de sa femme Jackie, fut assassiné par un certain Lee Harvey Oswald, qui est lui-même assassiné deux jours plus tard. John était un président légendaire et symbolique, celle de la jeunesse, de l'énergie et de l'avenir. Il s'est battu pour des causes justes et en a surement payé les frais. Aujourd'hui plus de la moitié des américains pensent que John est le meilleur président des Etats-Unis de tous les temps. Plusieurs décennies sont passées et les théories autour de cet assassinat sont toujours d'actualité. C'est donc avec grand plaisir et d'espoir que l'on vous propose de réaliser un voyage temporel pour essayer de changer le cours de l'histoire. Ou juste profiter des années 60 si vous en avez rien à foutre de l'histoire. Lors de votre arrivée, planifiée pour le 22 septembre, vous serez en contact direct avec Robert Kennedy, le petit frère de John, pour essayer d'empêcher l'assassinat. Beaucoup de théories circulent sur cette affaire. Et c'est vous qui allez résoudre ce dossier. Votre objectif sera d'abord de vous informer sur sa vie: ses contacts avec la mafia, ses relations avec les différents services secrets, ses maîtresses (dont Marilyn Monroe en fait partie), ainsi que sa idéologie politique pour comprendre pour qui la mort de John était bénéfique. Peu de gens croient au fait que Lee Harvey Oswald a vraiment agi seul. Surtout suite à son assassinat 48 heures après. L'extrême droite? La mafia? CIA? CIA et FBI? Fidel Castro? Lyndon Johnson? L'homme au parapluie? Les extraterrestres? Ca sera à vous de le découvrir.",
                price: 4790,
                duration: "30 jours",
                image1: "https://www.history.com/.image/t_share/MTYwMzAzMDQ1OTc5MTUzNTQ2/jfk_pt-109_jfk-library_promo.jpg",
                image2: "https://i.ytimg.com/vi/-GN1tcAWx9Y/maxresdefault.jpg",
                image3: "https://www.lejournalinternational.fr/photo/art/grande/6061396-9044418.jpg?v=1384869774",
                categorie: "Time",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 4,
                name: "Jurassik",
                description: "Après 4 milliards d'années de formation de la Terre, la vie émerge. C'est le début de l'éon Phanérozoïque. Qui lui se compose de l'ère Paléozoïque, Mésozoïque et de Cénozoïque. L'ère Cénozoïque se poursuit encore de nos jours. Mais nous allons nous intéresser à l'ère Mésozoïque, qui lui se compose de trois périodes: Trias, Jurassique et Crétacé. C'est lors de la période de Trias que les premiers dinosaures apparaissent. Et à la fin de cette période, le seul et unique continent terrestre Pangée se déchire et la vie sur Terre subit une quatrième extinction massive de son histoire, causant la disparition de 50% des espèces présentes. C'est donc la période du Jurassique qui commence, et qui s'étendra sur 55 millions d'années. Contrairement à la période Trias, où le climat était chaud et sec, lors du Jurassique il devient chaud et humide. Ce qui permet à la végétation de s'épanouir, tout comme les espèces herbivores. Les dinosaures deviennent rapidement les animaux terrestres dominants de l'époque. C'est à cette période aussi qu'apparaissent les premiers crocodiliens, qui sont aujourd'hui les parents les plus proches des oiseaux. A l'époque, ces crocodiles vont atteindre des tailles considérables. Comme par exemple le Sarcosuchus Imperator qui atteignait les 15 mètres de long pesait près de 10 tonnes. Beaucoup d'autres espèces apparaissent à cette période. Et vous pouvez désormais les découvrir en remontant le temps avec nous. Lors de ce voyage vous serez logé dans un centre hyper sécurisé empêchant toute sorte d'invasion. Vous aurez la chance de partir en expédition et d'observer beaucoup de différents espèces de dinosaures de vos propres yeux. ",
                price: 4680,
                duration: "4 jours",
                image1: "https://www.funkidslive.com/wp-content/uploads/2016/06/Jurassic.jpg",
                image2: "https://cdn.pixabay.com/photo/2019/02/01/14/24/landscape-3969074_1280.jpg",
                image3: "https://pbs.twimg.com/media/DGVHMU3UAAECmVd.jpg",
                categorie: "Time",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 5,
                name: "Mir",
                description: "Mir a été découverte il y a quelques années par nos chercheurs dans la constellation du Bélier à 65 années lumière de notre planète.\r Son indice de similarité est de 0.96 (1 s'il y a similitude exacte), et nos recherches nous ont permis de connaître ses caractéristiques. Elle s'avère être une planète tellurique (rocheuse) abritant des océans tout comme la notre. La présence d'une végétation est probable à 93%. Sa température moyenne est de 10 °C avec des extrêmes allant de -35 °C à +45 °C. Sa pression atmosphérique à la surface est de 1.1 bar (1 sur Terre) et sa gravité est un poil moins importante que celle que nous ressentons chez nous. Donc hypothétiquement elle pourrait abriter une forme de vie semblable à la notre. Et c'est pour cela que nous vous proposons de rejoindre notre équipage pour une mission de longue durée avec pour objectif d'installer une colonie et de poursuivre nos recherches sur place. Votre but sera donc de nous aider à explorer ce nouveau monde. Parcourir et découvrir les paysages jamais vu par l'œil humain, faire les prélèvements nécessaires et d'étudier Mir. Peut-être que vous aurez la chance d'approcher une espèce encore inconnu.",
                price: 91890,
                duration: "Non déterminé",
                image1: "https://i.pinimg.com/originals/83/57/9b/83579b61e05d4220a2ad1a936582527d.jpg",
                image2: "https://lejournal.cnrs.fr/sites/default/files/styles/visuel_principal/public/assets/images/fotolia_38108477_recadree_72dpi.jpg",
                image3: "https://bestwallpapers.in/wp-content/uploads/2018/05/fantasy-world-mountains-river-planets-stars-4k-wallpaper-1024x702.jpg",
                categorie: "Space",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 6,
                name: "Trappist-1 d",
                description: "Cette exoplanète au nom peu avenant est découverte en 2016. Elle est situé à environ 40 années lumière de la Terre dans la constellation du Verseau. Son indice de similarité avec notre planète est de 0.90, ce qui est très prometteur. Sa température moyenne est de 9 °C et comme sa rotation autour de son étoile est synchrone, on estime qu'un côté de Trappist est relativement chaud et l'autre au contraire toujours froid. Donc probablement la vie pourrait se développer entre les deux faces. Ce qui est sûr, c'est que l'eau y est présente. Le problème est que nous n'avons pas pu déterminer dans quelles proportions; Il se pourrait qu'elle s'avère d'être une planète entièrement couverte d'eau. Ce qui est problématique pour la survie d'une espèce terrestre. Cependant, elle pourrait donc abriter une forme de vie aquatique. Votre mission sera alors de découvrir sa composition exacte. De la démystifier et de savoir exactement si cette planète est propice à la vie. On estime que qu'il y a 300 millions d'exoplanètes habitables dans notre Galaxie, peut-être que c'est la bonne.",
                price: 27850,
                duration: "Non déterminé",
                image1: "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA21428_hires.jpg",
                image2: "https://upload.wikimedia.org/wikipedia/commons/7/71/TRAPPIST-1d_artist_impression_2018.png",
                image3: "https://scx2.b-cdn.net/gfx/news/2018/exoplanetswi.jpg",
                categorie: "Space",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 7,
                name: "Planète Rouge",
                description: "Bienvenue sur la planète Rouge. Cette planète aux allures hostiles, du fait de ses tempêtes de sable qui peuvent durer plusieurs mois ou de son atmosphère poussiéreuse constitué de rouille. Mais qui finalement nous est si familière, car Mars est le symbole de la conquête spaciale, loin devant la Lune. Un point stratégique même, si on espère un jour pouvoir explorer l'univers. Mars fait aussi objet de beaucoup d'histoire et de mystères. Cet astre a toujours suscité de l'intérêt de la part d'astronautes ou encore d'écrivains qui s'en sont inspirés pour créer des classiques comme 'La guerre des Mondes', 'Le cycle de Mars' ou encore 'Aélita'. Un rêve à la limite de la science-fiction et la réalité, jusqu'aujourd'hui. Car dès à présent, vous avez la possibilité d'y faire un aller-retour sans aucun risque. Partez dès aujourd'hui sur la planète Rouge où vous serez accueilli dans notre colonie installé sur place depuis plusieurs années. Au cours de ce voyage vous aurez la possibilité de voir le plus grand volcan de notre système solaire, parcourir les grands espaces désertiques à la recherche d'un indice de plus qui pourrait aider pour démystifier un peu plus cette planète, ou encore explorer les grottes martiennes qui restent à ce jour, encore inexplorées.",
                price: 11950,
                duration: "90 jours",
                image1: "https://www.vaisala.com/sites/default/files/styles/16_9_liftup_extra_large/public/images/LIFT-Mars%20the%20Red%20Planet-1600x900.jpg?itok=YXq-Cv1K",
                image2: "https://ici.exploratv.ca/upload/cms/IMAGES_2020/mars-gravite.jpg",
                image3: "https://www.gataka.fr/wp-content/uploads/2015/12/Fantasmes-et-r%C3%A9alit%C3%A9s-de-la-plan%C3%A8te-Mars-1.png",
                categorie: "Space",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 8,
                name: "L'étoile du Berger",
                description: "L'étoile du Berger est la première étoile visible lors du coucher du soleil, tout comme elle est la dernière visible au lever. sauf que ce n'est pas vraiment une étoile, mais plutôt une planète. Et pas n'importe laquelle puisqu'il s'agit de Vénus. C'est grâce à son éclat remarquable qu'elle porte le nom d'une déesse romaine de l'amour et de la beauté. L'astre est très similaire à la Terre de part sa taille et son poids. Ce qui lui vaut le surnom de 'La sœur jumelle' de notre planète. Et malheureusement ce sont presque les seuls point communs qu'elles ont. Car finalement Vénus est radicalement différente. La température à la surface est extrêmement rude (460 °C environ) tout comme la pression atmosphérique qui est 90 fois plus forte qu'à la surface terrestre. En plus de cela, l'atmosphère est recouverte totalement par des nuages d'acide sulfurique. C'est d'ailleurs grâce à ces nuages qu'elle brille autant à nos yeux. Ses nuages ont justement toujours provoqués une grande part de mystère envers Vénus car jusqu'au années 1960 encore, les scientifique soviétiques et américains, pour ne parler que d'eux, espéraient y trouver une forme de vie. Car de plus la planète est située dans la zone 'habitable' de notre système solaire. Nous vous proposons un voyage pour Vénus où vous serez logé dans notre base aérostatique situé à 50 kms de sa surface où la pression est égale à celle de la Terre et où la température est proche des 60 °C. Au cours de ce voyage vous aurez la possibilité d'explorer son atmosphère pendant 20 jours et d'y faire des prélèvements nécessaires pour démystifier encore plus cet astre.",
                price: 9870,
                duration: "60 jours",
                image1: "https://i.pinimg.com/originals/c9/0b/95/c90b95c651291f42279df6f9ab58641e.jpg",
                image2: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2020/10/surface-of-venus-concept-1028201.jpg",
                image3: "https://i.redd.it/q26ml4j2kyh41.jpg",
                categorie: "Space",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 9,
                name: "Luna",
                description: "La Lune est le corps céleste le plus proche de la Terre. Il reste cependant tout aussi mystérieux, et est à l'origine de croyances plus divergentes les unes que les autres. Des croyances plurimillénaires et surement antédiluviennes. Il fut même un temps où la Lune était vénéré comme un Dieu. La Lune fait clairement partie de l'histoire de l'humanité. Elle est à l'origine même de l'unité du temps. Les Romains lui dédièrent d'ailleurs le 1° jour de la semaine: Lunae, surement à l'origine du mot Lundi. Dans le folklore, la Lune est aussi importante, l'allié ultime des vampires ou encore l'origine de la transformation de loups-garous, on peut vraiment la retrouver partout. Et même dans la réalité elle reste très importante pour le bon fonctionnement de la planète. La Lune influence les marées, le jardinage, la fécondité, le psychisme, le sommeil, la menstruation et j'en passe. Elle influence aussi nos esprits puisque depuis des centaines d'années les populations rêvent de pouvoir réaliser ce voyage. Et ce rêve fut réalisé le 21 juillet 1969 où deux astronautes américains exécutent leurs premiers pas sur la Lune et démontrent au passage à toute l'humanité que même les rêves les plus fous sont finalement réalisables. Alors qu'encore 20 ans auparavant peu de gens pouvait réellement y croire. C'était juste inimaginable, deux personnes, dans une boite de conserve, propulsés à la vitesse maximale dans l'orbite puis traversant presque 400000 kms dans le vide spatial pour atteindre l'objectif et ensuite repartir à la maison, de la pure science-fiction. Même aujourd'hui on pourrait avoir du mal à croire que cela a vraiment été réalisé, surtout dans les années 60. De plus que malheureusement la dernière mission lunaire habitée date de 1972. C'est fort dommage que depuis aucune mission n'a vu le jour. Depuis quelques années maintenant on reparle de réaliser des missions habitées et même d'installer des colonies. Sauf que personne n'est au courant que nous avons déjà une base sur la Lune, crée en 2012. Une base divisée en deux parties. Une partie dédiée à son étude, et l'autre spécialement pour vous. Vous aurez droit de pouvoir aider nos scientifiques dans différentes missions d'exploration ou de simplement visiter les alentours, profiter du paysage ou encore tester nos quads lunaires.",
                price: 7600,
                duration: "35 jours",
                image1: "https://www.rfj.ch/Htdocs/Images/Pictures/20200505123804211.jpg",
                image2: "https://images.theconversation.com/files/108549/original/image-20160119-29756-1frh5c9.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
                image3: "https://trustmyscience.com/wp-content/uploads/2019/05/surface-lune-seismes.jpeg",
                categorie: "Space",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 10,
                name: "Les 9 cercles",
                description: "Pensez-vous avoir commis beaucoup de pêchés durant votre vie? Cédez-vous souvent à vos tentations? Etes-vous fidèle dans vos relation? Vous pensez pouvoir vous racheter avant de rendre l'âme? Racheter vos erruers? Vous repentir? Peu importe, cela n'a aucune importance pour nous. Que vous soyez un exemple de sainteté ou bien tout son contraire, vouz pouvez dès à présent goûter en avant-première aux supplices des 9 cercles de Dante. Que ce soit pour savoir ce qui vous attends dans quelques années ou par simple curiosité, vous pouvez visiter ce monde parallèle et en ressentir l'ambiance hostile de cet endroit macabre. Partez pour 9 nuits inoubliables en découvrant tour à tour chaque cercle de cet énorme entonnoir sans issu possible.",
                price: 4800,
                duration: "9 jours",
                image1: "https://i.pinimg.com/originals/cb/6d/94/cb6d94b3604f4ee62d5e9cb1b4ba4ce7.jpg",
                image2: "https://i2.wp.com/culturemetal.com/wp-content/uploads/2018/10/enfer-dorc3a9-chant-8.jpg?resize=736%2C586&ssl=1",
                image3: "https://media.npr.org/assets/artslife/arts/2010/02/dantesinferno/inferno_archive-becf91cdf5140a602f77b5514b518ba7db4db4f6.jpg",
                categorie: "Heaven",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 11,
                name: "Genèse",
                description: "Au commencement, Dieu créa un jardin, Eden était son nom. Placé au milieu d'une plaine délicieuse, couverte de verdure, qui s'étendait sur le sommet d'une montagne, et formant un rempart inaccessible. Au milieu du jardin était placé l'arbre de la Vie. Et non loin de celui-ci se trouvait l'arbre de la science du bien et du mal. Vous connaissez la suite de l'histoire. Aujourd'hui il est considéré comme perdu ou inaccessible du fait que Dieu ai placé des chérubins pour en interdire l'accès. Mais pas pour vous. Pour un prix raisonnable, visitez dès à présent le Paradis Terrestre. ",
                price: 3700,
                duration: "5 jours",
                image1: "https://www.reforme.net/wp-content/uploads/2019/05/Adam_et_E%CC%80ve_au_Paradis_Terrestre.jpg",
                image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jan_Brueghel_%28I%29_-_Earth_%28The_Earthly_Paradise%29_-_WGA3552.jpg/1329px-Jan_Brueghel_%28I%29_-_Earth_%28The_Earthly_Paradise%29_-_WGA3552.jpg",
                image3: "https://cdn.hipwallpaper.com/i/48/8/x5PTpr.jpg",
                categorie: "Heaven",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 12,
                name: "Croisière Infernale",
                description: "Vous avez toujours rêver de traverser le Styx? Alors cette offre est immanquable pour vous. Partez pour 6 nuits d'exploration de ce fleuve mythique. Vous pourrez visiter des lieux comme 'Le champ des guerriers', 'Le champ des larmes', 'Les murs cyclopéens' ou encore apercevoir les triples murs du Tartare. N'oubliant pas bien sûr la plus grande attraction de ce voyage, l'enfant de Typhon, gardien des enfers, Cerbère.",
                price: 3900,
                duration: "6 jours",
                image1: "https://i.pinimg.com/originals/43/b9/42/43b94283b935dbe80b621249f01dae91.jpg",
                image2: "https://cdn.radiofrance.fr/s3/cruiser-production/2019/04/96245da7-8f5c-4f55-930e-eb05bd502617/838_hades.jpg",
                image3: "https://mobil.mopo.de/image/29786270/max/1920/1080/b0c76a12febbb18e3b97a28007c63517/QM/cerberus.jpg",
                categorie: "Heaven",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 13,
                name: "Palais d'Odin",
                description: "Lorsque les guerriers vikings meurent au combat, ils ont le droit de parvenir au Valhalla. Ce paradis où chaque jour ces combattants se livrent bataille. Aujourd'hui vous avez la possibilité d'y séjourner. Prenez place dans des batailles interminables entre guerriers valeureux, où chaque personne tombé au combat est ressuscité le soir même pour manger, boire et festoyer dans l'immense palais d'Odin, aux nombreuses portes et aux tuiles taillées dans des boucliers. Sköl.",
                price: 2600,
                duration: "3 jours",
                image1: "https://ichbin0.files.wordpress.com/2013/01/valhallaf.jpg",
                image2: "https://cdn.shopify.com/s/files/1/2392/8713/files/hall-du-valhalla.jpg?v=1541743932",
                image3: "https://cdn5.amcn.in/a/norse-mythology.alle.bg/assets/7899e91724b3-w620-c999999999-vd4684c289a/3q313g2rzx.jpg",
                categorie: "Heaven",
                travels: 11,
                quantity: 1,
                selected: false
            },
            {
                id: 14,
                name: "La prison de Titans",
                description: "Aussi éloigné de la Terre que le ciel, partez pour une aventure au plus profond des Enfers. Dans cet endroit peuplé des dieux déchu ainsi que des pires créature imaginable. Traverser les ténèbres infernales, l'opposé du ciel, dirigé par Erèbe. Faites face aux effroyables tempêtes et faites la rencontre de Sisyphe, le géant Tityos ou encore Ixion. Là où toutes choses ont leur origines, leurs fins et leurs limites, vous pouvez aussi approcher Atlas, le porteur de la sphère céleste. Sans oublier le Jour et la Nuit ainsi que leurs frères enfants le Sommeil et la Mort.",
                price: 5200,
                duration: "13 jours",
                image1: "https://www.alex-bernardini.fr/mythologie/images/Tartare.jpg",
                image2: "https://m.media-amazon.com/images/M/MV5BNmJiNjU5MjItNjgwYS00NzZkLTljYzYtYTc0OTI4NGQ3ZjYyXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_.jpg",
                image3: "https://burningfireshutinmybones.files.wordpress.com/2013/10/hell-picture.jpg",
                categorie: "Heaven",
                travels: 11,
                quantity: 1,
                selected: false
            }
        ],
        cart:[],
        currentItem: null,
    
    }


    export const cartItemReducer = (state = initialCardData, action) => {
        switch(action.type) {
            case ADD_TO_CART:
                const item = state.products.find(prod => prod.id === action.payload.id);
                const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
                return {
                    ...state,
                    cart: inCart 
                    ? state.cart.map((item, travel) =>
                        item.id === action.payload.id
                            ? {...item, qty: item.qty + action.payload.travels, 
                                        travels: item.travels - action.payload.travels}
                            : item
                                    )
                    : [...state.cart, {...item, qty: action.payload.travels, travels: item.travels - action.payload.travels}]
                };



            case REMOVE_FROM_CART:
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload.id),
                }

            case ADJUST_QUANTITY:
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload.id
                            ? {...item, qty: action.payload.qty}
                            : item
                                        )
                    // products: state.products.map(product =>
                    //     product.id === action.id
                    //         ? {...product, quantity: product.quantity + 1}
                    //         : product,
                    //                             ),
                }
            case EMPTY_CART:
                return {
                    ...state, 
                    cart: []
                };
            
    
            default: 
                return state
        }
    }