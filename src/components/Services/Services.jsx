import ServiceCard from "./ServiceCard";
import rentalImage from '../../assets/rental.jpg'
import shareImage from '../../assets/share.jpg'
import planeImage from '../../assets/plane.jpg'
import moneyImage from '../../assets/money.jpg'

const services = [
    {
        id: 1,
        title: "Intercity Car Rental",
        description:
            "Travel between cities with comfort and confidence.",
        image: rentalImage,
    },
    {
        id: 2,
        title: "Ride share",
        description:
            "Go anywhere in the city, quickly and easily.",
        image: shareImage,
    },
    {
        id: 3,
        title: "Airport Rental",
        description:
            "Whether you’re flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
        image: planeImage,
    },
    {
        id: 4,
        title: "Hourly Rental",
        description:
            "Rent a car by the hour, tailored to your needs.",
        image: moneyImage,
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
        >
            <div className="mx-auto max-w-[1200px]">
                {/* Section Heading */}
                <div className="mb-12 flex flex-col gap-5 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Our Services
                        </p>

                        <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                            Every Ride
                            <span className="block text-slate-400">
                                One Platform
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-base">
                        From city rides to long-distance journeys, choose the
                        service that fits your needs.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;