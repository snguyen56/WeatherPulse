type Props = {};

export default function SearchBar({}: Props) {
  return (
    <form>
      <input
        className="min-w-[400px] rounded p-2 focus:outline-none focus:ring focus:ring-slate-400"
        type="text"
        placeholder="Search for a location..."
      />
    </form>
  );
}
