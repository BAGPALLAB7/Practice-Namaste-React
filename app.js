var $8OivB$reactjsxruntime = require("react/jsx-runtime");
var $8OivB$react = require("react");
var $8OivB$reactdomclient = require("react-dom/client");
var $8OivB$reactrouterdom = require("react-router-dom");
var $8OivB$reactredux = require("react-redux");
var $8OivB$reduxjstoolkit = require("@reduxjs/toolkit");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire21de"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire21de"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("4HTXS", function(module, exports) {
module.exports = Promise.resolve(require("./Grocery.a27e18a7.js")).then(()=>parcelRequire("cvbQ8"));

});






const $49b61417b640529d$export$31adfacaf07ffe63 = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const $49b61417b640529d$export$8878ead86ed0da0b = "https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg";
const $49b61417b640529d$export$8cdfb94642b82152 = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.69048851118229&lng=88.39274636162034&restaurantId=";



var $f0d3bfa6749f97c4$exports = {};
$f0d3bfa6749f97c4$exports = new URL("logo.36eac03b.png", "file:" + __filename).toString();


var $82554895abdbc18c$exports = {};
$82554895abdbc18c$exports = new URL("cartIcon.bcae89af.png", "file:" + __filename).toString();



const $76d3f03a03a6aeec$var$Header = ()=>{
    const [buttonName, setButtonName] = (0, $8OivB$react.useState)("Login");
    const cartItems = (0, $8OivB$reactredux.useSelector)((store)=>store.cart.items);
    console.log(cartItems);
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
        className: "flex justify-between bg-pink-200 h-24 items-center shadow-xl shadow-blue-100",
        children: [
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                className: "",
                children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $8OivB$reactrouterdom.Link), {
                    to: "/",
                    children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("img", {
                        className: "w-28 mx-6",
                        src: (0, (/*@__PURE__*/$parcel$interopDefault($f0d3bfa6749f97c4$exports))),
                        alt: "food-logo"
                    })
                })
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                className: "flex",
                children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("ul", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("li", {
                            className: "mx-3",
                            children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $8OivB$reactrouterdom.Link), {
                                to: "/",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("li", {
                            className: "mx-3",
                            children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $8OivB$reactrouterdom.Link), {
                                to: "/about",
                                children: "About Us"
                            })
                        }),
                        /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("li", {
                            className: "mx-3",
                            children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $8OivB$reactrouterdom.Link), {
                                to: "/contact",
                                children: "Contact Us"
                            })
                        }),
                        /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("li", {
                            className: "mx-3",
                            children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $8OivB$reactrouterdom.Link), {
                                to: "/cart",
                                children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("img", {
                                            className: "w-10",
                                            src: (0, (/*@__PURE__*/$parcel$interopDefault($82554895abdbc18c$exports))),
                                            alt: "cart-icon"
                                        }),
                                        /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("span", {
                                            className: "text-sm",
                                            children: [
                                                "(",
                                                cartItems.length,
                                                ")"
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("li", {
                            className: "mx-3",
                            children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $8OivB$reactrouterdom.Link), {
                                to: "/grocery",
                                children: "Grocery"
                            })
                        }),
                        /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("li", {
                            children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("button", {
                                className: "mx-4",
                                onClick: ()=>{
                                    buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
                                },
                                children: buttonName
                            })
                        })
                    ]
                })
            })
        ]
    });
};
var $76d3f03a03a6aeec$export$2e2bcd8739ae039 = $76d3f03a03a6aeec$var$Header;






