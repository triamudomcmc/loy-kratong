import {useEffect, useState} from "react";
import {loadListContext, updateListContext} from "../bridges/filter/init";
import {CheckIcon, XIcon} from "@heroicons/react/solid";
const sha512 = require('js-sha512');

const Filter = () => {

  const [list, setList] = useState([])
  const [arc, setArc] = useState([])
  const [dis, setDis] = useState([])

  const [password, setPassword] = useState("")

  const load = async () => {
    const data = await loadListContext.call({password})
    if (data.status) {
      setList(data.data.raw)
      setArc(data.data.archived)
      setDis(data.data.display)
    }
  }

  const update = async (data: any, id: string, type: "archive" | "display") => {
    const conf = confirm(`Set ${id}'s state to ${type}`)

    if (conf) {
      const res = await updateListContext.call({password, id, type})
      if (res.status) {
        alert(`Successfully set ${id} to ${res.data.type}`)
        setList((prev) => (prev.filter((i: any) => (i.id !== id))))
        if (res.data.type === "display") {
          // @ts-ignore
          setDis(prev => ([data, ...prev]))
        }else{
          // @ts-ignore
          setArc(prev => ([data, ...prev]))
        }
      }else{
        alert(`Can't update ${id}..`)
      }
    }
  }

  useEffect(() => {
    const hash = sha512.sha512(password)

    if (hash === "df1bc4b7ae78a5586b9c787ef251d7da94d50d53c6c575c7cd67bab55d96f163f12c423a0a572fdec6106a7fe9c57f0aa8717f14435e71cea1c9a5d1ce0194f9") {
      load()
    }

  },[password])

  return (
    <div className="font-ui px-6 py-6">
      <h1 className="text-xl font-medium">ตรวจสอบระบบ</h1>
      <input className="border border-black" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
      <div className="flex space-x-6 mt-4">
        <div>
          <h1 className="font-medium">Raw Entities</h1>
          <div className="flex flex-col space-y-4 mt-2">
            {list.map((item: any, i: number) => {
              return (<div className="flex justify-between space-x-4 shadow-md rounded-md w-[260px] px-4 py-2" key={`item-${i}`}>
                <div>
                  <span className="text-xs text-gray-600">ID: {item.id}</span>
                  <h1><span>ชื่อ: </span>{item.wish.name}</h1>
                  <h1><span>คำอวยพร: </span>{item.wish.content}</h1>
                </div>
                <div className="flex flex-col space-y-2 justify-center">
                  <div onClick={() => {update(item, item.id, "display")}} className="w-6 h-6 flex justify-center items-center shadow-sm rounded-md border border-gray-200">
                    <CheckIcon className="w-5 h-5 text-green-400"/>
                  </div>
                  <div onClick={() => {update(item, item.id, "archive")}} className="w-6 h-6 flex justify-center items-center shadow-sm rounded-md border border-gray-200">
                    <XIcon className="w-5 h-5 text-red-400"/>
                  </div>
                </div>
              </div>)
            })}
          </div>
        </div>
        <div>
          <h1 className="font-medium">Archived Entities</h1>
          <div className="flex flex-col space-y-4 mt-2">
            {arc.map((item: any, i: number) => {
              return (<div className="flex justify-between shadow-md rounded-md w-[260px] px-4 py-2" key={`item-${i}`}>
                <div>
                  <span className="text-xs text-gray-600">ID: {item.id}</span>
                  <h1><span>ชื่อ: </span>{item.wish.name}</h1>
                  <h1><span>คำอวยพร: </span>{item.wish.content}</h1>
                </div>
              </div>)
            })}
          </div>
        </div>
        <div>
          <h1 className="font-medium">Displayed Entities</h1>
          <div className="flex flex-col space-y-4 mt-2">
            {dis.map((item: any, i: number) => {
              return (<div className="flex justify-between shadow-md rounded-md w-[260px] px-4 py-2" key={`item-${i}`}>
                <div>
                  <span className="text-xs text-gray-600">ID: {item.id}</span>
                  <h1><span>ชื่อ: </span>{item.wish.name}</h1>
                  <h1><span>คำอวยพร: </span>{item.wish.content}</h1>
                </div>
              </div>)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
