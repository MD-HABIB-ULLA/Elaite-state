import { Link, useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { BsCashCoin } from "react-icons/bs";
const Estates = () => {
  const estates = useLoaderData();
  console.log(estates);
  return (
    <div className=" m-auto  mt-16 bg-[#23334A] py-20 mb-20">
      <h1 className="text-5xl font-bold  text-center text-white pb-10">
        Es<span className="border-b-2 ">ta</span>tes
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 container m-auto  mt-10 gap-3 p-2 lg:p-0">
        {estates.map((estate, i) => (
          <div key={i} className="relative">
            <div className="card card-compact  bg-base-100 shadow-xl  rounded-lg">
              <Link to={`details/${estate.id}`} className="hover:opacity-80">
                <figure>
                  <img src={estate.image} alt="Shoes" className="h-64 w-full" />
                </figure>
              </Link>
              <div className="card-body">
                <h2 className="card-title"> {estate.estate_title}</h2>
                <div className="flex w-full justify-between gap-1 md:gap-0">
                  <div>
                    <h1 className="flex gap-1 text-base items-center">
                      <CiLocationOn className="lg:text-xl text-base" />
                      {estate.location}
                    </h1>
                    <h1 className="flex gap-1 text-base items-center">
                      <LiaRulerCombinedSolid className="text-xl" />
                      {estate.area}
                    </h1>
                  </div>
                  <div>
                    {" "}
                    <h1 className="flex gap-1 text-base items-center">
                      <BsCashCoin className="text-xl" />
                      <span className="text-green-600 font-bold">
                        {" "}
                        {estate.price}
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="card-actions justify-start">
                  <Link to={`details/${estate.id}`}>
                    {" "}
                    <button className="btn bg-[#00C194] text-white font-bold hover:bg-[#00c19479]">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute z-20 top-3 bg-[#6bc702] text-white left-3 px-2 rounded-lg uppercase">
              {estate.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estates;
