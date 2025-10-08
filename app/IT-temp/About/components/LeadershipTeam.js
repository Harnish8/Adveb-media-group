// A simple component for displaying a team member
const TeamMemberCard = ({ name, title, bio, imagePlaceholder }) => (
  <div className="text-center p-6 bg-white rounded-xl shadow-md">
    <div className="w-28 h-28 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
        {/* Placeholder for actual image */}
        {imagePlaceholder}
    </div>
    <h3 className="text-xl font-bold text-adveb-dark">{name}</h3>
    <p className="text-adveb-blue font-medium mb-3">{title}</p>
    <p className="text-sm text-gray-600 line-clamp-3">{bio}</p>
  </div>
);

export default function LeadershipTeam() {
    const teamMembers = [
        {
            name: "Alexander Smith",
            title: "Founder & CEO",
            bio: "Alex founded Adveb after 15 years in digital media infrastructure, ensuring every client benefits from enterprise-level performance and agility.",
            imagePlaceholder: "CEO"
        },
        {
            name: "Priya Sharma",
            title: "Chief Technology Officer (CTO)",
            bio: "Priya leads our Cybersecurity and Cloud strategy, specializing in Australian Essential Eight compliance and hybrid Azure architectures.",
            imagePlaceholder: "CTO"
        },
        {
            name: "David Chen",
            title: "Head of Client Services",
            bio: "David ensures our 24/7 support remains personal, quick, and efficient, maintaining our 15-minute average response time commitment.",
            imagePlaceholder: "Client Services"
        },
    ];

    return (
        <section className="py-16 bg-adveb-light-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-adveb-dark text-center mb-12">
                    Meet the Leadership Team
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
}