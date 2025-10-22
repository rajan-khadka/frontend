interface CardProps {
  title: string;
  description: string;
  image: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (...args: any) => void;
}

export default function CustomCard({
  title,
  description,
  image,
  handler,
}: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        className="text-red-700 font-semibold hover:text-red-800"
        onClick={handler}
      >
        Learn More →
      </button>
    </div>
  );
}
