import useSWR from "swr";

const Character = () => {
  const fetcher = async (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://rickandmortyapi.com/api/character",
    fetcher
  );
  console.log(data);

  return (
    <>
      <div className="w-full flex flex-wrap justify-center">
        {data?.results?.map((hello) => {
          console.log("photos", hello);
          return (
            <>
              <div
                key={hello?.id}
                className="h-[300px] justify-start items-center flex-col  flex"
              >
                <div className="w-[289px] h-[230px]  flex">
                  <img
                    className="w-[289px] h-[230px] rounded-lg border border-blue-800 border-2 mr-5 "
                    src={hello.image}
                    alt={hello.name}
                  />
                </div>
                <div>
                <h1>{hello.name}</h1>
                <button className="text-white bg-blue-600 w-20 h-10 rounded-md">See More</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Character;