const $5392ec750da01c1b$export$7be1d6cab7accc11 = (props)=>{
    const { restoData: restoData } = props;
    const { name: name, cuisines: cuisines, cloudinaryImageId: cloudinaryImageId, avgRating: avgRating, id: id } = restoData?.info;
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
        className: "w-[300px] p-2 mx-6 my-3 bg-slate-200  h-[26rem] rounded-xl",
        children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
            className: "restaurant-details",
            children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)((0, $8OivB$reactrouterdom.Link), {
                to: "/restaurant/" + id,
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                        className: "shadow-blue-300 shadow-2xl",
                        children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("img", {
                            className: "rounded-t-xl h-56 w-full",
                            src: (0, $49b61417b640529d$export$31adfacaf07ffe63) + cloudinaryImageId,
                            alt: "card-image"
                        })
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h3", {
                        className: "font-bold my-2",
                        children: name
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        children: cuisines.join(", ")
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("p", {
                        children: [
                            "\u2B50\uFE0F ",
                            avgRating
                        ]
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("p", {
                        children: [
                            "\u23F3 ",
                            restoData.info.sla.deliveryTime + " minutes"
                        ]
                    })
                ]
            }, id)
        })
    });
}; //   export default RestaurantCard;


const $70aebeaa2d68662d$export$5a072dd906a0fd25 = [
    {
        info: {
            id: "677137",
            name: "Sai Jalpan Junction",
            cloudinaryImageId: "c3bc32ad3ed9515bb0bf77c419d5a429",
            locality: "B T Road",
            areaName: "Belghoria",
            costForTwo: "\u20B9200 for two",
            cuisines: [
                "North Indian",
                "South Indian"
            ],
            avgRating: 4.5,
            veg: true,
            parentId: "3341",
            avgRatingString: "4.5",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 33,
                lastMileTravel: 5,
                serviceability: "SERVICEABLE",
                slaString: "33 mins",
                lastMileTravelString: "5.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-12-23 22:30:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO \u20B950"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/sai-jalpan-junction-b-t-road-belghoria-kolkata-677137",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "665048",
            name: "Wow! China",
            cloudinaryImageId: "7d46fc6e6aeda7e135d17342a6c61eb8",
            locality: "Ghola",
            areaName: "Barasat Road",
            costForTwo: "\u20B9300 for two",
            cuisines: [
                "Tibetan",
                "Chinese",
                "Asian",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
            ],
            avgRating: 4.2,
            parentId: "226836",
            avgRatingString: "4.2",
            totalRatingsString: "100+",
            sla: {
                deliveryTime: 30,
                lastMileTravel: 1.4,
                serviceability: "SERVICEABLE",
                slaString: "30 mins",
                lastMileTravelString: "1.4 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-12-23 22:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "\u20B9175 OFF",
                subHeader: "ABOVE \u20B9599",
                discountTag: "FLAT DEAL"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/wow-china-ghola-barasat-road-kolkata-665048",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "454577",
            name: "6 Ballygunge Place",
            cloudinaryImageId: "iyg0dc0yjt8utbpl8qne",
            locality: "Thakur Corner",
            areaName: "Sodepur",
            costForTwo: "\u20B9800 for two",
            cuisines: [
                "North Indian",
                "Street Food",
                "Snacks"
            ],
            avgRating: 4.5,
            parentId: "1243",
            avgRatingString: "4.5",
            totalRatingsString: "500+",
            sla: {
                deliveryTime: 26,
                lastMileTravel: 2.6,
                serviceability: "SERVICEABLE",
                slaString: "26 mins",
                lastMileTravelString: "2.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-12-23 22:00:00",
                opened: true
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "newg.png",
                        description: "Gourmet"
                    }
                ]
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Gourmet",
                                    imageId: "newg.png"
                                }
                            }
                        ]
                    },
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/6-ballygunge-place-thakur-corner-sodepur-kolkata-454577",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "737675",
            name: "Mom's Kitchen",
            cloudinaryImageId: "90012597629321295211c3881c8bb0af",
            locality: "Bidhannagar",
            areaName: "Belghoria",
            costForTwo: "\u20B9200 for two",
            cuisines: [
                "Biryani"
            ],
            parentId: "2594",
            avgRatingString: "NEW",
            sla: {
                deliveryTime: 36,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "36 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-12-23 12:15:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO \u20B980"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/moms-kitchen-bidhannagar-belghoria-kolkata-737675",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "450970",
            name: "Kasturi Restaurant",
            cloudinaryImageId: "hdka6bgoa9zrwnxrftja",
            locality: "Khardah",
            areaName: "Sodepur",
            costForTwo: "\u20B9400 for two",
            cuisines: [
                "Bengali",
                "Thalis",
                "Desserts"
            ],
            avgRating: 4.3,
            parentId: "2046",
            avgRatingString: "4.3",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 35,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "35 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-12-23 23:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO \u20B980"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/kasturi-restaurant-khardah-sodepur-kolkata-450970",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "693579",
            name: "Tea Junction",
            cloudinaryImageId: "77d2fffe27cd59af5045a102d08af522",
            areaName: "Sodepur",
            costForTwo: "\u20B9200 for two",
            cuisines: [
                "Beverages",
                "Snacks",
                "Desserts"
            ],
            avgRating: 4.4,
            parentId: "4311",
            avgRatingString: "4.4",
            totalRatingsString: "100+",
            sla: {
                deliveryTime: 29,
                lastMileTravel: 2.9,
                serviceability: "SERVICEABLE",
                slaString: "29 mins",
                lastMileTravelString: "2.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-12-23 23:00:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO \u20B980"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/tea-junction-sodepur-kolkata-693579",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "631677",
            name: "Monginis",
            cloudinaryImageId: "vwflywpoltqm7tugzj0h",
            locality: "M B Road",
            areaName: "Belghoria",
            costForTwo: "\u20B9300 for two",
            cuisines: [
                "Bakery",
                "Desserts",
                "Snacks"
            ],
            avgRating: 4,
            parentId: "5007",
            avgRatingString: "4.0",
            totalRatingsString: "100+",
            sla: {
                deliveryTime: 29,
                lastMileTravel: 5.6,
                serviceability: "SERVICEABLE",
                slaString: "29 mins",
                lastMileTravelString: "5.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-12-23 21:30:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO \u20B950"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/monginis-m-b-road-belghoria-kolkata-631677",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "568188",
            name: "Bhikharam Chandmal",
            cloudinaryImageId: "q3gkldxpdq7vznyskks7",
            locality: "B L Ghosh Road",
            areaName: "Belghoria",
            costForTwo: "\u20B9300 for two",
            cuisines: [
                "Sweets",
                "Snacks",
                "Indian",
                "Desserts",
                "Fast Food",
                "Bakery",
                "Thalis",
                "South Indian",
                "Chaat",
                "Mexican"
            ],
            avgRating: 4.3,
            veg: true,
            parentId: "5528",
            avgRatingString: "4.3",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 28,
                lastMileTravel: 4.1,
                serviceability: "SERVICEABLE",
                slaString: "28 mins",
                lastMileTravelString: "4.1 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-12-23 21:30:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO \u20B980"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/bhikharam-chandmal-b-l-ghosh-road-belghoria-kolkata-568188",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "609114",
            name: "Flurys",
            cloudinaryImageId: "dipednj4u5094fqw0gpg",
            locality: "Baranagar",
            areaName: "Baranagar",
            costForTwo: "\u20B9500 for two",
            cuisines: [
                "Bakery",
                "Desserts",
                "Fast Food"
            ],
            avgRating: 4.3,
            parentId: "5537",
            avgRatingString: "4.3",
            totalRatingsString: "50+",
            sla: {
                deliveryTime: 33,
                lastMileTravel: 6.6,
                serviceability: "SERVICEABLE",
                slaString: "33 mins",
                lastMileTravelString: "6.6 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-12-23 22:30:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/flurys-baranagar-kolkata-609114",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        info: {
            id: "458851",
            name: "KFC",
            cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
            locality: "Barasat",
            areaName: "HB Town",
            costForTwo: "\u20B9400 for two",
            cuisines: [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            avgRating: 4.4,
            parentId: "547",
            avgRatingString: "4.4",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 18,
                lastMileTravel: 0.9,
                serviceability: "SERVICEABLE",
                slaString: "18 mins",
                lastMileTravelString: "0.9 km",
                iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
                nextCloseTime: "2023-12-24 00:59:00",
                opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {}
                }
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO \u20B950"
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {}
                }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/kfc-barasat-hb-town-kolkata-458851",
            text: "RESTAURANT_MENU",
            type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];





const $419eceeb2d42a77a$var$Shimmer = ()=>{
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
        className: "flex flex-wrap mx-4 my-6",
        children: [
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                className: "w-[300px] p-2 mx-6 my-3 bg-slate-200  h-[26rem] rounded-xl",
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                        className: "rounded-t-xl h-56 w-full bg-slate-300"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h1", {
                        className: "shimmer-heading"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                className: "w-[300px] p-2 mx-6 my-3 bg-slate-200  h-[26rem] rounded-xl",
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                        className: "rounded-t-xl h-56 w-full bg-slate-300"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h1", {
                        className: "shimmer-heading"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                className: "w-[300px] p-2 mx-6 my-3 bg-slate-200  h-[26rem] rounded-xl",
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                        className: "rounded-t-xl h-56 w-full bg-slate-300"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h1", {
                        className: "shimmer-heading"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                className: "w-[300px] p-2 mx-6 my-3 bg-slate-200  h-[26rem] rounded-xl",
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                        className: "rounded-t-xl h-56 w-full bg-slate-300"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h1", {
                        className: "shimmer-heading"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                className: "w-[300px] p-2 mx-6 my-3 bg-slate-200  h-[26rem] rounded-xl",
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                        className: "rounded-t-xl h-56 w-full bg-slate-300"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h1", {
                        className: "shimmer-heading"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                className: "w-[300px] p-2 mx-6 my-3 bg-slate-200  h-[26rem] rounded-xl",
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                        className: "rounded-t-xl h-56 w-full bg-slate-300"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h1", {
                        className: "shimmer-heading"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                className: "w-[300px] p-2 mx-6 my-3 bg-slate-200  h-[26rem] rounded-xl",
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                        className: "rounded-t-xl h-56 w-full bg-slate-300"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h1", {
                        className: "shimmer-heading"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                className: "w-[300px] p-2 mx-6 my-3 bg-slate-200  h-[26rem] rounded-xl",
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                        className: "rounded-t-xl h-56 w-full bg-slate-300"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h1", {
                        className: "shimmer-heading"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                        className: "shimmer-text"
                    })
                ]
            })
        ]
    });
};
var $419eceeb2d42a77a$export$2e2bcd8739ae039 = $419eceeb2d42a77a$var$Shimmer;


