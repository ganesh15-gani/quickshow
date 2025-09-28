import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
    {
        image: "https://m.media-amazon.com/images/M/MV5BYzRmNjdiOWQtODY0MC00NTE4LWE2MjEtNjVkNDJkNjYwOTI1XkEyXkFqcGc@._V1_.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=2y_DH5gIrCU&pp=ygUMcGVkZGkgdGVhc2Vy'
    },
    {
        image: "https://i.ytimg.com/vi/hiGvxpvdPvY/hqdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=NkZFnpDhdCk&pp=ygUPcGFyYWRpc2UgdGVhc2Vy'
    },
    {
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDevara%3A_Part_1&psig=AOvVaw1_qrL9vypBeyA4aHem3jYc&ust=1758633472634000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNiA_q267I8DFQAAAAAdAAAAABAE",
        videoUrl: 'https://www.youtube.com/watch?v=5cx7rvMvAWo&pp=ygUOZGV2YXJhIHRyYWlsZXI%3D'
    },
    {
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00383697-gucgrdkcjr-landscape.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=k2DbnzJa9fk&pp=ygURcmFqYSBzYWFiIHRyYWlsZXLSBwkJ4AkBhyohjO8%3D'
    },
]

const dummyCastsData = [
    { "name": "RamCharan", "profile_path": "https://w0.peakpx.com/wallpaper/1004/637/HD-wallpaper-ram-charan-rrr-telugu-movie-bollywood-movies-telugu-actor-ramcharan-bollywood.jpg", },
    { "name": "Trisha Krishnan", "profile_path": "https://i.pinimg.com/736x/92/22/96/922296d5a79836782a3a975282e97db8.jpg", },
    { "name": "Janhvi Kapoor", "profile_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Janhvi_Kapoor_%28cropped%29.jpg/250px-Janhvi_Kapoor_%28cropped%29.jpg", },
    { "name": "Vijay Sethupathi", "profile_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Vijay_Sethupathi_at_the_premiere_of_Merry_Christmas_2_%28cropped%29.jpg/250px-Vijay_Sethupathi_at_the_premiere_of_Merry_Christmas_2_%28cropped%29.jpg", },
    { "name": "Shiva Rajkumar", "profile_path": "https://blog.bharatlyrics.com/wp-content/uploads/2023/12/Shiva-Rajkumar-Biography-1.png", },
    { "name": "Divyenndu", "profile_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlo4yfPfBwCiDHCzTLzQUk4c9l6aky5puHSg&s", },
    { "name": "Bujji Babu", "profile_path": "https://images.filmibeat.com/img/popcorn/profile_photos/buchi-babu-sana-20210210162549-44728.jpg", },
    { "name": "AR Rahman", "profile_path": "https://upload.wikimedia.org/wikipedia/commons/3/3b/AR_Rahman_At_The_%E2%80%98Marvel_Anthem%E2%80%99_Launch_%283x4_cropped%29.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

export const dummyShowsData = [
    {
        "_id": "324544",
        "id": 324544,
        "title": "Peddi",
        "overview": "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
        "poster_path": "https://m.media-amazon.com/images/M/MV5BYzRmNjdiOWQtODY0MC00NTE4LWE2MjEtNjVkNDJkNjYwOTI1XkEyXkFqcGc@._V1_.jpg",
        "backdrop_path": "https://pynr.in/wp-content/uploads/2025/05/Peddi.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 14, "name": "fantacy" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-03-27",
        "original_language": "en",
        "tagline": "She seeks the power to free her people.",
        "vote_average": 9.3,
        "vote_count": 15000,
        "runtime": 150,
    },
    {
        "_id": "1232546",
        "id": 1232546,
        "title": "paradise",
        "overview": "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
        "poster_path": "https://th-i.thgim.com/public/entertainment/movies/khrwfv/article69908639.ece/alternates/FREE_1200/Nani.jpeg",
        "backdrop_path": "https://th-i.thgim.com/public/entertainment/movies/khrwfv/article69908639.ece/alternates/FREE_1200/Nani.jpeg",
        "genres": [
            { "id": 27, "name": "crow backdrop story" },
            { "id": 9648, "name": "Mystery" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-03-26",
        "original_language": "en",
        "tagline": "Every night a different nightmare.",
        "vote_average": 6.405,
        "vote_count": 56789,
        "runtime": 173,
    },
    {
        "_id": "552524",
        "id": 552524,
        "title": "OG",
        "overview": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
        "poster_path": "https://i.redd.it/y8rgvkhrci4d1.jpeg",
        "backdrop_path": "https://static.toiimg.com/thumb/msid-122393294,imgsize-95900,width-400,resizemode-4/pawan.jpg",
        "genres": [
            { "id": 10751, "name": "Action & Adventure" },
            { "id": 35, "name": "Thriller" },
            { "id": 878, "name": "fantacy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-09-25",
        "original_language": "en",
        "tagline": "Hold on to your coconuts.",
        "vote_average": 7.117,
        "vote_count": 27500,
        "runtime": 146,
    },
    {
        "_id": "668489",
        "id": 668489,
        "title": "Rajasaab",
        "overview": "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
        "poster_path": "https://pbs.twimg.com/media/GaaPTaNaIAAq9jf.jpg:large",
        "backdrop_path": "https://images.indianexpress.com/2024/01/raja-saab-15012024.jpg",
        "genres": [
            { "id": 28, "name": "Horror" },
            { "id": 80, "name": "Romance" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2026-01-9",
        "original_language": "en",
        "tagline": "No law. Only disorder.",
        "vote_average": 6.537,
        "vote_count": 35960,
        "runtime": 156,
    },
    {
        "_id": "950387",
        "id": 950387,
        "title": "Mirai",
        "overview": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
        "poster_path": "https://i.pinimg.com/736x/9f/bf/10/9fbf1079abd46477ea1517b8cf0ac9eb.jpg",
        "backdrop_path": "https://img.etimg.com/thumb/width-1600,height-900,imgsize-62870,resizemode-75,msid-123841008/magazines/panache/mirai-x-review-teja-sajja-steals-the-show-in-karthik-gattamnenis-fantasy-adventure-movie-netizens-hail-prabhas-surprise-voiceover.jpg",
        "genres": [
            { "id": 10751, "name": "Family" },
            { "id": 35, "name": "Comedy" },
            { "id": 12, "name": "Adventure" },
            { "id": 14, "name": "Action" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-09-5",
        "original_language": "en",
        "tagline": "Be there and be square.",
        "vote_average": 6.516,
        "vote_count": 15225,
        "runtime": 101,
    },
    {
        "_id": "575265",
        "id": 575265,
        "title": "Kishkindapuri",
        "overview": "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
        "poster_path": "https://cdn.123telugu.com/content/wp-content/uploads/2025/04/kishkindhapuri.jpg",
        "backdrop_path": "https://images.moneycontrol.com/static-mcnews/2025/09/20250911195352_nihhh.jpg?impolicy=website&width=770&height=431",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Horror" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-09-12",
        "original_language": "en",
        "tagline": "Our lives are the sum of our choices.",
        "vote_average": 7.042,
        "vote_count": 19885,
        "runtime": 170,
    },
    {
        "_id": "986056",
        "id": 986056,
        "title": "Devara",
        "overview": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
        "poster_path": "https://media-cache.cinematerial.com/p/500x/szmvnjda/devara-part-1-indian-movie-poster.jpg?v=1704192391",
        "backdrop_path": "https://images.indianexpress.com/2024/09/Devara-release-and-review-Live-Updates-1600.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 878, "name": "Comedy" },
            { "id": 12, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2024-09-27",
        "original_language": "en",
        "tagline": "Everyone deserves a second shot.",
        "vote_average": 9.785,
        "vote_count": 908757,
        "runtime": 127,
    },
    {
        "_id": "986056",
        "id": 986056,
        "title": "Akhanda 2",
        "overview": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
        "poster_path": "https://www.thehawk.in/_next/image?url=https%3A%2F%2Fd2py10ayqu2jji.cloudfront.net%2F2dde9a62-ae03-4611-83c7-d050210e8efb%2F202508283494043-99d096bb-6089-4cc4-85e8-7f6f22b57e90.jpg&w=3840&q=75",
        "backdrop_path": "https://static.toiimg.com/thumb/msid-121740969,width-1280,height-720,resizemode-4/121740969.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 878, "name": "Adventure" },
            { "id": 12, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-12-26",
        "original_language": "en",
        "tagline": "Everyone deserves a second shot.",
        "vote_average": 7.443,
        "vote_count": 23569,
        "runtime": 127,
    }
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
  {
    user: { name: "Ganesh" },
    show: {
      movie: { title: "Peddi" },
      showDateTime: "2025-06-30T08:00:00.000Z",
    },
    bookedSeats: {
      D1: "Ganesh",
      D2: "Ganesh"
    },
    amount: 500
  },
  {
    user: { name: "Ganesh" },
    show: {
      movie: { title: "Peddi" },
      showDateTime: "2025-06-30T08:00:00.000Z",
    },
    bookedSeats: {
      B1: "Ganesh"
    },
    amount: 256
  },
  {
    user: { name: "Ganesh" },
    show: {
      movie: { title: "Peddi" },
      showDateTime: "2025-06-30T08:00:00.000Z",
    },
    bookedSeats: {
      C1: "Ganesh",
      C2: "Ganesh",
      C3: "Ganesh"
    },
    amount: 223
  }
];
