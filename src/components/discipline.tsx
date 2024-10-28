function Discipline({ rules }: { rules: string[] }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[50%] justify-center rounded-lg mb-8 p-5 rounded-s-xl text-white bg-gray-700">Futbol Topluluğu adı altında düzenlenen etkinliklerde ve maçlarda:</div>
      <ul className="w-[50%] list-disc items-center">
        {rules.map((rule, index) => (
          <li key={index} className="justify-center mb-8 p-5 rounded-lg text-white bg-gray-700  transition-all duration-700 transform hover:scale-105">{rule}</li>
        ))}
      </ul>
    </div>
  );
}

export default Discipline;
