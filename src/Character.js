import { useState } from "react";
import useSWR from "swr";
import Skeleton from "./component/Skeleton";

const fetcher = async (url) => fetch(url).then((res) => res.json());
const Character = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useSWR(
    `https://rickandmortyapi.com/api/character/?page=${page}`,
    fetcher
  );
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {isLoading ? (
        "loadingggg"
      ) : (
        <>
          <div className="w-full flex flex-wrap justify-center">
            {data?.results?.map((characters) => {
              console.log("imagesssss", characters.image);
              return (
                <>
                  <div
                    key={characters?.id}
                    className="h-[300px] justify-start items-center flex-col  flex max-w-sm"
                  >
                    
                    <div className="w-[289px] h-[230px] flex">
                      {!loaded && 
                <Skeleton />
            }
            <img
                className={`w-[289px] h-[230px] rounded-lg border border-blue-800 mr-5 ${loaded ? <Skeleton /> : 'opacity-0'}`}
                src={characters.image}
                alt={characters.name}
                loading="lazy"
                onLoad={() => setLoaded(true)}
            />
                    </div>
                    <div>
                      <h1>{characters.name}</h1>
                      <button className="text-white bg-blue-600 w-20 h-10 rounded-md">
                        See More
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="w-[100%] flex  justify-center items-center h-[100px]">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="bg-blue-200 w-[10%]"
            >
              back
            </button>
            <button
              className="bg-blue-200 w-[10%]"
              onClick={() => setPage((prev) => prev + 1)}
              disabled={!data?.info?.next}
            >
              next
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Character;
