import "./home.scss"
import Products from "./products"
const products = [{

    header: "LG Smart Watch",
    img: "https://th.bing.com/th/id/OIP.UQMW--_PJ5pqqldqLFtUSwHaIa?pid=ImgDet&rs=1",
    info: `Behind the small touchscreen lies the kind of specs that sound like they belong to a mid to low-range Android smartphone. There’s a 1.2GHz Snapdragon 400 CPU, with 4GB of storage and 512MB memory. That’s more than sufficient for launching apps and moving between screens, although there’s just the slightest of lag in screen transitions. It’s not going to ruin your overall experience, though.Inside is a 9-axis movement sensor, which includes a gyroscope, accelerometer, compass and altimeter. For anyone that uses an activity tracker, the altimeter helps track elevation and combined with the built-in pedometer gives the G Watch decent fitness credentials.`,
    price: 250,
    rating: 4.3,
    alt: "black lg smart watch from front"
},
{

    header: "Apple iPhone 11, 64GB, Black",
    rating: 4.7,
    info: "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.³ Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.² And worry less with water resistance up to 2 meters for 30 minutes.¹",
    img: "https://th.bing.com/th/id/OIP.uCo7bDE7CNXvU8e0_1XLwAHaHa?pid=ImgDet&rs=1.",
    price: 346,
    alt: "black iphone 11 on brown table"
},
{
    header: "Sony PlayStation 5 Disc Video Game Console (PS5 Disc Console) (Disc Version) and Mightyskins Custom Skin Code Voucher - Bundle",
    rating: 4.3,
    img: "https://qvc.scene7.com/is/image/QVC/e/40/e240040.001",
    info: `Sony PlayStation 5 Console (PS5 Disc Console) (Disc Version) with Mightyskins Custom Skin Code Voucher - Bundle
The PS5 Disc Edition unleashes new gaming possibilities that you never anticipated.
     Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.`,
    price: 739,
    alt: "white playstion 5 on poster with yoystick,headset"
}, {
    rating: 3.4,
    price: 500,
    alt: "whie HP laptop pavilion on  table whit white background",
    img: "https://i5.walmartimages.com/asr/ed20d64d-7ee4-4052-b2de-db3b5035d5e7.b6cc172503f34ca6a87546a2d1301dfe.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    header: `HP Pavilion 15.6" FHD Touch, Intel Core i5-1135G7, 8GB RAM, 512GB SSD, Lunar Gold, Windows 10, 15-eg0050wm`,
    info: `Enjoy incredible performance in a smaller PC and mind-blowing entertainment with a micro-edge screen and Audio by B&O. Intuitively reach out and control your display with just a touch. And transform your content with amazing Full HD detail and 178-degree wide-viewing angles, with Intel Iris Xe graphics for creating, gaming and entertainment. Enjoy crisp, stunning visuals with the convenience of a thin and light laptop for the home office. Keep your data and documents secure with patented 3D fingerprint reader that locks and unlocks your notebook with the touch of your finger. Adaptive Battery Optimizer protects battery health and brings peace of mind for uninterrupted productivity and entertainment with automatic checks on battery temperature, charging status, and usage time. With HP QuickDrop to make file transfers easy, fast and reliable, you can transfer photos, videos, documents and more between your PC and mobile device. Easily snap a photo to share, send addresses for directions on-the-go, and view texts on your PC screen. No matter what your daily schedule looks like, the 11th Generation Intel Core processor brings the perfect combination of features to make you unstoppable. Get things done fast with high performance, instant responsiveness and best-in- class connectivity. The Windows 11 upgrade will be delivered to qualifying devices late 2021 into 2022. Timing varies by device. Certain features require additional hardware (see aka.ms/windows11-spec).`,
}, {
    header: "Apple Watch Series 3 GPS Silver - 42mm - White Sport Band",
    img: "https://i5.walmartimages.com/asr/bc73a62b-93c8-4c2c-ae49-e67556c34fbf.8b72c18bc21d3fb448d8f619c07afcec.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    info: `Good things come in 3. 

See how much you move, exercise, and stand daily, and track every way you work out. Listen to your favorite music. Text, call, and email. Pay for lunch, and get a tap when it’s time to turn while getting directions. Series 3 lets you do it all, right from your wrist.

Keep motivated by tracking your daily activity on Apple Watch and seeing trends on iPhone
Measure workouts like running, walking, cycling, yoga, swimming, and dance, plus new tai chi and pilates
High and low heart rate notifications and irregular heart rhythm notification1
Emergency SOS lets you call for help from your watch2
Take calls and reply to texts, right from your wrist
View notifications at a glance on the Retina display
Sync music, podcasts, and audiobooks to your watch and enjoy them on the go
Swimproof design3
watchOS 8 features new workout types and enhancements to Messages
Apple Watch Series 3 requires an iPhone 6s or later with iOS 15 or later.

1Irregular rhythm notification requires the latest versions of watchOS and iOS. It is not intended for use by people under 22 years old or those who have been previously diagnosed with atrial fibrillation (Afib).

2To use Emergency SOS, your iPhone needs to be nearby. If your iPhone isn’t nearby, your Apple Watch needs to be connected to a known Wi-Fi network and you must set up Wi-Fi Calling.

3ISO standard 22810:2010. Appropriate for shallow-water activities like swimming. Submersion below shallow depth and high-velocity water activities not recommended.

GPS and a barometric altimeter track how far and high you go
Dual-core processor for faster app performance (2)
Ultimate sports watch and intelligent activity tracker
Swimproof so you're always read for the pool or ocean (3)
Alumninum case
watchOS 4 is even more intuitive and intelligent
Condition: New
1. Apple Music requires a subscription
2. Compared with the previous generation
3. ISO standard 22810:2010. Appropriate for shallow-water activities like swimming.  Submersion below shallow depth and high-velocity water activities not recommended`,
    rating: 3.4,
    price: 160,
    alt: "white apple smart watch"
}, {

    header: "Razer Power Up Gaming Bundle V2 - Cynosa Lite, Gigantus V2 L, DeathAdder Essential, BlackShark V2 X",
    img: "https://i5.walmartimages.com/asr/cb37ac54-9d05-4ed1-9532-f17e18887491.943008e5420d59121710c653b875d0cb.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    info: `Razer Power Up Bundle V2 - Cynosa Lite, Gigantus V2 L, Death Adder Essential, Black Shark V2 X. The Razer Cynosa Lite features Razer Chroma single-zone lighting with full Synapse 3 features, and a spill-resistant durable design. Go big with the Razer Gigantus V2’s textured microwave cloth surface. Compete at a new level with the Razer Death Adder Essential gaming mouse. Its 6400 dpi optical sensor ensures fast and accurate tracking, and it has five buttons that can be programmed for instant access to commonly used functions. The Razer Death Adder Essential gaming mouse's ergonomic form provides comfort for use during long campaigns without impacting performance. With our best headset mic and audio drivers packed into a unique aviation-style headset, your competitive play is destined to turn pro.`,
    alt: "black bluetooth keyboard,mouse and headset",
    rating: 4.9,
    price: 79,
}]

export const Home = () => {
    return (
        <main>
            <div className="home">
                <div className="home_container">
                    <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jovjd+f9L._SX3000_.jpg" alt="three toys on green background" />
                    <div className="product-container">
                        {products.map((item, index) => {
                            return (
                                <Products item={item} index={index} />
                                
                            )
                        })}
                    </div>

                </div>
            </div>
        </main>
    )
}