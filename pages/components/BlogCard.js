import Link from "next/link";
import { getDateFormatted } from "../../utilities/FormatDate";
import Image from "next/image";

export default function BlogCard(props) {
  const { blogID, category, title, date, author, synopsis, coverImg } = props;
  return (
    <section className="flex flex-col justify-start items-start w-full lg:w-[500px] lg:min-h-[700px] m-5 lg:m-7">
      {/* Blog cover image */}
      <Image
        className="rounded-lg block w-full lg:w-[500px] lg:h-[300px]"
        src={coverImg}
        alt={title}
        width={500}
        height={300}
      />

      {/* Blog title */}
      <h2 className="text-xl md:text-3xl font-righteous pt-5 pb-2">{title}</h2>

      {/* Blog Category */}
      <h3 className="font-russo text-xs tracking-widest mt-2 mb-5 text-amber-300 bg-blue-950 p-2 max-w-fit">
        {category}
      </h3>

      {/* Blog author and publication date */}
      <div className="text-sm font-poppins tracking-widest pb-2">
        {author} || {getDateFormatted(date)}
      </div>

      {/* Blog synopsis */}
      <p className="text-base md:text-lg font-poppins py-5">{synopsis}</p>

      {/* Detailed blog link */}
      <Link
        className="text-base md:text-lg font-russo p-2 my-3 bg-amber-950 text-orange-50 hover:text-amber-500 border rounded-lg shadow-lg shadow-amber-500"
        href={`/posts/${blogID}`}
      >
        Read More ..
      </Link>
    </section>
  );
}
