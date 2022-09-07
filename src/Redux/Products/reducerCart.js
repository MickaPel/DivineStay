import { 
    ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTITY, EMPTY_CART } from "./type";

    const initialCardData = {
        products:[
            {
                id: 1,
                name: "Grande Guerre Patriotique",
                description: "Si vous êtes à la recherche de sensations fortes, ce séjour est fait pour vous. Rejoignez les troupes soviétiques afin d’aider l’URSS à repousser les troupes nazi.",
                price: 3000,
                duration: "60 jours",
                image1: "https://i.redd.it/5laf8c2ihpkz.jpg",
                image2: "https://pbs.twimg.com/media/EcJj6z3XYAIQXlq.jpg",
                image3: "https://cdni.rbth.com/rbthmedia/images/2018.02/original/5a747f0d15e9f92c46623371.jpg",
                categorie: "Time",
                quantity: 1,
                selected: false
            },
            {
                id: 2,
                name: "L'âge des Viking",
                description:
                    "Nous vous proposons de revenir dans le temps des premiers raids vikings en Angleterre et de pouvoir y participer. Partez sous les ordres de Ragnar et combattez les anglais, ou bien, écrivez votre propre histoire.",
                price: 2000,
                duration: "30 jours",
                image1: "https://i.pinimg.com/originals/16/df/f6/16dff63650998830a21076aaffb4c0f2.jpg",
                image2: "https://image.sciencenordic.com/1453865.jpg?imageId=1453865&panow=0&panoh=0&panox=0&panoy=0&heightw=0&heighth=0&heightx=0&heighty=0&width=1200&height=630",
                image3: "https://img2.looper.com/img/gallery/the-true-meaning-behind-the-phrase/skol-is-the-friendliest-word-on-vikings-1600377435.jpg",
                categorie: "Time",
                quantity: 1,
                selected: false
            },
            {
                id: 4,
                name: "Jurassik",
                description: "Si enfant vous rêviez de rencontrer des dinosaures, vous ne pouvez pas manquer cette offre. Nous vous proposons d'effectuer un saut de 150 millions d’années en arrière afin de pouvoir rencontrer différentes espèces de l'ère Jurassique. A votre arrivée, vous serez logés dans un centre sécurisé et aurez l’occasion d'effectuer plusieurs excursions afin de découvrir cette époque.",
                price: 5000,
                duration: "4 jours",
                image1: "https://www.funkidslive.com/wp-content/uploads/2016/06/Jurassic.jpg",
                image2: "https://cdn.pixabay.com/photo/2019/02/01/14/24/landscape-3969074_1280.jpg",
                image3: "https://pbs.twimg.com/media/DGVHMU3UAAECmVd.jpg",
                categorie: "Time",
                quantity: 1,
                selected: false
            },
            {
                id: 7,
                name: "Mars",
                description: "Partez dès aujourd'hui sur Mars où vous serez accueilli dans notre colonie installée sur place depuis plusieurs années. Au cours de ce voyage vous aurez la possibilité de voir le plus grand volcan de notre système solaire, parcourir les grands espaces désertiques ou explorer les grottes martiennes qui restent à ce jour encore inexplorées.",
                price: 4000,
                duration: "90 jours",
                image1: "https://www.vaisala.com/sites/default/files/styles/16_9_liftup_extra_large/public/images/LIFT-Mars%20the%20Red%20Planet-1600x900.jpg?itok=YXq-Cv1K",
                image2: "https://ici.exploratv.ca/upload/cms/IMAGES_2020/mars-gravite.jpg",
                image3: "https://www.gataka.fr/wp-content/uploads/2015/12/Fantasmes-et-r%C3%A9alit%C3%A9s-de-la-plan%C3%A8te-Mars-1.png",
                categorie: "Space",
                quantity: 1,
                selected: false
            },
            {
                id: 8,
                name: "Venus",
                description: "Nous vous proposons un voyage pour Vénus où vous serez logé dans notre base aérostatique situé à 50 kms de sa surface où la pression est égale à celle de la Terre et où la température est proche des 60 °C. Au cours de ce voyage vous aurez la possibilité d'explorer son atmosphère pendant 20 jours et d'y faire des prélèvements nécessaires pour démystifier encore plus cet astre.",
                price: 2000,
                duration: "60 jours",
                image1: "https://i.pinimg.com/originals/c9/0b/95/c90b95c651291f42279df6f9ab58641e.jpg",
                image2: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2020/10/surface-of-venus-concept-1028201.jpg",
                image3: "https://i.redd.it/q26ml4j2kyh41.jpg",
                categorie: "Space",
                quantity: 1,
                selected: false
            },
            {
                id: 9,
                name: "Lune",
                description: "Rejoignez notre base lunaire où vous aurez la possibilité de prêter main forte à nos scientifiques dans différentes missions d'exploration ou de simplement visiter les alentours",
                price: 6000,
                duration: "35 jours",
                image1: "https://www.rfj.ch/Htdocs/Images/Pictures/20200505123804211.jpg",
                image2: "https://images.theconversation.com/files/108549/original/image-20160119-29756-1frh5c9.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
                image3: "https://trustmyscience.com/wp-content/uploads/2019/05/surface-lune-seismes.jpeg",
                categorie: "Space",
                quantity: 1,
                selected: false
            },
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