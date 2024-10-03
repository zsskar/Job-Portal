
interface JobCardProps {
  title: string;
  company: string;
  location : string;
  date : string;
  description : string;
}

export default function JobCard({ title, company, location, date, description }: JobCardProps) {
  return (
    <div className="group bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      {/* Company Logo */}
      <div className="flex items-center gap-x-4 mb-4">
        <img
          className="aspect-[2/2] w-16 h-16 rounded-full shadow-lg"
          src="https://img.icons8.com/fluency/48/null/mac-os.png"
          alt={`${company} Logo`}
        />
        <div>
          <h3 className="text-xl font-bold text-gray-50">{company}</h3>
          <span className="text-xs text-gray-400">{location}</span>
        </div>
      </div>

      {/* Job Title and Description */}
      <div className="my-4">
        <h3 className="text-2xl font-semibold text-gray-200">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
        <div className="text-sm font-medium mt-2">
          <span className="m-1 inline-block bg-blue-600 text-white rounded-full px-2 py-1">HTML</span>
          <span className="m-1 inline-block bg-yellow-600 text-white rounded-full px-2 py-1">CSS</span>
          <span className="m-1 inline-block bg-pink-600 text-white rounded-full px-2 py-1">FIGMA</span>
          <span className="m-1 inline-block bg-lime-600 text-white rounded-full px-2 py-1">Ad. XD</span>
          <span className="m-1 inline-block bg-blue-600 text-white rounded-full px-2 py-1">Illustrator</span>
        </div>
        <div className="mt-2 text-sm text-gray-400">$60K - $100K per year</div>
      </div>

      {/* Job Type and Apply Button */}
      <div className="flex items-center justify-between border-t border-gray-700 pt-4 mt-4">
        <span className="text-sm font-medium text-gray-50">Full Time</span>
        <a
          href="#apply"
          className="font-medium text-blue-500 transition-all duration-300 hover:text-blue-400"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};


