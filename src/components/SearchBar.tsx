type Props = {};

export default function SearchBar({}: Props) {
  return (
    <form>
      <input
        className="min-w-[400px] rounded p-2"
        type="text"
        placeholder="Search for a location..."
      />
    </form>
  );
}
