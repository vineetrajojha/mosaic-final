import Link from "next/link";
export default function CTA() {
    return (
        <section className="py-32 px-6 text-center bg-gradient-to-b from-background to-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-8">
                    Ready to make history?
                </h2>
                <p className="text-xl text-secondary font-sans mb-12">
                    Registration closes soon. Don't miss your chance to be part of the legacy.
                </p>
                <Link href="/register">
                    <button className="px-12 py-5 rounded-full bg-accent text-accent-foreground text-xl font-heading font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(238,183,2,0.4)] transition-all duration-300">
                        Register Now
                    </button>
                </Link>
            </div>
        </section>
    );
}