const $889bfb1e3e9bfc80$var$Body = ()=>{
    //console.log("Body component rendered.");
    const [restaurantList, setRestaurantList] = (0, $8OivB$react.useState)([]);
    const [filteredSearchData, setFilteredSearchedData] = (0, $8OivB$react.useState)([]);
    const [searchData, setSearchData] = (0, $8OivB$react.useState)("");
    const filterResto = ()=>{
        const filteredList = filteredSearchData.filter((resto)=>{
            return resto.info.avgRating >= 4.4;
        });
        //console.log(filteredList);
        setFilteredSearchedData(filteredList);
    };
    const fetchAPI = async ()=>{
        const fetchedData = await fetch("https://www.swiggy.com/api/seo/getListing?lat=22.69048851118229&lng=88.39274636162034");
        const jsonData = await fetchedData.json();
        setRestaurantList(jsonData?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredSearchedData(jsonData?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    console.log(restaurantList);
    const changeHandeler = (e)=>{
        setSearchData(e.target.value);
    };
    const searchRestro = (searchData)=>{
        const searchedRestroList = restaurantList.filter((data)=>{
            return data.info.cuisines.join(" ").toLowerCase().includes(searchData.toLowerCase()) || data.info.name.toLowerCase().includes(searchData.toLowerCase());
        });
        setFilteredSearchedData(searchedRestroList);
    };
    (0, $8OivB$react.useEffect)(()=>{
        fetchAPI();
    }, []);
    if (restaurantList.length == 0) return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $419eceeb2d42a77a$export$2e2bcd8739ae039), {});
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
        className: "body",
        children: [
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                className: "flex py-4",
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("input", {
                        type: "text",
                        className: "border-2 border-blue-300 w-64 rounded-s-md ms-4",
                        placeholder: "chinese, pizza or restaurant name",
                        onChange: (e)=>changeHandeler(e)
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("button", {
                        className: "bg-blue-300 w-32 rounded-e-md",
                        onClick: ()=>searchRestro(searchData),
                        children: "Search"
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("button", {
                        className: "bg-blue-300 mx-4 w-40 rounded-md",
                        onClick: ()=>filterResto(),
                        children: "Filer Restaurants"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                className: "flex flex-wrap mx-4",
                children: filteredSearchData.map((restaurant)=>/*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $5392ec750da01c1b$export$7be1d6cab7accc11), {
                        restoData: restaurant
                    }, restaurant.info.id))
            })
        ]
    });
};
var $889bfb1e3e9bfc80$export$2e2bcd8739ae039 = $889bfb1e3e9bfc80$var$Body;





const $4000b6ca4ecb99a4$var$User = ()=>{
    const [userData, setUserData] = (0, $8OivB$react.useState)([]);
    const fetchUser = async ()=>{
        const data = await fetch("https://api.github.com/users/bagpallab7");
        const jsondata = await data.json();
        setUserData(jsondata);
    };
    (0, $8OivB$react.useEffect)(()=>{
        fetchUser();
    }, []);
    const { name: name, avatar_url: avatar_url, location: location } = userData;
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
        className: "user-card",
        children: [
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("img", {
                className: "avatar",
                src: avatar_url,
                alt: "avatar"
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("h2", {
                children: [
                    "Name : ",
                    name
                ]
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("h4", {
                children: [
                    "Location: ",
                    location
                ]
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h4", {
                children: "Contact : @bagpallab7"
            })
        ]
    });
};
var $4000b6ca4ecb99a4$export$2e2bcd8739ae039 = $4000b6ca4ecb99a4$var$User;




class $4c5cd3c7e5dc49b3$var$UserClass extends (0, ($parcel$interopDefault($8OivB$react))).Component {
    render() {
        return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
            className: "user-card",
            children: [
                /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h2", {
                    children: "Name : Pallab Bag"
                }),
                /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h4", {
                    children: "Location: Kolkata"
                }),
                /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h4", {
                    children: "Contact : @bagpallab7"
                })
            ]
        });
    }
}
var $4c5cd3c7e5dc49b3$export$2e2bcd8739ae039 = $4c5cd3c7e5dc49b3$var$UserClass;


const $fb36506a31b34341$var$About = ()=>{
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
        className: "about",
        children: [
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h1", {
                children: "About Us"
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $4000b6ca4ecb99a4$export$2e2bcd8739ae039), {})
        ]
    });
};
var $fb36506a31b34341$export$2e2bcd8739ae039 = $fb36506a31b34341$var$About;



const $ab965e02cbeecf06$var$Contact = ()=>{
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
        children: "This is contact us page."
    });
};
var $ab965e02cbeecf06$export$2e2bcd8739ae039 = $ab965e02cbeecf06$var$Contact;




const $7cf09d846b9a3d57$var$Error = ()=>{
    const err = (0, $8OivB$reactrouterdom.useRouteError)();
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h1", {
                children: "Oops!!!"
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h2", {
                children: "Something went wrong. \uD83D\uDE32 "
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("h2", {
                children: [
                    err.status,
                    ": ",
                    err.statusText
                ]
            })
        ]
    });
};
var $7cf09d846b9a3d57$export$2e2bcd8739ae039 = $7cf09d846b9a3d57$var$Error;











const $fabee77af1239641$var$ShimmerDish = ()=>{
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
        className: "bg-slate-100 w-32 h-full flex ",
        children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("span", {
            className: "font-light size-0 w-fit h-auto m-auto",
            children: "No preview"
        })
    });
};
var $fabee77af1239641$export$2e2bcd8739ae039 = $fabee77af1239641$var$ShimmerDish;





const $9ebb5ff3ccfa2cea$var$cartSlice = (0, $8OivB$reduxjstoolkit.createSlice)({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length = 0;
        }
    }
});
const { addItem: $9ebb5ff3ccfa2cea$export$fb9705de59d96855, removeItem: $9ebb5ff3ccfa2cea$export$fe2d9b4e03920b4c, clearCart: $9ebb5ff3ccfa2cea$export$810121176e3e3671 } = $9ebb5ff3ccfa2cea$var$cartSlice.actions;
var $9ebb5ff3ccfa2cea$export$2e2bcd8739ae039 = $9ebb5ff3ccfa2cea$var$cartSlice.reducer;


const $7b37d712bb1e88a3$var$Menu = (props)=>{
    const { itemCards: itemCards, index: index, setShow: setShow } = props;
    const dispatch = (0, $8OivB$reactredux.useDispatch)();
    const handleAddItem = (menu)=>{
        dispatch((0, $9ebb5ff3ccfa2cea$export$fb9705de59d96855)(menu));
    };
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
        className: "p-3",
        children: itemCards.map((menu)=>{
            return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                className: "flex justify-between my-2 border-gray-400 border-b-2",
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                        className: "my-2 w-7/12",
                        children: [
                            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h3", {
                                className: "font-bold px-2 ",
                                children: menu.card?.info?.name
                            }),
                            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("p", {
                                className: "p-1 ",
                                children: [
                                    "\u20B9",
                                    menu.card?.info?.price ? menu.card?.info?.price / 100 : menu.card?.info?.defaultPrice / 100
                                ]
                            }),
                            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                                className: " p-1 text-xs",
                                children: menu.card?.info?.description
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                        className: "w-32 m-2 cursor-pointer",
                        onClick: ()=>handleAddItem(menu.card?.info),
                        children: [
                            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("span", {
                                    className: "absolute p-1 bg-black text-white font-bold bg-opacity-60 items-center hover:bg-white hover:text-black rounded-lg",
                                    children: "Add+"
                                })
                            }),
                            menu.card?.info?.imageId ? /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("img", {
                                src: (0, $49b61417b640529d$export$31adfacaf07ffe63) + menu.card?.info?.imageId,
                                alt: "menu_img",
                                className: "w-32 h-full rounded-3xl"
                            }) : /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $fabee77af1239641$export$2e2bcd8739ae039), {})
                        ]
                    })
                ]
            }, menu.card?.info?.id);
        })
    });
};
var $7b37d712bb1e88a3$export$2e2bcd8739ae039 = $7b37d712bb1e88a3$var$Menu;


const $22a206c3f755b9b2$var$RestaurantCategory = (props)=>{
    // console.log("rescat component call");
    const { category: category, categoryIndex: categoryIndex, showIndex: showIndex, setShowIndex: setShowIndex } = props;
    const [showMenu, setShowMenu] = (0, $8OivB$react.useState)(true);
    const checkShow = ()=>{
        //console.log("clicked");
        if (showIndex == categoryIndex) setShowMenu(!showMenu);
        else handleClick();
    };
    const handleClick = ()=>{
        if (showMenu == false) setShowMenu(true);
        setShowIndex(categoryIndex);
    };
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
        className: "w-7/12 mx-auto",
        children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
            className: "my-3 border-gray-400 border-b-8",
            children: [
                /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                    className: "flex justify-between items-center cursor-pointer bg-slate-50",
                    onClick: checkShow,
                    children: [
                        /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("h3", {
                            className: "m-4 font-bold text-lg",
                            children: [
                                category.card?.card?.title,
                                " (",
                                category.card?.card?.itemCards.length,
                                ")"
                            ]
                        }),
                        /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("span", {
                            className: "mx-4",
                            children: "\uD83D\uDD3D"
                        })
                    ]
                }),
                showIndex == categoryIndex && showMenu ? /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $7b37d712bb1e88a3$export$2e2bcd8739ae039), {
                    itemCards: category.card?.card?.itemCards
                }) : /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $8OivB$reactjsxruntime.Fragment), {})
            ]
        })
    });
};
var $22a206c3f755b9b2$export$2e2bcd8739ae039 = $22a206c3f755b9b2$var$RestaurantCategory;


const $ea14f6e6f0941532$var$Restaurant = ()=>{
    const [restaurantData, setRestaurantData] = (0, $8OivB$react.useState)(null);
    const [showIndex, setShowIndex] = (0, $8OivB$react.useState)(null);
    const [item, setItem] = (0, $8OivB$react.useState)([]);
    const { id: id } = (0, $8OivB$reactrouterdom.useParams)();
    const fetchRestaurant = async ()=>{
        const fetchData = await fetch((0, $49b61417b640529d$export$8cdfb94642b82152) + id);
        const jsonData = await fetchData.json();
        const allItem = jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>item.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        setItem(allItem);
        setRestaurantData(jsonData.data?.cards[0]?.card?.card?.info);
    };
    (0, $8OivB$react.useEffect)(()=>{
        fetchRestaurant();
    }, []);
    if (restaurantData == null) return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $419eceeb2d42a77a$export$2e2bcd8739ae039), {});
    //console.log(item);
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)((0, $8OivB$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                className: " bg-slate-200 w-7/12 mx-auto my-6 p-4 rounded-md",
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h1", {
                        className: "font-bold text-4xl",
                        children: restaurantData.name
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                        className: "flex justify-between items-center content-center",
                        children: [
                            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h2", {
                                children: restaurantData.cuisines.join(", ")
                            }),
                            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("h2", {
                                children: [
                                    "\u2B50\uFE0F",
                                    restaurantData.avgRating,
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            }),
            item.map((i, index)=>/*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $22a206c3f755b9b2$export$2e2bcd8739ae039), {
                    category: i,
                    categoryIndex: index,
                    showIndex: showIndex,
                    setShowIndex: setShowIndex
                }, i.card.card.title))
        ]
    });
};
var $ea14f6e6f0941532$export$2e2bcd8739ae039 = $ea14f6e6f0941532$var$Restaurant;





const $eec7ca5b3e6176d2$var$appStore = (0, $8OivB$reduxjstoolkit.configureStore)({
    reducer: {
        cart: (0, $9ebb5ff3ccfa2cea$export$2e2bcd8739ae039)
    }
});
var $eec7ca5b3e6176d2$export$2e2bcd8739ae039 = $eec7ca5b3e6176d2$var$appStore;









const $e0c6133c200b2797$var$Cart = ()=>{
    const cartItem = (0, $8OivB$reactredux.useSelector)((store)=>store.cart.items);
    console.log(cartItem);
    let price = 0;
    cartItem.map((i)=>{
        price += i.price ? i.price / 100 : i.defaultPrice / 100;
    });
    const dispatch = (0, $8OivB$reactredux.useDispatch)();
    const handleClearCart = ()=>{
        dispatch((0, $9ebb5ff3ccfa2cea$export$810121176e3e3671)());
    };
    // setTotalPrice((previous) => previous+(i.price ? i.price / 100 : i.defaultPrice / 100));
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
        className: "flex w-8/12 m-auto justify-between",
        children: [
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                className: "h-[600px]  border-gray-300  overflow-y-auto",
                children: cartItem.map((i)=>{
                    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                        className: "flex my-2 border-gray-400 border-b-2 w-full ",
                        children: [
                            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                                className: "my-2 w-full",
                                children: [
                                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h3", {
                                        className: "font-bold px-2 ",
                                        children: i.name
                                    }),
                                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("p", {
                                        className: "p-1 ",
                                        children: [
                                            "\u20B9",
                                            i.price ? i.price / 100 : i.defaultPrice / 100
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("p", {
                                        className: " p-1 text-xs",
                                        children: i.description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("div", {
                                className: "w-32 m-2",
                                children: i.imageId ? /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("img", {
                                    src: (0, $49b61417b640529d$export$31adfacaf07ffe63) + i.imageId,
                                    alt: "menu_img",
                                    className: "w-32 h-full rounded-3xl"
                                }) : /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $fabee77af1239641$export$2e2bcd8739ae039), {})
                            })
                        ]
                    }, i.id);
                })
            }),
            /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
                className: "w-4/12 h-60 text-center ",
                children: [
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("h1", {
                        className: " p-4  text-2xl font-bold",
                        children: [
                            "Item count: ",
                            cartItem.length,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("h1", {
                        className: "p-4  text-md font-bold",
                        children: [
                            "Total : \u20B9",
                            price.toFixed(2)
                        ]
                    }),
                    cartItem.length > 0 ? /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("button", {
                        className: "p-2 bg-red-400 rounded-lg",
                        onClick: handleClearCart,
                        children: "Clear Cart"
                    }) : /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("button", {
                        className: "p-2 bg-gray-200 rounded-lg cursor-auto",
                        children: "Clear Cart"
                    })
                ]
            })
        ]
    });
};
var $e0c6133c200b2797$export$2e2bcd8739ae039 = $e0c6133c200b2797$var$Cart;



const $a826c173f4456cde$var$Grocery = /*#__PURE__*/ (0, $8OivB$react.lazy)(()=>(parcelRequire("4HTXS")));
const $a826c173f4456cde$var$AppLayout = ()=>{
    return /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $8OivB$reactredux.Provider), {
        store: (0, $eec7ca5b3e6176d2$export$2e2bcd8739ae039),
        children: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)("div", {
            className: "app",
            children: [
                /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $76d3f03a03a6aeec$export$2e2bcd8739ae039), {}),
                /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $8OivB$reactrouterdom.Outlet), {})
            ]
        })
    });
};
const $a826c173f4456cde$var$appRouter = (0, $8OivB$reactrouterdom.createBrowserRouter)([
    {
        path: "/",
        element: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)($a826c173f4456cde$var$AppLayout, {}),
        children: [
            {
                path: "/",
                element: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $889bfb1e3e9bfc80$export$2e2bcd8739ae039), {})
            },
            {
                path: "/home",
                element: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $889bfb1e3e9bfc80$export$2e2bcd8739ae039), {})
            },
            {
                path: "/about",
                element: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $fb36506a31b34341$export$2e2bcd8739ae039), {})
            },
            {
                path: "/contact",
                element: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $ab965e02cbeecf06$export$2e2bcd8739ae039), {})
            },
            {
                path: "/cart",
                element: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $e0c6133c200b2797$export$2e2bcd8739ae039), {})
            },
            {
                path: "/restaurant/:id",
                element: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $ea14f6e6f0941532$export$2e2bcd8739ae039), {})
            },
            {
                path: "/grocery",
                element: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsxs)((0, $8OivB$react.Suspense), {
                    fallback: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)("h1", {
                        children: "Loading...."
                    }),
                    children: [
                        " ",
                        /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)($a826c173f4456cde$var$Grocery, {}),
                        " "
                    ]
                })
            }
        ],
        errorElement: /*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $7cf09d846b9a3d57$export$2e2bcd8739ae039), {})
    }
]);
const $a826c173f4456cde$var$root = (0, ($parcel$interopDefault($8OivB$reactdomclient))).createRoot(document.getElementById("root"));
$a826c173f4456cde$var$root.render(/*#__PURE__*/ (0, $8OivB$reactjsxruntime.jsx)((0, $8OivB$reactrouterdom.RouterProvider), {
    router: $a826c173f4456cde$var$appRouter
}));


//# sourceMappingURL=app.js.map
