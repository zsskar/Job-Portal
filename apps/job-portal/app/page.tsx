import Header from "../components/Header";
import JobCard from "../components/JobCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Header */}
      <Header />
  
      {/* Hero Section */}
      <div
        className="py-10 md:py-15 bg-cover bg-center flex flex-col items-center justify-center text-white text-center shadow-lg"
        style={{
          backgroundImage: 'linear-gradient(to right bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(/jobBG.jpg)',
        }}
      >
        <div className="max-w-md">
          <h1 className="text-4xl font-bold tracking-wide mb-4">Find Your Dream Job</h1>
          <p className="text-lg opacity-80 mb-3">Browse through thousands of job opportunities tailored just for you.</p>
        </div>
      </div>
  
      {/* Featured Jobs Section */}
      <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Featured Jobs</h2>
        <div className="flex justify-center p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-full">
    {/* Job Cards */}
    <JobCard
      title="Frontend Developer"
      company="Tech Company"
      date={new Date().toLocaleDateString()} // Use toLocaleDateString for a formatted date
      description="This is a great job"
      location="Remote"
      key={Math.random().toString()}
    />
    <JobCard
      title="Backend Developer"
      company="Startup Inc."
      date={new Date().toLocaleDateString()} // Use toLocaleDateString for a formatted date
      description="This is a great job"
      location="Remote"
      key={Math.random().toString()}
    />
    <JobCard
      title="Data Scientist"
      company="Data Corp"
      date={new Date().toLocaleDateString()} // Use toLocaleDateString for a formatted date
      description="This is a great job"
      location="Remote"
      key={Math.random().toString()}
    />
    <JobCard
      title="Full Stack Engineer"
      company="Innovatech"
      date={new Date().toLocaleDateString()} // Use toLocaleDateString for a formatted date
      description="This is a great job"
      location="Remote"
      key={Math.random().toString()}
    />
    
  </div>
</div>

      </div>
  
      {/* Call to Action Section */}
      <div className="py-10 bg-blue-600 text-white text-center mt-8 shadow-lg">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to take the next step in your career?</h3>
          <p className="mb-4">Sign up today to start applying for your dream job.</p>
          <button
            className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-200 hover:text-blue-800 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
  
}