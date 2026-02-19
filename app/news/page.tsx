'use client';

export default function News() {
  const articles = [
    {
      title: 'NEWIF Reaches 50,000 Beneficiaries Milestone',
      date: 'February 2024',
      excerpt: 'Celebrating a transformative year of impact across multiple communities',
      category: 'Impact'
    },
    {
      title: 'New Women Empowerment Center Opens in Northern Region',
      date: 'January 2024',
      excerpt: 'State-of-the-art facility to serve 500 women annually',
      category: 'Programs'
    },
    {
      title: 'Partnership with International Organization Expands Programs',
      date: 'December 2023',
      excerpt: 'New funding enables expansion into 3 additional countries',
      category: 'Partnerships'
    },
    {
      title: 'Disability Rights Campaign Reaches One Million',
      date: 'November 2023',
      excerpt: 'Awareness campaign raises consciousness about PWD rights',
      category: 'Advocacy'
    },
  ];

  return (
    <main className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-12">News & Updates</h1>

        <div className="space-y-8">
          {articles.map((article, i) => (
            <article key={i} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-sm text-gray-600">{article.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-2">{article.title}</h2>
              <p className="text-gray-700">{article.excerpt}</p>
              <p className="text-accent font-semibold mt-4 hover:translate-x-1 transition-transform inline-block">Read More →</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Subscribe to our newsletter for latest updates</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg" />
            <button className="px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
