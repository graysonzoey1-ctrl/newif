interface Program {
  title: string;
  description: string;
}

const programs: Program[] = [
  {
    title: 'Every Child Must Go to School',
    description:
      'Promoting educational continuity and awareness for vulnerable children and families.',
  },
  {
    title: "Let's Farm to Feed Our Community",
    description: 'Supporting rural women and farmers with enterprise development and market visibility strategies.',
  },
  {
    title: 'Three-Month Skills Development Program',
    description: 'Delivering structured vocational and entrepreneurship training to create sustainable income pathways.',
  },
];

export default function ProgramSnapshot() {
  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#fde8ed' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Our Key Initiatives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-sm" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">{program.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
