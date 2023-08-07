import Image from "next/image";
// // Bu bileşen bir oyuncu listesi alır ve onları ekrana basar
// const CastList = ({ cast }) => {
//   return (
//     <div className="container mx-auto px-4 py-4">
//       <h2 className="text-white text-2xl font-semibold">Oyuncular</h2>
//       <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cast?.map((actor) => (
//           <li key={actor.id} className="flex flex-col items-center">
//             <Image
//               alt={actor.name}
//               unoptimized
//               width={200}
//               height={300}
//               src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
//             />
//             <p className="text-white text-lg">{actor.name}</p>
//             <p className="text-white text-sm">{actor.character}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CastList;

export default function CastGrid({ cast }) {
  return (
    <div className="grid grid-cols-4 gap-4 p-5">
      {cast &&
        cast.map((castMember) => (
          <div key={castMember.id} className="bg-gray-800 rounded-lg shadow-lg">
            <Image
              alt={castMember.name}
              unoptimized
              width={300}
              height={450}
              src={`https://image.tmdb.org/t/p/original${castMember.profile_path}`}
            />
            <div className="p-4">
              <h3 className="text-white text-lg font-semibold">
                {castMember.name}{" "}
              </h3>
              <p className="text-gray-400 text-sm"> {castMember.character} </p>
            </div>
          </div>
        ))}
    </div>
  );
}
