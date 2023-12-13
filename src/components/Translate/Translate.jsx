
import { useEffect, useState } from "react"
import axios from "axios"

const Translate = () => {
  const [options, setOptions] = useState([])
  const [to, setTo] = useState("en")
  const [from, setFrom] = useState("en")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const translate = () => {
    // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

    const params = new URLSearchParams()
    params.append("q", input)
    params.append("source", from)
    params.append("target", to)
    params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")

    axios
      .post("https://libretranslate.de/translate", params, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res.data)
        setOutput(res.data.translatedText)
      })
  }

  useEffect(() => {
    axios
      .get("https://libretranslate.de/languages", {
        headers: { accept: "application/json" },
      })
      .then((res) => {
        console.log(res.data)
        setOptions(res.data)
      })
  }, [])
  return (
    <div className="text-center bg-gray-200">
      <div className="p-3 text-xl font-bold">
        From ({from}) :
        <select
          className="p-2 mx-2 h-10 mt-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          onChange={(e) => setFrom(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
        To ({to}) :
        <select
          className="h-10 mx-2 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          onChange={(e) => setTo(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <textarea
          className="bg-sky-300"
          cols="50"
          rows="8"
          onInput={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      <div>
        <textarea
          className="bg-green-300"
          cols="50"
          rows="8"
          value={output}
        ></textarea>
      </div>
      <div>
        <button
          className="mb-10 inline-block px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
          onClick={(e) => translate()}
        >
          Translate
        </button>
      </div>
    </div>
  )
}

export default Translate
