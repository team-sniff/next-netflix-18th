import { CirclePlayIcon } from '@/public/images';
import { TContent } from '@/types';
import Image from 'next/image';

interface SearchResultElementProps {
  movie: TContent;
}

const SearchResultElement = ({ movie }: SearchResultElementProps) => {
  const backDropPath = movie.backdrop_path
    ? movie.backdrop_path
    : movie.poster_path;

  const baseUrl = 'https://image.tmdb.org/t/p/original';

  const backDropUrl = backDropPath
    ? baseUrl + backDropPath
    : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';

  return (
    <div className="flex items-center mb-[3px] bg-[#424242] h-[76px] overflow-hidden pr-3 relative">
      <Image
        src={backDropUrl}
        alt="poster"
        fill
        className="!w-2/5 object-cover"
      />
      <h3 className=" pl-[45%] text-white flex-1">{movie.title}</h3>
      <CirclePlayIcon />
    </div>
  );
};

export default SearchResultElement;
