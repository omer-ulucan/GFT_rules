function Rules({ rules }: { rules: string[] }) {
  return (
    <div className="flex justify-center mx-8 md:mx-0">
      <ul className="w-full md:w-1/2 list-disc">
        {rules.map((rule, index) => (
          <li
            className="justify-center mb-8 p-5 rounded-lg text-white bg-gray-700 transition-all duration-700 transform hover:scale-105"
            key={index}
          >
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rules;
