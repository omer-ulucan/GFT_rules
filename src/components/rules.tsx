function Rules({rules} : {rules : string[]}) {
  return (
    <div className="flex justify-center">
        <ul className="w-[50%]">
            {rules.map((rule, index)=> (
                <li className="justify-center mb-8 p-5 rounded-lg text-white bg-gray-700  transition-all duration-700 transform hover:scale-105" key={index}>{index+1} - {rule}</li>
            ))}
        </ul>
    </div>
  )
}

export default Rules