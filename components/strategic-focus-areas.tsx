import {
  BarChart3,
  Users2,
  BookOpen,
  Sprout,
} from 'lucide-react';

interface FocusArea {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const focusAreas: FocusArea[] = [
  {
    icon: <Users2 size={40} />,
    title: "Women's Economic Empowerment",
    description:
      'We equip women with entrepreneurship training, business formalization support, digital marketing education, and structured income strategies to promote financial independence.',
  },
  {
    icon: <BarChart3 size={40} />,
    title: 'Disability Inclusion & Accessibility',
    description:
      'We ensure equitable access to programs by promoting inclusive participation for women and persons with disabilities.',
  },
  {
    icon: <BookOpen size={40} />,
    title: 'Education & Skills Development',
    description:
      'Through structured initiatives such as "Every Child Must Go to School" and vocational training programs, we expand access to education and capacity building.',
  },
  {
    icon: <Sprout size={40} />,
    title: 'Sustainable Livelihoods & Community Resilience',
    description:
      'Through initiatives like "Let\'s Farm to Feed Our Community," we promote rural enterprise development and long-term economic resilience.',
  },
];

export default function StrategicFocusAreas() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Strategic Focus Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-accent p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-accent mb-4">{area.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">{area.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
