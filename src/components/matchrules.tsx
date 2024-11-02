function MatchRules({ rules }: { rules: string[] }) {
  return (
    <div className="flex flex-col items-center mx-8 md:mx-0">
      <div className="w-full md:w-1/2 justify-center rounded-lg mb-8 p-5 text-white bg-gray-700">
        Futbol, doğası gereği fiziksel temas gerektiren bir spordur. Oynanan maçların önemi ve ciddiyeti ne olursa olsun, futbolun ülkemiz insanları üzerindeki büyük etkisi nedeniyle insanlar birbiriyle basit bir maç için bile kanlı bıçaklı olmaya oldukça eğilimlidir. Bu gibi durumların önüne geçmek için topluluk adına uymanız gereken maç içi kurallar aşağıda sıralanmıştır. Kuralların ihlalinin devam etmesi topluluktan kalıcı olarak uzaklaştırılmanıza neden olur:
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

export default MatchRules;
