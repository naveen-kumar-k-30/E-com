import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className=" container:2xl mx-auto flex flex-col  justify-center items-center h-screen gap-4">
        <p className="text-6xl font-bold  ">
          Error occured {err.status} {err.statusText}
        </p>
        <p className="text-2xl"> {err.data}</p>
      </div>
    </>
  );
};

export default Error;
