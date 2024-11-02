function Discipline({ rules }: { rules: string[] }) {
  return (
    <div className="flex flex-col items-center mx-8 md:mx-0">
      <div className="w-full md:w-1/2 justify-center rounded-lg mb-8 p-5 text-white bg-gray-700">
        Futbol Topluluğu adı altında düzenlenen etkinliklerde ve maçlarda:
      </div>
      <ul className="w-full md:w-1/2 list-disc items-center">
        {rules.map((rule, index) => (
          <li
            key={index}
            className="justify-center mb-8 p-5 rounded-lg text-white bg-gray-700 transition-all duration-700 transform hover:scale-105"
          >
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Discipline;
