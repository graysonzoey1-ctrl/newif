'use client';

export default function Gallery() {
  const images = [
    { title: 'Women Training Workshop', category: 'Programs' },
    { title: 'Community Health Clinic', category: 'Development' },
    { title: 'School Children Learning', category: 'Education' },
    { title: 'Disability Inclusion Event', category: 'Advocacy' },
    { title: 'Village Water Project', category: 'Infrastructure' },
    { title: 'Skills Training Center', category: 'Training' },
  ];

  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6">Photo Gallery</h1>
        <p className="text-xl text-gray-700 mb-12">Visual moments from our programs and community impact.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-64 flex items-center justify-center"
            >
              <div className="text-center">
                <p className="text-5xl mb-2">📸</p>
                <h3 className="text-lg font-bold text-primary">{img.title}</h3>
                <p className="text-sm text-gray-600">{img.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">More Photos Coming Soon</h2>
          <p className="text-gray-700 mb-6">
            Follow us on social media for daily updates and photos from our programs.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="text-accent font-semibold hover:underline">Facebook</a>
            <a href="#" className="text-accent font-semibold hover:underline">Instagram</a>
            <a href="#" className="text-accent font-semibold hover:underline">Twitter</a>
          </div>
        </div>
      </div>
    </main>
  );
}
