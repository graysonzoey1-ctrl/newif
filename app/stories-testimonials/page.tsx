'use client';

export default function StoriesTestimonials() {
  const stories = [
    {
      name: 'Ama Boateng',
      role: 'Women Empowerment Beneficiary',
      story: 'Through NEWIF\'s training, I learned tailoring and started my own business. I now employ 5 women and provide for my 3 children.',
      image: '👩‍💼'
    },
    {
      name: 'Kwame Mensah',
      role: 'PWD Success Story',
      story: 'Despite my disability, NEWIF provided me with computer skills and I now work as a data entry clerk earning a decent income.',
      image: '💪'
    },
    {
      name: 'Rebecca Owusu',
      role: 'Scholarship Recipient',
      story: 'I completed secondary school with NEWIF\'s scholarship and now study nursing. I want to give back to my community.',
      image: '🎓'
    },
    {
      name: 'Community of Ashanti',
      role: 'Community Development',
      story: 'Our village now has clean water, improved roads, and a health clinic. We\'re building a sustainable future together.',
      image: '🏘️'
    },
  ];

  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">Stories & Testimonials</h1>
        <p className="text-xl text-gray-700 mb-12">Real voices from the communities we serve, sharing their journey of transformation.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, i) => (
            <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <p className="text-6xl mb-4">{story.image}</p>
              <p className="text-gray-700 italic mb-6">{story.story}</p>
              <div>
                <p className="font-bold text-primary">{story.name}</p>
                <p className="text-sm text-gray-600">{story.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Your Story Matters</h2>
          <p className="text-gray-700 mb-6">
            We're always collecting new stories from our beneficiaries. If you'd like to share your transformation journey, please contact us.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </main>
  );
}
