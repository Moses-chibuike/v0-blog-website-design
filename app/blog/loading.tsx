export default function BlogLoadingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Loading State */}
      <section className="relative py-24 overflow-hidden bg-gray-200 animate-pulse">
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
        </div>
      </section>

      {/* Search and Filter Loading State */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md h-12 bg-gray-200 rounded"></div>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-24 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Loading State */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Loading State */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Loading State */}
      <section className="py-16 bg-gray-800 animate-pulse">
        <div className="container mx-auto px-4 text-center">
          <div className="h-8 bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-2/3 mx-auto mb-8"></div>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <div className="flex-1 h-12 bg-gray-700 rounded"></div>
            <div className="h-12 w-32 bg-gray-700 rounded"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
