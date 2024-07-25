import Link from "next/link";

export default function Banner({
  title,
  description,
  buttonText,
  buttonLink,
}: {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}) {
  return (
    <section className="py-16 bg-gradient-to-r bg-slate-100 text-center ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-black opacity-75">{description}</p>
        <Link
          href={buttonLink}
          className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
