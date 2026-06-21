import Link from "next/link";

const CTABanner = () => {
    const email = "wasifghori71@gmail.com";
    const whatsappNumber = "923092335781";

    const message = `Hello Muhammad Wasif,\n\nI recently came across your portfolio and was impressed by your work. I have a project in mind and would love to learn more about your process, availability, and how we might work together.\n\nHere are my details so we can discuss a potential estimate:\n\nMy Name: [Client Name]\n\nMy Email: [Client Email]\n\nProject Overview / Type of Work: [Briefly describe the project]\n\nLooking forward to connecting!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    const emailLink = `mailto:${email}?subject=${encodeURIComponent("Portfolio Inquiry: Interested in working with you")}&body=${encodedMessage}`;

    return (
        <div className="w-full px-6 py-12 md:py-16 relative z-10 flex justify-center bg-transparent">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 bg-white">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 tracking-tight">
                        Designed & Developed by <span className="text-green-600">MUHAMMAD WASIF</span>
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl m-0 leading-relaxed">
                        Want a professional website like this one? Get in touch with me directly to bring your ideas to life!
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-8 py-3.5 text-[15px] font-semibold rounded-full transition-all duration-300 bg-green-600 text-white hover:bg-green-700 hover:shadow-md hover:-translate-y-0.5"
                    >
                        WhatsApp Me
                    </a>
                    <a
                        href={emailLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-8 py-3.5 text-[15px] font-semibold rounded-full transition-all duration-300 bg-white text-green-600 border border-green-600/30 hover:bg-green-50 hover:border-green-600 hover:-translate-y-0.5"
                    >
                        Email Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CTABanner;
