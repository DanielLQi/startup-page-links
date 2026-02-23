import config from "@/config.json";

export default function Home() {
  return (
    <main className="p-8 space-y-10">

      <div className="flex gap-6 items-center">
        {config.icons.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={`/${item.name.toLowerCase()}.ico`}
              alt={item.name}
              className="w-10 h-10" />
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {config.links.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex item-center gap-4 p-3 rounded-lg hover:bg-[#0a0a0a] transition"
          >
            <img
              src={`/${item.name.toLowerCase()}.ico`}
              alt={item.name}
              className="w-6 h-6"
            />
            <span className="text-lg">{item.name}</span>
          </a>
        ))}
      </div>
    </main>
  );
}