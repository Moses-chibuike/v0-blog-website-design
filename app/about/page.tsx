export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Adesuwa</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Celebrating the strength, beauty, and achievements of African women across the globe.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop"
                alt="African woman leader"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Adesuwa is more than just a blog – it's a movement dedicated to amplifying the voices, stories, and
                achievements of African women. We believe in the power of representation and the importance of
                celebrating our diverse experiences.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Through inspiring stories, practical advice, and cultural insights, we aim to empower African women to
                embrace their heritage while pursuing their dreams and ambitions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our platform serves as a bridge connecting African women across continents, fostering community, and
                creating opportunities for growth and collaboration.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Authenticity</h3>
                <p className="text-gray-600">
                  We celebrate authentic stories and genuine experiences that reflect the true diversity of African
                  women.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Empowerment</h3>
                <p className="text-gray-600">
                  We provide tools, resources, and inspiration to help African women achieve their goals and dreams.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">
                  We foster a supportive community where African women can connect, share, and grow together.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop&crop=face"
                  alt="Amara Okafor"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Amara Okafor</h3>
                <p className="text-amber-600 mb-3">Founder & Editor-in-Chief</p>
                <p className="text-gray-600 text-sm">
                  Passionate about amplifying African women's voices and creating meaningful content.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop&crop=face"
                  alt="Kemi Adebayo"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kemi Adebayo</h3>
                <p className="text-amber-600 mb-3">Fashion & Culture Editor</p>
                <p className="text-gray-600 text-sm">
                  Expert in African fashion trends and cultural preservation through modern expression.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face"
                  alt="Fatima Hassan"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fatima Hassan</h3>
                <p className="text-amber-600 mb-3">Business & Entrepreneurship Writer</p>
                <p className="text-gray-600 text-sm">
                  Dedicated to sharing stories of successful African women entrepreneurs and business leaders.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of a growing community of African women who are making a difference. Share your story, connect
              with others, and be inspired.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200">
                Share Your Story
              </button>
              <button className="border-2 border-amber-600 text-amber-600 font-semibold py-3 px-8 rounded-lg hover:bg-amber-50 transition-all duration-200">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
