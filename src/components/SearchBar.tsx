type Props = {};

export default function SearchBar({}: Props) {
  return (
    <form className="w-[400px]">
      <input
        className="w-full rounded p-2 focus:outline-none focus:ring focus:ring-slate-400"
        type="text"
        placeholder="Search for a location..."
      />
      <div className="w-full rounded border border-slate-300 bg-white p-2 hover:bg-slate-100">
        hello world
      </div>
    </form>
  );
}
