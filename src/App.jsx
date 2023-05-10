export default function App() {
  return (
    <section className="h-screen grid px-5">
      <div className="w-96 h-96 bg-[#80ffd4] m-auto border-black cursor-pointer border grid grid-cols-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, index) => {
          return <div className="border border-black" key={index}></div>;
        })}
      </div>
    </section>
  );
}
