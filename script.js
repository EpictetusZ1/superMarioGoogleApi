 function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
   center: {lat:  44.056523247836786, lng: -79.4851246459184},
   zoom: 12,
   mapId: '97067c0a754c091d'
  });
//  lat
// long
//  img url
// scaled size width , height

  const markers = [
    [
      "Upper Canada Mall",
      44.05673915736053,
      -79.4850280846574,
      "/Users/jackheaton/Documents/JS/learnProjects/Super Mario/8 bit icons/yoshi_house.svg",
      38,
      31
    ],
    [
      "Fairy Lake",
      44.05139286442152,
      -79.4547934264221,
      "/Users/jackheaton/Documents/JS/learnProjects/Super Mario/8 bit icons/ghosthouse.svg",
      38,
      31
    ],
    [
      "Milestones Bar and Grill",
      44.07221834756554,
      -79.48519443449376,
      "/Users/jackheaton/Documents/JS/learnProjects/Super Mario/8 bit icons/pointer.svg",
      38,
      31
    ],
    [
      "John Graves Simcoe Armoury",
      43.99333600344306,
       -79.45417298851821,
      "/Users/jackheaton/Documents/JS/learnProjects/Super Mario/8 bit icons/star.svg",
      38,
      31
    ],
    [
      "Home Town",
      44.00689343840902,
      -79.45048557125781,
      "/Users/jackheaton/Documents/JS/learnProjects/Super Mario/8 bit icons/pointer.svg",
      38,
      31
    ],
    [
      "Home Away From Home - Aurora Public Library",
      43.997555582006505,
       -79.46685901708612,
      "/Users/jackheaton/Documents/JS/learnProjects/Super Mario/8 bit icons/castle.svg",
      38,
      31
    ],
    [
      "Joker Hill Trail - #Running ",
      44.040096659799694,
      -79.50528798106622,
      "/Users/jackheaton/Documents/JS/learnProjects/Super Mario/8 bit icons/hill_with_eyes.svg",
      38,
      31
    ],


  ];

  for(let i = 0; i < markers.length; i++){
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
    position: { lat: currMarker[1], lng: currMarker[2]},
    map,
    title: currMarker[0],
    icon: {
      url: currMarker[3],
      scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
    },
    animation: google.maps.Animation.DROP
    });

    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0],
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }



 }
